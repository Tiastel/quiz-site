/**
 * Korean natural grammar and particle (조사) attachment utilities.
 * Handles Hangul syllable final consonants (받침), numbers, English words,
 * and eliminates awkward '(은/는)', '(이/가)' templates with clean natural particles.
 */

// Check if a character has a Hangul final consonant (종성/받침)
export function hasJongseong(char: string): boolean {
  if (!char) return false;
  const code = char.charCodeAt(0);
  // Hangul Syllables block: AC00 - D7A3
  if (code >= 0xac00 && code <= 0xd7a3) {
    return (code - 0xac00) % 28 > 0;
  }

  // Numbers ending analysis
  if (/[136780]/.test(char)) return true; // 일, 삼, 육, 칠, 팔, 영
  if (/[2459]/.test(char)) return false; // 이, 사, 오, 구

  // English letters phonetic approximations
  // l, m, n, r phonetically have final consonant sound (ㄹ, ㅁ, ㄴ)
  // t, k, p, c, g, d also produce 받침 in Korean loanwords (e.g., Net -> 넷, Stack -> 스택, App -> 앱)
  if (/[lmnrtkpcgdbLMNRTKPCGDB]/.test(char)) return true;

  return false;
}

// Get the effective last letter of a noun (skipping trailing punctuation or parentheses)
export function getEffectiveLastChar(noun: string): string {
  if (!noun) return '';
  // Remove trailing parentheses and outer whitespace
  // e.g. "가격의 하방경직성 (Downward Price Stickiness)" -> inspect "성"
  const stripped = noun
    .replace(/\s*\([^)]*\)\s*$/, '') // remove trailing (English...)
    .replace(/['"`.,!?:;~]+$/, '') // remove trailing punctuation
    .trim();

  if (stripped.length > 0) {
    return stripped[stripped.length - 1];
  }
  return noun[noun.length - 1] || '';
}

export type JosaType =
  | '은/는'
  | '이/가'
  | '을/를'
  | '와/과'
  | '과/와'
  | '으로/로'
  | '로/으로'
  | '이나/나'
  | '이란/란'
  | '이라/라'
  | '이며/며'
  | '의'
  | '에'
  | '에서';

/**
 * Attaches the natural Korean particle without ugly brackets.
 * e.g. attachJosa("구축 효과", "은/는") -> "구축 효과는"
 * e.g. attachJosa("가격의 하방경직성", "은/는") -> "가격의 하방경직성은"
 * e.g. attachJosa("포논", "으로/로") -> "포논으로"
 * e.g. attachJosa("물질", "으로/로") -> "물질로" ('ㄹ' 받침은 '로')
 */
export function attachJosa(noun: string, josaType: JosaType): string {
  if (!noun) return '';
  const lastChar = getEffectiveLastChar(noun);
  const code = lastChar.charCodeAt(0);
  const isHangul = code >= 0xac00 && code <= 0xd7a3;
  const jongseongIndex = isHangul ? (code - 0xac00) % 28 : 0;
  const hasBatchim = hasJongseong(lastChar);

  switch (josaType) {
    case '은/는':
      return `${noun}${hasBatchim ? '은' : '는'}`;
    case '이/가':
      return `${noun}${hasBatchim ? '이' : '가'}`;
    case '을/를':
      return `${noun}${hasBatchim ? '을' : '를'}`;
    case '와/과':
    case '과/와':
      return `${noun}${hasBatchim ? '과' : '와'}`;
    case '으로/로':
    case '로/으로':
      // Special rule: if 받침 is 'ㄹ' (jongseongIndex === 8), use '로'
      if (isHangul && jongseongIndex === 8) {
        return `${noun}로`;
      }
      return `${noun}${hasBatchim ? '으로' : '로'}`;
    case '이나/나':
      return `${noun}${hasBatchim ? '이나' : '나'}`;
    case '이란/란':
      return `${noun}${hasBatchim ? '이란' : '란'}`;
    case '이라/라':
      return `${noun}${hasBatchim ? '이라' : '라'}`;
    case '이며/며':
      return `${noun}${hasBatchim ? '이며' : '며'}`;
    case '의':
      return `${noun}의`;
    case '에':
      return `${noun}에`;
    case '에서':
      return `${noun}에서`;
    default:
      return `${noun}`;
  }
}

/**
 * Converts raw LaTeX, math delimiters, and broken symbols (%...&=, $...$, \text{}, \sqrt{}, etc.)
 * into clear, human-readable Unicode mathematical and scientific symbols.
 * Preserves clean equations (e.g. 3 + 7 = 10, E = mc², F(x) + x, Softmax(Q Kᵀ / √dₖ) V).
 */
export function cleanHumanReadableSymbols(text: string): string {
  if (!text) return '';
  let str = text;

  // 1. Clean weird prompt or encoding artifacts like %3+7&=$10$ or %...&
  str = str.replace(/%([0-9a-zA-Z가-힣\s+*×/=-]+)&=(?:\$)?/g, '$1 = ');
  str = str.replace(/%([0-9a-zA-Z가-힣\s+*×/=-]+)&/g, '$1');

  // 2. Common LaTeX math macros
  str = str.replace(/\\text\{([^}]+)\}/g, '$1');
  str = str.replace(/\\mathbf\{([^}]+)\}/g, '$1');
  str = str.replace(/\\mathit\{([^}]+)\}/g, '$1');
  str = str.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  str = str.replace(/\\sqrt\{([^}]+)\}/g, '√$1');
  str = str.replace(/\\sqrt\s*/g, '√');
  str = str.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)');

  // Math operators & symbols
  str = str.replace(/\\times/g, '×');
  str = str.replace(/\\cdot/g, '·');
  str = str.replace(/\\approx/g, '≈');
  str = str.replace(/\\propto/g, '∝');
  str = str.replace(/\\pm/g, '±');
  str = str.replace(/\\mp/g, '∓');
  str = str.replace(/\\le(?:q)?(?![a-zA-Z])/g, '≤');
  str = str.replace(/\\ge(?:q)?(?![a-zA-Z])/g, '≥');
  str = str.replace(/\\neq/g, '≠');
  str = str.replace(/\\(?:to|rightarrow)(?![a-zA-Z])/g, '→');
  str = str.replace(/\\infty/g, '∞');
  str = str.replace(/\\hbar/g, 'ℏ');
  str = str.replace(/\\Delta\s*([a-zA-Z0-9])/g, 'Δ$1');
  str = str.replace(/\\Delta/g, 'Δ');
  str = str.replace(/\\lambda/g, 'λ');
  str = str.replace(/\\alpha/g, 'α');
  str = str.replace(/\\beta/g, 'β');
  str = str.replace(/\\gamma/g, 'γ');
  str = str.replace(/\\mu/g, 'μ');
  str = str.replace(/\\pi/g, 'π');
  str = str.replace(/\\theta/g, 'θ');
  str = str.replace(/\\sigma/g, 'σ');
  str = str.replace(/\\omega/g, 'ω');
  str = str.replace(/\\degree/g, '°');
  str = str.replace(/\^\{\\circ\}/g, '°');

  // Superscripts & Subscripts
  str = str.replace(/\^2(?![0-9])/g, '²');
  str = str.replace(/\^3(?![0-9])/g, '³');
  str = str.replace(/\^T(?![a-zA-Z])/g, 'ᵀ');
  str = str.replace(/_k(?![a-zA-Z])/g, 'ₖ');

  // 3. Remove dollar signs wrapping math or stray dollars
  str = str.replace(/\$\$([^$]+)\$\$/g, '$1');
  str = str.replace(/\$([^$\n]+)\$/g, '$1');
  // If single stray $ remains and not followed by a price, remove it
  str = str.replace(/\$(?!\d+(?:[.,]\d+)?\s*(?:달러|USD|원|억|만|천)?)/g, '');
  str = str.replace(/([0-9])\$/g, '$1');

  // 4. Clean any residual backslashes before plain words
  str = str.replace(/\\([a-zA-Z]+)/g, '$1');

  // 5. Clean spacing around mathematical operators
  str = str.replace(/\s*([=×÷])\s*/g, ' $1 ');
  str = str.replace(/([0-9a-zA-Z가-힣)\]])\s*([+])\s*([0-9a-zA-Z가-힣(\[])/g, '$1 + $3');
  str = str.replace(/-\s*>/g, '→');
  str = str.replace(/[ \t]+/g, ' ');

  return str.trim();
}

/**
 * Clean and format sentences to remove awkward brackets like 은(는), 이(가), 을(를), 와(과)
 * while preserving meaningful academic/English parenthetical content, and converts
 * raw LaTeX/escaped math symbols into human-friendly Unicode.
 */
export function formatNaturalKorean(text: string): string {
  if (!text) return '';

  let result = cleanHumanReadableSymbols(text);

  // 1. Replace word + 은(는) or 는(은)
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*은\(는\)/g, (_, word) => attachJosa(word, '은/는'));
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*는\(은\)/g, (_, word) => attachJosa(word, '은/는'));

  // 2. Replace word + 이(가) or 가(이)
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*이\(가\)/g, (_, word) => attachJosa(word, '이/가'));
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*가\(이\)/g, (_, word) => attachJosa(word, '이/가'));

  // 3. Replace word + 을(를) or 를(을)
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*을\(를\)/g, (_, word) => attachJosa(word, '을/를'));
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*를\(을\)/g, (_, word) => attachJosa(word, '을/를'));

  // 4. Replace word + 와(과) or 과(와)
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*와\(과\)/g, (_, word) => attachJosa(word, '와/과'));
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*과\(와\)/g, (_, word) => attachJosa(word, '와/과'));

  // 5. Replace word + (으)로 or 으로(로)
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*\(으\)로/g, (_, word) => attachJosa(word, '으로/로'));
  result = result.replace(/([가-힣0-9A-Za-z]+)\s*으로\(로\)/g, (_, word) => attachJosa(word, '으로/로'));

  // 6. Clean empty parentheses or redundant empty brackets
  result = result.replace(/\(\s*\)/g, '');

  return result.trim();
}
