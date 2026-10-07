const fs = require('fs');
const path = require('path');

const science = require('./data/scienceUltra.cjs');
const bioEarth = require('./data/bioEarthUltra.cjs');
const econPsychArt = require('./data/econPsychArtUltra.cjs');
const hist = require('./data/historyPhilosophyUltra.cjs');
const world = require('./data/worldHistoryUltra.cjs');
const phil = require('./data/philosophyUltra.cjs');
const lit = require('./data/literatureUltra.cjs');
const aics = require('./data/aiCsUltra.cjs');

const allDatasets = {
  space: science.space,
  physics_quantum: science.physics_quantum,
  biology_medicine: bioEarth.biology_medicine,
  earth_environment: bioEarth.earth_environment,
  korean_history: hist.korean_history,
  world_history: world.world_history,
  philosophy: phil.philosophy,
  literature_classics: lit.literature,
  ai_cs: aics.ai_cs,
  economy: econPsychArt.economics_finance,
  psychology_brain: econPsychArt.psychology,
  art_culture: econPsychArt.fine_art
};

function balanceQuestion(q, idx) {
  const newOptions = [...q.options];
  const newReasons = q.wrongOptionsReason ? [...q.wrongOptionsReason] : [];
  const targetIdx = idx % 4;
  const currentIdx = q.correctIndex;
  
  if (currentIdx !== targetIdx) {
    const tempOpt = newOptions[currentIdx];
    newOptions[currentIdx] = newOptions[targetIdx];
    newOptions[targetIdx] = tempOpt;
    
    if (newReasons.length === 4) {
      const tempRsn = newReasons[currentIdx];
      newReasons[currentIdx] = newReasons[targetIdx];
      newReasons[targetIdx] = tempRsn;
    }
  }

  // Ensure wrongOptionsReason is populated
  if (!newReasons || newReasons.length < 4) {
    const filledReasons = [];
    for (let i = 0; i < 4; i++) {
      if (i === targetIdx) {
        filledReasons.push(`정답입니다. ${q.explanation}`);
      } else {
        filledReasons.push(`오답 선지입니다. 해당 항목은 문제의 조건과 부합하지 않습니다.`);
      }
    }
    return {
      ...q,
      options: newOptions,
      correctIndex: targetIdx,
      wrongOptionsReason: filledReasons
    };
  }
  
  return {
    ...q,
    options: newOptions,
    correctIndex: targetIdx,
    wrongOptionsReason: newReasons
  };
}

const compiled = {};
let totalCount = 0;

for (const [topicKey, questions] of Object.entries(allDatasets)) {
  if (!Array.isArray(questions)) {
    throw new Error(`Topic ${topicKey} is not an array`);
  }
  if (questions.length !== 25) {
    throw new Error(`Topic ${topicKey} does not have exactly 25 questions, got ${questions.length}`);
  }
  compiled[topicKey] = questions.map((q, idx) => balanceQuestion(q, idx));
  totalCount += questions.length;
}

console.log(`Successfully compiled ${totalCount} ultra questions across ${Object.keys(compiled).length} topics.`);

const tsContent = `// Auto-generated 300 Deep-Knowledge Ultra Questions (25 per domain x 12 domains)
// Brings total platform question bank to exactly 1,500 questions!
import type { Question } from '../types/quiz';

export const ULTRA_QUESTIONS: Record<string, Question[]> = ${JSON.stringify(compiled, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/data/ultraQuestions.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');
console.log(`Saved ultra questions to ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
