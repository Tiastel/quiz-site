import fs from 'fs';
import path from 'path';
import type { Question, DifficultyLevel } from '../src/types/quiz';

console.log('🚀 [Mega Question Bank Builder] Generating 768 new high-caliber curated questions...');

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

// Helper to format question
function makeQ(id: string, topic: string, raw: RawItem): Question {
  return {
    id,
    topic,
    difficulty: raw.diff,
    difficultyLabel: raw.diffLabel,
    question: raw.q,
    options: raw.opts,
    correctIndex: raw.cIdx,
    explanation: raw.exp,
    deepKnowledge: raw.deep,
    sourceOrTrivia: raw.src,
  };
}

// We will load or build domains
const outputDir = path.resolve(process.cwd(), 'src/data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Define the comprehensive knowledge builder for all 12 domains
const { DOMAIN_KNOWLEDGE_SETS } = await import('./data/domainKnowledgeSets.ts');

const megaBank: Record<string, Question[]> = {};
let totalGenerated = 0;

for (const [domainKey, domainData] of Object.entries(DOMAIN_KNOWLEDGE_SETS)) {
  const list: Question[] = [];
  domainData.items.forEach((item, idx) => {
    const qNum = 21 + idx; // 21 to 84 (64 questions per domain)
    const id = `${domainData.prefix}_${qNum}`;
    list.push(makeQ(id, domainData.topicName, item));
  });
  megaBank[domainKey] = list;
  totalGenerated += list.length;
  console.log(`  ✓ Domain [${domainKey}] generated: ${list.length} questions (IDs: ${domainData.prefix}_21 ~ ${domainData.prefix}_${20 + list.length})`);
}

const outputPath = path.join(outputDir, 'megaQuestions.json');
fs.writeFileSync(outputPath, JSON.stringify(megaBank, null, 2), 'utf-8');

console.log(`\n🎉 Total Mega Questions Generated: ${totalGenerated} across ${Object.keys(megaBank).length} domains.`);
console.log(`📁 Saved to: ${outputPath}`);
