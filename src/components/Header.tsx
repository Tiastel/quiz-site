import type React from 'react';
import {
  Moon,
  Sun,
  Volume2,
  VolumeX,
  KeyRound,
  BrainCircuit,
  Award,
  Bookmark,
  Music,
  Flame,
  BarChart3,
  Keyboard,
  Database,
  Compass,
  BookOpen,
  Zap,
} from 'lucide-react';

import { audioService } from '../services/audioService';
import type { UserProgress } from '../types/quiz';
import { getLevelInfo } from '../services/progressService';

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  bgmEnabled: boolean;
  onToggleBgm: () => void;
  hasApiKey: boolean;
  onOpenApiKeyModal: () => void;
  onGoHome: () => void;
  userProgress: UserProgress;
  onOpenAchievements: () => void;
  onOpenBookmarks: () => void;
  onOpenStats: () => void;
  onOpenShortcuts: () => void;
  onOpenKnowledgePack: () => void;
  onOpenMistakes?: () => void;
  mistakesCount?: number;
  onOpenRadar?: () => void;
  totalQuestionsCount?: number;
  onOpenConceptMatch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  soundEnabled,
  onToggleSound,
  bgmEnabled,
  onToggleBgm,
  hasApiKey,
  onOpenApiKeyModal,
  onGoHome,
  userProgress,
  onOpenAchievements,
  onOpenBookmarks,
  onOpenStats,
  onOpenShortcuts,
  onOpenKnowledgePack,
  onOpenMistakes,
  mistakesCount = 0,
  onOpenRadar,
  totalQuestionsCount = 1500,
  onOpenConceptMatch,
}) => {
  const levelInfo = getLevelInfo(userProgress.xp);
  const xpPercent = Math.min(
    100,
    Math.round((levelInfo.currentLevelXp / levelInfo.nextLevelXp) * 100)
  );

  return (
    <header className="sticky top-0 z-40 w-full glass border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            audioService.playClick();
            onGoHome();
          }}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <BrainCircuit className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                DeepQuiz
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
              상식부터 심오한 지식까지
            </p>
          </div>
        </button>

        {/* Center/User Gamification info (Level & Streak) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Daily Streak */}
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold"
            title={`현재 ${userProgress.currentStreakDays}일 연속 출석 중!`}
          >
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{userProgress.currentStreakDays}일</span>
          </div>

          {/* Level Pill */}
          <button
            onClick={() => {
              audioService.playClick();
              onOpenAchievements();
            }}
            className="flex items-center gap-2 p-1 pl-2.5 pr-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="업적 및 레벨 진행도 보기"
          >
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-slate-800 dark:text-slate-200">
                <span>Lv.{levelInfo.level}</span>
                <span className="font-semibold text-slate-500 dark:text-slate-400 text-[10px] hidden md:inline">
                  {levelInfo.title}
                </span>
              </div>
              <div className="w-16 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-0.5">
                <div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
            <Award className="w-4 h-4 text-amber-500" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Knowledge Store & Packs */}
          <button
            onClick={() => {
              audioService.playClick();
              onOpenKnowledgePack();
            }}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800/80 transition-colors flex items-center gap-1.5 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-900/60"
            title="지식 저장소 & 퀴즈 팩 센터"
          >
            <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden sm:inline-block text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              {totalQuestionsCount}
            </span>
          </button>

          {/* Quizlet Concept Match */}
          {onOpenConceptMatch && (
            <button
              onClick={() => {
                audioService.playClick();
                onOpenConceptMatch();
              }}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors flex items-center gap-1.5 border border-amber-200/60 dark:border-amber-800/60 shadow-sm"
              title="Quizlet 스타일 스피드 개념 매칭 게임"
            >
              <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span className="hidden md:inline-block text-[11px] font-extrabold">개념 매칭</span>
            </button>
          )}

          {/* Knowledge Radar */}
          {onOpenRadar && (
            <button
              onClick={() => {
                audioService.playClick();
                onOpenRadar();
              }}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="12대 학문 지식 숙련도 & 레이더 진단"
            >
              <Compass className="w-4 h-4 text-indigo-500" />
            </button>
          )}

          {/* Mistake Note Vault */}
          {onOpenMistakes && (
            <button
              onClick={() => {
                audioService.playClick();
                onOpenMistakes();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 text-rose-600 dark:text-rose-400 font-bold text-xs border border-rose-200/70 dark:border-rose-900/50 shadow-sm transition-all"
              title="스마트 오답노트 & 오답 정복소"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">오답노트</span>
              {mistakesCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-black min-w-4 text-center">
                  {mistakesCount > 99 ? '99+' : mistakesCount}
                </span>
              )}
            </button>
          )}

          {/* Stats & Records */}
          <button
            onClick={() => {
              audioService.playClick();
              onOpenStats();
            }}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="나의 퀴즈 통계 & 기록"
          >
            <BarChart3 className="w-4 h-4" />
          </button>

          {/* Bookmarks */}
          <button
            onClick={() => {
              audioService.playClick();
              onOpenBookmarks();
            }}
            className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="보관함"
          >
            <Bookmark className="w-4 h-4" />
            {userProgress.bookmarks.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-500" />
            )}
          </button>

          {/* Keyboard Shortcuts Guide */}
          <button
            onClick={() => {
              audioService.playClick();
              onOpenShortcuts();
            }}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:inline-flex"
            title="키보드 단축키 안내 (?)"
          >
            <Keyboard className="w-4 h-4" />
          </button>

          {/* Ambient BGM toggle */}
          <button
            onClick={onToggleBgm}
            className={`p-2 rounded-xl transition-colors flex items-center gap-1.5 ${
              bgmEnabled
                ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 ring-1 ring-purple-500/20'
                : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={bgmEnabled ? '집중 BGM 끄기 (M)' : '집중 앰비언트 BGM 켜기 (M)'}
          >
            <Music className={`w-4 h-4 ${bgmEnabled ? 'animate-pulse' : ''}`} />
            {bgmEnabled && (
              <span className="flex items-end gap-0.5 h-3.5 px-0.5">
                <span className="w-0.5 bg-purple-500 rounded-full animate-bounce h-full" style={{ animationDuration: '0.6s' }} />
                <span className="w-0.5 bg-purple-500 rounded-full animate-bounce h-2/3" style={{ animationDuration: '0.4s' }} />
                <span className="w-0.5 bg-purple-500 rounded-full animate-bounce h-4/5" style={{ animationDuration: '0.8s' }} />
              </span>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            aria-label="효과음 켜기/끄기"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={soundEnabled ? '효과음 끄기' : '효과음 켜기'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-indigo-500" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label="테마 전환"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={darkMode ? '라이트 모드로 변경' : '다크 모드로 변경'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* AI Key Status Button */}
          <button
            onClick={() => {
              audioService.playClick();
              onOpenApiKeyModal();
            }}
            className={`p-2 rounded-xl transition-all ${
              hasApiKey
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Gemini AI 설정"
          >
            <KeyRound className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
