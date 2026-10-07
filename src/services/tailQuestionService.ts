import type { Question } from '../types/quiz';
import { generateTailQuestionWithGemini, hasApiKey } from './geminiService';
import { learnQuestions } from './knowledgeStoreService';
import { CURATED_QUESTIONS } from './quizBank';
import { attachJosa, formatNaturalKorean } from '../utils/koreanUtils';
import { CURATED_TAIL_QUESTIONS } from '../data/curatedTailQuestions';

// Re-export CURATED_TAIL_QUESTIONS for consumers
export { CURATED_TAIL_QUESTIONS };

export type AcademicDomain =
  | 'war_strategy'
  | 'macro_economy'
  | 'cognitive_psychology'
  | 'literature_narrative'
  | 'earth_environment'
  | 'chemistry_reaction'
  | 'computer_science'
  | 'physics_quantum'
  | 'biology_medicine'
  | 'art_aesthetics'
  | 'philosophy_epistemology'
  | 'korean_history';

/**
 * Intelligent semantic classifier for tail questions:
 * Evaluates the specific concept AND situational context (e.g. WWII in Art -> War Strategy / Military History).
 * Never confines concepts to rigid parent tags.
 */
export function detectContextualDomain(
  optionText: string,
  questionText: string,
  topicText: string
): AcademicDomain {
  const normOpt = optionText.trim();

  // 1. War History & Military Strategy (Priority when war, battle, campaign, or treaty is mentioned)
  if (
    /전쟁|세계대전|전투|작전|군사|조약|동맹|침공|방위|진주만|노르망디|스탈린그라드|워털루|게릴라|병참|무기|군벌|봉쇄|냉전|독트린/.test(
      normOpt
    ) ||
    (/전쟁|전투|군사|작전|상륙/.test(questionText) &&
      !/미술|음악|철학|생명/.test(normOpt))
  ) {
    return 'war_strategy';
  }

  // 2. Macroeconomics & Monetary Finance
  if (
    /경제|금융|대공황|공황|인플레이션|디플레이션|관세|통화|재정|구축\s*효과|금리|이자율|환율|양적완화|유동성|시장|독점|과점|비교우위|GDP|통화량|스태그플레이션|케인스|화폐/.test(
      normOpt
    )
  ) {
    return 'macro_economy';
  }

  // 3. Cognitive Psychology & Behavioral Science
  if (
    /부조화|편향|실험|조건형성|심리|인지|무의식|자아|기억|착각|휴리스틱|프레이밍|지각|강화|반사|밀그램|파블로프|스키너|프로이트|지능|주의집중/.test(
      normOpt
    )
  ) {
    return 'cognitive_psychology';
  }

  // 4. Literature & World Classics
  if (
    /소설|문학|희곡|비극|주인공|서사|모티프|작가|실존주의|카프카|도스토옙스키|셰익스피어|뫼르소|햄릿|오디세이아|단테|괴테|파우스트|변신|이방인|죄와\s*벌/.test(
      normOpt
    )
  ) {
    return 'literature_narrative';
  }

  // 5. Earth Science & Oceanography
  if (
    /판구조|지진|화산|해양|기후|대기|엘니뇨|라니냐|순환|맨틀|암석|빙하|퇴적|오존|온실|해구|단층|밀란코비치|열염|지구/.test(
      normOpt
    )
  ) {
    return 'earth_environment';
  }

  // 6. Chemistry & Physical Chemistry
  if (
    /화학|르샤틀리에|헤스|엔트로피|엔탈피|촉매|산화|환원|원자|분자|결합|전기음성도|용액|이온|산염기|평형/.test(
      normOpt
    )
  ) {
    return 'chemistry_reaction';
  }

  // 7. Computer Science & AI
  if (
    /컴퓨터|소프트웨어|알고리즘|운영체제|데드락|교착|캐시|스레드|네트워크|복잡도|자료구조|비트|프로토콜|병렬|트랜스포머|인공지능|AI|머신러닝|딥러닝|ResNet|CNN|RNN|GPU|CPU|P-NP|암달/.test(
      normOpt
    )
  ) {
    return 'computer_science';
  }

  // 8. Physics & Quantum & Astrophysics
  if (
    /물리|양자|상대성|입자|중력|블랙홀|빛|에너지|운동량|파동|전자기|원자핵|우주|은하|항성|행성|초전도|힉스|찬드라세카르/.test(
      normOpt
    )
  ) {
    return 'physics_quantum';
  }

  // 9. Biology & Genetics
  if (
    /생명|세포|유전|DNA|RNA|크리스퍼|미토콘드리아|단백질|효소|면역|항체|신경|시냅스|돌연변이|진화|바이러스|오토파지|텔로미어/.test(
      normOpt
    )
  ) {
    return 'biology_medicine';
  }

  // 10. Art & Visual Aesthetics
  if (
    /미술|회화|조형|옵아트|팝아트|미니멀리즘|입체주의|인상주의|사조|원근법|스푸마토|추상|조각|건축|디자인|바우하우스|미래주의|개념미술/.test(
      normOpt
    )
  ) {
    return 'art_aesthetics';
  }

  // 11. Philosophy & Epistemology
  if (
    /철학|인식론|존재론|윤리학|정언명령|칸트|니체|소크라테스|플라톤|아리스토텔레스|이성|도덕|실존|현상학|공리주의/.test(
      normOpt
    )
  ) {
    return 'philosophy_epistemology';
  }

  // 12. Korean History
  if (
    /조선|고려|삼국|신라|백제|고구려|대동법|균역법|영정법|과전법|왕|세종|영조|정조|실학|훈민정음|호포제|비변사/.test(
      normOpt
    )
  ) {
    return 'korean_history';
  }

  // Fallbacks based on category title
  if (/역사|문명|세계사/.test(topicText)) return 'war_strategy';
  if (/경제|금융/.test(topicText)) return 'macro_economy';
  if (/심리/.test(topicText)) return 'cognitive_psychology';
  if (/문학|고전/.test(topicText)) return 'literature_narrative';
  if (/지구|환경|생태/.test(topicText)) return 'earth_environment';
  if (/화학/.test(topicText)) return 'chemistry_reaction';
  if (/AI|컴퓨터|IT/.test(topicText)) return 'computer_science';
  if (/물리|우주|천문/.test(topicText)) return 'physics_quantum';
  if (/생명|의학/.test(topicText)) return 'biology_medicine';
  if (/미술|예술|문화/.test(topicText)) return 'art_aesthetics';
  if (/철학|사상|인문/.test(topicText)) return 'philosophy_epistemology';
  if (/한국사/.test(topicText)) return 'korean_history';

  return 'macro_economy';
}

// Search the verified 1,500 Question Bank for high-difficulty questions matching the target concept
function findRelevantBankQuestion(
  parentQuestion: Question,
  cleanOption: string
): Question | null {
  const normOption = cleanOption.toLowerCase().replace(/[^a-zA-Z0-9가-힣]/g, '');
  if (normOption.length < 2) return null;

  let bestCandidate: Question | null = null;
  let maxScore = 0;

  for (const [catKey, questions] of Object.entries(CURATED_QUESTIONS)) {
    const isSameCategory = catKey === parentQuestion.topic || parentQuestion.topic.includes(catKey);

    for (const q of questions) {
      if (q.id === parentQuestion.id) continue;

      const qText = (q.question || '').toLowerCase();
      const expText = (q.explanation || '').toLowerCase();
      const deepText = (q.deepKnowledge || '').toLowerCase();
      const correctOptText = (q.options[q.correctIndex] || '').toLowerCase();

      // [ANTI-GIVEAWAY RULE 1]: Clang / Word-Matching Giveaway Filter
      // If the correct option is literally the clicked option name or just contains only that keyword,
      // it is a trivial identification quiz ("Which one is X? -> X").
      const isDirectWordMatch =
        correctOptText.trim() === normOption ||
        (correctOptText.includes(normOption) && correctOptText.length <= normOption.length + 4);
      if (isDirectWordMatch) {
        continue;
      }

      // [ANTI-GIVEAWAY RULE 2]: Option List Giveaway Filter
      // Only filter out questions if options are short single-word nouns and one of them is the concept.
      // If options are rich descriptive sentences (length > 15), keep them!
      const isShortNounQuiz = q.options.every((opt) => (opt || '').length <= 8);
      if (isShortNounQuiz) {
        const hasWordInAnyOption = q.options.some(
          (opt) => (opt || '').toLowerCase().trim() === normOption
        );
        if (hasWordInAnyOption) {
          continue;
        }
      }

      let score = 0;

      // We want questions where the QUESTION STEM explores the concept in depth
      if (qText.includes(normOption)) score += 8;
      if (expText.includes(normOption)) score += 4;
      if (deepText.includes(normOption)) score += 3;

      // Prefer hard and profound questions
      if (q.difficulty === 'profound') score += 2;
      else if (q.difficulty === 'hard') score += 1;

      // Prefer same category slightly
      if (isSameCategory) score += 1;

      if (score > maxScore && score >= 7) {
        maxScore = score;
        bestCandidate = q;
      }
    }
  }

  if (bestCandidate) {
    const wrongOptionsReason =
      bestCandidate.wrongOptionsReason ||
      bestCandidate.options.map((_opt, idx) => {
        if (idx === bestCandidate!.correctIndex) {
          return `정답입니다. ${cleanOption}의 학술적 원리와 핵심 기제를 정확하게 규명하고 있습니다.`;
        }
        return `오답 함정입니다. 해당 서술은 ${cleanOption}의 실제 메커니즘과 상충하거나 인접 이론의 성질을 잘못 결합한 전형적인 오개념입니다.`;
      });

    return {
      ...bestCandidate,
      id: `tail_bank_${Date.now()}_${bestCandidate.id}`,
      topic: `${parentQuestion.topic} 🔗 ${cleanOption}`,
      difficulty: 'hard',
      difficultyLabel: '심화 꼬리 질문',
      wrongOptionsReason,
    };
  }

  return null;
}

/**
 * Procedural dynamic synthesizer with academically homogeneous distractors.
 * Adapts dynamically to the situational domain (War Strategy, Macroeconomics, Psychology, Art, etc.)
 * rather than blindly defaulting to parent category tags.
 */
function synthesizeTailQuestionProcedural(
  parentQuestion: Question,
  optionText: string
): Question {
  const cleanOption = optionText.trim();
  const cleanTopic = parentQuestion.topic;
  const domain = detectContextualDomain(cleanOption, parentQuestion.question, cleanTopic);

  // Deterministic balanced target index (0, 1, 2, 3)
  const targetIndex = (cleanOption.length + cleanTopic.length) % 4;

  const optEunNeun = attachJosa(cleanOption, '은/는');
  const optIGa = attachJosa(cleanOption, '이/가');
  const josaIGa = optIGa.slice(cleanOption.length);
  const josaEunNeun = optEunNeun.slice(cleanOption.length);

  let questionPrompt = '';
  let correctStatement = '';
  let distractor1 = '';
  let distractor2 = '';
  let distractor3 = '';
  let reasonCorrect = '';
  let reasonDist1 = '';
  let reasonDist2 = '';
  let reasonDist3 = '';
  let explanation = '';
  let deepKnowledge = '';

  switch (domain) {
    case 'war_strategy':
      questionPrompt = `앞선 맥락에서 등장한 역사적 전면전·군사 사건인 "${cleanOption}"${josaIGa} 전개된 전략적 전술과 승패를 가른 결정적 요인으로 가장 적절한 것은?`;
      correctStatement = `${optEunNeun} 주력 부대의 병참선 차단과 다면 전선 형성을 통해 상대 지휘부의 전략적 기동을 무력화하고 보급 역량을 소진시킨 작전이다.`;
      distractor1 = `${optEunNeun} 단일 요새선에 전 병력을 집중 배치하여 장기 소모전으로 적의 기습 돌파를 완벽히 봉쇄한 방어 전략이다.`;
      distractor2 = `${optEunNeun} 해상 수송로를 전면 차단하지 않고 내륙 철도 거점만을 타격하여 국지적 외교 협상을 유도한 제한전이다.`;
      distractor3 = `${optEunNeun} 동맹국 간의 사전 군사 조율 없이 독자적 상륙 작전만을 단행하여 수도를 단기 점령하려 한 시도이다.`;

      reasonCorrect = `정답입니다. 전쟁사에서 승패는 단순한 전술적 우발성이 아니라 다면 전선 압박과 병참선(보급로) 차단 등 총체적 군사 전략 역량에 의해 결정됩니다.`;
      reasonDist1 = `오답 함정입니다. 마지노선 참호전처럼 기동전을 배제한 단일 요새선 집중 방어는 우회 기동에 무력화되기 쉬운 전형적 실패 사례입니다.`;
      reasonDist2 = `오답 함정입니다. 현대 전면전에서는 해상 봉쇄와 복합 보급선 차단이 승패를 가르는 핵심 축이었습니다.`;
      reasonDist3 = `오답 함정입니다. 연합군 간의 정밀한 다면 협공 공조가 결여된 단독 기습은 병참 한계선에 부딪혀 실패하는 경우가 많았습니다.`;

      explanation = `"${cleanOption}"${josaEunNeun} 국제정치적 모순과 군사 교리의 충돌 속에서, 병참(Logistics), 기동성, 외교적 동맹 공조의 상호작용이 전세를 어떻게 역전시켰는지를 보여주는 결정적 사건입니다.`;
      deepKnowledge = `군사사학에서는 전투의 승패를 단편적 전술이 아니라 보급 능력, 무기 생산성, 산업 동원력, 다면 전선의 강요라는 거시적 전략 차원에서 분석해야 합니다.`;
      break;

    case 'macro_economy':
      questionPrompt = `앞선 맥락에서 다루어진 경제적 사건·금융 원리인 "${cleanOption}"${josaIGa} 유발하는 거시경제적 파급 효과로 가장 타당한 것은?`;
      correctStatement = `${optEunNeun} 금융 시장의 유동성 경로와 실질이자율 변동을 통해 민간 투자와 총수요의 균형점을 재조정하는 메커니즘이다.`;
      distractor1 = `${optEunNeun} 수입 관세를 무제한 인상하여 대외 무역 흑자를 극대화하고 국내 물가를 영구적으로 안정시키는 정책이다.`;
      distractor2 = `${optEunNeun} 모든 민간 상업은행의 대출 기능을 정지시키고 중앙은행이 직접 소비자 가격을 통제하는 긴급 조치이다.`;
      distractor3 = `${optEunNeun} 화폐 발행량을 실물 생산성과 무관하게 고정하여 장기 실업률을 자연실업률 이하로 영구 억제하는 이론이다.`;

      reasonCorrect = `정답입니다. 거시경제 체계에서 이자율 경로, 유동성 공급, 유효 수요 간의 상호작용을 통해 균형 배분을 달성하는 핵심 원리입니다.`;
      reasonDist1 = `오답 함정입니다. 관세 장벽은 대외 무역 보복과 자원 배분 왜곡을 초래하는 보호무역주의 오류입니다.`;
      reasonDist2 = `오답 함정입니다. 이는 전시 통제 경제의 극단적 조치이며 시장 기반 통화·금융 정책 메커니즘과 무관합니다.`;
      reasonDist3 = `오답 함정입니다. 프리드먼의 자연실업률 가설에 따르면 통화 조작으로 실업률을 영구히 낮추는 것은 불가능합니다.`;

      explanation = `거시경제학에서 "${cleanOption}"${josaEunNeun} 시장 가격 기구와 정부 정책 간의 긴장 관계, 그리고 자원의 희소성 속에서 총수요와 물가를 조율하는 중추적 기제입니다.`;
      deepKnowledge = `현대 거시경제학은 단기 경기 변동과 장기 성장 잠재력 사이의 트레이드오프를 규명하고, 정책 시차(Time Lag)와 기대 심리를 정밀하게 반영하는 모형을 구축합니다.`;
      break;

    case 'cognitive_psychology':
      questionPrompt = `인식 및 행동 과학 관점에서 "${cleanOption}"${josaIGa} 인간의 의사결정과 심리적 기제에 미치는 영향으로 가장 타당한 것은?`;
      correctStatement = `${optEunNeun} 신념과 실제 행동 간의 불일치나 정보의 모순을 경험할 때, 인지적 긴장을 완화하기 위해 사후적으로 태도나 기억을 재구성하는 기제이다.`;
      distractor1 = `${optEunNeun} 모든 외적 자극을 이성적 계산으로 환원하여 어떠한 상황에서도 수학적 기댓값을 오차 없이 계산해내는 완벽한 합리성 모델이다.`;
      distractor2 = `${optEunNeun} 뇌의 해마 손상과 무관하게 과거의 모든 경험을 감정적 왜곡 없이 사진처럼 영구 보존하는 완벽 회상 기제이다.`;
      distractor3 = `${optEunNeun} 타인의 권위나 사회적 압력에 전혀 영향을 받지 않고 오직 선천적 본능에 의해서만 생존 행동을 촉발하는 반사 작용이다.`;

      reasonCorrect = `정답입니다. 인간 심리는 자신의 내적 인지 불일치를 줄이기 위해 능동적으로 신념이나 기억을 재해석하는 합리화 경향을 보입니다.`;
      reasonDist1 = `오답 함정입니다. 인간은 고전 경제학의 전지전능한 합리적 인간(Homo economicus)이 아니라 제한된 합리성 하에서 편향을 보입니다.`;
      reasonDist2 = `오답 함정입니다. 인간 기억은 사진 복제가 아니라 회상할 때마다 재구성되는 가소성(Plasticity)을 지닙니다.`;
      reasonDist3 = `오답 함정입니다. 사회심리학 실험(밀그램, 애시)은 개인이 집단 압력과 권위에 지대한 영향을 받는 사회적 존재임을 입증했습니다.`;

      explanation = `인지과학에서 "${cleanOption}"${josaEunNeun} 뇌의 정보 처리 효율성과 인지적 자원 한계 속에서 발생하는 체계적 심리 메커니즘을 규명하는 핵심 개념입니다.`;
      deepKnowledge = `행동경제학과 뇌과학은 직관적 시스템 1과 분석적 시스템 2의 상호작용을 통해 비합리적 선택의 규칙적 패턴을 설명합니다.`;
      break;

    case 'literature_narrative':
      questionPrompt = `문학 비평 및 서사 이론의 관점에서 "${cleanOption}"${josaIGa} 구현하는 중심적 모티프와 인간 실존의 비극성으로 가장 옳은 것은?`;
      correctStatement = `${optEunNeun} 개인의 내면적 윤리 갈등과 사회적 규범 체계의 충돌을 다성적(Polyphonic) 서사로 형상화하여 인간 본성의 근원적 모순을 심층 탐구한 모티프이다.`;
      distractor1 = `${optEunNeun} 권선징악의 도덕적 결말만을 교조적으로 강요하며 주인공의 심리적 내적 갈등을 완전히 배제한 단순 영웅 서사이다.`;
      distractor2 = `${optEunNeun} 시대적 현실 상황을 일체 반영하지 않고 오직 기계적 음보율과 언어 유희에만 몰두한 순수 형식주의 시학이다.`;
      distractor3 = `${optEunNeun} 모든 사회적 부조리의 원인을 개인의 선천적 광기로만 치부하여 구조적 폭력의 고발을 의도적으로 회피한 구성이다.`;

      reasonCorrect = `정답입니다. 고전 문학의 정수는 흑백 논리를 탈피하여 분열된 인간 자의식과 실존의 부조리를 다층적으로 포착하는 데 있습니다.`;
      reasonDist1 = `오답 함정입니다. 고전 명작은 단순한 권선징악을 넘어 인간 심리의 심연과 도덕적 딜레마를 정면으로 응시합니다.`;
      reasonDist2 = `오답 함정입니다. 문학적 걸작은 언어적 형식미와 더불어 당대 사회의 역사적 모순과 인간 실존의 조건을 치열하게 매개합니다.`;
      reasonDist3 = `오답 함정입니다. 개인의 비극은 독립된 광기가 아니라 시대의 사회 구조적 위선 및 제도적 폭력과 긴밀히 얽혀 있습니다.`;

      explanation = `세계 고전 문학에서 "${cleanOption}"${josaEunNeun} 인간 실존의 유한성과 도덕적 결단 사이의 비극적 긴장을 서사적 상징으로 승화시킨 불멸의 테마입니다.`;
      deepKnowledge = `바흐친(Bakhtin)의 다성성(Polyphony) 이론처럼, 위대한 문학 텍스트는 작가의 단일한 목소리가 아니라 복수의 인물들이 각자의 진실을 치열하게 대화하는 사유의 장입니다.`;
      break;

    case 'earth_environment':
      questionPrompt = `지구시스템과학 및 대기·해양 순환의 관점에서 "${cleanOption}"${josaIGa} 규정하는 지구물리학적 메커니즘으로 가장 적절한 것은?`;
      correctStatement = `${optEunNeun} 열에너지 불균형을 해소하기 위한 대기와 해양의 동적 상호작용 및 암석권의 섭입·발산 운동을 지배하는 순환 체계이다.`;
      distractor1 = `${optEunNeun} 지구 자기장의 역전 주기와 완벽히 동기화되어 판의 이동 속도를 전 지구적으로 일시에 동결시키는 메커니즘이다.`;
      distractor2 = `${optEunNeun} 태양풍 복사 에너지가 대기권을 직접 뚫고 해저면을 가열하여 심해 열수 대류만을 단독으로 구동하는 방식이다.`;
      distractor3 = `${optEunNeun} 극지방 빙하가 완전히 용융되더라도 해수면 높이와 염분 농도에 아무런 물리적 변화를 초래하지 않는 고립계 모델이다.`;

      reasonCorrect = `정답입니다. 지구는 지권, 수권, 기권의 결합을 통해 열과 물질을 역동적으로 재분배하는 거대한 자기조직화 시스템입니다.`;
      reasonDist1 = `오답 함정입니다. 고지자기 역전은 지각에 기록될 뿐 판의 대류 운동 속도를 정지시키지 않습니다.`;
      reasonDist2 = `오답 함정입니다. 태양 복사는 해수 표층 100m 이내에서 흡수되며 심해 해저면을 직접 가열하지 못합니다.`;
      reasonDist3 = `오답 함정입니다. 빙하 융해에 따른 담수 유입은 열염순환을 둔화시키고 해수면 상승을 직접 유발하는 열린 피드백 계입니다.`;

      explanation = `지구과학에서 "${cleanOption}"${josaEunNeun} 수십억 년에 걸친 지질학적 진화와 기후 평형을 통제하는 지구 규모의 핵심 피드백 순환입니다.`;
      deepKnowledge = `지구시스템은 비선형적(Non-linear)으로 반응하므로 임계값(Tipping Point)을 넘어서면 불가역적인 급격한 기후 전환이 일어날 수 있습니다.`;
      break;

    case 'chemistry_reaction':
      questionPrompt = `화학 열역학 및 반응 속도론의 관점에서 "${cleanOption}"${josaIGa} 기술하는 분자계의 본질적 인과율은?`;
      correctStatement = `${optEunNeun} 계(System)의 자유 에너지 최소화와 깁스 자유 에너지 변화량(ΔG)에 따라 화학 평형의 자발적 이동 방향을 결정하는 법칙이다.`;
      distractor1 = `${optEunNeun} 촉매를 투입하면 반응물의 엔탈피와 생성물의 자유 에너지를 직접 변화시켜 평형 상수(K) 자체를 영구 조작하는 원리이다.`;
      distractor2 = `${optEunNeun} 온도 상승에 따른 분자 운동 에너지 증가와 무관하게 모든 흡열·발열 반응의 반응 속도를 동일하게 유지시키는 기제이다.`;
      distractor3 = `${optEunNeun} 원자핵 내부의 양성자와 중성자 결합 에너지를 임의로 조작하여 화학 반응만으로 원소의 종류를 변환시키는 기전이다.`;

      reasonCorrect = `정답입니다. 화학 반응의 자발성과 평형 상태는 계의 엔탈피(ΔH)와 엔트로피(ΔS)의 결합인 깁스 자유 에너지(ΔG = ΔH - TΔS)에 의해 엄밀하게 결정됩니다.`;
      reasonDist1 = `오답 함정입니다. 촉매는 활성화 에너지만 낮추어 반응 속도를 빠르게 할 뿐 평형 상수(K)나 평형 조성 자체는 전혀 바꾸지 못합니다.`;
      reasonDist2 = `오답 함정입니다. 아레니우스 식에 따라 온도가 상승하면 유효 충돌 빈도가 증가하여 반응 속도가 지수함수적으로 증가합니다.`;
      reasonDist3 = `오답 함정입니다. 화학 반응은 최외각 전자의 재배열일 뿐 원자핵의 조성을 바꾸는 핵반응이 아닙니다.`;

      explanation = `화학에서 "${cleanOption}"${josaEunNeun} 분자 간의 인력·반발력과 열역학적 추진력 사이의 미시적 균형을 규명하는 핵심 법칙입니다.`;
      deepKnowledge = `물리화학적 원리는 단순히 암기하는 것이 아니라 상태 함수(State Function)와 경로 함수(Path Function)의 구별 및 자발적 변화의 방향성을 수식으로 증명해야 합니다.`;
      break;

    case 'computer_science':
      questionPrompt = `컴퓨터 과학 및 시스템 아키텍처 관점에서 "${cleanOption}"의 핵심 구조적·알고리즘적 메커니즘은?`;
      correctStatement = `${optEunNeun} 연산 복잡도와 메모리 계층 구조의 병목을 고려하여 데이터의 상태 전이와 접근 지연(Latency)을 체계적으로 최적화하는 구조적 기제이다.`;
      distractor1 = `${optEunNeun} 동시성 트랜잭션의 충돌을 방지하기 위해 모든 작업을 단일 스레드의 직렬화 격리 수준으로 제한하여 무충돌 상태를 보장하는 방식이다.`;
      distractor2 = `${optEunNeun} 강한 일관성을 희생하는 대신 네트워크 단절 상황에서도 고가용성을 유지하도록 결과적 일관성(Eventual Consistency)을 채택하는 모델이다.`;
      distractor3 = `${optEunNeun} 런타임 프로파일링 기반 동적 JIT 최적화를 배제하고 빌드 시점에 모든 실행 바이너리를 사전 컴파일(AOT)하여 메모리 적재를 고정하는 기제이다.`;

      reasonCorrect = `정답입니다. 시간·공간 자원의 트레이드오프 내에서 데이터 상태 전이와 접근 효율을 극대화하는 아키텍처 원리입니다.`;
      reasonDist1 = `오답 함정입니다. 이는 단순 직렬화 비관적 락(Pessimistic Locking) 동시성 제어 기법에 해당합니다.`;
      reasonDist2 = `오답 함정입니다. 이는 CAP 정리에서 분산 NoSQL 데이터베이스가 취하는 가용성 우선(AP) 모델입니다.`;
      reasonDist3 = `오답 함정입니다. 이는 AOT 정적 컴파일 파이프라인에 대한 설명입니다.`;

      explanation = `컴퓨터 과학에서 "${cleanOption}"${josaEunNeun} 알고리즘적 복잡도 한계 내에서 실질적 처리량과 지연 시간을 최적화하는 핵심 엔지니어링 패러다임입니다.`;
      deepKnowledge = `소프트웨어 아키텍처 설계는 이상적인 절대 만능해를 찾는 것이 아니라, 분산 환경의 일관성, 가용성, 지연 시간 간의 균형점을 도출하는 공학적 의사결정입니다.`;
      break;

    case 'physics_quantum':
      questionPrompt = `앞선 문제의 핵심 개념인 "${cleanOption}"${josaIGa} 규정하는 자연계의 물리적·과학적 인과 메커니즘으로 가장 타당한 것은?`;
      correctStatement = `${optEunNeun} 기본 상호작용의 게이지 대칭성과 에너지-운동량 보존 법칙에 근거하여 계(System)의 동적 평형 상태를 결정하는 지배 기제이다.`;
      distractor1 = `${optEunNeun} 비평형 열역학적 개방계에서 외부로부터의 지속적인 자유 에너지 유입을 통해 소산 구조(Dissipative Structure)를 형성하는 기제이다.`;
      distractor2 = `${optEunNeun} 거시적 환경과의 열적 결어긋남(Decoherence)을 배제하고 순수 양자 얽힘과 위상 가역성만을 보존하는 이상적 한계 상태이다.`;
      distractor3 = `${optEunNeun} 양자 요동을 평균화하여 시공간 곡률과 국소적 중력장 퍼텐셜의 구배(Gradient)에 의해 입자의 측지선 궤도를 결정하는 기제이다.`;

      reasonCorrect = `정답입니다. ${cleanOption}의 물리적 안정성과 지배 방정식은 대칭성과 보존 법칙에 기반한 동적 평형 상태로 규명됩니다.`;
      reasonDist1 = `오답 함정입니다. 이는 프리고진의 비평형 열역학 및 자기조직화 소산 구조에 해당하는 설명입니다.`;
      reasonDist2 = `오답 함정입니다. 이는 양자 결맞음 및 고립 양자계의 가역 상태에 국한된 설명입니다.`;
      reasonDist3 = `오답 함정입니다. 이는 일반상대성이론의 시공간 측지선 방정식에 해당하는 설명입니다.`;

      explanation = `"${cleanOption}"${josaEunNeun} 현대 과학의 기본 상호작용 및 에너지 준위 전이, 그리고 보존 법칙의 엄밀한 수학적 인과관계를 통해 현상의 평형 상태를 기술합니다.`;
      deepKnowledge = `물리학과 자연과학에서는 겉보기 현상의 직관적 유추를 배제하고, 지배 방정식의 대칭성(Symmetry)과 보존량(Conserved Quantity)을 중심으로 원리를 도출해야 합니다.`;
      break;

    case 'biology_medicine':
      questionPrompt = `분자생물학 및 생리학적 관점에서 "${cleanOption}"${josaIGa} 생체 시스템의 항상성과 유전 정보 발현을 조절하는 기전은?`;
      correctStatement = `${optEunNeun} 세포 내외 신호 전달 경로와 효소 복합체의 입체 구조 변형을 통해 대사 피드백 및 유전자 발현을 정밀하게 제어하는 생체 기제이다.`;
      distractor1 = `${optEunNeun} 세포벽의 물리적 삼투압만으로 모든 유전자의 전사 개시 복합체를 무차별적으로 억제하는 기계적 차단막이다.`;
      distractor2 = `${optEunNeun} 단백질의 펩타이드 결합을 체온 조건에서 100% 자발 분해하여 아미노산 풀을 소진시키는 비가역적 파괴 경로이다.`;
      distractor3 = `${optEunNeun} 체세포 분열 시 방추사 형성을 전면 억제하여 모든 딸세포의 염색체 수를 절반으로 반감시키는 감수분열 전용 기전이다.`;

      reasonCorrect = `정답입니다. 생명 현상은 알로스테릭(Allosteric) 효소 조절과 신호 전달 인산화 캐스케이드를 통한 항상성 유지 메커니즘으로 유지됩니다.`;
      reasonDist1 = `오답 함정입니다. 동물 세포에는 세포벽이 없으며, 유전자 조절은 전사 인자와 후성유전학적 결합에 의해 정밀하게 조절됩니다.`;
      reasonDist2 = `오답 함정입니다. 펩타이드 결합은 생체 내에서 매우 안정하며 프로테아좀 등에 의해 선택적으로 분해 재활용됩니다.`;
      reasonDist3 = `오답 함정입니다. 체세포 분열은 염색체 수를 보존(2n → 2n)하며 방추사 억제는 세포 분열을 정지시키는 독성 기제입니다.`;

      explanation = `생명과학에서 "${cleanOption}"${josaEunNeun} 분자 수준의 신호 변환과 유전 암호 해독, 그리고 생명체의 역동적 평형을 유지하는 핵심 원리입니다.`;
      deepKnowledge = `모든 생체 경로는 고립되어 작동하지 않으며, 전사 인자-후성유전-번역 후 변형(PTM)의 정교한 네트워크를 통해 환경 자극에 유연하게 적응합니다.`;
      break;

    case 'art_aesthetics':
      questionPrompt = `앞선 맥락에서 등장한 조형 예술 및 문화 사조인 "${cleanOption}"${josaIGa} 지니는 미학적 원리와 조형적 지향점으로 가장 적절한 것은?`;
      correctStatement = `${optEunNeun} 전통적인 고전적 재현 양식을 해체하고, 형태·색채·시지각의 새로운 조형 질서를 구축하여 시각 예술의 미학적 지평을 확장한 사조이다.`;
      distractor1 = `${optEunNeun} 착시(Optical Illusion)와 보색 대비를 수학적으로 계산하여 정지된 2차원 평면에 망막의 동적 잔상과 파동을 유도하는 기법이다.`;
      distractor2 = `${optEunNeun} 대량 소비 사회의 광고 이미지와 대중 상품 기호를 실크스크린으로 복제하여 고급 예술의 원본성을 해체하는 경향이다.`;
      distractor3 = `${optEunNeun} 산업 기계 문명의 속도와 역동성을 찬양하며 과거의 문화유산과 박물관을 부정하고 미래 지향성을 극대화한 운동이다.`;

      if (cleanOption.includes('옵아트') || cleanOption.includes('착시')) {
        distractor1 = `${optEunNeun} 주관적 감정이나 상징적 환영을 배제하고 단순한 기하학적 형태와 순수 물질성만을 제시하는 미니멀리즘 기법이다.`;
        reasonDist1 = `오답 함정입니다. 이는 도널드 저드 등의 미니멀리즘(Minimalism)에 해당하는 설명입니다.`;
      } else {
        reasonDist1 = `오답 함정입니다. 이는 빅토르 바자렐리 등의 옵아트(Op Art)에 해당하는 설명입니다.`;
      }

      if (cleanOption.includes('미래주의')) {
        distractor3 = `${optEunNeun} 무의식과 꿈의 세계를 자동기술법으로 탐구하여 비이성적 환각을 시각화하는 초현실주의 경향이다.`;
        reasonDist3 = `오답 함정입니다. 이는 살바도르 달리 등의 초현실주의(Surrealism)에 해당하는 설명입니다.`;
      } else {
        reasonDist3 = `오답 함정입니다. 이는 마리네티 등의 미래주의(Futurism)에 해당하는 설명입니다.`;
      }

      reasonCorrect = `정답입니다. 고전적 재현을 탈피하고 새로운 미학적 조형 질서를 개척한 예술 사조입니다.`;
      reasonDist2 = `오답 함정입니다. 이는 앤디 워홀 등의 팝아트(Pop Art)에 해당하는 설명입니다.`;

      explanation = `미술사에서 "${cleanOption}"${josaEunNeun} 시각적 재현, 매체, 관람자의 지각 방식에 대한 새로운 패러다임을 제시하며 현대 예술의 외연을 넓힌 핵심 개념입니다.`;
      deepKnowledge = `현대 미술의 흐름은 단순한 기교의 변화가 아니라, "무엇이 예술인가"와 "우리는 대상을 어떻게 지각하는가"에 대한 근본적인 철학적 탐구와 맞닿아 있습니다.`;
      break;

    case 'philosophy_epistemology':
      questionPrompt = `앞선 논의의 중심 주제인 "${cleanOption}"에 대한 철학적·인식론적 조명으로 가장 타당한 명제는?`;
      correctStatement = `${optEunNeun} 주체와 대상의 이분법적 분리를 반성하고, 경험적 세계의 조건과 선험적 인식 구조의 상호 구성을 구명하는 사유 체계이다.`;
      distractor1 = `${optEunNeun} 감각적 관찰과 경험적 검증 가능성 기준에 부합하는 명제만을 유의미한 지식으로 인정하고 형이상학적 전제를 배제하는 체계이다.`;
      distractor2 = `${optEunNeun} 감각적 경험에 앞서 인간 오성에 선천적으로 내재하는 순수 본유 관념과 연역적 논리 형식만을 진리의 원천으로 규정하는 체계이다.`;
      distractor3 = `${optEunNeun} 절대적 본질이나 선험적 틀을 부정하고, 구체적 행위의 실천적 유용성과 문제 해결 효과를 통해 개념의 진리치를 판정하는 체계이다.`;

      reasonCorrect = `정답입니다. 주체와 대상의 상호 구성성과 선험적 조건에 주목하는 칸트 비판철학 및 현상학적 사유의 본질입니다.`;
      reasonDist1 = `오답 함정입니다. 이는 콩트의 실증주의 및 비엔나 학파의 논리실증주의(Logical Positivism)에 해당하는 관점입니다.`;
      reasonDist2 = `오답 함정입니다. 이는 데카르트, 스피노자 등 대륙 합리론(Rationalism)의 본유관념설에 해당합니다.`;
      reasonDist3 = `오답 함정입니다. 이는 찰스 퍼스, 존 듀이 등의 미국 실용주의(Pragmatism) 도구주의에 해당합니다.`;

      explanation = `철학사에서 "${cleanOption}"${josaEunNeun} 독단적 도그마와 극단적 회의론을 극복하고, 인간 인식의 가능성과 세계와의 관계를 치열하게 논증하는 핵심 범주입니다.`;
      deepKnowledge = `인문학적 사유의 정수는 모든 선지가 정통 철학 학파의 주장으로 구성되어 있을 때, 개념 고유의 인식론적 층위를 정밀하게 식별해내는 능력입니다.`;
      break;

    case 'korean_history':
    default:
      questionPrompt = `앞선 맥락에서 등장한 "${cleanOption}"의 역사적 성격과 제도적 지향점에 대한 학술적 설명 중 가장 적절한 것은?`;
      correctStatement = `${optEunNeun} 국가 재정 수취 체계를 재정비하고 중앙 관료 통제력을 강화하여 지배 질서의 안정을 도모한 제도적 조치이다.`;
      distractor1 = `${optEunNeun} 지방 토호와 사림 세력의 자치적 규율권을 공인하여 중앙 집권적 간섭을 배제하고 향촌 질서의 자율성을 확립하고자 한 정책이다.`;
      distractor2 = `${optEunNeun} 대외 무역의 은(銀) 결제 수단을 통제하여 시장 화폐 유통을 억제하고 현물 중심의 자급 경제 체제를 재건하려 한 시도이다.`;
      distractor3 = `${optEunNeun} 신분 계급별 직역에 따른 전시과·과전법의 수조권 분급 원칙을 재확인하여 관료층의 토지 지배권을 보장하고자 한 규정이다.`;

      reasonCorrect = `정답입니다. ${optEunNeun} 중앙 집권적 재정 구조 확충과 국가 체제 안정화를 목적으로 단행되었습니다.`;
      reasonDist1 = `오답 함정입니다. 향약이나 유향소 등 향촌 자치 규율 정책과 혼동하기 쉬운 매력적인 오답입니다.`;
      reasonDist2 = `오답 함정입니다. 조선 전기 화폐 억제책이나 쇄국적 상업 통제 정책과의 개념 혼동입니다.`;
      reasonDist3 = `오답 함정입니다. 고려·조선 초기의 수조권적 토지 분급 제도(전시과/과전법)와의 시대적 혼동입니다.`;

      explanation = `"${cleanOption}"${josaEunNeun} 역사 발전 과정에서 사회적 모순을 제도적으로 재정비하고 중앙 재정 및 통치 기반을 확충하는 중요한 계기를 제공했습니다.`;
      deepKnowledge = `역사적 제도는 단편적인 연대기 암기가 아니라, 당대의 지배층-피지배층 간 정치 역학, 재정 구조, 조세 수취 방식의 입체적 맥락 속에서 파악해야 합니다.`;
      break;
  }

  // Assemble choices and place correct answer at targetIndex
  const rawDistractors = [
    { text: distractor1, reason: reasonDist1 },
    { text: distractor2, reason: reasonDist2 },
    { text: distractor3, reason: reasonDist3 },
  ];
  const options: string[] = [];
  const wrongOptionsReason: string[] = [];
  let distIdx = 0;

  for (let i = 0; i < 4; i++) {
    if (i === targetIndex) {
      options.push(formatNaturalKorean(correctStatement));
      wrongOptionsReason.push(formatNaturalKorean(reasonCorrect));
    } else {
      const d = rawDistractors[distIdx++];
      options.push(formatNaturalKorean(d.text));
      wrongOptionsReason.push(formatNaturalKorean(d.reason));
    }
  }

  return {
    id: `tail_synth_${Date.now()}`,
    topic: `${cleanTopic} 🔗 ${cleanOption}`,
    difficulty: 'hard',
    difficultyLabel: '심화 꼬리 질문',
    question: formatNaturalKorean(questionPrompt),
    options,
    correctIndex: targetIndex,
    explanation: formatNaturalKorean(explanation),
    deepKnowledge: formatNaturalKorean(deepKnowledge),
    sourceOrTrivia: `DeepQuiz 심화 꼬리 지식 엔진: ${cleanOption}`,
    wrongOptionsReason,
  };
}

// Main resolution function for Tail Questions
export async function resolveTailQuestion(
  parentQuestion: Question,
  optionText: string,
  optionIndex: number
): Promise<Question> {
  const cleanOption = optionText
    .replace(/^([①-⑩0-9A-D가-힣][.)]|\([①-⑩0-9A-D가-힣]\))\s*/i, '')
    .trim();

  // Tier 1: Check if parent question already has embedded tail questions
  if (parentQuestion.tailQuestions && parentQuestion.tailQuestions[optionIndex]) {
    return parentQuestion.tailQuestions[optionIndex];
  }

  // Tier 2: Check Curated Tail Questions encyclopedia (55+ verified concepts across all 12 domains)
  for (const [key, qData] of Object.entries(CURATED_TAIL_QUESTIONS)) {
    if (cleanOption.includes(key) || key.includes(cleanOption)) {
      const rawOptions = (qData.options as string[]) || ['선지1', '선지2', '선지3', '선지4'];
      const q: Question = {
        id: `tail_curated_${Date.now()}_${optionIndex}`,
        topic: `${parentQuestion.topic} 🔗 ${key}`,
        difficulty: 'hard',
        difficultyLabel: '심화 꼬리 질문',
        question: formatNaturalKorean(qData.question || ''),
        options: rawOptions.map((opt) => formatNaturalKorean(opt)),
        correctIndex: qData.correctIndex ?? 0,
        explanation: formatNaturalKorean(qData.explanation || ''),
        deepKnowledge: formatNaturalKorean(qData.deepKnowledge || ''),
        sourceOrTrivia: qData.sourceOrTrivia || `심화 큐레이션 꼬리 지식: ${key}`,
        wrongOptionsReason: qData.wrongOptionsReason?.map((r) => formatNaturalKorean(r)),
      };
      learnQuestions(parentQuestion.topic, [q]);
      return q;
    }
  }

  // Tier 3: Search verified 1,500 Question Bank for related high-difficulty questions
  const bankMatch = findRelevantBankQuestion(parentQuestion, cleanOption);
  if (bankMatch) {
    learnQuestions(parentQuestion.topic, [bankMatch]);
    return bankMatch;
  }

  // Tier 4: Try Gemini AI generation if API key is active
  if (hasApiKey()) {
    try {
      const aiTail = await generateTailQuestionWithGemini(
        parentQuestion.question,
        cleanOption,
        parentQuestion.topic
      );
      if (aiTail) {
        learnQuestions(parentQuestion.topic, [aiTail]);
        return aiTail;
      }
    } catch (err) {
      console.warn('Gemini tail question generation fallback:', err);
    }
  }

  // Tier 5: Context-Aware Procedural Academic Synthesizer (balanced correctIndex, plausible distractors)
  const synth = synthesizeTailQuestionProcedural(parentQuestion, cleanOption);
  learnQuestions(parentQuestion.topic, [synth]);
  return synth;
}
