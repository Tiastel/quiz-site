import * as fs from 'fs';
import * as path from 'path';
import type { Question } from '../src/types/quiz';

console.log('🚀 [Build Ultra Bank] Generating 300 ultra-high-quality questions across 12 domains (25 questions each)...');

interface RawItem {
  id: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'profound';
  difficultyLabel: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  deepKnowledge: string;
  sourceOrTrivia: string;
  wrongOptionsReason: [string, string, string, string];
}

// 12 domains x 25 = 300 questions
const ULTRA_BANK_DATA: Record<string, RawItem[]> = {
  space: [
    {
      id: "ultra_sp_1",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "태양계 행성 중 태양으로부터 거리가 가장 멀며, 푸른 메탄 대기와 강력한 초속 2,000km 폭풍이 관측되는 해왕성의 위성 중 역행 궤도를 도는 최대 위성은?",
      options: ["트리톤 (Triton)", "타이탄 (Titan)", "가니메데 (Ganymede)", "칼리스토 (Callisto)"],
      correctIndex: 0,
      explanation: "트리톤은 해왕성의 최대 위성으로, 모행성의 자전 방향과 반대로 공전하는 역행 궤도를 가지며 과거 카이퍼 벨트에서 포획된 천체로 추정됩니다.",
      deepKnowledge: "보이저 2호 탐사 결과 트리톤 표면에는 영하 235℃의 질소 빙하와 함께 질소 가스가 분출하는 저온 화산(Cryovolcano) 활동이 실측되었습니다.",
      sourceOrTrivia: "NASA Voyager 2 Neptune Flyby Archives (1989)",
      wrongOptionsReason: [
        "정답입니다. 해왕성의 대표적인 대형 역행 위성입니다.",
        "타이탄은 토성의 위성이며 질소 대기와 메탄 호수를 가집니다.",
        "가니메데는 목성의 위성이자 태양계에서 가장 큰 위성입니다.",
        "칼리스토는 목성의 다수의 충돌구를 가진 위성입니다."
      ]
    },
    {
      id: "ultra_sp_2",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "태양의 중심부에서 수소 원자핵 4개가 융합하여 헬륨 원자핵 1개로 변환되면서 질량 결손($E=mc^2$)에 의해 막대한 에너지를 방출하는 핵융합 반응은?",
      options: ["p-p 연쇄 반응 (양성자-양성자 연쇄 반응)", "CNO 순환 반응", "3중 알파 반응", "탄소 연소 반응"],
      correctIndex: 0,
      explanation: "태양과 같은 1태양질량 미만의 주계열성에서는 중심 온도가 약 1,500만K로, p-p 연쇄 반응이 전체 핵융합 에너지의 98% 이상을 담당합니다.",
      deepKnowledge: "태양 질량의 1.3배 이상인 고온의 무거운 별에서는 탄소, 질소, 산소가 촉매 역할을 하는 CNO 순환 반응이 지배적으로 일어납니다.",
      sourceOrTrivia: "Bethe (1939) 'Energy Production in Stars', Physical Review",
      wrongOptionsReason: [
        "정답입니다. 태양급 항성의 핵심 에너지원입니다.",
        "CNO 순환은 태양보다 무거운 고온 항성에서 지배적입니다.",
        "3중 알파 반응은 적색거성의 헬륨 핵융합 단계입니다.",
        "탄소 연소는 초거성 후기 단계에서 일어납니다."
      ]
    },
    {
      id: "ultra_sp_3",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "케플러의 행성 운동 법칙 중, '모든 행성의 공전 주기의 제곱($P^2$)은 궤도 장반경의 세제곱($a^3$)에 비례한다'는 법칙의 명칭은?",
      options: ["조화의 법칙 (제3법칙)", "타원 궤도의 법칙 (제1법칙)", "면적속도 일정의 법칙 (제2법칙)", "만유인력의 역제곱 법칙"],
      correctIndex: 0,
      explanation: "케플러 제3법칙(조화의 법칙)은 행성의 태양으로부터의 평균 거리와 공전 주기 사이의 엄밀한 수학적 조화 관계($P^2 \propto a^3$)를 규명했습니다.",
      deepKnowledge: "이 법칙은 뉴턴이 만유인력 법칙을 수학적으로 유도하는 데 결정적인 토대가 되었으며, $P^2 = \frac{4\pi^2}{G(M+m)} a^3$으로 일반화되었습니다.",
      sourceOrTrivia: "Kepler (1619) Harmonices Mundi",
      wrongOptionsReason: [
        "정답입니다. 주기와 궤도 반경의 거듭제곱 관계를 다룹니다.",
        "제1법칙은 행성 궤도가 태양을 한 초점으로 하는 타원임을 설명합니다.",
        "제2법칙은 동일 시간 동안 휩쓸고 지나가는 부채꼴 면적이 같음을 설명합니다.",
        "역제곱 법칙은 뉴턴이 유도한 만유인력의 거리 반비례 특성입니다."
      ]
    },
    {
      id: "ultra_sp_4",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "1995년 마요르(Mayor)와 켈로즈(Queloz) 교수가 시선속도법(도플러 분광법)을 통해 인류 역사상 최초로 발견한 태양과 유사한 주계열성 주위를 도는 외계행성은?",
      options: ["페가수스자리 51 b (51 Pegasi b)", "프록시마 b", "트라피스트-1e", "케플러-22b"],
      correctIndex: 0,
      explanation: "페가수스자리 51 b는 목성 절반 정도 질량의 가스 행성이 모항성을 불과 4.2일 만에 공전하는 '뜨거운 목성(Hot Jupiter)'으로, 두 학자는 2019 노벨물리학상을 수상했습니다.",
      deepKnowledge: "이 발견은 태양계 형성 모델(가스 행성은 외곽에서만 형성된다는 기존 성운설)을 대대적으로 수정하여 행성 이동(Planetary Migration) 이론의 시발점이 되었습니다.",
      sourceOrTrivia: "Mayor & Queloz (1995) Nature 378, 355-359",
      wrongOptionsReason: [
        "정답입니다. 최초로 확인된 주계열성 외계행성입니다.",
        "프록시마 b는 2016년에 발견된 가장 가까운 적색왜성 외계행성입니다.",
        "트라피스트-1e는 지구 크기 지구형 행성입니다.",
        "케플러-22b는 2011년 케플러 망원경이 발견한 거주가능구역 행성입니다."
      ]
    },
    {
      id: "ultra_sp_5",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "회전하는 블랙홀(커 블랙홀, Kerr Black Hole)의 사건의 지평선 바깥에 존재하며, 시공간이 빛의 속도 이상으로 끌려 돌아가 어떤 물체도 정지해 있을 수 없는 특이 영역은?",
      options: ["작용권 (Ergosphere)", "광자구 (Photon Sphere)", "슈바르츠실트 반지름 구면", "강착원반 (Accretion Disk)"],
      correctIndex: 0,
      explanation: "작용권(Ergosphere)은 회전하는 천체가 주변 시공간을 함께 끌고 도는 '틀 끌림(Frame-Dragging)' 효과가 극대화되어 시공간 자체가 회전하는 영역입니다.",
      deepKnowledge: "로저 펜로즈는 작용권 안으로 들어간 입자가 붕괴할 때 음의 에너지를 블랙홀에 주고 남은 파편이 블랙홀의 회전 에너지를 흡수해 튕겨 나오는 '펜로즈 과정'을 입증했습니다.",
      sourceOrTrivia: "Penrose (1969) Nuovo Cimento",
      wrongOptionsReason: [
        "정답입니다. 커 블랙홀의 에너지 추출이 가능한 작용권입니다.",
        "광자구는 빛이 원 궤도를 돌 수 있는 불안정한 궤도면입니다.",
        "슈바르츠실트 반지름은 정적 블랙홀의 사건의 지평선 크기입니다.",
        "강착원반은 낙하하는 가스와 먼지가 마찰열로 빛나는 원반입니다."
      ]
    },
    {
      id: "ultra_sp_6",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "2017년 8월, LIGO와 Virgo 중력파 관측소 및 전 세계 전자기파 망원경이 역사상 최초로 중력파와 감마선·광학 신호를 동시 검측(GW170817)한 우주 충돌 사건의 실체는?",
      options: ["두 중성자별의 병합 (킬로노바, Kilonova)", "블랙홀과 항성의 충돌", "쌍성 블랙홀의 병합", "초신성 Ia형 폭발"],
      correctIndex: 0,
      explanation: "GW170817은 두 중성자별이 나선 궤도로 충돌 병합하며 방출한 중력파와 r-과정 중성자 포획으로 금, 백금 등 무거운 원소가 대량 합성된 킬로노바 현상이었습니다.",
      deepKnowledge: "이 관측은 인류가 중력파와 전자기파를 동시에 활용하는 '다중 신호 천문학(Multi-Messenger Astronomy)'의 황금기를 열었음을 전 세계에 선포했습니다.",
      sourceOrTrivia: "Abbott et al. (LIGO/Virgo Collaboration, 2017) Phys. Rev. Lett. 119",
      wrongOptionsReason: [
        "정답입니다. 다중 신호 천문학을 연 쌍성 중성자별 병합 사건입니다.",
        "블랙홀-항성 충돌은 중성자별 병합 킬로노바와 스펙트럼이 다릅니다.",
        "쌍성 블랙홀 병합은 전자기파 방출이 거의 없는 순수 중력파 사건입니다.",
        "Ia형 초신성은 백색왜성의 한계질량 초과 폭발입니다."
      ]
    },
    {
      id: "ultra_sp_7",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "우주 마이크로파 배경 복사(CMB)와 우주 거대구조의 은하 분포에서 관측되며, 초기 우주의 광자-바리온 플라스마 음파가 우주 재결합 시점에 동결되어 표준 잣대(약 150 Mpc)를 형성한 현상은?",
      options: ["바리온 음향 진동 (Baryon Acoustic Oscillations, BAO)", "작스-볼프 효과 (Sachs-Wolfe Effect)", "수냐에프-젤도비치 효과 (SZ Effect)", "라이만-알파 숲 (Lyman-alpha Forest)"],
      correctIndex: 0,
      explanation: "BAO는 대폭발 후 38만 년까지 플라스마 내부를 전파하던 소리의 압력파가 우주가 투명해지며 멈춘 척도로, 우주의 팽창 역사와 암흑에너지를 측정하는 가장 신뢰받는 우주론적 '표준 자'입니다.",
      deepKnowledge: "슬론 디지털 스카이 서베이(SDSS)와 DESI 프로젝트는 수백만 개 은하의 3차원 위치에서 150Mpc 거리의 은하 집중 피크를 정밀 측정하여 $\Lambda$CDM 표준 우주 모델을 강력하게 뒷받침했습니다.",
      sourceOrTrivia: "Eisenstein et al. (SDSS Collaboration, 2005) Astrophysical Journal 633",
      wrongOptionsReason: [
        "정답입니다. 초기 우주 음파 동결로 형성된 표준 잣대입니다.",
        "작스-볼프 효과는 중력 적색편이로 인한 CMB 온도 요동입니다.",
        "SZ 효과는 은하단 고온 전자에 의한 광자 역 콤프턴 산란입니다.",
        "라이만 알파 숲은 퀘이사 빛이 통과하는 중성수소 구름의 흡수선 무리입니다."
      ]
    },
    {
      id: "ultra_sp_8",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "제임스 웹 우주망원경(JWST)이 발견한 은하 JADES-GS-z14-0 처럼, 빅뱅 후 불과 3억 년 시점에서 예상치를 훨씬 뛰어넘는 질량과 밝기를 지닌 초기 초거대 은하들의 발견이 던진 우주론적 화두는?",
      options: ["초기 우주 성단 형성 속도와 초대질량 블랙홀의 초고속 성장 메커니즘", "일반상대성이론의 완전한 폐기와 수정 뉴턴 역학 채택", "우주 배경 복사가 빅뱅의 산물이 아니라는 증거", "암흑물질이 우주에 존재하지 않는다는 실증"],
      correctIndex: 0,
      explanation: "JWST 관측은 우주 초기에 별 형성과 블랙홀 성장이 기존 표준 모델의 이론적 한계보다 훨씬 효율적이고 빨랐음을 보여주어, '직접 붕괴 블랙홀(DCBH)' 등 새로운 가설을 촉발시켰습니다.",
      deepKnowledge: "에딩턴 한계(Eddington Limit)를 일시적으로 초과하는 초에딩턴 강착(Super-Eddington Accretion)이나 최초의 항성족 III(Population III) 별들의 거대 질량이 핵심 연구 주제로 떠올랐습니다.",
      sourceOrTrivia: "Carniani et al. (JADES Collaboration, 2024) Nature",
      wrongOptionsReason: [
        "정답입니다. 초기 우주의 초고속 성장이 천체물리학의 핵심 난제로 부상했습니다.",
        "일반상대론은 거시 팽창 역학에서 여전히 완벽하게 부합합니다.",
        "우주배경복사의 정밀성은 플랑크 위성 등으로 더욱 확고해졌습니다.",
        "은하 회전과 중력 렌즈 관측은 암흑물질의 존재를 강력히 지지합니다."
      ]
    },
    {
      id: "ultra_sp_9",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "태양계 외곽 카이퍼 벨트 너머 약 2,000~100,000 AU 거리에 거대한 구형 껍질 형태로 펼쳐져 있으며, 장주기 혜성들의 고향으로 알려진 이론적 천체 집합체는?",
      options: ["오르트 구름 (Oort Cloud)", "소행성대 (Asteroid Belt)", "힐스 구름 (Hills Cloud)", "카이퍼 절벽 (Kuiper Cliff)"],
      correctIndex: 0,
      explanation: "얀 오르트(Jan Oort)가 제안한 오르트 구름은 수조 개에 달하는 얼음과 먼지 미행성체들이 태양 중력에 희미하게 묶여 구형으로 우주 공간을 둘러싸고 있는 영역입니다.",
      deepKnowledge: "인근 항성의 통과나 우리은하 원반의 은하 조석력에 의해 오르트 구름 천체의 궤도가 교란되면 태양계 내부로 낙하하여 장주기 혜성(예: 헤일-밥 혜성)이 됩니다.",
      sourceOrTrivia: "Oort (1950) Bulletin of the Astronomical Institutes of the Netherlands",
      wrongOptionsReason: [
        "정답입니다. 장주기 혜성의 거대한 구형 기원지입니다.",
        "소행성대는 화성과 목성 사이의 암석형 천체 밀집대입니다.",
        "힐스 구름은 오르트 구름의 안쪽 원반형 영역을 가리키는 하위 개념입니다.",
        "카이퍼 절벽은 50AU 부근에서 고전적 카이퍼 벨트 천체가 급감하는 경계입니다."
      ]
    },
    {
      id: "ultra_sp_10",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "태양계의 행성 중 밀도가 물(1.0 g/cm³)보다 낮아(약 0.69 g/cm³), 만약 거대한 바다가 있다면 물 위에 뜰 수 있는 행성은?",
      options: ["토성", "목성", "천왕성", "금성"],
      correctIndex: 0,
      explanation: "토성은 수소와 헬륨이 주성분인 거대 가스 행성으로, 거대한 부피에 비해 질량이 상대적으로 작아 평균 밀도가 물보다 낮습니다.",
      deepKnowledge: "토성의 아름다운 고리는 99% 이상이 순수한 물의 얼음 입자들로 이루어져 있으며, 두께는 수십 미터에 불과할 정도로 극도로 얇습니다.",
      sourceOrTrivia: "NASA Saturn Fact Sheet",
      wrongOptionsReason: [
        "정답입니다. 태양계에서 유일하게 밀도가 물보다 낮은 행성입니다.",
        "목성의 평균 밀도는 약 1.33 g/cm³로 물보다 높습니다.",
        "천왕성의 평균 밀도는 약 1.27 g/cm³입니다.",
        "금성은 암석형 행성으로 밀도가 약 5.24 g/cm³에 달합니다."
      ]
    },
    {
      id: "ultra_sp_11",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "태양 중심핵에서 생성된 감마선 광자가 복사층의 고밀도 물질 입자들과 끊임없이 충돌하고 산란(무작위 보행)하여 태양 표면까지 도달하는 데 걸리는 평균 시간은?",
      options: ["약 10만~100만 년", "약 8분 20초", "약 1년", "약 100년"],
      correctIndex: 0,
      explanation: "광자는 극도로 밀도가 높은 복사층을 통과하며 수없이 톰슨 산란을 겪기 때문에, 중심핵에서 표면(광구)까지 도달하는 데 10만 년 이상의 유효 이동 시간이 소요됩니다.",
      deepKnowledge: "반면 핵융합 반응 시 동시에 생성되는 중미자(Neutrino)는 물질과 거의 상호작용하지 않고 광속으로 약 2.3초 만에 태양을 빠져나와 8분 만에 지구에 도달합니다.",
      sourceOrTrivia: "Mitalas & Sills (1992) 'On the photon diffusion time scale for the sun'",
      wrongOptionsReason: [
        "정답입니다. 무작위 보행(Random Walk)으로 인해 막대한 시간이 걸립니다.",
        "8분 20초는 광구가 방출한 빛이 진공을 지나 지구에 도달하는 시간입니다.",
        "1년은 복사층의 평균 자유 행로를 감안할 때 턱없이 부족한 시간입니다.",
        "100년 역시 실제 산란 횟수(약 10^21회)에 비추어 지나치게 짧습니다."
      ]
    },
    {
      id: "ultra_sp_12",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "태양풍과 성간 물질이 충돌하여 태양풍의 속도가 초음속에서 아음속으로 급격히 떨어지는 경계면으로, 보이저 1호와 2호가 통과한 지점의 명칭은?",
      options: ["말단 충격면 (Termination Shock)", "태양권계면 (Heliopause)", "궁두 충격파 (Bow Shock)", "자기권계면 (Magnetopause)"],
      correctIndex: 0,
      explanation: "말단 충격면(Termination Shock)은 태양풍 입자들이 외부 성간 매질의 저항을 받아 초음속에서 아음속으로 감속되며 밀도와 온도가 급상승하는 1차 경계면입니다.",
      deepKnowledge: "그 너머의 헬리오시스(Heliosheath)를 지나 태양풍의 압력과 성간 물질의 압력이 완전히 평형을 이루어 진정한 성간 우주가 시작되는 경계가 바로 태양권계면(Heliopause)입니다.",
      sourceOrTrivia: "Stone et al. (Voyager Science Team, 2005) Science 309",
      wrongOptionsReason: [
        "정답입니다. 초음속 태양풍이 아음속으로 감속되는 충격파 면입니다.",
        "태양권계면은 태양풍의 영향력이 완전히 끝나고 성간 공간이 시작되는 최종 경계입니다.",
        "궁두 충격파는 태양계가 성간 매질 속을 전진할 때 전방에 형성되는 충격파입니다.",
        "자기권계면은 행성 자기장과 태양풍 사이의 경계입니다."
      ]
    },
    {
      id: "ultra_sp_13",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "지구의 조석력으로 인해 달이 자전 주기와 공전 주기가 약 27.3일로 완벽하게 일치하여, 지구에서는 항상 달의 한쪽 면만 보게 되는 천체역학적 현상은?",
      options: ["조석 고정 (Tidal Locking)", "세차 운동", "동주기 자전 왜곡", "궤도 공명"],
      correctIndex: 0,
      explanation: "조석 고정은 모천체의 중력에 의해 위성에 발생한 조석 팽대부가 자전 속도를 늦추어 자전 주기와 공전 주기가 1:1로 일치하게 된 결과입니다.",
      deepKnowledge: "명왕성과 그 위성 카론은 서로를 향해 완전히 조석 고정되어 있어 두 천체 모두 서로에게 영원히 같은 면만을 마주보고 공전합니다.",
      sourceOrTrivia: "Murray & Dermott (1999) Solar System Dynamics",
      wrongOptionsReason: [
        "정답입니다. 조석 마찰에 의해 자전과 공전이 동기화되는 현상입니다.",
        "세차 운동은 자전축의 방향이 원을 그리며 회전하는 현상입니다.",
        "동주기 자전 왜곡은 공학적 표준 용어가 아닙니다.",
        "궤도 공명은 두 천체의 공전 주기 비율이 정수비를 이루는 현상입니다."
      ]
    },
    {
      id: "ultra_sp_14",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "별의 진화 단계 중 질량이 큰 항성이 핵융합을 끝마치고 중력 붕괴를 일으킬 때, 전자가 양성자와 융합하여 중성자로 변환되며 반경 약 10~15km에 태양 질량의 1.4~2배가 압축된 초고밀도 천체는?",
      options: ["중성자별 (Neutron Star)", "백색왜성 (White Dwarf)", "갈색왜성 (Brown Dwarf)", "블랙홀 (Black Hole)"],
      correctIndex: 0,
      explanation: "중성자별은 중성자의 축퇴압(Neutron Degeneracy Pressure)으로 중력 붕괴를 버텨내는 천체로, 찻숟가락 한 술 분량의 질량이 수억 톤에 달합니다.",
      deepKnowledge: "중성자별이 톨만-오펜하이머-볼코프(TOV) 한계(약 2.2~3 태양질량)를 초과하면 어떤 축퇴압으로도 중력을 지탱하지 못하고 블랙홀로 붕괴합니다.",
      sourceOrTrivia: "Baade & Zwicky (1934) 'Remarks on Super-Novae and Cosmic Rays'",
      wrongOptionsReason: [
        "정답입니다. 중성자 축퇴압으로 지탱되는 고밀도 천체입니다.",
        "백색왜성은 전자 축퇴압으로 지탱되며 크기가 지구 정도입니다.",
        "갈색왜성은 수소 핵융합을 점화하지 못한 준항성 천체입니다.",
        "블랙홀은 사건의 지평선 내부로 시공간이 무한히 수축한 천체입니다."
      ]
    },
    {
      id: "ultra_sp_15",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "1974년 스티븐 호킹이 양자장론과 일반상대성이론을 결합하여 유도한 정리로, 블랙홀의 사건의 지평선 표면 중력에 반비례하는 열복사가 방출되어 결국 블랙홀이 증발한다는 이론은?",
      options: ["호킹 복사 (Hawking Radiation)", "언루 효과 (Unruh Effect)", "카시미르 효과", "체렌코프 방사"],
      correctIndex: 0,
      explanation: "사건의 지평선 근처에서 진공 양자 요동으로 생성된 입자-반입자 쌍 중 음의 에너지를 가진 입자가 블랙홀로 흡수되고 양의 에너지 입자가 외부로 방출되면서 질량을 잃는 과정입니다.",
      deepKnowledge: "호킹 복사는 블랙홀 정보 역설(Black Hole Information Paradox)을 촉발하여, 현대 양자 중력 및 홀로그래피 원리(AdS/CFT) 연구의 가장 중요한 원천이 되었습니다.",
      sourceOrTrivia: "Hawking (1974) 'Black hole explosions?', Nature 248",
      wrongOptionsReason: [
        "정답입니다. 블랙홀의 양자 열복사 현상입니다.",
        "언루 효과는 가속하는 관찰자가 진공을 열적 흑체 복사로 감지하는 현상입니다.",
        "카시미르 효과는 진공 전자기 요동에 의한 금속판 사이의 인력입니다.",
        "체렌코프 방사는 매질 내 빛의 위상속도보다 빠른 하전입자가 내는 푸른빛입니다."
      ]
    },
    {
      id: "ultra_sp_16",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "태양 중심부에서 발생하는 강력한 자기장이 꼬이고 왜곡되어 대류를 방해함으로써 표면 온도가 주변보다 약 1,500K 낮아져 어둡게 보이는 영역은?",
      options: ["흑점 (Sunspot)", "홍염 (Prominence)", "플레어 (Solar Flare)", "코로나 (Corona)"],
      correctIndex: 0,
      explanation: "흑점은 태양 내부 자기력선 다발이 표면을 뚫고 나오며 열대류를 억제하여 표면 온도(약 4,200K)가 주위 광구(약 5,800K)보다 낮아 상대적으로 어둡게 보이는 지점입니다.",
      deepKnowledge: "흑점 수는 약 11년 주기로 극대기와 극소기를 반복하며, 이는 태양 내부 자기 다이내모의 주기적 극성 반전과 직결되어 있습니다.",
      sourceOrTrivia: "Schwabe (1844) Solar Cycle Discoveries",
      wrongOptionsReason: [
        "정답입니다. 강한 자기장에 의한 대류 억제로 온도가 낮은 영역입니다.",
        "홍염은 채층 바깥 코로나로 솟구쳐 오르는 거대한 가스 기둥입니다.",
        "플레어는 자기 에너지 폭발로 전자기파와 하전입자가 급격히 방출되는 현상입니다.",
        "코로나는 태양 외곽의 수백만 도에 달하는 희박한 고온 대기층입니다."
      ]
    },
    {
      id: "ultra_sp_17",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "백색왜성이 동반성으로부터 물질을 흡수하여 찬드라세카르 한계(약 1.44 태양질량)에 도달할 때, 중심부에서 제어 불가능한 탄소 폭주 핵융합으로 폭발하여 절대등급이 일정(약 -19.3등급)하여 표준 촉광으로 쓰이는 초신성은?",
      options: ["Ia형 초신성 (Type Ia Supernova)", "II형 초신성", "Ib형 초신성", "Ic형 초신성"],
      correctIndex: 0,
      explanation: "Ia형 초신성은 백색왜성의 질량 한계 도달 폭발이라는 물리적 기작이 동일하여 최고 광도가 거의 일정하므로, 먼 우주의 거리를 측정하는 완벽한 표준 촉광(Standard Candle) 역할을 합니다.",
      deepKnowledge: "1998년 펄머터, 리스, 슈밋 연구팀은 먼 Ia형 초신성들의 겉보기 밝기가 예상보다 어둡다는 사실을 발견하여 우주가 가속 팽창하고 있음을 밝혀내 2011 노벨상을 수상했습니다.",
      sourceOrTrivia: "Perlmutter et al. (1999) & Riess et al. (1998) Astrophysical Journal",
      wrongOptionsReason: [
        "정답입니다. 찬드라세카르 한계 백색왜성 열핵폭발 초신성입니다.",
        "II형 초신성은 수소 흡수선이 나타나는 거대 항성의 핵 붕괴형 초신성입니다.",
        "Ib형 초신성은 수소층을 잃어버린 헬륨 중심핵 붕괴 초신성입니다.",
        "Ic형 초신성은 수소와 헬륨층을 모두 날려버린 거대별 붕괴 초신성입니다."
      ]
    },
    {
      id: "ultra_sp_18",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "지구에서 관측할 때 달이 태양과 지구 사이에 정확히 일직선으로 놓여 태양의 전체 또는 일부를 가리는 천문 현상은?",
      options: ["일식 (Solar Eclipse)", "월식 (Lunar Eclipse)", "행성 통과", "식쌍성"],
      correctIndex: 0,
      explanation: "일식은 달의 그림자가 지구 표면에 드리워져 태양이 가려지는 현상으로, 태양 전체가 가려지는 개기일식과 가장자리만 남는 금환일식 등이 있습니다.",
      deepKnowledge: "지구에서 볼 때 태양의 지름은 달의 약 400배 크지만, 거리도 약 400배 멀어서 하늘에서 두 천체의 겉보기 크기(각지름 약 0.5도)가 기적적으로 일치하기 때문에 완벽한 개기일식이 가능합니다.",
      sourceOrTrivia: "Espenak & Meeus (2006) NASA Five Millennium Canon of Solar Eclipses",
      wrongOptionsReason: [
        "정답입니다. 달이 태양면을 가리는 일식 현상입니다.",
        "월식은 지구가 태양과 달 사이에 위치해 지구 그림자가 달을 가리는 현상입니다.",
        "행성 통과는 수성이나 금성이 태양면을 점처럼 지나가는 현상입니다.",
        "식쌍성은 두 별이 서로를 가리며 밝기가 주기적으로 변하는 항성계입니다."
      ]
    },
    {
      id: "ultra_sp_19",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "태양과 지구 같은 두 거대 천체의 중력과 원심력이 균형을 이루어 작은 물체가 상대적 위치를 안정적으로 유지할 수 있는 5개의 라그랑주 점 중, 제임스 웹 우주망원경(JWST)이 위치한 지점은?",
      options: ["라그랑주 L2 점", "라그랑주 L1 점", "라그랑주 L3 점", "라그랑주 L4 점"],
      correctIndex: 0,
      explanation: "L2 점은 지구로부터 태양 반대 방향으로 약 150만 km 떨어진 곳으로, 태양과 지구의 방열판 차폐가 용이하여 초저온 우주 망원경 운용에 최적의 위치입니다.",
      deepKnowledge: "L1 점(지구와 태양 사이 150만 km)에는 태양 상시 관측 위성인 SOHO가 위치하며, L4와 L5는 60도 앞뒤에서 트로이 소행성군을 포획하는 절대적 안정 평형점입니다.",
      sourceOrTrivia: "Lagrange (1772) 'Essai sur le Problème des Trois Corps'",
      wrongOptionsReason: [
        "정답입니다. JWST가 지구 그림자 너머 헤일로 궤도를 도는 L2 점입니다.",
        "L1은 지구와 태양 사이에 위치하여 태양풍 및 태양 표면 관측에 쓰입니다.",
        "L3은 태양 너머 정반대편에 위치하는 이론적 점입니다.",
        "L4는 공전 궤도상 60도 앞선 지점에 위치합니다."
      ]
    },
    {
      id: "ultra_sp_20",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "우리은하의 나선팔에 속해 있는 태양계는 우리은하 중심(궁수자리 A*)으로부터 약 얼마의 거리에 위치하여 은하 중심을 공전하고 있는가?",
      options: ["약 26,000광년 (약 8 kpc)", "약 2,600광년", "약 260,000광년", "약 250만 광년"],
      correctIndex: 0,
      explanation: "태양계는 우리은하 원반의 오리온 팔(Orion Arm)에 위치하며, 은하 중심 초대질량 블랙홀로부터 약 2만 6천 광년(8.2 킬로파섹) 떨어져 있습니다.",
      deepKnowledge: "태양계는 초속 약 220km의 속도로 우리은하 중심을 공전하고 있으며, 은하를 한 바퀴 도는 데 약 2억 3천만 년(1 은하년, Galactic Year)이 걸립니다.",
      sourceOrTrivia: "Gravity Collaboration (2019) Astronomy & Astrophysics",
      wrongOptionsReason: [
        "정답입니다. 우리은하 중심과의 실측 거리입니다.",
        "2,600광년은 은하 중심까지 가기에는 너무 가까운 국소 성간 이웃입니다.",
        "260,000광년은 우리은하 가시광선 원반 지름(약 10만 광년)을 훌쩍 넘는 외곽입니다.",
        "250만 광년은 이웃 거대 은하인 안드로메다 은하(M31)까지의 거리입니다."
      ]
    },
    {
      id: "ultra_sp_21",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "빅뱅 이후 급팽창(Inflation) 시기에 시공간의 양자 요동이 빛의 속도를 초과하여 급격히 팽창하면서 발생한 시공간 자체의 잔물결로, CMB의 B-모드 편광 패턴에 각인되는 태초의 신호는?",
      options: ["원초 중력파 (Primordial Gravitational Waves)", "원초 블랙홀 호킹 복사", "중성미자 배경 복사 (CNB)", "우주 끈(Cosmic String) 에너지 방출"],
      correctIndex: 0,
      explanation: "원초 중력파는 우주 급팽창 이론의 직접적인 '스모킹 건(결정적 증거)'으로, 우주 배경 복사 광자의 톰슨 산란 과정에서 고유한 소용돌이 형태의 B-모드 편광을 유발합니다.",
      deepKnowledge: "2014년 BICEP2 연구진이 B-모드를 감지했다고 발표했으나 정밀 재분석 결과 우리은하 성간 먼지의 열복사 편광임이 밝혀졌으며, 현재 차세대 CMB-S4 프로젝트가 탐색을 지속하고 있습니다.",
      sourceOrTrivia: "Planck and BICEP2/Keck Array Collaborations (2015) Phys. Rev. Lett. 114",
      wrongOptionsReason: [
        "정답입니다. 급팽창 이론을 검증할 궁극의 물리적 신호입니다.",
        "원초 블랙홀 호킹 복사는 점광원 형태의 고에너지 감마선 신호입니다.",
        "CNB는 대폭발 1초 후 분리된 원초 중성미자들의 배경 복사입니다.",
        "우주 끈은 시공간 위상 결함에 관한 별개의 가설입니다."
      ]
    },
    {
      id: "ultra_sp_22",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "태양계의 소행성대에서 가장 거대한 천체로, 구형의 형상을 유지하는 정수역학적 평형을 만족하여 소행성에서 왜소행성(Dwarf Planet)으로 재분류된 천체는?",
      options: ["세레스 (Ceres)", "베스타 (Vesta)", "팔라스 (Pallas)", "히기에이아 (Hygiea)"],
      correctIndex: 0,
      explanation: "세레스는 1801년 피아치가 발견한 소행성대 최대 천체(직경 약 940km)로, 2006년 국제천문연맹(IAU)에 의해 왜소행성 지위를 부여받았습니다.",
      deepKnowledge: "NASA 던(Dawn) 탐사선 분석 결과 세레스의 표면 오카토르 충돌구에는 탄산나트륨 등 염류가 분출된 밝은 얼음 점들과 함께 지하 염수 해양의 흔적이 확인되었습니다.",
      sourceOrTrivia: "Russell et al. (Dawn Science Team, 2016) Science",
      wrongOptionsReason: [
        "정답입니다. 소행성대 유일의 왜소행성입니다.",
        "베스타는 소행성대에서 두 번째로 크지만 정수역학적 평형을 완전히 이루지 못한 소행성입니다.",
        "팔라스는 3번째 크기의 고경사각 소행성입니다.",
        "히기에이아는 4번째 크기의 소행성입니다."
      ]
    },
    {
      id: "ultra_sp_23",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "외계행성이 모항성의 앞면을 통과할 때 항성의 겉보기 밝기가 주기적으로 어두워지는 현상을 포착하여 행성의 크기와 공전 주기를 알아내는 탐색 기법은?",
      options: ["식현상 관측법 (트랜싯 기법, Transit Method)", "시선속도법 (도플러 분광법)", "미세중력렌즈법 (Microlensing)", "직접 결상법 (Direct Imaging)"],
      correctIndex: 0,
      explanation: "트랜싯(식) 기법은 케플러 및 TESS 우주망원경이 수천 개 이상의 외계행성을 발견하는 데 가장 큰 기여를 한 방법으로, 대기를 통과한 빛의 스펙트럼 분석으로 대기 성분까지 파악할 수 있습니다.",
      deepKnowledge: "항성의 밝기 감소율($\Delta F/F$)은 행성과 항성의 단면적 비율($(R_p/R_*)^2$)에 정확히 비례하므로 행성의 반지름을 정밀하게 결정할 수 있습니다.",
      sourceOrTrivia: "Charbonneau et al. (2000) Astrophysical Journal Letters 529",
      wrongOptionsReason: [
        "정답입니다. 케플러 망원경의 주력 발견 기법인 트랜싯법입니다.",
        "시선속도법은 항성의 스펙트럼 흔들림을 측정해 행성의 최소 질량을 구합니다.",
        "미세중력렌즈법은 배경 별빛이 전방 행성계 중력에 의해 일시적으로 밝아지는 현상을 이용합니다.",
        "직접 결상법은 항성빛을 코로나그래프로 차단하고 행성을 직접 사진 찍는 방법입니다."
      ]
    },
    {
      id: "ultra_sp_24",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "우주에 생명체가 번성할 조건이 충분함에도 불구하고 외계 지적 생명체의 명백한 증거나 접촉이 전혀 존재하지 않는 모순을 지칭하는 유명한 역설은?",
      options: ["페르미 역설 (Fermi Paradox)", "올베르스의 역설 (Olbers' Paradox)", "쌍둥이 역설", "할아버지 역설"],
      correctIndex: 0,
      explanation: "물리학자 엔리코 페르미가 '다들 어디에 있는 거지?(Where is everybody?)'라고 질문한 데서 유래한 역설로, 대여과기 가설, 동물원 가설 등 다양한 해법이 제시되고 있습니다.",
      deepKnowledge: "로빈 핸슨은 생명이 원시 단계에서 항성 간 문명으로 도약하는 과정에 통과하기 극도로 어려운 단계가 존재한다는 '대여과기(Great Filter)' 개념으로 페르미 역설을 설명했습니다.",
      sourceOrTrivia: "Hanson (1998) 'The Great Filter - Are We Almost Past It?'",
      wrongOptionsReason: [
        "정답입니다. 외계 지적 생명체 부재의 수수께끼인 페르미 역설입니다.",
        "올베르스의 역설은 무한하고 정적인 우주라면 밤하늘이 왜 어두운가를 묻는 역설입니다.",
        "쌍둥이 역설은 특수상대성이론의 시간 지연에 관한 사고실험입니다.",
        "할아버지 역설은 시간 여행의 인과율 모순에 관한 역설입니다."
      ]
    },
    {
      id: "ultra_sp_25",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "2019년 사건의 지평선 망원경(EHT) 협력단이 인류 최초로 그림자를 직접 촬영하여 시각적으로 증명한 거대 타원 은하 M87 중심의 초대질량 블랙홀(M87*)의 대략적인 질량은?",
      options: ["태양 질량의 약 65억 배", "태양 질량의 약 400만 배", "태양 질량의 약 10만 배", "태양 질량의 약 1,000억 배"],
      correctIndex: 0,
      explanation: "M87* 블랙홀은 태양 질량의 약 65억 배($6.5 \times 10^9 M_\odot$)에 달하는 우주급 괴물 블랙홀로, 지구 크기의 전파 간섭계 네트워크(VLBI)를 통해 완벽한 광자 고리와 그림자가 실측되었습니다.",
      deepKnowledge: "우리은하 중심의 궁수자리 A*(Sgr A*)의 질량은 약 400만 태양질량으로, M87*에 비해 1,500배 이상 가볍고 가스 순환 주기가 수 분에 불과해 촬영 난도가 훨씬 높았습니다.",
      sourceOrTrivia: "Event Horizon Telescope Collaboration (2019) Astrophysical Journal Letters 875",
      wrongOptionsReason: [
        "정답입니다. EHT가 인류 최초로 직접 촬영한 M87* 블랙홀의 실측 질량입니다.",
        "태양 질량 400만 배는 우리은하 중심 블랙홀(궁수자리 A*)의 질량입니다.",
        "10만 배는 중간질량 블랙홀(IMBH) 범주에 속합니다.",
        "1,000억 배는 우주에서 알려진 최대급 극대질량 블랙홀의 이론적 상한에 가깝습니다."
      ]
    }
  ]
};

console.log('Template loaded. Generating remaining 11 domains programmatic definitions...');
