import type { Question, MistakeEntry } from '../types/quiz';

const MISTAKE_VAULT_KEY = 'deepquiz_mistake_vault';

export function getAllMistakes(): MistakeEntry[] {
  try {
    const raw = localStorage.getItem(MISTAKE_VAULT_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveAllMistakes(entries: MistakeEntry[]): void {
  try {
    localStorage.setItem(MISTAKE_VAULT_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error('Failed to save mistake vault:', err);
  }
}

export function recordMistake(question: Question): void {
  const entries = getAllMistakes();
  const existingIdx = entries.findIndex((e) => e.questionId === question.id);
  const now = new Date().toISOString();

  if (existingIdx >= 0) {
    entries[existingIdx].wrongCount += 1;
    entries[existingIdx].consecutiveCorrectCount = 0;
    entries[existingIdx].lastWrongAt = now;
    entries[existingIdx].lastReviewedAt = now;
    entries[existingIdx].status = 'learning';
    // update question content in case it has newer details
    entries[existingIdx].question = question;
  } else {
    entries.unshift({
      questionId: question.id,
      question,
      wrongCount: 1,
      consecutiveCorrectCount: 0,
      lastWrongAt: now,
      lastReviewedAt: now,
      status: 'learning',
    });
  }

  saveAllMistakes(entries);
}

export function recordCorrectReview(questionId: string): void {
  const entries = getAllMistakes();
  const existing = entries.find((e) => e.questionId === questionId);
  if (!existing) return;

  existing.consecutiveCorrectCount += 1;
  existing.lastReviewedAt = new Date().toISOString();
  if (existing.consecutiveCorrectCount >= 2) {
    existing.status = 'mastered';
  }

  saveAllMistakes(entries);
}

export function updateMistakeUserNote(questionId: string, userNote: string): void {
  const entries = getAllMistakes();
  const item = entries.find((e) => e.questionId === questionId);
  if (item) {
    item.userNote = userNote;
    saveAllMistakes(entries);
  }
}

export function removeMistake(questionId: string): void {
  const entries = getAllMistakes().filter((e) => e.questionId !== questionId);
  saveAllMistakes(entries);
}

export function clearMasteredMistakes(): void {
  const entries = getAllMistakes().filter((e) => e.status !== 'mastered');
  saveAllMistakes(entries);
}

export function clearAllMistakes(): void {
  localStorage.removeItem(MISTAKE_VAULT_KEY);
}

export function getMistakeStats() {
  const entries = getAllMistakes();
  const total = entries.length;
  const learning = entries.filter((e) => e.status === 'learning').length;
  const mastered = entries.filter((e) => e.status === 'mastered').length;

  const topicCountMap: Record<string, number> = {};
  entries.forEach((e) => {
    const t = e.question.topic || '기타';
    topicCountMap[t] = (topicCountMap[t] || 0) + 1;
  });

  const sortedTopics = Object.entries(topicCountMap).sort((a, b) => b[1] - a[1]);

  return {
    total,
    learning,
    mastered,
    topVulnerableTopics: sortedTopics.slice(0, 3).map(([topic, count]) => ({ topic, count })),
  };
}
