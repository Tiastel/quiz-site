import fs from 'fs';
import path from 'path';

console.log('Generating domain factual datasets...');

// We will generate the 3 files:
// scripts/data/scienceDomains.ts
// scripts/data/humanitiesDomains.ts
// scripts/data/techSocietyDomains.ts

// Helper to format an item
interface QItemDef {
  q: string;
  opts: [string, string, string, string];
  cIdx: number;
  exp: string;
  deep: string;
  src: string;
  diff: 'easy' | 'medium' | 'hard' | 'profound';
  diffLabel: string;
}

export function writeDomainFile(filename: string, exportName: string, data: Record<string, { topicName: string; prefix: string; items: QItemDef[] }>) {
  const content = `import type { DifficultyLevel } from '../../src/types/quiz';

interface RawItem {
  q: string;
  opts: [string, string, string, string];
  cIdx: number;
  exp: string;
  deep: string;
  src: string;
  diff: DifficultyLevel;
  diffLabel: string;
}

export const ${exportName}: Record<string, { topicName: string; prefix: string; items: RawItem[] }> = ${JSON.stringify(data, null, 2)};
`;
  fs.writeFileSync(filename, content, 'utf-8');
  console.log(`Saved ${filename}`);
}
