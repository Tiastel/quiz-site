import { BarChart3, X, Trophy, Zap, Shield, Flame, Target, CheckCircle2, Calendar } from 'lucide-react';
import type { UserProgress } from '../types/quiz';
import { getLevelInfo } from '../services/progressService';
import { audioService } from '../services/audioService';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  progress,
}) => {
  if (!isOpen) return null;

  const levelInfo = getLevelInfo(progress.xp);
  const accuracy =
    progress.gamesPlayed > 0
      ? Math.round((progress.totalCorrect / Math.max(1, progress.gamesPlayed * 8)) * 100)
      : 0;

  // Generate 30-day activity array
  const today = new Date();
  const heatmapDays = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (29 - i));
    const dateStr = d.toISOString().split('T')[0];
    const isToday = i === 29;
    const daysAgo = 29 - i;
    const isActive = daysAgo < (progress.currentStreakDays || 1);

    let bgClass = 'bg-slate-100 dark:bg-slate-800 text-slate-400';
    let label = '학습 활동 없음';

    if (isToday) {
      bgClass = 'bg-indigo-600 text-white font-black shadow-sm';
      label = '오늘 학습 완료';
    } else if (isActive) {
      bgClass = 'bg-indigo-400 dark:bg-indigo-600 text-white font-bold';
      label = '출석 스트릭 달성';
    }

    return {
      dateStr,
      dayNum: d.getDate(),
      isToday,
      bgClass,
      label,
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            <BarChart3 className="w-5 h-5 text-indigo-500" />
            <span>나의 지식 탐구 통계 & 명예의 전당</span>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 scrollbar-thin">
          {/* Level & XP Overview */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                CURRENT RANK
              </div>
              <div className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Lv.{levelInfo.level} {levelInfo.title}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                총 {progress.xp.toLocaleString()} XP 획득
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-500">다음 레벨까지</span>
              <div className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                {levelInfo.nextLevelXp - levelInfo.currentLevelXp} XP
              </div>
            </div>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <Flame className="w-5 h-5 text-amber-500 mb-1" />
              <div className="text-xl font-black text-slate-900 dark:text-white">
                {progress.currentStreakDays}일
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">연속 출석 스트릭</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <Target className="w-5 h-5 text-indigo-500 mb-1" />
              <div className="text-xl font-black text-slate-900 dark:text-white">
                {progress.gamesPlayed}회
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">총 퀴즈 도전 횟수</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-1" />
              <div className="text-xl font-black text-slate-900 dark:text-white">
                {progress.totalCorrect}개
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                누적 정답 (정답률 {accuracy}%)
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <Trophy className="w-5 h-5 text-purple-500 mb-1" />
              <div className="text-xl font-black text-slate-900 dark:text-white">
                {progress.unlockedAchievementIds.length}개
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">달성한 업적 개수</div>
            </div>
          </div>

          {/* 7-Day Streak Habit Tracker */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-300">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>주간 스트릭 챌린지</span>
              </div>
              <span className="text-[11px] font-semibold">{progress.currentStreakDays}일 연속 탐구 중</span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 pt-1">
              {['월', '화', '수', '목', '금', '토', '일'].map((day, idx) => {
                const todayIdx = (new Date().getDay() + 6) % 7;
                const isToday = todayIdx === idx;
                const isStamped = idx <= todayIdx && progress.currentStreakDays > 0;

                return (
                  <div
                    key={day}
                    className={`py-2 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                      isToday
                        ? 'bg-amber-500 text-white font-black ring-2 ring-amber-400 shadow-sm'
                        : isStamped
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold'
                        : 'bg-white dark:bg-slate-800/80 text-slate-400 border border-slate-200/50 dark:border-slate-700/50'
                    }`}
                  >
                    <span className="text-[10px]">{day}</span>
                    <span className="text-xs">
                      {isStamped ? '🔥' : '⚪'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 30-Day Learning Activity Heatmap (GitHub / Duolingo Style) */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                <Calendar className="w-4 h-4 text-indigo-500" />
                <span>30일 지식 탐구 잔디 (Activity Heatmap)</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <span>적음</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-700 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-400 dark:bg-indigo-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-600 text-white inline-block" />
                <span>많음</span>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-1.5">
              {heatmapDays.map((item, idx) => (
                <div
                  key={idx}
                  title={`${item.dateStr}: ${item.label}`}
                  className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold transition-all hover:scale-110 cursor-pointer ${
                    item.isToday ? 'ring-2 ring-indigo-500 ring-offset-1 dark:ring-offset-slate-900' : ''
                  } ${item.bgClass}`}
                >
                  <span className="opacity-80 text-[9px]">{item.dayNum}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-snug">
              💡 매일 퀴즈를 풀고 지식을 축적하여 30일 잔디를 채워보세요!
            </p>
          </div>

          {/* Mode High Scores */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              모드별 최고 기록
            </h4>

            <div className="space-y-2">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 block">
                      서바이벌 서든데스
                    </span>
                    <span className="text-[10px] text-slate-400">목숨 3개 최고 기록</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-black text-sm text-rose-600 dark:text-rose-400">
                    {progress.highScores.survival.toLocaleString()}점
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 block">
                      타임어택 60초
                    </span>
                    <span className="text-[10px] text-slate-400">스피드런 최고 획득 점수</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-black text-sm text-cyan-600 dark:text-cyan-400">
                    {progress.highScores.timeattack.toLocaleString()}점
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 block">
                      클래식 탐구 모드
                    </span>
                    <span className="text-[10px] text-slate-400">단일 게임 최고 점수</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-black text-sm text-indigo-600 dark:text-indigo-400">
                    {progress.highScores.classicMax.toLocaleString()}점
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0">
          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="px-5 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
