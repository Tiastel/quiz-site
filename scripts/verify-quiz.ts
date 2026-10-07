import { TOPIC_PRESETS, CURATED_QUESTIONS } from '../src/services/quizBank.ts';
import { getLevelInfo } from '../src/services/progressService.ts';
import { generateQuiz, calculateQuizResult } from '../src/services/quizGenerator.ts';

console.log('🧪 [DeepQuiz Verification Suite] Starting comprehensive validation...\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    passCount++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failCount++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

// 1. Verify TOPIC_PRESETS
console.log('1. Validating TOPIC_PRESETS...');
assert(TOPIC_PRESETS.length === 12, `12 presets registered (found: ${TOPIC_PRESETS.length})`);
TOPIC_PRESETS.forEach((preset) => {
  assert(preset.title.length > 0, `Preset "${preset.id}" has non-empty title`);
  assert(preset.description.length > 0, `Preset "${preset.id}" has non-empty description`);
  assert(preset.tags.length >= 3, `Preset "${preset.id}" has at least 3 tags`);
  assert(Boolean(CURATED_QUESTIONS[preset.id]), `Preset "${preset.id}" exists in CURATED_QUESTIONS`);
});

// 2. Verify CURATED_QUESTIONS integrity
console.log('\n2. Validating CURATED_QUESTIONS data integrity...');
let totalQuestions = 0;
for (const [category, questions] of Object.entries(CURATED_QUESTIONS)) {
  assert(questions.length >= 125, `Category "${category}" has >= 125 questions (found: ${questions.length})`);
  totalQuestions += questions.length;

  questions.forEach((q, idx) => {
    const qLabel = `${category}[${idx}] (${q.id})`;
    assert(q.options.length === 4, `${qLabel} has exactly 4 options`);
    assert(new Set(q.options).size === 4, `${qLabel} has 4 distinct unique options`);
    assert(q.correctIndex >= 0 && q.correctIndex <= 3, `${qLabel} correctIndex is valid (0~3)`);
    assert(q.question.trim().length > 5, `${qLabel} question text is substantial`);
    assert(q.explanation.trim().length > 10, `${qLabel} explanation is detailed`);
    assert(q.deepKnowledge.trim().length > 10, `${qLabel} deepKnowledge is detailed`);
    assert(['easy', 'medium', 'hard', 'profound'].includes(q.difficulty), `${qLabel} difficulty is valid`);
  });
}
console.log(`  Total verified questions: ${totalQuestions}`);
assert(totalQuestions >= 1500, `Total verified questions must be >= 1500 (actual: ${totalQuestions})`);

// 3. Verify Progress & Level Calculation
console.log('\n3. Validating Progress & Level System...');
assert(getLevelInfo(0).level === 1, '0 XP is Level 1');
assert(getLevelInfo(60).level === 2, '60 XP is Level 2');
assert(getLevelInfo(240).level === 3, '240 XP is Level 3');
assert(getLevelInfo(540).level === 4, '540 XP is Level 4');
assert(getLevelInfo(10000).level >= 10, '10,000 XP is at least Level 10');
assert(getLevelInfo(100000).title.length > 0, 'High XP has a noble title');

// 4. Verify Quiz Result Calculation
console.log('\n4. Validating Quiz Result Scoring...');
const dummyAnswers = [
  { questionId: '1', question: CURATED_QUESTIONS.space[0], selectedIndex: 0, isCorrect: true, timeSpentSeconds: 5 },
  { questionId: '2', question: CURATED_QUESTIONS.space[1], selectedIndex: 0, isCorrect: true, timeSpentSeconds: 4 },
  { questionId: '3', question: CURATED_QUESTIONS.space[2], selectedIndex: 1, isCorrect: false, timeSpentSeconds: 8 },
];
const result = calculateQuizResult('우주 & 천문학', dummyAnswers, 'classic');
assert(result.totalQuestions === 3, 'Result accurately tracks total questions');
assert(result.correctAnswersCount === 2, 'Result tracks correct answer count');
assert(result.accuracyPercentage === 67, `Accuracy calculated correctly (found ${result.accuracyPercentage}%)`);
assert(result.score > 0, 'Score is greater than 0');
assert(result.tierTitle.length > 0, 'Tier title is assigned');

// 5. Verify Offline Custom Topic Quiz Generator
console.log('\n5. Validating Offline Quiz Generator for Custom Topics...');
async function testGenerator() {
  const customGen = await generateQuiz('미래 양자 컴퓨터', {
    questionCount: 5,
    difficultyMode: 'progressive',
    timeLimitSeconds: 30,
    mode: 'classic',
  });
  assert(customGen.questions.length === 5, `Generated exactly 5 progressive questions for custom topic (found: ${customGen.questions.length})`);
  assert(customGen.questions[0].difficulty === 'easy', 'First question is easy');
  assert(customGen.questions[4].difficulty === 'profound', 'Final question is profound');

  // 6. Verify Knowledge Store & Pack Import System
  console.log('\n6. Validating Knowledge Store & Pack Import Engine...');
  const { isValidQuestion, importQuestionPack } = await import('../src/services/knowledgeStoreService.ts');
  
  assert(isValidQuestion(CURATED_QUESTIONS.space[0]), 'Curated question passes isValidQuestion schema check');
  assert(!isValidQuestion({}), 'Empty object fails isValidQuestion schema check');
  assert(!isValidQuestion({ question: 'short', options: ['A', 'B'] }), 'Incomplete question fails isValidQuestion check');

  const testPackJson = JSON.stringify({
    version: '2.0',
    topic: '테스트 지식 팩',
    questions: [
      {
        id: 'test_import_1',
        topic: '테스트 지식 팩',
        question: '테스트용 샘플 문제입니다. 정답은 1번인가요?',
        options: ['정답 1번', '오답 2번', '오답 3번', '오답 4번'],
        correctIndex: 0,
        explanation: '정답은 1번이 맞습니다.',
        deepKnowledge: '테스트 심화 지식 내용입니다.',
      },
    ],
  });

  const importResult = importQuestionPack(testPackJson);
  assert(importResult.success === true, 'JSON pack imports successfully');
  assert(importResult.importedCount === 1, 'Imported count is exactly 1');

  // 7. Verify Tail Question Engine (선지 연계 꼬리 문제 시스템)
  console.log('\n7. Validating Tail Question Engine (꼬리 질문 시스템)...');
  const { resolveTailQuestion } = await import('../src/services/tailQuestionService.ts');
  const parentQ = CURATED_QUESTIONS.space[0];
  const tailQ = await resolveTailQuestion(parentQ, '토성', 0);
  assert(tailQ.options.length === 4, 'Tail question for "토성" has 4 options');
  assert(tailQ.question.includes('토성') || tailQ.explanation.includes('토성'), 'Tail question contextually mentions target option');
  assert(tailQ.explanation.length > 10, 'Tail question has detailed explanation');
  assert(Boolean(tailQ.wrongOptionsReason && tailQ.wrongOptionsReason.length === 4), 'Tail question has full 4-option trap breakdown');
  assert(tailQ.options.every((opt) => opt.length > 15), 'Tail question options are academically detailed (no superficial single-word giveaways)');

  const proceduralTailQ = await resolveTailQuestion(parentQ, '미지의 고난도 물리 현상', 3);
  assert(proceduralTailQ.options.length === 4, 'Procedural tail question has 4 options');
  assert(proceduralTailQ.correctIndex >= 0 && proceduralTailQ.correctIndex < 4, 'Procedural tail question correctIndex is valid');
  assert(proceduralTailQ.options.every((opt) => opt.length > 20), 'Procedural tail options are substantive theoretical propositions');
  // 8. Verify Korean Grammar & Particle Engine (받침 판별 및 은(는) 제거)
  console.log('\n8. Validating Korean Grammar & Particle Attachment Engine...');
  const { attachJosa, formatNaturalKorean } = await import('../src/utils/koreanUtils.ts');

  assert(attachJosa('구축 효과', '은/는') === '구축 효과는', 'attachJosa("구축 효과", "은/는") -> "구축 효과는" (no 받침)');
  assert(attachJosa('가격의 하방경직성', '은/는') === '가격의 하방경직성은', 'attachJosa("가격의 하방경직성", "은/는") -> "가격의 하방경직성은" (받침 ㅇ)');
  assert(attachJosa('인플레이션 나선', '을/를') === '인플레이션 나선을', 'attachJosa("인플레이션 나선", "을/를") -> "인플레이션 나선을" (받침 ㄴ)');
  assert(attachJosa('유동성 함정', '이/가') === '유동성 함정이', 'attachJosa("유동성 함정", "이/가") -> "유동성 함정이" (받침 ㅇ)');
  assert(attachJosa('포논', '으로/로') === '포논으로', 'attachJosa("포논", "으로/로") -> "포논으로" (받침 ㄴ)');
  assert(attachJosa('물질', '으로/로') === '물질로', 'attachJosa("물질", "으로/로") -> "물질로" (받침 ㄹ rule)');
  assert(
    formatNaturalKorean('구축 효과은(는) 시장의 이자율이(가) 상승하는 현상이다.') ===
      '구축 효과는 시장의 이자율이 상승하는 현상이다.',
    'formatNaturalKorean cleanly replaces 은(는) and 이(가) with natural particles'
  );

  // 9. Verify Rich Distractor Concept Explanation Engine (오답 선지 1~2줄 개념 해설)
  console.log('\n9. Validating Rich Distractor Concept Explanation Engine...');
  const { getOptionExplanation } = await import('../src/services/optionExplanationService.ts');
  const ec89 = CURATED_QUESTIONS.economy.find((q) => q.id === 'ec_89')!;
  assert(Boolean(ec89), 'Question ec_89 exists in economy category');

  const exp0 = getOptionExplanation(ec89, 0);
  const exp1 = getOptionExplanation(ec89, 1);
  const exp2 = getOptionExplanation(ec89, 2);
  const exp3 = getOptionExplanation(ec89, 3);

  assert(exp0.startsWith('정답입니다.'), 'ec_89 correct option explanation starts with "정답입니다."');
  assert(exp1.includes('물가 상승') || exp1.includes('임금'), 'ec_89 option 1 (인플레이션 나선) has authentic concept explanation');
  assert(exp2.includes('이자율') || exp2.includes('통화'), 'ec_89 option 2 (유동성 함정) has authentic concept explanation');
  assert(exp3.includes('국채') || exp3.includes('이자율') || exp3.includes('투자'), 'ec_89 option 3 (구축 효과) has authentic concept explanation');

  assert(!exp1.includes('문제의 핵심 조건과 부합하지 않습니다'), 'ec_89 option 1 eliminated generic placeholder');
  assert(!exp2.includes('문제의 핵심 조건과 부합하지 않습니다'), 'ec_89 option 2 eliminated generic placeholder');
  assert(!exp3.includes('문제의 핵심 조건과 부합하지 않습니다'), 'ec_89 option 3 eliminated generic placeholder');
  assert(!exp3.includes('은(는)'), 'ec_89 option 3 has no awkward "은(는)" bracket');

  // Verify across all categories: generic placeholders are eliminated
  let genericCount = 0;
  for (const questions of Object.values(CURATED_QUESTIONS)) {
    for (let i = 0; i < Math.min(10, questions.length); i++) {
      const q = questions[i];
      for (let oIdx = 0; oIdx < q.options.length; oIdx++) {
        const expl = getOptionExplanation(q, oIdx);
        if (expl.includes('문제의 핵심 조건과 부합하지 않습니다')) {
          genericCount++;
        }
      }
    }
  }
  assert(genericCount === 0, `Generic distractor placeholders strictly 0 across entire sample bank (found: ${genericCount})`);

  console.log('\n=============================================');
  console.log(`Test Results: ${passCount} PASSED, ${failCount} FAILED`);
  console.log('=============================================');

  if (failCount > 0) {
    process.exit(1);
  }
}

testGenerator().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
