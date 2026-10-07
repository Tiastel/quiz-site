import type { Question, DifficultyLevel } from '../types/quiz';


const GEMINI_STORAGE_KEY = 'quiz_gemini_api_key';

export function getStoredApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(GEMINI_STORAGE_KEY) || (import.meta.env.VITE_GEMINI_API_KEY as string) || '';
}

export function saveApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  if (!key.trim()) {
    localStorage.removeItem(GEMINI_STORAGE_KEY);
  } else {
    localStorage.setItem(GEMINI_STORAGE_KEY, key.trim());
  }
}

export function hasApiKey(): boolean {
  return Boolean(getStoredApiKey());
}

interface GeminiRawQuestion {
  difficulty: DifficultyLevel;
  difficultyLabel?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  deepKnowledge: string;
}

export async function generateQuizWithGemini(
  topic: string,
  count: number,
  mode: 'progressive' | 'custom',
  fixedDifficulty?: DifficultyLevel
): Promise<Question[]> {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    throw new Error('Gemini API 키가 설정되지 않았습니다.');
  }

  const difficultyPlan =
    mode === 'custom' && fixedDifficulty
      ? `모든 문제를 '${fixedDifficulty}' 난이도로 출제하세요.`
      : `총 ${count}문제를 상식부터 심오한 지식까지 점진적 난이도로 배분하세요:
- 기초 상식 (easy): 누구나 흥미를 가질 만한 필수적 기본 상식 및 입문 질문
- 일반 지식 (medium): 교양 수준의 표준적인 핵심 원리나 역사/개념
- 심화 지식 (hard): 깊이 있는 메커니즘, 심화 역사적 맥락, 전문적 원리
- 심오한 지식 (profound): 학술적 본질, 패러다임을 바꾼 발견, 철학적/수학적 깊이가 담긴 최고난도 통찰`;

  const prompt = `당신은 세계 최고의 지식 퀴즈 큐레이터이자 학술 해설자입니다.
주제: "${topic}"

요구사항:
1. 총 ${count}개의 4지선다(4-choice) 퀴즈 문제를 생성하세요.
2. 난이도 설계:
${difficultyPlan}
3. 각 문항은 다음 요소를 완벽하게 갖추어야 합니다:
   - difficulty: "easy" | "medium" | "hard" | "profound"
   - difficultyLabel: "기초 상식" | "일반 지식" | "심화 지식" | "심오한 지식"
   - question: 명확하고 지적 호기심을 자극하는 한국어 문제
   - options: 4개의 뚜렷하고 매력적인 선택지 (배열 길이 정확히 4개)
   - correctIndex: 정답의 인덱스 (0, 1, 2, 3 중 하나, 골고루 분포)
   - explanation: 정답인 이유와 오답의 함정을 명쾌하게 짚어주는 고품격 해설 (2~3문장)
   - deepKnowledge: 해당 문제와 관련된 '심오한 지식 한 걸음 더' (역사적 비화, 학술적 확장, 실생활 응용 등 깊이 있는 지식 팁 2~3문장)

반드시 유효한 JSON 형식으로만 응답해야 합니다.
응답 JSON 스키마:
{
  "questions": [
    {
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "문제 내용",
      "options": ["선택지1", "선택지2", "선택지3", "선택지4"],
      "correctIndex": 0,
      "explanation": "해설 내용",
      "deepKnowledge": "심오한 지식 한 걸음 더"
    }
  ]
}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    let errorMsg = `Gemini API 호출 실패 (${response.status})`;
    try {
      const parsed = JSON.parse(errorBody);
      if (parsed.error && parsed.error.message) {
        errorMsg = parsed.error.message;
      }
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  const data = await response.json();
  const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textContent) {
    throw new Error('Gemini 응답에서 퀴즈 데이터를 추출하지 못했습니다.');
  }

  let parsedData: { questions: GeminiRawQuestion[] };
  try {
    parsedData = JSON.parse(textContent);
  } catch {
    throw new Error('AI 응답 파싱 실패: 올바른 JSON 형식이 아닙니다.');
  }

  if (!parsedData.questions || !Array.isArray(parsedData.questions)) {
    throw new Error('퀴즈 문제 목록 형식이 올바르지 않습니다.');
  }

  return parsedData.questions.map((raw, idx) => ({
    id: `gemini_${Date.now()}_${idx}`,
    topic,
    difficulty: raw.difficulty || 'medium',
    difficultyLabel:
      raw.difficultyLabel ||
      (raw.difficulty === 'easy'
        ? '기초 상식'
        : raw.difficulty === 'medium'
        ? '일반 지식'
        : raw.difficulty === 'hard'
        ? '심화 지식'
        : '심오한 지식'),
    question: raw.question,
    options: raw.options,
    correctIndex: raw.correctIndex >= 0 && raw.correctIndex < 4 ? raw.correctIndex : 0,
    explanation: raw.explanation,
    deepKnowledge: raw.deepKnowledge || '더 깊은 원리를 탐구해보세요.',
    sourceOrTrivia: 'Gemini AI Knowledge Engine',
  }));
}

export async function generateTailQuestionWithGemini(
  parentQuestionText: string,
  optionText: string,
  topic: string
): Promise<Question> {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    throw new Error('Gemini API 키가 설정되지 않았습니다.');
  }

  const prompt = `당신은 대한민국 최고 수준의 학술 지식 퀴즈 큐레이터 및 수능·국가고시 출제위원입니다.
학습자가 방금 푼 문제:
"${parentQuestionText}"

학습자가 더 깊이 탐구하고 싶어 클릭한 선지/개념:
"${optionText}" (학술 분야: ${topic})

[출제 요구사항 - 난이도 및 변별력 엄격 통제]:
1. 지식이 없어도 상식이나 개념어 이름만으로 답을 맞출 수 있는 지나치게 쉬운 문제는 엄격히 배제하십시오.
2. '${optionText}'의 단순 정의나 명칭 맞추기를 묻지 말고, 본질적인 작동 기제, 핵심 역사적·학술적 쟁점, 인과관계, 한계점 또는 정밀한 원리를 물으십시오.
3. 3개의 오답 선지(Distractors)는 해당 학술 분야에서 실제로 통용되는 매우 매력적인 인접 이론, 혼동하기 쉬운 유사 개념, 또는 전형적인 학술적 함정(Plausible Traps)으로 정교하게 구성하십시오. 터무니없이 부정적이거나 엉뚱한 오답을 넣지 마십시오.
4. 4개 선지의 길이, 문체, 완성도를 대등하게 유지하여 선지 외형만 보고 답을 유추할 수 없도록 하십시오.
5. 정답 위치(correctIndex)는 0~3 중 자연스럽게 배치하십시오 (0에만 두지 말 것).
6. 각 선지별 왜 정답이고 왜 매력적인 오답 함정인지 분석한 'wrongOptionsReason' (4개 문자열 배열)을 반드시 포함하십시오.

JSON 출력 형식:
{
  "difficulty": "hard",
  "difficultyLabel": "심화 꼬리 질문",
  "question": "구체적인 원리와 인과관계를 묻는 심화 질문 문장...",
  "options": ["정교한 학술 선지 1", "정교한 학술 선지 2", "정교한 학술 선지 3", "정교한 학술 선지 4"],
  "correctIndex": 2,
  "explanation": "핵심 원리와 정답인 이유에 대한 명쾌한 학술 해설...",
  "deepKnowledge": "추가적인 학술 논문 및 배경 사상 심화 통찰...",
  "wrongOptionsReason": [
    "1번 선지가 매력적인 오답 함정인 이유...",
    "2번 선지가 매력적인 오답 함정인 이유...",
    "정답입니다. 핵심 원리를 정확히 설명하고 있습니다.",
    "4번 선지가 매력적인 오답 함정인 이유..."
  ]
}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Gemini 꼬리 질문 생성 요청 실패');
  }

  const data = await response.json();
  const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textContent) throw new Error('AI 응답이 비어 있습니다.');

  const parsed = JSON.parse(textContent);
  return {
    id: `tail_gemini_${Date.now()}`,
    topic: `${topic} 🔗 ${optionText}`,
    difficulty: parsed.difficulty || 'hard',
    difficultyLabel: '심화 꼬리 질문',
    question: parsed.question,
    options: parsed.options,
    correctIndex: parsed.correctIndex >= 0 && parsed.correctIndex < 4 ? parsed.correctIndex : 0,
    explanation: parsed.explanation,
    deepKnowledge: parsed.deepKnowledge || '더 깊은 원리를 탐구해보세요.',
    sourceOrTrivia: `Gemini AI 심화 학술 꼬리 지식: ${optionText}`,
    wrongOptionsReason: Array.isArray(parsed.wrongOptionsReason) ? parsed.wrongOptionsReason : undefined,
  };
}
