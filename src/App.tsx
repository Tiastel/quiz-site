import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { TopicSelector } from './components/TopicSelector';
import { QuizCard } from './components/QuizCard';
import { ResultView } from './components/ResultView';
import { ApiKeyModal } from './components/ApiKeyModal';
import { BookmarksModal } from './components/BookmarksModal';
import { AchievementsModal } from './components/AchievementsModal';
import { StatsModal } from './components/StatsModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { KnowledgePackModal } from './components/KnowledgePackModal';
import { FlashcardView } from './components/FlashcardView';
import { CbtExamView } from './components/CbtExamView';
import { MistakeNoteModal } from './components/MistakeNoteModal';
import { KnowledgeRadarModal } from './components/KnowledgeRadarModal';
import { ConceptMatchModal } from './components/ConceptMatchModal';
import { useQuizEngine } from './hooks/useQuizEngine';
import { audioService } from './services/audioService';
import { hasApiKey as checkHasApiKey } from './services/geminiService';
import { CURATED_QUESTIONS, TOPIC_PRESETS } from './services/quizBank';
import { getAllLearnedQuestions } from './services/knowledgeStoreService';
import { getAllMistakes } from './services/mistakeService';
import { AlertCircle, X, Sparkles, Award, BarChart3, Keyboard, Database, BookOpen, Compass } from 'lucide-react';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('deepquiz_dark_mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bgmEnabled, setBgmEnabled] = useState(false);
  const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
  const [bookmarksModalOpen, setBookmarksModalOpen] = useState(false);
  const [achievementsModalOpen, setAchievementsModalOpen] = useState(false);
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);
  const [knowledgeModalOpen, setKnowledgeModalOpen] = useState(false);
  const [mistakeModalOpen, setMistakeModalOpen] = useState(false);
  const [radarModalOpen, setRadarModalOpen] = useState(false);
  const [matchModalOpen, setMatchModalOpen] = useState(false);
  const [mistakesCount, setMistakesCount] = useState<number>(0);
  const [hasKey, setHasKey] = useState<boolean>(() => checkHasApiKey());
  const [totalQuestionsCount, setTotalQuestionsCount] = useState<number>(1500);

  const engine = useQuizEngine();

  const refreshMistakesCount = useCallback(() => {
    setMistakesCount(getAllMistakes().length);
  }, []);

  useEffect(() => {
    refreshMistakesCount();
  }, [refreshMistakesCount, engine.screen]);

  const updateTotalQuestions = useCallback(() => {
    const curatedTotal = Object.values(CURATED_QUESTIONS).reduce(
      (acc, list) => acc + list.length,
      0
    );
    const learned = getAllLearnedQuestions();
    setTotalQuestionsCount(curatedTotal + learned.length);
  }, []);

  useEffect(() => {
    updateTotalQuestions();
  }, [updateTotalQuestions]);

  // Apply dark mode class to root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('deepquiz_dark_mode', darkMode.toString());
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    audioService.playClick();
    setDarkMode((prev) => !prev);
  };

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    audioService.setEnabled(nextVal);
    if (nextVal) {
      audioService.playClick();
    }
  };

  const handleToggleBgm = useCallback(() => {
    audioService.playClick();
    setBgmEnabled((prev) => {
      const nextVal = !prev;
      audioService.setBgmEnabled(nextVal);
      return nextVal;
    });
  }, []);

  // Global keyboard shortcuts (?, m, Escape)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        audioService.playClick();
        setShortcutsModalOpen((prev) => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        handleToggleBgm();
      } else if (e.key === 'Escape') {
        setApiKeyModalOpen(false);
        setBookmarksModalOpen(false);
        setAchievementsModalOpen(false);
        setStatsModalOpen(false);
        setShortcutsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [handleToggleBgm]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Navigation Header */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        bgmEnabled={bgmEnabled}
        onToggleBgm={handleToggleBgm}
        hasApiKey={hasKey}
        onOpenApiKeyModal={() => setApiKeyModalOpen(true)}
        onGoHome={engine.goHome}
        userProgress={engine.userProgress}
        onOpenAchievements={() => setAchievementsModalOpen(true)}
        onOpenBookmarks={() => setBookmarksModalOpen(true)}
        onOpenStats={() => setStatsModalOpen(true)}
        onOpenShortcuts={() => setShortcutsModalOpen(true)}
        onOpenKnowledgePack={() => setKnowledgeModalOpen(true)}
        onOpenMistakes={() => {
          refreshMistakesCount();
          setMistakeModalOpen(true);
        }}
        mistakesCount={mistakesCount}
        onOpenRadar={() => setRadarModalOpen(true)}
        totalQuestionsCount={totalQuestionsCount}
        onOpenConceptMatch={() => setMatchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-6 relative">
        {/* Level Up Notification Toast */}
        {engine.showLevelUpToast && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-pop">
            <div className="p-4 rounded-3xl bg-gradient-to-r from-amber-500 via-purple-500 to-indigo-600 text-white shadow-2xl flex items-center gap-3 border border-amber-300/40">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shrink-0">
                <Sparkles className="w-6 h-6 fill-amber-300 text-amber-300 animate-spin" />
              </div>
              <div>
                <strong className="block font-black text-sm sm:text-base">
                  축하합니다! 레벨 업! 🎉
                </strong>
                <span className="text-xs text-amber-100">
                  Lv.{engine.userProgress.level} {engine.userProgress.levelTitle} 달성!
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Error notification banner if any */}
        {engine.errorMessage && (
          <div className="max-w-xl mx-auto px-4 mb-4 w-full">
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm flex items-start justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                <span>{engine.errorMessage}</span>
              </div>
              <button
                onClick={() => engine.goHome()}
                className="text-rose-500 hover:text-rose-700 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Screen Routing */}
        {engine.screen === 'home' && (
          <TopicSelector
            currentTopic={engine.topic}
            onSelectTopic={engine.setTopic}
            settings={engine.settings}
            onUpdateSettings={engine.updateSettings}
            onStartQuiz={() => engine.startQuiz()}
            isLoading={engine.isLoading}
            hasApiKey={hasKey}
            onOpenApiKeyModal={() => setApiKeyModalOpen(true)}
            onOpenConceptMatch={() => setMatchModalOpen(true)}
            onOpenMistakes={() => {
              refreshMistakesCount();
              setMistakeModalOpen(true);
            }}
            mistakesCount={mistakesCount}
          />
        )}

        {engine.screen === 'cbt' && engine.questions.length > 0 && (
          <CbtExamView
            topic={engine.topic}
            questions={engine.questions}
            totalTimeMinutes={engine.settings.cbtTotalMinutes || 15}
            onSubmitExam={engine.submitCbtExam}
            onExitExam={engine.goHome}
          />
        )}

        {engine.screen === 'quiz' && engine.currentQuestion && (
          <QuizCard
            key={engine.currentQuestion.id}
            question={engine.currentQuestion}
            currentIndex={engine.currentIndex}
            totalQuestions={engine.totalQuestions}
            score={engine.score}
            streak={engine.streak}
            timeLimitSeconds={engine.settings.timeLimitSeconds}
            mode={engine.settings.mode}
            lives={engine.lives}
            timeAttackSecondsLeft={engine.timeAttackSecondsLeft}
            onAnswer={engine.submitAnswer}
            onNextQuestion={engine.nextQuestion}
            isLastQuestion={engine.currentIndex + 1 >= engine.totalQuestions}
          />
        )}

        {engine.screen === 'flashcard' && engine.questions.length > 0 && (
          <FlashcardView
            questions={engine.questions}
            topic={engine.topic}
            onFinish={engine.goHome}
          />
        )}

        {engine.screen === 'result' && engine.result && (
          <ResultView
            result={engine.result}
            onRestartSameTopic={engine.restartSameTopic}
            onRetryWrongAnswers={engine.retryWrongAnswers}
            onGoHome={engine.goHome}
            onOpenMistakes={() => {
              refreshMistakesCount();
              setMistakeModalOpen(true);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            DeepQuiz · 상식부터 심오한 지식까지 탐구하는 지능형 4지선다 퀴즈 플랫폼
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
            <button
              onClick={() => {
                audioService.playClick();
                setShortcutsModalOpen(true);
              }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1"
            >
              <Keyboard className="w-3.5 h-3.5 text-slate-400" />
              <span>단축키 [?]</span>
            </button>
            <span>·</span>
            <button
              onClick={() => {
                audioService.playClick();
                setStatsModalOpen(true);
              }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1"
            >
              <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
              <span>통계</span>
            </button>
            <span>·</span>
            <button
              onClick={() => {
                audioService.playClick();
                setAchievementsModalOpen(true);
              }}
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>업적</span>
            </button>
            <span>·</span>
            <button
              onClick={() => {
                audioService.playClick();
                setRadarModalOpen(true);
              }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <Compass className="w-3.5 h-3.5 text-indigo-500" />
              <span>지식 레이더</span>
            </button>
            <span>·</span>
            <button
              onClick={() => {
                audioService.playClick();
                refreshMistakesCount();
                setMistakeModalOpen(true);
              }}
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors inline-flex items-center gap-1 font-semibold text-rose-500"
            >
              <BookOpen className="w-3.5 h-3.5 text-rose-500" />
              <span>오답 정복소{mistakesCount > 0 ? ` (${mistakesCount})` : ''}</span>
            </button>
            <span>·</span>
            <button
              onClick={() => {
                audioService.playClick();
                setKnowledgeModalOpen(true);
              }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1 font-semibold"
            >
              <Database className="w-3.5 h-3.5 text-indigo-500" />
              <span>지식 저장소 ({totalQuestionsCount})</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ApiKeyModal
        isOpen={apiKeyModalOpen}
        onClose={() => setApiKeyModalOpen(false)}
        onKeyChange={() => setHasKey(checkHasApiKey())}
      />

      <BookmarksModal
        isOpen={bookmarksModalOpen}
        onClose={() => setBookmarksModalOpen(false)}
        onStartQuizWithQuestions={engine.startQuizWithQuestions}
      />

      <AchievementsModal
        isOpen={achievementsModalOpen}
        onClose={() => setAchievementsModalOpen(false)}
        progress={engine.userProgress}
      />

      <StatsModal
        isOpen={statsModalOpen}
        onClose={() => setStatsModalOpen(false)}
        progress={engine.userProgress}
      />

      <ShortcutsModal
        isOpen={shortcutsModalOpen}
        onClose={() => setShortcutsModalOpen(false)}
      />

      <KnowledgePackModal
        isOpen={knowledgeModalOpen}
        onClose={() => setKnowledgeModalOpen(false)}
        onStoreUpdated={updateTotalQuestions}
      />

      {mistakeModalOpen && (
        <MistakeNoteModal
          onClose={() => {
            setMistakeModalOpen(false);
            refreshMistakesCount();
          }}
          onStartQuizWithQuestions={(targetQuestions) => {
            engine.startQuizWithQuestions(targetQuestions);
          }}
        />
      )}

      {radarModalOpen && (
        <KnowledgeRadarModal
          onClose={() => setRadarModalOpen(false)}
          onStartTopicQuiz={(targetTopic) => {
            engine.setTopic(targetTopic);
            engine.startQuiz(targetTopic);
          }}
        />
      )}

      {matchModalOpen && (
        <ConceptMatchModal
          isOpen={matchModalOpen}
          onClose={() => setMatchModalOpen(false)}
          topicId={
            TOPIC_PRESETS.find((p) => p.title === engine.topic || p.id === engine.topic)?.id ||
            'space'
          }
          topicTitle={engine.topic || '우주 & 천문학'}
        />
      )}
    </div>
  );
}

export default App;
