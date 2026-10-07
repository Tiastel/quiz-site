import { useState } from 'react';
import type React from 'react';
import {
  Search,
  Sparkles,
  Orbit,
  Landmark,
  Cpu,
  Atom,
  Compass,
  Globe,
  Dna,
  TrendingUp,
  Palette,
  Brain,
  SlidersHorizontal,
  Flame,
  ArrowRight,
  KeyRound,
  Calendar,
  Shield,
  Zap,
  Layers,
  BookOpen,
  FileText,
} from 'lucide-react';

import { TOPIC_PRESETS } from '../services/quizBank';
import type { QuizSettings, DifficultyLevel, GameMode } from '../types/quiz';
import { audioService } from '../services/audioService';

interface TopicSelectorProps {
  currentTopic: string;
  onSelectTopic: (topic: string) => void;
  settings: QuizSettings;
  onUpdateSettings: (settings: Partial<QuizSettings>) => void;
  onStartQuiz: () => void;
  isLoading: boolean;
  hasApiKey: boolean;
  onOpenApiKeyModal: () => void;
  onOpenConceptMatch?: () => void;
  onOpenMistakes?: () => void;
  mistakesCount?: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Orbit,
  Landmark,
  Cpu,
  Atom,
  Compass,
  Globe,
  Dna,
  TrendingUp,
  Palette,
  Brain,
  BookOpen,
};

const SUGGESTIONS = [
  '전 분야 통합 실전 모의고사',
  '우주와 블랙홀',
  '조선 후기 실학',
  '트랜스포머와 LLM',
  '칸트의 윤리학',
  'DNA 유전공학',
  '로마 제국의 흥망',
  '게임 이론과 내쉬 균형',
  '양자 얽힘의 신비',
  '바우하우스 디자인',
  '뇌의 신경가소성',
];

const PRESET_CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: '과학', label: '과학/지구' },
  { id: '역사', label: '역사/문명' },
  { id: 'IT/기술', label: 'IT/AI' },
  { id: '인문학', label: '인문/문학/철학' },
  { id: '경제/사회', label: '경제/사회' },
  { id: '예술', label: '예술/문화' },
  { id: '심리학', label: '심리/인지' },
];

const GAME_MODES: {
  id: GameMode;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  icon: React.ElementType;
}[] = [
  {
    id: 'classic',
    title: '클래식 탐구',
    badge: '추천',
    badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
    desc: '선택 주제의 상식부터 심오한 지식까지',
    icon: Sparkles,
  },
  {
    id: 'cbt',
    title: 'CBT 실전 모의고사',
    badge: 'OMR 시험',
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
    desc: '실시간 OMR 카드 마킹 & 2단 시험지 실전 시뮬레이션',
    icon: FileText,
  },
  {
    id: 'daily',
    title: '오늘의 퀴즈',
    badge: 'DAILY',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    desc: '매일 자정 갱신되는 5대 분야 챌린지',
    icon: Calendar,
  },
  {
    id: 'survival',
    title: '서바이벌',
    badge: '❤️❤️❤️',
    badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
    desc: '목숨 3개로 무한히 오르는 서든데스',
    icon: Shield,
  },
  {
    id: 'timeattack',
    title: '타임어택 60초',
    badge: '스피드런',
    badgeColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300',
    desc: '60초 동안 연속 정답 콤보 폭격',
    icon: Zap,
  },
  {
    id: 'flashcard',
    title: '플래시카드',
    badge: '암기 학습',
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    desc: '3D 카드 뒤집기로 핵심 지식 완벽 암기',
    icon: Layers,
  },
];

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  currentTopic,
  onSelectTopic,
  settings,
  onUpdateSettings,
  onStartQuiz,
  isLoading,
  hasApiKey,
  onOpenApiKeyModal,
  onOpenConceptMatch,
  onOpenMistakes,
  mistakesCount = 0,
}) => {
  const [inputVal, setInputVal] = useState(currentTopic);
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (settings.mode !== 'daily' && settings.mode !== 'survival' && settings.mode !== 'timeattack' && !inputVal.trim()) return;
    audioService.playClick();
    if (inputVal.trim()) {
      onSelectTopic(inputVal.trim());
    }
    onStartQuiz();
  };

  const handlePresetClick = (presetTitle: string) => {
    audioService.playSelect();
    setInputVal(presetTitle);
    onSelectTopic(presetTitle);
  };

  const handleSuggestionClick = (sug: string) => {
    audioService.playSelect();
    setInputVal(sug);
    onSelectTopic(sug);
  };

  const handleSelectMode = (mode: GameMode) => {
    audioService.playSelect();
    onUpdateSettings({ mode });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-8 animate-pop">
      {/* Hero Header */}
      <div className="text-center space-y-3.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>상식부터 최고난도 심오한 지식까지 한 번에</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          지식의 깊이를{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            경험하는 순간
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          가벼운 일상 상식부터 학술적 통찰이 담긴 최고난도 지식까지, 
          엄선된 퀴즈와 정밀한 해설로 당신의 지적 지평을 넓혀드립니다.
        </p>
      </div>

      {/* Smart Mistake Note Banner (Automatic Save & Review) */}
      {mistakesCount > 0 && onOpenMistakes && (
        <div className="p-4 rounded-3xl bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-indigo-500/10 border border-rose-200 dark:border-rose-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm animate-pop">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  스마트 오답노트에 {mistakesCount}문항이 자동 저장되어 있습니다
                </span>
                <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black">
                  복습 추천
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                틀렸던 문제들의 핵심 개념과 함정 선지를 다시 점검하고 100% 완벽히 정복해보세요!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              onOpenMistakes();
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md shadow-rose-600/20 shrink-0 flex items-center justify-center gap-1.5"
          >
            <span>오답 정복소 열기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Game Mode Switcher Bar */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            게임 모드 선택
          </span>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            현재: {GAME_MODES.find((m) => m.id === settings.mode)?.title}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {GAME_MODES.map((mode) => {
            const isSelected = settings.mode === mode.id;
            const IconComp = mode.icon;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => handleSelectMode(mode.id)}
                className={`p-3 rounded-2xl border-2 text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/50 shadow-md shadow-indigo-600/10 scale-[1.02]'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${mode.badgeColor}`}>
                    {mode.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                    {mode.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {mode.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topic Input Bar (Visible in Classic & Flashcard modes) */}
      {(settings.mode === 'classic' || settings.mode === 'flashcard') && (
        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto space-y-2">
          <div className="relative flex items-center shadow-xl shadow-indigo-500/10 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/30 dark:border-indigo-500/40 p-2 focus-within:border-indigo-600 dark:focus-within:border-indigo-400 transition-all">
            <Search className="w-5 h-5 ml-3 text-slate-400 shrink-0" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="어떤 주제든 입력해보세요 (예: 양자역학, 조선왕조, 인공지능...)"
              className="w-full px-3 py-2.5 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm sm:text-base focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !inputVal.trim()}
              className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>생성 중...</span>
                </span>
              ) : (
                <>
                  <span>{settings.mode === 'flashcard' ? '카드 열기' : '도전하기'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Suggestion Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-slate-400 dark:text-slate-500 font-medium shrink-0 ml-1">추천:</span>
            {SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                type="button"
                onClick={() => handleSuggestionClick(sug)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* AI Engine Status chip */}
          <div className="flex items-center justify-between text-[11px] px-1 text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${hasApiKey ? 'bg-emerald-500 animate-pulse' : 'bg-indigo-400'}`} />
              <span>
                엔진: {hasApiKey ? 'Google Gemini AI 활성화 (모든 주제 무제한)' : '내장 지식 DB & 스마트 합성 엔진'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                audioService.playClick();
                onOpenApiKeyModal();
              }}
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <KeyRound className="w-3 h-3" />
              <span>{hasApiKey ? 'API 키 관리' : 'AI 연동 설정'}</span>
            </button>
          </div>
        </form>
      )}

      {/* Special Banner for Daily / Survival / TimeAttack modes */}
      {(settings.mode === 'daily' || settings.mode === 'survival' || settings.mode === 'timeattack') && (
        <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white shadow-xl space-y-4 text-center">
          <div className="text-3xl">
            {settings.mode === 'daily' && '📅'}
            {settings.mode === 'survival' && '🛡️'}
            {settings.mode === 'timeattack' && '⚡'}
          </div>

          <div>
            <h3 className="text-xl font-black">
              {settings.mode === 'daily' && '오늘의 데일리 퀴즈 챌린지'}
              {settings.mode === 'survival' && '서바이벌 서든데스 챌린지'}
              {settings.mode === 'timeattack' && '60초 스피드런 타임어택'}
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100 mt-1 max-w-md mx-auto leading-relaxed">
              {settings.mode === 'daily' &&
                '과학, 역사, IT, 인문, 경제 5개 영역에서 엄선된 오늘의 5문제를 풀고 일일 스트릭을 기록하세요!'}
              {settings.mode === 'survival' &&
                '하트 3개(❤️❤️❤️)를 부여받고 기초 상식부터 최고난도 심오한 지식까지 무한히 올라가는 도전입니다!'}
              {settings.mode === 'timeattack' &&
                '60초 카운트다운! 정답을 맞출 때마다 3초 보너스! 찰나의 순간 최대 점수를 기록하세요!'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onStartQuiz()}
            disabled={isLoading}
            className="px-8 py-3.5 rounded-2xl bg-white text-indigo-600 font-black text-base shadow-lg hover:bg-indigo-50 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            {isLoading ? '문제 생성 중...' : '지금 바로 시작하기 🚀'}
          </button>
        </div>
      )}

      {/* Settings Customization Bar (Classic & CBT mode) */}
      {(settings.mode === 'classic' || settings.mode === 'cbt') && (
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {settings.mode === 'cbt' ? 'CBT 모의고사 옵션 설정' : '퀴즈 옵션 설정'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowSettingsDrawer(!showSettingsDrawer)}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {showSettingsDrawer ? '간단히 보기' : '상세 설정 변경'}
            </button>
          </div>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Question Count */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-2.5">
              <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                문항 수
              </label>
              <div className="grid grid-cols-4 gap-1">
                {[5, 10, 15, 20].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => {
                      audioService.playClick();
                      onUpdateSettings({ questionCount: cnt });
                    }}
                    className={`py-1 text-xs font-bold rounded-lg transition-all ${
                      settings.questionCount === cnt
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {cnt}문항
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Progression */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-2.5">
              <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                난이도 모드
              </label>
              <div className="grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    onUpdateSettings({ difficultyMode: 'progressive' });
                  }}
                  className={`py-1 text-xs font-bold rounded-lg transition-all ${
                    settings.difficultyMode === 'progressive'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                  title="상식부터 심오한 지식까지 순차적으로 난이도가 상승합니다."
                >
                  단계별 상승 🌟
                </button>
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    onUpdateSettings({
                      difficultyMode: 'custom',
                      selectedDifficulty: settings.selectedDifficulty || 'hard',
                    });
                  }}
                  className={`py-1 text-xs font-bold rounded-lg transition-all ${
                    settings.difficultyMode === 'custom'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  특정 난이도
                </button>
              </div>
            </div>

            {/* Timer or CBT Duration */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-2.5">
              <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                {settings.mode === 'cbt' ? 'CBT 총 시험 시간' : '문제당 제한 시간'}
              </label>
              {settings.mode === 'cbt' ? (
                <div className="grid grid-cols-3 gap-1">
                  {[10, 15, 20].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => {
                        audioService.playClick();
                        onUpdateSettings({ cbtTotalMinutes: mins });
                      }}
                      className={`py-1 text-xs font-bold rounded-lg transition-all ${
                        (settings.cbtTotalMinutes || 15) === mins
                          ? 'bg-purple-600 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {mins}분
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { sec: 0, label: '무제한' },
                    { sec: 30, label: '30초' },
                    { sec: 15, label: '15초' },
                  ].map(({ sec, label }) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => {
                        audioService.playClick();
                        onUpdateSettings({ timeLimitSeconds: sec });
                      }}
                      className={`py-1 text-xs font-bold rounded-lg transition-all ${
                        settings.timeLimitSeconds === sec
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Detailed Drawer if custom difficulty is selected */}
          {settings.difficultyMode === 'custom' && (
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                원하는 난이도 고정 선택:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'easy', label: '🌱 기초 상식', desc: '누구나 아는 일상 상식' },
                  { id: 'medium', label: '📘 일반 지식', desc: '교양 및 학과 기초' },
                  { id: 'hard', label: '🔥 심화 지식', desc: '전문 메커니즘' },
                  { id: 'profound', label: '👑 심오한 지식', desc: '석학급 학술적 통찰' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => {
                      audioService.playClick();
                      onUpdateSettings({ selectedDifficulty: lvl.id as DifficultyLevel });
                    }}
                    className={`p-2 rounded-xl text-left border transition-all ${
                      settings.selectedDifficulty === lvl.id
                        ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/50 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      {lvl.label}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {lvl.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Preset Topics Grid (Visible in Classic, CBT, and Flashcard modes) */}
      {(settings.mode === 'classic' || settings.mode === 'flashcard' || settings.mode === 'cbt') && (
        <div className="space-y-3.5">
          {/* Featured Comprehensive Mock Exam Banner */}
          <div
            onClick={() => handleSuggestionClick('전 분야 통합 실전 모의고사')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm ${
              inputVal === '전 분야 통합 실전 모의고사'
                ? 'border-indigo-600 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/60 dark:via-purple-950/40 dark:to-pink-950/40 ring-2 ring-indigo-500/20'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700'
            }`}
          >
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0 mx-auto sm:mx-0">
                🏆
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    전과목 종합
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    12대 학술 영역 균형 출제 · 1,500문항 풀
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base mt-0.5">
                  전 분야 통합 실전 모의고사 (All-Domain Comprehensive)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  우주·역사·AI·철학·경제·예술·생물·심리 등 12개 전 영역에서 골고루 출제되는 실전 종합 역량 평가
                </p>
              </div>
            </div>

            <button
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                inputVal === '전 분야 통합 실전 모의고사'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {inputVal === '전 분야 통합 실전 모의고사' ? '선택됨 ✓' : '선택하기'}
            </button>
          </div>

          <div className="flex items-center justify-between pt-1 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                엄선된 12대 지식 탐구 과목별 테마 (총 1,500문항 기출)
              </h2>
            </div>
            {onOpenConceptMatch && (
              <button
                type="button"
                onClick={() => {
                  audioService.playClick();
                  onOpenConceptMatch();
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300/50 dark:border-amber-800/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition flex items-center gap-1.5 shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>⚡ 스피드 개념 매칭 (Quizlet 모드)</span>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {PRESET_CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? TOPIC_PRESETS.length
                  : TOPIC_PRESETS.filter((p) => p.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[10px] ${
                      isActive ? 'text-indigo-200' : 'text-slate-400'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {(selectedCategory === 'all'
              ? TOPIC_PRESETS
              : TOPIC_PRESETS.filter((p) => p.category === selectedCategory)
            ).map((preset) => {
              const IconComp = ICON_MAP[preset.iconName] || Orbit;
              const isSelected = inputVal === preset.title;

              return (
                <div
                  key={preset.id}
                  onClick={() => handlePresetClick(preset.title)}
                  className={`group relative p-4 rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20 bg-indigo-50/30 dark:bg-indigo-950/20 shadow-md'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    {/* Category & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${preset.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                          {preset.sampleQuestionsCount}문항
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {preset.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {preset.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {preset.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {preset.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Direct Play CTA banner for selected topic */}
      {(settings.mode === 'classic' || settings.mode === 'flashcard' || settings.mode === 'cbt') && inputVal.trim() && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white flex items-center justify-between shadow-lg shadow-indigo-600/20">
          <div>
            <div className="text-xs font-medium text-indigo-100">
              {settings.mode === 'flashcard'
                ? '플래시카드 암기 주제'
                : settings.mode === 'cbt'
                ? 'CBT 실전 모의고사 시험 분야'
                : '선택된 주제'}
            </div>
            <div className="text-base font-bold flex items-center gap-1.5 mt-0.5">
              <span>"{inputVal}"</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-normal">
                {settings.mode === 'flashcard'
                  ? '암기 모드'
                  : settings.mode === 'cbt'
                  ? `${settings.questionCount}문항 · ${settings.cbtTotalMinutes || 15}분 제한`
                  : `${settings.questionCount}문항 · 단계별 상승`}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleSubmit()}
            disabled={isLoading}
            className="px-5 py-2.5 rounded-xl bg-white text-indigo-600 font-bold text-sm shadow hover:bg-indigo-50 active:scale-95 transition-all shrink-0"
          >
            {isLoading
              ? '준비 중...'
              : settings.mode === 'flashcard'
              ? '카드 시작 📇'
              : settings.mode === 'cbt'
              ? 'CBT 시험 시작 📝'
              : '지금 시작하기 🚀'}
          </button>
        </div>
      )}
    </div>
  );
};
