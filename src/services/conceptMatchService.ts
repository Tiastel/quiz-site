import type { Question } from '../types/quiz';
import { CURATED_QUESTIONS } from './quizBank';

export interface MatchPair {
  id: string;
  term: string;
  definition: string;
}

export interface MatchTile {
  tileId: string;
  pairId: string;
  type: 'term' | 'definition';
  text: string;
}

function truncateDefinition(text: string, maxLen = 45): string {
  // Clean up markdown / quotes
  const clean = text.replace(/[*_#`$]/g, '').trim();
  if (clean.length <= maxLen) return clean;
  // Try to cut at punctuation
  const firstSentence = clean.split(/[.!?]\s/)[0];
  if (firstSentence.length >= 15 && firstSentence.length <= maxLen + 10) {
    return firstSentence;
  }
  return clean.slice(0, maxLen).trim() + '...';
}

export function generateMatchTiles(topicId: string): { tiles: MatchTile[]; pairs: MatchPair[] } {
  const pool: Question[] = CURATED_QUESTIONS[topicId] || [];
  if (pool.length === 0) {
    return { tiles: [], pairs: [] };
  }

  // Shuffle and pick 6 questions with concise correct answer terms
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected: Question[] = [];
  const usedTerms = new Set<string>();

  for (const q of shuffled) {
    const term = q.options[q.correctIndex].trim();
    if (term.length > 0 && term.length <= 25 && !usedTerms.has(term)) {
      usedTerms.add(term);
      selected.push(q);
      if (selected.length === 6) break;
    }
  }

  // Fallback if less than 6
  if (selected.length < 6) {
    for (const q of shuffled) {
      if (!selected.includes(q)) {
        selected.push(q);
        if (selected.length === 6) break;
      }
    }
  }

  const pairs: MatchPair[] = selected.map((q, idx) => ({
    id: `pair_${idx}_${q.id}`,
    term: q.options[q.correctIndex],
    definition: truncateDefinition(q.explanation || q.deepKnowledge),
  }));

  // Create 12 tiles
  const tiles: MatchTile[] = [];
  pairs.forEach((p) => {
    tiles.push({
      tileId: `term_${p.id}`,
      pairId: p.id,
      type: 'term',
      text: p.term,
    });
    tiles.push({
      tileId: `def_${p.id}`,
      pairId: p.id,
      type: 'definition',
      text: p.definition,
    });
  });

  // Randomize the 12 tiles in grid
  tiles.sort(() => Math.random() - 0.5);

  return { tiles, pairs };
}

const STORAGE_KEY_PREFIX = 'deepquiz_match_best_';

export function getBestMatchTime(topicId: string): number | null {
  try {
    const val = localStorage.getItem(`${STORAGE_KEY_PREFIX}${topicId}`);
    return val ? parseFloat(val) : null;
  } catch {
    return null;
  }
}

export function saveBestMatchTime(topicId: string, timeSeconds: number): boolean {
  try {
    const current = getBestMatchTime(topicId);
    if (current === null || timeSeconds < current) {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}${topicId}`, timeSeconds.toFixed(2));
      return true; // New record!
    }
    return false;
  } catch {
    return false;
  }
}
