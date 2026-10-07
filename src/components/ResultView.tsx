import { useState, useEffect, useMemo } from 'react';
import type React from 'react';

import confetti from 'canvas-confetti';
import {
  Trophy,
  Award,
  Clock,
  Target,
  Flame,
  RotateCcw,
  BookOpen,
  Share2,
  CheckCircle2,
  XCircle,
  Home,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Printer,
  Compass,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import type { QuizResult, Question, DifficultyLevel } from '../types/quiz';

import { audioService } from '../services/audioService';
import { TailQuestionModal } from './TailQuestionModal';
import { evaluateDetailedCbtExam } from '../services/scoreEvaluationService';
import { getOptionExplanation } from '../services/optionExplanationService';

interface ResultViewProps {
  result: QuizResult;
  onRestartSameTopic: () => void;
  onRetryWrongAnswers: (wrongQuestions: Question[]) => void;
  onGoHome: () => void;
  onOpenMistakes?: () => void;
}

const DIFFICULTY_NAMES: Record<DifficultyLevel, string> = {
  easy: '기초 상식',
  medium: '일반 지식',
  hard: '심화 지식',
  profound: '심오한 지식',
};

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRestartSameTopic,
  onRetryWrongAnswers,
  onGoHome,
  onOpenMistakes,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong'>('all');
  const [copied, setCopied] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [tailModalOpen, setTailModalOpen] = useState(false);
  const [tailParentQ, setTailParentQ] = useState<Question | null>(null);
  const [tailOptionText, setTailOptionText] = useState('');
  const [tailOptionIndex, setTailOptionIndex] = useState(0);

  const wrongAnswers = result.answers.filter((a) => !a.isCorrect);
  const evalReport = useMemo(
    () => evaluateDetailedCbtExam(result.accuracyPercentage, result.difficultyBreakdown),
    [result.accuracyPercentage, result.difficultyBreakdown]
  );

  // Trigger confetti and victory fanfare on mount
  useEffect(() => {
    if (result.accuracyPercentage >= 60) {
      audioService.playVictory();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [result.accuracyPercentage]);

  // Copy result text to clipboard
  const handleCopyShare = () => {
    audioService.playClick();
    const shareText = `🧠 [DeepQuiz] 지식 퀴즈 탐구 완료!
📌 주제: ${result.topic}
🏆 등급: ${result.tierTitle}
🎯 정답률: ${result.accuracyPercentage}% (${result.correctAnswersCount}/${result.totalQuestions})
✨ 최종 점수: ${result.score.toLocaleString()}점
⏱ 소요 시간: ${Math.floor(result.totalTimeSeconds / 60)}분 ${result.totalTimeSeconds % 60}초

상식부터 심오한 지식까지, 당신의 지적 한계에 도전해보세요!`;

    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const displayedAnswers = filterMode === 'wrong' ? wrongAnswers : result.answers;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-8 animate-pop">
      {/* Hero Result Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-indigo-500/20 text-center space-y-4">
        {/* Background decorative glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>
              "{result.topic}" (
              {result.mode === 'daily'
                ? '오늘의 퀴즈'
                : result.mode === 'survival'
                ? '서바이벌'
                : result.mode === 'timeattack'
                ? '타임어택 60초'
                : result.mode === 'cbt'
                ? 'CBT 실전 모의고사'
                : '클래식'}
              )
            </span>
          </div>
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black">
            <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
            <span>+{result.xpEarned} XP 획득</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
          {result.tierTitle}
        </h1>

        <p className="text-sm sm:text-base text-indigo-100 max-w-xl mx-auto leading-relaxed font-medium">
          {result.tierDescription}
        </p>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
            <Target className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
            <div className="text-xl sm:text-2xl font-black">{result.accuracyPercentage}%</div>
            <div className="text-[11px] text-indigo-200">
              정답 ({result.correctAnswersCount}/{result.totalQuestions})
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
            <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-xl sm:text-2xl font-black">{result.score.toLocaleString()}</div>
            <div className="text-[11px] text-indigo-200">최종 점수 (가중치)</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
            <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
            <div className="text-xl sm:text-2xl font-black">
              {Math.floor(result.totalTimeSeconds / 60)}분 {result.totalTimeSeconds % 60}초
            </div>
            <div className="text-[11px] text-indigo-200">총 소요 시간</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
            <Flame className="w-5 h-5 text-rose-400 mx-auto mb-1" />
            <div className="text-xl sm:text-2xl font-black">
              {result.totalQuestions > 0
                ? (result.totalTimeSeconds / result.totalQuestions).toFixed(1)
                : 0}
              초
            </div>
            <div className="text-[11px] text-indigo-200">문제당 평균 속도</div>
          </div>
        </div>
      </div>

      {/* CBT Official Examination Pass/Fail & National Score Report Card */}
      {result.mode === 'cbt' && (
        <div className="space-y-4">
          <div
            className={`rounded-3xl p-6 border flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm ${
              evalReport.passStatus === '합격'
                ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                : 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800'
            }`}
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div
                className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-black shrink-0 ${
                  evalReport.passStatus === '합격'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                    : 'bg-rose-600 text-white shadow-lg shadow-rose-600/20'
                }`}
              >
                <span className="text-base sm:text-lg leading-tight">{evalReport.officialVerdict === '과락 불합격' ? '과락' : evalReport.passStatus}</span>
                <span className="text-[10px] opacity-90">{evalReport.grade}등급</span>
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                    {evalReport.officialVerdict === '최종 합격'
                      ? '🏅 CBT 실전 모의고사 공인 합격 기준 달성'
                      : evalReport.officialVerdict === '과락 불합격'
                      ? '⚠️ CBT 실전 모의고사 40점 과락 불합격'
                      : '⚠️ CBT 실전 모의고사 기준 점수(60%) 미달'}
                  </h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full ${evalReport.gradeBadgeColor}`}>
                    {evalReport.gradeTitle}
                  </span>
                </div>
                {evalReport.hasFailCutoff && evalReport.cutoffWarningMessage && (
                  <div className="mt-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{evalReport.cutoffWarningMessage}</span>
                  </div>
                )}
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {evalReport.evaluationSummary}
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                  💡 {evalReport.advice}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  audioService.playClick();
                  window.print();
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>성적통지표 인쇄</span>
              </button>
            </div>
          </div>

          {/* National Standard Score & Percentile Stats Table */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <span>전국 수험생 가상 표본 기준 성적 통계 지표</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">원점수 (100점 만점)</span>
                <span className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{evalReport.rawScore}점</span>
              </div>
              <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/40">
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 block mb-0.5">표준점수 (T-Score)</span>
                <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">{evalReport.standardScore}점</span>
              </div>
              <div className="p-3 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/40">
                <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 block mb-0.5">전국 백분위 (Percentile)</span>
                <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400">{evalReport.percentile}%</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/40">
                <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 block mb-0.5">공식 판정 등급</span>
                <span className="text-xl font-extrabold text-amber-600 dark:text-amber-400">{evalReport.grade}등급</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Difficulty Breakdown (상식부터 심오한 지식까지 분석) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            난이도별 지식 통달도 분석
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {(['easy', 'medium', 'hard', 'profound'] as DifficultyLevel[]).map((lvl) => {
            const data = result.difficultyBreakdown[lvl] || { total: 0, correct: 0 };
            const rate = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

            const iconMap = {
              easy: '🌱',
              medium: '📘',
              hard: '🔥',
              profound: '👑',
            };

            return (
              <div
                key={lvl}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 border border-slate-100 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                    <span>{iconMap[lvl]}</span>
                    <span>{DIFFICULTY_NAMES[lvl]}</span>
                  </div>
                  <span className="text-slate-600 dark:text-slate-300">
                    {data.correct} / {data.total} ({rate}%)
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      rate === 100
                        ? 'bg-emerald-500'
                        : rate >= 50
                        ? 'bg-indigo-500'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${rate}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              audioService.playClick();
              onRestartSameTopic();
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>같은 주제 다시 풀기</span>
          </button>

          {wrongAnswers.length > 0 && (
            <button
              onClick={() => {
                audioService.playClick();
                onRetryWrongAnswers(wrongAnswers.map((a) => a.question));
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md shadow-purple-600/20 active:scale-95 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>틀린 {wrongAnswers.length}문제만 다시 풀기</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium text-xs sm:text-sm transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span>복사 완료!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>결과 공유</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              audioService.playClick();
              window.print();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium text-xs sm:text-sm transition-all"
            title="성적표 및 오답 분석 해설지 A4 인쇄 / PDF 저장"
          >
            <Printer className="w-4 h-4" />
            <span>성적표 인쇄</span>
          </button>

          <button
            onClick={() => {
              audioService.playClick();
              onGoHome();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium text-xs sm:text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>다른 주제 선택</span>
          </button>
        </div>
      </div>

      {/* Detailed Review Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              문항별 정밀 복습 & 해설 노트
            </h2>
          </div>

          {/* Filter toggle: All vs Wrong */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
            <button
              onClick={() => {
                audioService.playClick();
                setFilterMode('all');
              }}
              className={`px-3 py-1 rounded-lg transition-all ${
                filterMode === 'all'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              전체 보기 ({result.answers.length})
            </button>
            <button
              onClick={() => {
                audioService.playClick();
                setFilterMode('wrong');
              }}
              className={`px-3 py-1 rounded-lg transition-all ${
                filterMode === 'wrong'
                  ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              틀린 문제만 ({wrongAnswers.length})
            </button>
          </div>
        </div>

        {/* Auto-saved to mistake note banner */}
        {wrongAnswers.length > 0 && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950/40 dark:to-orange-950/30 border border-rose-200 dark:border-rose-900/60 rounded-xl text-xs sm:text-sm shadow-xs">
            <div className="flex items-center gap-2 text-rose-800 dark:text-rose-200">
              <span className="text-lg">📖</span>
              <span>
                이번 시험에서 오답 처리된 <strong className="font-bold underline decoration-rose-400">{wrongAnswers.length}개</strong> 문항이 <strong>스마트 오답노트</strong>에 자동 저장되었습니다.
              </span>
            </div>
            {onOpenMistakes && (
              <button
                onClick={() => {
                  audioService.playClick();
                  onOpenMistakes();
                }}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
              >
                <span>오답노트 열기</span>
                <span>→</span>
              </button>
            )}
          </div>
        )}

        {/* Answers List */}
        <div className="space-y-3">
          {displayedAnswers.length === 0 ? (
            <div className="py-8 text-center text-slate-400 dark:text-slate-500 text-sm">
              틀린 문제가 없습니다! 모든 문제를 완벽히 맞추셨습니다. 👏
            </div>
          ) : (
            displayedAnswers.map((item, idx) => {
              const isExpanded = expandedId === item.question.id || filterMode === 'wrong';

              return (
                <div
                  key={item.question.id}
                  className={`rounded-xl border transition-all overflow-hidden ${
                    item.isCorrect
                      ? 'border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/20 dark:bg-emerald-950/10'
                      : 'border-rose-200/80 dark:border-rose-900/50 bg-rose-50/20 dark:bg-rose-950/10'
                  }`}
                >
                  {/* Collapsed Header */}
                  <button
                    onClick={() => {
                      audioService.playClick();
                      setExpandedId(isExpanded ? null : item.question.id);
                    }}
                    className="w-full text-left p-4 flex items-start justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {item.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-500" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                            Q{idx + 1}
                          </span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {item.question.difficultyLabel}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                          {item.question.question}
                        </h4>
                      </div>
                    </div>

                    <div className="shrink-0 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs sm:text-sm">
                      {/* Choices summary */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span className="text-[11px] font-bold text-slate-400 block mb-0.5">
                            내가 선택한 답:
                          </span>
                          <span
                            className={`font-semibold ${
                              item.isCorrect
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-rose-600 dark:text-rose-400'
                            }`}
                          >
                            {item.selectedIndex >= 0
                              ? `${item.selectedIndex + 1}. ${item.question.options[item.selectedIndex]}`
                              : '시간 초과로 미선택'}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                            정답:
                          </span>
                          <span className="font-semibold text-emerald-800 dark:text-emerald-200">
                            {item.question.correctIndex + 1}.{' '}
                            {item.question.options[item.question.correctIndex]}
                          </span>
                        </div>
                      </div>

                      {/* Explanation */}
                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="block text-slate-900 dark:text-slate-100 font-semibold mb-1">
                          📖 해설:
                        </strong>
                        {item.question.explanation}
                      </div>

                      {/* Deep Knowledge */}
                      {item.question.deepKnowledge && (
                        <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-300/30 text-slate-700 dark:text-slate-300 leading-relaxed">
                          <strong className="block text-amber-900 dark:text-amber-300 font-semibold mb-1">
                            💡 심오한 지식 한 걸음 더:
                          </strong>
                          {item.question.deepKnowledge}
                        </div>
                      )}

                      {/* EBSi / MegaStudy Option Trap Breakdown */}
                      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                            <FileText className="w-3.5 h-3.5 text-indigo-500" />
                            <span>EBSi형 선지 해체 분석 (함정 오답 파헤치기)</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold">
                            출제 의도 해체
                          </span>
                        </div>
                        <div className="space-y-1.5 pt-0.5">
                          {item.question.options.map((opt, oIdx) => {
                            const isCorrectOpt = oIdx === item.question.correctIndex;
                            const reason = getOptionExplanation(item.question, oIdx);
                            return (
                              <div
                                key={oIdx}
                                className={`text-xs p-2 rounded-lg border flex items-start gap-2 ${
                                  isCorrectOpt
                                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300'
                                }`}
                              >
                                <span
                                  className={`px-1.5 py-0.2 rounded font-black text-[10px] shrink-0 ${
                                    isCorrectOpt
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
                                  }`}
                                >
                                  {isCorrectOpt ? '정답' : '오답'} {oIdx + 1}
                                </span>
                                <div className="flex-1 space-y-0.5">
                                  <span className="font-semibold block">{opt}</span>
                                  <span className="text-[11px] opacity-90 block leading-relaxed">{reason}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Tail Questions Deep Dive */}
                      <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-900/50 space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-indigo-700 dark:text-indigo-300">
                          <span className="flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5 text-indigo-500 animate-spin" style={{ animationDuration: '10s' }} />
                            <span>선지별 연계 꼬리 문제 심층 탐구</span>
                          </span>
                          <span className="text-[10px] text-indigo-500 font-normal hidden sm:inline">
                            선지를 클릭하면 관련 심화 문제가 열립니다
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {item.question.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => {
                                audioService.playClick();
                                setTailParentQ(item.question);
                                setTailOptionText(opt);
                                setTailOptionIndex(optIdx);
                                setTailModalOpen(true);
                              }}
                              className={`p-2 rounded-xl text-left text-xs transition-all flex items-center justify-between gap-1.5 border active:scale-98 ${
                                optIdx === item.question.correctIndex
                                  ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 font-semibold'
                                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-600'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <span className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                                  {optIdx + 1}
                                </span>
                                <span className="truncate">{opt}</span>
                              </div>
                              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                                꼬리문제 ➔
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Interactive Tail Question Modal */}
      {tailModalOpen && tailParentQ && (
        <TailQuestionModal
          isOpen={tailModalOpen}
          onClose={() => setTailModalOpen(false)}
          parentQuestion={tailParentQ}
          selectedOptionText={tailOptionText}
          selectedOptionIndex={tailOptionIndex}
          onBonusXpEarned={() => {
            // bonus xp handled inside modal
          }}
          onSwitchOption={(newIdx, newText) => {
            setTailOptionIndex(newIdx);
            setTailOptionText(newText);
          }}
        />
      )}
    </div>
  );
};
