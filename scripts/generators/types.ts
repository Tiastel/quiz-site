import type { Question, DifficultyLevel } from '../../src/types/quiz';

export interface RawQDef {
  q: string;
  opts: [string, string, string, string];
  cIdx: number;
  exp: string;
  deep: string;
  src: string;
  diff: DifficultyLevel;
  diffLabel: string;
}

export function buildDomainQuestions(
  prefix: string,
  topic: string,
  items: RawQDef[]
): Question[] {
  return items.map((item, idx) => ({
    id: `${prefix}_${21 + idx}`,
    topic,
    difficulty: item.diff,
    difficultyLabel: item.diffLabel,
    question: item.q,
    options: item.opts,
    correctIndex: item.cIdx,
    explanation: item.exp,
    deepKnowledge: item.deep,
    sourceOrTrivia: item.src,
  }));
}
