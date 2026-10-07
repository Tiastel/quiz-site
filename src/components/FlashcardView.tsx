import { useState, useEffect } from 'react';
import type React from 'react';
import {
  RotateCcw,
  Sparkles,
  Bookmark,
  CheckCircle2,
  XCircle,
  Award,
  Layers,
} from 'lucide-react';

import type { Question } from '../types/quiz';
import { audioService } from '../services/audioService';
import { isQuestionBookmarked, toggleBookmarkQuestion } from '../services/progressService';
import { recordMistake, recordCorrectReview } from '../services/mistakeService';

interface FlashcardViewProps {
  questions: Question[];
  topic: string;
  onFinish: () => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  questions,
  topic,
  onFinish,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);
  const [reviewIds, setReviewIds] = useState<string[]>([]);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const isFinished = currentIndex >= questions.length;

  const handleFlip = () => {
    audioService.playSelect();
    setIsFlipped(!isFlipped);
  };

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentQ) return;
    audioService.playClick();
    const nextVal = toggleBookmarkQuestion(currentQ.id);
    setBookmarked(nextVal);
  };

  const handleMarkMastered = () => {
    if (!currentQ) return;
    audioService.playCorrect();
    recordCorrectReview(currentQ.id);
    setMasteredIds((prev) => [...prev, currentQ.id]);
    nextCard();
  };

  const handleMarkReview = () => {
    if (!currentQ) return;
    audioService.playWrong();
    recordMistake(currentQ);
    setReviewIds((prev) => [...prev, currentQ.id]);
    nextCard();
  };

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setBookmarked(isQuestionBookmarked(questions[currentIndex + 1].id));
      } else {
        setCurrentIndex(questions.length);
      }
    }, 200);
  };

  // Keyboard navigation for Flashcards (Space/Enter: flip, 1/Left: review, 2/Right: master, B: bookmark)
  useEffect(() => {
    if (isFinished) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowLeft' || e.key === '1') {
        e.preventDefault();
        handleMarkReview();
      } else if (e.key === 'ArrowRight' || e.key === '2') {
        e.preventDefault();
        handleMarkMastered();
      } else if (e.key === 'b' || e.key === 'B') {
        if (!currentQ) return;
        audioService.playClick();
        const nextVal = toggleBookmarkQuestion(currentQ.id);
        setBookmarked(nextVal);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (isFinished) {
    return (
      <div className="w-full max-w-xl mx-auto px-4 py-12 text-center space-y-6 animate-pop">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mx-auto shadow-xl shadow-indigo-500/20">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            플래시카드 학습 완료! 🎉
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            "{topic}" 관련 {questions.length}개의 핵심 지식 카드를 모두 탐구하셨습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
            <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">
              {masteredIds.length}개
            </div>
            <div className="text-[11px] text-slate-500">완벽 암기</div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
            <RotateCcw className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <div className="text-xl font-black text-amber-600 dark:text-amber-400">
              {reviewIds.length}개
            </div>
            <div className="text-[11px] text-slate-500">복습 필요</div>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-3">
          <button
            onClick={() => {
              audioService.playClick();
              setCurrentIndex(0);
              setIsFlipped(false);
              setMasteredIds([]);
              setReviewIds([]);
            }}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50"
          >
            다시 학습하기
          </button>
          <button
            onClick={() => {
              audioService.playClick();
              onFinish();
            }}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 space-y-6 animate-pop">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-500" />
          <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
            플래시카드 학습 모드
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{questions.length}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3D Flip Card Container */}
      <div
        onClick={handleFlip}
        className="w-full min-h-[380px] cursor-pointer relative select-none group perspective-1000"
      >
        <div
          className={`w-full min-h-[380px] rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
            isFlipped
              ? 'bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 text-white border-indigo-500/50'
              : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
          }`}
        >
          {/* Card Top badges */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  isFlipped
                    ? 'bg-white/10 text-indigo-200'
                    : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                }`}
              >
                {currentQ.topic}
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                {currentQ.difficultyLabel}
              </span>
            </div>

            <button
              onClick={handleToggleBookmark}
              className="p-1.5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              title="보관함 저장"
            >
              <Bookmark
                className={`w-5 h-5 ${
                  bookmarked
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-400 hover:text-amber-400'
                }`}
              />
            </button>
          </div>

          {/* Card Main Body */}
          <div className="my-auto py-6 space-y-4">
            {!isFlipped ? (
              <div className="space-y-3">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider block">
                  Question
                </span>
                <h3 className="text-lg sm:text-2xl font-bold leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>
            ) : (
              <div className="space-y-4 animate-pop">
                <div>
                  <span className="text-xs font-bold text-emerald-400 block mb-1">
                    정답 (Answer)
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-300">
                    {currentQ.options[currentQ.correctIndex]}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 text-xs sm:text-sm text-indigo-100 leading-relaxed font-medium">
                  {currentQ.explanation}
                </div>

                {currentQ.deepKnowledge && (
                  <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-xs text-amber-200 leading-relaxed">
                    <div className="flex items-center gap-1 font-bold text-amber-300 mb-1">
                      <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
                      <span>심오한 지식 한 걸음 더:</span>
                    </div>
                    {currentQ.deepKnowledge}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Card Bottom Hint */}
          <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-2">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isFlipped ? '클릭하여 문제로 돌아가기' : '클릭하여 정답 및 해설 뒤집어보기'}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons (I know it vs Need Review) */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          onClick={handleMarkReview}
          className="p-3.5 rounded-2xl border-2 border-amber-300 dark:border-amber-800/80 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 font-bold text-sm flex items-center justify-center gap-2 hover:bg-amber-100 active:scale-95 transition-all shadow-sm"
        >
          <XCircle className="w-5 h-5 text-amber-500" />
          <span>아직 헷갈려요 (복습)</span>
        </button>

        <button
          onClick={handleMarkMastered}
          className="p-3.5 rounded-2xl border-2 border-emerald-300 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-100 active:scale-95 transition-all shadow-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span>완벽히 외웠어요!</span>
        </button>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 font-medium pt-1">
        단축키: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">Space</kbd> 뒤집기 · <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">← / 1</kbd> 복습 · <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">→ / 2</kbd> 암기 · <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">B</kbd> 북마크
      </div>
    </div>
  );
};
