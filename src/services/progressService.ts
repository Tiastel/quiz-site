import type { UserProgress, QuizResult, Achievement, Question } from '../types/quiz';
import { CURATED_QUESTIONS } from './quizBank';

const PROGRESS_STORAGE_KEY = 'deepquiz_user_progress_v2';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_quiz',
    title: '지적 탐구의 첫걸음',
    description: '첫 번째 퀴즈를 완료했습니다.',
    icon: '🌱',
    xpReward: 50,
    condition: (p) => p.gamesPlayed >= 1,
  },
  {
    id: 'perfect_100',
    title: '완전무결한 지성',
    description: '퀴즈에서 100% 정답률을 기록했습니다.',
    icon: '💯',
    xpReward: 150,
    condition: (_, r) => !!r && r.accuracyPercentage === 100 && r.totalQuestions >= 5,
  },
  {
    id: 'streak_5',
    title: '거침없는 연승 가도',
    description: '한 게임에서 5문제 연속 정답을 기록했습니다.',
    icon: '🔥',
    xpReward: 100,
    condition: (_, r) => !!r && r.streakMax >= 5,
  },
  {
    id: 'profound_scholar',
    title: '심오한 진리의 탐색자',
    description: '최고난도 \'심오한 지식\' 문제를 통달했습니다.',
    icon: '👑',
    xpReward: 200,
    condition: (_, r) => !!r && (r.difficultyBreakdown.profound?.correct || 0) >= 2,
  },
  {
    id: 'survival_survivor',
    title: '불사신의 지식인',
    description: '서바이벌 모드에서 7문제 이상 생존했습니다.',
    icon: '🛡️',
    xpReward: 200,
    condition: (_, r) => !!r && r.mode === 'survival' && r.correctAnswersCount >= 7,
  },
  {
    id: 'speed_demon',
    title: '찰나의 번개 직관',
    description: '타임어택 모드에서 3,000점 이상을 획득했습니다.',
    icon: '⚡',
    xpReward: 200,
    condition: (_, r) => !!r && r.mode === 'timeattack' && r.score >= 3000,
  },
  {
    id: 'streak_days_3',
    title: '매일 사유하는 습관',
    description: '3일 연속으로 퀴즈에 출석했습니다.',
    icon: '📅',
    xpReward: 300,
    condition: (p) => p.currentStreakDays >= 3,
  },
  {
    id: 'cbt_pass',
    title: 'CBT 실전 시험관',
    description: 'CBT 실전 모의고사에서 80점 이상으로 합격했습니다.',
    icon: '🎓',
    xpReward: 250,
    condition: (_, r) => !!r && r.mode === 'cbt' && r.accuracyPercentage >= 80,
  },
];

export function getLevelInfo(xp: number): { level: number; title: string; currentLevelXp: number; nextLevelXp: number } {
  // Level formula: Level = Math.floor(Math.sqrt(xp / 60)) + 1
  const level = Math.floor(Math.sqrt(xp / 60)) + 1;
  const currentLevelStartXp = Math.pow(level - 1, 2) * 60;
  const nextLevelXp = Math.pow(level, 2) * 60;
  const currentLevelXp = xp - currentLevelStartXp;

  let title = '지식 입문자';
  if (level >= 25) title = '지식의 석학 (Omniscient Master)';
  else if (level >= 18) title = '학술 마스터';
  else if (level >= 12) title = '사유의 구도자';
  else if (level >= 7) title = '박학다식한 지식인';
  else if (level >= 4) title = '호기심 탐구자';

  return { level, title, currentLevelXp, nextLevelXp: nextLevelXp - currentLevelStartXp };
}

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }

  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    const { level, title } = getLevelInfo(parsed.xp || 0);

    return {
      xp: parsed.xp || 0,
      level,
      levelTitle: title,
      gamesPlayed: parsed.gamesPlayed || 0,
      totalCorrect: parsed.totalCorrect || 0,
      currentStreakDays: parsed.currentStreakDays || 1,
      lastPlayedDate: parsed.lastPlayedDate || '',
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
      unlockedAchievementIds: Array.isArray(parsed.unlockedAchievementIds) ? parsed.unlockedAchievementIds : [],
      highScores: {
        survival: parsed.highScores?.survival || 0,
        timeattack: parsed.highScores?.timeattack || 0,
        classicMax: parsed.highScores?.classicMax || 0,
      },
    };
  } catch {
    return getDefaultProgress();
  }
}

function getDefaultProgress(): UserProgress {
  return {
    xp: 0,
    level: 1,
    levelTitle: '지식 입문자',
    gamesPlayed: 0,
    totalCorrect: 0,
    currentStreakDays: 1,
    lastPlayedDate: '',
    bookmarks: [],
    unlockedAchievementIds: [],
    highScores: {
      survival: 0,
      timeattack: 0,
      classicMax: 0,
    },
  };
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage quota
  }
}

export function recordQuizCompletion(result: QuizResult): {
  updatedProgress: UserProgress;
  newAchievements: Achievement[];
  leveledUp: boolean;
} {
  const current = loadUserProgress();
  const todayStr = new Date().toISOString().split('T')[0];

  // Daily Streak calculation
  let nextStreakDays = current.currentStreakDays;
  if (!current.lastPlayedDate) {
    nextStreakDays = 1;
  } else if (current.lastPlayedDate !== todayStr) {
    const lastDate = new Date(current.lastPlayedDate);
    const today = new Date(todayStr);
    const diffDays = Math.round((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      nextStreakDays += 1;
    } else if (diffDays > 1) {
      nextStreakDays = 1;
    }
  }

  // Calculate XP gained from result
  // base XP: 10 per correct answer, + bonus for score
  const xpGained = Math.max(10, Math.floor(result.score / 15) + result.correctAnswersCount * 10);
  const oldLevel = current.level;
  const nextXp = current.xp + xpGained;
  const { level: newLevel, title: newTitle } = getLevelInfo(nextXp);

  // High Scores update
  const newHighScores = { ...current.highScores };
  if (result.mode === 'survival' && result.score > newHighScores.survival) {
    newHighScores.survival = result.score;
  } else if (result.mode === 'timeattack' && result.score > newHighScores.timeattack) {
    newHighScores.timeattack = result.score;
  } else if (result.mode === 'classic' && result.score > newHighScores.classicMax) {
    newHighScores.classicMax = result.score;
  }

  const updated: UserProgress = {
    ...current,
    xp: nextXp,
    level: newLevel,
    levelTitle: newTitle,
    gamesPlayed: current.gamesPlayed + 1,
    totalCorrect: current.totalCorrect + result.correctAnswersCount,
    currentStreakDays: nextStreakDays,
    lastPlayedDate: todayStr,
    highScores: newHighScores,
  };

  // Check achievements
  const newAchievements: Achievement[] = [];
  for (const ach of ACHIEVEMENTS) {
    if (!updated.unlockedAchievementIds.includes(ach.id)) {
      if (ach.condition(updated, result)) {
        updated.unlockedAchievementIds.push(ach.id);
        updated.xp += ach.xpReward;
        newAchievements.push(ach);
      }
    }
  }

  saveUserProgress(updated);

  return {
    updatedProgress: updated,
    newAchievements,
    leveledUp: newLevel > oldLevel,
  };
}

export function toggleBookmarkQuestion(questionId: string): boolean {
  const current = loadUserProgress();
  const exists = current.bookmarks.includes(questionId);
  const nextBookmarks = exists
    ? current.bookmarks.filter((id) => id !== questionId)
    : [...current.bookmarks, questionId];

  current.bookmarks = nextBookmarks;
  saveUserProgress(current);
  return !exists;
}

export function isQuestionBookmarked(questionId: string): boolean {
  const current = loadUserProgress();
  return current.bookmarks.includes(questionId);
}

export function getAllBookmarkedQuestions(): Question[] {
  const current = loadUserProgress();
  const allCurated: Question[] = [];
  Object.values(CURATED_QUESTIONS).forEach((list) => {
    allCurated.push(...list);
  });

  return allCurated.filter((q) => current.bookmarks.includes(q.id));
}

export function addBonusXp(amount: number): UserProgress {
  const current = loadUserProgress();
  const nextXp = current.xp + amount;
  const { level: newLevel, title: newTitle } = getLevelInfo(nextXp);

  const updated: UserProgress = {
    ...current,
    xp: nextXp,
    level: newLevel,
    levelTitle: newTitle,
  };

  saveUserProgress(updated);
  return updated;
}

