import { useState, useCallback, useEffect, useRef } from 'react';
import type {
  Question,
  QuizSettings,
  UserAnswer,
  QuizResult,
  UserProgress,
  Achievement,
  GameMode,
} from '../types/quiz';
import { generateQuiz, calculateQuizResult } from '../services/quizGenerator';
import { loadUserProgress, recordQuizCompletion } from '../services/progressService';
import { audioService } from '../services/audioService';
import { recordMistake, recordCorrectReview } from '../services/mistakeService';

const DEFAULT_SETTINGS: QuizSettings = {
  mode: 'classic',
  questionCount: 10,
  difficultyMode: 'progressive',
  timeLimitSeconds: 0,
  cbtTotalMinutes: 15,
  soundEnabled: true,
  bgmEnabled: false,
  autoAdvance: false,
};

export function useQuizEngine() {
  const [screen, setScreen] = useState<'home' | 'quiz' | 'result' | 'flashcard' | 'cbt'>('home');
  const [topic, setTopic] = useState('우주 & 천문학');
  const [settings, setSettings] = useState<QuizSettings>(DEFAULT_SETTINGS);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  // Survival Mode Lives
  const [lives, setLives] = useState(3);

  // Time Attack 60s Clock
  const [timeAttackSecondsLeft, setTimeAttackSecondsLeft] = useState(60);
  const timeAttackTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  // User Progress & Gamification
  const [userProgress, setUserProgress] = useState<UserProgress>(loadUserProgress());
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const [showLevelUpToast, setShowLevelUpToast] = useState(false);

  // Update Settings
  const updateSettings = useCallback((newSettings: Partial<QuizSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }, []);

  // Finalize Quiz
  const finalizeQuiz = useCallback(() => {
    if (timeAttackTimerRef.current) clearInterval(timeAttackTimerRef.current);

    const finalResult = calculateQuizResult(
      settings.mode === 'daily' ? '오늘의 퀴즈 챌린지' : topic,
      answers,
      settings.mode
    );

    // Record progress and achievements
    const { updatedProgress, newAchievements: unlocked, leveledUp } = recordQuizCompletion(finalResult);
    setUserProgress(updatedProgress);
    setNewAchievements(unlocked);

    if (leveledUp) {
      setShowLevelUpToast(true);
      audioService.playLevelUp();
      setTimeout(() => setShowLevelUpToast(false), 4000);
    }

    setResult(finalResult);
    setScreen('result');
  }, [answers, settings.mode, topic]);

  // Time Attack interval countdown
  useEffect(() => {
    if (screen === 'quiz' && settings.mode === 'timeattack') {
      if (timeAttackTimerRef.current) clearInterval(timeAttackTimerRef.current);
      timeAttackTimerRef.current = setInterval(() => {
        setTimeAttackSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timeAttackTimerRef.current!);
            return 0;
          }
          if (prev <= 6) {
            audioService.playTick();
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timeAttackTimerRef.current) clearInterval(timeAttackTimerRef.current);
      };
    }
  }, [screen, settings.mode]);

  // When Time Attack hits 0, finish game
  useEffect(() => {
    if (screen === 'quiz' && settings.mode === 'timeattack' && timeAttackSecondsLeft === 0) {
      finalizeQuiz();
    }
  }, [screen, settings.mode, timeAttackSecondsLeft, finalizeQuiz]);

  // Start Quiz
  const startQuiz = useCallback(
    async (topicOverride?: string) => {
      const activeTopic = topicOverride || topic;
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const { questions: generated } = await generateQuiz(activeTopic, settings);

        if (!generated || generated.length === 0) {
          throw new Error('퀴즈 문제를 생성하지 못했습니다. 다시 시도해주세요.');
        }

        setQuestions(generated);
        setCurrentIndex(0);
        setScore(0);
        setStreak(0);
        setAnswers([]);
        setResult(null);
        setLives(3);
        setTimeAttackSecondsLeft(60);

        if (settings.mode === 'flashcard') {
          setScreen('flashcard');
        } else if (settings.mode === 'cbt') {
          setScreen('cbt');
        } else {
          setScreen('quiz');
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : '퀴즈 생성 중 오류가 발생했습니다.';
        setErrorMessage(msg);
      } finally {
        setIsLoading(false);
      }
    },
    [topic, settings]
  );

  // Start with custom questions (for bookmarks or wrong answers review)
  const startQuizWithQuestions = useCallback(
    (customQuestions: Question[], modeOverride?: GameMode) => {
      if (!customQuestions || customQuestions.length === 0) return;
      setQuestions(customQuestions);
      setCurrentIndex(0);
      setScore(0);
      setStreak(0);
      setAnswers([]);
      setResult(null);
      setLives(3);
      setTimeAttackSecondsLeft(60);
      const targetMode = modeOverride || settings.mode;
      if (targetMode === 'cbt') {
        setScreen('cbt');
      } else if (targetMode === 'flashcard') {
        setScreen('flashcard');
      } else {
        setScreen('quiz');
      }
    },
    [settings.mode]
  );

  // Submit Answer for active question
  const submitAnswer = useCallback(
    (selectedIndex: number, timeSpentSeconds: number) => {
      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      const isCorrect = selectedIndex === currentQ.correctIndex;

      // Calculate score points with difficulty weights
      let basePoints = 100;
      if (currentQ.difficulty === 'medium') basePoints = 200;
      if (currentQ.difficulty === 'hard') basePoints = 350;
      if (currentQ.difficulty === 'profound') basePoints = 500;

      const speedBonus = Math.max(0, Math.floor((15 - Math.min(15, timeSpentSeconds)) * 3));
      const nextStreak = isCorrect ? streak + 1 : 0;
      const streakBonus = Math.min(2.0, 1 + nextStreak * 0.1);

      if (isCorrect) {
        recordCorrectReview(currentQ.id);
        const pointsAwarded = Math.floor((basePoints + speedBonus) * streakBonus);
        setScore((prev) => prev + pointsAwarded);

        // Time attack: add 3 seconds bonus
        if (settings.mode === 'timeattack') {
          setTimeAttackSecondsLeft((prev) => Math.min(120, prev + 3));
        }
      } else {
        recordMistake(currentQ);
        // Survival mode: lose a heart
        if (settings.mode === 'survival') {
          setLives((prev) => prev - 1);
        }
      }

      setStreak(nextStreak);

      const userAnswer: UserAnswer = {
        questionId: currentQ.id,
        question: currentQ,
        selectedIndex,
        isCorrect,
        timeSpentSeconds,
      };

      setAnswers((prev) => [...prev, userAnswer]);
    },
    [questions, currentIndex, streak, settings.mode]
  );

  // Submit CBT Exam directly with all answers
  const submitCbtExam = useCallback(
    (cbtAnswers: UserAnswer[]) => {
      const finalResult = calculateQuizResult(
        `CBT 실전 모의고사 (${topic})`,
        cbtAnswers,
        'cbt'
      );
      cbtAnswers.forEach((ans) => {
        if (!ans.isCorrect) {
          recordMistake(ans.question);
        } else {
          recordCorrectReview(ans.question.id);
        }
      });

      const { updatedProgress, newAchievements: unlocked, leveledUp } = recordQuizCompletion(finalResult);
      setUserProgress(updatedProgress);
      setNewAchievements(unlocked);
      if (leveledUp) {
        setShowLevelUpToast(true);
        audioService.playLevelUp();
        setTimeout(() => setShowLevelUpToast(false), 4000);
      }
      setAnswers(cbtAnswers);
      setResult(finalResult);
      setScreen('result');
    },
    [topic]
  );

  // Move to Next Question or Finalize
  const nextQuestion = useCallback(() => {
    // Survival mode: if lives depleted, game over!
    if (settings.mode === 'survival' && lives <= 0) {
      finalizeQuiz();
      return;
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finalizeQuiz();
    }
  }, [currentIndex, questions.length, settings.mode, lives, finalizeQuiz]);

  // Restart with Same Topic
  const restartSameTopic = useCallback(() => {
    startQuiz(topic);
  }, [startQuiz, topic]);

  // Retry Wrong Answers Only
  const retryWrongAnswers = useCallback(
    (wrongQuestions: Question[]) => {
      startQuizWithQuestions(wrongQuestions);
    },
    [startQuizWithQuestions]
  );

  // Go Home
  const goHome = useCallback(() => {
    if (timeAttackTimerRef.current) clearInterval(timeAttackTimerRef.current);
    setScreen('home');
    setResult(null);
    setAnswers([]);
    setUserProgress(loadUserProgress());
  }, []);

  return {
    screen,
    topic,
    setTopic,
    settings,
    updateSettings,
    questions,
    currentQuestion: questions[currentIndex] || null,
    currentIndex,
    totalQuestions: questions.length,
    score,
    streak,
    answers,
    lives,
    timeAttackSecondsLeft,
    isLoading,
    errorMessage,
    result,
    userProgress,
    newAchievements,
    showLevelUpToast,
    startQuiz,
    startQuizWithQuestions,
    submitAnswer,
    submitCbtExam,
    nextQuestion,
    restartSameTopic,
    retryWrongAnswers,
    goHome,
  };
}
