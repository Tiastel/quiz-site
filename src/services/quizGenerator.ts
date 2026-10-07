import type { Question, DifficultyLevel, QuizSettings, UserAnswer } from '../types/quiz';

import { CURATED_QUESTIONS, TOPIC_PRESETS } from './quizBank';
import { generateQuizWithGemini, hasApiKey } from './geminiService';
import {
  learnQuestions,
  getMergedQuestionsForTopic,
  getAllLearnedQuestions,
} from './knowledgeStoreService';

// Utility to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Randomize options for a question while preserving correctIndex
function randomizeQuestionOptions(q: Question): Question {
  const correctOptionText = q.options[q.correctIndex];
  const shuffledOptions = shuffleArray(q.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

  return {
    ...q,
    options: shuffledOptions,
    correctIndex: newCorrectIndex,
  };
}

// Find closest matching preset from user input topic
export function findMatchingPresetKey(topic: string): string | null {
  const clean = topic.toLowerCase().trim();

  // Direct ID or Title match
  for (const preset of TOPIC_PRESETS) {
    if (
      preset.id.toLowerCase() === clean ||
      preset.title.toLowerCase().includes(clean) ||
      clean.includes(preset.title.toLowerCase())
    ) {
      return preset.id;
    }

    // Check tags
    for (const tag of preset.tags) {
      if (clean.includes(tag.toLowerCase()) || tag.toLowerCase().includes(clean)) {
        return preset.id;
      }
    }
  }

  // Keywords heuristic
  const keywordMap: Record<string, string[]> = {
    space: ['우주', '별', '행성', '은하', '블랙홀', '태양', '달', '천문', '나사', '화성', '빅뱅', '성운', '아폴로'],
    korean_history: ['한국사', '조선', '고려', '삼국', '신라', '백제', '고구려', '세종', '이순신', '왕조', '근현대사', '역사', '독립'],
    ai_cs: ['ai', '인공지능', '컴퓨터', '코딩', '소프트웨어', '알고리즘', '머신러닝', '딥러닝', 'llm', '개발자', '프로그래밍', '자료구조', '네트워크'],
    physics_quantum: ['물리', '양자', '역학', '상대성', '아인슈타인', '뉴턴', '엔트로피', '입자', '빛', '에너지', '전자기', '원자'],
    philosophy: ['철학', '사상', '소크라테스', '플라톤', '칸트', '니체', '윤리', '인식론', '실존', '생각', '도덕'],
    world_history: ['세계사', '로마', '그리스', '문명', '혁명', '전쟁', '유럽', '미국', '중국', '제국', '조약'],
    biology_medicine: ['생물', '생명', '의학', 'dna', '유전', '세포', '면역', '바이러스', '단백질', '진화'],
    economy: ['경제', '금융', '주식', '금리', '인플레이션', '시장', '투자', '자본', '통화', '부동산', '화폐'],
    art_culture: ['미술', '예술', '그림', '디자인', '모나리자', '피카소', '바우하우스', '전시', '회화', '건축', '조각'],
    psychology_brain: ['심리', '뇌', '기억', '인지', '파블로프', '밀그램', '카너먼', '신경', '편향', '무의식', '행동'],
    literature_classics: ['문학', '고전', '소설', '희곡', '시', '작가', '셰익스피어', '괴테', '도스토옙스키', '카프카', '카뮈'],
    earth_environment: ['지구', '지구과학', '환경', '기후', '대기', '해양', '지질', '지진', '화산', '엘니뇨', '온실가스', '생태'],
  };

  for (const [key, keywords] of Object.entries(keywordMap)) {
    if (keywords.some((kw) => clean.includes(kw))) {
      return key;
    }
  }

  return null;
}

// Procedural dynamic synthesizer for any novel or custom topic
function synthesizeQuestionsForTopic(topic: string, count: number): Question[] {
  const templates: {
    difficulty: DifficultyLevel;
    difficultyLabel: string;
    makeQ: (t: string) => {
      question: string;
      options: [string, string, string, string];
      correctIndex: number;
      explanation: string;
      deepKnowledge: string;
    };
  }[] = [
    {
      difficulty: 'easy',
      difficultyLabel: '기초 상식',
      makeQ: (t) => ({
        question: `"${t}" 분야를 처음 접할 때 가장 기본적이면서 널리 합의된 정의 및 출발점은 무엇일까요?`,
        options: [
          `${t}의 고유한 현상과 구조를 경험적·체계적으로 이해하고 탐구하는 기초 체계`,
          '어떠한 법칙성도 없이 완전히 무작위로 발생하는 일시적 유행',
          '오직 소수의 전문가만이 비밀리에 구전으로만 전수하는 신비주의 지식',
          '현대에는 완전히 용도 폐기되어 역사적 기록으로만 남은 가설',
        ],
        correctIndex: 0,
        explanation: `${t}의 본질은 축적된 관찰과 원리를 통해 현상을 체계화하고 실생활 및 지적 지평에 기여하는 학술적·실천적 체계에 있습니다.`,
        deepKnowledge: `${t}의 기원을 추적해보면 인류가 자연 현상이나 사회적 상호작용을 더 효율적으로 이해하고 통제하려는 실용적 문제 해결 과정에서 시작되었습니다.`,
      }),
    },
    {
      difficulty: 'easy',
      difficultyLabel: '기초 상식',
      makeQ: (t) => ({
        question: `"${t}"와(과) 관련하여 대중적으로 널리 퍼져 있으나 실제로는 왜곡되거나 오해하기 쉬운 통념은?`,
        options: [
          '단기간에 단 하나의 요인이나 마법 같은 만능 해결책으로 모든 결과가 결정된다는 편견',
          '체계적인 학습과 지속적인 관찰을 통해 점진적으로 심화된다는 사실',
          '기초 원리를 이해할수록 응용 범위가 더욱 넓어진다는 법칙',
          '다양한 학문 분야와 상호 융합될 때 새로운 혁신이 촉진된다는 점',
        ],
        correctIndex: 0,
        explanation: `${t}뿐만 아니라 대부분의 깊이 있는 영역은 단일 요인이 아닌 복합적인 메커니즘과 시스템적 맥락 속에서 작동합니다.`,
        deepKnowledge: `비판적 사고(Critical Thinking)에서는 이러한 단순화의 함정을 경계하고 구성 요소 간의 상호작용과 피드백 루프를 입체적으로 분석하는 것이 필수적입니다.`,
      }),
    },
    {
      difficulty: 'medium',
      difficultyLabel: '일반 지식',
      makeQ: (t) => ({
        question: `"${t}"의 발전사에서 전통적 방식의 패러다임을 극적으로 전환시킨 핵심 동력은 무엇일까요?`,
        options: [
          '정량적 측정 도구의 도입 및 데이터에 기반한 실증적 검증 체계의 정립',
          '모든 외부 교류를 전면 차단하고 폐쇄적인 독자 규범만을 고수한 결정',
          '수학적·논리적 인과관계를 배제하고 오직 감각적 직관에만 의존한 전환',
          '경쟁자들의 모든 연구 활동을 법적으로 영구 금지한 독점 조치',
        ],
        correctIndex: 0,
        explanation: `${t}의 역사는 경험적 관찰을 넘어 정확한 측정 도구와 객관적 검증 프로세스가 결합되면서 비약적인 진보를 이룩했습니다.`,
        deepKnowledge: `토머스 쿤이 <과학혁명의 구조>에서 설파했듯, 기존 패러다임이 설명하지 못하는 변칙 사례들이 누적될 때 새로운 패러다임으로의 패러다임 시프트(Paradigm Shift)가 일어납니다.`,
      }),
    },
    {
      difficulty: 'medium',
      difficultyLabel: '일반 지식',
      makeQ: (t) => ({
        question: `"${t}"을(를) 효과적으로 분석하고 예측하기 위해 현대 전문가들이 가장 중시하는 핵심 접근법은?`,
        options: [
          '부분과 전체의 피드백을 함께 고려하는 시스템적 사고(Systems Thinking)와 다변수 분석',
          '과거의 단일 성공 사례 하나만을 모든 상황에 무조건 대입하는 단선적 모방',
          '새롭게 관측된 최신 데이터와 반증 사례들을 의도적으로 무시하는 보수주의',
          '비용과 시간 효율성을 완전히 무시하고 오직 이론적 추상화에만 머무는 방식',
        ],
        correctIndex: 0,
        explanation: `현대의 ${t} 분석은 비선형적 상호작용과 환경 변수를 종합적으로 고려하는 시스템적 접근을 표준으로 삼습니다.`,
        deepKnowledge: `복잡계 과학(Complexity Science)에 따르면 개별 요소의 단순한 합 이상의 창발적 특성(Emergence)이 나타나므로 국소적 분석만으로는 전체 거동을 설명할 수 없습니다.`,
      }),
    },
    {
      difficulty: 'hard',
      difficultyLabel: '심화 지식',
      makeQ: (t) => ({
        question: `"${t}"의 심화 메커니즘에서 발생하는 근본적인 '트레이드오프(Trade-off)' 상충 관계는 무엇일까요?`,
        options: [
          '유연성과 적응성을 극대화할 때 특정 환경에서의 정밀한 효율성이 희생되는 상충 관계',
          '자원을 무한정 투입할수록 산출 효율이 영원히 기하급수적으로 증가하는 선형적 비례',
          '모든 오류 가능성을 완전히 0%로 만들면서도 시스템 비용이 전혀 증가하지 않는 특성',
          '외부 환경의 변화가 시스템 내부의 안정성에 아무런 영향을 주지 않는 완전한 고립성',
        ],
        correctIndex: 0,
        explanation: `엔지니어링, 자연과학, 사회과학을 막론하고 ${t}의 고도화 과정에서는 안전성 vs 기민성, 효율성 vs 유연성 간의 상충 관계를 최적화하는 것이 최대 난제입니다.`,
        deepKnowledge: `파레토 프론티어(Pareto Frontier) 이론에 따르면 이미 최적화된 상태에서는 한쪽 목표를 개선하려면 반드시 다른 쪽 목표의 일부 희생이 수반됩니다.`,
      }),
    },
    {
      difficulty: 'hard',
      difficultyLabel: '심화 지식',
      makeQ: (t) => ({
        question: `"${t}" 연구 및 실무에서 데이터 해석 시 치명적인 편향을 피하기 위해 검증해야 하는 원리는?`,
        options: [
          '단순한 상관관계(Correlation)와 엄밀한 인과관계(Causation)의 구별 및 교란 변수의 통제',
          '자신의 가설을 지지하는 데이터만 선별적으로 수집하는 확증 편향의 극대화',
          '표본의 대표성을 배제하고 가장 극단적인 이상치(Outlier) 하나로 전체를 단정하기',
          '시간의 흐름에 따른 변동성을 무시하고 특정 시점의 단면 데이터만 영구 일반화하기',
        ],
        correctIndex: 0,
        explanation: `${t}의 깊이 있는 이해를 위해서는 두 변수가 함께 움직인다는 사실(상관관계)만으로 원인과 결과라 속단하지 않고 잠재적 교란 요인을 통제하는 것이 필수적입니다.`,
        deepKnowledge: `펄(Judea Pearl)의 인과추론(Causal Inference) 이론에서는 방향성 비순환 그래프(DAG)와 do-연산자를 통해 개입(Intervention)에 따른 실제 인과 효과를 수학적으로 정식화합니다.`,
      }),
    },
    {
      difficulty: 'profound',
      difficultyLabel: '심오한 지식',
      makeQ: (t) => ({
        question: `"${t}"의 본질을 학술적·철학적 최고 정점에서 탐구할 때 마주하게 되는 궁극적 딜레마는?`,
        options: [
          '관측자 시스템 자신이 관측 대상의 상태와 궤적에 필연적으로 개입하고 영향을 미치는 상호의존성의 한계',
          '우주의 모든 지식이 단 하나의 유한한 명제로 완벽하게 압축될 수 있다는 절대적 확신',
          '시간이 흘러도 모든 물리적·사회적 상태가 영원히 정지된 채 불변한다는 정상 상태 가설',
          '모든 현상을 오직 하나의 기초 물리 입자 성질로만 환원하면 완전히 해결된다는 극단적 기계론',
        ],
        correctIndex: 0,
        explanation: `양자역학의 관측 문제, 사회과학의 자기실현적 예언(Self-fulfilling Prophecy)처럼, ${t}을(를) 인식하고 모델링하는 주체 자체가 대상의 일부로 얽혀 있다는 점이 가장 심오한 인식론적 난제입니다.`,
        deepKnowledge: `괴델의 불완전성 정리가 증명하듯, 충분히 강력하고 무모순인 어떤 형식 체계도 체계 내부에서 스스로의 무모순성을 증명할 수 없다는 한계는 지식 탐구의 본원적 겸허함을 상기시킵니다.`,
      }),
    },
    {
      difficulty: 'profound',
      difficultyLabel: '심오한 지식',
      makeQ: (t) => ({
        question: `"${t}" 분야의 최첨단 미해결 과제와 미래적 함의를 관통하는 핵심 화두는?`,
        options: [
          '지속 가능성과 회복탄력성(Resilience)을 담보하면서 엔트로피 증가와 복잡성 위기를 어떻게 극복할 것인가',
          '더 이상의 탐구는 불필요하므로 모든 연구 기금을 영구 동결하는 방안',
          '과거 수천 년 전의 원시적 상태로 완전히 기술 문명을 회귀시키는 정책',
          '인간의 주관적 인식을 영구히 배제하고 기계적 자동화에 모든 윤리적 판단을 방치하는 것',
        ],
        correctIndex: 0,
        explanation: `시스템이 복잡해질수록 예상치 못한 파국적 취약성(Catastrophic Risk)이 나타나므로, 충격을 흡수하고 스스로 적응하는 회복탄력성이 ${t}의 미래를 가르는 핵심 화두입니다.`,
        deepKnowledge: `나심 탈레브의 '안티프래질(Antifragile)' 개념처럼, 진정으로 심오하고 강인한 체계는 외부의 무작위성과 충격을 통해 훼손되는 것이 아니라 오히려 더욱 진화하고 단련됩니다.`,
      }),
    },
  ];

  return templates.slice(0, count).map((tpl, idx) => {
    const qData = tpl.makeQ(topic);
    return {
      id: `synth_${Date.now()}_${idx}`,
      topic,
      difficulty: tpl.difficulty,
      difficultyLabel: tpl.difficultyLabel,
      question: qData.question,
      options: [...qData.options],
      correctIndex: qData.correctIndex,
      explanation: qData.explanation,
      deepKnowledge: qData.deepKnowledge,
      sourceOrTrivia: `지식 아카이브: ${topic} 심층 분석`,
    };
  });
}

// Main Quiz Generation Function
export async function generateQuiz(
  topicInput: string,
  settings: QuizSettings
): Promise<{ questions: Question[]; source: 'gemini' | 'curated' | 'synthesized' }> {
  // Mode 1: Daily Challenge Mode (Deterministic Seeded by Today's Date)
  if (settings.mode === 'daily') {
    const todayStr = new Date().toISOString().split('T')[0];
    const allPresets = Object.keys(CURATED_QUESTIONS);
    const selected: Question[] = [];

    // Simple deterministic hash of today's date string
    let seed = 0;
    for (let i = 0; i < todayStr.length; i++) {
      seed = (seed * 31 + todayStr.charCodeAt(i)) >>> 0;
    }

    // Pick 5 questions from diverse domains with increasing difficulty
    const targetDifficulties: DifficultyLevel[] = ['easy', 'medium', 'medium', 'hard', 'profound'];
    const chosenCategories = [...allPresets].sort((a, b) => {
      const hA = (seed ^ a.charCodeAt(0)) % 100;
      const hB = (seed ^ b.charCodeAt(0)) % 100;
      return hA - hB;
    }).slice(0, 5);

    chosenCategories.forEach((catKey, idx) => {
      const diff = targetDifficulties[idx];
      const bank = CURATED_QUESTIONS[catKey] || [];
      const match = bank.find((q) => q.difficulty === diff) || bank[0];
      if (match) selected.push(match);
    });

    return {
      questions: selected.map(randomizeQuestionOptions),
      source: 'curated',
    };
  }

  // Mode 2: Survival Mode (Endless Ladder: Easy -> Medium -> Hard -> Profound)
  if (settings.mode === 'survival') {
    const allQuestions: Question[] = [];
    Object.values(CURATED_QUESTIONS).forEach((list) => allQuestions.push(...list));
    // Include user-learned and imported knowledge bank questions
    const learnedAll = getAllLearnedQuestions();
    allQuestions.push(...learnedAll);

    const easy = shuffleArray(allQuestions.filter((q) => q.difficulty === 'easy'));
    const medium = shuffleArray(allQuestions.filter((q) => q.difficulty === 'medium'));
    const hard = shuffleArray(allQuestions.filter((q) => q.difficulty === 'hard'));
    const profound = shuffleArray(allQuestions.filter((q) => q.difficulty === 'profound'));

    const ladder = [
      ...easy.slice(0, 5),
      ...medium.slice(0, 8),
      ...hard.slice(0, 10),
      ...profound.slice(0, 12),
    ];

    return {
      questions: ladder.map(randomizeQuestionOptions),
      source: 'curated',
    };
  }

  // Mode 3: Time Attack (60s rapid-fire 25 questions)
  if (settings.mode === 'timeattack') {
    const allQuestions: Question[] = [];
    Object.values(CURATED_QUESTIONS).forEach((list) => allQuestions.push(...list));
    // Include user-learned and imported knowledge bank questions
    const learnedAll = getAllLearnedQuestions();
    allQuestions.push(...learnedAll);
    const shuffled = shuffleArray(allQuestions);

    return {
      questions: shuffled.slice(0, 25).map(randomizeQuestionOptions),
      source: 'curated',
    };
  }

  const cleanTopic = topicInput.trim() || '우주 & 천문학';

  // 1. Try Gemini AI if API Key is available
  if (hasApiKey()) {
    try {
      const aiQuestions = await generateQuizWithGemini(
        cleanTopic,
        settings.questionCount,
        settings.difficultyMode,
        settings.selectedDifficulty
      );
      if (aiQuestions && aiQuestions.length >= settings.questionCount) {
        // Automatically learn and persist AI-generated questions to local knowledge store
        try {
          learnQuestions(cleanTopic, aiQuestions);
        } catch (e) {
          console.warn('Failed to auto-save learned questions to store:', e);
        }

        return {
          questions: aiQuestions.slice(0, settings.questionCount).map(randomizeQuestionOptions),
          source: 'gemini',
        };
      }
    } catch (err) {
      console.warn('Gemini AI generation failed, falling back to local engine:', err);
      // Fall through to local engine
    }
  }

  // 2. Cross-domain Comprehensive Mock Exam (전 분야 통합 모의고사)
  const isComprehensive =
    cleanTopic.includes('통합') ||
    cleanTopic.includes('전 분야') ||
    cleanTopic.includes('전과목') ||
    cleanTopic.includes('종합');

  if (isComprehensive) {
    const allPresets = Object.keys(CURATED_QUESTIONS);
    const shuffledPresets = shuffleArray(allPresets);
    let selected: Question[] = [];

    const count = settings.questionCount;
    for (let i = 0; i < count; i++) {
      const domainKey = shuffledPresets[i % shuffledPresets.length];
      const domainQuestions = CURATED_QUESTIONS[domainKey] || [];
      const unused = domainQuestions.filter((q) => !selected.some((s) => s.id === q.id));
      if (unused.length > 0) {
        const picked = unused[Math.floor(Math.random() * unused.length)];
        selected.push(picked);
      }
    }

    if (settings.difficultyMode === 'progressive') {
      const diffOrder: Record<DifficultyLevel, number> = { easy: 1, medium: 2, hard: 3, profound: 4 };
      selected.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
    }

    return {
      questions: selected.map(randomizeQuestionOptions),
      source: 'curated',
    };
  }

  // 3. Check Curated Question Bank & Learned Store
  const presetKey = findMatchingPresetKey(cleanTopic);
  const baseCurated = presetKey && CURATED_QUESTIONS[presetKey] ? CURATED_QUESTIONS[presetKey] : [];
  const mergedBank = getMergedQuestionsForTopic(cleanTopic, baseCurated);

  if (mergedBank.length > 0) {
    const bank = mergedBank;

    let selected: Question[] = [];

    if (settings.difficultyMode === 'custom' && settings.selectedDifficulty) {
      // Filter by specified difficulty with random sampling
      const filtered = shuffleArray(bank.filter((q) => q.difficulty === settings.selectedDifficulty));
      selected = filtered.length >= settings.questionCount ? filtered.slice(0, settings.questionCount) : shuffleArray(bank).slice(0, settings.questionCount);
    } else {
      // Progressive mode: randomized sampling from each difficulty tier
      const easy = shuffleArray(bank.filter((q) => q.difficulty === 'easy'));
      const medium = shuffleArray(bank.filter((q) => q.difficulty === 'medium'));
      const hard = shuffleArray(bank.filter((q) => q.difficulty === 'hard'));
      const profound = shuffleArray(bank.filter((q) => q.difficulty === 'profound'));

      if (settings.questionCount === 5) {
        selected = [
          ...easy.slice(0, 1),
          ...medium.slice(0, 1),
          ...hard.slice(0, 2),
          ...profound.slice(0, 1),
        ];
      } else if (settings.questionCount === 10) {
        selected = [
          ...easy.slice(0, 2),
          ...medium.slice(0, 3),
          ...hard.slice(0, 3),
          ...profound.slice(0, 2),
        ];
      } else if (settings.questionCount === 15) {
        selected = [
          ...easy.slice(0, 3),
          ...medium.slice(0, 4),
          ...hard.slice(0, 5),
          ...profound.slice(0, 3),
        ];
      } else if (settings.questionCount === 20) {
        selected = [
          ...easy.slice(0, 4),
          ...medium.slice(0, 6),
          ...hard.slice(0, 6),
          ...profound.slice(0, 4),
        ];
      } else {
        const easyCnt = Math.max(1, Math.floor(settings.questionCount * 0.2));
        const medCnt = Math.max(1, Math.floor(settings.questionCount * 0.3));
        const hardCnt = Math.max(1, Math.floor(settings.questionCount * 0.3));
        const profCnt = settings.questionCount - easyCnt - medCnt - hardCnt;
        selected = [
          ...easy.slice(0, easyCnt),
          ...medium.slice(0, medCnt),
          ...hard.slice(0, hardCnt),
          ...profound.slice(0, profCnt),
        ];
      }
    }

    // Fill up if bank has fewer
    if (selected.length < settings.questionCount) {
      const extraNeeded = settings.questionCount - selected.length;
      const synthesized = synthesizeQuestionsForTopic(cleanTopic, extraNeeded);
      selected = [...selected, ...synthesized];
    }

    return {
      questions: selected.slice(0, settings.questionCount).map(randomizeQuestionOptions),
      source: 'curated',
    };
  }

  // 3. Fallback to procedural synthesizer for custom arbitrary topic
  const synthesized = synthesizeQuestionsForTopic(cleanTopic, settings.questionCount);
  return {
    questions: synthesized.map(randomizeQuestionOptions),
    source: 'synthesized',
  };
}

export function calculateQuizResult(
  topic: string,
  answers: UserAnswer[],
  mode: import('../types/quiz').GameMode = 'classic'
): import('../types/quiz').QuizResult {

  const totalQuestions = answers.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const totalTimeSeconds = answers.reduce((acc, a) => acc + a.timeSpentSeconds, 0);

  // Difficulty multiplier
  // easy: 100pts, medium: 200pts, hard: 350pts, profound: 500pts
  // Streak multiplier: +10% per consecutive correct answer
  let totalScore = 0;
  let streak = 0;
  let streakMax = 0;

  const difficultyBreakdown: Record<DifficultyLevel, { total: number; correct: number }> = {
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 },
    profound: { total: 0, correct: 0 },
  };

  answers.forEach((ans) => {
    const diff = ans.question.difficulty;
    difficultyBreakdown[diff].total += 1;

    if (ans.isCorrect) {
      difficultyBreakdown[diff].correct += 1;
      streak += 1;
      if (streak > streakMax) streakMax = streak;

      let basePoints = 100;
      if (diff === 'medium') basePoints = 200;
      if (diff === 'hard') basePoints = 350;
      if (diff === 'profound') basePoints = 500;

      // Speed bonus: if answered within 5 seconds, bonus up to 50pts
      const speedBonus = Math.max(0, Math.floor((15 - Math.min(15, ans.timeSpentSeconds)) * 3));
      const streakBonus = Math.min(2.0, 1 + streak * 0.1);

      totalScore += Math.floor((basePoints + speedBonus) * streakBonus);
    } else {
      streak = 0;
    }
  });

  const accuracyPercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const xpEarned = Math.max(10, Math.floor(totalScore / 15) + correctCount * 10);

  // Determine Tier and Description
  let tierTitle = '🌱 호기심 새싹';
  let tierDescription = '새로운 지식의 문을 두드렸습니다. 상식의 기초를 다지며 계속해서 지적 탐구를 이어가보세요!';

  if (accuracyPercentage >= 95) {
    tierTitle = '👑 지식의 석학 (Omniscient Master)';
    tierDescription = '기초 상식부터 최고난도 심오한 지식까지 완벽하게 통달하셨습니다! 경이로운 지적 통찰력의 소유자입니다.';
  } else if (accuracyPercentage >= 80) {
    tierTitle = '🌟 심오한 지식 탐구자 (Deep Thinker)';
    tierDescription = '어려운 원리와 심화 지식의 핵심을 정확히 꿰뚫고 있습니다. 학문적 직관과 이해도가 매우 뛰어납니다.';
  } else if (accuracyPercentage >= 60) {
    tierTitle = '📖 박학다식한 상식가 (General Polymath)';
    tierDescription = '폭넓은 기본 소양과 교양 지식을 탄탄하게 갖추고 있습니다. 조금만 더 깊이 들어가면 마스터에 도달합니다!';
  } else if (accuracyPercentage >= 40) {
    tierTitle = '🧭 지식의 모험가 (Curious Explorer)';
    tierDescription = '기초적인 상식의 흐름을 잘 파악하고 있습니다. 틀린 문제의 해설을 복습하며 지식의 깊이를 더해보세요!';
  }

  return {
    mode,
    topic,
    totalQuestions,
    correctAnswersCount: correctCount,
    score: totalScore,
    accuracyPercentage,
    totalTimeSeconds,
    answers,
    tierTitle,
    tierDescription,
    difficultyBreakdown,
    xpEarned,
    streakMax,
  };
}
