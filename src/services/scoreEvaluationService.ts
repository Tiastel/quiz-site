// National Mock Exam & CBT Evaluation Service (표준점수, 백분위, 1~9등급 산출 및 과락 판정 엔진)

export interface ExamEvaluationReport {
  rawScore: number; // 0 ~ 100
  standardScore: number; // Mean 100, SD 20
  percentile: number; // 0.0 ~ 99.9%
  grade: number; // 1 ~ 9등급
  gradeTitle: string;
  gradeBadgeColor: string;
  passStatus: '합격' | '불합격';
  evaluationSummary: string;
  advice: string;
}

export interface SectionScore {
  name: string;
  total: number;
  correct: number;
  percent: number;
  isFailCutoff: boolean; // 과락 여부 (40% 미만)
}

export interface DetailedExamReport extends ExamEvaluationReport {
  sectionScores: SectionScore[];
  hasFailCutoff: boolean;
  cutoffFailedSections: string[];
  officialVerdict: '최종 합격' | '과락 불합격' | '평균 미달 불합격';
  cutoffWarningMessage?: string;
}

// Approximate error function for normal CDF
function erf(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);
  const t = 1.0 / (1.0 + p * absX);
  const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);

  return sign * y;
}

function normalCdf(mean: number, sigma: number, to: number): number {
  const z = (to - mean) / (Math.SQRT2 * sigma);
  return 0.5 * (1 + erf(z));
}

export function evaluateCbtExam(rawScorePercent: number): ExamEvaluationReport {
  // Benchmark parameters: National exam mean = 62.5, standard deviation = 16.5
  const populationMean = 62.5;
  const populationSd = 16.5;

  const raw = Math.min(100, Math.max(0, Math.round(rawScorePercent)));
  const zScore = (raw - populationMean) / populationSd;

  // Standard Score: Mean 100, SD 20
  const standardScore = Math.round(100 + zScore * 20);

  // Cumulative Percentile: from 0.0% to 99.9%
  const cumulativeProbability = normalCdf(populationMean, populationSd, raw);
  const percentile = Math.min(99.9, Math.max(0.1, Number((cumulativeProbability * 100).toFixed(1))));

  let grade = 9;
  let gradeTitle = '9등급 (기초 보강 필요)';
  let gradeBadgeColor = 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300';

  if (percentile >= 96.0) {
    grade = 1;
    gradeTitle = '1등급 (최상위 석학)';
    gradeBadgeColor = 'bg-amber-400 text-amber-950 font-black';
  } else if (percentile >= 89.0) {
    grade = 2;
    gradeTitle = '2등급 (우수 학술 인재)';
    gradeBadgeColor = 'bg-indigo-600 text-white font-extrabold';
  } else if (percentile >= 77.0) {
    grade = 3;
    gradeTitle = '3등급 (우수 교양 소양)';
    gradeBadgeColor = 'bg-blue-600 text-white font-bold';
  } else if (percentile >= 60.0) {
    grade = 4;
    gradeTitle = '4등급 (평균 이상 안정권)';
    gradeBadgeColor = 'bg-teal-600 text-white font-bold';
  } else if (percentile >= 40.0) {
    grade = 5;
    gradeTitle = '5등급 (보통 교양 수준)';
    gradeBadgeColor = 'bg-emerald-600 text-white font-medium';
  } else if (percentile >= 23.0) {
    grade = 6;
    gradeTitle = '6등급 (발전 가능권)';
    gradeBadgeColor = 'bg-cyan-600 text-white';
  } else if (percentile >= 11.0) {
    grade = 7;
    gradeTitle = '7등급 (기초 학습 권장)';
    gradeBadgeColor = 'bg-amber-600 text-white';
  } else if (percentile >= 4.0) {
    grade = 8;
    gradeTitle = '8등급 (개념 재정립 요망)';
    gradeBadgeColor = 'bg-rose-600 text-white';
  }

  const passStatus: '합격' | '불합격' = raw >= 60 ? '합격' : '불합격';

  let evaluationSummary = '';
  let advice = '';

  if (grade === 1) {
    evaluationSummary = '전국 상위 4% 이내의 탁월한 지적 통찰력과 학술적 완성도를 달성하셨습니다.';
    advice = '고난도 및 심오한 지식 영역까지 완벽히 장악하셨습니다. 다른 심화 테마의 CBT에 도전해보세요!';
  } else if (grade <= 3) {
    evaluationSummary = '상위권에 랭크되었으며 안정적인 지식 기반과 논리적 문제 해결력을 보유하고 있습니다.';
    advice = '틀린 1~2문항의 배경 지식과 꼬리 문제를 추가 학습하시면 1등급 진입이 가능합니다.';
  } else if (grade <= 5) {
    evaluationSummary = '기초 상식 및 일반 지식 영역은 우수하나, 심화 및 심오한 지식에서 변별력이 발생했습니다.';
    advice = '오답 노트를 적극 활용하여 취약 분야의 개념을 보강하고 재도전해 보세요.';
  } else {
    evaluationSummary = '핵심 개념의 추가 학습 및 기본 교양 지식의 복습이 권장되는 결과입니다.';
    advice = '플래시카드 모드로 핵심 용어를 먼저 암기한 뒤 쉬운 난이도부터 차근차근 올라오세요.';
  }

  return {
    rawScore: raw,
    standardScore,
    percentile,
    grade,
    gradeTitle,
    gradeBadgeColor,
    passStatus,
    evaluationSummary,
    advice,
  };
}

export function evaluateDetailedCbtExam(
  rawScorePercent: number,
  difficultyBreakdown?: Record<string, { total: number; correct: number }>
): DetailedExamReport {
  const base = evaluateCbtExam(rawScorePercent);
  const sectionScores: SectionScore[] = [];
  const cutoffFailedSections: string[] = [];

  const labelMap: Record<string, string> = {
    easy: '기초 상식',
    medium: '핵심 교양',
    hard: '심화 지식',
    profound: '심오한 지식',
  };

  if (difficultyBreakdown) {
    Object.entries(difficultyBreakdown).forEach(([levelKey, data]) => {
      if (data.total > 0) {
        const percent = Math.round((data.correct / data.total) * 100);
        const isCutoff = percent < 40 && data.total >= 2;
        const sectionName = labelMap[levelKey] || levelKey;
        sectionScores.push({
          name: sectionName,
          total: data.total,
          correct: data.correct,
          percent,
          isFailCutoff: isCutoff,
        });
        if (isCutoff) {
          cutoffFailedSections.push(sectionName);
        }
      }
    });
  }

  const hasFailCutoff = cutoffFailedSections.length > 0;
  let officialVerdict: '최종 합격' | '과락 불합격' | '평균 미달 불합격' = '평균 미달 불합격';
  let passStatus: '합격' | '불합격' = base.passStatus;
  let cutoffWarningMessage: string | undefined;

  if (base.rawScore >= 60) {
    if (hasFailCutoff) {
      officialVerdict = '과락 불합격';
      passStatus = '불합격';
      cutoffWarningMessage = `평균 점수는 ${base.rawScore}점으로 60점 이상이나, [${cutoffFailedSections.join(', ')}] 영역이 40점 미만으로 국가기술자격 및 공무원 시험 규정에 따라 '과락 불합격' 처리되었습니다.`;
    } else {
      officialVerdict = '최종 합격';
      passStatus = '합격';
    }
  } else {
    officialVerdict = hasFailCutoff ? '과락 불합격' : '평균 미달 불합격';
    passStatus = '불합격';
    if (hasFailCutoff) {
      cutoffWarningMessage = `평균 점수 미달(${base.rawScore}점) 및 [${cutoffFailedSections.join(', ')}] 영역 과락(40% 미만)입니다.`;
    }
  }

  return {
    ...base,
    passStatus,
    sectionScores,
    hasFailCutoff,
    cutoffFailedSections,
    officialVerdict,
    cutoffWarningMessage,
  };
}
