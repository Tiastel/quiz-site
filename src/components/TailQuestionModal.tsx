import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  BookOpen,
  ArrowRight,
  X,
  Compass,
  Award,
  Loader2,
  RefreshCw,
  FileText,
} from 'lucide-react';
import type { Question } from '../types/quiz';
import { resolveTailQuestion } from '../services/tailQuestionService';
import { getOptionExplanation } from '../services/optionExplanationService';
import { audioService } from '../services/audioService';
import { formatNaturalKorean } from '../utils/koreanUtils';

interface TailQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  parentQuestion: Question | null;
  selectedOptionText: string;
  selectedOptionIndex: number;
  onBonusXpEarned?: (amount: number) => void;
  onSwitchOption?: (newIndex: number, newText: string) => void;
}

export const TailQuestionModal: React.FC<TailQuestionModalProps> = ({
  isOpen,
  onClose,
  parentQuestion,
  selectedOptionText,
  selectedOptionIndex,
  onBonusXpEarned,
  onSwitchOption,
}) => {
  const [tailQuestion, setTailQuestion] = useState<Question | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

  // Fetch or generate tail question whenever option changes
  useEffect(() => {
    if (isOpen && parentQuestion && selectedOptionText) {
      let isMounted = true;
      setIsLoading(true);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setXpAwarded(false);

      resolveTailQuestion(parentQuestion, selectedOptionText, selectedOptionIndex)
        .then((q) => {
          if (isMounted) {
            setTailQuestion(q);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.error('Tail question load failed:', err);
          if (isMounted) {
            setIsLoading(false);
          }
        });

      return () => {
        isMounted = false;
      };
    }
  }, [isOpen, parentQuestion, selectedOptionText, selectedOptionIndex]);

  if (!isOpen || !parentQuestion) return null;

  const cleanOption = selectedOptionText.replace(/^[0-9A-D.\s()]+/, '').trim();

  const handleSelectAnswer = (idx: number) => {
    if (hasAnswered || !tailQuestion) return;

    setSelectedAnswer(idx);
    setHasAnswered(true);

    const isCorrect = idx === tailQuestion.correctIndex;
    if (isCorrect) {
      audioService.playCorrect();
      if (!xpAwarded) {
        onBonusXpEarned?.(30);
        setXpAwarded(true);
      }
    } else {
      audioService.playWrong();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-pop">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-indigo-200/80 dark:border-indigo-900/60 p-6 sm:p-7 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-slate-800 dark:text-slate-100">
                  선지 연계 꼬리 질문
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                  DEEP DIVE
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-md">
                선택한 선지: <strong className="text-indigo-600 dark:text-indigo-400">"{cleanOption}"</strong> 심화 탐구
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto py-4 space-y-5 pr-1">
          {isLoading ? (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-3">
              <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                "{cleanOption}" 관련 꼬리 질문을 생성 중입니다...
              </p>
              <span className="text-xs text-slate-400">
                AI 지식 엔진 및 큐레이션 은행을 탐색하고 있습니다.
              </span>
            </div>
          ) : tailQuestion ? (
            <div className="space-y-5">
              {/* Question Statement */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                  <span>{tailQuestion.topic}</span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-relaxed">
                  {formatNaturalKorean(tailQuestion.question)}
                </h3>
              </div>

              {/* 4 Choices */}
              <div className="space-y-2.5">
                {tailQuestion.options.map((opt, idx) => {
                  const isCorrect = idx === tailQuestion.correctIndex;
                  const isSelected = idx === selectedAnswer;

                  let btnStyle =
                    'border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30';

                  if (hasAnswered) {
                    if (isCorrect) {
                      btnStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/20';
                    } else if (isSelected) {
                      btnStyle =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100';
                    } else {
                      btnStyle =
                        'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectAnswer(idx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-sm sm:text-base font-semibold ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3 pr-2">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            hasAnswered && isCorrect
                              ? 'bg-emerald-500 text-white'
                              : hasAnswered && isSelected
                              ? 'bg-rose-500 text-white'
                              : 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span>{formatNaturalKorean(opt)}</span>
                      </div>
                      {hasAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation (After Answer) */}
              {hasAnswered && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 animate-pop">
                  {selectedAnswer === tailQuestion.correctIndex ? (
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>정답입니다! 꼬리 질문 탐구 보너스 +30 XP 획득! 🌟</span>
                    </div>
                  ) : (
                    <div className="text-xs font-bold text-rose-600 dark:text-rose-400">
                      정답은 {tailQuestion.correctIndex + 1}번 ({formatNaturalKorean(tailQuestion.options[tailQuestion.correctIndex])}) 입니다.
                    </div>
                  )}

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-700 dark:text-slate-300">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                      <span>해설 및 지식 맥락</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {formatNaturalKorean(tailQuestion.explanation)}
                    </p>
                  </div>

                  {tailQuestion.deepKnowledge && (
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs text-amber-800 dark:text-amber-300 leading-relaxed font-medium">
                      💡 <strong>심화 통찰:</strong> {formatNaturalKorean(tailQuestion.deepKnowledge)}
                    </div>
                  )}

                  {/* EBSi Option Trap Breakdown */}
                  {tailQuestion.options && tailQuestion.options.length === 4 && (
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-bold text-xs text-indigo-700 dark:text-indigo-300">
                          <FileText className="w-3.5 h-3.5 text-indigo-500" />
                          <span>출제위원 선지 해체 분석 (오답 함정 파헤치기)</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold">
                          변별력 포인트
                        </span>
                      </div>
                      <div className="space-y-1.5 pt-0.5">
                        {tailQuestion.options.map((opt, oIdx) => {
                          const isCorrectOpt = oIdx === tailQuestion.correctIndex;
                          const reason = getOptionExplanation(tailQuestion, oIdx);
                          return (
                            <div
                              key={oIdx}
                              className={`text-xs p-2.5 rounded-xl border flex items-start gap-2 ${
                                isCorrectOpt
                                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
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
                  )}
                </div>
              )}

              {/* Other Options Switcher */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5" />
                  원래 문제의 다른 선지로 꼬리 질문 탐구하기:
                </span>
                <div className="flex flex-wrap gap-2">
                  {parentQuestion.options.map((opt, i) => {
                    const isCurrent = i === selectedOptionIndex;
                    return (
                      <button
                        key={i}
                        disabled={isCurrent}
                        onClick={() => {
                          audioService.playClick();
                          onSwitchOption?.(i, opt);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          isCurrent
                            ? 'bg-indigo-600 text-white font-bold shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {i + 1}. {opt.slice(0, 16)}...
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 text-sm">
              꼬리 질문을 로드할 수 없습니다.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400">
            풀어본 꼬리 질문은 로컬 지식 저장소에 자동 등록됩니다.
          </span>
          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5"
          >
            <span>본 퀴즈로 복귀</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
