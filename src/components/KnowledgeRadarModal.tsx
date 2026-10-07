import { useMemo } from 'react';
import type React from 'react';
import {
  X,
  Compass,
  Zap,
  Target,
  ArrowRight,
} from 'lucide-react';
import { TOPIC_PRESETS } from '../services/quizBank';
import { audioService } from '../services/audioService';

interface KnowledgeRadarModalProps {
  onClose: () => void;
  onStartTopicQuiz: (topic: string) => void;
}

export const KnowledgeRadarModal: React.FC<KnowledgeRadarModalProps> = ({
  onClose,
  onStartTopicQuiz,
}) => {
  // Aggregate stats per preset domain from local history
  const domainStats = useMemo(() => {
    let history: Array<{ topic: string; correctAnswersCount: number; totalQuestions: number }> = [];
    try {
      const raw = localStorage.getItem('deepquiz_results_history_v2');
      if (raw) history = JSON.parse(raw);
    } catch {
      history = [];
    }

    const map: Record<string, { total: number; correct: number }> = {};
    TOPIC_PRESETS.forEach((p) => {
      map[p.title] = { total: 0, correct: 0 };
    });

    history.forEach((h) => {
      // Find matching preset by substring or exact title
      const found = TOPIC_PRESETS.find((p) => h.topic.includes(p.title) || p.title.includes(h.topic));
      if (found) {
        map[found.title].total += h.totalQuestions;
        map[found.title].correct += h.correctAnswersCount;
      }
    });

    return TOPIC_PRESETS.map((preset) => {
      const s = map[preset.title] || { total: 0, correct: 0 };
      const accuracy = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 50; // default 50% baseline
      return {
        id: preset.id,
        title: preset.title,
        category: preset.category,
        totalQuestions: preset.sampleQuestionsCount || 100,
        solvedCount: s.total,
        accuracy,
        color: preset.color,
      };
    });
  }, []);

  // Weakest domain (lowest accuracy or lowest solved)
  const weakestDomain = useMemo(() => {
    const sorted = [...domainStats].sort((a, b) => {
      if (a.solvedCount === 0 && b.solvedCount > 0) return -1;
      if (b.solvedCount === 0 && a.solvedCount > 0) return 1;
      return a.accuracy - b.accuracy;
    });
    return sorted[0] || domainStats[0];
  }, [domainStats]);

  // SVG Radar Chart Math
  const numPoints = domainStats.length; // 12
  const radius = 120;
  const centerX = 160;
  const centerY = 160;

  // Compute polygon points for values
  const polygonPoints = useMemo(() => {
    return domainStats
      .map((d, i) => {
        const angle = (Math.PI * 2 / numPoints) * i - Math.PI / 2;
        const r = (d.accuracy / 100) * radius;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  }, [domainStats, numPoints, radius, centerX, centerY]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-800 dark:text-slate-100">
                12대 학문 지식 숙련도 & 레이더 진단
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                자신의 강점과 취약 영역을 다각도로 분석하고 핀포인트로 공략하세요
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Left Radar SVG + Right Diagnosis & Cards */}
        <div className="flex-1 overflow-y-auto pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 pr-1 scrollbar-thin">
          {/* Radar Chart (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl p-4 border border-slate-100 dark:border-slate-800">
            <div className="relative w-[320px] h-[320px] shrink-0">
              <svg viewBox="0 0 320 320" className="w-full h-full">
                {/* Background circles (25%, 50%, 75%, 100%) */}
                {[0.25, 0.5, 0.75, 1.0].map((level, lIdx) => (
                  <circle
                    key={lIdx}
                    cx={centerX}
                    cy={centerY}
                    r={radius * level}
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray={level === 1 ? 'none' : '3 3'}
                    className="text-slate-200 dark:text-slate-700"
                  />
                ))}

                {/* Spokes from center */}
                {domainStats.map((_, i) => {
                  const angle = (Math.PI * 2 / numPoints) * i - Math.PI / 2;
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={centerX}
                      y1={centerY}
                      x2={x}
                      y2={y}
                      stroke="currentColor"
                      className="text-slate-200 dark:text-slate-800"
                    />
                  );
                })}

                {/* Data Polygon */}
                <polygon
                  points={polygonPoints}
                  fill="rgba(99, 102, 241, 0.25)"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  className="transition-all duration-500"
                />

                {/* Data Points */}
                {domainStats.map((d, i) => {
                  const angle = (Math.PI * 2 / numPoints) * i - Math.PI / 2;
                  const r = (d.accuracy / 100) * radius;
                  const x = centerX + r * Math.cos(angle);
                  const y = centerY + r * Math.sin(angle);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#4f46e5"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* Axis Labels (Abbreviated domain names) */}
                {domainStats.map((d, i) => {
                  const angle = (Math.PI * 2 / numPoints) * i - Math.PI / 2;
                  const labelR = radius + 20;
                  const x = centerX + labelR * Math.cos(angle);
                  const y = centerY + labelR * Math.sin(angle);
                  const shortName = d.title.split(' ')[0];
                  return (
                    <text
                      key={i}
                      x={x}
                      y={y + 3}
                      textAnchor="middle"
                      className="text-[9px] font-extrabold fill-slate-500 dark:fill-slate-400 select-none"
                    >
                      {shortName}
                    </text>
                  );
                })}
              </svg>
            </div>
            <span className="text-[11px] text-slate-400 mt-2 font-medium">
              중심(0%) ~ 외곽(100% 정답률 기준)
            </span>
          </div>

          {/* Diagnosis & Domain Grid (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-4">
            {/* Weakness CTA Banner */}
            {weakestDomain && (
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-between gap-3 shadow-sm">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-1">
                    <Target className="w-4 h-4 text-indigo-600" />
                    <span>최우선 보충 권장 분야</span>
                  </div>
                  <h4 className="font-extrabold text-base text-slate-800 dark:text-slate-100">
                    {weakestDomain.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    현재 정답률: {weakestDomain.accuracy}% (총 100문항 완비)
                  </p>
                </div>

                <button
                  onClick={() => {
                    audioService.playClick();
                    onClose();
                    onStartTopicQuiz(weakestDomain.title);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-600/20 active:scale-95 transition-all shrink-0"
                >
                  <Zap className="w-3.5 h-3.5 fill-white" />
                  <span>약점 집중 드릴</span>
                </button>
              </div>
            )}

            {/* 12 Domains Mastery Cards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {domainStats.map((d) => (
                <div
                  key={d.id}
                  onClick={() => {
                    audioService.playClick();
                    onClose();
                    onStartTopicQuiz(d.title);
                  }}
                  className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-indigo-400 hover:shadow-sm cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-extrabold text-xs text-slate-800 dark:text-slate-200 truncate">
                      {d.title}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                        d.accuracy >= 70
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {d.accuracy}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all"
                      style={{ width: `${Math.max(5, d.accuracy)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>100문항 완비</span>
                    <span className="flex items-center gap-0.5 text-indigo-500 font-semibold group-hover:underline">
                      풀기 <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
