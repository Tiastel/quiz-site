import type { Question } from '../types/quiz';
import { CURATED_QUESTIONS } from './quizBank';

const STORAGE_KEY = 'deepquiz_learned_knowledge_v1';

export interface KnowledgeStoreStats {
  curatedCount: number;
  learnedCount: number;
  totalCount: number;
  topicsCount: number;
  topics: string[];
  lastUpdated: number;
}

// Load learned questions from localStorage
export function loadLearnedQuestions(): Record<string, Question[]> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load learned knowledge store:', err);
    return {};
  }
}

// Get all learned questions flattened as a single array
export function getAllLearnedQuestions(): Question[] {
  const store = loadLearnedQuestions();
  return Object.values(store).flat();
}

// Save learned questions dictionary to localStorage
export function saveLearnedStore(store: Record<string, Question[]>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (err) {
    console.error('Failed to save learned knowledge store:', err);
  }
}

// Automatically learn & accumulate questions for a given topic
export function learnQuestions(topic: string, newQuestions: Question[]): number {
  if (!newQuestions || newQuestions.length === 0) return 0;

  const store = loadLearnedQuestions();
  const normalizedKey = topic.trim().toLowerCase();
  const existing = store[normalizedKey] || [];

  // Deduplicate by question text similarity or ID
  const existingQuestionsSet = new Set(existing.map((q) => q.question.trim().toLowerCase()));
  const toAdd: Question[] = [];

  for (const q of newQuestions) {
    const key = q.question.trim().toLowerCase();
    if (!existingQuestionsSet.has(key)) {
      existingQuestionsSet.add(key);
      toAdd.push(q);
    }
  }

  if (toAdd.length > 0) {
    store[normalizedKey] = [...existing, ...toAdd];
    saveLearnedStore(store);
  }

  return toAdd.length;
}

// Get merged questions for a topic (Curated Bank + Learned Bank)
export function getMergedQuestionsForTopic(topic: string, curatedList: Question[] = []): Question[] {
  const store = loadLearnedQuestions();
  const clean = topic.trim().toLowerCase();

  // Find exact or partial matching topics in learned store
  const learnedList: Question[] = [];
  for (const [tKey, qList] of Object.entries(store)) {
    if (tKey === clean || tKey.includes(clean) || clean.includes(tKey)) {
      learnedList.push(...qList);
    }
  }

  // Combine and deduplicate
  const seenTexts = new Set<string>();
  const combined: Question[] = [];

  for (const q of [...curatedList, ...learnedList]) {
    const textKey = q.question.trim().toLowerCase();
    if (!seenTexts.has(textKey)) {
      seenTexts.add(textKey);
      combined.push(q);
    }
  }

  return combined;
}

// Get overall knowledge statistics
export function getKnowledgeStats(): KnowledgeStoreStats {
  let curatedCount = 0;
  for (const list of Object.values(CURATED_QUESTIONS)) {
    curatedCount += list.length;
  }

  const store = loadLearnedQuestions();
  let learnedCount = 0;
  const uniqueTopics = new Set<string>();

  for (const [topicKey, list] of Object.entries(store)) {
    uniqueTopics.add(topicKey);
    learnedCount += list.length;
  }

  return {
    curatedCount,
    learnedCount,
    totalCount: curatedCount + learnedCount,
    topicsCount: Object.keys(CURATED_QUESTIONS).length + uniqueTopics.size,
    topics: Array.from(uniqueTopics),
    lastUpdated: Date.now(),
  };
}

// Validate individual question schema
export function isValidQuestion(item: unknown): item is Question {
  if (!item || typeof item !== 'object') return false;
  const q = item as Partial<Question>;
  return (
    typeof q.question === 'string' &&
    q.question.trim().length > 3 &&
    Array.isArray(q.options) &&
    q.options.length === 4 &&
    typeof q.correctIndex === 'number' &&
    q.correctIndex >= 0 &&
    q.correctIndex <= 3 &&
    typeof q.explanation === 'string'
  );
}

// Import external JSON question pack
export function importQuestionPack(jsonString: string): { success: boolean; importedCount: number; message: string } {
  try {
    const parsed = JSON.parse(jsonString);
    let questionsToImport: Question[] = [];
    let defaultTopic = '외부 지식 팩';

    if (Array.isArray(parsed)) {
      questionsToImport = parsed.filter(isValidQuestion);
    } else if (parsed && typeof parsed === 'object') {
      if (typeof parsed.topic === 'string') {
        defaultTopic = parsed.topic;
      }
      if (Array.isArray(parsed.questions)) {
        questionsToImport = parsed.questions.filter(isValidQuestion);
      }
    }

    if (questionsToImport.length === 0) {
      return {
        success: false,
        importedCount: 0,
        message: '유효한 4지선다 퀴즈 문항을 찾을 수 없습니다. (질문, 4개 선택지, 정답 인덱스 필수)',
      };
    }

    // Group by topic and save
    let totalAdded = 0;
    const store = loadLearnedQuestions();

    for (const q of questionsToImport) {
      const qTopic = (q.topic || defaultTopic).trim().toLowerCase();
      const existing = store[qTopic] || [];
      const hasDuplicate = existing.some((e) => e.question.trim().toLowerCase() === q.question.trim().toLowerCase());

      if (!hasDuplicate) {
        existing.push({
          ...q,
          id: q.id || `imported_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          topic: q.topic || defaultTopic,
          difficulty: q.difficulty || 'medium',
          difficultyLabel: q.difficultyLabel || '일반 지식',
          deepKnowledge: q.deepKnowledge || q.explanation,
        });
        store[qTopic] = existing;
        totalAdded++;
      }
    }

    saveLearnedStore(store);

    return {
      success: true,
      importedCount: totalAdded,
      message: `${totalAdded}개의 새로운 고품질 지식 문항이 영구 저장소에 추가되었습니다!`,
    };
  } catch (err) {
    return {
      success: false,
      importedCount: 0,
      message: `JSON 파싱 오류: ${err instanceof Error ? err.message : '알 수 없는 형식입니다.'}`,
    };
  }
}

// Export knowledge store as downloadable JSON string
export function exportKnowledgePack(): string {
  const store = loadLearnedQuestions();
  const allCurated: Question[] = [];
  for (const list of Object.values(CURATED_QUESTIONS)) {
    allCurated.push(...list);
  }

  const exportPayload = {
    exportedAt: new Date().toISOString(),
    version: '1.0.0',
    stats: getKnowledgeStats(),
    curatedCount: allCurated.length,
    learnedStore: store,
  };

  return JSON.stringify(exportPayload, null, 2);
}

// Clear only learned store (resetting to base curated bank)
export function clearLearnedStore(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
