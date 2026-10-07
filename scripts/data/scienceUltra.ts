export interface RawQuestion {
  id: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'profound';
  difficultyLabel: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  deepKnowledge: string;
  sourceOrTrivia: string;
  wrongOptionsReason: string[];
}

export const SCIENCE_ULTRA: Record<string, RawQuestion[]> = {
  space: [
    {
      id: "ultra_sp_1",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "태양계 행성 중 가장 큰 부피와 질량을 자랑하며, 강력한 자기장과 거대한 대적점을 가진 가스 행성은?",
      options: ["목성", "토성", "천왕성", "해왕성"],
      correctIndex: 0,
      explanation: "목성은 태양계 모든 다른 행성들의 질량을 합친 것보다 2.5배 이상 무거운 태양계 최대의 행성입니다.",
      deepKnowledge: "목성의 강력한 중력은 소행성들의 궤도를 안정화하거나 외곽으로 튕겨내 지구를 소행성 충돌로부터 보호하는 방패 역할을 해왔습니다.",
      sourceOrTrivia: "NASA Planetary Fact Sheet - Jupiter",
      wrongOptionsReason: [
        "정답입니다. 태양계 최대 가스 거대 행성입니다.",
        "토성은 두 번째로 큰 행성이며 고리가 특징입니다.",
        "천왕성은 세 번째 크기의 얼음 거대 행성입니다.",
        "해왕성은 네 번째 크기의 푸른 얼음 거대 행성입니다."
      ]
    },
    {
      id: "ultra_sp_2",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "태양의 중심부에서 수소 원자핵 4개가 융합하여 헬륨 원자핵 1개로 변환되면서 질량 결손($E=mc^2$)에 의해 에너지를 방출하는 핵융합 반응은?",
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
      options: ["타원 궤도의 법칙 (제1법칙)", "조화의 법칙 (제3법칙)", "면적속도 일정의 법칙 (제2법칙)", "만유인력의 역제곱 법칙"],
      correctIndex: 1,
      explanation: "케플러 제3법칙(조화의 법칙)은 행성의 태양으로부터의 평균 거리와 공전 주기 사이의 엄밀한 수학적 조화 관계($P^2 \propto a^3$)를 규명했습니다.",
      deepKnowledge: "이 법칙은 뉴턴이 만유인력 법칙을 수학적으로 유도하는 데 결정적인 토대가 되었으며, $P^2 = \\frac{4\\pi^2}{G(M+m)} a^3$으로 일반화되었습니다.",
      sourceOrTrivia: "Kepler (1619) Harmonices Mundi",
      wrongOptionsReason: [
        "제1법칙은 행성 궤도가 태양을 한 초점으로 하는 타원임을 설명합니다.",
        "정답입니다. 주기와 궤도 반경의 거듭제곱 관계를 다룹니다.",
        "제2법칙은 동일 시간 동안 휩쓸고 지나가는 부채꼴 면적이 같음을 설명합니다.",
        "역제곱 법칙은 뉴턴이 유도한 만유인력의 거리 반비례 특성입니다."
      ]
    },
    {
      id: "ultra_sp_4",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "1995년 마요르와 켈로즈 교수가 시선속도법(도플러 분광법)을 통해 최초로 발견한 태양 유사 항성 주위를 도는 외계행성은?",
      options: ["프록시마 b", "트라피스트-1e", "페가수스자리 51 b (51 Pegasi b)", "케플러-22b"],
      correctIndex: 2,
      explanation: "페가수스자리 51 b는 목성 절반 정도 질량의 가스 행성이 모항성을 불과 4.2일 만에 공전하는 '뜨거운 목성(Hot Jupiter)'으로, 2019 노벨물리학상을 수상했습니다.",
      deepKnowledge: "이 발견은 기존 성운설 모델을 대대적으로 수정하여 행성 이동(Planetary Migration) 이론의 시발점이 되었습니다.",
      sourceOrTrivia: "Mayor & Queloz (1995) Nature 378, 355-359",
      wrongOptionsReason: [
        "프록시마 b는 2016년에 발견된 가장 가까운 적색왜성 외계행성입니다.",
        "트라피스트-1e는 지구 크기 지구형 행성입니다.",
        "정답입니다. 최초로 확인된 주계열성 외계행성입니다.",
        "케플러-22b는 2011년 케플러 망원경이 발견한 거주가능구역 행성입니다."
      ]
    },
    {
      id: "ultra_sp_5",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "회전하는 블랙홀(커 블랙홀)의 사건의 지평선 바깥에 존재하며, 시공간이 빛의 속도 이상으로 끌려 돌아가 어떤 물체도 정지해 있을 수 없는 영역은?",
      options: ["광자구 (Photon Sphere)", "슈바르츠실트 구면", "강착원반 (Accretion Disk)", "작용권 (Ergosphere)"],
      correctIndex: 3,
      explanation: "작용권(Ergosphere)은 회전하는 천체가 주변 시공간을 함께 끌고 도는 '틀 끌림(Frame-Dragging)' 효과가 극대화되어 시공간 자체가 회전하는 영역입니다.",
      deepKnowledge: "로저 펜로즈는 작용권 안으로 들어간 입자가 붕괴할 때 음의 에너지를 블랙홀에 주고 남은 파편이 에너지를 흡수해 튕겨 나오는 '펜로즈 과정'을 입증했습니다.",
      sourceOrTrivia: "Penrose (1969) Nuovo Cimento",
      wrongOptionsReason: [
        "광자구는 빛이 원 궤도를 돌 수 있는 불안정한 궤도면입니다.",
        "슈바르츠실트 반지름은 정적 블랙홀의 사건의 지평선 크기입니다.",
        "강착원반은 낙하하는 가스와 먼지가 마찰열로 빛나는 원반입니다.",
        "정답입니다. 커 블랙홀의 에너지 추출이 가능한 작용권입니다."
      ]
    },
    {
      id: "ultra_sp_6",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "2017년 8월, LIGO/Virgo 중력파 관측소와 전 세계 망원경이 역사상 최초로 중력파와 감마선·광학 신호를 동시 검측(GW170817)한 우주 충돌 사건은?",
      options: ["두 중성자별의 병합 (킬로노바, Kilonova)", "블랙홀과 항성의 충돌", "쌍성 블랙홀의 병합", "초신성 Ia형 폭발"],
      correctIndex: 0,
      explanation: "GW170817은 두 중성자별이 충돌 병합하며 방출한 중력파와 r-과정 중성자 포획으로 금, 백금 등 무거운 원소가 대량 합성된 킬로노바 현상이었습니다.",
      deepKnowledge: "이 관측은 인류가 중력파와 전자기파를 동시에 활용하는 '다중 신호 천문학(Multi-Messenger Astronomy)'의 시대를 열었습니다.",
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
      options: ["작스-볼프 효과 (Sachs-Wolfe Effect)", "바리온 음향 진동 (Baryon Acoustic Oscillations, BAO)", "수냐에프-젤도비치 효과 (SZ Effect)", "라이만-알파 숲 (Lyman-alpha Forest)"],
      correctIndex: 1,
      explanation: "BAO는 대폭발 후 38만 년까지 플라스마 내부를 전파하던 소리의 압력파가 우주가 투명해지며 멈춘 척도로, 우주의 팽창 역사와 암흑에너지를 측정하는 가장 신뢰받는 우주론적 '표준 자'입니다.",
      deepKnowledge: "슬론 디지털 스카이 서베이(SDSS)와 DESI 프로젝트는 수백만 개 은하의 3차원 위치에서 150Mpc 거리의 은하 집중 피크를 정밀 측정하여 표준 우주 모델을 뒷받침했습니다.",
      sourceOrTrivia: "Eisenstein et al. (SDSS Collaboration, 2005) Astrophysical Journal 633",
      wrongOptionsReason: [
        "작스-볼프 효과는 중력 적색편이로 인한 CMB 온도 요동입니다.",
        "정답입니다. 초기 우주 음파 동결로 형성된 표준 잣대입니다.",
        "SZ 효과는 은하단 고온 전자에 의한 광자 역 콤프턴 산란입니다.",
        "라이만 알파 숲은 퀘이사 빛이 통과하는 중성수소 구름의 흡수선 무리입니다."
      ]
    },
    {
      id: "ultra_sp_8",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "JWST가 발견한 은하 JADES-GS-z14-0 처럼, 빅뱅 후 불과 3억 년 시점에서 예상치를 뛰어넘는 질량과 밝기를 지닌 초기 은하들의 발견이 던진 우주론적 화두는?",
      options: ["초기 우주 성단 형성 속도와 초대질량 블랙홀의 초고속 성장 메커니즘", "일반상대성이론의 완전한 폐기와 수정 뉴턴 역학 채택", "우주 배경 복사가 빅뱅의 산물이 아니라는 증거", "암흑물질이 우주에 존재하지 않는다는 실증"],
      correctIndex: 0,
      explanation: "JWST 관측은 우주 초기에 별 형성과 블랙홀 성장이 기존 표준 모델의 이론적 한계보다 훨씬 효율적이고 빨랐음을 보여주어, '직접 붕괴 블랙홀(DCBH)' 등 새로운 가설을 촉발시켰습니다.",
      deepKnowledge: "에딩턴 한계(Eddington Limit)를 일시적으로 초과하는 초에딩턴 강착이나 최초의 항성족 III(Population III) 별들의 거대 질량이 핵심 연구 주제로 떠올랐습니다.",
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
      question: "태양계 외곽 카이퍼 벨트 너머 약 2,000~100,000 AU 거리에 거대한 구형 껍질 형태로 펼쳐져 있으며, 장주기 혜성들의 고향으로 알려진 천체 집합체는?",
      options: ["소행성대 (Asteroid Belt)", "힐스 구름 (Hills Cloud)", "오르트 구름 (Oort Cloud)", "카이퍼 절벽 (Kuiper Cliff)"],
      correctIndex: 2,
      explanation: "오르트 구름은 수조 개에 달하는 얼음과 먼지 미행성체들이 태양 중력에 묶여 구형으로 우주 공간을 둘러싸고 있는 이론적 영역입니다.",
      deepKnowledge: "인근 항성의 통과나 우리은하 원반의 은하 조석력에 의해 오르트 구름 천체의 궤도가 교란되면 태양계 내부로 낙하하여 장주기 혜성이 됩니다.",
      sourceOrTrivia: "Oort (1950) Bulletin of the Astronomical Institutes of the Netherlands",
      wrongOptionsReason: [
        "소행성대는 화성과 목성 사이의 암석형 천체 밀집대입니다.",
        "힐스 구름은 오르트 구름의 안쪽 원반형 영역을 가리키는 하위 개념입니다.",
        "정답입니다. 장주기 혜성의 거대한 구형 기원지입니다.",
        "카이퍼 절벽은 50AU 부근에서 고전적 카이퍼 벨트 천체가 급감하는 경계입니다."
      ]
    },
    {
      id: "ultra_sp_10",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "태양계 행성 중 평균 밀도가 물(1.0 g/cm³)보다 낮아(약 0.69 g/cm³), 거대한 바다가 있다면 물 위에 뜰 수 있는 행성은?",
      options: ["목성", "토성", "천왕성", "금성"],
      correctIndex: 1,
      explanation: "토성은 수소와 헬륨이 주성분인 거대 가스 행성으로, 거대한 부피에 비해 질량이 상대적으로 작아 평균 밀도가 물보다 낮습니다.",
      deepKnowledge: "토성의 아름다운 고리는 99% 이상이 순수한 물의 얼음 입자들로 이루어져 있으며, 두께는 수십 미터에 불과할 정도로 극도로 얇습니다.",
      sourceOrTrivia: "NASA Saturn Fact Sheet",
      wrongOptionsReason: [
        "목성의 평균 밀도는 약 1.33 g/cm³로 물보다 높습니다.",
        "정답입니다. 태양계에서 유일하게 밀도가 물보다 낮은 행성입니다.",
        "천왕성의 평균 밀도는 약 1.27 g/cm³입니다.",
        "금성은 암석형 행성으로 밀도가 약 5.24 g/cm³에 달합니다."
      ]
    },
    {
      id: "ultra_sp_11",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "태양 중심핵에서 생성된 광자가 복사층의 고밀도 입자들과 끊임없이 충돌(무작위 보행)하여 태양 표면까지 도달하는 데 걸리는 평균 시간은?",
      options: ["약 8분 20초", "약 10만~100만 년", "약 1년", "약 100년"],
      correctIndex: 1,
      explanation: "광자는 극도로 밀도가 높은 복사층을 통과하며 수없이 톰슨 산란을 겪기 때문에, 중심핵에서 표면(광구)까지 도달하는 데 10만 년 이상의 시간이 소요됩니다.",
      deepKnowledge: "반면 핵융합 반응 시 생성되는 중성미자는 물질과 거의 상호작용하지 않고 광속으로 약 2.3초 만에 태양을 빠져나옵니다.",
      sourceOrTrivia: "Mitalas & Sills (1992) 'On the photon diffusion time scale for the sun'",
      wrongOptionsReason: [
        "8분 20초는 광구가 방출한 빛이 진공을 지나 지구에 도달하는 시간입니다.",
        "정답입니다. 무작위 보행으로 인해 막대한 시간이 걸립니다.",
        "1년은 복사층의 평균 자유 행로를 감안할 때 턱없이 부족한 시간입니다.",
        "100년 역시 실제 산란 횟수(약 10^21회)에 비추어 지나치게 짧습니다."
      ]
    },
    {
      id: "ultra_sp_12",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "태양풍과 성간 물질이 충돌하여 태양풍의 속도가 초음속에서 아음속으로 급격히 감속되는 경계면의 명칭은?",
      options: ["말단 충격면 (Termination Shock)", "태양권계면 (Heliopause)", "궁두 충격파 (Bow Shock)", "자기권계면 (Magnetopause)"],
      correctIndex: 0,
      explanation: "말단 충격면은 태양풍 입자들이 외부 성간 매질의 저항을 받아 초음속에서 아음속으로 감속되며 밀도와 온도가 급상승하는 1차 경계면입니다.",
      deepKnowledge: "그 너머의 헬리오시스를 지나 태양풍의 압력과 성간 물질의 압력이 완전히 평형을 이루는 최종 경계가 태양권계면(Heliopause)입니다.",
      sourceOrTrivia: "Stone et al. (Voyager Science Team, 2005) Science 309",
      wrongOptionsReason: [
        "정답입니다. 초음속 태양풍이 아음속으로 감속되는 충격파 면입니다.",
        "태양권계면은 성간 공간이 시작되는 최종 경계입니다.",
        "궁두 충격파는 태양계가 성간 매질 속을 전진할 때 전방에 형성되는 충격파입니다.",
        "자기권계면은 행성 자기장과 태양풍 사이의 경계입니다."
      ]
    },
    {
      id: "ultra_sp_13",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "지구의 조석력으로 인해 달의 자전 주기와 공전 주기가 약 27.3일로 일치하여 항상 같은 면만 보이게 되는 천체역학적 현상은?",
      options: ["세차 운동", "조석 고정 (Tidal Locking)", "동주기 자전 왜곡", "궤도 공명"],
      correctIndex: 1,
      explanation: "조석 고정은 모천체의 중력에 의해 위성에 발생한 조석 팽대부가 자전 속도를 늦추어 자전 주기와 공전 주기가 1:1로 일치하게 된 결과입니다.",
      deepKnowledge: "명왕성과 위성 카론은 서로를 향해 완전히 조석 고정되어 있어 두 천체 모두 서로에게 영원히 같은 면만을 마주보고 공전합니다.",
      sourceOrTrivia: "Murray & Dermott (1999) Solar System Dynamics",
      wrongOptionsReason: [
        "세차 운동은 자전축의 방향이 원을 그리며 회전하는 현상입니다.",
        "정답입니다. 조석 마찰에 의해 자전과 공전이 동기화되는 현상입니다.",
        "동주기 자전 왜곡은 공학적 표준 용어가 아닙니다.",
        "궤도 공명은 두 천체의 공전 주기 비율이 정수비를 이루는 현상입니다."
      ]
    },
    {
      id: "ultra_sp_14",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "질량이 큰 항성이 핵융합을 끝마치고 중력 붕괴를 일으킬 때, 전자가 양성자와 융합하여 반경 약 10~15km에 압축된 초고밀도 천체는?",
      options: ["백색왜성 (White Dwarf)", "중성자별 (Neutron Star)", "갈색왜성 (Brown Dwarf)", "블랙홀 (Black Hole)"],
      correctIndex: 1,
      explanation: "중성자별은 중성자의 축퇴압(Neutron Degeneracy Pressure)으로 중력 붕괴를 버텨내는 천체로, 찻숟가락 한 술 분량의 질량이 수억 톤에 달합니다.",
      deepKnowledge: "중성자별이 톨만-오펜하이머-볼코프(TOV) 한계(약 2.2~3 태양질량)를 초과하면 블랙홀로 붕괴합니다.",
      sourceOrTrivia: "Baade & Zwicky (1934) 'Remarks on Super-Novae and Cosmic Rays'",
      wrongOptionsReason: [
        "백색왜성은 전자 축퇴압으로 지탱되며 크기가 지구 정도입니다.",
        "정답입니다. 중성자 축퇴압으로 지탱되는 고밀도 천체입니다.",
        "갈색왜성은 수소 핵융합을 점화하지 못한 준항성 천체입니다.",
        "블랙홀은 사건의 지평선 내부로 시공간이 무한히 수축한 천체입니다."
      ]
    },
    {
      id: "ultra_sp_15",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "1974년 스티븐 호킹이 양자장론과 일반상대론을 결합하여 유도한 정리로, 블랙홀의 사건의 지평선에서 양자 효과로 열복사가 방출되어 증발한다는 이론은?",
      options: ["언루 효과 (Unruh Effect)", "카시미르 효과", "호킹 복사 (Hawking Radiation)", "체렌코프 방사"],
      correctIndex: 2,
      explanation: "사건의 지평선 근처에서 진공 양자 요동으로 생성된 입자-반입자 쌍 중 음의 에너지 입자가 흡수되고 양의 에너지 입자가 방출되면서 질량을 잃는 과정입니다.",
      deepKnowledge: "호킹 복사는 블랙홀 정보 역설(Black Hole Information Paradox)을 촉발하여, 현대 양자 중력 및 홀로그래피 원리 연구의 시발점이 되었습니다.",
      sourceOrTrivia: "Hawking (1974) 'Black hole explosions?', Nature 248",
      wrongOptionsReason: [
        "언루 효과는 가속 관찰자가 진공을 열적 복사로 감지하는 현상입니다.",
        "카시미르 효과는 진공 전자기 요동에 의한 금속판 인력입니다.",
        "정답입니다. 블랙홀의 양자 열복사 현상입니다.",
        "체렌코프 방사는 매질 내 빛의 위상속도보다 빠른 하전입자가 내는 푸른빛입니다."
      ]
    },
    {
      id: "ultra_sp_16",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "태양 중심부의 강력한 자기력선 다발이 표면으로 분출하여 대류를 억제함으로써 표면 온도가 주위보다 낮아 어둡게 보이는 영역은?",
      options: ["흑점 (Sunspot)", "홍염 (Prominence)", "플레어 (Solar Flare)", "코로나 (Corona)"],
      correctIndex: 0,
      explanation: "흑점은 태양 내부 자기력선 다발이 대류를 억제하여 표면 온도(약 4,200K)가 주위 광구(약 5,800K)보다 낮아 상대적으로 어둡게 보이는 지점입니다.",
      deepKnowledge: "흑점 수는 약 11년 주기로 극대기와 극소기를 반복하며, 이는 태양 내부 자기 다이내모의 주기적 극성 반전과 직결되어 있습니다.",
      sourceOrTrivia: "Schwabe (1844) Solar Cycle Discoveries",
      wrongOptionsReason: [
        "정답입니다. 강한 자기장에 의한 대류 억제로 온도가 낮은 영역입니다.",
        "홍염은 채층 바깥 코로나로 솟구쳐 오르는 거대한 가스 기둥입니다.",
        "플레어는 자기 에너지 폭발로 전자기파와 하전입자가 방출되는 현상입니다.",
        "코로나는 태양 외곽의 수백만 도에 달하는 희박한 고온 대기층입니다."
      ]
    },
    {
      id: "ultra_sp_17",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "찬드라세카르 한계(약 1.44 태양질량)에 도달한 탄소-산소 백색왜성이 폭주 열핵반응을 일으켜 폭발하여 최대 광도가 일정해 우주 표준 촉광으로 쓰이는 초신성은?",
      options: ["II형 초신성", "Ia형 초신성 (Type Ia Supernova)", "Ib형 초신성", "Ic형 초신성"],
      correctIndex: 1,
      explanation: "Ia형 초신성은 백색왜성의 질량 한계 도달 폭발이라는 물리적 기작이 동일하여 최고 광도가 거의 일정하므로 우주 거리를 측정하는 표준 촉광이 됩니다.",
      deepKnowledge: "1998년 먼 Ia형 초신성 관측을 통해 우주가 가속 팽창하고 있음이 증명되어 2011년 노벨물리학상이 수여되었습니다.",
      sourceOrTrivia: "Perlmutter et al. (1999) & Riess et al. (1998) Astrophysical Journal",
      wrongOptionsReason: [
        "II형 초신성은 수소 흡수선이 나타나는 거대 항성의 핵 붕괴형 초신성입니다.",
        "정답입니다. 찬드라세카르 한계 백색왜성 열핵폭발 초신성입니다.",
        "Ib형 초신성은 수소층을 잃어버린 헬륨 중심핵 붕괴 초신성입니다.",
        "Ic형 초신성은 수소와 헬륨층을 모두 날려버린 거대별 붕괴 초신성입니다."
      ]
    },
    {
      id: "ultra_sp_18",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "달이 태양과 지구 사이에 일직선으로 놓여 태양의 전체 또는 일부를 가리는 천문 현상은?",
      options: ["월식 (Lunar Eclipse)", "행성 통과", "식쌍성", "일식 (Solar Eclipse)"],
      correctIndex: 3,
      explanation: "일식은 달의 그림자가 지구 표면에 드리워져 태양이 가려지는 현상으로, 개기일식과 금환일식이 있습니다.",
      deepKnowledge: "태양은 달보다 약 400배 크지만 거리도 약 400배 멀어 지구에서 보는 두 천체의 겉보기 크기(약 0.5도)가 일치하여 개기일식이 일어납니다.",
      sourceOrTrivia: "Espenak & Meeus (2006) NASA Five Millennium Canon of Solar Eclipses",
      wrongOptionsReason: [
        "월식은 지구 그림자가 달을 가리는 현상입니다.",
        "행성 통과는 수성이나 금성이 태양면을 점처럼 지나가는 현상입니다.",
        "식쌍성은 두 별이 서로를 가리며 밝기가 변하는 항성계입니다.",
        "정답입니다. 달이 태양면을 가리는 일식 현상입니다."
      ]
    },
    {
      id: "ultra_sp_19",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "태양과 지구의 중력과 원심력이 균형을 이루는 5개의 라그랑주 점 중, 제임스 웹 우주망원경(JWST)이 위치한 곳은?",
      options: ["라그랑주 L1 점", "라그랑주 L2 점", "라그랑주 L3 점", "라그랑주 L4 점"],
      correctIndex: 1,
      explanation: "L2 점은 지구로부터 태양 반대 방향으로 약 150만 km 떨어진 곳으로, 차광판으로 태양빛과 지구 열을 한꺼번에 가릴 수 있어 심우주 적외선 관측에 최적입니다.",
      deepKnowledge: "L1 점(지구와 태양 사이 150만 km)에는 태양 상시 관측 위성인 SOHO가 위치합니다.",
      sourceOrTrivia: "Lagrange (1772) 'Essai sur le Problème des Trois Corps'",
      wrongOptionsReason: [
        "L1은 지구와 태양 사이에 위치하여 태양 관측에 쓰입니다.",
        "정답입니다. JWST가 지구 그림자 너머 헤일로 궤도를 도는 L2 점입니다.",
        "L3은 태양 너머 정반대편에 위치하는 이론적 점입니다.",
        "L4는 공전 궤도상 60도 앞선 지점에 위치합니다."
      ]
    },
    {
      id: "ultra_sp_20",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "태양계는 우리은하 중심 초대질량 블랙홀(궁수자리 A*)로부터 약 얼마의 거리에 위치하고 있는가?",
      options: ["약 26,000광년 (약 8 kpc)", "약 2,600광년", "약 260,000광년", "약 250만 광년"],
      correctIndex: 0,
      explanation: "태양계는 우리은하 원반의 오리온 팔에 위치하며, 은하 중심으로부터 약 2만 6천 광년(8.2 킬로파섹) 떨어져 있습니다.",
      deepKnowledge: "태양계는 초속 약 220km의 속도로 은하 중심을 공전하며, 은하를 한 바퀴 도는 데 약 2억 3천만 년이 걸립니다.",
      sourceOrTrivia: "Gravity Collaboration (2019) Astronomy & Astrophysics",
      wrongOptionsReason: [
        "정답입니다. 우리은하 중심과의 실측 거리입니다.",
        "2,600광년은 은하 중심까지 가기에는 너무 가깝습니다.",
        "260,000광년은 우리은하 가시광선 원반을 훌쩍 넘는 외곽입니다.",
        "250만 광년은 안드로메다 은하(M31)까지의 거리입니다."
      ]
    },
    {
      id: "ultra_sp_21",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "빅뱅 직후 급팽창 시기의 양자 요동이 시공간 자체를 뒤흔들며 발생하여 CMB의 B-모드 편광 패턴에 흔적을 남기는 태초의 파동은?",
      options: ["중성미자 배경 복사 (CNB)", "원초 중력파 (Primordial Gravitational Waves)", "원초 블랙홀 호킹 복사", "우주 끈(Cosmic String) 에너지 방출"],
      correctIndex: 1,
      explanation: "원초 중력파는 급팽창 이론을 직접 입증할 결정적 증거로, 우주 배경 복사 광자의 산란 과정에서 B-모드 편광을 형성합니다.",
      deepKnowledge: "현재 차세대 지상 및 우주 전파 망원경들이 B-모드 편광의 미세 신호를 분리하기 위한 관측을 진행하고 있습니다.",
      sourceOrTrivia: "Planck and BICEP2/Keck Array Collaborations (2015) Phys. Rev. Lett. 114",
      wrongOptionsReason: [
        "CNB는 대폭발 1초 후 분리된 원초 중성미자들의 배경 복사입니다.",
        "정답입니다. 급팽창 이론을 검증할 궁극의 물리적 신호입니다.",
        "원초 블랙홀 호킹 복사는 점광원 형태의 고에너지 감마선 신호입니다.",
        "우주 끈은 시공간 위상 결함에 관한 별개의 가설입니다."
      ]
    },
    {
      id: "ultra_sp_22",
      topic: "우주 & 천문학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "소행성대에서 가장 거대한 천체로, 구형의 형상을 유지하여 소행성에서 왜소행성으로 재분류된 천체는?",
      options: ["베스타 (Vesta)", "팔라스 (Pallas)", "히기에이아 (Hygiea)", "세레스 (Ceres)"],
      correctIndex: 3,
      explanation: "세레스는 소행성대 최대 천체(직경 약 940km)로, 2006년 국제천문연맹에 의해 왜소행성 지위를 부여받았습니다.",
      deepKnowledge: "NASA 던 탐사선 관측 결과 표면 오카토르 충돌구에서 염류가 분출된 밝은 점들과 지하 염수 해양의 흔적이 발견되었습니다.",
      sourceOrTrivia: "Russell et al. (Dawn Science Team, 2016) Science",
      wrongOptionsReason: [
        "베스타는 소행성대에서 두 번째로 큰 소행성입니다.",
        "팔라스는 3번째 크기의 고경사각 소행성입니다.",
        "히기에이아는 4번째 크기의 소행성입니다.",
        "정답입니다. 소행성대 유일의 왜소행성입니다."
      ]
    },
    {
      id: "ultra_sp_23",
      topic: "우주 & 천문학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "외계행성이 모항성의 앞면을 통과할 때 항성의 겉보기 밝기가 주기적으로 어두워지는 현상을 포착하는 외계행성 탐색 기법은?",
      options: ["시선속도법 (도플러 분광법)", "식현상 관측법 (트랜싯 기법, Transit Method)", "미세중력렌즈법 (Microlensing)", "직접 결상법 (Direct Imaging)"],
      correctIndex: 1,
      explanation: "트랜싯(식) 기법은 케플러 및 TESS 우주망원경이 수천 개 이상의 외계행성을 발견하는 데 가장 큰 기여를 한 방법입니다.",
      deepKnowledge: "항성의 밝기 감소율은 행성과 항성의 단면적 비율에 정확히 비례하므로 행성의 반지름을 정밀하게 결정할 수 있습니다.",
      sourceOrTrivia: "Charbonneau et al. (2000) Astrophysical Journal Letters 529",
      wrongOptionsReason: [
        "시선속도법은 항성의 스펙트럼 흔들림을 측정해 행성의 최소 질량을 구합니다.",
        "정답입니다. 케플러 망원경의 주력 발견 기법인 트랜싯법입니다.",
        "미세중력렌즈법은 배경 별빛이 일시적으로 증폭되는 현상을 이용합니다.",
        "직접 결상법은 항성빛을 차단하고 행성을 직접 사진 찍는 방법입니다."
      ]
    },
    {
      id: "ultra_sp_24",
      topic: "우주 & 천문학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "우주에 생명체가 번성할 조건이 충분함에도 불구하고 외계 지적 생명체의 명백한 증거나 접촉이 전혀 존재하지 않는 모순을 지칭하는 역설은?",
      options: ["올베르스의 역설 (Olbers' Paradox)", "쌍둥이 역설", "페르미 역설 (Fermi Paradox)", "할아버지 역설"],
      correctIndex: 2,
      explanation: "엔리코 페르미가 '다들 어디에 있는 거지?'라고 질문한 데서 유래한 역설로, 대여과기 가설 등이 제시되고 있습니다.",
      deepKnowledge: "로빈 핸슨은 생명이 원시 단계에서 항성 간 문명으로 도약하는 과정에 극복하기 어려운 '대여과기(Great Filter)'가 존재한다고 설명했습니다.",
      sourceOrTrivia: "Hanson (1998) 'The Great Filter - Are We Almost Past It?'",
      wrongOptionsReason: [
        "올베르스의 역설은 밤하늘이 왜 어두운가를 묻는 역설입니다.",
        "쌍둥이 역설은 특수상대성이론의 시간 지연 사고실험입니다.",
        "정답입니다. 외계 지적 생명체 부재의 수수께끼인 페르미 역설입니다.",
        "할아버지 역설은 시간 여행의 인과율 모순에 관한 역설입니다."
      ]
    },
    {
      id: "ultra_sp_25",
      topic: "우주 & 천문학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "2019년 EHT 협력단이 인류 최초로 그림자를 직접 촬영하여 시각적으로 증명한 M87 은하 중심 초대질량 블랙홀의 대략적인 질량은?",
      options: ["태양 질량의 약 400만 배", "태양 질량의 약 10만 배", "태양 질량의 약 1,000억 배", "태양 질량의 약 65억 배"],
      correctIndex: 3,
      explanation: "M87* 블랙홀은 태양 질량의 약 65억 배에 달하는 거대 블랙홀로, 전파 간섭계 네트워크를 통해 완벽한 광자 고리와 그림자가 실측되었습니다.",
      deepKnowledge: "우리은하 중심의 궁수자리 A*의 질량은 약 400만 태양질량으로, M87*에 비해 약 1,500배 이상 가볍습니다.",
      sourceOrTrivia: "Event Horizon Telescope Collaboration (2019) Astrophysical Journal Letters 875",
      wrongOptionsReason: [
        "태양 질량 400만 배는 우리은하 중심 블랙홀(궁수자리 A*)의 질량입니다.",
        "10만 배는 중간질량 블랙홀(IMBH) 범주에 속합니다.",
        "1,000억 배는 우주에서 알려진 최대급 극대질량 블랙홀의 이론적 상한에 가깝습니다.",
        "정답입니다. EHT가 인류 최초로 직접 촬영한 M87* 블랙홀의 실측 질량입니다."
      ]
    }
  ],
  physics_quantum: [
    {
      id: "ultra_phy_1",
      topic: "물리학 & 양자역학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "빛(전자기파)이 금속 표면에 부딪힐 때 전자가 튀어나오는 광전효과를 설명하기 위해, 빛이 연속적인 파동이 아닌 에너지 알갱이(광자, $E=h\\nu$)로 구성되어 있다고 제안한 물리학자는?",
      options: ["알베르트 아인슈타인", "막스 플랑크", "닐스 보어", "제임스 클러크 맥스웰"],
      correctIndex: 0,
      explanation: "아인슈타인은 1905년 광양자설(Photon Hypothesis)을 발표하여 빛의 입자성을 입증하고 광전효과를 완벽히 설명하여 1921년 노벨물리학상을 수상했습니다.",
      deepKnowledge: "금속에서 전자를 떼어내는 데 필요한 최소 에너지를 일함수(Work Function, $W$)라 하며, 빛의 진동수가 한계 진동수보다 커야만 전자가 방출됩니다.",
      sourceOrTrivia: "Einstein (1905) Annalen der Physik",
      wrongOptionsReason: [
        "정답입니다. 광양자설로 광전효과를 설명했습니다.",
        "플랑크는 흑체 복사 연구에서 에너지 양자화 개념을 최초로 도입했습니다.",
        "보어는 양자화된 원자 모형을 제시했습니다.",
        "맥스웰은 빛이 전자기파동임을 방정식으로 밝혔습니다."
      ]
    },
    {
      id: "ultra_phy_2",
      topic: "물리학 & 양자역학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "뉴턴의 세 가지 운동 법칙 중, '외부에서 알짜힘이 작용하지 않는 한 정지해 있는 물체는 계속 정지해 있고, 운동하는 물체는 등속 직선 운동을 유지한다'는 법칙은?",
      options: ["가속도의 법칙 (제2법칙)", "작용·반작용의 법칙 (제3법칙)", "관성의 법칙 (제1법칙)", "만유인력의 법칙"],
      correctIndex: 2,
      explanation: "뉴턴 제1법칙은 갈릴레이의 사고실험을 바탕으로 물체가 원래의 운동 상태를 유지하려는 고유 성질인 '관성(Inertia)'을 정의합니다.",
      deepKnowledge: "이 법칙은 관성계(Inertial Reference Frame)가 무엇인지를 규정하는 기준 틀 역할을 합니다.",
      sourceOrTrivia: "Newton (1687) Philosophiæ Naturalis Principia Mathematica",
      wrongOptionsReason: [
        "제2법칙은 $F=ma$로 힘과 가속도의 관계를 나타냅니다.",
        "제3법칙은 힘이 항상 쌍으로 작용함을 나타냅니다.",
        "정답입니다. 물체의 운동 상태 유지 성질인 관성의 법칙입니다.",
        "만유인력 법칙은 질량을 가진 물체 사이의 인력을 기술합니다."
      ]
    },
    {
      id: "ultra_phy_3",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "드브로이의 물질파 가설에 따라 운동량 $p$를 가진 모든 입자가 지니는 파장($\\lambda$)을 나타내는 올바른 공식은? (단, $h$는 플랑크 상수)",
      options: ["$\\lambda = h / p$", "$\\lambda = h \\cdot p$", "$\\lambda = p / h$", "$\\lambda = h / c$"],
      correctIndex: 0,
      explanation: "루이 드브로이는 파동이 입자성을 갖는다면 입자도 파동성을 가져야 한다고 주장하며 물질파 파장 $\\lambda = h/p$를 제안했습니다.",
      deepKnowledge: "이 가설은 1927년 데이비슨-거머 실험에서 니켈 결정 표면에 부딪힌 전자가 회절 무늬를 형성하는 것이 확인되면서 실증되었습니다.",
      sourceOrTrivia: "de Broglie (1924) Doctoral Thesis / Davisson & Germer (1927) Phys. Rev.",
      wrongOptionsReason: [
        "정답입니다. 물질파 파장은 플랑크 상수를 운동량으로 나눈 값입니다.",
        "곱의 형태는 차원 분석상 파장의 단위가 성립하지 않습니다.",
        "역수 형태는 잘못된 관계입니다.",
        "$h/c$는 운동량이 광속일 때의 특수 형태가 아닙니다."
      ]
    },
    {
      id: "ultra_phy_4",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "양자역학에서 한 입자의 위치 측정 불확정성($\\Delta x$)과 운동량 측정 불확정성($\\Delta p$)의 곱이 특정 한계 이상이어야 한다는 원리는?",
      options: ["파울리 배타 원리", "하이젠베르크 불확정성 원리 (Uncertainty Principle)", "보어의 상보성 원리", "에너지 보존 법칙"],
      correctIndex: 1,
      explanation: "하이젠베르크 불확정성 원리($\\Delta x \\Delta p \\ge \\hbar/2$)는 입자의 파동함수 특성상 위치와 운동량이 교환되지 않는 연산자 관계에서 기인하는 본질적 한계입니다.",
      deepKnowledge: "이 원리는 측정 장비의 정밀도 문제가 아니라 양자 상태 자체의 고유한 푸리에 변환 상의 켤레 물리량 성질입니다.",
      sourceOrTrivia: "Heisenberg (1927) Zeitschrift für Physik 43",
      wrongOptionsReason: [
        "파울리 배타 원리는 동일 양자 상태에 두 페르미온이 존재할 수 없다는 원리입니다.",
        "정답입니다. 켤레 변수 간의 동시 측정 한계를 기술한 원리입니다.",
        "상보성 원리는 파동과 입자 특성이 상호 보완적이라는 철학적 해석입니다.",
        "에너지 보존 법칙은 계의 총 에너지가 일정하다는 법칙입니다."
      ]
    },
    {
      id: "ultra_phy_5",
      topic: "물리학 & 양자역학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "극저온에서 특정 물질의 전기저항이 정확히 0이 되고, 물질 내부의 자기력선을 외부로 완전히 밀어내는 완전 반자성 현상은?",
      options: ["제벡 효과 (Seebeck Effect)", "홀 효과 (Hall Effect)", "마이스너 효과 (Meissner Effect)", "콘도 효과 (Kondo Effect)"],
      correctIndex: 2,
      explanation: "마이스너 효과는 초전도체가 초전도 임계온도 이하로 냉각될 때 내부 자기장($B$)이 0이 되어 외부 자기력선을 밖으로 완전히 배척하는 현상입니다.",
      deepKnowledge: "바딘, 쿠퍼, 슈리퍼(BCS 이론)는 격자 진동(음향양자, 포논)을 매개로 전자들이 쿠퍼 쌍(Cooper pair)을 이루어 보손처럼 응축함으로써 저항 없는 전류가 흐른다고 설명했습니다.",
      sourceOrTrivia: "Meissner & Ochsenfeld (1933) Naturwissenschaften 21",
      wrongOptionsReason: [
        "제벡 효과는 온도 차이에 의해 전압이 발생하는 열전 현상입니다.",
        "홀 효과는 도선에 자기장을 걸었을 때 측면으로 전압이 걸리는 현상입니다.",
        "정답입니다. 초전도체의 완전 반자성을 나타내는 마이스너 효과입니다.",
        "콘도 효과는 자성 불순물에 의해 저온에서 전기저항이 상승하는 현상입니다."
      ]
    },
    {
      id: "ultra_phy_6",
      topic: "물리학 & 양자역학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "2022년 노벨물리학상을 수상한 알랭 아스페, 존 클라우저, 안톤 차일링거 교수가 실험적으로 입증한 벨의 부등식 위배가 함의하는 물리적 의미는?",
      options: ["아인슈타인이 주장한 '국소 실재론(Local Realism)'의 기각", "양자역학의 파동함수 붕괴가 오류라는 증명", "빛보다 빠른 정보 전송이 실제로 가능하다는 발견", "모든 쿼크가 실재하지 않는다는 증명"],
      correctIndex: 0,
      explanation: "벨 부등식의 실험적 위배는 물리량이 측정 전부터 결정되어 있고 빛보다 빠른 상호작용이 없다는 '국소 숨은 변수 이론'이 자연계에서 성립하지 않음을 명백히 밝혔습니다.",
      deepKnowledge: "이는 양자 얽힘이 시공간을 초월하는 비국소적(Non-local) 상관관계를 가지며, 우주가 국소 실재론적이지 않음을 실증한 현대 물리학의 기념비적 사건입니다.",
      sourceOrTrivia: "Aspect et al. (1982) Phys. Rev. Lett. 49 / Nobel Prize in Physics (2022)",
      wrongOptionsReason: [
        "정답입니다. 국소 실재론이 부정되고 양자역학의 비국소성이 입증되었습니다.",
        "파동함수 붕괴 이론 자체의 오류를 뜻하지 않습니다.",
        "양자 얽힘을 이용해도 초광속 정보 전송(통신)은 불가능합니다.",
        "쿼크의 존재 유무와는 무관한 양자 기초론 실험입니다."
      ]
    },
    {
      id: "ultra_phy_7",
      topic: "물리학 & 양자역학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "물리학에서 '물리계의 작용(Action)에 연속적인 대칭성이 존재하면, 그에 대응하는 보존 법칙이 반드시 존재한다'는 수학적 정리는?",
      options: ["뇌터의 정리 (Noether's Theorem)", "골드스톤의 정리 (Goldstone Theorem)", "CPT 정리", "윅의 정리 (Wick's Theorem)"],
      correctIndex: 0,
      explanation: "에미 뇌터(Emmy Noether)가 1918년 증명한 이 정리는 시간 병진 대칭→에너지 보존, 공간 병진 대칭→운동량 보존, 회전 대칭→각운동량 보존 법칙을 완벽히 연결했습니다.",
      deepKnowledge: "현대 게이지 이론(Gauge Theory)의 근간이 되는 $U(1)$ 게이지 대칭성은 전하 보존 법칙에 대응합니다.",
      sourceOrTrivia: "Noether (1918) 'Invariante Variationsprobleme'",
      wrongOptionsReason: [
        "정답입니다. 대칭성과 보존 법칙의 심오한 연결 고리인 뇌터의 정리입니다.",
        "골드스톤 정리는 연속 대칭성이 자발적으로 깨질 때 질량 없는 보손이 생김을 보입니다.",
        "CPT 정리는 전하, 패리티, 시간 역전 동시 변환의 불변성입니다.",
        "윅의 정리는 양자장론에서 시간 순서 곱을 연산자 축약으로 전개하는 기법입니다."
      ]
    },
    {
      id: "ultra_phy_8",
      topic: "물리학 & 양자역학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "진공 중에 아무것도 없는 두 도체 금속판을 나노미터 단위로 극도로 가깝게 배치할 때, 진공 전자기 양자 요동의 모드 제한으로 인해 두 판 사이에 끌어당기는 힘이 발생하는 현상은?",
      options: ["카시미르 효과 (Casimir Effect)", "아하로노프-봄 효과", "슈타르크 효과", "제이만 효과"],
      correctIndex: 0,
      explanation: "카시미르 효과는 금속판 사이의 진공 영점 에너지가 판 바깥의 진공 영점 에너지보다 작아져, 진공 양자 요동의 압력 차이로 인력이 작용하는 순수 양자장론적 현상입니다.",
      deepKnowledge: "단위 면적당 카시미르 힘은 $F/A = -\\frac{\\pi^2 \\hbar c}{240 d^4}$로 판 사이 거리의 4제곱에 반비례하여 감소합니다.",
      sourceOrTrivia: "Casimir (1948) Proc. K. Ned. Akad. Wet. 51",
      wrongOptionsReason: [
        "정답입니다. 진공 영점 에너지 차이에 의한 카시미르 효과입니다.",
        "아하로노프-봄 효과는 자기장이 0인 영역에서도 벡터 퍼텐셜이 전자 위상에 영향을 주는 현상입니다.",
        "슈타르크 효과는 외부 전기장에 의해 원자 스펙트럼선이 갈라지는 현상입니다.",
        "제이만 효과는 외부 자기장에 의해 원자 스펙트럼선이 분필되는 현상입니다."
      ]
    },
    {
      id: "ultra_phy_9",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "열역학적 고립계에서 자발적인 변화가 일어날 때, 무질서도의 척도인 엔트로피($S$)는 결코 감소하지 않는다는 열역학 법칙은?",
      options: ["열역학 제0법칙", "열역학 제1법칙", "열역학 제2법칙", "열역학 제3법칙"],
      correctIndex: 2,
      explanation: "열역학 제2법칙은 고립계의 총 엔트로피가 시간이 지남에 따라 증가하거나 일정하며, 열은 스스로 저온에서 고온으로 이동할 수 없음을 규정합니다.",
      deepKnowledge: "루트비히 볼츠만은 엔트로피를 미시적 미시상태 수($\\Omega$)의 로그에 볼츠만 상수를 곱한 $S = k_B \\ln \\Omega$로 통계역학적으로 재정의했습니다.",
      sourceOrTrivia: "Clausius (1865) & Boltzmann (1877)",
      wrongOptionsReason: [
        "제0법칙은 열적 평형의 이행성(온도의 정의)을 다룹니다.",
        "제1법칙은 에너지 보존 법칙을 다룹니다.",
        "정답입니다. 비가역성과 엔트로피 증가를 다루는 제2법칙입니다.",
        "제3법칙은 절대영도(0K)에서 순수한 결정의 엔트로피가 0이 됨을 다룹니다."
      ]
    },
    {
      id: "ultra_phy_10",
      topic: "물리학 & 양자역학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "아인슈타인의 특수 상대성 이론에 따르면, 모든 관성계에서 진공 중의 빛의 속력($c$)은 어떠한 특성을 가지는가?",
      options: ["관찰자의 운동 속도에 관계없이 항상 일정하다", "광원의 이동 속도에 비례하여 증가한다", "진공의 온도에 따라 변화한다", "관찰자가 다가갈수록 빠르게 측정된다"],
      correctIndex: 0,
      explanation: "특수 상대성 이론의 제2공리인 '광속 불변의 원리'에 따르면, 진공 중 빛의 속도는 광원이나 관찰자의 운동 상태와 무관하게 항상 약 초속 30만 km로 일정합니다.",
      deepKnowledge: "이 광속 불변성으로 인해 서로 다른 관성계의 관찰자 사이에서 시간 지연(Time Dilation)과 길이 수축(Length Contraction)이 필연적으로 발생합니다.",
      sourceOrTrivia: "Einstein (1905) 'Zur Elektrodynamik bewegter Körper'",
      wrongOptionsReason: [
        "정답입니다. 광속은 모든 관성계에서 불변입니다.",
        "고전 갈릴레이 변환의 속도 덧셈은 빛에 적용되지 않습니다.",
        "진공에는 매질이 없으므로 온도 개념이 속도에 영향을 주지 않습니다.",
        "다가가더라도 빛의 속도는 일정하며 도플러 적색/청색편이(진동수 변화)만 일어납니다."
      ]
    },
    {
      id: "ultra_phy_11",
      topic: "물리학 & 양자역학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "약한 상호작용(Weak Interaction)에서 공간 반전(Parity, 좌우 대칭성)이 보존되지 않는다는 사실을 1956년 코발트-60 방사성 붕괴 실험으로 증명한 여성 물리학자는?",
      options: ["마리 퀴리", "리제 마이트너", "우젠슝 (Chien-Shiung Wu)", "로절린드 프랭클린"],
      correctIndex: 2,
      explanation: "우젠슝 교수는 리정다오와 양전닝의 이론적 제안을 극저온 코발트-60의 베타 붕괴 정밀 실험으로 구현하여 약한 상호작용에서 패리티 대칭성이 완전히 깨짐을 입증했습니다.",
      deepKnowledge: "이 실험으로 리정다오와 양전닝은 1957년 노벨물리학상을 수상했으나, 실험을 성공시킨 우젠슝 교수는 아쉽게 노벨상 수상에서 제외되어 역사적 논란이 되었습니다.",
      sourceOrTrivia: "Wu et al. (1957) Physical Review 105, 1413",
      wrongOptionsReason: [
        "마리 퀴리는 라듐과 폴로늄을 발견한 방사능 연구의 개척자입니다.",
        "리제 마이트너는 핵분열 이론을 정립한 물리학자입니다.",
        "정답입니다. 패리티 비보존을 실증한 우젠슝 교수입니다.",
        "로절린드 프랭클린은 DNA X선 회절 사진(Photo 51)을 촬영한 결정학자입니다."
      ]
    },
    {
      id: "ultra_phy_12",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "보손(Boson) 입자 기체를 절대영도에 가깝게 냉각시켰을 때, 수많은 입자들이 가장 낮은 단일 양자 바닥상태로 응축되어 거시적 양자 파동처럼 행동하는 상태는?",
      options: ["플라스마 (Plasma)", "초임계 유체", "보스-아인슈타인 응축 (Bose-Einstein Condensate, BEC)", "페르미 액체"],
      correctIndex: 2,
      explanation: "보스-아인슈타인 응축은 스핀이 정수인 보손 입자들이 파울리 배타 원리를 받지 않고 모두 기저 상태로 떨어져 거대한 단일 물질파를 형성하는 기이한 양자 물질 상태입니다.",
      deepKnowledge: "1995년 에릭 코넬과 칼 위먼은 루비듐-87 원자를 170나노켈빈까지 냉각시켜 인류 최초로 BEC를 구현하여 2001년 노벨물리학상을 받았습니다.",
      sourceOrTrivia: "Anderson et al. (1995) Science 269",
      wrongOptionsReason: [
        "플라스마는 초고온에서 전자와 이온이 분리된 전하 기체 상태입니다.",
        "초임계 유체는 임계온도와 임계압력 이상에서 기체와 액체의 구분이 사라진 상태입니다.",
        "정답입니다. 극저온 보손의 거시적 양자 응축인 BEC입니다.",
        "페르미 액체는 상호작용하는 페르미온 계의 저온 거동 모델입니다."
      ]
    },
    {
      id: "ultra_phy_13",
      topic: "물리학 & 양자역학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "도선에 전류가 흐를 때 도선 주변에 동심원 형태의 자기장이 형성되는 방향을 결정하는 법칙은?",
      options: ["패러데이 전자기 유도 법칙", "쿨롱의 법칙", "앙페르의 오른나사 법칙", "스넬의 굴절 법칙"],
      correctIndex: 2,
      explanation: "오른손 엄지손가락을 전류의 방향으로 향하게 할 때, 나머지 네 손가락이 도선을 감아쥐는 방향이 유도 자기장의 방향이 됩니다.",
      deepKnowledge: "앙페르 회로 법칙(Ampère's Circuital Law)은 이를 수학적으로 정식화한 것으로, 맥스웰 방정식의 기초가 되었습니다.",
      sourceOrTrivia: "Ampère (1826) Théorie des phénomènes électrodynamiques",
      wrongOptionsReason: [
        "패러데이 법칙은 자기선속의 변화가 유도기전력을 만든다는 법칙입니다.",
        "쿨롱의 법칙은 두 전하 사이의 정전기력을 다룹니다.",
        "정답입니다. 전류와 자기장 방향의 기하학적 관계를 나타내는 오른나사 법칙입니다.",
        "스넬의 법칙은 빛이 매질을 통과할 때의 굴절각 법칙입니다."
      ]
    },
    {
      id: "ultra_phy_14",
      topic: "물리학 & 양자역학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "양자역학에서 미지의 임의 양자 상태 $|\\psi\\rangle$를 정보의 손실 없이 완벽하게 복제하여 독립된 동일한 상태로 만드는 물리적 변환이 불가능하다는 정리는?",
      options: ["무복제 정리 (No-Cloning Theorem)", "벨의 정리 (Bell's Theorem)", "골드스톤의 정리", "콜먼-만둘라 정리"],
      correctIndex: 0,
      explanation: "보츠와 주렉(Wootters & Zurek)이 1982년 증명한 무복제 정리는 양자역학의 유니터리성(선형성)으로 인해 임의의 중첩 상태를 복제할 수 없음을 규명했습니다.",
      deepKnowledge: "이 정리는 양자 암호통신(QKD)의 절대적 보안성(도청자가 복제본을 만들 수 없음)을 보장하는 핵심 물리학적 원리입니다.",
      sourceOrTrivia: "Wootters & Zurek (1982) Nature 299, 802-803",
      wrongOptionsReason: [
        "정답입니다. 양자 상태 복제의 불가능성을 증명한 무복제 정리입니다.",
        "벨의 정리는 국소 실재론과 양자역학의 통계적 차이를 다룹니다.",
        "골드스톤 정리는 자발적 대칭성 깨짐과 무질량 입자 생성에 관한 정리입니다.",
        "콜먼-만둘라 정리는 시공간 대칭과 내부 대칭의 비자명 결합 제한 정리입니다."
      ]
    },
    {
      id: "ultra_phy_15",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "빛이 진공에서 굴절률 $n$인 매질로 들어갈 때 진행 속도($v$)와 파장($\\lambda$)은 진공에 비해 어떻게 변하는가?",
      options: ["속도와 파장 모두 $1/n$로 감소한다", "속도는 감소하지만 파장은 증가한다", "속도와 파장 모두 변하지 않는다", "진동수와 파장이 모두 $n$배 증가한다"],
      correctIndex: 0,
      explanation: "빛이 매질로 들어가면 진동수($f$)는 변하지 않지만, 속도($v = c/n$)가 감소하므로 파장($\\lambda = v/f = \\lambda_0 / n$)도 동일한 비율로 줄어듭니다.",
      deepKnowledge: "굴절률은 매질 내 원자들의 전자구름과 전자기파의 상호작용으로 인해 유효 위상속도가 늦어지는 광학적 척도입니다.",
      sourceOrTrivia: "Hecht (2017) Optics, 5th Edition",
      wrongOptionsReason: [
        "정답입니다. 진동수는 일정하고 속도와 파장이 $1/n$로 함께 감소합니다.",
        "파장은 속도 감소에 비례하여 반드시 감소합니다.",
        "매질 내에서 빛의 속도와 파장은 반드시 변화합니다.",
        "진동수는 광원의 고유 특성으로 매질이 바뀌어도 결코 변하지 않습니다."
      ]
    },
    {
      id: "ultra_phy_16",
      topic: "물리학 & 양자역학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "2012년 유럽입자물리연구소(CERN)의 대형강입자충돌기(LHC)에서 발견되어 소립자들에게 질량을 부여하는 메커니즘의 실체를 밝힌 기본 입자는?",
      options: ["힉스 보손 (Higgs Boson)", "톱 쿼크 (Top Quark)", "글루온 (Gluon)", "중력자 (Graviton)"],
      correctIndex: 0,
      explanation: "힉스 보손은 우주를 채우고 있는 힉스 장(Higgs Field)의 양자화된 입자로, W/Z 게이지 보손과 쿼크, 렙톤이 힉스 장과 상호작용(유카와 결합)하여 질량을 획득합니다.",
      deepKnowledge: "피터 힉스와 프랑수아 앙글레르는 1964년 자발적 대칭성 깨짐을 통한 질량 생성 이론을 제안한 공로로 발견 이듬해인 2013년 노벨물리학상을 수상했습니다.",
      sourceOrTrivia: "ATLAS & CMS Collaborations (2012) Physics Letters B 716",
      wrongOptionsReason: [
        "정답입니다. 물질의 질량 기원을 설명하는 '신의 입자' 힉스 보손입니다.",
        "톱 쿼크는 1995년 페르미랩에서 발견된 가장 무거운 쿼크입니다.",
        "글루온은 강한 상호작용을 매개하는 질량 없는 게이지 보손입니다.",
        "중력자는 중력을 매개할 것으로 예측되는 미발견 이론적 입자입니다."
      ]
    },
    {
      id: "ultra_phy_17",
      topic: "물리학 & 양자역학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "물리학에서 '일(Work)'의 정의로, 크기 $F$인 힘을 주어 물체가 힘의 방향으로 거리 $s$만큼 이동했을 때 한 일의 양은?",
      options: ["$W = F / s$", "$W = F \\cdot s$", "$W = F + s$", "$W = \\frac{1}{2} F s^2$"],
      correctIndex: 1,
      explanation: "물리학적 일은 힘 벡터와 변위 벡터의 내적($W = \\vec{F} \\cdot \\vec{s} = F s \\cos \\theta$)으로 정의되며 단위는 줄(J)을 사용합니다.",
      deepKnowledge: "힘을 아무리 크게 주더라도 물체의 이동 거리가 0이거나(벽 밀기), 힘의 방향과 이동 방향이 수직인 경우(등속 원운동의 구심력) 한 일은 0입니다.",
      sourceOrTrivia: "Halliday & Resnick (2013) Fundamentals of Physics",
      wrongOptionsReason: [
        "나눗셈 형태는 일의 차원(에너지)과 일치하지 않습니다.",
        "정답입니다. 일은 힘과 이동 거리의 곱(내적)입니다.",
        "단순 합산은 단위가 맞지 않아 물리적으로 성립할 수 없습니다.",
        "제곱 계수 공식은 일의 정의가 아닌 용수철 탄성 에너지 공식 형태입니다."
      ]
    },
    {
      id: "ultra_phy_18",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "고전 역학에서는 극복할 수 없는 높은 에너지 장벽(Potential Barrier)을 양자역학적 파동성을 지닌 입자가 유한한 확률로 뚫고 통과하는 현상은?",
      options: ["양자 터널링 (Quantum Tunneling)", "양자 도약 (Quantum Leap)", "콤프턴 효과", "도플러 효과"],
      correctIndex: 0,
      explanation: "입자의 파동함수가 퍼텐셜 장벽 내부에서 지수함수적으로 감쇄하더라도 0이 되지 않기 때문에 장벽 반대편에 입자가 출현할 확률이 존재합니다.",
      deepKnowledge: "태양 중심핵의 양성자 핵융합(상온보다 훨씬 낮은 1500만도에서 반응 가능)과 주사 터널링 현미경(STM), 플래시 메모리 트랜지스터가 모두 양자 터널링 덕분에 작동합니다.",
      sourceOrTrivia: "Gamow (1928) & Gurney & Condon (1928)",
      wrongOptionsReason: [
        "정답입니다. 에너지 장벽을 확률적으로 뚫는 양자 터널링입니다.",
        "양자 도약은 전자가 불연속적인 궤도 사이를 전이하는 현상입니다.",
        "콤프턴 효과는 광자와 전자의 충돌로 파장이 길어지는 현상입니다.",
        "도플러 효과는 파원의 운동에 따른 관측 진동수의 변화입니다."
      ]
    },
    {
      id: "ultra_phy_19",
      topic: "물리학 & 양자역학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "강한 상호작용의 양자색역학(QCD)에서 두 쿼크 사이의 거리가 극도로 가까워질수록(고에너지 극한) 상호작용 강도가 0에 수렴하여 자유 입자처럼 행동하는 현상은?",
      options: ["점근적 자유성 (Asymptotic Freedom)", "쿼크 가둠 (Confinement)", "자발적 대칭성 깨짐", "적외선 발산"],
      correctIndex: 0,
      explanation: "데이비드 그로스, 프랭크 윌첵, 데이비드 폴리처가 1973년 규명한 현상으로, 거리가 가까워지면 색전하 결합 상수가 줄어들어 자유롭게 움직입니다.",
      deepKnowledge: "반대로 쿼크 사이의 거리가 멀어지면 글루온 장의 자가 상호작용으로 인해 결합력이 일정하게 유지되다가 새로운 쿼크-반쿼크 쌍이 형성되는 '쿼크 가둠'이 일어납니다.",
      sourceOrTrivia: "Gross & Wilczek (1973) & Politzer (1973) Phys. Rev. Lett.",
      wrongOptionsReason: [
        "정답입니다. 2004 노벨물리학상을 받은 점근적 자유성입니다.",
        "쿼크 가둠은 쿼크가 단독으로 분리되지 못하고 강습 입자 내부에 갇히는 현상입니다.",
        "자발적 대칭성 깨짐은 계의 바닥상태가 대칭성을 만족하지 못하는 현상입니다.",
        "적외선 발산은 양자장론에서 저에너지 영역 적분이 발산하는 문제입니다."
      ]
    },
    {
      id: "ultra_phy_20",
      topic: "물리학 & 양자역학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "태양에서 방출된 전자 중성미자가 지구로 날아오는 도중에 뮤온 중성미자나 타우 중성미자로 자발적 변환을 겪는 '중성미자 진동(Neutrino Oscillation)'이 확증한 결정적 사실은?",
      options: ["중성미자가 0이 아닌 미세한 질량을 가지고 있다", "중성미자가 빛보다 빠른 초광속 입자이다", "중성미자가 붕괴하여 암흑물질로 변환된다", "중성미자에는 반입자가 전혀 존재하지 않는다"],
      correctIndex: 0,
      explanation: "중성미자의 맛깔 고유상태와 질량 고유상태가 일치하지 않아 위상차가 누적되면서 진동이 발생하므로, 세 질량 고유값 사이의 질량 차이가 0이 아님이 입증되었습니다.",
      deepKnowledge: "이 발견은 표준모형에서 중성미자의 질량이 정확히 0이라고 가정한 결함을 드러냈으며, 슈퍼 카미오칸데의 카지타 타카아키와 SNO의 아서 맥도널드가 2015 노벨상을 받았습니다.",
      sourceOrTrivia: "Fukuda et al. (1998) & Ahmad et al. (2001) Phys. Rev. Lett.",
      wrongOptionsReason: [
        "정답입니다. 중성미자 진동은 중성미자의 0이 아닌 질량을 입증했습니다.",
        "중성미자는 질량이 있으므로 광속보다 미세하게 느리게 운동합니다.",
        "중성미자는 암흑물질의 주요 구성 요소(차가운 암흑물질)가 아닙니다.",
        "중성미자에도 반중성미자가 존재합니다."
      ]
    },
    {
      id: "ultra_phy_21",
      topic: "물리학 & 양자역학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "전하를 띤 두 입자 사이에 작용하는 정전기적 인력 또는 척력의 크기가 두 전하량의 곱에 비례하고 거리의 제곱에 반비례한다는 물리 법칙은?",
      options: ["옴의 법칙", "패러데이 법칙", "쿨롱의 법칙 (Coulomb's Law)", "비오-사바르 법칙"],
      correctIndex: 2,
      explanation: "샤를 드 쿨롱이 비틀림 저울 실험을 통해 확립한 법칙($F = k_e \\frac{|q_1 q_2|}{r^2}$)으로, 전자기학의 기초가 되는 역제곱 법칙입니다.",
      deepKnowledge: "쿨롱의 법칙은 형태 면에서 뉴턴의 만유인력 법칙과 수학적으로 동일하지만, 전하는 양과 음이 있어 인력뿐만 아니라 척력도 작용한다는 점이 다릅니다.",
      sourceOrTrivia: "Coulomb (1785) Recherches théoriques et expérimentales sur la force d'attraction",
      wrongOptionsReason: [
        "옴의 법칙은 전압, 전류, 저항의 관계($V=IR$)입니다.",
        "패러데이 법칙은 전자기 유도 현상을 다룹니다.",
        "정답입니다. 정전기적 힘의 거리 역제곱 법칙인 쿨롱의 법칙입니다.",
        "비오-사바르 법칙은 미소 전류가 만드는 자기장을 기술합니다."
      ]
    },
    {
      id: "ultra_phy_22",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "전자와 같은 페르미온(Fermion) 입자들은 동일한 양자계 내에서 4개의 양자수(주, 방위, 자기, 스핀 양자수)가 완전히 동일한 상태를 동시에 공유할 수 없다는 원리는?",
      options: ["파울리 배타 원리 (Pauli Exclusion Principle)", "훈트의 규칙", "쌓음 원리", "불확정성 원리"],
      correctIndex: 0,
      explanation: "볼프강 파울리가 제안한 원리로, 스핀이 반정수(1/2, 3/2 등)인 페르미온 파동함수의 반대칭성(Antisymmetry)에서 비롯됩니다.",
      deepKnowledge: "이 배타 원리 덕분에 전자들이 원자핵 주위의 서로 다른 전자 껍질에 차곡차곡 쌓여 주기율표의 원소별 화학적 다양성과 단단한 고체 물질이 형성될 수 있습니다.",
      sourceOrTrivia: "Pauli (1925) Zeitschrift für Physik 31",
      wrongOptionsReason: [
        "정답입니다. 페르미온의 동시 점유를 금지하는 파울리 배타 원리입니다.",
        "훈트의 규칙은 축퇴된 오비탈에서 평행 스핀이 최대가 되도록 전자가 채워지는 규칙입니다.",
        "쌓음 원리는 에너지가 낮은 오비탈부터 전자가 채워진다는 규칙입니다.",
        "불확정성 원리는 위치와 운동량의 동시 측정 한계입니다."
      ]
    },
    {
      id: "ultra_phy_23",
      topic: "물리학 & 양자역학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "특수 상대성 이론의 질량-에너지 등가 원리($E = mc^2$)와 정지 질량 $m_0$, 운동량 $p$를 결합한 상대론적 에너지-운동량 관계식의 올바른 형태는?",
      options: ["$E^2 = (pc)^2 + (m_0 c^2)^2$", "$E = pc + m_0 c^2$", "$E = \\frac{1}{2} m v^2 + m_0 c^2$", "$E^2 = p^2 c + m_0^2 c^3$"],
      correctIndex: 0,
      explanation: "상대론적 4차원 운동량 벡터의 불변 크기에서 유도되는 식으로, 질량이 0인 광자($m_0 = 0$)의 경우 순수하게 $E = pc$의 관계를 가집니다.",
      deepKnowledge: "디랙(Dirac)은 이 2차 방정식의 음의 에너지 해($E = -\\sqrt{(pc)^2 + (m_0 c^2)^2}$)를 물리적으로 해석하는 과정에서 인류 최초로 반물질(양전자)의 존재를 예견했습니다.",
      sourceOrTrivia: "Dirac (1928) Proc. R. Soc. Lond. A 117",
      wrongOptionsReason: [
        "정답입니다. 상대론적 에너지-운동량 불변 관계식입니다.",
        "단순 일차식 합산은 로런츠 불변량에 맞지 않습니다.",
        "고전 역학 운동에너지 항을 혼합한 오류 식입니다.",
        "차원 분석상 에너지 제곱 단위가 성립하지 않습니다."
      ]
    },
    {
      id: "ultra_phy_24",
      topic: "물리학 & 양자역학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "초전도체 두 개 사이에 얇은 절연체 장벽을 끼워 넣었을 때, 전압을 걸어주지 않아도 직류 초전도 터널링 전류가 흐르는 현상은?",
      options: ["조셉슨 효과 (Josephson Effect)", "아하로노프-봄 효과", "홀 효과", "모트 전이 (Mott Transition)"],
      correctIndex: 0,
      explanation: "브라이언 조셉슨이 예측한 효과로, 쿠퍼 쌍들이 양자 터널링을 통해 장벽을 통과하며 두 초전도체 간의 거시적 파동함수 위상차에 비례하는 전류가 흐릅니다.",
      deepKnowledge: "조셉슨 접합은 뇌자도(MEG) 측정에 쓰이는 초전도 양자 간섭 소자(SQUID)와 초전도 큐비트(IBM/구글 양자 컴퓨터)의 핵심 기본 부품입니다.",
      sourceOrTrivia: "Josephson (1962) Physics Letters 1",
      wrongOptionsReason: [
        "정답입니다. 초전도 위상차에 의한 조셉슨 효과입니다.",
        "아하로노프-봄 효과는 게이지 퍼텐셜에 의한 위상 변화입니다.",
        "홀 효과는 도선 측면 전압 발생 현상입니다.",
        "모트 전이는 전자 간 척력으로 금속이 절연체로 전이하는 현상입니다."
      ]
    },
    {
      id: "ultra_phy_25",
      topic: "물리학 & 양자역학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "물질의 상태 변화 중, 고체 물질이 액체 단계를 거치지 않고 직접 기체로 변하거나 기체가 직접 고체로 변하는 현상은?",
      options: ["기화 (Vaporization)", "승화 (Sublimation)", "융해 (Melting)", "응고 (Solidification)"],
      correctIndex: 1,
      explanation: "승화는 물질의 삼중점(Triple Point)보다 낮은 압력 환경에서 고체가 열을 흡수하여 액체 상태를 건너뛰고 직접 기체가 되는 현상입니다.",
      deepKnowledge: "일상에서 드라이아이스(고체 CO2)가 상압에서 바로 이산화탄소 기체로 날아가는 것이 대표적인 승화 현상입니다.",
      sourceOrTrivia: "Atkins (2018) Physical Chemistry, 11th Edition",
      wrongOptionsReason: [
        "기화는 액체가 기체로 변하는 현상입니다.",
        "정답입니다. 고체와 기체 사이의 직접 상변화인 승화입니다.",
        "융해는 고체가 액체로 녹는 현상입니다.",
        "응고는 액체가 고체로 굳는 현상입니다."
      ]
    }
  ]
};
