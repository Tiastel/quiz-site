import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import type React from 'react';
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  LayoutGrid,
  FileText,
  Send,
  Printer,
  Edit3,
  Trash2,
  X,
  Headphones,
  HelpCircle,
} from 'lucide-react';
import type { Question, UserAnswer, CbtAnswerState } from '../types/quiz';
import { audioService } from '../services/audioService';

interface CbtExamViewProps {
  topic: string;
  questions: Question[];
  totalTimeMinutes?: number;
  onSubmitExam: (answers: UserAnswer[]) => void;
  onExitExam: () => void;
}

export const CbtExamView: React.FC<CbtExamViewProps> = ({
  topic,
  questions,
  totalTimeMinutes = 15,
  onSubmitExam,
  onExitExam,
}) => {
  const totalSeconds = totalTimeMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'paper'>('single');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [focusNoise, setFocusNoise] = useState<'none' | 'pink' | 'rain' | 'library'>('none');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [showScratchpad, setShowScratchpad] = useState(false);
  const [scratchNote, setScratchNote] = useState('');

  // Per-question CBT answer state
  const [answerStates, setAnswerStates] = useState<Record<number, CbtAnswerState>>(() => {
    const init: Record<number, CbtAnswerState> = {};
    questions.forEach((_, idx) => {
      init[idx] = { selectedIndex: -1, isFlagged: false, timeSpentSeconds: 0 };
    });
    return init;
  });

  // Track time spent per active question in single mode
  const questionStartTimeRef = useRef<number>(Date.now());

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        if (prev === 300) {
          // 5 minutes warning sound
          audioService.playNotification();
        }
        if (prev <= 60 && prev % 10 === 0) {
          audioService.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Time-up auto submit handler
  useEffect(() => {
    if (secondsLeft === 0) {
      handleFinalSubmit();
    }
  }, [secondsLeft]);

  // Record time spent on current question when navigating
  const recordCurrentTimeSpent = useCallback(() => {
    const elapsed = Math.round((Date.now() - questionStartTimeRef.current) / 1000);
    questionStartTimeRef.current = Date.now();
    setAnswerStates((prev) => ({
      ...prev,
      [currentIndex]: {
        ...prev[currentIndex],
        timeSpentSeconds: (prev[currentIndex]?.timeSpentSeconds || 0) + elapsed,
      },
    }));
  }, [currentIndex]);

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    audioService.playClick();
    setAnswerStates((prev) => {
      const cur = prev[qIdx] || { selectedIndex: -1, isFlagged: false, timeSpentSeconds: 0 };
      // Toggle if already selected, or select new
      const nextSelected = cur.selectedIndex === optIdx ? -1 : optIdx;
      return {
        ...prev,
        [qIdx]: { ...cur, selectedIndex: nextSelected },
      };
    });
  };

  const handleToggleFlag = (qIdx: number) => {
    audioService.playClick();
    setAnswerStates((prev) => {
      const cur = prev[qIdx] || { selectedIndex: -1, isFlagged: false, timeSpentSeconds: 0 };
      return {
        ...prev,
        [qIdx]: { ...cur, isFlagged: !cur.isFlagged },
      };
    });
  };

  const navigateToQuestion = (targetIdx: number) => {
    if (targetIdx < 0 || targetIdx >= questions.length) return;
    recordCurrentTimeSpent();
    setCurrentIndex(targetIdx);
    if (viewMode === 'paper') {
      const el = document.getElementById(`cbt-question-${targetIdx}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Focus Noise unmount cleanup
  useEffect(() => {
    return () => {
      audioService.stopFocusNoise();
    };
  }, []);

  const handleCycleFocusNoise = () => {
    audioService.playClick();
    const nextMap: Record<'none' | 'pink' | 'rain' | 'library', 'none' | 'pink' | 'rain' | 'library'> = {
      none: 'library',
      library: 'rain',
      rain: 'pink',
      pink: 'none',
    };
    const next = nextMap[focusNoise];
    setFocusNoise(next);
    if (next === 'none') {
      audioService.stopFocusNoise();
    } else {
      audioService.startFocusNoise(next);
    }
  };

  // Keyboard navigation (1, 2, 3, 4, F, Left, Right, M, ?)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in scratchpad textarea
      const target = e.target as HTMLElement;
      if (target?.tagName === 'TEXTAREA' || target?.tagName === 'INPUT') return;

      if (e.key === 'Escape') {
        setShowKeyboardHelp(false);
        setShowSubmitConfirm(false);
        return;
      }
      if (e.key === '?') {
        e.preventDefault();
        setShowKeyboardHelp((prev) => !prev);
        return;
      }
      if (showSubmitConfirm || showKeyboardHelp) return;

      if (['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        handleSelectOption(currentIndex, parseInt(e.key, 10) - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFlag(currentIndex);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setShowScratchpad((prev) => !prev);
      } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        navigateToQuestion(currentIndex - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        navigateToQuestion(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, showSubmitConfirm, showKeyboardHelp]);

  // Statistics
  const answeredCount = useMemo(() => {
    return Object.values(answerStates).filter((s) => s.selectedIndex >= 0).length;
  }, [answerStates]);

  const flaggedCount = useMemo(() => {
    return Object.values(answerStates).filter((s) => s.isFlagged).length;
  }, [answerStates]);

  const unAnsweredCount = questions.length - answeredCount;

  // Format time MM:SS
  const formattedTime = useMemo(() => {
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, [secondsLeft]);

  // Final submit handler
  const handleFinalSubmit = () => {
    recordCurrentTimeSpent();
    audioService.playComplete();

    const userAnswers: UserAnswer[] = questions.map((q, idx) => {
      const state = answerStates[idx] || { selectedIndex: -1, isFlagged: false, timeSpentSeconds: 0 };
      const selectedIndex = state.selectedIndex;
      const isCorrect = selectedIndex === q.correctIndex;
      return {
        questionId: q.id,
        question: q,
        selectedIndex,
        isCorrect,
        timeSpentSeconds: state.timeSpentSeconds || 5,
      };
    });

    onSubmitExam(userAnswers);
  };

  const currentQ = questions[currentIndex];
  const currentState = answerStates[currentIndex] || { selectedIndex: -1, isFlagged: false, timeSpentSeconds: 0 };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-3 flex flex-col gap-4">
      {/* Top CBT Navigation & Exam Bar */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 shadow-md flex flex-wrap items-center justify-between gap-3">
        {/* Exam Title & Subject */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
            CBT
          </div>
          <div>
            <h2 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base flex items-center gap-2">
              <span>{topic} 실전 모의고사</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                총 {questions.length}문항
              </span>
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>진행률: {Math.round((answeredCount / questions.length) * 100)}%</span>
              <span>•</span>
              <span className={unAnsweredCount > 0 ? 'text-amber-600 dark:text-amber-400 font-semibold' : 'text-emerald-600 font-semibold'}>
                미표기 {unAnsweredCount}문항
              </span>
              {flaggedCount > 0 && (
                <>
                  <span>•</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">검토 {flaggedCount}문항</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Center: Timer */}
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono font-bold text-sm sm:text-base border transition-colors ${
            secondsLeft <= 60
              ? 'bg-red-500/10 border-red-500/40 text-red-600 dark:text-red-400 animate-pulse'
              : secondsLeft <= 300
              ? 'bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400'
              : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
          }`}
          title="시험 잔여 시간"
        >
          <Clock className="w-4 h-4" />
          <span>{formattedTime}</span>
        </div>

        {/* Right Controls: View Switch & Submit */}
        <div className="flex items-center gap-2">
          {/* Font Size Scaling */}
          <div className="hidden sm:flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700" title="글자 크기 조절">
            <button
              type="button"
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-all ${
                fontSize === 'sm'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setFontSize('base')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-all ${
                fontSize === 'base'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 text-sm font-bold rounded-lg transition-all ${
                fontSize === 'lg'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              A+
            </button>
          </div>

          {/* Ambient Focus Noise Generator Button */}
          <button
            type="button"
            onClick={handleCycleFocusNoise}
            className={`p-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
              focusNoise !== 'none'
                ? 'bg-purple-100 dark:bg-purple-950/60 border-purple-300 text-purple-700 dark:text-purple-300 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
            title="집중 백색소음 / ASMR (도서관, 빗소리, 핑크노이즈)"
          >
            <Headphones className={`w-3.5 h-3.5 ${focusNoise !== 'none' ? 'animate-bounce' : ''}`} />
            <span className="hidden sm:inline">
              {focusNoise === 'none'
                ? '집중음'
                : focusNoise === 'library'
                ? '도서관'
                : focusNoise === 'rain'
                ? '빗소리'
                : '핑크소음'}
            </span>
          </button>

          {/* Keyboard Shortcut Help Button */}
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setShowKeyboardHelp(true);
            }}
            className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-xs font-semibold flex items-center gap-1 transition-all"
            title="키보드 단축키 안내 (?)"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>

          {/* Scratchpad Toggle Button */}
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              setShowScratchpad(!showScratchpad);
            }}
            className={`p-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
              showScratchpad
                ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-700 dark:text-amber-300 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
            title="수험생 메모장/연습장 열기 (단축키 M)"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">연습장</span>
          </button>

          {/* View mode toggle */}
          <div className="bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl flex items-center border border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                setViewMode('single');
              }}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                viewMode === 'single'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
              title="한 문항씩 집중해서 풀기"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">1문항</span>
            </button>
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                setViewMode('paper');
              }}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                viewMode === 'paper'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
              title="실전 2단 시험지 모드"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden md:inline">시험지</span>
            </button>
          </div>

          {/* Print button when in paper view */}
          {viewMode === 'paper' && (
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                window.print();
              }}
              className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold flex items-center gap-1 transition-all"
              title="시험지 A4 인쇄하기"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">인쇄</span>
            </button>
          )}

          {/* Submit button */}
          <button
            type="button"
            onClick={() => setShowSubmitConfirm(true)}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-indigo-500/20 active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>최종 제출</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Question Area (Left/Center) + OMR Sheet (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Question Area (8 cols on lg) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {viewMode === 'single' ? (
            /* Single Question Focused View */
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col justify-between min-h-[460px]">
              <div>
                {/* Question Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono font-black text-indigo-600 dark:text-indigo-400 text-lg">
                      Q{currentIndex + 1}.
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                      공인 실전 기출
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {currentQ.difficultyLabel}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md font-semibold bg-slate-50 dark:bg-slate-800/60 text-slate-500 border border-slate-200/60 dark:border-slate-700/60">
                      배점 2.5점
                    </span>
                  </div>

                  {/* Flag toggle */}
                  <button
                    onClick={() => handleToggleFlag(currentIndex)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                      currentState.isFlagged
                        ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                    title="나중에 다시 검토할 문제로 표시 (단축키 F)"
                  >
                    <Flag className={`w-3.5 h-3.5 ${currentState.isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
                    <span>{currentState.isFlagged ? '검토 표시됨' : '검토 체크 (F)'}</span>
                  </button>
                </div>

                {/* Question Text */}
                <h3 className={`${fontSize === 'sm' ? 'text-sm sm:text-base font-bold' : fontSize === 'lg' ? 'text-lg sm:text-xl font-extrabold' : 'text-base sm:text-lg font-bold'} text-slate-800 dark:text-slate-100 leading-relaxed mb-6`}>
                  {currentQ.question}
                </h3>

                {/* Options List (1, 2, 3, 4) */}
                <div className="flex flex-col gap-2.5">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = currentState.selectedIndex === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(currentIndex, optIdx)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 group ${
                          isSelected
                            ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20 shadow-sm'
                            : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-xs transition-colors ${
                            isSelected
                              ? 'bg-indigo-600 text-white font-extrabold shadow-sm'
                              : 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 group-hover:border-indigo-400'
                          }`}
                        >
                          {optIdx + 1}
                        </span>
                        <span
                          className={`${fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-base font-medium' : 'text-sm'} leading-relaxed ${
                            isSelected
                              ? 'font-bold text-indigo-950 dark:text-indigo-200'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Nav: Prev, Next */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => navigateToQuestion(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>이전 문제</span>
                </button>

                <span className="text-xs font-semibold text-slate-400">
                  {currentIndex + 1} / {questions.length} (키보드 1~4 마킹)
                </span>

                <button
                  onClick={() => navigateToQuestion(currentIndex + 1)}
                  disabled={currentIndex === questions.length - 1}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1 shadow-sm"
                >
                  <span>다음 문제</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* 2-Column Test Paper View (CBT 기출 시험지 양식) */
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm">
              {/* Official Printable Header for A4 Printouts */}
              <div className="hidden print:block mb-6 border-b-2 border-slate-900 pb-3 text-center">
                <h1 className="text-xl font-black tracking-widest text-slate-900">
                  2026학년도 지식역량 CBT 실전 모의고사 문제지
                </h1>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mt-2 px-3">
                  <span>과목명: {topic} (총 {questions.length}문항)</span>
                  <span>성명: ____________________</span>
                  <span>수험번호: [                  ]</span>
                </div>
              </div>

              <div className="mb-4 pb-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-slate-800 dark:text-slate-100 text-base">
                    [제1과목] {topic} 기출 모의고사 문제지
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    문항을 읽고 OMR 카드에 마킹하거나 번호를 직접 클릭하세요.
                  </p>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded">
                  총 {questions.length}문항
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questions.map((q, idx) => {
                  const state = answerStates[idx] || { selectedIndex: -1, isFlagged: false, timeSpentSeconds: 0 };
                  return (
                    <div
                      key={q.id}
                      id={`cbt-question-${idx}`}
                      className={`p-4 rounded-2xl border transition-colors ${
                        state.selectedIndex >= 0
                          ? 'border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/20 dark:bg-indigo-950/10'
                          : 'border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/30'
                      }`}
                    >
                      {/* Paper Question Title */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`${fontSize === 'sm' ? 'text-xs font-bold' : fontSize === 'lg' ? 'text-base font-extrabold' : 'text-sm font-extrabold'} text-slate-800 dark:text-slate-100 leading-snug`}>
                          <span className="text-indigo-600 dark:text-indigo-400 mr-1.5 font-mono">{idx + 1}.</span>
                          {q.question}
                        </span>
                        <button
                          onClick={() => handleToggleFlag(idx)}
                          className={`shrink-0 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ${
                            state.isFlagged ? 'text-amber-500' : 'text-slate-300'
                          }`}
                          title="검토 체크"
                        >
                          <Flag className={`w-3.5 h-3.5 ${state.isFlagged ? 'fill-amber-500' : ''}`} />
                        </button>
                      </div>

                      {/* Paper Options */}
                      <div className="space-y-1.5 mt-3">
                        {q.options.map((opt, optIdx) => {
                          const isSel = state.selectedIndex === optIdx;
                          return (
                            <div
                              key={optIdx}
                              onClick={() => handleSelectOption(idx, optIdx)}
                              className={`p-2 rounded-xl text-xs cursor-pointer flex items-start gap-2 transition-all ${
                                isSel
                                  ? 'bg-indigo-600 text-white font-bold shadow-sm'
                                  : 'hover:bg-slate-200/60 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full text-[10px] shrink-0 flex items-center justify-center font-bold ${
                                  isSel ? 'bg-white text-indigo-600' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                }`}
                              >
                                {optIdx + 1}
                              </span>
                              <span className={`${fontSize === 'sm' ? 'text-[11px]' : fontSize === 'lg' ? 'text-sm font-medium' : 'text-xs'} leading-snug`}>{opt}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right: OMR Card Sheet (4 cols on lg) */}
        <div className="lg:col-span-4">
          <div className="sticky top-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-100">
                  OMR 답안 마킹 시트
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400">
                {answeredCount}/{questions.length}
              </span>
            </div>

            {/* OMR List Grid with Scroll */}
            <div className="max-h-[50vh] overflow-y-auto pr-1 space-y-1.5 scrollbar-thin">
              {questions.map((_, qIdx) => {
                const state = answerStates[qIdx] || { selectedIndex: -1, isFlagged: false, timeSpentSeconds: 0 };
                const isCurrent = currentIndex === qIdx && viewMode === 'single';

                return (
                  <div
                    key={qIdx}
                    onClick={() => navigateToQuestion(qIdx)}
                    className={`flex items-center justify-between p-1.5 rounded-xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30'
                        : 'border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {/* Question Number & Flag */}
                    <div className="flex items-center gap-1.5 w-12 shrink-0">
                      <span className={`font-mono text-xs font-extrabold ${isCurrent ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>
                        {qIdx + 1}.
                      </span>
                      {state.isFlagged && (
                        <Flag className="w-3 h-3 fill-amber-500 text-amber-500 shrink-0" />
                      )}
                    </div>

                    {/* OMR Circles (1, 2, 3, 4) */}
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2, 3].map((optNum) => {
                        const isMarked = state.selectedIndex === optNum;
                        return (
                          <button
                            key={optNum}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectOption(qIdx, optNum);
                            }}
                            className={`w-6 h-6 rounded-full font-bold text-[11px] transition-all flex items-center justify-center ${
                              isMarked
                                ? 'bg-slate-900 text-white dark:bg-indigo-500 shadow-inner ring-2 ring-slate-900/20'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 border border-slate-200 dark:border-slate-700'
                            }`}
                            title={`${qIdx + 1}번 문제 ${optNum + 1}번 마킹`}
                          >
                            {optNum + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* OMR Legend & Submit CTA */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs flex flex-col gap-2">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-indigo-500" />
                  마킹 완료: {answeredCount}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                  미표기: {unAnsweredCount}
                </span>
                <span className="flex items-center gap-1">
                  <Flag className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                  검토: {flaggedCount}
                </span>
              </div>

              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="w-full mt-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all active:scale-95"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>답안지 제출 및 채점하기</span>
              </button>

              <button
                onClick={onExitExam}
                className="w-full py-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-[11px] font-medium"
              >
                시험 포기하고 나가기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Examinee Scratchpad */}
      {showScratchpad && (
        <div className="fixed bottom-6 right-6 z-40 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl shadow-2xl p-4 flex flex-col gap-2.5 animate-pop">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
              <Edit3 className="w-3.5 h-3.5 text-amber-500" />
              <span>수험생 간이 연습장 / 메모</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setScratchNote('')}
                className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
                title="연습장 비우기"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setShowScratchpad(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <textarea
            value={scratchNote}
            onChange={(e) => setScratchNote(e.target.value)}
            placeholder="계산식, 메모, 선지 소거법 등을 자유롭게 필기하세요..."
            rows={5}
            className="w-full text-xs font-mono p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
          />
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
              {unAnsweredCount > 0 ? (
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              ) : (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              )}
            </div>

            <div className="text-center">
              <h3 className="font-extrabold text-lg text-slate-800 dark:text-slate-100">
                {unAnsweredCount > 0 ? '미표기 문항이 남아있습니다!' : '시험을 제출하시겠습니까?'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                {unAnsweredCount > 0 ? (
                  <>
                    총 <strong className="text-amber-600">{unAnsweredCount}개 문항</strong>이 아직 마킹되지 않았습니다.
                    <br />제출하시면 미표기 문항은 오답 처리됩니다.
                  </>
                ) : (
                  <>모든 {questions.length}개 문항의 마킹이 완료되었습니다. 즉시 채점 결과를 확인합니다.</>
                )}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 text-xs flex justify-around">
              <div>
                <span className="text-slate-400 block">마킹 완료</span>
                <strong className="text-emerald-600 text-sm">{answeredCount}문항</strong>
              </div>
              <div>
                <span className="text-slate-400 block">미표기</span>
                <strong className="text-amber-600 text-sm">{unAnsweredCount}문항</strong>
              </div>
              <div>
                <span className="text-slate-400 block">잔여 시간</span>
                <strong className="text-slate-700 dark:text-slate-200 text-sm">{formattedTime}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                다시 풀기
              </button>
              <button
                onClick={() => {
                  setShowSubmitConfirm(false);
                  handleFinalSubmit();
                }}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20"
              >
                네, 제출합니다
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Help Modal */}
      {showKeyboardHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center font-bold text-base">
                  ⌨️
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                    CBT 수험장 키보드 단축키 안내
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    실제 국가공인 CBT 시험처럼 키보드로 초고속 풀이가 가능합니다.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowKeyboardHelp(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-slate-600 dark:text-slate-300 font-medium">선지 1~4번 마킹</span>
                <span className="font-mono font-bold bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 text-indigo-600 dark:text-indigo-300">
                  1, 2, 3, 4
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-slate-600 dark:text-slate-300 font-medium">검토(Flag) 표시 토글</span>
                <span className="font-mono font-bold bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 text-amber-600">
                  F
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-slate-600 dark:text-slate-300 font-medium">다음 문제로 이동</span>
                <span className="font-mono font-bold bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200">
                  → 또는 N
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-slate-600 dark:text-slate-300 font-medium">이전 문제로 이동</span>
                <span className="font-mono font-bold bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200">
                  ← 또는 P
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-slate-600 dark:text-slate-300 font-medium">수험생 간이 메모장(연습장) 열기/닫기</span>
                <span className="font-mono font-bold bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200">
                  M
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span className="text-slate-600 dark:text-slate-300 font-medium">단축키 가이드 토글 / 팝업 닫기</span>
                <span className="font-mono font-bold bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200">
                  ? 또는 Esc
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowKeyboardHelp(false)}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all"
            >
              확인 (닫기)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
