export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'profound';

export type GameMode = 'classic' | 'survival' | 'timeattack' | 'daily' | 'flashcard' | 'cbt';

export interface DifficultyInfo {
  level: DifficultyLevel;
  label: string;
  badgeColor: string;
  badgeBg: string;
  stars: number;
  description: string;
}

export interface Question {
  id: string;
  topic: string;
  difficulty: DifficultyLevel;
  difficultyLabel: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  deepKnowledge: string; // 심오한 지식 한 걸음 더 (배경 지식, 심화 원리)
  sourceOrTrivia?: string;
  wrongOptionsReason?: string[]; // 각 오답 선택지별 왜 오답인지 심층 분석
  tailQuestions?: Record<number, Question>; // 선지별 사전 정의된 꼬리 질문 (0, 1, 2, 3)
}

export interface QuizSettings {
  mode: GameMode;
  questionCount: number; // 5, 10, 15, 20
  difficultyMode: 'progressive' | 'custom'; // 단계별 난이도 상승 vs 특정 난이도 고정
  selectedDifficulty?: DifficultyLevel;
  timeLimitSeconds: number; // 0 for untimed, 15, 30
  cbtTotalMinutes?: number; // Total exam duration for CBT (e.g., 10, 15, 20, 30)
  soundEnabled: boolean;
  bgmEnabled: boolean;
  autoAdvance: boolean;
}

export interface CbtAnswerState {
  selectedIndex: number; // -1 if not marked, 0..3
  isFlagged: boolean;
  timeSpentSeconds: number;
}

export interface MistakeEntry {
  questionId: string;
  question: Question;
  wrongCount: number;
  consecutiveCorrectCount: number;
  lastWrongAt: string;
  lastReviewedAt: string;
  userNote?: string;
  status: 'learning' | 'mastered';
}

export interface UserAnswer {
  questionId: string;
  question: Question;
  selectedIndex: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizResult {
  mode: GameMode;
  topic: string;
  totalQuestions: number;
  correctAnswersCount: number;
  score: number; // calculated with difficulty weights and streak
  accuracyPercentage: number;
  totalTimeSeconds: number;
  answers: UserAnswer[];
  tierTitle: string;
  tierDescription: string;
  difficultyBreakdown: Record<DifficultyLevel, { total: number; correct: number }>;
  xpEarned: number;
  streakMax: number;
  isNewRecord?: boolean;
}

export interface TopicPreset {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  sampleQuestionsCount: number;
  tags: string[];
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  condition: (progress: UserProgress, latestResult?: QuizResult) => boolean;
}

export interface UserProgress {
  xp: number;
  level: number;
  levelTitle: string;
  gamesPlayed: number;
  totalCorrect: number;
  currentStreakDays: number;
  lastPlayedDate: string; // YYYY-MM-DD
  bookmarks: string[]; // Question IDs
  unlockedAchievementIds: string[];
  highScores: {
    survival: number;
    timeattack: number;
    classicMax: number;
  };
}
