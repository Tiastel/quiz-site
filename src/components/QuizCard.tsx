import { useState, useEffect, useRef, useCallback } from 'react';
import type React from 'react';
import {
  Sparkles,
  Clock,
  Flame,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Scissors,
  BookOpen,
  Bookmark,
  Heart,
  Zap,
  Compass,
  Volume2,
  VolumeX,
  FileText,
} from 'lucide-react';

import type { Question, DifficultyLevel, GameMode } from '../types/quiz';
import { audioService } from '../services/audioService';
import { speechService } from '../services/speechService';
import {
  isQuestionBookmarked,
  toggleBookmarkQuestion,
  addBonusXp,
} from '../services/progressService';
import { TailQuestionModal } from './TailQuestionModal';
import { getOptionExplanation } from '../services/optionExplanationService';
import { formatNaturalKorean } from '../utils/koreanUtils';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  streak: number;
  timeLimitSeconds: number;
  mode: GameMode;
  lives?: number; // for survival mode
  timeAttackSecondsLeft?: number; // for timeattack mode
  onAnswer: (selectedIndex: number, timeSpentSeconds: number) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

const DIFFICULTY_STYLES: Record<
  DifficultyLevel,
  { label: string; bg: string; text: string; border: string; icon: string }
> = {
  easy: {
    label: '기초 상식',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800',
    icon: '🌱',
  },
  medium: {
    label: '일반 지식',
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
    icon: '📘',
  },
  hard: {
    label: '심화 지식',
    bg: 'bg-purple-50 dark:bg-purple-950/40',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800',
    icon: '🔥',
  },
  profound: {
    label: '심오한 지식',
    bg: 'bg-amber-50 dark:bg-amber-950/50',
    text: 'text-amber-800 dark:text-amber-300 font-extrabold',
    border: 'border-amber-400 dark:border-amber-600 shadow-sm shadow-amber-500/20',
    icon: '👑',
  },
};

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  score,
  streak,
  timeLimitSeconds,
  mode,
  lives = 3,
  timeAttackSecondsLeft,
  onAnswer,
  onNextQuestion,
  isLastQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [hintUsed, setHintUsed] = useState(false);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimitSeconds);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => isQuestionBookmarked(question.id));
  const [showBonusToast, setShowBonusToast] = useState(false);
  const [tailModalOpen, setTailModalOpen] = useState(false);
  const [tailOptionText, setTailOptionText] = useState('');
  const [tailOptionIndex, setTailOptionIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleToggleSpeakQuestion = () => {
    if (isSpeaking) {
      speechService.stop();
      setIsSpeaking(false);
    } else {
      audioService.playClick();
      setIsSpeaking(true);
      const textToSpeak = `문제 ${currentIndex + 1}번. ${question.question}. 1번 ${question.options[0]}. 2번 ${question.options[1]}. 3번 ${question.options[2]}. 4번 ${question.options[3]}.`;
      speechService.speak(textToSpeak, () => setIsSpeaking(false));
    }
  };

  const handleSpeakExplanation = () => {
    if (isSpeaking) {
      speechService.stop();
      setIsSpeaking(false);
    } else {
      audioService.playClick();
      setIsSpeaking(true);
      const textToSpeak = `정답 해설. ${question.explanation}. ${question.deepKnowledge || ''}`;
      speechService.speak(textToSpeak, () => setIsSpeaking(false));
    }
  };

  const handleOpenTailQuestion = (optionIdx: number, optionTxt: string) => {
    audioService.playClick();
    setTailOptionIndex(optionIdx);
    setTailOptionText(optionTxt);
    setTailModalOpen(true);
  };

  const handleBonusXp = (amount: number) => {
    addBonusXp(amount);
    setShowBonusToast(true);
    setTimeout(() => setShowBonusToast(false), 3000);
  };

  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const diffStyle = DIFFICULTY_STYLES[question.difficulty] || DIFFICULTY_STYLES.medium;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Handle timeout
  const handleTimeout = useCallback(() => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setSelectedOption(-1); // timeout
    if (mode === 'survival') {
      audioService.playHeartLost();
    } else {
      audioService.playWrong();
    }
    onAnswer(-1, timeLimitSeconds);
  }, [hasAnswered, mode, onAnswer, timeLimitSeconds]);

  // Option selection
  const handleSelect = useCallback((index: number) => {
    if (hasAnswered || eliminatedOptions.includes(index)) return;

    if (timerRef.current) clearInterval(timerRef.current);

    const timeSpent = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
    const isCorrect = index === question.correctIndex;

    setSelectedOption(index);
    setHasAnswered(true);

    if (isCorrect) {
      if (mode === 'timeattack') {
        setShowBonusToast(true);
        setTimeout(() => setShowBonusToast(false), 1200);
      }
      if (streak >= 2) {
        audioService.playStreak();
      } else {
        audioService.playCorrect();
      }
    } else {
      if (mode === 'survival') {
        audioService.playHeartLost();
      } else {
        audioService.playWrong();
      }
    }

    onAnswer(index, timeSpent);
  }, [hasAnswered, eliminatedOptions, question.correctIndex, mode, streak, onAnswer]);

  // Timer countdown on question mount
  useEffect(() => {
    startTimeRef.current = Date.now();
    speechService.stop();
    setIsSpeaking(false);

    if (timerRef.current) clearInterval(timerRef.current);

    if (mode !== 'timeattack' && timeLimitSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleTimeout();
            return 0;
          }
          if (prev <= 6) {
            audioService.playTick();
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      speechService.stop();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id, timeLimitSeconds, mode, handleTimeout]);

  // Toggle bookmark
  const handleToggleBookmark = useCallback(() => {
    audioService.playClick();
    const nextVal = toggleBookmarkQuestion(question.id);
    setIsBookmarked(nextVal);
  }, [question.id]);

  // 50:50 Lifeline
  const handleFiftyFifty = useCallback(() => {
    if (fiftyFiftyUsed || hasAnswered) return;
    audioService.playLifeline();
    setFiftyFiftyUsed(true);

    const wrongIndices = [0, 1, 2, 3].filter((idx) => idx !== question.correctIndex);
    const toEliminate = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
    setEliminatedOptions(toEliminate);
  }, [fiftyFiftyUsed, hasAnswered, question.correctIndex]);

  // Hint Lifeline
  const handleHint = useCallback(() => {
    if (hintUsed || hasAnswered) return;
    audioService.playLifeline();
    setHintUsed(true);
  }, [hintUsed, hasAnswered]);

  // Keyboard navigation (1, 2, 3, 4, Enter, Space, F, H, B)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (!hasAnswered) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (idx >= 0 && idx < question.options.length) {
            handleSelect(idx);
          }
        } else if (e.key === 'f' || e.key === 'F') {
          handleFiftyFifty();
        } else if (e.key === 'h' || e.key === 'H') {
          handleHint();
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          audioService.playClick();
          onNextQuestion();
        }
      }

      if (e.key === 'b' || e.key === 'B') {
        handleToggleBookmark();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    hasAnswered,
    question.options.length,
    handleSelect,
    handleFiftyFifty,
    handleHint,
    handleToggleBookmark,
    onNextQuestion,
  ]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5">
        {/* Progress & Stats Bar */}
        <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Question Index Badge */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
              문제 {currentIndex + 1}
            </span>
            <span className="text-slate-400 dark:text-slate-600 font-medium">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              {mode === 'survival' ? '무한' : totalQuestions}
            </span>
          </div>

          {/* Difficulty Badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border}`}
          >
            <span>{diffStyle.icon}</span>
            <span>{question.difficultyLabel}</span>
          </div>

          {/* Survival Lives or Streak or TimeAttack */}
          <div className="flex items-center gap-2 sm:gap-3">
            {mode === 'survival' && (
              <div className="flex items-center gap-1 text-rose-500 font-bold">
                {[1, 2, 3].map((heartIndex) => (
                  <Heart
                    key={heartIndex}
                    className={`w-4 h-4 ${
                      heartIndex <= lives
                        ? 'fill-rose-500 text-rose-500'
                        : 'text-slate-300 dark:text-slate-700'
                    }`}
                  />
                ))}
              </div>
            )}

            {streak >= 2 && (
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-xs animate-bounce">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                <span>{streak}연속!</span>
              </div>
            )}

            <div className="font-black text-slate-800 dark:text-slate-200">
              {score.toLocaleString()}{' '}
              <span className="text-[11px] font-medium text-slate-400">점</span>
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 rounded-full"
            style={{ width: `${mode === 'survival' ? Math.min(100, (currentIndex / 20) * 100) : progressPercent}%` }}
          />
        </div>

        {/* Timer, Mode Badges & Lifelines row */}
        <div className="flex items-center justify-between pt-1">
          {mode === 'timeattack' ? (
            <div className="flex items-center gap-1.5 text-xs font-bold relative">
              <Zap className="w-4 h-4 text-cyan-500 animate-pulse" />
              <span
                className={`font-black text-base ${
                  (timeAttackSecondsLeft ?? 60) <= 10 ? 'text-rose-500 animate-ping' : 'text-cyan-600 dark:text-cyan-400'
                }`}
              >
                {timeAttackSecondsLeft}초
              </span>
              {showBonusToast && (
                <span className="absolute -top-5 left-10 text-xs font-black text-emerald-500 animate-pop">
                  +3초! ⚡
                </span>
              )}
            </div>
          ) : timeLimitSeconds > 0 ? (
            <div className="flex items-center gap-1.5 text-xs font-bold">
              <Clock
                className={`w-4 h-4 ${
                  timeLeft <= 5 ? 'text-rose-500 animate-pulse' : 'text-slate-400'
                }`}
              />
              <span
                className={
                  timeLeft <= 5
                    ? 'text-rose-500 font-black text-sm'
                    : 'text-slate-600 dark:text-slate-300'
                }
              >
                {timeLeft}초 남음
              </span>
            </div>
          ) : (
            <div className="text-[11px] text-slate-400 font-medium">여유로운 사유 모드 ☕</div>
          )}

          {/* Lifelines & Bookmark */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleFiftyFifty}
              disabled={fiftyFiftyUsed || hasAnswered}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                fiftyFiftyUsed
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400 border-transparent'
                  : 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50'
              }`}
              title="오답 2개를 지워주는 50:50 찬스"
            >
              <Scissors className="w-3 h-3" />
              <span>50:50</span>
            </button>

            <button
              onClick={handleHint}
              disabled={hintUsed || hasAnswered}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                hintUsed
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400 border-transparent'
                  : 'bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 hover:bg-purple-50'
              }`}
              title="힌트 키워드 보기"
            >
              <HelpCircle className="w-3 h-3" />
              <span>힌트</span>
            </button>

            <button
              onClick={handleToggleBookmark}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isBookmarked ? '보관함에서 제거' : '보관함에 저장'}
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-400 hover:text-amber-400'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={handleToggleSpeakQuestion}
              className={`p-1 rounded-lg transition-colors ${
                isSpeaking
                  ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isSpeaking ? '음성 낭독 중지' : '한국어 음성으로 문제 듣기 (TTS)'}
            >
              {isSpeaking ? (
                <VolumeX className="w-4 h-4 text-indigo-600 animate-pulse" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Hint Box (if triggered) */}
        {hintUsed && !hasAnswered && (
          <div className="mt-2 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-200 animate-pop">
            💡 <strong>힌트:</strong> 정답은 <em>"{question.options[question.correctIndex].slice(0, 8)}..."</em>와 밀접한 개념입니다. 핵심 맥락을 상기해보세요!
          </div>
        )}
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        {/* Question Text */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            {question.topic}
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
            {formatNaturalKorean(question.question)}
          </h2>
        </div>

        {/* 4 Choices */}
        <div className="space-y-3 pt-2">
          {question.options.map((option, idx) => {
            const isEliminated = eliminatedOptions.includes(idx);
            const isCorrect = idx === question.correctIndex;
            const isSelected = idx === selectedOption;

            let optionStyle =
              'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30';

            if (isEliminated) {
              optionStyle =
                'opacity-30 line-through cursor-not-allowed border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/20 text-slate-400';
            } else if (hasAnswered) {
              if (isCorrect) {
                optionStyle =
                  'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/30';
              } else if (isSelected) {
                optionStyle =
                  'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/30 animate-shake';
              } else {
                optionStyle =
                  'opacity-50 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/20 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={hasAnswered || isEliminated}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between group active:scale-[0.99] ${optionStyle}`}
              >
                <div className="flex items-center gap-3.5 pr-2">
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      hasAnswered && isCorrect
                        ? 'bg-emerald-500 text-white'
                        : hasAnswered && isSelected
                        ? 'bg-rose-500 text-white'
                        : 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-sm sm:text-base leading-snug">
                    {formatNaturalKorean(option)}
                  </span>
                </div>

                {hasAnswered && (
                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenTailQuestion(idx, option);
                      }}
                      className="px-2 py-1 rounded-lg text-[11px] font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors flex items-center gap-1 shadow-sm"
                      title={`선지 "${option}" 꼬리 질문 풀기`}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>꼬리 질문</span>
                    </button>
                    {isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 animate-pop" />
                    )}
                    {isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500" />
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Box (Reveals after answer) */}
        {hasAnswered && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-pop">
            {/* Answer Verdict */}
            <div
              className={`p-4 rounded-2xl flex items-center gap-3 ${
                selectedOption === question.correctIndex
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800'
              }`}
            >
              {selectedOption === question.correctIndex ? (
                <>
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <strong className="block font-bold text-sm">정답입니다! 🎉</strong>
                    <span className="text-xs">
                      정확한 통찰력을 보여주셨습니다.
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-rose-500 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 justify-between flex-wrap">
                      <strong className="block font-bold text-sm">
                        {selectedOption === -1 ? '시간 초과!' : '아쉽지만 오답입니다!'}
                      </strong>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-[10px] font-black">
                        <BookOpen className="w-3 h-3" /> 오답노트 자동 저장됨
                      </span>
                    </div>
                    <span className="text-xs">
                      정답은 <strong>{question.correctIndex + 1}번: {formatNaturalKorean(question.options[question.correctIndex])}</strong> 입니다.
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Core Explanation */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-sm leading-relaxed space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  <span>정답 해설</span>
                </div>
                <button
                  type="button"
                  onClick={handleSpeakExplanation}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1 font-semibold"
                  title="해설 음성으로 듣기"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>해설 듣기</span>
                </button>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                {formatNaturalKorean(question.explanation)}
              </p>
            </div>

            {/* Deep Knowledge Pill */}
            {question.deepKnowledge && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-300/40 dark:border-amber-700/40 space-y-1.5">
                <div className="flex items-center gap-1.5 font-extrabold text-amber-800 dark:text-amber-300 text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>심오한 지식 한 걸음 더 (Deep Knowledge)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {formatNaturalKorean(question.deepKnowledge)}
                </p>
                {question.sourceOrTrivia && (
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-1">
                    출처/참고: {question.sourceOrTrivia}
                  </div>
                )}
              </div>
            )}

            {/* EBSi / MegaStudy Option Trap Breakdown */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <FileText className="w-4 h-4 text-indigo-500" />
                  <span>EBSi형 선지 해체 분석 (매력적인 오답 함정 파헤치기)</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold">
                  출제위원 분석
                </span>
              </div>
              <div className="space-y-1.5 pt-1">
                {question.options.map((opt, oIdx) => {
                  const isCorrectOpt = oIdx === question.correctIndex;
                  const reason = getOptionExplanation(question, oIdx);
                  return (
                    <div
                      key={oIdx}
                      className={`text-xs p-2.5 rounded-xl border flex items-start gap-2.5 ${
                        isCorrectOpt
                          ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                          : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span
                        className={`px-1.5 py-0.5 rounded font-black text-[10px] shrink-0 ${
                          isCorrectOpt
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        {isCorrectOpt ? '정답' : '오답'} {oIdx + 1}
                      </span>
                      <div className="flex-1 space-y-0.5">
                        <span className="font-semibold block">{formatNaturalKorean(opt)}</span>
                        <span className="text-[11px] opacity-90 block leading-relaxed">{reason}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Tail Questions Deep Dive Area */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-300">
                  <Compass className="w-4 h-4 text-indigo-500 animate-spin" style={{ animationDuration: '10s' }} />
                  <span>선지별 연계 꼬리 질문 탐구 (Deep Dive Rabbit Hole)</span>
                </div>
                <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-300/50">
                  +30 XP 보너스
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                선지를 클릭하면 해당 개념에 특화된 심화 꼬리 질문이 즉시 펼쳐집니다:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleOpenTailQuestion(i, opt)}
                    className="p-2.5 rounded-xl text-left text-xs font-semibold bg-white dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 text-slate-700 dark:text-slate-200 shadow-sm transition-all flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-1.5">{i + 1}.</span>
                      {opt}
                    </span>
                    <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold shrink-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                      꼬리 풀기 ➡️
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Next Question CTA */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  audioService.playClick();
                  onNextQuestion();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/25 active:scale-95 transition-all"
              >
                <span>
                  {mode === 'survival' && lives <= 0
                    ? '게임 오버 - 결과 보기 💔'
                    : isLastQuestion
                    ? '최종 결과 확인하기 🏆'
                    : '다음 문제 ➡️'}
                </span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-mono hidden sm:inline">
                  Enter
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tail Question Modal */}
      <TailQuestionModal
        isOpen={tailModalOpen}
        onClose={() => setTailModalOpen(false)}
        parentQuestion={question}
        selectedOptionText={tailOptionText}
        selectedOptionIndex={tailOptionIndex}
        onBonusXpEarned={handleBonusXp}
        onSwitchOption={(newIdx, newTxt) => {
          setTailOptionIndex(newIdx);
          setTailOptionText(newTxt);
        }}
      />
    </div>
  );
};
