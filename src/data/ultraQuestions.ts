import type { Question } from '../types/quiz';

export const ULTRA_QUESTIONS: Record<string, Question[]> = {
  "space": [
    {
      "id": "ultra_sp_1",
      "topic": "우주 & 천문학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "태양계 행성 중 가장 큰 부피와 질량을 자랑하며, 강력한 자기장과 거대한 대적점을 가진 가스 행성은?",
      "options": [
        "목성",
        "토성",
        "천왕성",
        "해왕성"
      ],
      "correctIndex": 0,
      "explanation": "목성은 태양계 모든 다른 행성들의 질량을 합친 것보다 2.5배 이상 무거운 태양계 최대의 행성입니다.",
      "deepKnowledge": "목성의 강력한 중력은 소행성들의 궤도를 안정화하거나 외곽으로 튕겨내 지구를 소행성 충돌로부터 보호하는 방패 역할을 해왔습니다.",
      "sourceOrTrivia": "NASA Planetary Fact Sheet - Jupiter",
      "wrongOptionsReason": [
        "정답입니다. 태양계 최대 가스 거대 행성입니다.",
        "토성은 두 번째로 큰 행성이며 고리가 특징입니다.",
        "천왕성은 세 번째 크기의 얼음 거대 행성입니다.",
        "해왕성은 네 번째 크기의 푸른 얼음 거대 행성입니다."
      ]
    },
    {
      "id": "ultra_sp_2",
      "topic": "우주 & 천문학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "태양의 중심부에서 수소 원자핵 4개가 융합하여 헬륨 원자핵 1개로 변환되면서 질량 결손(질량-에너지 등가 원리)에 의해 막대한 에너지를 방출하는 핵융합 반응은?",
      "options": [
        "CNO 순환 반응",
        "p-p 연쇄 반응 (양성자-양성자 연쇄 반응)",
        "3중 알파 반응",
        "탄소 연소 반응"
      ],
      "correctIndex": 1,
      "explanation": "태양과 같은 1태양질량 미만의 주계열성에서는 중심 온도가 약 1,500만K로, p-p 연쇄 반응이 전체 핵융합 에너지의 98% 이상을 담당합니다.",
      "deepKnowledge": "태양 질량의 1.3배 이상인 고온의 무거운 별에서는 탄소, 질소, 산소가 촉매 역할을 하는 CNO 순환 반응이 지배적으로 일어납니다.",
      "sourceOrTrivia": "Bethe (1939) 'Energy Production in Stars', Physical Review",
      "wrongOptionsReason": [
        "CNO 순환은 태양보다 무거운 고온 항성에서 지배적입니다.",
        "정답입니다. 태양급 항성의 핵심 에너지원입니다.",
        "3중 알파 반응은 적색거성의 헬륨 핵융합 단계입니다.",
        "탄소 연소는 초거성 후기 단계에서 일어납니다."
      ]
    },
    {
      "id": "ultra_sp_3",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "케플러의 행성 운동 법칙 중, '모든 행성의 공전 주기의 제곱은 궤도 긴반지름(태양과의 평균 거리)의 세제곱에 비례한다'는 법칙의 명칭은?",
      "options": [
        "타원 궤도의 법칙 (제1법칙)",
        "면적속도 일정의 법칙 (제2법칙)",
        "조화의 법칙 (제3법칙)",
        "만유인력의 역제곱 법칙"
      ],
      "correctIndex": 2,
      "explanation": "케플러 제3법칙(조화의 법칙)은 행성이 태양에서 멀어질수록 공전 주기가 기하급수적으로 길어지는 엄밀한 비례 조화 관계를 규명했습니다.",
      "deepKnowledge": "이 법칙은 뉴턴이 만유인력 법칙을 수학적으로 유도하는 데 결정적인 토대가 되었으며, 두 천체의 질량과 궤도 주기 사이의 관계식으로 일반화되었습니다.",
      "sourceOrTrivia": "Kepler (1619) Harmonices Mundi",
      "wrongOptionsReason": [
        "제1법칙은 행성 궤도가 태양을 한 초점으로 하는 타원임을 설명합니다.",
        "제2법칙은 동일 시간 동안 휩쓸고 지나가는 부채꼴 면적이 같음을 설명합니다.",
        "정답입니다. 주기와 궤도 반경의 거듭제곱 관계를 다룹니다.",
        "역제곱 법칙은 뉴턴이 유도한 만유인력의 거리 반비례 특성입니다."
      ]
    },
    {
      "id": "ultra_sp_4",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1995년 마요르와 켈로즈 교수가 시선속도법(도플러 분광법)을 통해 최초로 발견한 태양 유사 항성 주위를 도는 외계행성은?",
      "options": [
        "프록시마 b",
        "트라피스트-1e",
        "케플러-22b",
        "페가수스자리 51 b (51 Pegasi b)"
      ],
      "correctIndex": 3,
      "explanation": "페가수스자리 51 b는 목성 절반 정도 질량의 가스 행성이 모항성을 불과 4.2일 만에 공전하는 '뜨거운 목성(Hot Jupiter)'으로, 2019 노벨물리학상을 수상했습니다.",
      "deepKnowledge": "이 발견은 기존 성운설 모델을 대대적으로 수정하여 행성 이동(Planetary Migration) 이론의 시발점이 되었습니다.",
      "sourceOrTrivia": "Mayor & Queloz (1995) Nature 378, 355-359",
      "wrongOptionsReason": [
        "프록시마 b는 2016년에 발견된 가장 가까운 적색왜성 외계행성입니다.",
        "트라피스트-1e는 지구 크기 지구형 행성입니다.",
        "케플러-22b는 2011년 케플러 망원경이 발견한 거주가능구역 행성입니다.",
        "정답입니다. 최초로 확인된 주계열성 외계행성입니다."
      ]
    },
    {
      "id": "ultra_sp_5",
      "topic": "우주 & 천문학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "회전하는 블랙홀(커 블랙홀)의 사건의 지평선 바깥에 존재하며, 시공간이 빛의 속도 이상으로 끌려 돌아가 어떤 물체도 정지해 있을 수 없는 영역은?",
      "options": [
        "작용권 (Ergosphere)",
        "슈바르츠실트 구면",
        "강착원반 (Accretion Disk)",
        "광자구 (Photon Sphere)"
      ],
      "correctIndex": 0,
      "explanation": "작용권(Ergosphere)은 회전하는 천체가 주변 시공간을 함께 끌고 도는 '틀 끌림(Frame-Dragging)' 효과가 극대화되어 시공간 자체가 회전하는 영역입니다.",
      "deepKnowledge": "로저 펜로즈는 작용권 안으로 들어간 입자가 붕괴할 때 음의 에너지를 블랙홀에 주고 남은 파편이 에너지를 흡수해 튕겨 나오는 '펜로즈 과정'을 입증했습니다.",
      "sourceOrTrivia": "Penrose (1969) Nuovo Cimento",
      "wrongOptionsReason": [
        "정답입니다. 커 블랙홀의 에너지 추출이 가능한 작용권입니다.",
        "슈바르츠실트 반지름은 정적 블랙홀의 사건의 지평선 크기입니다.",
        "강착원반은 낙하하는 가스와 먼지가 마찰열로 빛나는 원반입니다.",
        "광자구는 빛이 원 궤도를 돌 수 있는 불안정한 궤도면입니다."
      ]
    },
    {
      "id": "ultra_sp_6",
      "topic": "우주 & 천문학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "2017년 8월, LIGO/Virgo 중력파 관측소와 전 세계 망원경이 역사상 최초로 중력파와 감마선·광학 신호를 동시 검측(GW170817)한 우주 충돌 사건은?",
      "options": [
        "블랙홀과 항성의 충돌",
        "두 중성자별의 병합 (킬로노바, Kilonova)",
        "쌍성 블랙홀의 병합",
        "초신성 Ia형 폭발"
      ],
      "correctIndex": 1,
      "explanation": "GW170817은 두 중성자별이 충돌 병합하며 방출한 중력파와 r-과정 중성자 포획으로 금, 백금 등 무거운 원소가 대량 합성된 킬로노바 현상이었습니다.",
      "deepKnowledge": "이 관측은 인류가 중력파와 전자기파를 동시에 활용하는 '다중 신호 천문학(Multi-Messenger Astronomy)'의 시대를 열었습니다.",
      "sourceOrTrivia": "Abbott et al. (LIGO/Virgo Collaboration, 2017) Phys. Rev. Lett. 119",
      "wrongOptionsReason": [
        "블랙홀-항성 충돌은 중성자별 병합 킬로노바와 스펙트럼이 다릅니다.",
        "정답입니다. 다중 신호 천문학을 연 쌍성 중성자별 병합 사건입니다.",
        "쌍성 블랙홀 병합은 전자기파 방출이 거의 없는 순수 중력파 사건입니다.",
        "Ia형 초신성은 백색왜성의 한계질량 초과 폭발입니다."
      ]
    },
    {
      "id": "ultra_sp_7",
      "topic": "우주 & 천문학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "우주 마이크로파 배경 복사(CMB)와 우주 거대구조의 은하 분포에서 관측되며, 초기 우주의 광자-바리온 플라스마 음파가 우주 재결합 시점에 동결되어 표준 잣대(약 150 Mpc)를 형성한 현상은?",
      "options": [
        "작스-볼프 효과 (Sachs-Wolfe Effect)",
        "수냐에프-젤도비치 효과 (SZ Effect)",
        "바리온 음향 진동 (Baryon Acoustic Oscillations, BAO)",
        "라이만-알파 숲 (Lyman-alpha Forest)"
      ],
      "correctIndex": 2,
      "explanation": "BAO는 대폭발 후 38만 년까지 플라스마 내부를 전파하던 소리의 압력파가 우주가 투명해지며 멈춘 척도로, 우주의 팽창 역사와 암흑에너지를 측정하는 가장 신뢰받는 우주론적 '표준 자'입니다.",
      "deepKnowledge": "슬론 디지털 스카이 서베이(SDSS)와 DESI 프로젝트는 수백만 개 은하의 3차원 위치에서 150Mpc 거리의 은하 집중 피크를 정밀 측정하여 표준 우주 모델을 뒷받침했습니다.",
      "sourceOrTrivia": "Eisenstein et al. (SDSS Collaboration, 2005) Astrophysical Journal 633",
      "wrongOptionsReason": [
        "작스-볼프 효과는 중력 적색편이로 인한 CMB 온도 요동입니다.",
        "SZ 효과는 은하단 고온 전자에 의한 광자 역 콤프턴 산란입니다.",
        "정답입니다. 초기 우주 음파 동결로 형성된 표준 잣대입니다.",
        "라이만 알파 숲은 퀘이사 빛이 통과하는 중성수소 구름의 흡수선 무리입니다."
      ]
    },
    {
      "id": "ultra_sp_8",
      "topic": "우주 & 천문학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "JWST가 발견한 은하 JADES-GS-z14-0 처럼, 빅뱅 후 불과 3억 년 시점에서 예상치를 뛰어넘는 질량과 밝기를 지닌 초기 은하들의 발견이 던진 우주론적 화두는?",
      "options": [
        "암흑물질이 우주에 존재하지 않는다는 실증",
        "일반상대성이론의 완전한 폐기와 수정 뉴턴 역학 채택",
        "우주 배경 복사가 빅뱅의 산물이 아니라는 증거",
        "초기 우주 성단 형성 속도와 초대질량 블랙홀의 초고속 성장 메커니즘"
      ],
      "correctIndex": 3,
      "explanation": "JWST 관측은 우주 초기에 별 형성과 블랙홀 성장이 기존 표준 모델의 이론적 한계보다 훨씬 효율적이고 빨랐음을 보여주어, '직접 붕괴 블랙홀(DCBH)' 등 새로운 가설을 촉발시켰습니다.",
      "deepKnowledge": "에딩턴 한계(Eddington Limit)를 일시적으로 초과하는 초에딩턴 강착이나 최초의 항성족 III(Population III) 별들의 거대 질량이 핵심 연구 주제로 떠올랐습니다.",
      "sourceOrTrivia": "Carniani et al. (JADES Collaboration, 2024) Nature",
      "wrongOptionsReason": [
        "은하 회전과 중력 렌즈 관측은 암흑물질의 존재를 강력히 지지합니다.",
        "일반상대론은 거시 팽창 역학에서 여전히 완벽하게 부합합니다.",
        "우주배경복사의 정밀성은 플랑크 위성 등으로 더욱 확고해졌습니다.",
        "정답입니다. 초기 우주의 초고속 성장이 천체물리학의 핵심 난제로 부상했습니다."
      ]
    },
    {
      "id": "ultra_sp_9",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "태양계 외곽 카이퍼 벨트 너머 약 2,000~100,000 AU 거리에 거대한 구형 껍질 형태로 펼쳐져 있으며, 장주기 혜성들의 고향으로 알려진 천체 집합체는?",
      "options": [
        "오르트 구름 (Oort Cloud)",
        "힐스 구름 (Hills Cloud)",
        "소행성대 (Asteroid Belt)",
        "카이퍼 절벽 (Kuiper Cliff)"
      ],
      "correctIndex": 0,
      "explanation": "오르트 구름은 수조 개에 달하는 얼음과 먼지 미행성체들이 태양 중력에 묶여 구형으로 우주 공간을 둘러싸고 있는 이론적 영역입니다.",
      "deepKnowledge": "인근 항성의 통과나 우리은하 원반의 은하 조석력에 의해 오르트 구름 천체의 궤도가 교란되면 태양계 내부로 낙하하여 장주기 혜성이 됩니다.",
      "sourceOrTrivia": "Oort (1950) Bulletin of the Astronomical Institutes of the Netherlands",
      "wrongOptionsReason": [
        "정답입니다. 장주기 혜성의 거대한 구형 기원지입니다.",
        "힐스 구름은 오르트 구름의 안쪽 원반형 영역을 가리키는 하위 개념입니다.",
        "소행성대는 화성과 목성 사이의 암석형 천체 밀집대입니다.",
        "카이퍼 절벽은 50AU 부근에서 고전적 카이퍼 벨트 천체가 급감하는 경계입니다."
      ]
    },
    {
      "id": "ultra_sp_10",
      "topic": "우주 & 천문학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "태양계 행성 중 평균 밀도가 물(1.0 g/cm³)보다 낮아(약 0.69 g/cm³), 거대한 바다가 있다면 물 위에 뜰 수 있는 행성은?",
      "options": [
        "목성",
        "토성",
        "천왕성",
        "금성"
      ],
      "correctIndex": 1,
      "explanation": "토성은 수소와 헬륨이 주성분인 거대 가스 행성으로, 거대한 부피에 비해 질량이 상대적으로 작아 평균 밀도가 물보다 낮습니다.",
      "deepKnowledge": "토성의 아름다운 고리는 99% 이상이 순수한 물의 얼음 입자들로 이루어져 있으며, 두께는 수십 미터에 불과할 정도로 극도로 얇습니다.",
      "sourceOrTrivia": "NASA Saturn Fact Sheet",
      "wrongOptionsReason": [
        "목성의 평균 밀도는 약 1.33 g/cm³로 물보다 높습니다.",
        "정답입니다. 태양계에서 유일하게 밀도가 물보다 낮은 행성입니다.",
        "천왕성의 평균 밀도는 약 1.27 g/cm³입니다.",
        "금성은 암석형 행성으로 밀도가 약 5.24 g/cm³에 달합니다."
      ]
    },
    {
      "id": "ultra_sp_11",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "태양 중심핵에서 생성된 광자가 복사층의 고밀도 입자들과 끊임없이 충돌(무작위 보행)하여 태양 표면까지 도달하는 데 걸리는 평균 시간은?",
      "options": [
        "약 8분 20초",
        "약 1년",
        "약 10만~100만 년",
        "약 100년"
      ],
      "correctIndex": 2,
      "explanation": "광자는 극도로 밀도가 높은 복사층을 통과하며 수없이 톰슨 산란을 겪기 때문에, 중심핵에서 표면(광구)까지 도달하는 데 10만 년 이상의 시간이 소요됩니다.",
      "deepKnowledge": "반면 핵융합 반응 시 생성되는 중성미자는 물질과 거의 상호작용하지 않고 광속으로 약 2.3초 만에 태양을 빠져나옵니다.",
      "sourceOrTrivia": "Mitalas & Sills (1992) 'On the photon diffusion time scale for the sun'",
      "wrongOptionsReason": [
        "8분 20초는 광구가 방출한 빛이 진공을 지나 지구에 도달하는 시간입니다.",
        "1년은 복사층의 평균 자유 행로를 감안할 때 턱없이 부족한 시간입니다.",
        "정답입니다. 무작위 보행으로 인해 막대한 시간이 걸립니다.",
        "100년 역시 실제 산란 횟수(약 10^21회)에 비추어 지나치게 짧습니다."
      ]
    },
    {
      "id": "ultra_sp_12",
      "topic": "우주 & 천문학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "태양풍과 성간 물질이 충돌하여 태양풍의 속도가 초음속에서 아음속으로 급격히 감속되는 경계면의 명칭은?",
      "options": [
        "자기권계면 (Magnetopause)",
        "태양권계면 (Heliopause)",
        "궁두 충격파 (Bow Shock)",
        "말단 충격면 (Termination Shock)"
      ],
      "correctIndex": 3,
      "explanation": "말단 충격면은 태양풍 입자들이 외부 성간 매질의 저항을 받아 초음속에서 아음속으로 감속되며 밀도와 온도가 급상승하는 1차 경계면입니다.",
      "deepKnowledge": "그 너머의 헬리오시스를 지나 태양풍의 압력과 성간 물질의 압력이 완전히 평형을 이루는 최종 경계가 태양권계면(Heliopause)입니다.",
      "sourceOrTrivia": "Stone et al. (Voyager Science Team, 2005) Science 309",
      "wrongOptionsReason": [
        "자기권계면은 행성 자기장과 태양풍 사이의 경계입니다.",
        "태양권계면은 성간 공간이 시작되는 최종 경계입니다.",
        "궁두 충격파는 태양계가 성간 매질 속을 전진할 때 전방에 형성되는 충격파입니다.",
        "정답입니다. 초음속 태양풍이 아음속으로 감속되는 충격파 면입니다."
      ]
    },
    {
      "id": "ultra_sp_13",
      "topic": "우주 & 천문학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "지구의 조석력으로 인해 달의 자전 주기와 공전 주기가 약 27.3일로 일치하여 항상 같은 면만 보이게 되는 천체역학적 현상은?",
      "options": [
        "조석 고정 (Tidal Locking)",
        "세차 운동",
        "동주기 자전 왜곡",
        "궤도 공명"
      ],
      "correctIndex": 0,
      "explanation": "조석 고정은 모천체의 중력에 의해 위성에 발생한 조석 팽대부가 자전 속도를 늦추어 자전 주기와 공전 주기가 1:1로 일치하게 된 결과입니다.",
      "deepKnowledge": "명왕성과 위성 카론은 서로를 향해 완전히 조석 고정되어 있어 두 천체 모두 서로에게 영원히 같은 면만을 마주보고 공전합니다.",
      "sourceOrTrivia": "Murray & Dermott (1999) Solar System Dynamics",
      "wrongOptionsReason": [
        "정답입니다. 조석 마찰에 의해 자전과 공전이 동기화되는 현상입니다.",
        "세차 운동은 자전축의 방향이 원을 그리며 회전하는 현상입니다.",
        "동주기 자전 왜곡은 공학적 표준 용어가 아닙니다.",
        "궤도 공명은 두 천체의 공전 주기 비율이 정수비를 이루는 현상입니다."
      ]
    },
    {
      "id": "ultra_sp_14",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "질량이 큰 항성이 핵융합을 끝마치고 중력 붕괴를 일으킬 때, 전자가 양성자와 융합하여 반경 약 10~15km에 압축된 초고밀도 천체는?",
      "options": [
        "백색왜성 (White Dwarf)",
        "중성자별 (Neutron Star)",
        "갈색왜성 (Brown Dwarf)",
        "블랙홀 (Black Hole)"
      ],
      "correctIndex": 1,
      "explanation": "중성자별은 중성자의 축퇴압(Neutron Degeneracy Pressure)으로 중력 붕괴를 버텨내는 천체로, 찻숟가락 한 술 분량의 질량이 수억 톤에 달합니다.",
      "deepKnowledge": "중성자별이 톨만-오펜하이머-볼코프(TOV) 한계(약 2.2~3 태양질량)를 초과하면 블랙홀로 붕괴합니다.",
      "sourceOrTrivia": "Baade & Zwicky (1934) 'Remarks on Super-Novae and Cosmic Rays'",
      "wrongOptionsReason": [
        "백색왜성은 전자 축퇴압으로 지탱되며 크기가 지구 정도입니다.",
        "정답입니다. 중성자 축퇴압으로 지탱되는 고밀도 천체입니다.",
        "갈색왜성은 수소 핵융합을 점화하지 못한 준항성 천체입니다.",
        "블랙홀은 사건의 지평선 내부로 시공간이 무한히 수축한 천체입니다."
      ]
    },
    {
      "id": "ultra_sp_15",
      "topic": "우주 & 천문학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1974년 스티븐 호킹이 양자장론과 일반상대론을 결합하여 유도한 정리로, 블랙홀의 사건의 지평선에서 양자 효과로 열복사가 방출되어 증발한다는 이론은?",
      "options": [
        "언루 효과 (Unruh Effect)",
        "카시미르 효과",
        "호킹 복사 (Hawking Radiation)",
        "체렌코프 방사"
      ],
      "correctIndex": 2,
      "explanation": "사건의 지평선 근처에서 진공 양자 요동으로 생성된 입자-반입자 쌍 중 음의 에너지 입자가 흡수되고 양의 에너지 입자가 방출되면서 질량을 잃는 과정입니다.",
      "deepKnowledge": "호킹 복사는 블랙홀 정보 역설(Black Hole Information Paradox)을 촉발하여, 현대 양자 중력 및 홀로그래피 원리 연구의 시발점이 되었습니다.",
      "sourceOrTrivia": "Hawking (1974) 'Black hole explosions?', Nature 248",
      "wrongOptionsReason": [
        "언루 효과는 가속 관찰자가 진공을 열적 복사로 감지하는 현상입니다.",
        "카시미르 효과는 진공 전자기 요동에 의한 금속판 인력입니다.",
        "정답입니다. 블랙홀의 양자 열복사 현상입니다.",
        "체렌코프 방사는 매질 내 빛의 위상속도보다 빠른 하전입자가 내는 푸른빛입니다."
      ]
    },
    {
      "id": "ultra_sp_16",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "태양 중심부의 강력한 자기력선 다발이 표면으로 분출하여 대류를 억제함으로써 표면 온도가 주위보다 낮아 어둡게 보이는 영역은?",
      "options": [
        "코로나 (Corona)",
        "홍염 (Prominence)",
        "플레어 (Solar Flare)",
        "흑점 (Sunspot)"
      ],
      "correctIndex": 3,
      "explanation": "흑점은 태양 내부 자기력선 다발이 대류를 억제하여 표면 온도(약 4,200K)가 주위 광구(약 5,800K)보다 낮아 상대적으로 어둡게 보이는 지점입니다.",
      "deepKnowledge": "흑점 수는 약 11년 주기로 극대기와 극소기를 반복하며, 이는 태양 내부 자기 다이내모의 주기적 극성 반전과 직결되어 있습니다.",
      "sourceOrTrivia": "Schwabe (1844) Solar Cycle Discoveries",
      "wrongOptionsReason": [
        "코로나는 태양 외곽의 수백만 도에 달하는 희박한 고온 대기층입니다.",
        "홍염은 채층 바깥 코로나로 솟구쳐 오르는 거대한 가스 기둥입니다.",
        "플레어는 자기 에너지 폭발로 전자기파와 하전입자가 방출되는 현상입니다.",
        "정답입니다. 강한 자기장에 의한 대류 억제로 온도가 낮은 영역입니다."
      ]
    },
    {
      "id": "ultra_sp_17",
      "topic": "우주 & 천문학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "찬드라세카르 한계(약 1.44 태양질량)에 도달한 탄소-산소 백색왜성이 폭주 열핵반응을 일으켜 폭발하여 최대 광도가 일정해 우주 표준 촉광으로 쓰이는 초신성은?",
      "options": [
        "Ia형 초신성 (Type Ia Supernova)",
        "II형 초신성",
        "Ib형 초신성",
        "Ic형 초신성"
      ],
      "correctIndex": 0,
      "explanation": "Ia형 초신성은 백색왜성의 질량 한계 도달 폭발이라는 물리적 기작이 동일하여 최고 광도가 거의 일정하므로 우주 거리를 측정하는 표준 촉광이 됩니다.",
      "deepKnowledge": "1998년 먼 Ia형 초신성 관측을 통해 우주가 가속 팽창하고 있음이 증명되어 2011년 노벨물리학상이 수여되었습니다.",
      "sourceOrTrivia": "Perlmutter et al. (1999) & Riess et al. (1998) Astrophysical Journal",
      "wrongOptionsReason": [
        "정답입니다. 찬드라세카르 한계 백색왜성 열핵폭발 초신성입니다.",
        "II형 초신성은 수소 흡수선이 나타나는 거대 항성의 핵 붕괴형 초신성입니다.",
        "Ib형 초신성은 수소층을 잃어버린 헬륨 중심핵 붕괴 초신성입니다.",
        "Ic형 초신성은 수소와 헬륨층을 모두 날려버린 거대별 붕괴 초신성입니다."
      ]
    },
    {
      "id": "ultra_sp_18",
      "topic": "우주 & 천문학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "달이 태양과 지구 사이에 일직선으로 놓여 태양의 전체 또는 일부를 가리는 천문 현상은?",
      "options": [
        "월식 (Lunar Eclipse)",
        "일식 (Solar Eclipse)",
        "식쌍성",
        "행성 통과"
      ],
      "correctIndex": 1,
      "explanation": "일식은 달의 그림자가 지구 표면에 드리워져 태양이 가려지는 현상으로, 개기일식과 금환일식이 있습니다.",
      "deepKnowledge": "태양은 달보다 약 400배 크지만 거리도 약 400배 멀어 지구에서 보는 두 천체의 겉보기 크기(약 0.5도)가 일치하여 개기일식이 일어납니다.",
      "sourceOrTrivia": "Espenak & Meeus (2006) NASA Five Millennium Canon of Solar Eclipses",
      "wrongOptionsReason": [
        "월식은 지구 그림자가 달을 가리는 현상입니다.",
        "정답입니다. 달이 태양면을 가리는 일식 현상입니다.",
        "식쌍성은 두 별이 서로를 가리며 밝기가 변하는 항성계입니다.",
        "행성 통과는 수성이나 금성이 태양면을 점처럼 지나가는 현상입니다."
      ]
    },
    {
      "id": "ultra_sp_19",
      "topic": "우주 & 천문학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "태양과 지구의 중력과 원심력이 균형을 이루는 5개의 라그랑주 점 중, 제임스 웹 우주망원경(JWST)이 위치한 곳은?",
      "options": [
        "라그랑주 L1 점",
        "라그랑주 L3 점",
        "라그랑주 L2 점",
        "라그랑주 L4 점"
      ],
      "correctIndex": 2,
      "explanation": "L2 점은 지구로부터 태양 반대 방향으로 약 150만 km 떨어진 곳으로, 차광판으로 태양빛과 지구 열을 한꺼번에 가릴 수 있어 심우주 적외선 관측에 최적입니다.",
      "deepKnowledge": "L1 점(지구와 태양 사이 150만 km)에는 태양 상시 관측 위성인 SOHO가 위치합니다.",
      "sourceOrTrivia": "Lagrange (1772) 'Essai sur le Problème des Trois Corps'",
      "wrongOptionsReason": [
        "L1은 지구와 태양 사이에 위치하여 태양 관측에 쓰입니다.",
        "L3은 태양 너머 정반대편에 위치하는 이론적 점입니다.",
        "정답입니다. JWST가 지구 그림자 너머 헤일로 궤도를 도는 L2 점입니다.",
        "L4는 공전 궤도상 60도 앞선 지점에 위치합니다."
      ]
    },
    {
      "id": "ultra_sp_20",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "태양계는 우리은하 중심 초대질량 블랙홀(궁수자리 A*)로부터 약 얼마의 거리에 위치하고 있는가?",
      "options": [
        "약 250만 광년",
        "약 2,600광년",
        "약 260,000광년",
        "약 26,000광년 (약 8 kpc)"
      ],
      "correctIndex": 3,
      "explanation": "태양계는 우리은하 원반의 오리온 팔에 위치하며, 은하 중심으로부터 약 2만 6천 광년(8.2 킬로파섹) 떨어져 있습니다.",
      "deepKnowledge": "태양계는 초속 약 220km의 속도로 은하 중심을 공전하며, 은하를 한 바퀴 도는 데 약 2억 3천만 년이 걸립니다.",
      "sourceOrTrivia": "Gravity Collaboration (2019) Astronomy & Astrophysics",
      "wrongOptionsReason": [
        "250만 광년은 안드로메다 은하(M31)까지의 거리입니다.",
        "2,600광년은 은하 중심까지 가기에는 너무 가깝습니다.",
        "260,000광년은 우리은하 가시광선 원반을 훌쩍 넘는 외곽입니다.",
        "정답입니다. 우리은하 중심과의 실측 거리입니다."
      ]
    },
    {
      "id": "ultra_sp_21",
      "topic": "우주 & 천문학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "빅뱅 직후 급팽창 시기의 양자 요동이 시공간 자체를 뒤흔들며 발생하여 CMB의 B-모드 편광 패턴에 흔적을 남기는 태초의 파동은?",
      "options": [
        "원초 중력파 (Primordial Gravitational Waves)",
        "중성미자 배경 복사 (CNB)",
        "원초 블랙홀 호킹 복사",
        "우주 끈(Cosmic String) 에너지 방출"
      ],
      "correctIndex": 0,
      "explanation": "원초 중력파는 급팽창 이론을 직접 입증할 결정적 증거로, 우주 배경 복사 광자의 산란 과정에서 B-모드 편광을 형성합니다.",
      "deepKnowledge": "현재 차세대 지상 및 우주 전파 망원경들이 B-모드 편광의 미세 신호를 분리하기 위한 관측을 진행하고 있습니다.",
      "sourceOrTrivia": "Planck and BICEP2/Keck Array Collaborations (2015) Phys. Rev. Lett. 114",
      "wrongOptionsReason": [
        "정답입니다. 급팽창 이론을 검증할 궁극의 물리적 신호입니다.",
        "CNB는 대폭발 1초 후 분리된 원초 중성미자들의 배경 복사입니다.",
        "원초 블랙홀 호킹 복사는 점광원 형태의 고에너지 감마선 신호입니다.",
        "우주 끈은 시공간 위상 결함에 관한 별개의 가설입니다."
      ]
    },
    {
      "id": "ultra_sp_22",
      "topic": "우주 & 천문학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "소행성대에서 가장 거대한 천체로, 구형의 형상을 유지하여 소행성에서 왜소행성으로 재분류된 천체는?",
      "options": [
        "베스타 (Vesta)",
        "세레스 (Ceres)",
        "히기에이아 (Hygiea)",
        "팔라스 (Pallas)"
      ],
      "correctIndex": 1,
      "explanation": "세레스는 소행성대 최대 천체(직경 약 940km)로, 2006년 국제천문연맹에 의해 왜소행성 지위를 부여받았습니다.",
      "deepKnowledge": "NASA 던 탐사선 관측 결과 표면 오카토르 충돌구에서 염류가 분출된 밝은 점들과 지하 염수 해양의 흔적이 발견되었습니다.",
      "sourceOrTrivia": "Russell et al. (Dawn Science Team, 2016) Science",
      "wrongOptionsReason": [
        "베스타는 소행성대에서 두 번째로 큰 소행성입니다.",
        "정답입니다. 소행성대 유일의 왜소행성입니다.",
        "히기에이아는 4번째 크기의 소행성입니다.",
        "팔라스는 3번째 크기의 고경사각 소행성입니다."
      ]
    },
    {
      "id": "ultra_sp_23",
      "topic": "우주 & 천문학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "외계행성이 모항성의 앞면을 통과할 때 항성의 겉보기 밝기가 주기적으로 어두워지는 현상을 포착하는 외계행성 탐색 기법은?",
      "options": [
        "시선속도법 (도플러 분광법)",
        "미세중력렌즈법 (Microlensing)",
        "식현상 관측법 (트랜싯 기법, Transit Method)",
        "직접 결상법 (Direct Imaging)"
      ],
      "correctIndex": 2,
      "explanation": "트랜싯(식) 기법은 케플러 및 TESS 우주망원경이 수천 개 이상의 외계행성을 발견하는 데 가장 큰 기여를 한 방법입니다.",
      "deepKnowledge": "항성의 밝기 감소율은 행성과 항성의 단면적 비율에 정확히 비례하므로 행성의 반지름을 정밀하게 결정할 수 있습니다.",
      "sourceOrTrivia": "Charbonneau et al. (2000) Astrophysical Journal Letters 529",
      "wrongOptionsReason": [
        "시선속도법은 항성의 스펙트럼 흔들림을 측정해 행성의 최소 질량을 구합니다.",
        "미세중력렌즈법은 배경 별빛이 일시적으로 증폭되는 현상을 이용합니다.",
        "정답입니다. 케플러 망원경의 주력 발견 기법인 트랜싯법입니다.",
        "직접 결상법은 항성빛을 차단하고 행성을 직접 사진 찍는 방법입니다."
      ]
    },
    {
      "id": "ultra_sp_24",
      "topic": "우주 & 천문학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "우주에 생명체가 번성할 조건이 충분함에도 불구하고 외계 지적 생명체의 명백한 증거나 접촉이 전혀 존재하지 않는 모순을 지칭하는 역설은?",
      "options": [
        "올베르스의 역설 (Olbers' Paradox)",
        "쌍둥이 역설",
        "할아버지 역설",
        "페르미 역설 (Fermi Paradox)"
      ],
      "correctIndex": 3,
      "explanation": "엔리코 페르미가 '다들 어디에 있는 거지?'라고 질문한 데서 유래한 역설로, 대여과기 가설 등이 제시되고 있습니다.",
      "deepKnowledge": "로빈 핸슨은 생명이 원시 단계에서 항성 간 문명으로 도약하는 과정에 극복하기 어려운 '대여과기(Great Filter)'가 존재한다고 설명했습니다.",
      "sourceOrTrivia": "Hanson (1998) 'The Great Filter - Are We Almost Past It?'",
      "wrongOptionsReason": [
        "올베르스의 역설은 밤하늘이 왜 어두운가를 묻는 역설입니다.",
        "쌍둥이 역설은 특수상대성이론의 시간 지연 사고실험입니다.",
        "할아버지 역설은 시간 여행의 인과율 모순에 관한 역설입니다.",
        "정답입니다. 외계 지적 생명체 부재의 수수께끼인 페르미 역설입니다."
      ]
    },
    {
      "id": "ultra_sp_25",
      "topic": "우주 & 천문학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "2019년 EHT 협력단이 인류 최초로 그림자를 직접 촬영하여 시각적으로 증명한 M87 은하 중심 초대질량 블랙홀의 대략적인 질량은?",
      "options": [
        "태양 질량의 약 65억 배",
        "태양 질량의 약 10만 배",
        "태양 질량의 약 1,000억 배",
        "태양 질량의 약 400만 배"
      ],
      "correctIndex": 0,
      "explanation": "M87* 블랙홀은 태양 질량의 약 65억 배에 달하는 거대 블랙홀로, 전파 간섭계 네트워크를 통해 완벽한 광자 고리와 그림자가 실측되었습니다.",
      "deepKnowledge": "우리은하 중심의 궁수자리 A*의 질량은 약 400만 태양질량으로, M87*에 비해 약 1,500배 이상 가볍습니다.",
      "sourceOrTrivia": "Event Horizon Telescope Collaboration (2019) Astrophysical Journal Letters 875",
      "wrongOptionsReason": [
        "정답입니다. EHT가 인류 최초로 직접 촬영한 M87* 블랙홀의 실측 질량입니다.",
        "10만 배는 중간질량 블랙홀(IMBH) 범주에 속합니다.",
        "1,000억 배는 우주에서 알려진 최대급 극대질량 블랙홀의 이론적 상한에 가깝습니다.",
        "태양 질량 400만 배는 우리은하 중심 블랙홀(궁수자리 A*)의 질량입니다."
      ]
    }
  ],
  "physics_quantum": [
    {
      "id": "ultra_phy_1",
      "topic": "물리학 & 양자역학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "빛(전자기파)이 금속 표면에 부딪힐 때 전자가 튀어나오는 광전효과를 설명하기 위해, 빛이 연속적인 파동이 아닌 에너지 알갱이(광양자, Photon)로 구성되어 있다고 제안한 물리학자는?",
      "options": [
        "알베르트 아인슈타인",
        "막스 플랑크",
        "닐스 보어",
        "제임스 클러크 맥스웰"
      ],
      "correctIndex": 0,
      "explanation": "아인슈타인은 1905년 광양자설(Photon Hypothesis)을 발표하여 빛의 입자성을 입증하고 광전효과를 완벽히 설명하여 1921년 노벨물리학상을 수상했습니다.",
      "deepKnowledge": "금속에서 전자를 떼어내는 데 필요한 최소 에너지를 일함수(Work Function, W(일함수))라 하며, 빛의 진동수가 한계 진동수보다 커야만 전자가 방출됩니다.",
      "sourceOrTrivia": "Einstein (1905) Annalen der Physik",
      "wrongOptionsReason": [
        "정답입니다. 광양자설로 광전효과를 설명했습니다.",
        "플랑크는 흑체 복사 연구에서 에너지 양자화 개념을 최초로 도입했습니다.",
        "보어는 양자화된 원자 모형을 제시했습니다.",
        "맥스웰은 빛이 전자기파동임을 방정식으로 밝혔습니다."
      ]
    },
    {
      "id": "ultra_phy_2",
      "topic": "물리학 & 양자역학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "뉴턴의 세 가지 운동 법칙 중, '외부에서 알짜힘이 작용하지 않는 한 정지해 있는 물체는 계속 정지해 있고, 운동하는 물체는 등속 직선 운동을 유지한다'는 법칙은?",
      "options": [
        "가속도의 법칙 (제2법칙)",
        "관성의 법칙 (제1법칙)",
        "작용·반작용의 법칙 (제3법칙)",
        "만유인력의 법칙"
      ],
      "correctIndex": 1,
      "explanation": "뉴턴 제1법칙은 갈릴레이의 사고실험을 바탕으로 물체가 원래의 운동 상태를 유지하려는 고유 성질인 '관성(Inertia)'을 정의합니다.",
      "deepKnowledge": "이 법칙은 관성계(Inertial Reference Frame)가 무엇인지를 규정하는 기준 틀 역할을 합니다.",
      "sourceOrTrivia": "Newton (1687) Philosophiæ Naturalis Principia Mathematica",
      "wrongOptionsReason": [
        "제2법칙은 F=ma로 힘과 가속도의 관계를 나타냅니다.",
        "정답입니다. 물체의 운동 상태 유지 성질인 관성의 법칙입니다.",
        "제3법칙은 힘이 항상 쌍으로 작용함을 나타냅니다.",
        "만유인력 법칙은 질량을 가진 물체 사이의 인력을 기술합니다."
      ]
    },
    {
      "id": "ultra_phy_3",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "드브로이의 물질파 가설에 따라 운동량 p를 가진 모든 입자가 지니는 파장(λ(파장))을 나타내는 올바른 공식은? (단, h는 플랑크 상수)",
      "options": [
        "λ = p / h",
        "λ = h · p",
        "λ = h / p",
        "λ = h / c"
      ],
      "correctIndex": 2,
      "explanation": "루이 드브로이는 파동이 입자성을 갖는다면 입자도 파동성을 가져야 한다고 주장하며 물질파 파장 λ = h / p를 제안했습니다.",
      "deepKnowledge": "이 가설은 1927년 데이비슨-거머 실험에서 니켈 결정 표면에 부딪힌 전자가 회절 무늬를 형성하는 것이 확인되면서 실증되었습니다.",
      "sourceOrTrivia": "de Broglie (1924) Doctoral Thesis / Davisson & Germer (1927) Phys. Rev.",
      "wrongOptionsReason": [
        "역수 형태는 잘못된 관계입니다.",
        "곱의 형태는 차원 분석상 파장의 단위가 성립하지 않습니다.",
        "정답입니다. 물질파 파장은 플랑크 상수를 운동량으로 나눈 값입니다.",
        "h/c는 운동량이 광속일 때의 특수 형태가 아닙니다."
      ]
    },
    {
      "id": "ultra_phy_4",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "양자역학에서 한 입자의 위치 측정 불확정성(Δx)과 운동량 측정 불확정성(Δp)의 곱이 특정 한계 이상이어야 한다는 원리는?",
      "options": [
        "파울리 배타 원리",
        "에너지 보존 법칙",
        "보어의 상보성 원리",
        "하이젠베르크 불확정성 원리 (Uncertainty Principle)"
      ],
      "correctIndex": 3,
      "explanation": "하이젠베르크 불확정성 원리(Δx · Δp ≥ ℏ/2)는 입자의 파동함수 특성상 위치와 운동량이 교환되지 않는 연산자 관계에서 기인하는 본질적 한계입니다.",
      "deepKnowledge": "이 원리는 측정 장비의 정밀도 문제가 아니라 양자 상태 자체의 고유한 푸리에 변환 상의 켤레 물리량 성질입니다.",
      "sourceOrTrivia": "Heisenberg (1927) Zeitschrift für Physik 43",
      "wrongOptionsReason": [
        "파울리 배타 원리는 동일 양자 상태에 두 페르미온이 존재할 수 없다는 원리입니다.",
        "에너지 보존 법칙은 계의 총 에너지가 일정하다는 법칙입니다.",
        "상보성 원리는 파동과 입자 특성이 상호 보완적이라는 철학적 해석입니다.",
        "정답입니다. 켤레 변수 간의 동시 측정 한계를 기술한 원리입니다."
      ]
    },
    {
      "id": "ultra_phy_5",
      "topic": "물리학 & 양자역학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "극저온에서 특정 물질의 전기저항이 정확히 0이 되고, 물질 내부의 자기력선을 외부로 완전히 밀어내는 완전 반자성 현상은?",
      "options": [
        "마이스너 효과 (Meissner Effect)",
        "홀 효과 (Hall Effect)",
        "제벡 효과 (Seebeck Effect)",
        "콘도 효과 (Kondo Effect)"
      ],
      "correctIndex": 0,
      "explanation": "마이스너 효과는 초전도체가 초전도 임계온도 이하로 냉각될 때 내부 자기장(B(자기장))이 0이 되어 외부 자기력선을 밖으로 완전히 배척하는 현상입니다.",
      "deepKnowledge": "바딘, 쿠퍼, 슈리퍼(BCS 이론)는 격자 진동(음향양자, 포논)을 매개로 전자들이 쿠퍼 쌍(Cooper pair)을 이루어 보손처럼 응축함으로써 저항 없는 전류가 흐른다고 설명했습니다.",
      "sourceOrTrivia": "Meissner & Ochsenfeld (1933) Naturwissenschaften 21",
      "wrongOptionsReason": [
        "정답입니다. 초전도체의 완전 반자성을 나타내는 마이스너 효과입니다.",
        "홀 효과는 도선에 자기장을 걸었을 때 측면으로 전압이 걸리는 현상입니다.",
        "제벡 효과는 온도 차이에 의해 전압이 발생하는 열전 현상입니다.",
        "콘도 효과는 자성 불순물에 의해 저온에서 전기저항이 상승하는 현상입니다."
      ]
    },
    {
      "id": "ultra_phy_6",
      "topic": "물리학 & 양자역학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "2022년 노벨물리학상을 수상한 알랭 아스페, 존 클라우저, 안톤 차일링거 교수가 실험적으로 입증한 벨의 부등식 위배가 함의하는 물리적 의미는?",
      "options": [
        "양자역학의 파동함수 붕괴가 오류라는 증명",
        "아인슈타인이 주장한 '국소 실재론(Local Realism)'의 기각",
        "빛보다 빠른 정보 전송이 실제로 가능하다는 발견",
        "모든 쿼크가 실재하지 않는다는 증명"
      ],
      "correctIndex": 1,
      "explanation": "벨 부등식의 실험적 위배는 물리량이 측정 전부터 결정되어 있고 빛보다 빠른 상호작용이 없다는 '국소 숨은 변수 이론'이 자연계에서 성립하지 않음을 명백히 밝혔습니다.",
      "deepKnowledge": "이는 양자 얽힘이 시공간을 초월하는 비국소적(Non-local) 상관관계를 가지며, 우주가 국소 실재론적이지 않음을 실증한 현대 물리학의 기념비적 사건입니다.",
      "sourceOrTrivia": "Aspect et al. (1982) Phys. Rev. Lett. 49 / Nobel Prize in Physics (2022)",
      "wrongOptionsReason": [
        "파동함수 붕괴 이론 자체의 오류를 뜻하지 않습니다.",
        "정답입니다. 국소 실재론이 부정되고 양자역학의 비국소성이 입증되었습니다.",
        "양자 얽힘을 이용해도 초광속 정보 전송(통신)은 불가능합니다.",
        "쿼크의 존재 유무와는 무관한 양자 기초론 실험입니다."
      ]
    },
    {
      "id": "ultra_phy_7",
      "topic": "물리학 & 양자역학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "물리학에서 '물리계의 작용(Action)에 연속적인 대칭성이 존재하면, 그에 대응하는 보존 법칙이 반드시 존재한다'는 수학적 정리는?",
      "options": [
        "CPT 정리",
        "골드스톤의 정리 (Goldstone Theorem)",
        "뇌터의 정리 (Noether's Theorem)",
        "윅의 정리 (Wick's Theorem)"
      ],
      "correctIndex": 2,
      "explanation": "에미 뇌터(Emmy Noether)가 1918년 증명한 이 정리는 시간 병진 대칭→에너지 보존, 공간 병진 대칭→운동량 보존, 회전 대칭→각운동량 보존 법칙을 완벽히 연결했습니다.",
      "deepKnowledge": "현대 게이지 이론(Gauge Theory)의 근간이 되는 U(1) 게이지 대칭성은 전하 보존 법칙에 대응합니다.",
      "sourceOrTrivia": "Noether (1918) 'Invariante Variationsprobleme'",
      "wrongOptionsReason": [
        "CPT 정리는 전하, 패리티, 시간 역전 동시 변환의 불변성입니다.",
        "골드스톤 정리는 연속 대칭성이 자발적으로 깨질 때 질량 없는 보손이 생김을 보입니다.",
        "정답입니다. 대칭성과 보존 법칙의 심오한 연결 고리인 뇌터의 정리입니다.",
        "윅의 정리는 양자장론에서 시간 순서 곱을 연산자 축약으로 전개하는 기법입니다."
      ]
    },
    {
      "id": "ultra_phy_8",
      "topic": "물리학 & 양자역학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "진공 중에 아무것도 없는 두 도체 금속판을 나노미터 단위로 극도로 가깝게 배치할 때, 진공 전자기 양자 요동의 모드 제한으로 인해 두 판 사이에 끌어당기는 힘이 발생하는 현상은?",
      "options": [
        "제이만 효과",
        "아하로노프-봄 효과",
        "슈타르크 효과",
        "카시미르 효과 (Casimir Effect)"
      ],
      "correctIndex": 3,
      "explanation": "카시미르 효과는 금속판 사이의 진공 영점 에너지가 판 바깥의 진공 영점 에너지보다 작아져, 진공 양자 요동의 압력 차이로 인력이 작용하는 순수 양자장론적 현상입니다.",
      "deepKnowledge": "카시미르 힘은 두 금속판 사이 거리의 4제곱에 반비례하여 급격히 증가하므로, 두 판의 거리가 나노미터 수준으로 가까워질수록 서로를 강하게 끌어당깁니다.",
      "sourceOrTrivia": "Casimir (1948) Proc. K. Ned. Akad. Wet. 51",
      "wrongOptionsReason": [
        "제이만 효과는 외부 자기장에 의해 원자 스펙트럼선이 분필되는 현상입니다.",
        "아하로노프-봄 효과는 자기장이 0인 영역에서도 벡터 퍼텐셜이 전자 위상에 영향을 주는 현상입니다.",
        "슈타르크 효과는 외부 전기장에 의해 원자 스펙트럼선이 갈라지는 현상입니다.",
        "정답입니다. 진공 영점 에너지 차이에 의한 카시미르 효과입니다."
      ]
    },
    {
      "id": "ultra_phy_9",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "열역학적 고립계에서 자발적인 변화가 일어날 때, 무질서도의 척도인 엔트로피는 결코 감소하지 않는다는 열역학 법칙은?",
      "options": [
        "열역학 제2법칙",
        "열역학 제1법칙",
        "열역학 제0법칙",
        "열역학 제3법칙"
      ],
      "correctIndex": 0,
      "explanation": "열역학 제2법칙은 고립계의 총 엔트로피가 시간이 지남에 따라 증가하거나 일정하며, 열은 스스로 저온에서 고온으로 이동할 수 없음을 규정합니다.",
      "deepKnowledge": "루트비히 볼츠만은 엔트로피를 계가 가질 수 있는 미시적 미시상태 수의 로그에 볼츠만 상수를 곱한 값으로 통계역학적으로 재정의하여, 확률이 높은 무질서한 상태로 자연이 나아감을 증명했습니다.",
      "sourceOrTrivia": "Clausius (1865) & Boltzmann (1877)",
      "wrongOptionsReason": [
        "정답입니다. 비가역성과 엔트로피 증가를 다루는 제2법칙입니다.",
        "제1법칙은 에너지 보존 법칙을 다룹니다.",
        "제0법칙은 열적 평형의 이행성(온도의 정의)을 다룹니다.",
        "제3법칙은 절대영도(0K)에서 순수한 결정의 엔트로피가 0이 됨을 다룹니다."
      ]
    },
    {
      "id": "ultra_phy_10",
      "topic": "물리학 & 양자역학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "아인슈타인의 특수 상대성 이론에 따르면, 모든 관성계에서 진공 중의 빛의 속력(c(광속))은 어떠한 특성을 가지는가?",
      "options": [
        "광원의 이동 속도에 비례하여 증가한다",
        "관찰자의 운동 속도에 관계없이 항상 일정하다",
        "진공의 온도에 따라 변화한다",
        "관찰자가 다가갈수록 빠르게 측정된다"
      ],
      "correctIndex": 1,
      "explanation": "특수 상대성 이론의 제2공리인 '광속 불변의 원리'에 따르면, 진공 중 빛의 속도는 광원이나 관찰자의 운동 상태와 무관하게 항상 약 초속 30만 km로 일정합니다.",
      "deepKnowledge": "이 광속 불변성으로 인해 서로 다른 관성계의 관찰자 사이에서 시간 지연(Time Dilation)과 길이 수축(Length Contraction)이 필연적으로 발생합니다.",
      "sourceOrTrivia": "Einstein (1905) 'Zur Elektrodynamik bewegter Körper'",
      "wrongOptionsReason": [
        "고전 갈릴레이 변환의 속도 덧셈은 빛에 적용되지 않습니다.",
        "정답입니다. 광속은 모든 관성계에서 불변입니다.",
        "진공에는 매질이 없으므로 온도 개념이 속도에 영향을 주지 않습니다.",
        "다가가더라도 빛의 속도는 일정하며 도플러 적색/청색편이(진동수 변화)만 일어납니다."
      ]
    },
    {
      "id": "ultra_phy_11",
      "topic": "물리학 & 양자역학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "약한 상호작용(Weak Interaction)에서 공간 반전(Parity, 좌우 대칭성)이 보존되지 않는다는 사실을 1956년 코발트-60 방사성 붕괴 실험으로 증명한 여성 물리학자는?",
      "options": [
        "마리 퀴리",
        "리제 마이트너",
        "우젠슝 (Chien-Shiung Wu)",
        "로절린드 프랭클린"
      ],
      "correctIndex": 2,
      "explanation": "우젠슝 교수는 리정다오와 양전닝의 이론적 제안을 극저온 코발트-60의 베타 붕괴 정밀 실험으로 구현하여 약한 상호작용에서 패리티 대칭성이 완전히 깨짐을 입증했습니다.",
      "deepKnowledge": "이 실험으로 리정다오와 양전닝은 1957년 노벨물리학상을 수상했으나, 실험을 성공시킨 우젠슝 교수는 아쉽게 노벨상 수상에서 제외되어 역사적 논란이 되었습니다.",
      "sourceOrTrivia": "Wu et al. (1957) Physical Review 105, 1413",
      "wrongOptionsReason": [
        "마리 퀴리는 라듐과 폴로늄을 발견한 방사능 연구의 개척자입니다.",
        "리제 마이트너는 핵분열 이론을 정립한 물리학자입니다.",
        "정답입니다. 패리티 비보존을 실증한 우젠슝 교수입니다.",
        "로절린드 프랭클린은 DNA X선 회절 사진(Photo 51)을 촬영한 결정학자입니다."
      ]
    },
    {
      "id": "ultra_phy_12",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "보손(Boson) 입자 기체를 절대영도에 가깝게 냉각시켰을 때, 수많은 입자들이 가장 낮은 단일 양자 바닥상태로 응축되어 거시적 양자 파동처럼 행동하는 상태는?",
      "options": [
        "플라스마 (Plasma)",
        "초임계 유체",
        "페르미 액체",
        "보스-아인슈타인 응축 (Bose-Einstein Condensate, BEC)"
      ],
      "correctIndex": 3,
      "explanation": "보스-아인슈타인 응축은 스핀이 정수인 보손 입자들이 파울리 배타 원리를 받지 않고 모두 기저 상태로 떨어져 거대한 단일 물질파를 형성하는 기이한 양자 물질 상태입니다.",
      "deepKnowledge": "1995년 에릭 코넬과 칼 위먼은 루비듐-87 원자를 170나노켈빈까지 냉각시켜 인류 최초로 BEC를 구현하여 2001년 노벨물리학상을 받았습니다.",
      "sourceOrTrivia": "Anderson et al. (1995) Science 269",
      "wrongOptionsReason": [
        "플라스마는 초고온에서 전자와 이온이 분리된 전하 기체 상태입니다.",
        "초임계 유체는 임계온도와 임계압력 이상에서 기체와 액체의 구분이 사라진 상태입니다.",
        "페르미 액체는 상호작용하는 페르미온 계의 저온 거동 모델입니다.",
        "정답입니다. 극저온 보손의 거시적 양자 응축인 BEC입니다."
      ]
    },
    {
      "id": "ultra_phy_13",
      "topic": "물리학 & 양자역학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "도선에 전류가 흐를 때 도선 주변에 동심원 형태의 자기장이 형성되는 방향을 결정하는 법칙은?",
      "options": [
        "앙페르의 오른나사 법칙",
        "쿨롱의 법칙",
        "패러데이 전자기 유도 법칙",
        "스넬의 굴절 법칙"
      ],
      "correctIndex": 0,
      "explanation": "오른손 엄지손가락을 전류의 방향으로 향하게 할 때, 나머지 네 손가락이 도선을 감아쥐는 방향이 유도 자기장의 방향이 됩니다.",
      "deepKnowledge": "앙페르 회로 법칙(Ampère's Circuital Law)은 이를 수학적으로 정식화한 것으로, 맥스웰 방정식의 기초가 되었습니다.",
      "sourceOrTrivia": "Ampère (1826) Théorie des phénomènes électrodynamiques",
      "wrongOptionsReason": [
        "정답입니다. 전류와 자기장 방향의 기하학적 관계를 나타내는 오른나사 법칙입니다.",
        "쿨롱의 법칙은 두 전하 사이의 정전기력을 다룹니다.",
        "패러데이 법칙은 자기선속의 변화가 유도기전력을 만든다는 법칙입니다.",
        "스넬의 법칙은 빛이 매질을 통과할 때의 굴절각 법칙입니다."
      ]
    },
    {
      "id": "ultra_phy_14",
      "topic": "물리학 & 양자역학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "양자역학에서 미지의 임의 양자 상태 |ψ⟩(양자 상태)를 정보의 손실 없이 완벽하게 복제하여 독립된 동일한 상태로 만드는 물리적 변환이 불가능하다는 정리는?",
      "options": [
        "벨의 정리 (Bell's Theorem)",
        "무복제 정리 (No-Cloning Theorem)",
        "골드스톤의 정리",
        "콜먼-만둘라 정리"
      ],
      "correctIndex": 1,
      "explanation": "보츠와 주렉(Wootters & Zurek)이 1982년 증명한 무복제 정리는 양자역학의 유니터리성(선형성)으로 인해 임의의 중첩 상태를 복제할 수 없음을 규명했습니다.",
      "deepKnowledge": "이 정리는 양자 암호통신(QKD)의 절대적 보안성(도청자가 복제본을 만들 수 없음)을 보장하는 핵심 물리학적 원리입니다.",
      "sourceOrTrivia": "Wootters & Zurek (1982) Nature 299, 802-803",
      "wrongOptionsReason": [
        "벨의 정리는 국소 실재론과 양자역학의 통계적 차이를 다룹니다.",
        "정답입니다. 양자 상태 복제의 불가능성을 증명한 무복제 정리입니다.",
        "골드스톤 정리는 자발적 대칭성 깨짐과 무질량 입자 생성에 관한 정리입니다.",
        "콜먼-만둘라 정리는 시공간 대칭과 내부 대칭의 비자명 결합 제한 정리입니다."
      ]
    },
    {
      "id": "ultra_phy_15",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "빛이 진공에서 굴절률 n인 매질로 들어갈 때, 빛의 진행 속도와 파장은 진공에 비해 어떻게 변하는가?",
      "options": [
        "속도와 파장 모두 변하지 않는다",
        "속도는 감소하지만 파장은 증가한다",
        "속도와 파장 모두 굴절률에 반비례하여 1/n로 감소한다",
        "진동수와 파장이 모두 굴절률(n)배만큼 증가한다"
      ],
      "correctIndex": 2,
      "explanation": "빛이 매질로 들어가면 진동수는 변하지 않지만, 진행 속도가 굴절률(n)에 반비례하여 감소하므로 파장도 같은 비율로 짧아집니다.",
      "deepKnowledge": "굴절률은 매질 내 원자들의 전자구름과 전자기파의 상호작용으로 인해 유효 위상속도가 늦어지는 광학적 척도입니다.",
      "sourceOrTrivia": "Hecht (2017) Optics, 5th Edition",
      "wrongOptionsReason": [
        "매질 내에서 빛의 속도와 파장은 반드시 변화합니다.",
        "파장은 속도 감소에 비례하여 반드시 감소합니다.",
        "정답입니다. 진동수는 일정하고 속도와 파장이 굴절률(n)에 반비례하여 함께 감소합니다.",
        "진동수는 광원의 고유 특성으로 매질이 바뀌어도 결코 변하지 않습니다."
      ]
    },
    {
      "id": "ultra_phy_16",
      "topic": "물리학 & 양자역학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "2012년 유럽입자물리연구소(CERN)의 대형강입자충돌기(LHC)에서 발견되어 소립자들에게 질량을 부여하는 메커니즘의 실체를 밝힌 기본 입자는?",
      "options": [
        "중력자 (Graviton)",
        "톱 쿼크 (Top Quark)",
        "글루온 (Gluon)",
        "힉스 보손 (Higgs Boson)"
      ],
      "correctIndex": 3,
      "explanation": "힉스 보손은 우주를 채우고 있는 힉스 장(Higgs Field)의 양자화된 입자로, W/Z 게이지 보손과 쿼크, 렙톤이 힉스 장과 상호작용(유카와 결합)하여 질량을 획득합니다.",
      "deepKnowledge": "피터 힉스와 프랑수아 앙글레르는 1964년 자발적 대칭성 깨짐을 통한 질량 생성 이론을 제안한 공로로 발견 이듬해인 2013년 노벨물리학상을 수상했습니다.",
      "sourceOrTrivia": "ATLAS & CMS Collaborations (2012) Physics Letters B 716",
      "wrongOptionsReason": [
        "중력자는 중력을 매개할 것으로 예측되는 미발견 이론적 입자입니다.",
        "톱 쿼크는 1995년 페르미랩에서 발견된 가장 무거운 쿼크입니다.",
        "글루온은 강한 상호작용을 매개하는 질량 없는 게이지 보손입니다.",
        "정답입니다. 물질의 질량 기원을 설명하는 '신의 입자' 힉스 보손입니다."
      ]
    },
    {
      "id": "ultra_phy_17",
      "topic": "물리학 & 양자역학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "물리학에서 '일(Work)'의 정의로, 어떤 물체에 힘을 가하여 그 힘의 방향으로 이동시켰을 때 한 일의 양을 구하는 올바른 관계식은?",
      "options": [
        "일 = 가한 힘 × 이동 거리 (힘과 변위의 곱)",
        "일 = 가한 힘 ÷ 이동 거리",
        "일 = 가한 힘 + 이동 거리",
        "일 = 1/2 × 가한 힘 × (이동 거리)²"
      ],
      "correctIndex": 0,
      "explanation": "물리학에서 일(Work)은 물체에 가한 힘의 크기와 힘의 방향으로 이동한 거리의 곱(내적)으로 정의되며, 단위는 줄(J)을 사용합니다.",
      "deepKnowledge": "힘을 아무리 크게 주더라도 물체의 이동 거리가 0이거나(벽 밀기), 힘의 방향과 이동 방향이 수직인 경우(등속 원운동의 구심력) 한 일은 0입니다.",
      "sourceOrTrivia": "Halliday & Resnick (2013) Fundamentals of Physics",
      "wrongOptionsReason": [
        "정답입니다. 일은 힘과 이동 거리의 곱(내적)입니다.",
        "나눗셈 형태는 일의 차원(에너지)과 일치하지 않습니다.",
        "단순 합산은 단위가 맞지 않아 물리적으로 성립할 수 없습니다.",
        "제곱 계수 공식은 일의 정의가 아닌 용수철 탄성 에너지 공식 형태입니다."
      ]
    },
    {
      "id": "ultra_phy_18",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "고전 역학에서는 극복할 수 없는 높은 에너지 장벽(Potential Barrier)을 양자역학적 파동성을 지닌 입자가 유한한 확률로 뚫고 통과하는 현상은?",
      "options": [
        "양자 도약 (Quantum Leap)",
        "양자 터널링 (Quantum Tunneling)",
        "콤프턴 효과",
        "도플러 효과"
      ],
      "correctIndex": 1,
      "explanation": "입자의 파동함수가 퍼텐셜 장벽 내부에서 지수함수적으로 감쇄하더라도 0이 되지 않기 때문에 장벽 반대편에 입자가 출현할 확률이 존재합니다.",
      "deepKnowledge": "태양 중심핵의 양성자 핵융합(상온보다 훨씬 낮은 1500만도에서 반응 가능)과 주사 터널링 현미경(STM), 플래시 메모리 트랜지스터가 모두 양자 터널링 덕분에 작동합니다.",
      "sourceOrTrivia": "Gamow (1928) & Gurney & Condon (1928)",
      "wrongOptionsReason": [
        "양자 도약은 전자가 불연속적인 궤도 사이를 전이하는 현상입니다.",
        "정답입니다. 에너지 장벽을 확률적으로 뚫는 양자 터널링입니다.",
        "콤프턴 효과는 광자와 전자의 충돌로 파장이 길어지는 현상입니다.",
        "도플러 효과는 파원의 운동에 따른 관측 진동수의 변화입니다."
      ]
    },
    {
      "id": "ultra_phy_19",
      "topic": "물리학 & 양자역학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "강한 상호작용의 양자색역학(QCD)에서 두 쿼크 사이의 거리가 극도로 가까워질수록(고에너지 극한) 상호작용 강도가 0에 수렴하여 자유 입자처럼 행동하는 현상은?",
      "options": [
        "자발적 대칭성 깨짐",
        "쿼크 가둠 (Confinement)",
        "점근적 자유성 (Asymptotic Freedom)",
        "적외선 발산"
      ],
      "correctIndex": 2,
      "explanation": "데이비드 그로스, 프랭크 윌첵, 데이비드 폴리처가 1973년 규명한 현상으로, 거리가 가까워지면 색전하 결합 상수가 줄어들어 자유롭게 움직입니다.",
      "deepKnowledge": "반대로 쿼크 사이의 거리가 멀어지면 글루온 장의 자가 상호작용으로 인해 결합력이 일정하게 유지되다가 새로운 쿼크-반쿼크 쌍이 형성되는 '쿼크 가둠'이 일어납니다.",
      "sourceOrTrivia": "Gross & Wilczek (1973) & Politzer (1973) Phys. Rev. Lett.",
      "wrongOptionsReason": [
        "자발적 대칭성 깨짐은 계의 바닥상태가 대칭성을 만족하지 못하는 현상입니다.",
        "쿼크 가둠은 쿼크가 단독으로 분리되지 못하고 강습 입자 내부에 갇히는 현상입니다.",
        "정답입니다. 2004 노벨물리학상을 받은 점근적 자유성입니다.",
        "적외선 발산은 양자장론에서 저에너지 영역 적분이 발산하는 문제입니다."
      ]
    },
    {
      "id": "ultra_phy_20",
      "topic": "물리학 & 양자역학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "태양에서 방출된 전자 중성미자가 지구로 날아오는 도중에 뮤온 중성미자나 타우 중성미자로 자발적 변환을 겪는 '중성미자 진동(Neutrino Oscillation)'이 확증한 결정적 사실은?",
      "options": [
        "중성미자에는 반입자가 전혀 존재하지 않는다",
        "중성미자가 빛보다 빠른 초광속 입자이다",
        "중성미자가 붕괴하여 암흑물질로 변환된다",
        "중성미자가 0이 아닌 미세한 질량을 가지고 있다"
      ],
      "correctIndex": 3,
      "explanation": "중성미자의 맛깔 고유상태와 질량 고유상태가 일치하지 않아 위상차가 누적되면서 진동이 발생하므로, 세 질량 고유값 사이의 질량 차이가 0이 아님이 입증되었습니다.",
      "deepKnowledge": "이 발견은 표준모형에서 중성미자의 질량이 정확히 0이라고 가정한 결함을 드러냈으며, 슈퍼 카미오칸데의 카지타 타카아키와 SNO의 아서 맥도널드가 2015 노벨상을 받았습니다.",
      "sourceOrTrivia": "Fukuda et al. (1998) & Ahmad et al. (2001) Phys. Rev. Lett.",
      "wrongOptionsReason": [
        "중성미자에도 반중성미자가 존재합니다.",
        "중성미자는 질량이 있으므로 광속보다 미세하게 느리게 운동합니다.",
        "중성미자는 암흑물질의 주요 구성 요소(차가운 암흑물질)가 아닙니다.",
        "정답입니다. 중성미자 진동은 중성미자의 0이 아닌 질량을 입증했습니다."
      ]
    },
    {
      "id": "ultra_phy_21",
      "topic": "물리학 & 양자역학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "전하를 띤 두 입자 사이에 작용하는 정전기적 인력 또는 척력의 크기가 두 전하량의 곱에 비례하고 거리의 제곱에 반비례한다는 물리 법칙은?",
      "options": [
        "쿨롱의 법칙 (Coulomb's Law)",
        "패러데이 법칙",
        "옴의 법칙",
        "비오-사바르 법칙"
      ],
      "correctIndex": 0,
      "explanation": "샤를 드 쿨롱이 비틀림 저울 실험을 통해 확립한 정전기학의 기초 법칙으로, 두 전하 사이에 작용하는 힘은 전하량의 곱에 비례하고 거리의 제곱에 반비례하여 감소합니다.",
      "deepKnowledge": "쿨롱의 법칙은 형태 면에서 뉴턴의 만유인력 법칙과 수학적으로 동일하지만, 전하는 양과 음이 있어 인력뿐만 아니라 척력도 작용한다는 점이 다릅니다.",
      "sourceOrTrivia": "Coulomb (1785) Recherches théoriques et expérimentales sur la force d'attraction",
      "wrongOptionsReason": [
        "정답입니다. 정전기적 힘의 거리 역제곱 법칙인 쿨롱의 법칙입니다.",
        "패러데이 법칙은 전자기 유도 현상을 다룹니다.",
        "옴의 법칙은 전압, 전류, 저항의 관계(V=IR)입니다.",
        "비오-사바르 법칙은 미소 전류가 만드는 자기장을 기술합니다."
      ]
    },
    {
      "id": "ultra_phy_22",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "전자와 같은 페르미온(Fermion) 입자들은 동일한 양자계 내에서 4개의 양자수(주, 방위, 자기, 스핀 양자수)가 완전히 동일한 상태를 동시에 공유할 수 없다는 원리는?",
      "options": [
        "훈트의 규칙",
        "파울리 배타 원리 (Pauli Exclusion Principle)",
        "쌓음 원리",
        "불확정성 원리"
      ],
      "correctIndex": 1,
      "explanation": "볼프강 파울리가 제안한 원리로, 스핀이 반정수(1/2, 3/2 등)인 페르미온 파동함수의 반대칭성(Antisymmetry)에서 비롯됩니다.",
      "deepKnowledge": "이 배타 원리 덕분에 전자들이 원자핵 주위의 서로 다른 전자 껍질에 차곡차곡 쌓여 주기율표의 원소별 화학적 다양성과 단단한 고체 물질이 형성될 수 있습니다.",
      "sourceOrTrivia": "Pauli (1925) Zeitschrift für Physik 31",
      "wrongOptionsReason": [
        "훈트의 규칙은 축퇴된 오비탈에서 평행 스핀이 최대가 되도록 전자가 채워지는 규칙입니다.",
        "정답입니다. 페르미온의 동시 점유를 금지하는 파울리 배타 원리입니다.",
        "쌓음 원리는 에너지가 낮은 오비탈부터 전자가 채워진다는 규칙입니다.",
        "불확정성 원리는 위치와 운동량의 동시 측정 한계입니다."
      ]
    },
    {
      "id": "ultra_phy_23",
      "topic": "물리학 & 양자역학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "특수 상대성 이론의 질량-에너지 등가 원리와 정지 질량, 운동량을 결합한 상대론적 에너지-운동량 관계식의 올바른 형태는?",
      "options": [
        "총에너지 = 1/2 × 질량 × 속도² + 정지질량 × 광속²",
        "총에너지 = 운동량 × 광속 + 정지질량 × 광속²",
        "총에너지² = (운동량 × 광속)² + (정지질량 × 광속²)²",
        "총에너지² = 운동량² × 광속 + 정지질량² × 광속³"
      ],
      "correctIndex": 2,
      "explanation": "상대론적 4차원 운동량 벡터의 불변 크기에서 유도되는 식으로, 정지 질량이 0인 빛(광자)의 경우 총에너지는 운동량과 광속의 곱으로 표현됩니다.",
      "deepKnowledge": "디랙(Dirac)은 이 2차 방정식의 음의 에너지 해를 물리적으로 해석하는 과정에서 인류 최초로 반물질(양전자)의 존재를 예견했습니다.",
      "sourceOrTrivia": "Dirac (1928) Proc. R. Soc. Lond. A 117",
      "wrongOptionsReason": [
        "고전 역학 운동에너지 항을 혼합한 오류 식입니다.",
        "단순 일차식 합산은 로런츠 불변량에 맞지 않습니다.",
        "정답입니다. 상대론적 에너지-운동량 불변 관계식입니다.",
        "차원 분석상 에너지 제곱 단위가 성립하지 않습니다."
      ]
    },
    {
      "id": "ultra_phy_24",
      "topic": "물리학 & 양자역학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "초전도체 두 개 사이에 얇은 절연체 장벽을 끼워 넣었을 때, 전압을 걸어주지 않아도 직류 초전도 터널링 전류가 흐르는 현상은?",
      "options": [
        "모트 전이 (Mott Transition)",
        "아하로노프-봄 효과",
        "홀 효과",
        "조셉슨 효과 (Josephson Effect)"
      ],
      "correctIndex": 3,
      "explanation": "브라이언 조셉슨이 예측한 효과로, 쿠퍼 쌍들이 양자 터널링을 통해 장벽을 통과하며 두 초전도체 간의 거시적 파동함수 위상차에 비례하는 전류가 흐릅니다.",
      "deepKnowledge": "조셉슨 접합은 뇌자도(MEG) 측정에 쓰이는 초전도 양자 간섭 소자(SQUID)와 초전도 큐비트(IBM/구글 양자 컴퓨터)의 핵심 기본 부품입니다.",
      "sourceOrTrivia": "Josephson (1962) Physics Letters 1",
      "wrongOptionsReason": [
        "모트 전이는 전자 간 척력으로 금속이 절연체로 전이하는 현상입니다.",
        "아하로노프-봄 효과는 게이지 퍼텐셜에 의한 위상 변화입니다.",
        "홀 효과는 도선 측면 전압 발생 현상입니다.",
        "정답입니다. 초전도 위상차에 의한 조셉슨 효과입니다."
      ]
    },
    {
      "id": "ultra_phy_25",
      "topic": "물리학 & 양자역학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "물질의 상태 변화 중, 고체 물질이 액체 단계를 거치지 않고 직접 기체로 변하거나 기체가 직접 고체로 변하는 현상은?",
      "options": [
        "승화 (Sublimation)",
        "기화 (Vaporization)",
        "융해 (Melting)",
        "응고 (Solidification)"
      ],
      "correctIndex": 0,
      "explanation": "승화는 물질의 삼중점(Triple Point)보다 낮은 압력 환경에서 고체가 열을 흡수하여 액체 상태를 건너뛰고 직접 기체가 되는 현상입니다.",
      "deepKnowledge": "일상에서 드라이아이스(고체 CO2)가 상압에서 바로 이산화탄소 기체로 날아가는 것이 대표적인 승화 현상입니다.",
      "sourceOrTrivia": "Atkins (2018) Physical Chemistry, 11th Edition",
      "wrongOptionsReason": [
        "정답입니다. 고체와 기체 사이의 직접 상변화인 승화입니다.",
        "기화는 액체가 기체로 변하는 현상입니다.",
        "융해는 고체가 액체로 녹는 현상입니다.",
        "응고는 액체가 고체로 굳는 현상입니다."
      ]
    }
  ],
  "biology_medicine": [
    {
      "id": "ultra_bio_1",
      "topic": "생명과학 & 의학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "세포 내에서 포도당과 산소를 이용하여 세포 활동의 에너지 화폐인 ATP를 대량 합성하는 세포 소기관은?",
      "options": [
        "미토콘드리아 (Mitochondria)",
        "소포체",
        "골지체",
        "리소좀"
      ],
      "correctIndex": 0,
      "explanation": "미토콘드리아는 세포 호흡(TCA 회로 및 전자전달계)을 통해 유기물을 산화시켜 고효율의 ATP를 생성하는 세포 내 발전소입니다.",
      "deepKnowledge": "미토콘드리아는 독자적인 원형 DNA와 리보솜을 지니고 있어, 고대 진핵세포에 호기성 알파프로테오박테리아가 공생하여 기원했다는 세포내공생설(Endosymbiotic Theory)의 핵심 증거입니다.",
      "sourceOrTrivia": "Margulis (1970) Origin of Eukaryotic Cells",
      "wrongOptionsReason": [
        "정답입니다. ATP 에너지를 합성하는 미토콘드리아입니다.",
        "소포체는 단백질과 지질의 합성과 수송을 담당합니다.",
        "골지체는 단백질을 가공, 포장, 분비하는 소기관입니다.",
        "리소좀은 가수분해 효소로 세포 내 불필요한 물질을 소화하는 소기관입니다."
      ]
    },
    {
      "id": "ultra_bio_2",
      "topic": "생명과학 & 의학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "DNA 분자의 이중 나선 구조에서 아데닌(A)과 티민(T), 구아닌(G)과 사이토신(C) 사이에 형성되는 화학 결합의 종류는?",
      "options": [
        "공유 결합",
        "수소 결합 (Hydrogen Bond)",
        "이온 결합",
        "금속 결합"
      ],
      "correctIndex": 1,
      "explanation": "DNA 두 가닥의 상보적 염기쌍은 수소 결합으로 연결되어 있으며, A-T 사이에는 2개, G-C 사이에는 3개의 수소 결합이 형성됩니다.",
      "deepKnowledge": "G-C 함량이 높은 DNA 영역은 수소 결합 수가 많아 열에 의한 이중 나선 변성(Melting) 온도가 상대적으로 높습니다.",
      "sourceOrTrivia": "Watson & Crick (1953) Nature 171",
      "wrongOptionsReason": [
        "공유 결합은 DNA 당-인산 골격의 포스포다이에스터 결합에 해당합니다.",
        "정답입니다. 두 가닥의 염기쌍을 결합시키는 수소 결합입니다.",
        "이온 결합은 전하 차이에 의한 결합입니다.",
        "금속 결합은 금속 원자 간의 전자 바다 결합입니다."
      ]
    },
    {
      "id": "ultra_bio_3",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "박테리아의 면역 체계에서 유래한 3세대 유전자 가위로, 단일 가이드 RNA(gRNA)를 통해 특정 DNA 서열을 정밀 타깃하여 절단하는 기술은?",
      "options": [
        "탈렌 (TALEN)",
        "징크핑거 뉴클레이즈 (ZFN)",
        "크리스퍼-카스9 (CRISPR-Cas9)",
        "제한효소 클로닝"
      ],
      "correctIndex": 2,
      "explanation": "CRISPR-Cas9은 gRNA의 염기서열만 바꾸면 원하는 DNA 위치를 자유자재로 편집할 수 있어, 샤르팡티에와 다우드나 교수가 2020년 노벨화학상을 수상했습니다.",
      "deepKnowledge": "Cas9 단백질은 표적 DNA 서열 옆에 PAM(Protospacer Adjacent Motif, NGG 서열)이 존재해야만 DNA 이중 나선을 절단할 수 있습니다.",
      "sourceOrTrivia": "Jinek et al. (2012) Science 337",
      "wrongOptionsReason": [
        "TALEN은 인공 단백질 도메인으로 DNA를 인식하는 2세대 유전자 가위입니다.",
        "ZFN은 아연 집게 도메인을 쓰는 1세대 유전자 가위입니다.",
        "정답입니다. RNA 가이드를 사용하는 3세대 혁신 유전자 가위입니다.",
        "제한효소는 특정 짧은 회문 서열만 절단하는 고전 생화학 도구입니다."
      ]
    },
    {
      "id": "ultra_bio_4",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "세포 분열 시 염색체 말단이 손실되는 것을 보호하며, 분열을 거듭할수록 짧아져 세포 노화의 생물학적 타이머 역할을 하는 구조는?",
      "options": [
        "센트로미어 (동원체)",
        "뉴클레오솜",
        "키네토코어",
        "텔로미어 (Telomere)"
      ],
      "correctIndex": 3,
      "explanation": "텔로미어는 염색체 말단의 반복 DNA 서열(인간의 경우 TTAGGG)로, 말단 복제 문제로 인해 세포 분열마다 길이가 점차 짧아집니다.",
      "deepKnowledge": "생식세포와 대다수 암세포에서는 텔로머레이스(Telomerase) 효소가 활성화되어 텔로미어를 연장함으로써 무한 분열 능력을 획득합니다.",
      "sourceOrTrivia": "Blackburn, Greider, Szostak (2009 Nobel Prize in Physiology or Medicine)",
      "wrongOptionsReason": [
        "동원체는 염색분체가 결합하는 염색체의 중심 부위입니다.",
        "뉴클레오솜은 DNA가 히스톤 8량체를 감싼 염색질의 기본 단위입니다.",
        "키네토코어는 동원체에 방추사가 부착되는 단백질 복합체입니다.",
        "정답입니다. 세포 수명의 한계를 규정하는 말단 텔로미어입니다."
      ]
    },
    {
      "id": "ultra_bio_5",
      "topic": "생명과학 & 의학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "암세포가 T세포의 면역 공격을 회피하기 위해 악용하는 면역관문 수용체(PD-1, CTLA-4)를 차단하여, 환자 본인의 면역세포가 암을 공격하도록 유도하는 항암제는?",
      "options": [
        "면역관문 억제제 (Immune Checkpoint Inhibitor)",
        "표적 항암제 (키나아제 억제제)",
        "화학 세포독성 항암제",
        "호르몬 치료제"
      ],
      "correctIndex": 0,
      "explanation": "면역관문 억제제(예: 키트루다, 옵디보)는 암세포의 면역 회피 신호를 차단해 면역체계 본연의 항암 능력을 되살리며, 혼조와 앨리슨 교수가 2018 노벨상을 수상했습니다.",
      "deepKnowledge": "PD-1 수용체와 종양의 PD-L1 리간드 결합을 항체로 차단하면 지쳐있던 CD8+ 세포독성 T세포가 재활성화되어 암세포를 효과적으로 사멸시킵니다.",
      "sourceOrTrivia": "Ishida et al. (1992) EMBO J / Leach et al. (1996) Science",
      "wrongOptionsReason": [
        "정답입니다. 암의 면역 브레이크를 해제하는 면역관문 억제제입니다.",
        "표적 항암제는 암세포의 특정 유전자 돌연변이 단백질을 직접 억제합니다.",
        "세포독성 항암제는 빠르게 분열하는 모든 세포를 공격합니다.",
        "호르몬 치료제는 에스트로겐 등 호르몬 수용체 경로를 차단합니다."
      ]
    },
    {
      "id": "ultra_bio_6",
      "topic": "생명과학 & 의학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "2006년 야마나카 신야 교수가 성체 섬유아세포에 단 4개의 전사인자(Oct4, Sox2, Klf4, c-Myc)를 도입하여 배아줄기세포와 동일한 전분화능을 획득시킨 세포는?",
      "options": [
        "중간엽 줄기세포",
        "유도만능줄기세포 (iPSC, 역분화 줄기세포)",
        "조혈모세포",
        "신경줄기세포"
      ],
      "correctIndex": 1,
      "explanation": "iPSC는 분화가 끝난 체세포를 배아 단계의 미분화 상태로 되돌린 세포로, 인간 배아를 파괴하지 않고 환자 맞춤형 줄기세포를 만들 수 있어 2012 노벨생리의학상을 받았습니다.",
      "deepKnowledge": "야마나카 4대 인자는 후성유전학적 리프로그래밍을 촉진하여 메틸화되어 침묵하던 다능성 핵심 유전자 네트워크를 재가동시킵니다.",
      "sourceOrTrivia": "Takahashi & Yamanaka (2006) Cell 126, 663-676",
      "wrongOptionsReason": [
        "중간엽 줄기세포는 골수, 지방 등에서 얻는 다분화능 성체 줄기세포입니다.",
        "정답입니다. 성체 세포를 역분화시킨 유도만능줄기세포(iPSC)입니다.",
        "조혈모세포는 혈액 세포를 만드는 성체 줄기세포입니다.",
        "신경줄기세포는 뇌 신경계 세포로만 분화하는 조직 특이적 줄기세포입니다."
      ]
    },
    {
      "id": "ultra_bio_7",
      "topic": "생명과학 & 의학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "세포 손상이나 스트레스 상황에서 세포가 자신의 세포질 구성물과 손상된 소기관을 이중막 소포로 감싸 리소좀과 융합시켜 분해·재활용하는 세포 정화 기전은?",
      "options": [
        "세포자멸사 (Apoptosis)",
        "괴사 (Necrosis)",
        "오토파지 (자가포식, Autophagy)",
        "파이롭토시스 (Pyroptosis)"
      ],
      "correctIndex": 2,
      "explanation": "자가포식(Autophagy)은 영양 결핍이나 손상 단백질 누적 시 세포 항상성을 유지하는 생명 보존 기전으로, 오스미 요시노리 교수가 2016 노벨상을 수상했습니다.",
      "deepKnowledge": "오토파고좀(Autophagosome) 형성은 LC3 단백질 전환과 mTOR 억제 경로에 의해 엄격히 제어되며, 기능 이상 시 파킨슨병 등 신경퇴행성 질환이 유발됩니다.",
      "sourceOrTrivia": "Takeshige et al. (1992) J. Cell Biol / Nobel Prize (2016)",
      "wrongOptionsReason": [
        "세포자멸사는 프로그램된 능동적 세포 자살 과정입니다.",
        "괴사는 외부 손상으로 세포가 팽창하여 터지는 비조절성 사멸입니다.",
        "정답입니다. 손상 소기관을 자가 분해·재활용하는 오토파지입니다.",
        "파이롭토시스는 염증 반응을 동반하는 감염성 세포 사멸입니다."
      ]
    },
    {
      "id": "ultra_bio_8",
      "topic": "생명과학 & 의학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "정상 프리온 단백질(PrPᶜ)이 비정상적인 베타-병풍 구조(PrPˢᶜ)로 변형되어 불용성 응집체를 형성하고 중추신경계 스펀지형 뇌병증을 유발하는 무핵산 병원체 기전은?",
      "options": [
        "레트로바이러스 전파 기전",
        "비로이드 (Viroid) 복제 기전",
        "세균성 독소 외독소 기전",
        "단백질 유도 응집 감염 (프리온, Prion)"
      ],
      "correctIndex": 3,
      "explanation": "스탠리 프루시너가 규명한 프리온은 핵산(DNA/RNA) 없이 오직 단백질의 3차원 입체 구조 변형과 전파만으로 감염을 일으키는 혁명적 병원체입니다.",
      "deepKnowledge": "비정상 프리온은 고열, 방사선, 일반 단백질 분해효소(Proteinase K) 처리에 극도의 저항성을 지니며 광우병(BSE)과 크로이츠펠트-야코프병(CJD)을 유발합니다.",
      "sourceOrTrivia": "Prusiner (1982) Science 216 / Nobel Prize (1997)",
      "wrongOptionsReason": [
        "레트로바이러스는 RNA 유전체를 가진 바이러스입니다.",
        "비로이드는 단백질 껍질 없는 단일가닥 원형 RNA 병원체입니다.",
        "세균성 외독소는 세균이 분비하는 단백질 독소입니다.",
        "정답입니다. 핵산 없이 구조 변형으로 감염되는 프리온 기전입니다."
      ]
    },
    {
      "id": "ultra_bio_9",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "중합효소 연쇄 반응(PCR)에서 열에 변성되지 않고 72℃ 고온에서 새로운 DNA 가닥을 합성하는 데 사용되는 호열성 세균 유래 DNA 중합효소는?",
      "options": [
        "Taq 중합효소 (Taq Polymerase)",
        "DNA 중합효소 I",
        "RNA 중합효소 II",
        "역전사효소"
      ],
      "correctIndex": 0,
      "explanation": "온천수 호열성 세균 Thermus aquaticus에서 추출한 Taq 중합효소는 95℃의 고온 DNA 변성 단계에서도 실활되지 않아 자동화된 PCR 순환 반응을 가능케 했습니다.",
      "deepKnowledge": "캐리 멀리스는 Taq 효소를 도입하여 유전자 증폭 기술을 완성하고 1993년 노벨화학상을 수상했습니다.",
      "sourceOrTrivia": "Saiki et al. (1988) Science 239, 487-491",
      "wrongOptionsReason": [
        "정답입니다. 열에 강한 내열성 Taq 중합효소입니다.",
        "DNA 중합효소 I은 상온 대장균 효소로 고온에서 쉽게 변성됩니다.",
        "RNA 중합효소 II는 mRNA 전사를 담당하는 효소입니다.",
        "역전사효소는 RNA로부터 상보적 DNA(cDNA)를 합성하는 효소입니다."
      ]
    },
    {
      "id": "ultra_bio_10",
      "topic": "생명과학 & 의학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "신경계에서 신경세포(뉴런) 사이에 신경전달물질이 방출되어 신호가 전달되는 미세한 연결 틈새 구조는?",
      "options": [
        "랑비에 결절",
        "시냅스 (Synapse)",
        "축삭둔덕",
        "말이집 (수초)"
      ],
      "correctIndex": 1,
      "explanation": "시냅스는 축삭 말단과 다음 신경세포의 수상돌기 사이의 약 20nm 간격으로, 칼슘 유입에 의해 신경전달물질이 소포에서 분비되어 신호를 전달합니다.",
      "deepKnowledge": "전기적 신호가 시냅스에서 화학적 신호로 변환되는 과정은 신호의 방향성과 가변적 조절(가소성)을 가능하게 합니다.",
      "sourceOrTrivia": "Sherrington (1897) The Integrative Action of the Nervous System",
      "wrongOptionsReason": [
        "랑비에 결절은 말이집 사이의 도약전도가 일어나는 무수초 부위입니다.",
        "정답입니다. 뉴런 간 화학적 신호 전달 통로인 시냅스입니다.",
        "축삭둔덕은 활동전위가 최초로 생성되는 신경세포체 부위입니다.",
        "말이집은 축삭을 감싸 절연체 역할을 하는 지질 구조입니다."
      ]
    },
    {
      "id": "ultra_bio_11",
      "topic": "생명과학 & 의학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "후성유전학(Epigenetics)에서 DNA 염기서열 자체의 변화 없이 유전자 발현을 억제(침묵)시키는 대표적인 화학적 수식은?",
      "options": [
        "글리코실화",
        "인산화",
        "사이토신 5번 탄소의 메틸화 (DNA Methylation)",
        "유비퀴틴화"
      ],
      "correctIndex": 2,
      "explanation": "DNA 메틸화는 CpG 섬(CpG island)의 사이토신에 메틸기(-CH3)가 결합하여 전사인자의 접근을 차단함으로써 유전자 전사를 억제하는 기전입니다.",
      "deepKnowledge": "히스톤 단백질의 아세틸화는 염색질을 느슨하게 열어 전사를 촉진하는 반면, 탈아세틸화와 특정 메틸화는 이형염색질을 형성하여 유전자를 침묵시킵니다.",
      "sourceOrTrivia": "Bird (2002) Genes & Dev 16",
      "wrongOptionsReason": [
        "글리코실화는 단백질에 당 사슬이 결합하는 번역 후 수식입니다.",
        "인산화는 주로 단백질의 활성을 온/오프 조절하는 수식입니다.",
        "정답입니다. 전사를 영구적 또는 가역적으로 억제하는 DNA 메틸화입니다.",
        "유비퀴틴화는 분해할 단백질에 표지를 붙이는 과정입니다."
      ]
    },
    {
      "id": "ultra_bio_12",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "이자(췌장)의 랑게르한스섬 베타(베타(β)) 세포에서 분비되며, 혈액 속의 포도당을 세포 내로 흡수시켜 혈당을 낮추는 호르몬은?",
      "options": [
        "글루카곤",
        "에피네프린",
        "코르티솔",
        "인슐린 (Insulin)"
      ],
      "correctIndex": 3,
      "explanation": "인슐린은 식후 혈당이 상승했을 때 분비되어 간과 근육에서 글리코젠 합성을 촉진하고 포도당 수송체(GLUT4)를 막으로 이동시켜 혈당을 강하시킵니다.",
      "deepKnowledge": "반대로 혈당이 낮을 때는 알파(알파(α)) 세포에서 글루카곤이 분비되어 글리코젠 분해와 당신생합성을 촉진합니다.",
      "sourceOrTrivia": "Banting & Best (1922) J. Lab. Clin. Med.",
      "wrongOptionsReason": [
        "글루카곤은 알파 세포에서 분비되어 혈당을 올리는 호르몬입니다.",
        "에피네프린은 부신수질에서 분비되는 스트레스 호르몬입니다.",
        "코르티솔은 부신피질에서 분비되어 당신생을 촉진하는 스테로이드 호르몬입니다.",
        "정답입니다. 유일하게 혈당을 낮추는 호르몬인 인슐린입니다."
      ]
    },
    {
      "id": "ultra_bio_13",
      "topic": "생명과학 & 의학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "혈액 순환계에서 산소가 풍부한 동맥혈을 온몸으로 뿜어내는 심장의 가장 두꺼운 근육벽을 가진 방은?",
      "options": [
        "좌심실",
        "우심실",
        "좌심방",
        "우심방"
      ],
      "correctIndex": 0,
      "explanation": "좌심실은 대동맥을 통해 전신의 모세혈관망까지 높은 혈압으로 혈액을 순환시켜야 하므로 심장 벽이 가장 두껍게 발달해 있습니다.",
      "deepKnowledge": "우심실은 압력이 훨씬 낮은 폐순환만 담당하므로 좌심실 벽 두께의 약 3분의 1 수준에 불과합니다.",
      "sourceOrTrivia": "Guyton and Hall Textbook of Medical Physiology",
      "wrongOptionsReason": [
        "정답입니다. 대동맥으로 체순환을 뿜어내는 좌심실입니다.",
        "우심실은 폐로 정맥혈을 보내는 방입니다.",
        "좌심방은 폐에서 산소화된 동맥혈을 받는 곳입니다.",
        "우심방은 온몸을 돌고 온 정맥혈을 받아들이는 곳입니다."
      ]
    },
    {
      "id": "ultra_bio_14",
      "topic": "생명과학 & 의학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "바이러스 유전체인 단일가닥 RNA로부터 상보적인 DNA를 합성하여 숙주 유전체에 삽입되도록 하는 레트로바이러스의 핵심 효소는?",
      "options": [
        "RNA 중합효소",
        "역전사효소 (Reverse Transcriptase)",
        "DNA 리가아제",
        "헬리카아제"
      ],
      "correctIndex": 1,
      "explanation": "역전사효소는 중심원리(DNA→RNA)의 역방향(RNA→DNA) 흐름을 증명한 효소로, 테민과 볼티모어가 1970년 발견하여 1975년 노벨상을 받았습니다.",
      "deepKnowledge": "HIV 치료제인 AZT 등은 역전사효소의 기질 결합을 방해하는 뉴클레오사이드 유사체 역전사 억제제(NRTI)입니다.",
      "sourceOrTrivia": "Temin & Mizutani (1970) & Baltimore (1970) Nature",
      "wrongOptionsReason": [
        "RNA 중합효소는 DNA를 주형으로 RNA를 만드는 효소입니다.",
        "정답입니다. RNA를 주형으로 DNA를 역방향 합성하는 역전사효소입니다.",
        "DNA 리가아제는 끊어진 DNA 가닥을 연결하는 효소입니다.",
        "헬리카아제는 이중 나선을 풀어헤치는 효소입니다."
      ]
    },
    {
      "id": "ultra_bio_15",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "세균이 특정 항생제의 공격을 무력화하기 위해 페니실린 계열 항생제의 핵심 고리 구조를 가수분해하여 파괴하는 효소는?",
      "options": [
        "프로테아제",
        "DNA 분해효소",
        "베타락타마제 (Beta-lactamase)",
        "아밀라아제"
      ],
      "correctIndex": 2,
      "explanation": "베타락타마제는 페니실린, 세팔로스포린 등의 4원환 베타락탐 고리를 절단하여 세균 세포벽 합성 억제 기능을 무력화시키는 대표적 항생제 내성 기전입니다.",
      "deepKnowledge": "이에 대항하여 클라불란산(Clavulanic acid)처럼 베타락타마제를 비가역적으로 저해하는 복합 처방제가 개발되었습니다.",
      "sourceOrTrivia": "Abraham & Chain (1940) Nature 146",
      "wrongOptionsReason": [
        "프로테아제는 펩타이드 결합을 자르는 단백질 분해효소입니다.",
        "DNA 분해효소는 핵산을 분해하는 효소입니다.",
        "정답입니다. 페니실린 고리를 분해하는 내성 효소 베타락타마제입니다.",
        "아밀라아제는 녹말을 엿당으로 분해하는 소화효소입니다."
      ]
    },
    {
      "id": "ultra_bio_16",
      "topic": "생명과학 & 의학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "적응 면역계에서 세포 표면에 제시된 바이러스 항원 펩타이드를 인식하여 감염 세포를 직접 살상하는 T세포의 종류는?",
      "options": [
        "조절 T세포 (Treg)",
        "보조 T세포 (CD4+ Th)",
        "기억 B세포",
        "세포독성 T세포 (CD8+ CTL)"
      ],
      "correctIndex": 3,
      "explanation": "CD8+ 세포독성 T세포는 MHC 클래스 I 분자에 결합된 비자기(Non-self) 항원을 인식한 후 퍼포린과 그랜자임을 분비하여 표적 세포의 세포자멸사를 유도합니다.",
      "deepKnowledge": "보조 T세포(CD4+)는 사이토카인을 분비해 B세포와 대식세포를 지휘하는 반면, CTL은 직접적인 물리적 사멸을 집행합니다.",
      "sourceOrTrivia": "Janeway's Immunobiology, 9th Edition",
      "wrongOptionsReason": [
        "조절 T세포는 과도한 면역 반응을 억제하고 자가면역을 방지합니다.",
        "보조 T세포는 다른 면역세포를 활성화하는 사이토카인을 분비합니다.",
        "기억 B세포는 체액성 면역의 항체 기억을 보존합니다.",
        "정답입니다. 감염 세포를 직접 파괴하는 세포독성 T세포입니다."
      ]
    },
    {
      "id": "ultra_bio_17",
      "topic": "생명과학 & 의학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "혈액 응고 과정에서 최종적으로 그물망을 형성하여 혈소판을 엉기게 하고 피떡(혈전)을 만들어 출혈을 멈추게 하는 불용성 섬유 단백질은?",
      "options": [
        "피브린 (Fibrin, 섬유소)",
        "헤모글로빈",
        "알부민",
        "콜라겐"
      ],
      "correctIndex": 0,
      "explanation": "트롬빈 효소에 의해 혈장 수용성 피브리노겐이 불용성 피브린 섬유로 전환되어 적혈구와 혈소판을 엮어 지혈 플러그를 완성합니다.",
      "deepKnowledge": "혈우병 환자는 이 혈액 응고 연쇄 반응에 필요한 응고 인자(제8인자 또는 제9인자)가 결핍되어 지혈이 지연됩니다.",
      "sourceOrTrivia": "Davie & Ratnoff (1964) Science 145",
      "wrongOptionsReason": [
        "정답입니다. 혈전의 물리적 그물을 형성하는 피브린입니다.",
        "헤모글로빈은 적혈구 내 산소 운반 단백질입니다.",
        "알부민은 혈장 삼투압 유지와 물질 수송을 담당합니다.",
        "콜라겐은 피부, 연골 등 결합조직의 구조 단백질입니다."
      ]
    },
    {
      "id": "ultra_bio_18",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "신장의 기능적 기본 단위인 네프론(Nephron)에서 보먼주머니와 함께 혈액의 여과가 일어나는 모세혈관 덩어리는?",
      "options": [
        "세뇨관",
        "사구체 (Glomerulus)",
        "헨레 고리",
        "집합관"
      ],
      "correctIndex": 1,
      "explanation": "사구체는 높은 유체정역학적 압력을 바탕으로 혈액 속의 물, 포도당, 아미노산, 요소 등 미세 분자를 보먼주머니로 여과시키는 모세혈관 구형 망입니다.",
      "deepKnowledge": "정상 상태에서는 혈구와 고분자 단백질(알부민)이 사구체 여과 장벽(족세포)을 통과하지 못하므로 소변에서 단백뇨가 검출되면 신장 손상을 의미합니다.",
      "sourceOrTrivia": "Brenner & Rector's The Kidney",
      "wrongOptionsReason": [
        "세뇨관은 여과액에서 필요한 물질의 재흡수와 분비가 일어나는 관입니다.",
        "정답입니다. 혈액 여과가 일어나는 사구체입니다.",
        "헨레 고리는 소변 농축을 위한 삼투 기울기를 형성합니다.",
        "집합관은 최종적으로 소변을 신우로 모으는 관입니다."
      ]
    },
    {
      "id": "ultra_bio_19",
      "topic": "생명과학 & 의학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "식물의 엽록체 스트로마에서 대기 중의 이산화탄소(CO₂)를 5탄당인 RuBP에 고정시키는 캘빈 회로의 핵심 효소는?",
      "options": [
        "PEP 카복실레이스",
        "ATP 합성효소",
        "루비스코 (RuBisCO)",
        "피루브산 탈수소효소"
      ],
      "correctIndex": 2,
      "explanation": "루비스코(Ribulose-1,5-bisphosphate carboxylase-oxygenase)는 지구상에서 가장 풍부한 효소로, 식물의 탄소 동화 작용을 주관합니다.",
      "deepKnowledge": "루비스코는 산소와도 결합하는 산소화 반응을 일으켜 광호흡(Photorespiration)이라는 에너지 낭비를 유발하므로, C4 식물과 CAM 식물은 이를 극복하는 농축 기전을 진화시켰습니다.",
      "sourceOrTrivia": "Calvin (1961 Nobel Prize in Chemistry)",
      "wrongOptionsReason": [
        "PEP 카복실레이스는 C4 식물의 엽육세포에서 1차 탄소 고정을 맡습니다.",
        "ATP 합성효소는 양성자 구동력으로 ATP를 만드는 효소입니다.",
        "정답입니다. 지구상 최대의 탄소 고정 효소인 루비스코입니다.",
        "피루브산 탈수소효소는 해당과정과 TCA 회로를 잇는 효소입니다."
      ]
    },
    {
      "id": "ultra_bio_20",
      "topic": "생명과학 & 의학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "인간 유전체 프로젝트(HGP) 이후 밝혀진 인간 DNA 중 실제 단백질을 암호화하는 엑손(Exon) 영역이 차지하는 비율은 대략 얼마인가?",
      "options": [
        "약 99%",
        "약 50%",
        "약 80%",
        "약 1.5% 내외"
      ],
      "correctIndex": 3,
      "explanation": "놀랍게도 30억 쌍의 인간 게놈 중 단백질을 코딩하는 서열은 약 1.5%에 불과하며, 나머지는 인트론, 조절 영역, 반복 서열, 비코딩 RNA 등으로 구성되어 있습니다.",
      "deepKnowledge": "과거 '정크 DNA'로 치부되었던 비코딩 영역은 ENCODE 프로젝트를 통해 유전자 발현을 정밀 조절하는 핵심 후성유전학적 스위치 역할을 함이 밝혀졌습니다.",
      "sourceOrTrivia": "International Human Genome Sequencing Consortium (2001) Nature 409",
      "wrongOptionsReason": [
        "99%는 두 사람 사이의 게놈 염기서열 유사도에 해당하는 수치입니다.",
        "50%는 트랜스포존 등 반복 서열의 비율에 가깝습니다.",
        "80%는 ENCODE 프로젝트가 밝힌 생화학적 전사 활성을 가진 게놈의 비율입니다.",
        "정답입니다. 단백질 코딩 서열은 전체 게놈의 불과 1.5% 수준입니다."
      ]
    },
    {
      "id": "ultra_bio_21",
      "topic": "생명과학 & 의학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "인간의 적혈구에 존재하며 철(Fe) 이온을 함유하여 폐에서 조직으로 산소를 운반하는 복합 단백질은?",
      "options": [
        "헤모글로빈 (Hemoglobin)",
        "미오글로빈",
        "인슐린",
        "면역글로불린"
      ],
      "correctIndex": 0,
      "explanation": "헤모글로빈은 4개의 폴리펩타이드 사슬(알파2, 베타2)과 4개의 헴(Heme)기로 이루어져 있어 한 분자당 최대 4개의 산소 분자(O₂)를 결합합니다.",
      "deepKnowledge": "헤모글로빈은 산소 결합 시 다른 소단위체의 산소 친화도가 증가하는 협동성(Cooperativity)을 보여 S자형 산소 해리 곡선을 나타냅니다.",
      "sourceOrTrivia": "Perutz (1960) Nature 185 (Nobel Prize in Chemistry 1962)",
      "wrongOptionsReason": [
        "정답입니다. 적혈구의 주 산소 운반 단백질인 헤모글로빈입니다.",
        "미오글로빈은 근육 조직에 산소를 저장하는 단일 사슬 단백질입니다.",
        "인슐린은 혈당 조절 펩타이드 호르몬입니다.",
        "면역글로불린은 B세포가 분비하는 항체 단백질입니다."
      ]
    },
    {
      "id": "ultra_bio_22",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "mRNA의 유전 암호 코돈(Codon)에 대응하여 특정 아미노산을 리보솜으로 운반해 단백질 번역을 완수하는 RNA는?",
      "options": [
        "rRNA (리보솜 RNA)",
        "tRNA (운반 RNA)",
        "snRNA",
        "siRNA"
      ],
      "correctIndex": 1,
      "explanation": "tRNA는 클로버 잎 모양의 3차원 구조를 가지며, 한쪽 끝에는 3개 염기의 안티코돈이, 반대편 3' 말단에는 아미노산이 결합되어 리보솜으로 수송됩니다.",
      "deepKnowledge": "아미노아실-tRNA 합성효소(aaRS)는 20종의 아미노산을 각 tRNA에 오차율 1만분의 1 이하로 정밀하게 결합시키는 교정 기능을 갖추고 있습니다.",
      "sourceOrTrivia": "Crick (1958) 'On Protein Synthesis' / Holley (1965) Science",
      "wrongOptionsReason": [
        "rRNA는 리보솜을 구성하며 펩타이드 결합을 촉매합니다.",
        "정답입니다. 아미노산을 운반하는 tRNA입니다.",
        "snRNA는 스플라이싱 복합체(Spliceosome)를 구성합니다.",
        "siRNA는 RNA 간섭(RNAi)을 통해 표적 mRNA를 분해합니다."
      ]
    },
    {
      "id": "ultra_bio_23",
      "topic": "생명과학 & 의학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "세포막을 가로질러 3개의 나트륨(Na⁺)을 세포 밖으로 퍼내고 2개의 칼륨(K⁺)을 세포 안으로 들여와 휴지 전위(-70mV)를 유지하는 수송체는?",
      "options": [
        "전압 개폐성 칼슘 채널",
        "포도당 촉진확산 수송체",
        "Na⁺/K⁺ ATP가수분해효소 펌프",
        "아쿠아포린"
      ],
      "correctIndex": 2,
      "explanation": "나트륨-칼륨 펌프는 ATP 에너지를 직접 소비하여 농도 기울기를 거슬러 이온을 수송하는 1차 능동수송체로, 신경 세포의 흥분성 유지에 필수적입니다.",
      "deepKnowledge": "이 펌프는 세포 전체 ATP 소비량의 약 30%(뇌세포의 경우 50% 이상)를 소모하는 생체 핵심 열역학 장치입니다.",
      "sourceOrTrivia": "Skou (1957) Biochim. Biophys. Acta / Nobel Prize in Chemistry (1997)",
      "wrongOptionsReason": [
        "칼슘 채널은 수동 수송으로 칼슘을 유입시키는 채널입니다.",
        "포도당 수송체는 농도 기울기를 따르는 촉진확산체입니다.",
        "정답입니다. 휴지 전위를 형성하는 1차 능동수송 나트륨-칼륨 펌프입니다.",
        "아쿠아포린은 물 분자만 선택적으로 통과시키는 수분 통로입니다."
      ]
    },
    {
      "id": "ultra_bio_24",
      "topic": "생명과학 & 의학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "장내에 서식하는 수십조 마리의 미생물 군집과 중추신경계가 미주신경 및 대사산물(단쇄지방산)을 통해 양방향으로 긴밀히 소통하는 축을 부르는 용어는?",
      "options": [
        "뇌실막 장벽",
        "시상하부-뇌하수체 축",
        "신경-내분비 루프",
        "장-뇌 축 (Gut-Brain Axis)"
      ],
      "correctIndex": 3,
      "explanation": "장-뇌 축은 장내 미생물총(Microbiome)이 세로토닌 생성, 신경 전달, 면역 반응을 조절하여 우울증, 파킨슨병, 자폐스펙트럼 등 뇌 기능에 지대한 영향을 미친다는 최신 의학 패러다임입니다.",
      "deepKnowledge": "체내 세로토닌의 약 90% 이상이 뇌가 아닌 장의 장크롬친화성 세포에서 장내 미생물의 자극을 받아 합성됩니다.",
      "sourceOrTrivia": "Cryan & Dinan (2012) Nature Reviews Neuroscience 13",
      "wrongOptionsReason": [
        "뇌실막 장벽은 뇌척수액과 뇌실질 사이의 경계막입니다.",
        "HPA 축은 스트레스 반응을 조절하는 내분비 경로입니다.",
        "신경-내분비 루프는 일반적인 호르몬 조절 경로 명칭입니다.",
        "정답입니다. 장내 미생물과 뇌의 양방향 소통을 뜻하는 장-뇌 축입니다."
      ]
    },
    {
      "id": "ultra_bio_25",
      "topic": "생명과학 & 의학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "간에서 합성되어 쓸개(담낭)에 저장되었다가 십이지장으로 분비되며, 지방 방울을 미세하게 유화시켜 소화효소(리파아제) 작용을 돕는 액체는?",
      "options": [
        "쓸개즙 (담즙, Bile)",
        "이자액",
        "위산",
        "침 (타액)"
      ],
      "correctIndex": 0,
      "explanation": "쓸개즙은 소화효소는 없지만 담즙산염의 계면활성 작용을 통해 큰 지방 덩어리를 미세한 유화 방울로 쪼개어 리파아제의 접촉 표면적을 폭발적으로 넓힙니다.",
      "deepKnowledge": "쓸개즙 색소의 주성분인 빌리루빈은 노화된 적혈구의 헤모글로빈이 파괴될 때 헴이 분해되어 생성되는 대사 부산물입니다.",
      "sourceOrTrivia": "Vander's Human Physiology, 14th Edition",
      "wrongOptionsReason": [
        "정답입니다. 지방을 물리적으로 유화시키는 쓸개즙입니다.",
        "이자액은 3대 영양소 분해효소가 모두 들어있는 소화액입니다.",
        "위산은 위에서 분비되어 단백질을 변성시키고 살균합니다.",
        "침은 프티알린(아밀라아제)이 들어있는 구강 분비액입니다."
      ]
    }
  ],
  "earth_environment": [
    {
      "id": "ultra_geo_1",
      "topic": "지구과학 & 환경생태",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "지구 내부 층상 구조 중, 지각과 맨틀의 경계면으로 지진파의 속도가 불연속적으로 급격히 빨라지는 면의 명칭은?",
      "options": [
        "모호로비치치 불연속면 (모호면)",
        "구텐베르크 불연속면",
        "레만 불연속면",
        "콘라드 불연속면"
      ],
      "correctIndex": 0,
      "explanation": "모호로비치치 불연속면(약칭 모호면)은 대륙 지각 아래 약 35km, 해양 지각 아래 약 5km 깊이에 존재하는 지각과 맨틀의 뚜렷한 경계면입니다.",
      "deepKnowledge": "1909년 크로아티아 지진학자 안드리야 모호로비치치가 천발 지진파 도달 시간 분석을 통해 고속 매질의 굴절파 존재를 밝혀내며 발견했습니다.",
      "sourceOrTrivia": "Mohorovičić (1910) Jahrbuch des meteorologischen Observatoriums in Zagreb",
      "wrongOptionsReason": [
        "정답입니다. 지각과 맨틀 사이의 경계인 모호면입니다.",
        "구텐베르크면은 맨틀과 외핵 사이의 경계(약 2,900km)입니다.",
        "레만면은 액체 외핵과 고체 내핵 사이의 경계(약 5,100km)입니다.",
        "콘라드면은 대륙 지각 상부(화강암질)와 하부(현무암질) 사이의 경계입니다."
      ]
    },
    {
      "id": "ultra_geo_2",
      "topic": "지구과학 & 환경생태",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "지구 대기권의 4대 층상 구조 중, 오존층이 존재하여 자외선을 흡수함으로써 고도가 높아질수록 기온이 상승하고 대기가 매우 안정한 층은?",
      "options": [
        "대류권",
        "성층권 (Stratosphere)",
        "중간권",
        "열권"
      ],
      "correctIndex": 1,
      "explanation": "성층권(약 12~50km)은 오존이 태양 자외선을 흡수하여 가열되므로 위로 갈수록 온도가 상승하며, 대류가 일어나지 않아 여객기의 순항 고도로 활용됩니다.",
      "deepKnowledge": "성층권의 오존 농도는 약 20~30km 고도에서 최대치를 이루며, 생명체에 치명적인 단파장 자외선(UV-C 및 대부분의 UV-B)을 완벽히 차단합니다.",
      "sourceOrTrivia": "Ahrens (2018) Meteorology Today, 12th Edition",
      "wrongOptionsReason": [
        "대류권은 기상 현상이 발생하며 위로 갈수록 기온이 낮아집니다.",
        "정답입니다. 오존층이 존재하여 역전층을 형성하는 성층권입니다.",
        "중간권은 대기권 중 최저 기온(-90℃)이 나타나는 층입니다.",
        "열권은 태양 X선 흡수로 고온을 띠며 오로라가 발생하는 층입니다."
      ]
    },
    {
      "id": "ultra_geo_3",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "동태평양 적도 해역의 해수면 온도가 평년보다 0.5℃ 이상 높은 상태가 수개월 이상 지속되는 이상 기후 현상은?",
      "options": [
        "라니냐 (La Niña)",
        "인도양 다이폴 (IOD)",
        "엘니뇨 (El Niño)",
        "북극진동 (AO)"
      ],
      "correctIndex": 2,
      "explanation": "엘니뇨는 적도 무역풍이 약화되어 서태평양의 따뜻한 해수가 동태평양으로 이동하고 페루 연안의 용승이 차단되면서 발생합니다.",
      "deepKnowledge": "엘니뇨 시기에는 남미 서해안에 폭우와 홍수가, 인도네시아와 호주 등 서태평양 지역에는 극심한 가뭄과 산불이 유발됩니다.",
      "sourceOrTrivia": "NOAA Climate Prediction Center - ENSO Monitoring",
      "wrongOptionsReason": [
        "라니냐는 동태평양 수온이 평년보다 비정상적으로 차가워지는 현상입니다.",
        "인도양 다이폴은 인도양 동서 간의 수온 편차 진동입니다.",
        "정답입니다. 동태평양 수온이 비정상적으로 상승하는 엘니뇨입니다.",
        "북극진동은 북극 소용돌이의 세력 변화에 따른 한파 주기입니다."
      ]
    },
    {
      "id": "ultra_geo_4",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "지구 외핵의 액체 철-니켈 유체가 자전과 열대류에 의해 회전하면서 거대한 전류를 유도하고 지구 자기장을 스스로 발생·유지한다는 이론은?",
      "options": [
        "대륙이동설",
        "탄성반발설",
        "맨틀 대류설",
        "다이내모 이론 (Geodynamo Theory)"
      ],
      "correctIndex": 3,
      "explanation": "다이내모 이론은 지구 외핵의 전도성 유체 운동이 전자기 유도 법칙에 따라 영구 전자석처럼 지구 자기장을 자체 재생산한다고 설명합니다.",
      "deepKnowledge": "지구 자기장은 태양풍의 고에너지 하전입자들을 차단하여 밴 앨런 복사대를 형성하고 지구 대기가 우주로 유실되는 것을 막아줍니다.",
      "sourceOrTrivia": "Elsasser (1946) Phys. Rev. 69 / Bullard (1949)",
      "wrongOptionsReason": [
        "대륙이동설은 판게아 대륙의 분리를 설명하는 학설입니다.",
        "탄성반발설은 지진의 발생 메커니즘을 설명하는 이론입니다.",
        "맨틀 대류설은 판 운동의 구동력을 설명하는 이론입니다.",
        "정답입니다. 액체 금속 외핵의 대류 발전 현상을 규명한 다이내모 이론입니다."
      ]
    },
    {
      "id": "ultra_geo_5",
      "topic": "지구과학 & 환경생태",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "대서양에서 멕시코 만류가 북상하여 냉각되고 염분이 높아져 가라앉음으로써 전 지구적 해양 열수송을 담당하는 해류 순환계로, 최근 지구온난화로 붕괴 우려가 커진 시스템은?",
      "options": [
        "대서양 자오선 역전순환 (AMOC)",
        "쿠로시오 해류계",
        "엘니뇨-남방진동",
        "환남극 순환류 (ACC)"
      ],
      "correctIndex": 0,
      "explanation": "AMOC(Atlantic Meridional Overturning Circulation)는 열대 열을 북유럽으로 실어 나르는 거대한 컨베이어 벨트로, 그린란드 빙하가 녹아 담수가 유입되면 침강이 멈춰 유럽에 한랭화를 초래할 수 있습니다.",
      "deepKnowledge": "기후학자들은 AMOC가 기후 시스템의 비가역적 파국을 초래할 수 있는 핵심 티핑 포인트(Tipping Point) 중 하나라고 경고합니다.",
      "sourceOrTrivia": "Rahmstorf et al. (2015) Nature Climate Change 5",
      "wrongOptionsReason": [
        "정답입니다. 전 지구 해양 열순환의 핵심 축인 AMOC입니다.",
        "쿠로시오 해류는 북태평양 서안 경계류입니다.",
        "남방진동은 열대 태평양의 기압 시소 현상입니다.",
        "환남극 순환류는 남극 대륙 주위를 동쪽으로 도는 거대한 해류입니다."
      ]
    },
    {
      "id": "ultra_geo_6",
      "topic": "지구과학 & 환경생태",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "약 2억 5천만 년 전 고생대 말 페름기-트라이아스기 대멸종(The Great Dying) 당시 해양 생물종의 96%를 절멸시킨 가장 유력한 지구물리학적 원인은?",
      "options": [
        "소행성 충돌",
        "시베리아 트랩(Siberian Traps) 대규모 현무암질 화산 분출",
        "산소 농도의 비정상적 급증",
        "빙하기의 급작스러운 도래"
      ],
      "correctIndex": 1,
      "explanation": "시베리아 트랩에서 분출된 수백만 입방킬로미터의 용암과 석탄층 연소로 막대한 온실가스(CO₂, CH₄)가 대기에 뿜어져 급격한 온난화와 해양 산성화, 무산소화(Anoxia)를 유발했습니다.",
      "deepKnowledge": "해양의 무산소 환경에서 황산염 환원균이 번성하여 유독한 황화수소(H₂S) 가스를 대량 방출함으로써 육상 생태계까지 초토화되었습니다.",
      "sourceOrTrivia": "Burgess et al. (2014) PNAS 111, 3316-3321",
      "wrongOptionsReason": [
        "소행성 충돌은 중생대 말 K-Pg 멸종(공룡 멸종)의 주원인입니다.",
        "정답입니다. 고생대 말 대멸종을 촉발한 시베리아 트랩 화산 활동입니다.",
        "당시 해양은 산소가 완전히 고갈된 무산소증 상태였습니다.",
        "당시는 빙하기가 아니라 극심한 폭염 온난화가 문제였습니다."
      ]
    },
    {
      "id": "ultra_geo_7",
      "topic": "지구과학 & 환경생태",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "제임스 러브록(James Lovelock)이 주창한 가설로, 지구와 지구상의 모든 생물권이 하나의 거대한 자기조절 복합 유기체처럼 기능하여 환경을 생명 유지에 적합하도록 능동적으로 제어한다는 학설은?",
      "options": [
        "지속가능성 이론",
        "판구조론",
        "가이아 가설 (Gaia Hypothesis)",
        "생태발자국 이론"
      ],
      "correctIndex": 2,
      "explanation": "가이아 가설은 지구 대기의 조성(산소 21%, 메탄, 질소)과 해양 염분, 지표 온도가 생명 활동과의 유기적 피드백을 통해 40억 년간 안정된 항상성을 유지해 왔다고 주장합니다.",
      "deepKnowledge": "린 마굴리스와의 협력을 통해 발전된 이 이론은 지구 시스템 과학(Earth System Science)이라는 융합 학문의 토대를 마련했습니다.",
      "sourceOrTrivia": "Lovelock & Margulis (1974) Tellus 26",
      "wrongOptionsReason": [
        "지속가능성 이론은 미래 세대를 위한 자원 보전 패러다임입니다.",
        "판구조론은 지구 암석권 판들의 운동을 설명하는 지질학 이론입니다.",
        "정답입니다. 지구를 능동적 자기조절 유기체로 보는 가이아 가설입니다.",
        "생태발자국은 인간이 자연에 남기는 생태적 수요를 측정한 지표입니다."
      ]
    },
    {
      "id": "ultra_geo_8",
      "topic": "지구과학 & 환경생태",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "중생대 백악기 말-신생대 고진기 경계층(K-Pg 경계) 전 세계 퇴적층에서 발견되며, 직경 10km 소행성이 유카탄 반도 칙술루브에 충돌했음을 증명한 희귀 원소는?",
      "options": [
        "우라늄 (U)",
        "티타늄 (Ti)",
        "플루토늄 (Pu)",
        "이리듐 (Ir)"
      ],
      "correctIndex": 3,
      "explanation": "이리듐은 지표면에는 거의 없고 소행성이나 지구 핵에 농축된 친철성 백금족 원소로, 루이스 앨버레즈 연구팀이 점토층에서 비정상적 고농도 이리듐 피크를 발견했습니다.",
      "deepKnowledge": "이 충돌로 인해 발생한 메가 쓰나미, 전 지구적 산불, 그리고 충돌 먼지가 태양을 가린 '충돌 겨울'로 인해 공룡을 포함한 지구 생물종의 75%가 멸종했습니다.",
      "sourceOrTrivia": "Alvarez et al. (1980) Science 208, 1095-1108",
      "wrongOptionsReason": [
        "우라늄은 지각 암석에 광범위하게 존재하는 방사성 원소입니다.",
        "티타늄은 지각을 구성하는 흔한 조암 광물 원소입니다.",
        "플루토늄은 인공 방사성 원소로 자연 지층에는 없습니다.",
        "정답입니다. 소행성 충돌의 지질학적 지문인 이리듐입니다."
      ]
    },
    {
      "id": "ultra_geo_9",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "해양 생태계의 갯벌, 염습지, 맹그로브 숲 등 연안 서식지 식생과 퇴적층에 장기간 격리·저장되는 탄소를 일컫는 용어는?",
      "options": [
        "블루 카본 (Blue Carbon)",
        "블랙 카본 (Black Carbon)",
        "그린 카본 (Green Carbon)",
        "브라운 카본 (Brown Carbon)"
      ],
      "correctIndex": 0,
      "explanation": "블루 카본은 육상 산림(그린 카본)보다 탄소 흡수 속도가 최대 50배 빠르고 수백~수천 년간 탄소를 해저 퇴적층에 격리할 수 있어 기후변화 대응의 핵심 자원으로 꼽힙니다.",
      "deepKnowledge": "염습지와 갯벌은 산소가 희박한 혐기성 퇴적 환경 덕분에 유기물이 미생물에 의해 쉽게 분해되지 않고 안정적으로 고착됩니다.",
      "sourceOrTrivia": "Nellemann et al. (UNEP, 2009) 'Blue Carbon: The Role of Healthy Oceans'",
      "wrongOptionsReason": [
        "정답입니다. 해양 및 연안 생태계가 격리하는 블루 카본입니다.",
        "블랙 카본은 화석연료 불완전 연소로 생기는 매연 분진입니다.",
        "그린 카본은 육상 식물과 산림에 흡수·저장되는 탄소입니다.",
        "브라운 카본은 유기물 연소로 방출되는 황갈색 탄소 입자입니다."
      ]
    },
    {
      "id": "ultra_geo_10",
      "topic": "지구과학 & 환경생태",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "판구조론에서 서로 마주보고 다가오는 수렴형 판 경계 중, 밀도가 큰 해양판이 밀도가 작은 대륙판 아래로 비스듬히 미끄러져 들어가는 영역은?",
      "options": [
        "발산대 (열곡대)",
        "섭입대 (Subduction Zone)",
        "변환단층",
        "해저 확장대"
      ],
      "correctIndex": 1,
      "explanation": "섭입대에서는 심해 해구(Trench)가 형성되며, 판이 깊숙이 들어가면서 마그마가 생성되어 화산호(Volcanic Arc)와 심발 지진이 발생합니다.",
      "deepKnowledge": "섭입하는 해양판의 경사면을 따라 진원이 점점 깊어지는 지진대를 '베니오프대(Wadati-Benioff Zone)'라고 부릅니다.",
      "sourceOrTrivia": "Kearey, Klepeis, Vine (2009) Global Tectonics",
      "wrongOptionsReason": [
        "발산대는 판이 서로 멀어지며 새로운 지각이 생성되는 곳입니다.",
        "정답입니다. 판이 지하로 침강하는 섭입대입니다.",
        "변환단층은 판이 수평으로 엇갈려 미끄러지는 보존형 경계입니다.",
        "해저 확장대는 해령에서 새로운 해양저가 생겨나는 곳입니다."
      ]
    },
    {
      "id": "ultra_geo_11",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "지구 궤도의 주기적 천문학적 변화(이심률, 자전축 기울기, 세차운동)가 지구에 도달하는 태양 복사 에너지 분포를 변화시켜 빙하기와 간빙기를 주기적으로 촉발한다는 이론은?",
      "options": [
        "맨틀 플룸 주기설",
        "태양 활동 주기설",
        "밀란코비치 주기 (Milankovitch Cycles)",
        "판게아 주기"
      ],
      "correctIndex": 2,
      "explanation": "세르비아 물리학자 밀루틴 밀란코비치가 계산한 이론으로, 이심률(10만년), 자전축 기울기(4.1만년), 세차운동(2.6만년) 주기의 중첩이 빙하기를 지배함을 규명했습니다.",
      "deepKnowledge": "1976년 심해 퇴적물 코어의 산소 동위원소(δ¹⁸O(산소 동위원소 비)) 분석을 통해 지질학적 빙하기 데이터와 밀란코비치 계산이 완벽히 일치함이 입증되었습니다.",
      "sourceOrTrivia": "Hays, Imbrie, Shackleton (1976) Science 194",
      "wrongOptionsReason": [
        "맨틀 플룸 주기설은 지각 하부의 대규모 마그마 상승 주기입니다.",
        "태양 활동 주기는 11년 흑점 주기를 가리킵니다.",
        "정답입니다. 지구 궤도 천문학적 요인에 의한 기후 주기 이론입니다.",
        "판게아 주기는 초대륙이 모이고 흩어지는 5억 년 주기입니다."
      ]
    },
    {
      "id": "ultra_geo_12",
      "topic": "지구과학 & 환경생태",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "판의 내부 맨틀 깊은 곳(코어-맨틀 경계인 D'' 층)에서 고온의 마그마 기둥이 상승하여 마그마를 지속적으로 공급하는 지점으로, 하와이 제도 화산열을 형성한 근원은?",
      "options": [
        "배호 분지",
        "해령 (Oceanic Ridge)",
        "해구 (Trench)",
        "열점 (Hotspot / Mantle Plume)"
      ],
      "correctIndex": 3,
      "explanation": "열점은 판의 이동과 무관하게 하부 맨틀에서 고정된 위치를 유지하므로, 그 위를 지나가는 해양판에 줄지어 늘어선 화산섬 사슬(하와이-엠페러 해산열)을 만듭니다.",
      "deepKnowledge": "J. 투조 윌슨이 제안하고 제이슨 모건이 맨틀 플룸 모델로 체계화한 개념으로 판구조론의 판 내부 화산 활동을 완벽히 설명했습니다.",
      "sourceOrTrivia": "Wilson (1963) Can. J. Phys. / Morgan (1971) Nature",
      "wrongOptionsReason": [
        "배호 분지는 화산호 뒤쪽에서 지각이 인장되어 생긴 분지입니다.",
        "해령은 판이 갈라지는 발산형 해저 산맥입니다.",
        "해구는 판이 섭입하는 깊은 해저 골짜기입니다.",
        "정답입니다. 판 내부 고정된 마그마 공급처인 열점입니다."
      ]
    },
    {
      "id": "ultra_geo_13",
      "topic": "지구과학 & 환경생태",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "프레온가스(CFCs)에 의해 남극 상공의 오존층이 파괴되는 것을 막기 위해 1987년 국제사회가 오존층 파괴 물질의 생산과 사용을 전면 규제하기로 합의한 환경 협약은?",
      "options": [
        "몬트리올 의정서 (Montreal Protocol)",
        "파리 기후 협약",
        "교토 의정서",
        "바젤 협약"
      ],
      "correctIndex": 0,
      "explanation": "몬트리올 의정서는 역사상 가장 성공적인 국제 환경 협약으로 평가받으며, CFC 물질 퇴출로 현재 성층권 오존층이 점진적으로 회복되고 있습니다.",
      "deepKnowledge": "CFC에서 자외선에 의해 분리된 염소 원자(Cl) 1개는 연쇄 촉매 반응을 통해 무려 10만 개 이상의 오존 분자(O₃)를 파괴합니다.",
      "sourceOrTrivia": "Molina & Rowland (1974) Nature / UNEP Montreal Protocol (1987)",
      "wrongOptionsReason": [
        "정답입니다. 오존층 파괴 물질을 규제한 몬트리올 의정서입니다.",
        "파리 협약은 2015년 지구 온도 상승을 1.5℃ 이내로 제한하기로 한 협약입니다.",
        "교토 의정서는 1997년 온실가스 감축을 위해 채택된 협약입니다.",
        "바젤 협약은 유해 폐기물의 국가 간 불법 이동을 규제하는 협약입니다."
      ]
    },
    {
      "id": "ultra_geo_14",
      "topic": "지구과학 & 환경생태",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "약 5,600만 년 전 신생대 팔레오세-에오세 경계에서 대기 중으로 대량의 온실가스가 급격히 분출되어 전 지구 기온이 5~8℃ 폭등하고 심해 탄산염 층이 용해된 극단적 온난화 사건은?",
      "options": [
        "소빙하기 (Little Ice Age)",
        "PETM (팔레오세-에오세 최고온기)",
        "영거 드라이아스기",
        "중세 온난기"
      ],
      "correctIndex": 1,
      "explanation": "PETM(Paleocene-Eocene Thermal Maximum)은 심해 메탄 하이드레이트 붕괴 등으로 수천 기가톤의 탄소가 분출된 사건으로, 현재 인류세의 온난화 속도와 영향을 비교 연구하는 고기후학의 핵심 모델입니다.",
      "deepKnowledge": "탄소 동위원소(δ¹³C(탄소 동위원소 비))의 급격한 음의 변위(Negative Excursion)를 통해 유기 탄소의 대량 유입이 실증되었습니다.",
      "sourceOrTrivia": "Zachos et al. (2001) Science 292, 686-693",
      "wrongOptionsReason": [
        "소빙하기는 14~19세기에 걸쳐 유럽과 북미를 덮친 한랭기입니다.",
        "정답입니다. 과거 지구 온난화의 대표 모델인 PETM 사건입니다.",
        "영거 드라이아스기는 마지막 빙하기 직후 일시적으로 찾아온 급격한 한랭화 사건입니다.",
        "중세 온난기는 10~13세기의 국지적 온난기입니다."
      ]
    },
    {
      "id": "ultra_geo_15",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "지구 표면이 흡수한 태양 복사 에너지를 반사하는 비율을 뜻하며, 눈과 빙하(0.8~0.9)가 아스팔트나 짙은 바다(0.06~0.1)보다 훨씬 높은 물리량은?",
      "options": [
        "방사율 (Emissivity)",
        "투과율 (Transmittance)",
        "알베도 (Albedo, 반사율)",
        "굴절률"
      ],
      "correctIndex": 2,
      "explanation": "알베도가 높으면 빛을 반사해 표면이 차가워지고, 온난화로 빙하가 녹으면 알베도가 낮아져 태양열을 더 많이 흡수해 빙하가 더 빨리 녹는 양의 되먹임(Ice-Albedo Feedback)이 일어납니다.",
      "deepKnowledge": "지구 전체의 평균 알베도는 약 0.30(30%) 수준으로, 구름과 지표면 얼음이 결정적인 기여를 합니다.",
      "sourceOrTrivia": "Budyko (1969) Tellus 21",
      "wrongOptionsReason": [
        "방사율은 물체가 흑체 대비 복사열을 방출하는 효율입니다.",
        "투과율은 매질을 빛이 통과하는 비율입니다.",
        "정답입니다. 표면의 빛 반사율을 나타내는 알베도입니다.",
        "굴절률은 매질 내에서 빛의 속도가 줄어드는 비율입니다."
      ]
    },
    {
      "id": "ultra_geo_16",
      "topic": "지구과학 & 환경생태",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "생태계에서 개체수가 많지는 않지만 생태계 전체의 구조와 생물다양성을 유지하는 데 결정적인 영향력을 행사하는 종(예: 북미 태평양 연안의 해달)을 지칭하는 용어는?",
      "options": [
        "우점종 (Dominant Species)",
        "외래종 (Invasive Species)",
        "지표종 (Indicator Species)",
        "핵심종 (Keystone Species)"
      ],
      "correctIndex": 3,
      "explanation": "로버트 페인이 제안한 개념으로, 해달이 성게를 잡아먹음으로써 해조류(다시마 숲)가 초토화되는 것을 막아 연안 전체의 생태계를 지탱하는 것이 대표적 사례입니다.",
      "deepKnowledge": "핵심종이 사라지면 영양 단계의 연쇄 붕괴(Trophic Cascade)가 일어나 생태계 전체의 종 다양성이 급감합니다.",
      "sourceOrTrivia": "Paine (1966) American Naturalist 100",
      "wrongOptionsReason": [
        "우점종은 생체량이나 개체수가 가장 많아 겉보기를 지배하는 종입니다.",
        "외래종은 외부에서 유입되어 토착 생태계를 교란할 수 있는 종입니다.",
        "지표종은 환경 오염이나 기후 변화를 민감하게 반영하는 종입니다.",
        "정답입니다. 아치석의 쐐기돌처럼 생태계를 지탱하는 핵심종입니다."
      ]
    },
    {
      "id": "ultra_geo_17",
      "topic": "지구과학 & 환경생태",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "지구 자전으로 인해 북반구에서 운동하는 물체(바람, 해류 등)가 진행 방향의 오른쪽으로 휘어지게 만드는 가상적인 힘은?",
      "options": [
        "전향력 (코리올리 힘, Coriolis Force)",
        "원심력",
        "구심력",
        "마찰력"
      ],
      "correctIndex": 0,
      "explanation": "가스파르-귀스타브 드 코리올리가 수학적으로 유도한 힘으로, 회전 좌표계에서 운동하는 물체에 작용하여 북반구에서는 오른쪽, 남반구에서는 왼쪽으로 편향을 일으킵니다.",
      "deepKnowledge": "태풍(열대저기압)이 북반구에서 반시계 방향으로 소용돌이치며 중심부로 불어 들어가는 이유가 바로 이 전향력 때문입니다.",
      "sourceOrTrivia": "Coriolis (1835) Journal de l'École Polytechnique",
      "wrongOptionsReason": [
        "정답입니다. 지구 자전에 의한 전향력(코리올리 힘)입니다.",
        "원심력은 회전계에서 바깥쪽으로 튕겨 나간다고 느끼는 관성력입니다.",
        "구심력은 원운동을 유지하기 위해 중심으로 당기는 실제 힘입니다.",
        "마찰력은 두 표면의 접촉에 의해 운동을 방해하는 저항력입니다."
      ]
    },
    {
      "id": "ultra_geo_18",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "해저 지진, 해저 화산 폭발, 해저 산사태 등으로 인해 거대한 해수 전체가 상하로 출렁거리며 시속 수백 km로 해안으로 밀려오는 파동은?",
      "options": [
        "풍랑 (Wind Waves)",
        "지진해일 (쓰나미, Tsunami)",
        "조석 (Tides)",
        "연안류"
      ],
      "correctIndex": 1,
      "explanation": "쓰나미는 천해파(Shallow Water Wave)의 특성을 가져 파장이 수백 km에 달하므로 수심이 깊은 먼바다에서는 높이가 낮지만, 해안에 도달하면 속도가 줄어들며 파고가 수십 미터로 치솟습니다.",
      "deepKnowledge": "쓰나미의 전파 속도는 v = √(g · h) (g는 중력가속도, h는 수심)로 계산되어, 수심 4,000m의 대양에서는 제트기 속도인 시속 약 700km로 질주합니다.",
      "sourceOrTrivia": "National Oceanic and Atmospheric Administration (NOAA) Tsunami Basics",
      "wrongOptionsReason": [
        "풍랑은 해수면의 바람에 의해 생기는 일반 파도입니다.",
        "정답입니다. 해저 지각 변동에 의한 지진해일(쓰나미)입니다.",
        "조석은 달과 태양의 기조력에 의한 하루 1~2회의 해수면 오르내림입니다.",
        "연안류는 해안선을 따라 평행하게 흐르는 해류입니다."
      ]
    },
    {
      "id": "ultra_geo_19",
      "topic": "지구과학 & 환경생태",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "20세기 중반 해령을 축으로 대칭적인 줄무늬 형태로 기록된 고지자기 역전 패턴을 분석하여 '해저확장설(Seafloor Spreading)'을 결정적으로 입증한 발견은?",
      "options": [
        "베니오프대 발견",
        "베게너의 화석 일치",
        "바인-매슈스-몰리 가설 (Vine-Matthews-Morley Hypothesis)",
        "모호로비치치 굴절파"
      ],
      "correctIndex": 2,
      "explanation": "해령에서 솟아나 굳는 현무암질 용암에 당시 지구 자기장의 방향이 기록되고, 해령 양쪽으로 해저가 확장되면서 완벽한 대칭 줄무늬 자기 테이프 기록을 남겼음을 증명했습니다.",
      "deepKnowledge": "이 발견은 당시 학계에서 조롱받던 알프레트 베게너의 대륙이동설을 현대의 정밀한 판구조론으로 완성시킨 결정적 계기가 되었습니다.",
      "sourceOrTrivia": "Vine & Matthews (1963) Nature 199, 947-949",
      "wrongOptionsReason": [
        "베니오프대는 섭입대의 지진 진원 분포를 밝힌 것입니다.",
        "화석 일치는 베게너가 제시한 대륙이동의 초기 정성적 증거입니다.",
        "정답입니다. 해양저 자기 역전 대칭 패턴을 입증한 가설입니다.",
        "모호면은 지각과 맨틀의 경계면입니다."
      ]
    },
    {
      "id": "ultra_geo_20",
      "topic": "지구과학 & 환경생태",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "지구 역사상 약 7억 년 전 원생누대 후기에 지구 표면 전체가 적도 부근까지 완전히 빙하로 뒤덮여 우주에서 볼 때 거대한 눈 뭉치처럼 보였다는 지질학적 학설은?",
      "options": [
        "안데스-사하라 빙하기",
        "소빙하기설",
        "휴로니안 빙하기",
        "눈덩이 지구 가설 (Snowball Earth Hypothesis)"
      ],
      "correctIndex": 3,
      "explanation": "폴 호프만 등이 정립한 눈덩이 지구 가설은 초토화된 알베도 양의 피드백으로 적도까지 바다가 수백 미터 두께로 얼어붙었으나, 화산에서 분출된 CO₂가 축적되어 해빙되었다고 설명합니다.",
      "deepKnowledge": "눈덩이 지구가 녹는 과정에서 빙하 퇴적층 위에 탄산염암 캡(Cap Carbonate)이 형성되었으며, 이후 캄브리아기 다세포 생물의 폭발적 진화로 이어졌습니다.",
      "sourceOrTrivia": "Hoffman et al. (1998) Science 281, 1342-1346",
      "wrongOptionsReason": [
        "안데스-사하라 빙하기는 고생대 오르도비스기 말의 빙하기입니다.",
        "소빙하기는 근세의 미미한 기온 강하 시기입니다.",
        "휴로니안 빙하기는 24억 년 전 대산화 사건 직후의 빙하기입니다.",
        "정답입니다. 적도까지 지구 전체가 얼어붙었던 눈덩이 지구 가설입니다."
      ]
    },
    {
      "id": "ultra_geo_21",
      "topic": "지구과학 & 환경생태",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "마그마가 지표면으로 분출하여 빠르게 냉각되면서 입자가 미세하거나 유리질로 형성된 화성암(예: 현무암, 유문암)을 무엇이라 부르는가?",
      "options": [
        "화산암 (Volcanic Rock / 분출암)",
        "심성암 (Plutonic Rock)",
        "변성암 (Metamorphic Rock)",
        "퇴적암 (Sedimentary Rock)"
      ],
      "correctIndex": 0,
      "explanation": "화산암(분출암)은 지표면 밖으로 분출되어 급랭하므로 광물 결정이 크게 자랄 시간이 없어 세립질이나 유리질 조직을 띱니다.",
      "deepKnowledge": "반면 지하 깊은 곳에서 서서히 식어 광물 입자가 굵고 뚜렷하게 발달한 화성암을 심성암(예: 화강암, 반려암)이라고 부릅니다.",
      "sourceOrTrivia": "Tarbuck, Lutgens, Tasa (2017) Earth: An Introduction to Physical Geology",
      "wrongOptionsReason": [
        "정답입니다. 지표 부근에서 급랭한 화산암입니다.",
        "심성암은 지하 깊은 곳에서 서서히 굳은 조립질 화성암입니다.",
        "변성암은 높은 열과 압력으로 기존 암석이 재결정된 암석입니다.",
        "퇴적암은 풍화 퇴적물이 다져지고 굳어져 층리를 이룬 암석입니다."
      ]
    },
    {
      "id": "ultra_geo_22",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "생태계 먹이사슬의 각 영양 단계에서 상위 영양 단계로 전달되는 에너지의 비율이 보통 10% 내외에 불과하다는 생태학 법칙은?",
      "options": [
        "하디-바인베르크 법칙",
        "린데만 10% 법칙 (Lindeman's Efficiency)",
        "베르그만의 법칙",
        "알렌의 법칙"
      ],
      "correctIndex": 1,
      "explanation": "레이먼드 린데만이 확립한 법칙으로, 하위 생물이 섭취한 에너지의 약 90%는 호흡, 열 손실, 배설 등으로 소모되고 오직 10%만이 다음 단계의 생체량으로 축적됩니다.",
      "deepKnowledge": "이 에너지 전달 효율의 급감 때문에 먹이사슬의 최상위 포식자(호랑이, 독수리 등)는 개체수가 매우 적을 수밖에 없으며 먹이 피라미드가 4~5단계 이상 유지되기 어렵습니다.",
      "sourceOrTrivia": "Lindeman (1942) Ecology 23, 399-417",
      "wrongOptionsReason": [
        "하디-바인베르크 법칙은 이상적 개체군에서 유전자 빈도의 보존 법칙입니다.",
        "정답입니다. 영양 단계별 에너지 전달 한계를 규명한 10% 법칙입니다.",
        "베르그만의 법칙은 추운 지방 동물일수록 체구가 커진다는 법칙입니다.",
        "알렌의 법칙은 추운 지방 동물일수록 말단 부위(귀, 코)가 작아진다는 법칙입니다."
      ]
    },
    {
      "id": "ultra_geo_23",
      "topic": "지구과학 & 환경생태",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "대기 중의 온실가스가 지표면에서 방출되는 지구 복사 에너지(적외선)를 흡수하였다가 다시 지표면으로 재복사하여 지구 평균 기온을 약 15℃로 온난하게 유지시키는 현상은?",
      "options": [
        "산란 효과",
        "도시 열섬 효과",
        "온실효과 (Greenhouse Effect)",
        "단열 팽창"
      ],
      "correctIndex": 2,
      "explanation": "온실효과가 없다면 지구의 평균 표면 온도는 영하 18℃에 불과하여 생명체가 살 수 없었으나, 수증기, CO₂, CH₄ 등의 온실가스가 생존 가능한 온도를 보장합니다.",
      "deepKnowledge": "문제는 화석연료 연소로 온실가스 농도가 급격히 증가하여 평형을 깨고 '지구온난화(강화된 온실효과)'라는 인류세 위기를 촉발한 것입니다.",
      "sourceOrTrivia": "Fourier (1824) & Arrhenius (1896) Philosophical Magazine",
      "wrongOptionsReason": [
        "산란 효과는 빛이 입자에 부딪혀 사방으로 흩어지는 현상입니다.",
        "도시 열섬 효과는 인공 구조물로 도시 중심부 기온이 높아지는 현상입니다.",
        "정답입니다. 지구 복사 적외선을 흡수 재방출하는 온실효과입니다.",
        "단열 팽창은 공기 덩어리가 상승하며 압력 감소로 온도가 떨어지는 현상입니다."
      ]
    },
    {
      "id": "ultra_geo_24",
      "topic": "지구과학 & 환경생태",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "스웨덴 스톡홀름 회복력 센터가 2009년 발표한 프레임워크로, 인류가 안전하게 생존할 수 있는 지구 환경 한계치(기후변화, 생물다양성, 담수, 화학물질 등 9대 영역)를 정의한 개념은?",
      "options": [
        "생태 수용력",
        "국가 온실가스 감축목표 (NDC)",
        "탄소 중립 넷제로",
        "행성 한계선 (Planetary Boundaries)"
      ],
      "correctIndex": 3,
      "explanation": "요한 록스트룀 등이 제안한 행성 한계선은 지구 시스템이 자정 능력을 잃고 파국적인 비가역 상태로 전환되지 않기 위해 지켜야 할 절대적 생태 안전 영역입니다.",
      "deepKnowledge": "2023년 최신 평가에 따르면 9개 영역 중 생물권 온전성, 기후변화, 신규 물질 유입, 질소·인 순환, 담수 변화, 토지 시스템 변화 등 6개 이상이 이미 한계선을 넘어섰습니다.",
      "sourceOrTrivia": "Rockström et al. (2009) Nature / Richardson et al. (2023) Science Advances",
      "wrongOptionsReason": [
        "생태 수용력은 자연이 재생산할 수 있는 생물학적 생산력의 총량입니다.",
        "NDC는 파리 협약에 따라 각국이 제출하는 탄소 감축 공약입니다.",
        "탄소 중립은 배출량과 흡수량을 같게 하여 순 배출을 0으로 만드는 것입니다.",
        "정답입니다. 인류의 안전한 생존 경계를 정의한 행성 한계선입니다."
      ]
    },
    {
      "id": "ultra_geo_25",
      "topic": "지구과학 & 환경생태",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "농경지 비료나 생활하수의 유입으로 하천과 호수에 질소와 인 같은 영양염류가 과다하게 유입되어 플랑크톤이 대량 증식하고 수중 용존산소가 고갈되는 현상은?",
      "options": [
        "부영양화 (Eutrophication)",
        "사막화 (Desertification)",
        "토양 산성화",
        "생물 농축"
      ],
      "correctIndex": 0,
      "explanation": "부영양화가 일어나면 조류가 폭발적으로 번성(녹조/적조)하고, 이 조류가 죽어 분해될 때 호기성 세균이 수중 산소를 모두 소모하여 어패류가 떼죽음을 당하는 빈산소 수괴(Dead Zone)가 형성됩니다.",
      "deepKnowledge": "세계 해양과 하구에 보고된 저산소 데드존(Dead Zone)의 수는 화학비료 사용 증가로 지난 반세기 동안 수백 개 이상으로 급증했습니다.",
      "sourceOrTrivia": "Diaz & Rosenberg (2008) Science 321, 926-929",
      "wrongOptionsReason": [
        "정답입니다. 영양염류 과다로 인한 수질 오염 현상인 부영양화입니다.",
        "사막화는 건조지대의 토양이 황폐화되는 현상입니다.",
        "토양 산성화는 산성비나 화학비료로 토양 pH가 떨어지는 현상입니다.",
        "생물 농축은 중금속 등이 먹이사슬 상위로 갈수록 농축되는 현상입니다."
      ]
    }
  ],
  "korean_history": [
    {
      "id": "ultra_kh_1",
      "topic": "한국사 탐구",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "세종대왕 대에 우리 민족 고유의 문자로 창제되어 1446년 반포된 문자이자, '백성을 가르치는 바른 소리'라는 뜻을 지닌 훈민정음의 본래 자음·모음 총 글자 수는?",
      "options": [
        "28자",
        "24자",
        "32자",
        "20자"
      ],
      "correctIndex": 0,
      "explanation": "세종 28년(1446년) 반포된 훈민정음은 초성(자음) 17자와 중성(모음) 11자로 구성되어 총 28자였습니다.",
      "deepKnowledge": "이후 순경음 비읍, 옛이응, 여린히읗, 반시옷, 아래아(·) 등 4글자가 사라지며 현대 한글은 24자를 기본 자모로 사용합니다.",
      "sourceOrTrivia": "훈민정음 해례본 (국보 제70호 / 유네스코 세계기록유산)",
      "wrongOptionsReason": [
        "정답입니다. 창제 당시 훈민정음의 자모 총수는 28자였습니다.",
        "24자는 현재 대한민국 표준 맞춤법에서 사용하는 기본 자모 수입니다.",
        "32자는 한글 역사상 쓰이지 않은 숫자입니다.",
        "20자는 자음 수보다도 적은 잘못된 수치입니다."
      ]
    },
    {
      "id": "ultra_kh_2",
      "topic": "한국사 탐구",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "고구려 제19대 군주로, 독자 연호인 '영락(永樂)'을 사용하고 백제와 신라, 후연, 거란, 숙신을 복속시켜 만주와 한반도 북부에 대제국을 건설한 정복 군주는?",
      "options": [
        "장수왕",
        "광개토대왕 (호태왕)",
        "소수림왕",
        "을지문덕"
      ],
      "correctIndex": 1,
      "explanation": "광개토대왕은 영락 연호를 통해 중국과 대등한 천하관을 천명하고 사방으로 영토를 개척하여 고구려 최전성기의 기틀을 열었습니다.",
      "deepKnowledge": "장수왕이 국내성(현 지안)에 건립한 광개토대왕릉비(414년)에는 대왕의 무훈과 백잔(백제) 토벌, 신라를 침략한 왜구 격퇴 과정이 생생히 기록되어 있습니다.",
      "sourceOrTrivia": "광개토대왕릉비 비문 / 삼국사기 고구려본기",
      "wrongOptionsReason": [
        "장수왕은 평양 천도를 단행하고 한강 유역을 완전히 장악한 아들입니다.",
        "정답입니다. 독자 연호 영락을 쓴 만주의 정복 군주 광개토대왕입니다.",
        "소수림왕은 불교 공인, 태학 설립, 율령 반포로 체제를 정비한 군주입니다.",
        "을지문덕은 수나라 30만 대군을 살수에서 궤멸시킨 명장입니다."
      ]
    },
    {
      "id": "ultra_kh_3",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "조선 후기 광해군 대에 경기도에서 시험 실시되어 숙종 대에 전국(평안·함경도 제외)으로 확대된 제도로, 각 고을의 특산물(공물) 대신 토지 결수에 따라 쌀, 포, 화폐로 납부하게 한 조세 개혁은?",
      "options": [
        "영정법",
        "균역법",
        "대동법 (大同法)",
        "과전법"
      ],
      "correctIndex": 2,
      "explanation": "대동법은 토지 1결당 쌀 12말(또는 동전)을 납부하게 함으로써 방납의 폐단을 혁파하고 과세 기준을 가호(집)에서 토지 소유 면적으로 전환했습니다.",
      "deepKnowledge": "대동법 시행으로 국가가 필요한 물품을 관허 상인인 '공인(貢人)'에게 구매하게 하면서 조선 후기 상품 화폐 경제가 비약적으로 발전했습니다.",
      "sourceOrTrivia": "조선왕조실록 광해군일기 / 김육의 대동법 상소문",
      "wrongOptionsReason": [
        "영정법은 인조 대에 풍흉에 관계없이 1결당 4말을 징수한 전세 제도입니다.",
        "균역법은 영조 대에 군포 부담을 2필에서 1필로 감면한 제도입니다.",
        "정답입니다. 공납의 폐단을 개혁한 조선 최고의 조세 제도 대동법입니다.",
        "과전법은 고려 말 신진사대부의 경제 기반을 마련한 토지 분급제입니다."
      ]
    },
    {
      "id": "ultra_kh_4",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "고려 광종(光宗)이 호족 세력을 억누르고 왕권을 강화하며 국가 재정을 확충하기 위해 억울하게 노비가 된 자들을 조사하여 양인으로 해방시킨 개혁 조치는?",
      "options": [
        "천민 해방령",
        "과거제 실시",
        "식읍 제도",
        "노비안검법 (奴婢按檢法)"
      ],
      "correctIndex": 3,
      "explanation": "노비안검법(956년)은 후삼국 혼란기에 호족들이 불법으로 사노비로 삼았던 양인들을 본래 신분으로 복권시켜 호족의 사병 기반을 해체하고 국고 수입을 늘렸습니다.",
      "deepKnowledge": "광종은 이어 후주 출신 귀화인 쌍기(雙冀)의 건의를 받아들여 958년 한반도 역사상 최초로 관료 선발 시험인 '과거제'를 도입했습니다.",
      "sourceOrTrivia": "고려사 광종 세가 / 삼국사절요",
      "wrongOptionsReason": [
        "천민 해방령은 1894년 갑오개혁의 신분제 폐지를 의미합니다.",
        "과거제는 958년에 실시된 인재 등용 시험 제도입니다.",
        "식읍은 공신이나 왕족에게 조세를 거둘 수 있도록 지급한 토지입니다.",
        "정답입니다. 호족의 기반을 꺾고 양인을 확충한 노비안검법입니다."
      ]
    },
    {
      "id": "ultra_kh_5",
      "topic": "한국사 탐구",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "신라 24대 진흥왕이 한강 유역과 가야, 함경도까지 영토를 확장한 후 국경 순수와 민심 위무를 기념하여 세운 4대 순수비 중, 조선 후기 추사 김정희가 탁본 연구로 비문의 실체를 밝혀낸 비석은?",
      "options": [
        "북한산비 (北漢山碑)",
        "창녕비",
        "황초령비",
        "마운령비"
      ],
      "correctIndex": 0,
      "explanation": "김정희는 무학대사비로 잘못 알려져 있던 북한산 비봉의 비석을 직접 답사하고 이끼를 벗겨 판독하여 '진흥왕 순수비'임을 최초로 고증했습니다.",
      "deepKnowledge": "김정희는 이 고증 성과를 비석 측면에 새겨 넣었으며, 저서 '금석과안록(金石過眼錄)'에 정밀한 금석학적 논증을 집대성했습니다.",
      "sourceOrTrivia": "김정희 금석과안록 / 북한산 신라 진흥왕 순수비 (국보 제3호)",
      "wrongOptionsReason": [
        "정답입니다. 추사 김정희가 고증하여 진흥왕 순수비임을 밝혀낸 북한산비입니다.",
        "창녕비는 비화가야를 정복한 후 세운 순수비입니다.",
        "황초령비는 함경도 함흥에 세워진 북진 개척 순수비입니다.",
        "마운령비는 함경도 이원에 세워진 순수비입니다."
      ]
    },
    {
      "id": "ultra_kh_6",
      "topic": "한국사 탐구",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "조선 정조(正祖)가 왕권 강화를 위해 왕립 도서관 기능을 겸하여 정책 연구 및 문예 부흥의 산실로 창설하고, 박제가·이덕무·유득공 등 서얼 출신 인재들을 검서관으로 파견한 기구는?",
      "options": [
        "장용영 (壯勇營)",
        "규장각 (奎章閣)",
        "초계문신제",
        "집현전"
      ],
      "correctIndex": 1,
      "explanation": "규장각은 창덕궁 후원에 설치되어 왕실 서적을 보관하고 국왕 친위 정책 브레인 집단 역할을 했으며, 신분 차별을 넘어 능력 위주로 서얼 학자들을 대거 등용했습니다.",
      "deepKnowledge": "정조는 또한 37세 이하 당하관 중에서 우수한 문신을 선발해 직접 재교육하는 '초계문신제'를 병행하여 개혁 정책을 추진했습니다.",
      "sourceOrTrivia": "홍재전서 규장각지 / 정조실록",
      "wrongOptionsReason": [
        "장용영은 정조의 왕권 호위를 위해 창설된 국왕 친위 군영입니다.",
        "정답입니다. 정조의 학술 연구 및 정책 싱크탱크인 규장각입니다.",
        "초계문신제는 인재 재교육 제도 자체의 명칭입니다.",
        "집현전은 세종 대에 학문 연구와 훈민정음 창제를 주도한 기구입니다."
      ]
    },
    {
      "id": "ultra_kh_7",
      "topic": "한국사 탐구",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1919년 3·1 운동의 결실로 상하이에 수립된 대한민국 임시정부가 1941년 조소앙(趙素昻)의 철학을 바탕으로 공표한 건국강령의 핵심 이념으로, 개인·민족·국가 간의 균등을 주창한 사상은?",
      "options": [
        "신간회 강령",
        "민족유일당주의",
        "삼균주의 (三均主義)",
        "민족개조론"
      ],
      "correctIndex": 2,
      "explanation": "삼균주의는 정치적 균등(보통선거), 경제적 균등(국유화 및 균등 분배), 교육적 균등(국비 의무교육)을 통해 진정한 민주공화국을 완성하자는 조소앙의 독창적 국가철학입니다.",
      "deepKnowledge": "삼균주의 건국강령은 광복 후 제헌 헌법의 경제 조항과 기본권 체계(단결권, 무상의무교육 등)에 결정적인 영향을 미쳤습니다.",
      "sourceOrTrivia": "대한민국 임시정부 건국강령 (1941.11.28 공표)",
      "wrongOptionsReason": [
        "신간회 강령은 1927년 기회주의 배격과 민족 단결을 내세운 국내 단체 강령입니다.",
        "민족유일당 운동은 좌우합작을 통한 통일전선 형성 운동입니다.",
        "정답입니다. 임시정부 건국강령의 뼈대를 이룬 조소앙의 삼균주의입니다.",
        "민족개조론은 이광수가 1922년 발표한 타협적 개량주의 논설입니다."
      ]
    },
    {
      "id": "ultra_kh_8",
      "topic": "한국사 탐구",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "고려 후기 원나라의 간섭기(1281년경)에 일연(一然) 스님이 민족적 자긍심과 자주성을 고취하기 위해 편찬한 사서로, 단군조선 설화를 한반도 정사 기록 최초로 체계적으로 수록한 문헌은?",
      "options": [
        "동명왕편 (東明王篇)",
        "삼국사기 (三國史記)",
        "제왕운기 (帝王韻紀)",
        "삼국유사 (三國遺事)"
      ],
      "correctIndex": 3,
      "explanation": "삼국유사는 김부식의 삼국사기(유교적 합리주의)에서 누락된 향가 14수, 불교 설화, 단군신화의 웅녀·환웅 설화를 생생하게 보존한 귀중한 고대사 보고입니다.",
      "deepKnowledge": "일연은 기이편(紀異編) 서문에서 성인(聖人)이 나라를 열 때 신이한 기적이 따르는 것은 당연하다며 고조선 계승 의식을 확고히 했습니다.",
      "sourceOrTrivia": "일연 삼국유사 권제1 기이편 고조선조 (국보)",
      "wrongOptionsReason": [
        "동명왕편은 이규보가 고구려 동명왕의 영웅성을 5언시로 찬양한 작품입니다.",
        "삼국사기는 1145년 김부식이 기전체로 편찬한 정사 사서입니다.",
        "제왕운기는 1287년 이승휴가 운문(시)으로 중국과 한국사를 엮은 사서입니다.",
        "정답입니다. 단군 신화와 향가를 전하는 귀중한 보고 삼국유사입니다."
      ]
    },
    {
      "id": "ultra_kh_9",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1894년 전봉준을 중심으로 고부 군수 조병갑의 탐학에 맞서 봉기하여 황토현 전투에서 관군을 격파하고 전주화약을 체결했던 역사적 민중 항쟁은?",
      "options": [
        "동학농민운동 (東學農民運動)",
        "임술농민봉기",
        "홍경래의 난",
        "진주민란"
      ],
      "correctIndex": 0,
      "explanation": "동학농민운동은 반봉건(폐정개혁 12개조, 집강소 설치)과 반외세(우금치 전투)를 기치로 내건 한국 근대사 최대 규모의 농민 혁명 운동이었습니다.",
      "deepKnowledge": "이 운동 과정에서 체결된 전주화약 이후 농민군은 자치 개혁 기구인 '집강소(執綱所)'를 전라도 전역에 설치하고 신분 차별 폐지와 토지 균분을 추진했습니다.",
      "sourceOrTrivia": "동학농민혁명기록물 (유네스코 세계기록유산)",
      "wrongOptionsReason": [
        "정답입니다. 반봉건·반침략 근대 혁명의 횃불 동학농민운동입니다.",
        "임술농민봉기는 1862년 진주를 시발로 전국으로 번진 삼정의 문란 저항입니다.",
        "홍경래의 난은 1811년 평안도 지역 차별에 맞서 일어난 농민 항쟁입니다.",
        "진주민란은 1862년 백낙신의 학정에 맞선 유계춘 중심의 봉기입니다."
      ]
    },
    {
      "id": "ultra_kh_10",
      "topic": "한국사 탐구",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "임진왜란 당시 충무공 이순신 장군이 13척의 판옥선으로 133척의 일본 수군을 울돌목의 험준한 조류를 이용하여 대파한 기적적인 승첩은?",
      "options": [
        "한산도 대첩",
        "명량 대첩 (鳴梁大捷)",
        "노량 대첩",
        "옥포 해전"
      ],
      "correctIndex": 1,
      "explanation": "1597년 정유재란 당시 원균의 칠천량 참패로 괴멸 직전이던 조선 수군을 수습한 이순신은 '신에게는 아직 12척의 배가 남아 있사옵니다'라는 장계를 올리고 명량에서 대승을 거두었습니다.",
      "deepKnowledge": "울돌목의 좁은 해협과 시속 20km에 달하는 급류 역류 시간을 계산한 정밀한 조류 전술과 지형 활용의 세계 해전사적 금자탑입니다.",
      "sourceOrTrivia": "이순신 난중일기 정유년 9월 / 선조실록",
      "wrongOptionsReason": [
        "한산도 대첩은 1592년 학익진을 펼쳐 일본 주력을 격멸한 해전입니다.",
        "정답입니다. 13척으로 왜선 133척을 격파한 명량 해전입니다.",
        "노량 대첩은 1598년 퇴각하는 왜군을 소탕하다 장군이 순국한 마지막 해전입니다.",
        "옥포 해전은 임진왜란 개전 후 조선 수군의 첫 승리를 거둔 해전입니다."
      ]
    },
    {
      "id": "ultra_kh_11",
      "topic": "한국사 탐구",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "백제 제25대 군주로, 공주 송산리 고분군에서 도굴되지 않은 채 완전한 형태로 발견되었으며 중국 남조 양나라와의 활발한 교류를 증명하는 매지권(지석)이 출토된 왕릉의 주인공은?",
      "options": [
        "근초고왕",
        "성왕",
        "무령왕 (武寧王)",
        "의자왕"
      ],
      "correctIndex": 2,
      "explanation": "1971년 배수로 공사 중 우연히 발견된 무령왕릉에서는 '영동대장군 백제 사마왕'이 적힌 지석이 출토되어 삼국시대 고분 중 유일하게 축조 연대와 피장자가 확실히 밝혀졌습니다.",
      "deepKnowledge": "무령왕릉은 중국 남조 양나라 양식의 연꽃무늬 벽돌무덤(전축분) 구조로, 22담로에 왕족을 파견해 지방 통제를 강화했던 무령왕 대의 국력을 증명합니다.",
      "sourceOrTrivia": "무령왕릉 지석 (국보 제163호) / 공주 송산리 고분군",
      "wrongOptionsReason": [
        "근초고왕은 4세기 백제 전성기를 이끌고 요서와 규슈에 진출한 군주입니다.",
        "성왕은 사비(부여)로 천도하고 관산성 전투에서 전사한 무령왕의 아들입니다.",
        "정답입니다. 고대사 발굴의 기적으로 불리는 무령왕릉의 주인공 무령왕입니다.",
        "의자왕은 백제의 마지막 31대 군주입니다."
      ]
    },
    {
      "id": "ultra_kh_12",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1907년 일본에 진 나랏빚 1,300만 원을 국민들의 성금으로 갚아 국권을 회복하자는 취지로 대구에서 서상돈, 김광제 등이 발의하고 대한매일신보가 전국적으로 확산시킨 운동은?",
      "options": [
        "물산장려운동",
        "브나로드 운동",
        "형평운동",
        "국채보상운동 (國債報償運動)"
      ],
      "correctIndex": 3,
      "explanation": "국채보상운동은 남성들의 금연·금주와 여성들의 패물 헌납을 통해 거국적으로 전개되었으나, 통감부의 양기탁 횡령 조작 탄압으로 좌절되었습니다.",
      "deepKnowledge": "국채보상운동 관련 기록물은 1997년 외환위기 당시 금모으기 운동의 역사적 원형으로 인정받아 2017년 유네스코 세계기록유산에 등재되었습니다.",
      "sourceOrTrivia": "대한매일신보 국채보상 취지서 / 유네스코 세계기록유산",
      "wrongOptionsReason": [
        "물산장려운동은 1920년대 조만식 중심의 국산품 애용 운동입니다.",
        "브나로드 운동은 1930년대 동아일보 주도의 농촌 계몽 운동입니다.",
        "형평운동은 1923년 진주에서 일어난 백정 신분차별 철폐 운동입니다.",
        "정답입니다. 담배를 끊고 패물을 모아 빚을 갚으려 했던 국채보상운동입니다."
      ]
    },
    {
      "id": "ultra_kh_13",
      "topic": "한국사 탐구",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "발해가 당나라와 일본에 보낸 공식 국서에서 발해 국왕을 스스로 무엇이라 칭하여 고구려를 직계 계승했음을 대외적으로 명백히 선포하였는가?",
      "options": [
        "고려국왕 (高麗國王)",
        "말갈국왕",
        "발해군왕",
        "대진천황"
      ],
      "correctIndex": 0,
      "explanation": "발해 2대 무왕과 3대 문왕은 일본에 보낸 국서에서 '고려국왕(高麗國王)'이라는 칭호와 '고려의 옛 땅을 회복하고 부여의 유속을 이어받았다'는 계승 의식을 분명히 밝혔습니다.",
      "deepKnowledge": "일본의 역사서 '속일본기(續日本紀)'에는 발해 사신단을 '고려사(高麗使)'로 기록하고 있어 당시 동아시아 국제사회에서 발해가 고구려의 후계국으로 공인되었음을 실증합니다.",
      "sourceOrTrivia": "속일본기(續日本紀) 신키 5년(728년) 발해 국서",
      "wrongOptionsReason": [
        "정답입니다. 고구려를 계승하여 공식 국서에 명시한 칭호인 고려국왕입니다.",
        "말갈국왕은 발해의 지배층이 사용한 적이 없는 왜곡된 칭호입니다.",
        "발해군왕은 당나라가 초기에 책봉했던 격하된 작호입니다.",
        "대진천황은 공식 국서의 대외적 서명이 아닙니다."
      ]
    },
    {
      "id": "ultra_kh_14",
      "topic": "한국사 탐구",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "조선 태조 이성계가 한양으로 천도한 후 종묘와 사직단을 세우고 조선의 정궁으로 창건한 최초의 궁궐은?",
      "options": [
        "창덕궁",
        "경복궁 (景福宮)",
        "덕수궁",
        "창경궁"
      ],
      "correctIndex": 1,
      "explanation": "경복궁은 1395년 정도전이 시경의 구절 '이미 술에 취하고 덕에 배부르니 군자 만년 그대의 큰 복을 돕기를 빈다'에서 이름을 지어 창건한 법궁입니다.",
      "deepKnowledge": "임진왜란 때 전소된 경복궁은 270여 년간 폐허로 방치되다가 19세기 흥선대원군이 왕실의 위엄을 회복하기 위해 당백전과 원납전을 동원해 중건했습니다.",
      "sourceOrTrivia": "태조실록 권8 태조 4년 10월 7일",
      "wrongOptionsReason": [
        "창덕궁은 태종 대에 지어져 후원(비원)이 아름다운 이궁입니다.",
        "정답입니다. 정도전이 이름을 지은 조선의 으뜸 정궁 경복궁입니다.",
        "덕수궁은 임진왜란 후 선조가 임시 거처로 쓴 경운궁의 후신입니다.",
        "창경궁은 성종이 세 대비를 모시기 위해 건립한 궁궐입니다."
      ]
    },
    {
      "id": "ultra_kh_15",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "고려 후기 권문세족들이 불법으로 농민의 토지를 빼앗아 형성한 대규모 농장을 개혁하고 양민을 해방시키기 위해 공민왕과 승려 신돈이 설치한 임시기구는?",
      "options": [
        "식목도감",
        "도병마사",
        "전민변정도감 (轉民辨整都監)",
        "교정도감"
      ],
      "correctIndex": 2,
      "explanation": "공민왕 15년(1366년) 신돈의 주도로 설치된 전민변정도감은 권문세족의 불법 점유 토지를 원래 주인에게 돌려주고 노비로 전락한 자들을 양민으로 해방시켰습니다.",
      "deepKnowledge": "기득권 귀족들의 거센 반발로 신돈이 처형되고 공민왕이 시해되면서 개혁은 좌절되었으나, 이후 신진사대부의 토지 개혁(과전법)으로 이어졌습니다.",
      "sourceOrTrivia": "고려사 공민왕 세가 / 신돈 열전",
      "wrongOptionsReason": [
        "식목도감은 법제와 격식을 제정하던 고려의 임시 회의 기구입니다.",
        "도병마사는 국방과 군사 문제를 회의하던 고려 고유의 최고 회의 기구입니다.",
        "정답입니다. 토지와 노비의 원상 복구를 위해 설치된 전민변정도감입니다.",
        "교정도감은 최씨 무신정권의 최고 권력 통치 기구입니다."
      ]
    },
    {
      "id": "ultra_kh_16",
      "topic": "한국사 탐구",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "조선 연산군 4년(1498년), 김종직이 단종을 폐위하고 왕위를 찬탈한 세조를 중국의 초나라 회왕을 살해한 항우에 빗대어 비판한 글 '조의제문(弔義帝文)'이 사초에 실린 것이 발단이 되어 사림이 화를 입은 사건은?",
      "options": [
        "갑자사화",
        "을사사화",
        "기묘사화",
        "무오사화 (戊午士禍)"
      ],
      "correctIndex": 3,
      "explanation": "유자광 등 훈구파가 김일손이 춘추관 실록 사초에 김종직의 조의제문을 실은 것을 빌미로 사림파를 대거 숙청한 조선 최초의 사화입니다.",
      "deepKnowledge": "이후 연산군의 생모 폐비 윤씨 사사 사건으로 갑자사화(1504), 조광조의 개혁에 반발한 기묘사화(1519), 외척 권력 다툼인 을사사화(1545)로 이어집니다.",
      "sourceOrTrivia": "연산군일기 무오년 사초 필화 사건",
      "wrongOptionsReason": [
        "갑자사화는 폐비 윤씨 복위 문제로 훈구와 사림이 모두 피해를 입은 사건입니다.",
        "을사사화는 대윤(윤임)과 소윤(윤원형) 외척 간의 권력 투쟁 사화입니다.",
        "기묘사화는 조광조의 위훈삭제와 현량과 실시에 반발한 훈구의 반격입니다.",
        "정답입니다. 김종직의 조의제문이 발단이 된 무오사화입니다."
      ]
    },
    {
      "id": "ultra_kh_17",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "조선 후기 중농학파 실학자로, 유형원의 반계수록을 계승하여 '여전론(閭田論)'이라는 공동 소유·공동 경작 제도를 주장하고 '목민심서', '경세유표'를 저술한 인물은?",
      "options": [
        "정약용 (丁若鏞)",
        "박제가",
        "박지원",
        "이익"
      ],
      "correctIndex": 0,
      "explanation": "다산 정약용은 18년간의 강진 유배 생활 동안 500여 권의 방대한 저술을 남기며 조선 후기 실학사상을 집대성한 대학자입니다.",
      "deepKnowledge": "정약용은 여전론이 실현되기 어렵자 현실적 대안으로 1결의 토지를 우물 정(井) 자 모양으로 나누어 경작하는 정전론(井田論)을 수정 제시했습니다.",
      "sourceOrTrivia": "정약용 여유당전서(與猶堂全書)",
      "wrongOptionsReason": [
        "정답입니다. 여전론과 목민심서를 저술한 실학의 집대성자 정약용입니다.",
        "박제가는 북학의에서 우물물의 비유로 소비를 통한 생산 촉진을 주장했습니다.",
        "박지원은 열하일기를 통해 화폐 유통과 수레 사용을 주장한 중상학파입니다.",
        "이익은 한전론(영업전 보장)을 제안한 성호사설의 저자입니다."
      ]
    },
    {
      "id": "ultra_kh_18",
      "topic": "한국사 탐구",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "세종 26년(1444년) 전국의 토지 비옥도에 따라 6등급으로 나누고(전분6등법), 매년 농사의 풍흉에 따라 9등급으로 세금을 감면하는(연분9등법) 제도를 마련하기 전, 무려 17만 명의 백성에게 실시한 정책 여론조사는?",
      "options": [
        "호패 재조사",
        "공법(貢法) 국민 총투표",
        "양전 호구 조사",
        "균역 여론조사"
      ],
      "correctIndex": 1,
      "explanation": "세종대왕은 조세 제도인 공법을 제정하기 위해 1430년 정승부터 시골 평민 농민에 이르기까지 172,616명의 찬반 여론을 전수 수렴(찬성 98,657명, 반대 74,149명)한 세계 최초의 근대적 국민투표형 여론조사를 단행했습니다.",
      "deepKnowledge": "세종은 찬성이 많음에도 반대 지역(삼남 지방)의 우려를 반영해 14년간의 실험과 제도 보완을 거쳐 1444년 공법을 최종 완성했습니다.",
      "sourceOrTrivia": "세종실록 12년(1430년) 8월 10일 공법 여론 수렴 기사",
      "wrongOptionsReason": [
        "호패 재조사는 주민등록 확인 작업입니다.",
        "정답입니다. 17만 명의 백성에게 의견을 물은 세종의 공법 여론조사입니다.",
        "양전 호구 조사는 전답의 면적과 가구수를 파악하는 통계 조사입니다.",
        "균역 여론조사는 영조 대에 군포 경감을 위해 일부 대신에게 물은 조사입니다."
      ]
    },
    {
      "id": "ultra_kh_19",
      "topic": "한국사 탐구",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "1948년 5월 10일 한반도 역사상 최초로 21세 이상 모든 남녀에게 동등하게 투표권이 부여된 보통·평등·직접·비밀선거에 의해 선출되어 대한민국 헌법을 제정한 국회는?",
      "options": [
        "좌우합작위원회",
        "임시의정원",
        "제헌 국회 (制憲國會)",
        "남조선과도입법의원"
      ],
      "correctIndex": 2,
      "explanation": "5·10 총선거로 구성된 제헌 국회는 1948년 7월 17일 대한민국 헌법을 제정·공포하고, 이승만을 초대 대통령으로 선출하여 8월 15일 대한민국 정부 수립을 선포했습니다.",
      "deepKnowledge": "제헌 국회는 반민족행위처벌법(반민특위)과 농지개혁법(유상매수 유상분배)을 통과시켜 근대 국가의 법적 토대를 닦았습니다.",
      "sourceOrTrivia": "대한민국 제헌헌법 전문 / 국회도서관 헌정사 자료",
      "wrongOptionsReason": [
        "좌우합작위원회는 1946년 여운형과 김규식이 주도한 협의체입니다.",
        "임시의정원은 1919년 상하이 임시정부의 입법 기구입니다.",
        "정답입니다. 최초의 민주적 보통선거로 헌법을 제정한 제헌 국회입니다.",
        "남조선과도입법의원은 미군정기 1946년 구성된 자문형 입법 기구입니다."
      ]
    },
    {
      "id": "ultra_kh_20",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1897년 고종 황제가 러시아 공사관(아관파천)에서 환궁한 후 경운궁(덕수궁)에서 황제 즉위식을 거행하고, '광무(光武)' 연호와 함께 선포한 제국은?",
      "options": [
        "조선공화국",
        "대동제국",
        "고려제국",
        "대한제국 (大韓帝國)"
      ],
      "correctIndex": 3,
      "explanation": "고종은 원구단(환구단)을 쌓고 하늘에 제사를 올린 뒤 황제에 즉위하여 자주독립국임을 대내외에 선포하고 근대적 광무개혁을 추진했습니다.",
      "deepKnowledge": "광무개혁은 옛 제도를 근본으로 새로운 기술을 참작한다는 '구본신참(舊本新參)' 원칙 아래 지계(토지 소유권 증서) 발급, 전차 개통, 상공업 진흥을 추진했습니다.",
      "sourceOrTrivia": "고종실록 36권 광무 1년 10월 12일 황제 즉위 조서",
      "wrongOptionsReason": [
        "조선공화국은 공화정 국호로 당시에 수립되지 않았습니다.",
        "대동제국은 실존하지 않는 명칭입니다.",
        "고려제국은 역사상 공식 국호로 채택된 적이 없습니다.",
        "정답입니다. 자주독립 제국임을 선포한 대한제국입니다."
      ]
    },
    {
      "id": "ultra_kh_21",
      "topic": "한국사 탐구",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "고려 인종 13년(1135년), 묘청과 정지상 등 서경파가 풍수지리설을 내세워 수도를 서경(평양)으로 옮기고 금나라를 정벌하자며 대화궁을 짓고 국호를 '대위(大爲)'라 하여 일으킨 난은?",
      "options": [
        "묘청의 서경 천도 운동 (묘청의 난)",
        "이자겸의 난",
        "망이·망소이의 난",
        "만적의 난"
      ],
      "correctIndex": 0,
      "explanation": "김부식이 이끄는 개경 귀족 중심의 관군에 의해 진압된 묘청의 난은, 단재 신채호가 '조선사 일천년래 제1대사건'으로 규정할 만큼 민족 자주파 대 사대주의파의 중대한 분수령이었습니다.",
      "deepKnowledge": "신채호는 이 사건의 패배로 인해 한민족 고유의 낭가(郎家) 사상이 쇠퇴하고 사대주의 유교 유학이 득세하게 되었다고 탄식했습니다.",
      "sourceOrTrivia": "신채호 조선사연구초 (1924) / 고려사 인종 세가",
      "wrongOptionsReason": [
        "정답입니다. 신채호가 조선사 일천년래 제1대사건으로 꼽은 묘청의 난입니다.",
        "이자겸의 난은 1126년 외척 이자겸이 왕위를 찬탈하려 일으킨 반란입니다.",
        "망이·망소이의 난은 공주 명학소 특수행정구역 주민들의 봉기입니다.",
        "만적의 난은 1198년 개경에서 '왕후장상의 씨가 따로 있는가'를 외친 노비 반란입니다."
      ]
    },
    {
      "id": "ultra_kh_22",
      "topic": "한국사 탐구",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1926년 순종 황제의 인산일(장례일)을 계기로 사회주의 세력과 천도교 청년회, 학생들이 연대하여 거사한 대규모 항일 만세 운동은?",
      "options": [
        "광주 학생 항일 운동",
        "6·10 만세 운동",
        "3·1 운동",
        "원산 총파업"
      ],
      "correctIndex": 1,
      "explanation": "6·10 만세 운동은 사전 발각에도 불구하고 장례 행렬을 따라 학생들이 주도하여 태극기를 흔들며 만세를 외쳤으며, 좌우합작 단체인 신간회(1927) 결성의 결정적 계기가 되었습니다.",
      "deepKnowledge": "이 운동을 통해 일제의 가혹한 분열 공작 속에서도 민족주의 진영과 사회주의 진영이 연대하는 통일전선이 형성되었습니다.",
      "sourceOrTrivia": "독립기념관 6·10 만세운동 기념 자료",
      "wrongOptionsReason": [
        "광주 학생 항일 운동은 1929년 한일 학생 충돌을 계기로 전국 확산된 운동입니다.",
        "정답입니다. 순종의 인산일에 일어난 6·10 만세 운동입니다.",
        "3·1 운동은 1919년 고종 인산일에 일어난 거족적 만세 운동입니다.",
        "원산 총파업은 1929년 일제 탄압에 맞선 노동자 총파업입니다."
      ]
    },
    {
      "id": "ultra_kh_23",
      "topic": "한국사 탐구",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "조선 시대 왕실의 결혼, 장례, 행차, 영건 등 국가 주요 행사의 전 과정을 글과 정밀한 반차도(그림)로 상세히 기록하여 후대에 모범을 남긴 유네스코 세계기록유산은?",
      "options": [
        "비변사등록",
        "승정원일기",
        "조선왕조의궤 (朝鮮王朝儀軌)",
        "일성록"
      ],
      "correctIndex": 2,
      "explanation": "의궤는 행사의 모든 준비 과정, 동원 인력의 명단, 품삯, 사용 물품의 치수와 색상까지 완벽히 기록한 세계 최고 수준의 기록 문화유산입니다.",
      "deepKnowledge": "병인양요(1866년) 때 프랑스군이 강화도 외규장각에서 약탈해 간 의궤는 2011년 145년 만에 5년 단위 갱신 대여 형식으로 고국에 반환되었습니다.",
      "sourceOrTrivia": "외규장각 의궤 / 유네스코 세계기록유산 (2007년 등재)",
      "wrongOptionsReason": [
        "비변사등록은 최고 군국기무 회의체 비변사의 업무 일지입니다.",
        "승정원일기는 왕명 출납을 맡은 승정원의 매일 국정 일기입니다.",
        "정답입니다. 왕실 행사의 정밀한 그림과 기록 보고인 조선왕조의궤입니다.",
        "일성록은 정조의 존현각 일기에서 유래한 국왕의 국정 일기입니다."
      ]
    },
    {
      "id": "ultra_kh_24",
      "topic": "한국사 탐구",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "1932년 4월 29일 상하이 훙커우 공원에서 열린 일본 천황 생일(천장절) 겸 상하이 침략 전승 기념식장에 물통 폭탄을 던져 시라카와 대장 등 일본 수뇌부를 폭살한 한인애국단 의사는?",
      "options": [
        "백정기 (白貞基)",
        "이봉창 (李奉昌)",
        "안중근 (安重根)",
        "윤봉길 (尹奉吉)"
      ],
      "correctIndex": 3,
      "explanation": "윤봉길 의사의 의거는 침체에 빠져 있던 임시정부의 위상을 일거에 회복시켰으며, 중국 국민당 장제스 주석이 '중국의 4억 인민이 해내지 못한 일을 한 사람의 조선 청년이 해냈다'고 극찬하며 임시정부를 전폭 지원하게 만들었습니다.",
      "deepKnowledge": "의거 직전 김구 선생과 시계를 맞바꾸며 '제 시계는 6원짜리이고 선생님 시계는 2원짜리이니 제 것을 가지십시오. 저는 이제 1시간밖에 더 살지 못합니다'라는 일화로 유명합니다.",
      "sourceOrTrivia": "백범일지 / 윤봉길 선서문 및 유품 (보물 제568호)",
      "wrongOptionsReason": [
        "백정기 의사는 육삼정 의거를 추진했던 아나키스트 독립운동가입니다.",
        "이봉창 의사는 1932년 1월 도쿄 사쿠라다몬에서 일본 국왕 히로히토에게 폭탄을 던진 인물입니다.",
        "안중근 의사는 1909년 하얼빈 역에서 이토 히로부미를 저격 처단한 의사입니다.",
        "정답입니다. 상하이 훙커우 공원에서 투탄 의거를 결행한 윤봉길 의사입니다."
      ]
    },
    {
      "id": "ultra_kh_25",
      "topic": "한국사 탐구",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "신라 원효(元曉) 대사가 중관파(공사상)와 유식파(유식사상)의 극단적 대립을 지양하고 모든 모순된 이론을 더 높은 차원에서 하나로 조화·융합시키기 위해 정립한 불교 철학은?",
      "options": [
        "화쟁 사상 (和諍思想)",
        "돈오점수",
        "교관겸수",
        "살생유택"
      ],
      "correctIndex": 0,
      "explanation": "원효의 화쟁 사상은 십문화쟁론(十門和諍論)에 집대성되어 있으며, 일심(一心)의 근원에서 출발하여 다툼을 화해시키고 극단적 집착을 타파하는 독창적 한국 불교 융합 철학의 정수입니다.",
      "deepKnowledge": "원효는 화쟁 사상을 바탕으로 저잣거리에서 바가지(무애박)를 두드리며 무애가(無碍歌)를 불러 귀족 중심 불교를 민중 불교로 대중화시켰습니다.",
      "sourceOrTrivia": "원효 십문화쟁론(十門和諍論) / 대승기신론소",
      "wrongOptionsReason": [
        "정답입니다. 모든 대립하는 쟁론을 조화시키는 원효의 화쟁 사상입니다.",
        "돈오점수는 고려 지눌이 제창한 깨달음과 점진적 수행론입니다.",
        "교관겸수는 의천이 제창한 교종과 선종의 병행 수행론입니다.",
        "살생유택은 원광법사가 세속오계에서 제시한 계율입니다."
      ]
    }
  ],
  "world_history": [
    {
      "id": "ultra_wh_1",
      "topic": "세계사 & 문명",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "기원전 18세기 메소포타미아 바빌로니아 제국의 왕이 섬록암 비석에 새긴 고대 법전으로, '눈에는 눈, 이에는 이'라는 동해보복(탈리오 법칙) 원칙으로 유명한 법전은?",
      "options": [
        "함무라비 법전 (Code of Hammurabi)",
        "유스티니아누스 법전",
        "12표법",
        "나폴레옹 법전"
      ],
      "correctIndex": 0,
      "explanation": "함무라비 법전은 282개 조항으로 구성된 인류 최고(最古) 수준의 성문법전 중 하나로, 신분에 따른 형벌 차등과 무죄 추정, 상거래 계약 등을 정밀하게 규정했습니다.",
      "deepKnowledge": "비석 상단에는 함무라비 왕이 태양과 정의의 신 샤마슈(Shamash)로부터 홀과 고리를 받아 법전을 제정하는 신권 통치의 장면이 부조로 새겨져 있습니다.",
      "sourceOrTrivia": "루브르 박물관 소장 함무라비 법전 비석",
      "wrongOptionsReason": [
        "정답입니다. 고대 바빌로니아의 동해보복 성문법인 함무라비 법전입니다.",
        "유스티니아누스 법전은 6세기 동로마 제국의 로마법 대전입니다.",
        "12표법은 기원전 5세기 로마 공화정 최초의 성문법입니다.",
        "나폴레옹 법전은 1804년 제정된 근대 프랑스 민법전입니다."
      ]
    },
    {
      "id": "ultra_wh_2",
      "topic": "세계사 & 문명",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "1215년 영국 러니미드에서 귀족들의 압박을 받은 존 왕이 서명한 문서로, 국왕의 과세권 제한과 불법 감금 금지 등 법의 지배를 확립하여 근대 헌정주의의 효시가 된 문서는?",
      "options": [
        "권리청원",
        "마그나 카르타 (대헌장, Magna Carta)",
        "권리장전",
        "독립선언서"
      ],
      "correctIndex": 1,
      "explanation": "마그나 카르타 제39조는 '자유민은 동등한 자들의 적법한 재판이나 국법에 의하지 않고는 체포·구금·추방되거나 재산을 몰수당하지 않는다'며 적법절차 원리를 명시했습니다.",
      "deepKnowledge": "국왕조차 법 아래에 종속된다는 이 선언은 17세기 영국 명예혁명과 미국 헌법의 인권 보장 사상으로 직접 계승되었습니다.",
      "sourceOrTrivia": "대영도서관 소장 마그나 카르타 원본 (1215)",
      "wrongOptionsReason": [
        "권리청원은 1628년 에드워드 코크 등이 찰스 1세에게 제출한 탄원서입니다.",
        "정답입니다. 영국 헌정사의 출발점인 대헌장(마그나 카르타)입니다.",
        "권리장전은 1689년 명예혁명 후 윌리엄 3세가 승인한 의회 권리 법안입니다.",
        "독립선언서는 1776년 미국 13개 식민지가 채택한 독립 선언입니다."
      ]
    },
    {
      "id": "ultra_wh_3",
      "topic": "세계사 & 문명",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1648년 30년 종교전쟁을 종결지으며 체결된 평화 조약으로, 교황과 신성로마제국의 보편적 지배권을 해체하고 주권국가 간의 대등한 외교 질서(근대 국제법 체계)를 탄생시킨 조약은?",
      "options": [
        "빈 회의 조약",
        "위트레흐트 조약",
        "베스트팔렌 조약 (Peace of Westphalia)",
        "베르사유 조약"
      ],
      "correctIndex": 2,
      "explanation": "베스트팔렌 조약은 칼뱅파를 공식 공인하고 스위스와 네덜란드의 독립을 승인하며, 국가의 영토 주권과 내정 불간섭 원칙을 확립한 근대 국제정치체제의 시발점입니다.",
      "deepKnowledge": "이 조약으로 확립된 국민국가 주권 체제를 현대 국제정치학에서는 '베스트팔렌 체제(Westphalian System)'라고 부릅니다.",
      "sourceOrTrivia": "Croxton (1999) 'The Peace of Westphalia of 1648 and the Origins of Sovereignty'",
      "wrongOptionsReason": [
        "빈 조약은 1815년 나폴레옹 몰락 후 유럽 보수 질서를 재편한 체제입니다.",
        "위트레흐트 조약은 1713년 스페인 왕위 계승 전쟁을 종결지은 조약입니다.",
        "정답입니다. 근대 주권국가 체제를 창설한 베스트팔렌 조약입니다.",
        "베르사유 조약은 1919년 제1차 세계대전을 매듭지은 조약입니다."
      ]
    },
    {
      "id": "ultra_wh_4",
      "topic": "세계사 & 문명",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1789년 7월 14일 파리 시민들이 전제군주제의 상징이던 이 요새 감옥을 습격하여 무기를 탈취함으로써 본격적으로 폭발한 세계사적 시민 혁명은?",
      "options": [
        "10월 혁명 (러시아)",
        "명예혁명",
        "보스턴 차 사건 (미국 혁명)",
        "바스티유 감옥 습격 (프랑스 대혁명)"
      ],
      "correctIndex": 3,
      "explanation": "루이 16세의 삼부회 무력 탄압 기도에 맞선 파리 민중의 바스티유 함락은 절대왕정 붕괴의 신호탄이 되었으며, 이후 인권선언(자유·평등·우애) 발표로 이어졌습니다.",
      "deepKnowledge": "현재 프랑스는 7월 14일을 프랑스 혁명 기념일(바스티유의 날, 국경일)로 제정하여 기념하고 있습니다.",
      "sourceOrTrivia": "Soboul (1962) The French Revolution 1789–1799",
      "wrongOptionsReason": [
        "10월 혁명은 1917년 볼셰비키 레닌이 주도한 사회주의 혁명입니다.",
        "명예혁명은 1688년 영국에서 피 흘리지 않고 의회 권력을 확립한 혁명입니다.",
        "보스턴 차 사건은 1773년 미국 독립 전쟁을 촉발한 사건입니다.",
        "정답입니다. 프랑스 대혁명의 도화선이 된 바스티유 감옥 습격입니다."
      ]
    },
    {
      "id": "ultra_wh_5",
      "topic": "세계사 & 문명",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "1453년 오스만 제국의 21세 술탄 메흐메트 2세가 거대한 우르반 대포와 선박 육상 수송 전술을 동원해 함락시킴으로써, 1,123년간 지속된 서로마·동로마의 역사를 최종 종결지은 도시는?",
      "options": [
        "콘스탄티노폴리스 (이스탄불)",
        "로마",
        "알렉산드리아",
        "안티오키아"
      ],
      "correctIndex": 0,
      "explanation": "비잔티움 제국(동로마)의 수도 콘스탄티노폴리스의 함락은 중세의 종말과 근대의 시작을 알리는 대사건으로, 피난 간 그리스 학자들이 르네상스를 꽃피우는 촉매가 되었습니다.",
      "deepKnowledge": "오스만 제국이 동서 육상 무역로를 장악하자 서유럽 국가들은 새로운 인도 항로를 개척하기 위해 대항해시대로 뛰어들게 되었습니다.",
      "sourceOrTrivia": "Runciman (1965) The Fall of Constantinople 1453",
      "wrongOptionsReason": [
        "정답입니다. 천년 제국 동로마의 수도 콘스탄티노폴리스입니다.",
        "서로마 제국 수도 로마는 476년 용병대장 오도아케르에 의해 먼저 멸망했습니다.",
        "알렉산드리아는 이집트의 헬레니즘 학술 도시입니다.",
        "안티오키아는 시리아의 고대 기독교 주요 거점 도시입니다."
      ]
    },
    {
      "id": "ultra_wh_6",
      "topic": "세계사 & 문명",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "기원전 5세기 고대 아테네 민주정의 기틀을 확립한 지도자로, 참주(독재자)의 출현을 막기 위해 도자기 파편에 위험인물의 이름을 적어 6,000표 이상 나오면 10년간 추방한 제도는?",
      "options": [
        "솔론의 금권정",
        "도편추방제 (Ostracism, 클레이스테네스)",
        "페리클레스의 수당제",
        "드라콘의 성문법"
      ],
      "correctIndex": 1,
      "explanation": "클레이스테네스는 혈연 중심 4개 부족을 거주지 중심 10대 부족으로 재편하고 500인 평의회를 창설했으며, 참주 방지를 위해 도편추방제를 도입했습니다.",
      "deepKnowledge": "기원전 417년 정적을 제거하기 위한 정쟁 수단으로 변질되면서 최후의 도편추방(히페르볼로스)을 끝으로 폐지되었습니다.",
      "sourceOrTrivia": "Aristotle, The Athenian Constitution",
      "wrongOptionsReason": [
        "솔론은 재산 소유량에 따라 참정권을 차등 부여한 금권정을 실시했습니다.",
        "정답입니다. 참주 방지를 위해 도입된 클레이스테네스의 도편추방제입니다.",
        "페리클레스는 가난한 시민도 공직에 참여할 수 있도록 수당제를 확립했습니다.",
        "드라콘은 가혹한 형벌을 명문화한 아테네 최초의 성문법 제정자입니다."
      ]
    },
    {
      "id": "ultra_wh_7",
      "topic": "세계사 & 문명",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1077년 신성로마제국 황제 하인리히 4세가 교황 그레고리우스 7세에게 파문을 취소해 달라며 카노사 성문 밖 눈밭에서 3일간 무릎을 꿇고 용서를 구한 서임권 투쟁 사건은?",
      "options": [
        "보름스 협약",
        "아비뇽 유수",
        "카노사의 굴욕 (Humiliation of Canossa)",
        "콘스탄츠 공의회"
      ],
      "correctIndex": 2,
      "explanation": "카노사의 굴욕은 성직자 임명권(서임권)을 둘러싼 세속 황제 권력과 교황권의 대결에서 교황권이 세속 권력을 굴복시킨 극적인 상징 사건입니다.",
      "deepKnowledge": "서임권 투쟁은 이후 1122년 보름스 협약(Concordat of Worms)을 통해 성직자의 영적 서임은 교회가, 세속적 권력 봉헌은 황제가 맡는 타협으로 종결되었습니다.",
      "sourceOrTrivia": "Tierney (1988) The Crisis of Church and State, 1050-1300",
      "wrongOptionsReason": [
        "보름스 협약은 1122년 서임권 분쟁을 절충한 조약입니다.",
        "아비뇽 유수는 14세기 프랑스 왕 필리프 4세가 교황청을 아비뇽으로 옮긴 사건입니다.",
        "정답입니다. 교황권의 우위를 상징하는 카노사의 굴욕입니다.",
        "콘스탄츠 공의회는 1414년 서구 대분열을 수습한 공의회입니다."
      ]
    },
    {
      "id": "ultra_wh_8",
      "topic": "세계사 & 문명",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1944년 미국 뉴햄프셔주에서 44개 연합국 대표가 모여 금 1온스를 미화 35달러에 고정시키고 각국 통화를 달러에 연동시킨 전후 자유무역 기축통화 체제는?",
      "options": [
        "플라자 합의",
        "스미소니언 체제",
        "킹스턴 체제",
        "브레턴우즈 체제 (Bretton Woods System)"
      ],
      "correctIndex": 3,
      "explanation": "브레턴우즈 협정은 달러를 세계 기축통화로 삼고, 국제통화기금(IMF)과 국제부흥개발은행(IBRD, 현 세계은행)을 창설하여 전후 자본주의 금융 질서를 구축했습니다.",
      "deepKnowledge": "이 금본위 금환본위제는 1971년 닉슨 대통령이 달러의 금 태환 중지(닉슨 쇼크)를 선언하면서 변동환율제로 전환되었습니다.",
      "sourceOrTrivia": "Steil (2013) The Battle of Bretton Woods",
      "wrongOptionsReason": [
        "플라자 합의는 1985년 엔화와 마르크화의 절상을 유도한 합의입니다.",
        "스미소니언 체제는 1971년 닉슨 쇼크 후 일시적으로 고정환율을 유지하려 한 타협입니다.",
        "킹스턴 체제는 1976년 변동환율제를 공식 공인한 IMF 협정입니다.",
        "정답입니다. 달러 기축통화와 IMF를 창설한 브레턴우즈 체제입니다."
      ]
    },
    {
      "id": "ultra_wh_9",
      "topic": "세계사 & 문명",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "1517년 독일 비텐베르크 성당 문에 교황청의 면벌부(면죄부) 판매를 통렬히 비판하는 '95개조 반박문'을 게시하여 종교개혁의 도화선을 당긴 신학자는?",
      "options": [
        "마르틴 루터 (Martin Luther)",
        "장 칼뱅",
        "울리히 츠빙글리",
        "에라스무스"
      ],
      "correctIndex": 0,
      "explanation": "루터는 오직 믿음(Sola Fide), 오직 은혜(Sola Gratia), 오직 성경(Sola Scriptura)을 기치로 내걸고 성경을 독일어로 번역하여 만인제사장설을 확립했습니다.",
      "deepKnowledge": "구텐베르크의 금속 활판 인쇄술 덕분에 루터의 95개조 반박문은 불과 2주 만에 독일 전역으로, 4주 만에 유럽 전역으로 번역·확산되었습니다.",
      "sourceOrTrivia": "Luther (1517) Disputatio pro declaratione virtutis indulgentiarum",
      "wrongOptionsReason": [
        "정답입니다. 종교개혁의 횃불을 밝힌 마르틴 루터입니다.",
        "장 칼뱅은 제네바에서 예정설과 엄격한 신정 정치를 펼친 종교개혁가입니다.",
        "츠빙글리는 스위스 취리히에서 종교개혁을 주도한 인물입니다.",
        "에라스무스는 '우신예찬'을 쓴 네덜란드의 인문주의 학자입니다."
      ]
    },
    {
      "id": "ultra_wh_10",
      "topic": "세계사 & 문명",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1914년 6월 28일 보스니아의 수도 사라예보에서 오스트리아-헝가리 제국의 페르디난트 대원수 부부가 세르비아 민족주의 청년에게 암살당해 촉발된 세계적 대전은?",
      "options": [
        "제2차 세계대전",
        "제1차 세계대전 (사라예보 사건)",
        "크림 전쟁",
        "보불 전쟁"
      ],
      "correctIndex": 1,
      "explanation": "사라예보 사건은 삼국 동맹(독일, 오스트리아, 이탈리아)과 삼국 협상(영국, 프랑스, 러시아)의 연쇄 동원령을 촉발시켜 인류 최초의 총력전인 제1차 세계대전으로 번졌습니다.",
      "deepKnowledge": "발칸반도는 범슬라브주의와 범게르만주의의 충돌로 인해 '유럽의 화약고'로 불리던 상태였습니다.",
      "sourceOrTrivia": "Clark (2012) The Sleepwalkers: How Europe Went to War in 1914",
      "wrongOptionsReason": [
        "제2차 세계대전은 1939년 나치 독일의 폴란드 침공으로 발발했습니다.",
        "정답입니다. 사라예보 사건이 도화선이 된 제1차 세계대전입니다.",
        "크림 전쟁은 1853년 러시아와 오스만·영국·프랑스 연합군 간의 전쟁입니다.",
        "보불 전쟁은 1870년 비스마르크의 프로이센과 프랑스 나폴레옹 3세의 전쟁입니다."
      ]
    },
    {
      "id": "ultra_wh_11",
      "topic": "세계사 & 문명",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "1868년 일본에서 도쿠가와 에도 막부가 무너지고 천황 중심의 중앙집권적 근대 국가로 탈바꿈하며 서구화, 폐번치현, 징병제, 조세 개혁을 단행한 대개혁은?",
      "options": [
        "가마쿠라 막부 창설",
        "다이카 개신",
        "메이지 유신 (明治維新)",
        "다이쇼 데모크라시"
      ],
      "correctIndex": 2,
      "explanation": "메이지 유신은 '문명개화', '부국강병', '식산흥업'을 모토로 봉건 무사 계급을 해체하고 서양의 과학기술과 헌법 제도를 수용하여 아시아 최초의 근대 산업국가로 발돋움한 사건입니다.",
      "deepKnowledge": "이와쿠라 사절단(1871)은 미국과 유럽 12개국을 순방하며 서양 제도를 시찰하고 불평등 조약 개정을 모색했습니다.",
      "sourceOrTrivia": "Jansen (2000) The Making of Modern Japan",
      "wrongOptionsReason": [
        "가마쿠라 막부는 1192년 미나모토노 요리토모가 세운 일본 최초의 무신 정권입니다.",
        "다이카 개신은 645년 당나라 제도를 모방해 천황제를 확립한 고대 개혁입니다.",
        "정답입니다. 일본 근대화의 기틀을 마련한 메이지 유신입니다.",
        "다이쇼 데모크라시는 1910~1920년대 일본의 자유민주주의 운동 시기입니다."
      ]
    },
    {
      "id": "ultra_wh_12",
      "topic": "세계사 & 문명",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "기원전 221년 춘추전국시대를 최초로 통일하고 군현제 실시, 도량형·문자·화폐 통일 및 만리장성 축조를 지휘한 중국 최초의 황제는?",
      "options": [
        "당 태종",
        "한 고조 유방",
        "한 무제",
        "진시황 (秦始皇)"
      ],
      "correctIndex": 3,
      "explanation": "진나라의 영정은 왕이라는 칭호 대신 삼황오제에서 글자를 딴 '황제(皇帝)' 칭호를 최초로 창시하고 법가 사상을 통치 이념으로 삼았습니다.",
      "deepKnowledge": "진시황은 사상 통제를 위해 의약, 복서, 농업 서적을 제외한 고전을 불태우고 유학자들을 생매장한 분서갱유(焚書坑儒)를 자행했습니다.",
      "sourceOrTrivia": "사마천 사기 진시황본기",
      "wrongOptionsReason": [
        "당 태종은 '정관의 치'를 이끈 당나라의 명군입니다.",
        "한 고조 유방은 초한전쟁에서 항우를 꺾고 한나라를 세운 군주입니다.",
        "한 무제는 유교를 국교화하고 비단길을 개척한 한나라 전성기 황제입니다.",
        "정답입니다. 중국 천하를 최초로 통일한 진시황제입니다."
      ]
    },
    {
      "id": "ultra_wh_13",
      "topic": "세계사 & 문명",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "이슬람 제국의 황금기인 8~9세기 아바스 왕조의 수도 바그다드에 설립되어 고대 그리스, 페르시아, 인도의 고전을 아랍어로 대규모 번역한 종합 학술 연구 기관은?",
      "options": [
        "지혜의 집 (바이트 알히크마, House of Wisdom)",
        "알아즈하르 대학교",
        "알함브라 궁전",
        "코르도바 대도서관"
      ],
      "correctIndex": 0,
      "explanation": "하룬 알라시드와 알마문 칼리프가 육성한 지혜의 집은 아리스토텔레스, 프톨레마이오스, 유클리드의 저작을 번역·보존하여 유럽 르네상스의 지적 원천을 보존했습니다.",
      "deepKnowledge": "수학자 알콰리즈미(대수학 Algebra와 알고리즘 Algorithm의 어원)와 철학자 알킨디, 이븐 시나(아비센나) 등이 이곳에서 인류 지식의 보고를 쌓았습니다.",
      "sourceOrTrivia": "Gutras (1998) Greek Thought, Arabic Culture",
      "wrongOptionsReason": [
        "정답입니다. 이슬람 황금기를 이끈 지혜의 집(바이트 알히크마)입니다.",
        "알아즈하르는 카이로에 970년 세워진 최고(最古)의 이슬람 대학교입니다.",
        "알함브라는 스페인 그라나다에 있는 나스르 왕조의 이슬람 궁전입니다.",
        "코르도바 대도서관은 후우마이야 왕조의 안달루시아 도서관입니다."
      ]
    },
    {
      "id": "ultra_wh_14",
      "topic": "세계사 & 문명",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1962년 10월, 소련이 미국 플로리다 인근 섬나라에 중거리 탄도 미사일(R-12) 기지를 비밀리에 건설하면서 인류 역사가 3차 세계대전 핵전쟁 위기에 가장 근접했던 사건은?",
      "options": [
        "베를린 봉쇄",
        "쿠바 미사일 위기 (Cuban Missile Crisis)",
        "통킹만 사건",
        "수에즈 위기"
      ],
      "correctIndex": 1,
      "explanation": "존 F. 케네디 미국 대통령의 해상 봉쇄(격리)와 니키타 흐루쇼프 소련 서기장의 긴박한 비밀 외교 협상 끝에 소련은 미사일을 철수하고 미국은 터키 주둔 미사일을 철수하기로 합의했습니다.",
      "deepKnowledge": "이 사건 이후 미·소 정상 간의 오판을 방지하기 위해 백악관과 크렘린궁 사이에 직통 핫라인(Hotline)이 설치되었고 부분적 핵실험 금지 조약(PTBT)이 체결되었습니다.",
      "sourceOrTrivia": "Allison & Zelikow (1999) Essence of Decision: Explaining the Cuban Missile Crisis",
      "wrongOptionsReason": [
        "베를린 봉쇄는 1948년 소련이 서베를린의 육로를 차단한 사건입니다.",
        "정답입니다. 냉전기 최대 핵전쟁 위기였던 13일간의 쿠바 미사일 위기입니다.",
        "통킹만 사건은 1964년 미국의 베트남전 전면 개입 명분이 된 조작 사건입니다.",
        "수에즈 위기는 1956년 이집트 나세르의 운하 국유화로 일어난 분쟁입니다."
      ]
    },
    {
      "id": "ultra_wh_15",
      "topic": "세계사 & 문명",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "로마 공화정 말기 카이사르, 폼페이우스, 크라수스가 원로원에 맞서 결성한 비밀 정치적 동맹을 무엇이라 부르는가?",
      "options": [
        "원수정 (프린키파투스)",
        "제2차 삼두정치",
        "제1차 삼두정치 (First Triumvirate)",
        "전제군주정 (도미나투스)"
      ],
      "correctIndex": 2,
      "explanation": "기원전 60년 카이사르(군사적 재능/민중 지지), 폼페이우스(동방 정복 영웅), 크라수스(로마 최대의 부호)가 결탁하여 원로원을 무력화하고 권력을 장악했습니다.",
      "deepKnowledge": "크라수스가 파르티아 원정에서 전사한 후 카이사르와 폼페이우스의 내전이 발발하였고, 카이사르가 루비콘강을 건너 승리하며 종신 독재관에 올랐습니다.",
      "sourceOrTrivia": "Plutarch, Parallel Lives: Life of Caesar / Life of Pompey",
      "wrongOptionsReason": [
        "원수정은 아우구스투스가 제1시민(프린켑스)을 자처하며 시작한 제정입니다.",
        "제2차 삼두정치는 옥타비아누스, 안토니우스, 레피두스가 결성한 공인 동맹입니다.",
        "정답입니다. 카이사르-폼페이우스-크라수스의 제1차 삼두정치입니다.",
        "도미나투스는 디오클레티아누스가 확립한 후기 전제군주정입니다."
      ]
    },
    {
      "id": "ultra_wh_16",
      "topic": "세계사 & 문명",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "1776년 7월 4일 필라델피아에서 토머스 제퍼슨 등이 기초하여 모든 인간의 양도할 수 없는 권리(생명, 자유, 행복 추구권)를 선언한 문서는?",
      "options": [
        "권리장전",
        "연방주의자 논집",
        "게티즈버그 연설문",
        "미국 독립선언서 (Declaration of Independence)"
      ],
      "correctIndex": 3,
      "explanation": "미국 독립선언서는 존 로크의 사회계약론과 천부인권 사상을 국가 수립 문서로 공식화하여, 정부가 국민의 권리를 침해할 때 저항권과 정부 변혁권을 가짐을 천명했습니다.",
      "deepKnowledge": "'모든 인간은 평등하게 창조되었으며(All men are created equal)'라는 선언은 이후 전 세계 반식민지 해방 운동과 민주주의 혁명의 바이블이 되었습니다.",
      "sourceOrTrivia": "미국 국립문서기록관리청(NARA) 소장 독립선언서 원본",
      "wrongOptionsReason": [
        "권리장전은 미국 헌법의 수정헌법 1~10조 기본권 조항입니다.",
        "연방주의자 논집은 해밀턴, 매디슨 등이 연방헌법 비준을 촉구한 논설집입니다.",
        "게티즈버그 연설문은 링컨 대통령의 '국민의, 국민에 의한, 국민을 위한 정부' 연설입니다.",
        "정답입니다. 천부인권과 저항권을 명시한 미국 독립선언서입니다."
      ]
    },
    {
      "id": "ultra_wh_17",
      "topic": "세계사 & 문명",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1929년 10월 24일 뉴욕 월스트리트 주식 시장의 대폭락(검은 목요일)으로 시작되어 전 세계 자본주의 국가들을 마비시킨 경제적 파국의 명칭은?",
      "options": [
        "대공황 (The Great Depression)",
        "오일 쇼크",
        "남해포말 사건",
        "2008 글로벌 금융위기"
      ],
      "correctIndex": 0,
      "explanation": "대공황은 과잉 생산과 금융 투기, 소득 불평등으로 촉발되었으며, 실업률이 25%까지 치솟고 수천 개 은행이 파산하며 자유방임주의 자본주의의 한계를 드러냈습니다.",
      "deepKnowledge": "프랭클린 루스벨트 대통령은 케인스 경제학을 수용한 '뉴딜(New Deal)' 정책(정부 공공투자, 테네시강 유역 개발, 와그너법, 사회보장법)을 추진하여 위기를 극복했습니다.",
      "sourceOrTrivia": "Kindleberger (1973) The World in Depression 1929–1939",
      "wrongOptionsReason": [
        "정답입니다. 자본주의 역사상 최악의 불황인 대공황입니다.",
        "오일 쇼크는 1970년대 중동전쟁으로 인한 석유 가격 폭등 위기입니다.",
        "남해포말 사건은 1720년 영국 남해회사 주식 투기 거품 붕괴 사건입니다.",
        "2008 금융위기는 서브프라임 모기지 부실로 일어난 리먼 브라더스 파산 사태입니다."
      ]
    },
    {
      "id": "ultra_wh_18",
      "topic": "세계사 & 문명",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "1848년 유럽 전역을 휩쓴 혁명의 열기 속에서 카를 마르크스와 프리드리히 엥겔스가 런던에서 발표한 문서로, '만국의 노동자여, 단결하라!'라는 구호로 끝나는 혁명 문헌은?",
      "options": [
        "자본론",
        "공산당 선언 (The Communist Manifesto)",
        "독일 이데올로기",
        "포이어바흐에 관한 테제"
      ],
      "correctIndex": 1,
      "explanation": "공산당 선언은 '지금까지 모든 사회의 역사는 계급투쟁의 역사이다'라는 유물사관적 명제로 출발하여 자본주의의 내적 모순과 프롤레타리아 혁명의 필연성을 선언했습니다.",
      "deepKnowledge": "1848년 혁명(제민족의 봄)은 단기적으로 진압되었으나 자유주의와 민족주의, 노동자 계급의 정치 세력화를 가속화하는 결정적 분수령이 되었습니다.",
      "sourceOrTrivia": "Marx & Engels (1848) Manifest der Kommunistischen Partei",
      "wrongOptionsReason": [
        "자본론은 1867년 마르크스가 잉여가치론을 체계화한 필생의 경제학 저작입니다.",
        "정답입니다. 과학적 사회주의의 신호탄인 공산당 선언입니다.",
        "독일 이데올로기는 유물사관의 철학적 전제를 정립한 미출판 원고입니다.",
        "포이어바흐 테제는 '철학자들은 세계를 해석해 왔을 뿐, 중요한 것은 세계를 변혁하는 것이다'를 남긴 메모입니다."
      ]
    },
    {
      "id": "ultra_wh_19",
      "topic": "세계사 & 문명",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1989년 폴란드 자유노조의 총선 승리, 헝가리의 철의 장막 철거, 그리고 베를린 장벽 붕괴로 절정에 달해 마침내 1991년 소비에트 연방(소련) 해체로 이어진 대전환의 원인은?",
      "options": [
        "바르샤바 조약기구의 핵전쟁 도발",
        "나토(NATO)의 소련 직접 침공",
        "고르바초프의 페레스트로이카(개혁)와 글라스노스트(개방) 정책",
        "코민테른의 자발적 해산"
      ],
      "correctIndex": 2,
      "explanation": "미하일 고르바초프 서기장의 경제 개혁(페레스트로이카), 언론·정보 개방(글라스노스트), 동유럽 군사 불개입(시나트라 독트린)이 동유럽 민주화 혁명과 소련 붕괴를 이끌었습니다.",
      "deepKnowledge": "1991년 12월 25일 크렘린궁의 붉은 깃발이 내려가고 러시아 삼색기가 게양되면서 45년간 지속된 동서 냉전(Cold War) 체제가 공식적으로 종식되었습니다.",
      "sourceOrTrivia": "Gorbachev (1987) Perestroika: New Thinking for Our Country and the World",
      "wrongOptionsReason": [
        "바르샤바 조약기구는 핵전쟁을 일으키지 않고 평화적으로 해체되었습니다.",
        "나토는 소련 본토를 군사적으로 침공한 적이 없습니다.",
        "정답입니다. 소련 붕괴와 냉전 해체의 내부적 원동력이 된 페레스트로이카입니다.",
        "코민테른은 1943년 제2차 세계대전 중 스탈린에 의해 이미 해산되었습니다."
      ]
    },
    {
      "id": "ultra_wh_20",
      "topic": "세계사 & 문명",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "1492년 스페인 이사벨 여왕의 후원을 받아 대서양을 서쪽으로 항해하여 바하마 제도의 산살바도르섬에 상륙함으로써 아메리카 대륙에 도달한 이탈리아 출신 항해가형 탐험가는?",
      "options": [
        "아메리고 베스푸치",
        "바스코 다 가마",
        "페르디난드 마젤란",
        "크리스토퍼 콜럼버스 (Christopher Columbus)"
      ],
      "correctIndex": 3,
      "explanation": "콜럼버스는 죽을 때까지 자신이 도착한 곳이 인도라고 믿었으나, 그의 항해는 구대륙과 신대륙 사이의 동식물, 병원균, 인구의 대교환(콜럼버스 교환)을 열었습니다.",
      "deepKnowledge": "이후 신대륙이 아시아가 아닌 독립된 새로운 대륙임을 밝혀낸 아메리고 베스푸치의 이름을 따서 '아메리카'라는 명칭이 붙게 되었습니다.",
      "sourceOrTrivia": "Crosby (1972) The Columbian Exchange",
      "wrongOptionsReason": [
        "아메리고 베스푸치는 신대륙이 새로운 대륙임을 탐사 보고서로 밝힌 인물입니다.",
        "바스코 다 가마는 1498년 아프리카 희망봉을 돌아 인도 항로를 개척한 포르투갈 항해가입니다.",
        "마젤란은 인류 최초의 세계 일주 항해 선단을 이끈 탐험가입니다.",
        "정답입니다. 1492년 대서양을 횡단한 크리스토퍼 콜럼버스입니다."
      ]
    },
    {
      "id": "ultra_wh_21",
      "topic": "세계사 & 문명",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "기원전 4세기 마케도니아의 왕으로, 페르시아 제국을 정복하고 이집트에서 인도 인더스강 유역에 이르는 대제국을 건설하여 동서 융합의 헬레니즘(Hellenism) 문화를 탄생시킨 영웅은?",
      "options": [
        "알렉산드로스 대왕 (알렉산더)",
        "필리포스 2세",
        "율리우스 카이사르",
        "키루스 2세"
      ],
      "correctIndex": 0,
      "explanation": "알렉산드로스는 그리스 문화와 오리엔트 문화를 융합시키기 위해 동서 합동 결혼식을 주선하고 곳곳에 '알렉산드리아' 도시를 건설하여 간다라 미술 등의 결실을 낳았습니다.",
      "deepKnowledge": "그의 사후 제국은 프톨레마이오스 왕조(이집트), 셀레우코스 왕조(시리아), 안티고노스 왕조(마케도니아)로 분열되었습니다.",
      "sourceOrTrivia": "Arrian, Anabasis of Alexander",
      "wrongOptionsReason": [
        "정답입니다. 헬레니즘 문화를 창시한 알렉산드로스 대왕입니다.",
        "필리포스 2세는 마케도니아를 강국으로 키우고 그리스를 제압한 알렉산더의 부왕입니다.",
        "카이사르는 로마 공화정 말기의 정치가이자 장군입니다.",
        "키루스 2세는 아케메네스 왕조 페르시아를 건국한 대왕입니다."
      ]
    },
    {
      "id": "ultra_wh_22",
      "topic": "세계사 & 문명",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "1688년 영국 의회가 가톨릭 전제군주 제임스 2세를 피 한 방울 흘리지 않고 폐위시키고, 네덜란드의 오렌지공 윌리엄과 메리 2세를 공동 국왕으로 추대한 사건은?",
      "options": [
        "청교도 혁명",
        "명예혁명 (Glorious Revolution)",
        "차티스트 운동",
        "장기 의회 사건"
      ],
      "correctIndex": 1,
      "explanation": "명예혁명 이듬해인 1689년 의회는 '의회의 승인 없는 과세와 법률 정지 금지'를 명시한 권리장전(Bill of Rights)을 통과시켜 '왕은 군림하나 통치하지 않는다'는 입헌군주제를 확립했습니다.",
      "deepKnowledge": "존 로크는 '통치론(Two Treatises of Government)'에서 명예혁명을 정당화하며 입법권과 집행권의 분립 및 저항권을 이론적으로 체계화했습니다.",
      "sourceOrTrivia": "Pincus (2009) 1688: The First Modern Revolution",
      "wrongOptionsReason": [
        "청교도 혁명은 1642년 올리버 크롬웰이 찰스 1세를 처형하고 공화정을 세운 혁명입니다.",
        "정답입니다. 피 없이 입헌군주제를 완성한 명예혁명입니다.",
        "차티스트 운동은 1838~1848년 영국 노동자들의 보통선거권 획득 운동입니다.",
        "장기 의회는 찰스 1세에 맞서 20년간 이어진 의회입니다."
      ]
    },
    {
      "id": "ultra_wh_23",
      "topic": "세계사 & 문명",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "한나라 무제(武帝) 대에 흉노를 견제하기 위해 대월지(大月氏)로 파견된 장건(張騫)의 13년간의 험난한 사행을 계기로 개척된 유라시아 횡단 교역로는?",
      "options": [
        "바닷길",
        "초원길",
        "비단길 (실크로드, Silk Road)",
        "차마고도"
      ],
      "correctIndex": 2,
      "explanation": "장건의 서역 개척은 한반도와 중국에서 로마에 이르는 6,400km의 실크로드를 열었으며, 비단, 칠기, 제지술이 서역으로 전파되고 포도, 호마, 불교, 유리제품이 동아시아로 유입되었습니다.",
      "deepKnowledge": "실크로드(Seidenstraße)라는 학술적 명칭은 1877년 독일의 지리학자 페르디난트 폰 리히트호펜이 최초로 명명했습니다.",
      "sourceOrTrivia": "사마천 사기 장건 열전 / Richthofen (1877)",
      "wrongOptionsReason": [
        "바닷길은 인도양을 경유하는 해상 실크로드입니다.",
        "초원길은 유라시아 북방 유목민들이 이동하던 북방 초원 지대 경로입니다.",
        "정답입니다. 동서 문명 교류의 대동맥인 실크로드입니다.",
        "차마고도는 티베트와 운남성 사이의 차와 말을 거래하던 험로입니다."
      ]
    },
    {
      "id": "ultra_wh_24",
      "topic": "세계사 & 문명",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "고대 이집트인들이 나일강 유역에서 자라는 갈대 식물의 줄기를 얇게 저며 격자 형태로 엮어 압착·건조해 만든 초기 형태의 종이 기록 매체는?",
      "options": [
        "갑골문",
        "양피지 (Parchment)",
        "점토판",
        "파피루스 (Papyrus)"
      ],
      "correctIndex": 3,
      "explanation": "파피루스는 현대 영어 'Paper(종이)'의 어원이 되었으며, 건조한 이집트 사막 기후 덕분에 고대 이집트 문학과 종교 문서(사자의 서)가 수천 년간 보존될 수 있었습니다.",
      "deepKnowledge": "양피지는 소나 양의 가죽을 무두질하여 만든 매체로 소아시아 페르가몬에서 파피루스 수출 금지에 대항해 본격 발전했습니다.",
      "sourceOrTrivia": "Parkinson & Quirke (1995) Papyrus (Egyptian Bookshelf)",
      "wrongOptionsReason": [
        "갑골문은 고대 중국 상나라에서 거북이 등껍질이나 소 뼈에 새긴 문자입니다.",
        "양피지는 동물 가죽을 가공해 만든 고급 기록 매체입니다.",
        "점토판은 메소포타미아 문명에서 쐐기문자를 새긴 점토 덩어리입니다.",
        "정답입니다. 고대 이집트의 대표적 기록 매체인 파피루스입니다."
      ]
    },
    {
      "id": "ultra_wh_25",
      "topic": "세계사 & 문명",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "1804년 나폴레옹 보나파르트가 반포한 법전으로, 만인의 법 앞의 평등, 종교의 자유, 소유권의 절대성, 계약 자유의 원칙을 확립하여 현대 대륙법계 민법의 초석이 된 법전은?",
      "options": [
        "나폴레옹 법전 (프랑스 민법전)",
        "유스티니아누스 법전",
        "프로이센 일반란트법",
        "독일 민법전(BGB)"
      ],
      "correctIndex": 0,
      "explanation": "나폴레옹은 세인트헬레나 유배지에서 '나의 진정한 영광은 40번의 전투 승리가 아니다. 영원히 남을 것은 나의 민법전이다'라고 회고할 만큼 근대 법치주의의 기틀을 확립했습니다.",
      "deepKnowledge": "나폴레옹 군대의 유럽 정복과 함께 이 법전이 전파되면서 봉건적 신분 특권이 철폐되고 근대 시민사회 계약법 체계가 확산되었습니다.",
      "sourceOrTrivia": "Code Civil des Français (1804)",
      "wrongOptionsReason": [
        "정답입니다. 근대 시민법의 기초를 세운 나폴레옹 법전입니다.",
        "유스티니아누스 법전은 6세기 동로마 제국의 법전입니다.",
        "프로이센 일반란트법은 1794년 계몽 절대군주정 하에서 제정된 법전입니다.",
        "독일 민법전(BGB)은 1900년 시행된 독일제국의 민법전입니다."
      ]
    }
  ],
  "philosophy": [
    {
      "id": "ultra_ph_1",
      "topic": "철학 & 사상",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "프랑스의 근대 철학자 르네 데카르트가 모든 것을 의심하는 방법적 회의의 끝에서 결코 의심할 수 없는 제1원리로 도달한 라틴어 명제는?",
      "options": [
        "코기토 에르고 숨 (Cogito, ergo sum)",
        "카르페 디엠 (Carpe diem)",
        "아모르 파티 (Amor fati)",
        "타불라 라사 (Tabula rasa)"
      ],
      "correctIndex": 0,
      "explanation": "'나는 생각한다, 고로 나는 존재한다'라는 뜻으로, 모든 감각과 세계를 의심하더라도 그 의심하고 사유하는 주체로서의 '나'의 존재만은 의심할 수 없다는 근대 합리론의 출발점입니다.",
      "deepKnowledge": "데카르트는 이를 통해 사유하는 실체(Res cogitans)와 연장된 물질 실체(Res extensa)로 세계를 이원화하는 물심이원론(Cartesian Dualism)을 정초했습니다.",
      "sourceOrTrivia": "Descartes (1637) Discours de la méthode",
      "wrongOptionsReason": [
        "정답입니다. 근대 철학의 제1명제인 코기토 에르고 숨입니다.",
        "카르페 디엠은 호라티우스의 시에서 유래한 '현재를 즐겨라'는 경구입니다.",
        "아모르 파티는 니체의 '자신의 운명을 사랑하라'는 사상입니다.",
        "타불라 라사는 존 로크가 인간 정신을 비유한 '백지' 상태입니다."
      ]
    },
    {
      "id": "ultra_ph_2",
      "topic": "철학 & 사상",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "플라톤의 저서 '국가(Politeia)' 제7권에 등장하며, 감각적 경험 세계의 환상과 이성에 의해 파악되는 영원불변의 참된 실재(이데아)의 차이를 설명한 유명한 비유는?",
      "options": [
        "반지의 비유 (기게스의 반지)",
        "동굴의 비유 (Allegory of the Cave)",
        "국가의 배 비유",
        "태양의 비유"
      ],
      "correctIndex": 1,
      "explanation": "동굴의 비유에서 벽면에 비친 그림자만 보며 그것이 진실인 줄 알던 죄수가 사슬을 풀고 동굴 밖으로 나가 태양(선의 이데아)을 목도하는 과정을 묘사합니다.",
      "deepKnowledge": "플라톤은 진리를 깨달은 철학자가 다시 동굴 속으로 돌아와 무지한 대중을 계몽하고 이끄는 '철인 통치(Philosopher King)'가 이상국가의 조건이라고 역설했습니다.",
      "sourceOrTrivia": "Plato, Republic Book VII (514a–520a)",
      "wrongOptionsReason": [
        "기게스의 반지는 보이지 않는 반지를 낀 인간의 도덕성을 시험하는 우화입니다.",
        "정답입니다. 이데아론의 정수를 나타내는 동굴의 비유입니다.",
        "국가의 배는 아마추어 선원과 지혜로운 선장을 빗댄 민주정 비판 비유입니다.",
        "태양의 비유는 가시적 태양과 예지적 선의 이데아를 대비한 비유입니다."
      ]
    },
    {
      "id": "ultra_ph_3",
      "topic": "철학 & 사상",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "이마누엘 칸트의 도덕 철학에서, 어떤 조건이나 결과에 대한 고려 없이 '행위 그 자체의 절대적 의무'로서 무조건 따라야 하는 도덕 법칙을 일컫는 용어는?",
      "options": [
        "공리주의 원칙",
        "가언명령",
        "정언명령 (단언적 명령, Categorical Imperative)",
        "덕 윤리"
      ],
      "correctIndex": 2,
      "explanation": "정언명령은 '네 의지의 준칙이 항상 동시에 보편적 입법의 원리가 될 수 있도록 행위하라'는 형식으로, 결과와 무관하게 순수한 도덕적 의무감에서 비롯된 행위만을 도덕적으로 평가합니다.",
      "deepKnowledge": "칸트는 또한 인간을 수단이 아니라 언제나 '목적(End in itself)'으로 대우하라는 제2정식으로 인간의 존엄성을 선언했습니다.",
      "sourceOrTrivia": "Kant (1785) Grundlegung zur Metaphysik der Sitten",
      "wrongOptionsReason": [
        "공리주의는 '최대 다수의 최대 행복'이라는 결과를 중시하는 목적론적 윤리입니다.",
        "가언명령은 '만약 ~하고 싶다면 ~하라'는 조건부 실용적 명령입니다.",
        "정답입니다. 무조건적 도덕 법칙인 칸트의 정언명령입니다.",
        "덕 윤리는 규칙 준수보다 행위자의 훌륭한 품성과 덕성을 중시합니다."
      ]
    },
    {
      "id": "ultra_ph_4",
      "topic": "철학 & 사상",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "공자(孔子)의 핵심 사상으로, 타인을 진심으로 사랑하고 아끼는 인간 본연의 따뜻한 도덕적 품성을 뜻하는 유학의 최고 덕목은?",
      "options": [
        "지 (智)",
        "의 (義)",
        "예 (禮)",
        "인 (仁)"
      ],
      "correctIndex": 3,
      "explanation": "'인(仁)'은 '사람을 사랑하는 것(愛人)'이자 '자기를 극복하고 예로 돌아가는 것(克己復禮)'으로, 공자 사상의 중심축을 이루는 보편적 인간애입니다.",
      "deepKnowledge": "공자는 부모에 대한 효(孝)와 형제에 대한 제(悌)가 바로 인을 실천하는 근본 출발점이라고 보았습니다.",
      "sourceOrTrivia": "논어(論語) 안연편 / 학이편",
      "wrongOptionsReason": [
        "지(智)는 시비선악을 올바르게 분별하는 지혜입니다.",
        "의(義)는 마땅함과 정의로움을 뜻하며 맹자가 특히 강조했습니다.",
        "예(禮)는 도덕적 절제와 사회적 질서를 규정하는 의례 규범입니다.",
        "정답입니다. 유학의 최고 가치이자 도덕적 사랑인 인(仁)입니다."
      ]
    },
    {
      "id": "ultra_ph_5",
      "topic": "철학 & 사상",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "헤겔의 변증법(Dialectic)에서 모순과 대립을 겪는 두 범주(정-반)가 상위의 더 높은 통일체(합)로 나아가면서, 낡은 것을 버리고 본질적인 것을 보존하며 한 단계 높이는 개념은?",
      "options": [
        "지양 (Aufheben, 아우프헤벤)",
        "에포케 (판단중지)",
        "카타르시스",
        "아파테이아"
      ],
      "correctIndex": 0,
      "explanation": "독일어 'Aufheben'은 '부정하다(폐지하다)', '보존하다', '높이다'라는 세 가지 상반된 의미를 동시에 내포하는 헤겔 변증법적 지양의 핵심 용어입니다.",
      "deepKnowledge": "헤겔은 역사가 이 변증법적 지양 과정을 통해 자유의 의식을 점진적으로 확장하며 '절대정신(Absolute Spirit)'으로 완성된다고 보았습니다.",
      "sourceOrTrivia": "Hegel (1807) Phänomenologie des Geistes",
      "wrongOptionsReason": [
        "정답입니다. 부정과 보존을 거쳐 고양되는 변증법적 지양(Aufheben)입니다.",
        "에포케는 후설의 현상학에서 선입견을 배제하는 판단중지입니다.",
        "카타르시스는 비극을 보며 연민과 공포를 정화하는 아리스토텔레스의 개념입니다.",
        "아파테이아는 스토아학파의 정념에 흔들리지 않는 평정심입니다."
      ]
    },
    {
      "id": "ultra_ph_6",
      "topic": "철학 & 사상",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "프리드리히 니체가 '차라투스트라는 이렇게 말했다'에서 제시한 개념으로, 기독교적 노예 도덕과 허무주의(Nihilism)를 극복하고 삶의 고통을 긍정하며 스스로 가치를 창조하는 이상적 인간상은?",
      "options": [
        "최후의 인간",
        "위버멘쉬 (Übermensch, 초인)",
        "귀족적 군주",
        "금욕적 성자"
      ],
      "correctIndex": 1,
      "explanation": "위버멘쉬는 기존의 낡은 가치를 파괴하고 운명애(Amor Fati)와 권력의지(Wille zur Macht)로 끊임없이 자신을 극복하여 새로운 춤추는 별을 탄생시키는 창조자입니다.",
      "deepKnowledge": "니체는 안일함과 물질적 쾌락에만 안주하는 무기력한 대중을 '최후의 인간(Der letzte Mensch)'이라 부르며 경멸했습니다.",
      "sourceOrTrivia": "Nietzsche (1883) Also sprach Zarathustra",
      "wrongOptionsReason": [
        "최후의 인간은 안락함에 만족하며 스스로를 낮추는 천박한 대중입니다.",
        "정답입니다. 니체가 제시한 자기극복의 이상적 인간형 위버멘쉬입니다.",
        "귀족적 군주는 정치적 지배자를 의미할 뿐 철학적 위버멘쉬와 다릅니다.",
        "금욕적 성자는 니체가 삶을 부정하는 병적 이상으로 비판한 인물입니다."
      ]
    },
    {
      "id": "ultra_ph_7",
      "topic": "철학 & 사상",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "20세기 전반 언어철학의 거장 루트비히 비트겐슈타인이 '논리철학논고'의 마지막 제7명제에서 선언한 유명한 철학적 경구는?",
      "options": [
        "나는 생각한다 고로 존재한다",
        "신은 죽었다",
        "말할 수 없는 것에 대해서는 침묵해야 한다",
        "만물은 유전한다"
      ],
      "correctIndex": 2,
      "explanation": "비트겐슈타인은 사실과 논리적 명제로 그림처럼 대응(그림 이론)시킬 수 있는 자연과학적 세계만이 '말할 수 있는 것'이며, 윤리·신비·삶의 의미 등은 '말할 수 없는 것(침묵의 영역)'이라고 규정했습니다.",
      "deepKnowledge": "후기 철학 '철학적 탐구'에서는 언어가 그림이 아니라 일상생활의 '언어 게임(Language Game)'과 삶의 형식에 뿌리내리고 있다는 새로운 견해를 열었습니다.",
      "sourceOrTrivia": "Wittgenstein (1921) Tractatus Logico-Philosophicus",
      "wrongOptionsReason": [
        "나는 생각한다는 데카르트의 명제입니다.",
        "신은 죽었다는 니체의 명제입니다.",
        "정답입니다. 언어의 논리적 한계를 규정한 비트겐슈타인의 제7명제입니다.",
        "만물은 유전한다는 헤라클레이토스의 고대 그리스 명제입니다."
      ]
    },
    {
      "id": "ultra_ph_8",
      "topic": "철학 & 사상",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "존 롤스(John Rawls)가 '정의론(A Theory of Justice)'에서 공정한 사회 제도의 원칙을 합의하기 위해 도입한 사고실험으로, 자신의 사회적 지위, 계급, 천부적 재능 등을 전혀 모른다고 가정하는 원초적 가상 상태는?",
      "options": [
        "보이지 않는 손",
        "자연 상태 (홉스)",
        "죄수의 딜레마",
        "무지의 베일 (Veil of Ignorance)"
      ],
      "correctIndex": 3,
      "explanation": "무지의 베일 뒤에 선 합리적 개인들은 자신이 사회의 가장 열악한 처지(최소수혜자)에 놓일 위험을 대비하여, 사회적·경제적 불평등이 최소수혜자에게 최대 이익을 가져올 때만 허용된다는 '차등의 원칙'에 합의하게 됩니다.",
      "deepKnowledge": "롤스는 기본적 자유의 평등 원칙(제1원칙)이 기회균등 및 차등 원칙(제2원칙)보다 항상 서열상 우선해야 한다고 주장했습니다.",
      "sourceOrTrivia": "Rawls (1971) A Theory of Justice",
      "wrongOptionsReason": [
        "보이지 않는 손은 시장의 가격 조절 메커니즘입니다.",
        "자연 상태는 사회계약 이전의 만인의 만인에 대한 투쟁 상태입니다.",
        "죄수의 딜레마는 게임 이론의 비협조적 갈등 모델입니다.",
        "정답입니다. 공정한 분배 정의를 도출하기 위한 무지의 베일입니다."
      ]
    },
    {
      "id": "ultra_ph_9",
      "topic": "철학 & 사상",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "소크라테스가 대화 상대방에게 끊임없이 질문을 던져 상대방이 스스로 자신의 무지(無知)를 깨닫고 참된 앎을 출산하도록 돕는 문답법을 산파(아이 받는 사람)에 빗대어 무엇이라 부르는가?",
      "options": [
        "산파술 (산파법, Maieutics)",
        "변증법",
        "직관법",
        "연역법"
      ],
      "correctIndex": 0,
      "explanation": "자신의 어머니가 산파였던 소크라테스는 자신은 지식을 주입하는 자가 아니라, 상대방의 영혼 속에 잠들어 있는 지혜를 산파처럼 해산시켜 주는 역할을 한다고 설명했습니다.",
      "deepKnowledge": "소크라테스의 '너 자신을 알라'는 무지(내가 모른다는 사실)의 자각이야말로 모든 지혜와 철학의 진정한 출발점이라는 선언입니다.",
      "sourceOrTrivia": "Plato, Theaetetus (149a–151d)",
      "wrongOptionsReason": [
        "정답입니다. 질문을 통해 무지를 자각시키는 소크라테스의 산파술입니다.",
        "변증법은 플라톤과 헤겔이 체계화한 모순 극복의 논리입니다.",
        "직관법은 즉각적인 통찰로 진리를 인식하는 방법입니다.",
        "연역법은 보편 명제에서 특수 명제를 도출하는 논리적 추론입니다."
      ]
    },
    {
      "id": "ultra_ph_10",
      "topic": "철학 & 사상",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "노자(老子) 도덕경의 핵심 사상으로, 인간의 인위적인 욕망이나 조작을 가하지 않고 자연의 섭리와 순리에 따라 물처럼 살아가는 삶의 태도는?",
      "options": [
        "위기지학",
        "무위자연 (無爲自然)",
        "격물치지",
        "지행합일"
      ],
      "correctIndex": 1,
      "explanation": "무위자연은 아무것도 하지 않는 게으름이 아니라, 사위스러운 인위(人爲)와 권모술수를 버리고 가장 유연하면서도 만물을 이롭게 하는 물의 덕(상선약수, 上善若水)을 따르는 것입니다.",
      "deepKnowledge": "노자는 '도(道)는 자연을 본받는다(道法自然)'라며 인의(仁義)의 도덕 규범을 억지로 강요하는 유학의 인위성을 비판했습니다.",
      "sourceOrTrivia": "노자 도덕경(道德經) 제8장 / 제25장",
      "wrongOptionsReason": [
        "위기지학은 남에게 보이기 위함이 아닌 자기 수양을 위한 학문입니다.",
        "정답입니다. 인위적 조작을 버리고 자연에 순응하는 무위자연입니다.",
        "격물치지는 사물의 이치를 끝까지 탐구해 지식을 넓히는 주자학 개념입니다.",
        "지행합일은 앎과 행함이 본래 하나라는 양명학의 실천 철학입니다."
      ]
    },
    {
      "id": "ultra_ph_11",
      "topic": "철학 & 사상",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "프랑스의 실존주의 철학자 장 폴 사르트르가 1945년 강연 '실존주의는 휴머니즘이다'에서 주창한 유명한 실존주의 명제로, 인간은 미리 정해진 본질 없이 태어나 스스로 삶을 선택해 나간다는 원리는?",
      "options": [
        "회의하는 나만이 존재한다",
        "인간은 생각하는 갈대다",
        "실존은 본질에 앞선다 (L'existence précède l'essence)",
        "만물의 척도는 인간이다"
      ],
      "correctIndex": 2,
      "explanation": "의자나 칼 같은 사물은 쓰임새(본질)가 먼저 설계되고 만들어지지만, 인간은 먼저 세상에 던져져 실존한 뒤 스스로의 자유로운 결단과 행위를 통해 자신의 본질을 창조해 갑니다.",
      "deepKnowledge": "사르트르는 이 완전한 자유 때문에 인간은 자신의 모든 선택에 대해 전적인 책임을 져야 하는 '자유라는 형벌에 처해진 존재'라고 규정했습니다.",
      "sourceOrTrivia": "Sartre (1946) L'existentialisme est un humanisme",
      "wrongOptionsReason": [
        "회의하는 나만 존재한다는 데카르트의 사유입니다.",
        "생각하는 갈대는 파스칼이 팡세에서 인간의 연약함과 위대함을 표현한 글입니다.",
        "정답입니다. 인간의 자유와 자기 창조를 천명한 사르트르의 명제입니다.",
        "만물의 척도는 인간이라는 프로타고라스의 고대 소피스트 명제입니다."
      ]
    },
    {
      "id": "ultra_ph_12",
      "topic": "철학 & 사상",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "영국의 제러미 벤담이 주창한 윤리 사상으로, '최대 다수의 최대 행복'을 도덕과 입법의 최고 기준으로 삼아 쾌락의 증진과 고통의 회피를 추구한 사상은?",
      "options": [
        "스토아 철학",
        "의무론",
        "실존주의",
        "공리주의 (Utilitarianism)"
      ],
      "correctIndex": 3,
      "explanation": "벤담의 양적 공리주의는 모든 쾌락을 강도, 지속성 등 7가지 척도로 수량화할 수 있다고 보았으며, 이후 존 스튜어트 밀은 쾌락의 질적 차이를 강조하는 질적 공리주의로 발전시켰습니다.",
      "deepKnowledge": "밀은 '배부른 돼지가 되기보다 배고픈 인간이 되는 편이 낫고, 만족해하는 바보가 되기보다 불만족해하는 소크라테스가 되는 편이 낫다'며 지적·정신적 쾌락의 우위를 역설했습니다.",
      "sourceOrTrivia": "Bentham (1789) An Introduction to the Principles of Morals and Legislation",
      "wrongOptionsReason": [
        "스토아 철학은 자연의 이성에 따르고 정념을 극복하는 금욕주의 철학입니다.",
        "의무론은 결과와 무관하게 동기와 보편적 도덕 법칙을 중시하는 칸트의 윤리입니다.",
        "실존주의는 개인의 실존과 주체적 선택을 중시하는 사상입니다.",
        "정답입니다. 결과와 행복의 총량을 중시하는 공리주의입니다."
      ]
    },
    {
      "id": "ultra_ph_13",
      "topic": "철학 & 사상",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "마르틴 하이데거가 '존재와 시간(1927)'에서 제시한 인간 실존의 고유한 규정으로, 세계 속에 내던져져 존재하며(피투성), 죽음을 향한 존재로서 스스로의 가능성을 기획 투사하는 인간 존재를 뜻하는 독일어는?",
      "options": [
        "다자인 (Dasein, 현존재)",
        "아우프헤벤",
        "위버멘쉬",
        "베르트(가치)"
      ],
      "correctIndex": 0,
      "explanation": "다자인(Dasein, 거기-존재)은 다른 사물처럼 고정된 본질로 존재하는 것이 아니라, '자신의 존재를 문제 삼는 존재자'로서 시시각각 세계와 관계를 맺고 결단하는 인간을 가리킵니다.",
      "deepKnowledge": "하이데거는 인간이 죽음이라는 피할 수 없는 궁극의 한계를 직시할 때 비로소 일상적 세인(Das Man)의 비본래적 삶을 벗어나 본래적 자기 자신을 회복할 수 있다고 역설했습니다.",
      "sourceOrTrivia": "Heidegger (1927) Sein und Zeit",
      "wrongOptionsReason": [
        "정답입니다. 하이데거가 인간 존재를 지칭한 현존재(Dasein)입니다.",
        "아우프헤벤은 헤겔 변증법의 지양 개념입니다.",
        "위버멘쉬는 니체의 초인 개념입니다.",
        "베르트는 일반적인 가치(Value)를 뜻하는 독일어 단어입니다."
      ]
    },
    {
      "id": "ultra_ph_14",
      "topic": "철학 & 사상",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "토머스 홉스가 '리바이어던(1651)'에서 묘사한 국가나 법이 존재하지 않는 자연 상태의 인간 삶을 표현한 유명한 라틴어 구절은?",
      "options": [
        "인간은 사회적 동물이다",
        "만인의 만인에 대한 투쟁 (Bellum omnium contra omnes)",
        "국가는 최대의 행복이다",
        "인간은 자유롭게 태어났으나 사슬에 묶여 있다"
      ],
      "correctIndex": 1,
      "explanation": "홉스는 자연 상태에서 인간은 죽음에 대한 공포와 이기심 때문에 서로 끊임없이 불신하고 투쟁하며, 그 삶은 '고독하고, 가난하고, 비참하고, 잔인하며, 짧다'고 묘사했습니다.",
      "deepKnowledge": "이 비참한 자연 상태를 벗어나 평화와 안전을 누리기 위해 사회계약을 맺고 모든 권력을 주권자인 거대한 국가 괴물 '리바이어던'에게 양도한다고 주장했습니다.",
      "sourceOrTrivia": "Hobbes (1651) Leviathan",
      "wrongOptionsReason": [
        "인간은 사회적 동물이다는 아리스토텔레스의 정치학 명제입니다.",
        "정답입니다. 국가 권력의 정당성을 계약으로 설명한 만인의 만인에 대한 투쟁입니다.",
        "국가는 최대의 행복이라는 공리주의적 표현입니다.",
        "인간은 자유롭게 태어났으나 사슬에 묶여 있다는 루소의 사회계약론 첫 문장입니다."
      ]
    },
    {
      "id": "ultra_ph_15",
      "topic": "철학 & 사상",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "네덜란드의 범신론 철학자 바루흐 스피노자가 '에티카(Ethica)'에서 신(자연)과 세계를 바라보는 관점으로 제시한 것으로, 순간적 감정에 휘둘리지 않고 만물을 영원한 필연성의 법칙 속에서 관조하는 태도는?",
      "options": [
        "방법적 회의",
        "신즉자연 (Deus sive Natura)",
        "영원의 상 아래서 (Sub specie aeternitatis)",
        "코나투스"
      ],
      "correctIndex": 2,
      "explanation": "스피노자는 신과 자연이 둘이 아니라 하나(신즉자연)이며, 세상의 모든 사건은 신의 본성에서 필연적으로 도출되므로 이를 '영원의 상 아래서' 지적으로 직관하고 인식할 때 진정한 자유와 지복(Beatitudo)에 이른다고 가르쳤습니다.",
      "deepKnowledge": "'코나투스(Conatus)'는 스피노자가 정의한 자기 존재를 유지하고 향상시키려는 생명 본연의 내재적 역량입니다.",
      "sourceOrTrivia": "Spinoza (1677) Ethica, ordine geometrico demonstrata",
      "wrongOptionsReason": [
        "방법적 회의는 데카르트의 인식론적 회의 기법입니다.",
        "신즉자연은 신이 곧 자연이라는 스피노자의 존재론적 근본 명제입니다.",
        "정답입니다. 영원한 필연성의 관점에서 세계를 관조하는 '영원의 상 아래서'입니다.",
        "코나투스는 존재 유지의 내재적 욕망을 뜻하는 개념입니다."
      ]
    },
    {
      "id": "ultra_ph_16",
      "topic": "철학 & 사상",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "맹자(孟子)의 사상으로, 인간의 본성은 선(善)하며 태어날 때부터 측은지심, 수오지심, 사양지심, 시비지심이라는 네 가지 착한 싹(사단, 四端)을 품고 태어난다는 학설은?",
      "options": [
        "화성기위",
        "성악설",
        "성무선악설",
        "성선설 (性善說)"
      ],
      "correctIndex": 3,
      "explanation": "맹자는 우물에 빠지려는 어린아이를 보면 누구나 조건 없이 측은한 마음(측은지심)이 드는 것을 통해 인의예지의 사단이 인간 본성에 선천적으로 깃들어 있음을 논증했습니다.",
      "deepKnowledge": "맹자는 또한 군주가 백성을 도탄에 빠뜨리고 폭군이 되면 백성이 그를 몰아내고 새로운 어진 군주를 세울 수 있다는 '역성혁명론(易姓革命論)'을 설파했습니다.",
      "sourceOrTrivia": "맹자 공손추상(公孫丑上) / 진심상",
      "wrongOptionsReason": [
        "화성기위는 본성을 변화시켜 인위적인 예를 세운다는 순자의 교화론입니다.",
        "성악설은 순자가 주장한 인간 본성은 악하다는 이론입니다.",
        "성무선악설은 고자가 주장한 본성은 원래 백지 같다는 이론입니다.",
        "정답입니다. 인간 본성의 선천적 도덕성을 주장한 성선설입니다."
      ]
    },
    {
      "id": "ultra_ph_17",
      "topic": "철학 & 사상",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "고대 그리스 헬레니즘 시대 제논이 창시하였으며, 만물을 지배하는 우주적 이성(로고스)에 순응하고 모든 고통과 정념에서 벗어난 부동심(아파테이아)을 이상으로 삼은 학파는?",
      "options": [
        "스토아학파 (Stoicism)",
        "에피쿠로스학파",
        "회의주의 학파",
        "피타고라스학파"
      ],
      "correctIndex": 0,
      "explanation": "스토아학파(세네카, 에픽테토스, 마르쿠스 아우렐리우스)는 외적 환경은 통제할 수 없으나 내면의 판단과 의지는 통제할 수 있다며 절제와 도덕적 의무를 강조했습니다.",
      "deepKnowledge": "에피쿠로스학파는 육체적 고통과 마음의 불안이 없는 평정심인 '아타락시아(Ataraxia)'를 추구한 반면, 스토아학파는 정념이 완전히 사라진 '아파테이아(Apatheia)'를 추구했습니다.",
      "sourceOrTrivia": "Marcus Aurelius, Meditations / Epictetus, Enchiridion",
      "wrongOptionsReason": [
        "정답입니다. 로고스 순응과 금욕적 덕을 중시한 스토아학파입니다.",
        "에피쿠로스학파는 소박한 쾌락과 마음의 평정(아타락시아)을 추구했습니다.",
        "회의주의 학파는 확실한 지식을 불신하고 판단을 유보한 학파입니다.",
        "피타고라스학파는 만물의 근원을 수(數)로 본 학파입니다."
      ]
    },
    {
      "id": "ultra_ph_18",
      "topic": "철학 & 사상",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "아리스토텔레스가 '니코마코스 윤리학'에서 인간 행위의 궁극적인 최고 목적으로 제시한 것으로, 탁월함(덕)을 발휘하여 영혼이 번영하고 온전히 실현되는 참된 행복 상태는?",
      "options": [
        "헤도네 (쾌락)",
        "에우다이모니아 (Eudaimonia, 행복)",
        "카타르시스",
        "아레테 (탁월함)"
      ],
      "correctIndex": 1,
      "explanation": "에우다이모니아는 단순한 일시적 기분이나 감각적 쾌락이 아니라, 인간 고유의 이성적 능력을 평생에 걸쳐 최선으로 발휘하는 목적론적 영혼의 활동 상태입니다.",
      "deepKnowledge": "아리스토텔레스는 과도함과 부족함 사이의 올바른 균형을 잡는 '중용(Mesotes)'을 실천할 때 에우다이모니아에 도달할 수 있다고 보았습니다.",
      "sourceOrTrivia": "Aristotle, Nicomachean Ethics Book I",
      "wrongOptionsReason": [
        "헤도네는 육체적·감각적 쾌락을 뜻하는 그리스어입니다.",
        "정답입니다. 아리스토텔레스 최고선인 에우다이모니아입니다.",
        "카타르시스는 비극 예술을 통한 감정의 정화입니다.",
        "아레테는 에우다이모니아를 달성하기 위한 수단인 덕(탁월성)입니다."
      ]
    },
    {
      "id": "ultra_ph_19",
      "topic": "철학 & 사상",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "영국의 경험론 철학자 데이비드 흄이 '인간오성론'에서 기존 철학과 과학의 인과법칙을 회의하며 제시한 비판으로, 원인과 결과는 객관적 필연성이 아니라 단지 무엇에 불과하다고 보았는가?",
      "options": [
        "물질의 객관적 기하학적 성질",
        "신이 부여한 선천적 이성 법칙",
        "항상적 연접에 따른 마음의 습관 (Constant Conjunction)",
        "논리적 필연 명제"
      ],
      "correctIndex": 2,
      "explanation": "흄은 사건 A(당구공 침) 뒤에 사건 B(당구공 굴러감)가 시간상 뒤따르는 것은 관찰되지만, 둘을 연결하는 보이지 않는 '필연적 결합력'은 감각적으로 경험할 수 없으므로 인과는 습관적 기대에 불과하다고 밝혔습니다.",
      "deepKnowledge": "이 흄의 날카로운 인과율 회의주의는 칸트를 '독단의 잠(Dogmatic Slumber)'에서 일깨워 선험적 종합판단을 탐구하는 '순수이성비판'을 집필하게 만든 결정적 충격이었습니다.",
      "sourceOrTrivia": "Hume (1748) An Enquiry Concerning Human Understanding",
      "wrongOptionsReason": [
        "객관적 성질은 뉴턴 고전역학의 전제입니다.",
        "선천적 이성 법칙은 합리론자들의 독단적 견해입니다.",
        "정답입니다. 인과성을 심리적 습관으로 해체한 흄의 회의론입니다.",
        "논리적 필연 명제는 분석판단에만 해당합니다."
      ]
    },
    {
      "id": "ultra_ph_20",
      "topic": "철학 & 사상",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "명나라의 철학자 왕양명(王陽明)이 주자학의 '격물치지'를 비판하고 정립한 양명학의 핵심 명제로, 도덕적 앎(양지)과 올바른 실천은 본래 둘이 아닌 하나라는 사상은?",
      "options": [
        "거경궁리",
        "성즉리",
        "선지후행",
        "지행합일 (知行合一)"
      ],
      "correctIndex": 3,
      "explanation": "왕양명은 앎은 행함의 시작이고 행함은 앎의 완성이라며, 진정으로 알면 실천하지 않을 수 없다는 심즉리(心卽理)와 치양지(致良知), 지행합일을 주창했습니다.",
      "deepKnowledge": "주자학이 사물의 이치를 객관적으로 탐구(선지후행)하는 것을 강조하여 관념화된 반면, 양명학은 내면의 도덕적 실천 주체성을 강력히 회복하고자 했습니다.",
      "sourceOrTrivia": "왕양명 전습록(傳習錄)",
      "wrongOptionsReason": [
        "거경궁리는 마음을 경건히 하고 이치를 궁구하는 주자의 수양법입니다.",
        "성즉리는 본성이 곧 이치라는 주자학의 근본 테제입니다.",
        "선지후행은 먼저 알고 난 뒤에 실천한다는 주자학의 학문 순서입니다.",
        "정답입니다. 양명학의 실천적 핵심 원리인 지행합일입니다."
      ]
    },
    {
      "id": "ultra_ph_21",
      "topic": "철학 & 사상",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "아서 쇼펜하우어가 '의지와 표상으로서의 세계(1819)'에서 고통으로 가득 찬 인생의 근원으로 지목한, 맹목적이고 비이성적인 우주의 맹목적 충동은?",
      "options": [
        "살고자 하는 의지 (Wille zum Leben)",
        "권력의지",
        "절대정신",
        "이데아"
      ],
      "correctIndex": 0,
      "explanation": "쇼펜하우어는 우리가 보는 세계는 표상에 불과하며 세계의 참된 본체는 끝없는 결핍과 욕망에 굶주린 '삶에의 의지'라고 보아 염세주의 철학을 전개했습니다.",
      "deepKnowledge": "그는 욕망이 충족되면 권태에 빠지고 충족되지 않으면 고통에 시달리는 시계추 같은 삶의 비극을 벗어나는 길로 예술적 관조와 금욕적 의지의 부정을 제시했습니다.",
      "sourceOrTrivia": "Schopenhauer (1819) Die Welt als Wille und Vorstellung",
      "wrongOptionsReason": [
        "정답입니다. 맹목적 고통의 근원인 살고자 하는 의지입니다.",
        "권력의지는 니체가 제시한 자기 초월과 상승의 긍정적 의지입니다.",
        "절대정신은 헤겔의 이성적 우주 원리입니다.",
        "이데아는 플라톤의 영원불변한 참된 형상입니다."
      ]
    },
    {
      "id": "ultra_ph_22",
      "topic": "철학 & 사상",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "프랑스의 철학자 미셸 푸코가 '감옥의 탄생(1975)'에서 제러미 벤담의 원형 감옥 설계를 인용하여, 근대 권력이 인간의 신체를 규율하고 스스로를 감시하게 만드는 감시 통제 메커니즘을 분석한 개념은?",
      "options": [
        "리좀 (Rhizome)",
        "파놉티콘 (Panopticon, 일망감시시설)",
        "시뮬라크르",
        "탈영토화"
      ],
      "correctIndex": 1,
      "explanation": "파놉티콘은 중앙 감시탑의 간수는 보이지 않지만 수감자는 항상 감시받고 있다는 의식을 내면화하여 스스로를 규율하는 근대 권력(규율 권력, 생명정치)의 완벽한 축소판 모델입니다.",
      "deepKnowledge": "푸코는 학교, 병원, 군대, 공장이 모두 감옥과 유사한 규율과 시간표, 신체 통제를 통해 근대적 순종적인 신체를 길러낸다고 고발했습니다.",
      "sourceOrTrivia": "Foucault (1975) Surveiller et punir: Naissance de la prison",
      "wrongOptionsReason": [
        "리좀은 들뢰즈가 제시한 탈중심적이고 접속적인 사유 구조입니다.",
        "정답입니다. 근대 규율 권력의 감시 메커니즘을 상징하는 파놉티콘입니다.",
        "시뮬라크르는 보드리야르가 제시한 원본 없는 복제 이미지입니다.",
        "탈영토화는 기존의 경계와 정체성을 벗어나는 들뢰즈의 개념입니다."
      ]
    },
    {
      "id": "ultra_ph_23",
      "topic": "철학 & 사상",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "장자의 제물론(齊物論)에 나오는 유명한 우화로, 꿈속에서 자신이 나비가 되어 펄펄 날아다니다가 깨어난 뒤 자신이 나비 꿈을 꾼 것인지 나비가 자신의 꿈을 꾸고 있는 것인지 분간할 수 없었다는 이야기는?",
      "options": [
        "조삼모사",
        "새옹지마",
        "호접지몽 (胡蝶之夢)",
        "양포지구"
      ],
      "correctIndex": 2,
      "explanation": "호접지몽은 나와 사물, 삶과 꿈의 경계가 허물어지고 만물이 본래 차별 없이 하나로 어우러지는 '물아일체(物我一體)'의 물화(物化) 경지를 환상적으로 표현한 이야기입니다.",
      "deepKnowledge": "장자는 시비선악의 인위적 구분을 벗어던질 때 진정한 절대 자유의 경지인 소요유(逍遙遊)에 이를 수 있다고 역설했습니다.",
      "sourceOrTrivia": "장자(莊子) 내편 제2 제물론",
      "wrongOptionsReason": [
        "조삼모사는 간사한 꾀로 남을 속이는 것을 뜻하는 우화입니다.",
        "새옹지마는 인생의 길흉화복을 예측할 수 없음을 나타내는 고사입니다.",
        "정답입니다. 나와 사물의 경계가 허물어지는 장자의 호접지몽입니다.",
        "양포지구는 겉모습만 보고 짓는 개를 탓하지 말라는 이야기입니다."
      ]
    },
    {
      "id": "ultra_ph_24",
      "topic": "철학 & 사상",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "17세기 영국의 경험론 철학자 존 로크가 '인간오성론'에서 주장한 학설로, 인간은 선천적 본유관념 없이 마음이 텅 빈 '백지' 상태로 태어나 후천적 경험을 통해 지식을 쌓는다는 명제는?",
      "options": [
        "지행합일",
        "본유관념설",
        "선험론",
        "타불라 라사 (Tabula Rasa, 백지설)"
      ],
      "correctIndex": 3,
      "explanation": "로크는 감각(Sensation)과 반성(Reflection)이라는 두 가지 경험적 원천을 통해서만 단순 관념이 유입되고, 이들이 결합하여 복합 관념과 지식 체계를 형성한다고 보았습니다.",
      "deepKnowledge": "이 백지설은 귀족과 왕족이 날 때부터 우월한 혈통이나 관념을 지닌다는 신분제적 정당화를 무너뜨리고, 교육의 결정적 중요성을 부각시켰습니다.",
      "sourceOrTrivia": "Locke (1689) An Essay Concerning Human Understanding",
      "wrongOptionsReason": [
        "지행합일은 양명학의 실천 이론입니다.",
        "본유관념설은 데카르트 등 합리론자가 주장한 선천적 지식 이론입니다.",
        "선험론은 칸트가 감성과 오성의 선천적 형식을 주장한 이론입니다.",
        "정답입니다. 경험론의 기초가 되는 로크의 백지설(타불라 라사)입니다."
      ]
    },
    {
      "id": "ultra_ph_25",
      "topic": "철학 & 사상",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "덴마크의 실존철학의 선구자 쇠렌 키에르케고르가 제시한 인간 실존의 3단계 발전 과정 중, 절망과 죄책감을 극복하고 신 앞에 단독자로 서서 신앙의 결단을 내리는 최종 단계는?",
      "options": [
        "종교적 실존 단계 (신앙의 기사)",
        "미적 실존 단계",
        "윤리적 실존 단계",
        "이성적 실존 단계"
      ],
      "correctIndex": 0,
      "explanation": "키에르케고르는 쾌락을 좇다 권태에 빠지는 미적 단계, 사회적 의무와 도덕을 따르다 한계에 부딪히는 윤리적 단계를 거쳐, 마침내 아브라함처럼 신 앞에 단독자로 서서 믿음의 도약을 감행하는 종교적 단계에 도달한다고 보았습니다.",
      "deepKnowledge": "그는 '공포와 전율(Fear and Trembling)'에서 보편적 윤리마저 뛰어넘는 신앙의 '목적론적 정지'를 깊이 있게 탐구했습니다.",
      "sourceOrTrivia": "Kierkegaard (1843) Enten – Eller / Frygt og Bæven",
      "wrongOptionsReason": [
        "정답입니다. 신 앞의 단독자로 비약하는 종교적 실존 단계입니다.",
        "미적 단계는 감각적 향락과 쾌락을 추구하는 제1단계입니다.",
        "윤리적 단계는 보편적 도덕 의무를 이행하는 제2단계입니다.",
        "이성적 단계는 키에르케고르의 3단계 분류 체계에 없는 헤겔적 개념입니다."
      ]
    }
  ],
  "literature_classics": [
    {
      "id": "ultra_lit_1",
      "topic": "문학 & 세계 고전",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "셰익스피어의 4대 비극 중 덴마크 왕국을 배경으로 하며, 숙부에게 독살당한 선왕의 유령을 만나 복수를 결심하면서 '사느냐 죽느냐 그것이 문제로다(To be or not to be)'라는 독백을 남긴 작품은?",
      "options": [
        "햄릿 (Hamlet)",
        "오셀로",
        "리어왕",
        "맥베스"
      ],
      "correctIndex": 0,
      "explanation": "햄릿은 지성적 고뇌와 결단의 지연, 복수와 도덕적 양심 사이에서 방황하는 근대적 인간의 심리를 최초로 심오하게 포착한 셰익스피어 비극의 최고봉입니다.",
      "deepKnowledge": "작품 속 오필리아의 비극적 익사 장면과 극중극(The Mousetrap) 장치는 연극 및 서양 미술사 전반에 막대한 영감을 주었습니다.",
      "sourceOrTrivia": "Shakespeare, The Tragedy of Hamlet, Prince of Denmark (ca. 1600)",
      "wrongOptionsReason": [
        "정답입니다. 불멸의 독백을 남긴 셰익스피어의 대표 비극 햄릿입니다.",
        "오셀로는 이아고의 이간질로 질투에 눈이 멀어 아내 데스데모나를 살해하는 비극입니다.",
        "리어왕은 세 딸의 효심을 시험하다 광기에 빠지는 노왕의 비극입니다.",
        "맥베스는 마녀의 예언과 야망에 이끌려 왕을 시해하고 파멸하는 스코틀랜드 장군의 비극입니다."
      ]
    },
    {
      "id": "ultra_lit_2",
      "topic": "문학 & 세계 고전",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "세르반테스가 1605년 발표하여 근대 소설(Novel)의 효시로 꼽히며, 기사도 소설에 심취하여 스스로 방랑 기사가 되어 풍차를 거인으로 착각해 돌진하는 주인공이 등장하는 소설은?",
      "options": [
        "걸리버 여행기",
        "돈키호테 (Don Quixote)",
        "로빈슨 크루소",
        "데카메론"
      ],
      "correctIndex": 1,
      "explanation": "라만차의 귀족 돈키호테와 현실적인 종자 산초 판사의 여정을 통해 중세 기사도의 환상을 풍자하고, 이상과 현실의 영원한 갈등을 유머와 페이소스로 그린 걸작입니다.",
      "deepKnowledge": "2002년 노벨연구소가 세계 54개국 저명 작가 100명을 대상으로 실시한 조사에서 '인류 역사상 가장 위대한 문학작품 1위'로 선정되었습니다.",
      "sourceOrTrivia": "Cervantes (1605/1615) El ingenioso hidalgo Don Quijote de la Mancha",
      "wrongOptionsReason": [
        "걸리버 여행기는 조너선 스위프트의 인간 사회 풍자 소설입니다.",
        "정답입니다. 근대 사실주의 소설의 출발점인 돈키호테입니다.",
        "로빈슨 크루소는 대니얼 디포의 무인도 생존 소설입니다.",
        "데카메론은 보카치오가 흑사병을 피해 모인 청춘들의 100가지 이야기를 엮은 소설집입니다."
      ]
    },
    {
      "id": "ultra_lit_3",
      "topic": "문학 & 세계 고전",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "프란츠 카프카의 대표 중편 소설로, 성실한 외판원 그레고르 잠자가 어느 날 아침 불안한 꿈에서 깨어났을 때 자신이 한 마리의 거대한 흉측한 벌레로 변해버린 사건을 다룬 작품은?",
      "options": [
        "성 (Das Schloss)",
        "심판 (소송)",
        "변신 (Die Verwandlung)",
        "시골의사"
      ],
      "correctIndex": 2,
      "explanation": "카프카의 '변신'은 자본주의 사회에서 도구적 쓸모(노동력)를 잃어버린 인간이 가족과 사회로부터 철저히 소외되고 배제당하는 실존적 비극을 냉혹한 필치로 그렸습니다.",
      "deepKnowledge": "가족을 먹여 살리던 가장이었던 잠자가 사과 상처를 입고 방치되어 쓸쓸히 죽어가는 장면은 현대 문학의 가장 강렬한 실존주의적 우화로 평가받습니다.",
      "sourceOrTrivia": "Kafka (1915) Die Verwandlung",
      "wrongOptionsReason": [
        "성은 마을에 도착했으나 결코 성에 도달할 수 없는 측량기사의 이야기입니다.",
        "심판은 이유도 모른 채 체포되어 기소당하는 요제프 K의 이야기입니다.",
        "정답입니다. 인간 소외의 부조리를 다룬 카프카의 대표작 변신입니다.",
        "시골의사는 눈보라 속에서 무력하게 방황하는 의사의 악몽 같은 단편입니다."
      ]
    },
    {
      "id": "ultra_lit_4",
      "topic": "문학 & 세계 고전",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "알베르 카뮈의 소설로, '오늘 엄마가 죽었다. 아니 어쩌면 어제'라는 충격적인 첫 문장으로 시작하며 햇빛이 눈부셨다는 이유로 해변에서 아랍인을 살해한 뫼르소가 등장하는 작품은?",
      "options": [
        "시지프 신화",
        "페스트",
        "전락",
        "이방인 (L'Étranger)"
      ],
      "correctIndex": 3,
      "explanation": "뫼르소는 사회가 요구하는 위선적 눈물이나 관습적 감정을 연기하지 않고 진실만을 고수하다 사형 선고를 받는 '부조리(Absurdity)의 영웅'으로 묘사됩니다.",
      "deepKnowledge": "카뮈는 뫼르소에 대해 '그는 판에 박힌 연기를 거부했기 때문에 사회에서 이방인으로 단죄받아 죽어간 사나이'라고 평했습니다.",
      "sourceOrTrivia": "Camus (1942) L'Étranger / 노벨문학상 (1957)",
      "wrongOptionsReason": [
        "시지프 신화는 바위를 굴려 올리는 부조리 철학 에세이입니다.",
        "페스트는 전염병에 맞서 연대하고 저항하는 의사 리외의 이야기입니다.",
        "전락은 암스테르담의 바에서 참회하는 재판관 클라망스의 독백 소설입니다.",
        "정답입니다. 부조리와 정직한 실존을 그린 카뮈의 이방인입니다."
      ]
    },
    {
      "id": "ultra_lit_5",
      "topic": "문학 & 세계 고전",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "표도르 도스토옙스키의 최후의 대작 '카라마조프 가의 형제들' 제5편에 삽입된 가장 유명한 사상적 극중극으로, 16세기 스페인 세비야에 재림한 예수를 체포하여 심문하는 가톨릭 추기경의 독백은?",
      "options": [
        "대심문관의 전설 (The Grand Inquisitor)",
        "지하로부터의 수기",
        "악령의 고백",
        "백치의 독백"
      ],
      "correctIndex": 0,
      "explanation": "무신론자 이반이 동생 알료샤에게 들려주는 이야기로, 대심문관은 인간은 자유를 감당할 수 없는 나약한 존재이므로 기적, 신비, 권위로 빵을 주어 복종시켜야 한다며 예수를 추방합니다.",
      "deepKnowledge": "인간의 자유의지와 신의 은총, 전체주의적 지배의 심리학을 다룬 인류 지성사 최고의 철학적 드라마로 평가받습니다.",
      "sourceOrTrivia": "Dostoevsky (1880) The Brothers Karamazov Book V, Chapter 5",
      "wrongOptionsReason": [
        "정답입니다. 자유와 권위의 모순을 날카롭게 해부한 대심문관의 전설입니다.",
        "지하로부터의 수기는 1864년 발표된 반합리주의적 소설입니다.",
        "악령은 러시아 허무주의와 혁명 세력의 광기를 고발한 작품입니다.",
        "백치는 순수한 영혼 미시킨 공작의 비극을 다룬 작품입니다."
      ]
    },
    {
      "id": "ultra_lit_6",
      "topic": "문학 & 세계 고전",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "마르셀 프루스트의 7편 연작 대하소설 '잃어버린 시간을 찾아서'에서 주인공 마르셀이 홍차에 적신 이 과자를 입에 넣는 순간, 유년 시절 콩브레의 기억이 생생히 되살아나는 문학적 장치는?",
      "options": [
        "마카롱",
        "마들렌 (Madeleine) - 무의지적 기억",
        "크루아상",
        "바게트"
      ],
      "correctIndex": 1,
      "explanation": "프루스트는 지적 노력으로 떠올리는 '의지적 기억'이 아닌, 감각(미각, 후각)을 통해 과거의 온전한 시간이 마법처럼 복원되는 '무의지적 기억(Mémoire involontaire)'을 문학화했습니다.",
      "deepKnowledge": "오늘날 뇌과학 및 심리학에서 특정 냄새나 맛이 순식간에 과거 기억을 불러일으키는 현상을 '프루스트 효과(Proust Effect)'라고 부릅니다.",
      "sourceOrTrivia": "Proust (1913) À la recherche du temps perdu: Du côté de chez Swann",
      "wrongOptionsReason": [
        "마카롱은 작품 속 회상의 매개체가 아닙니다.",
        "정답입니다. 프루스트 효과를 낳은 마들렌 과자와 홍차입니다.",
        "크루아상은 일반적인 프랑스 빵입니다.",
        "바게트는 프랑스의 전통 긴 빵입니다."
      ]
    },
    {
      "id": "ultra_lit_7",
      "topic": "문학 & 세계 고전",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "단테 알리기에리가 14세기 초 이탈리아 토스카나 방언으로 집필한 서사시 '신곡(La Divina Commedia)'에서, 단테를 지옥(Inferno)과 연옥(Purgatorio)으로 안내하는 고대 로마의 시인은?",
      "options": [
        "오비디우스",
        "호메로스",
        "베르길리우스 (Virgilius)",
        "호라티우스"
      ],
      "correctIndex": 2,
      "explanation": "베르길리우스는 인간 이성(Human Reason)을 상징하는 길잡이이며, 천국(Paradiso)에 들어서서는 단테가 평생 연모했던 베아트리체(신앙과 신의 은총 상징)가 바통을 이어받아 안내합니다.",
      "deepKnowledge": "지옥문의 입구에는 '여기에 들어오는 자, 모든 희망을 버릴지어다(Lasciate ogne speranza, voi ch'intrate)'라는 유명한 경구가 적혀 있습니다.",
      "sourceOrTrivia": "Dante Alighieri (ca. 1320) Commedia",
      "wrongOptionsReason": [
        "오비디우스는 변신 이야기(Metamorphoses)를 쓴 고대 로마 시인입니다.",
        "호메로스는 지옥의 림보(변옥)에서 단테를 맞이하는 위대한 시인입니다.",
        "정답입니다. 단테를 지옥과 연옥에서 인도한 인간 이성의 상징 베르길리우스입니다.",
        "호라티우스는 서간시와 송가를 쓴 로마의 서정시인입니다."
      ]
    },
    {
      "id": "ultra_lit_8",
      "topic": "문학 & 세계 고전",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "아일랜드의 모더니즘 소설가 제임스 조이스가 1922년 발표한 작품으로, 더블린을 배경으로 주인공 레오폴드 블룸의 1904년 6월 16일 단 하루 동안의 내면 심리를 '의식의 흐름(Stream of Consciousness)' 기법으로 서술한 걸작은?",
      "options": [
        "더블린 사람들",
        "젊은 예술가의 초상",
        "피네간의 경야",
        "율리시스 (Ulysses)"
      ],
      "correctIndex": 3,
      "explanation": "호메로스의 오디세이아 구조를 20세기 더블린의 하루로 패러디한 율리시스는 문장 부호 없는 내면 독백과 언어 유희, 다성악적 문체 실험으로 현대 소설의 지평을 완전히 바꿨습니다.",
      "deepKnowledge": "오늘날 6월 16일은 전 세계 문학 애호가들이 주인공 블룸의 발자취를 따라 더블린을 순례하는 '블룸스데이(Bloomsday)'로 기념되고 있습니다.",
      "sourceOrTrivia": "Joyce (1922) Ulysses",
      "wrongOptionsReason": [
        "더블린 사람들은 조이스의 초기 단편 소설집입니다.",
        "젊은 예술가의 초상은 스티븐 디달러스의 성장과 자의식을 다룬 자전적 소설입니다.",
        "피네간의 경야는 꿈의 언어로 쓰여 해독이 극도로 난해한 조이스의 만년작입니다.",
        "정답입니다. 20세기 모더니즘 문학의 기념비적 걸작 율리시스입니다."
      ]
    },
    {
      "id": "ultra_lit_9",
      "topic": "문학 & 세계 고전",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "조지 오웰이 1949년 발표한 디스토피아 소설로, 전체주의 국가 오세아니아가 '빅 브라더(Big Brother)'와 텔레스크린을 통해 시민들의 일거수일투족과 생각(사상죄)까지 감시하는 암울한 미래를 그린 작품은?",
      "options": [
        "1984",
        "동물농장",
        "멋진 신세계",
        "화씨 451"
      ],
      "correctIndex": 0,
      "explanation": "1984는 '전쟁은 평화, 자유는 예속, 무지는 힘'이라는 당의 슬로건과 언어를 통제해 사고를 말살하는 '신어(Newspeak)', '이중사고(Doublethink)' 등 전체주의의 공포를 생생히 고발했습니다.",
      "deepKnowledge": "조지 오웰은 파시즘과 스탈린주의 전체주의의 본질을 꿰뚫어 보았으며, 주인공 윈스턴 스미스가 101호실의 고문 끝에 빅 브라더를 사랑하게 되는 결말로 경고를 던졌습니다.",
      "sourceOrTrivia": "Orwell (1949) Nineteen Eighty-Four",
      "wrongOptionsReason": [
        "정답입니다. 감시 사회 디스토피아 문학의 최고 고전인 1984입니다.",
        "동물농장은 스탈린의 소비에트 독재를 우화로 풍자한 오웰의 1945년 소설입니다.",
        "멋진 신세계는 올더스 헉슬리가 생명공학과 쾌락(소마)으로 통제되는 사회를 그린 소설입니다.",
        "화씨 451은 레이 브래드버리가 책을 불태우는 미래 소방관을 다룬 소설입니다."
      ]
    },
    {
      "id": "ultra_lit_10",
      "topic": "문학 & 세계 고전",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "헤르만 헤세의 성장 소설로, 주인공 싱클레어가 선과 악의 이분법을 넘어 내면의 참된 자아를 찾아가는 과정을 그리며 '새는 알에서 나오려고 투쟁한다. 알은 세계다. 태어나려는 자는 하나의 세계를 깨뜨려야 한다'는 명구를 남긴 작품은?",
      "options": [
        "싯다르타",
        "데미안 (Demian)",
        "수레바퀴 아래서",
        "유리알 유희"
      ],
      "correctIndex": 1,
      "explanation": "싱클레어가 신비로운 친구 막스 데미안을 만나 선과 악, 빛과 어둠을 모두 포괄하는 신인 '아프락사스(Abraxas)'를 깨달으며 성숙해가는 심리적·영적 통과의례를 그렸습니다.",
      "deepKnowledge": "헤세는 융의 분석심리학적 무의식 탐구와 자기실현(Individuation) 과정을 데미안이라는 소설적 형상으로 녹여냈습니다.",
      "sourceOrTrivia": "Hesse (1919) Demian: Die Geschichte von Emil Sinclairs Jugend",
      "wrongOptionsReason": [
        "싯다르타는 부처와 동시대 동명이인 싯다르타의 영적 구도 소설입니다.",
        "정답입니다. 알을 깨고 나오는 자아 탐색의 고전 데미안입니다.",
        "수레바퀴 아래서는 억압적 기숙학교 교육에 파멸해가는 한스 기벤라트의 비극입니다.",
        "유리알 유희는 헤세의 만년작으로 1946년 노벨문학상을 안겨준 대작입니다."
      ]
    },
    {
      "id": "ultra_lit_11",
      "topic": "문학 & 세계 고전",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "빅토르 위고의 걸작 '레 미제라블(Les Misérables)'에서 빵 한 조각을 훔친 죄로 19년간 복역한 장발장에게 은식기와 은촛대를 주어 영혼을 감화시키고 구원의 길로 인도한 밀리에르 주교의 자비에 대비되는, 법과 질서의 절대성만을 맹신하며 장발장을 끝까지 추적하는 냉혹한 경감은?",
      "options": [
        "테나르디에",
        "마리우스",
        "자베르 (Javert)",
        "앙졸라"
      ],
      "correctIndex": 2,
      "explanation": "자베르 경감은 정의와 법의 문자적 집행만을 유일한 진리로 신봉하다가, 장발장의 거룩한 도덕적 은혜와 법 사이의 극심한 모순에 직면하여 센강에 몸을 던져 자살합니다.",
      "deepKnowledge": "레 미제라블은 1832년 6월 파리 시민들의 공화주의 봉기를 배경으로 빈곤과 무지, 법과 자비의 갈등을 장대한 스케일로 펼쳐낸 프랑스 인도주의 문학의 결정판입니다.",
      "sourceOrTrivia": "Hugo (1862) Les Misérables",
      "wrongOptionsReason": [
        "테나르디에는 탐욕스럽고 비열한 여관 주인 악당입니다.",
        "마리우스는 코제트와 사랑에 빠지는 혁명 청년입니다.",
        "정답입니다. 맹목적 법 집행자의 파멸을 보여준 자베르 경감입니다.",
        "앙졸라는 바리케이드 봉기를 이끄는 순결하고 비타협적인 혁명 지도자입니다."
      ]
    },
    {
      "id": "ultra_lit_12",
      "topic": "문학 & 세계 고전",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "어니스트 헤밍웨이의 1952년 중편 소설로, 멕시코만 쿠바 바다에서 84일간 물고기를 잡지 못하던 노인 산티아고가 거대한 청새치와 사투를 벌이며 '인간은 패배하도록 창조되지 않았다. 파괴될 수는 있어도 패배할 수는 없다'는 불굴의 의지를 보여준 작품은?",
      "options": [
        "태양은 다시 떠오른다",
        "무기여 잘 있거라",
        "누구를 위하여 종은 울리나",
        "노인과 바다 (The Old Man and the Sea)"
      ],
      "correctIndex": 3,
      "explanation": "헤밍웨이 특유의 군더더기 없는 하드보일드 빙산 문체(Iceberg Theory)로 인간의 존엄성과 자연과의 숙명적 대결을 승화시켜 1954년 노벨문학상을 수상했습니다.",
      "deepKnowledge": "비록 상어 떼에게 청새치의 살점을 모두 뜯겨 앙상한 뼈만 달고 항구로 돌아왔지만, 노인은 영혼의 패배를 거부하고 사자 꿈을 꿉니다.",
      "sourceOrTrivia": "Hemingway (1952) The Old Man and the Sea",
      "wrongOptionsReason": [
        "태양은 다시 떠오른다는 제1차 대전 후 길 잃은 세대(Lost Generation)를 그린 소설입니다.",
        "무기여 잘 있거라는 제1차 세계대전 이탈리아 전선을 배경으로 한 비극적 연애 소설입니다.",
        "누구를 위하여 종은 울리나는 스페인 내전을 배경으로 한 로버트 조던의 소설입니다.",
        "정답입니다. 불굴의 인간 정신을 노래한 노인과 바다입니다."
      ]
    },
    {
      "id": "ultra_lit_13",
      "topic": "문학 & 세계 고전",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "콜롬비아의 가브리엘 가르시아 마르케스가 1967년 발표하여 라틴아메리카 '마술적 리얼리즘(Magical Realism)'의 정점을 보여준 작품으로, 가상의 마을 마콘도에서 부엔디아 가문 6대에 걸친 흥망성쇠를 다룬 소설은?",
      "options": [
        "백년의 고독 (Cien años de soledad)",
        "콜레라 시대의 사랑",
        "예고된 죽음의 연대기",
        "미로 속의 장군"
      ],
      "correctIndex": 0,
      "explanation": "현실의 역사(바나나 학살, 내전)와 환상(공중부양, 노란 나비, 불면증 유행)이 완벽하게 결합되어 제3세계의 역사적 트라우마와 실존적 고독을 웅장하게 형상화했습니다.",
      "deepKnowledge": "소설의 마지막은 백 년의 고독을 겪은 가문은 두 번째 기회를 갖지 못한다는 양피지의 예언이 풀리며 마콘도가 회오리바람에 흔적도 없이 날아가며 끝납니다.",
      "sourceOrTrivia": "García Márquez (1967) Cien años de soledad / 노벨문학상 (1982)",
      "wrongOptionsReason": [
        "정답입니다. 마술적 리얼리즘의 불멸의 고전 백년의 고독입니다.",
        "콜레라 시대의 사랑은 50년 넘게 기다린 플로렌티노와 페르미나의 사랑 이야기입니다.",
        "예고된 죽음의 연대기는 온 마을이 살인을 알면서도 막지 못한 사건을 다룬 소설입니다.",
        "미로 속의 장군은 해방자 시몬 볼리바르의 말년을 다룬 역사 소설입니다."
      ]
    },
    {
      "id": "ultra_lit_14",
      "topic": "문학 & 세계 고전",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "F. 스콧 피츠제럴드가 1925년 발표한 소설로, 1920년대 제1차 대전 직후 미국의 번영과 향락의 '재즈 시대(Jazz Age)'를 배경으로 옛 연인 데이지를 되찾기 위해 거대한 저택에서 화려한 파티를 여는 남자의 비극적 순정을 그린 작품은?",
      "options": [
        "밤은 부드러워",
        "위대한 개츠비 (The Great Gatsby)",
        "낙원의 이편",
        "분노의 포도"
      ],
      "correctIndex": 1,
      "explanation": "화자 닉 캐러웨이의 시선을 통해 물질주의적 환상과 신분 상승의 허상에 물든 '아메리칸 드림(American Dream)'의 파탄과 환멸을 시적 문체로 그려냈습니다.",
      "deepKnowledge": "초록색 불빛을 향해 손을 뻗는 개츠비의 모습은 잡을 수 없는 과거와 잃어버린 이상의 영원한 갈망을 상징합니다.",
      "sourceOrTrivia": "Fitzgerald (1925) The Great Gatsby",
      "wrongOptionsReason": [
        "밤은 부드러워는 피츠제럴드의 자전적 요소가 강한 정신과 의사의 소설입니다.",
        "정답입니다. 재즈 시대와 아메리칸 드림의 붕괴를 그린 위대한 개츠비입니다.",
        "낙원의 이편은 피츠제럴드를 하룻밤 사이에 스타 작가로 만들어준 처녀작입니다.",
        "분노의 포도는 존 스타인벡이 1930년대 대공황기 오키(Okie) 농민들의 유랑을 그린 소설입니다."
      ]
    },
    {
      "id": "ultra_lit_15",
      "topic": "문학 & 세계 고전",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "표도르 도스토옙스키의 '죄와 벌(1866)'에서 주인공 라스콜리니코프가 고리대금업자 노파를 살해하는 근거로 내세운 사상으로, 나폴레옹처럼 인류를 위해 기존 도덕률을 뛰어넘을 권리가 있다는 위험한 신념은?",
      "options": [
        "숙명론",
        "허무주의 (니힐리즘)",
        "초인 사상 (비범인론)",
        "무정부주의"
      ],
      "correctIndex": 2,
      "explanation": "라스콜리니코프는 인간을 관습에 복종하는 '범인(평범한 사람)'과 인류 발전을 위해 도덕과 법을 파괴할 권리를 가진 '비범인'으로 나누고 자신이 비범인인지 시험하기 위해 살인을 저지릅니다.",
      "deepKnowledge": "그러나 살인 후 극심한 죄의식과 신경증에 시달리며 시베리아 유형지에서 소냐의 헌신적 사랑과 복음서를 통해 마침내 영적 부활에 이릅니다.",
      "sourceOrTrivia": "Dostoevsky (1866) Crime and Punishment",
      "wrongOptionsReason": [
        "숙명론은 모든 것이 운명에 의해 결정되어 있다는 체념적 신념입니다.",
        "허무주의는 바자로프(투르게네프 '아버지와 아들')가 신봉하는 사상입니다.",
        "정답입니다. 노파 살해의 합리화 논리로 사용된 비범인론(초인 사상)입니다.",
        "무정부주의는 국가 권력의 완전한 폐지를 주장하는 사상입니다."
      ]
    },
    {
      "id": "ultra_lit_16",
      "topic": "문학 & 세계 고전",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "레프 톨스토이의 소설 '안나 카레니나(1877)'의 서두를 장식하는 인류 문학사상 가장 유명한 첫 문장은?",
      "options": [
        "박제가 되어버린 천재를 아시오?",
        "오늘 엄마가 죽었다",
        "국경의 긴 터널을 빠져나오자, 눈의 고장이었다",
        "행복한 가정은 모두 엇비슷하고, 불행한 가정은 저마다의 이유로 불행하다"
      ],
      "correctIndex": 3,
      "explanation": "이 첫 문장은 '안나 카레니나 법칙(Anna Karenina Principle)'이라는 통계학·생태학 용어로도 널리 인용되며, 성공하려면 모든 요건이 다 충족되어야 하지만 실패는 단 하나의 결함으로도 발생함을 뜻합니다.",
      "deepKnowledge": "소설은 안나의 파멸적인 불륜과 비극적 투신자살, 그리고 콘스탄틴 레빈의 농촌 정착과 영적 구원을 병렬 대조하여 삶의 참된 의미를 탐구합니다.",
      "sourceOrTrivia": "Tolstoy (1877) Anna Karenina Part 1, Chapter 1",
      "wrongOptionsReason": [
        "박제가 되어버린 천재를 아시오는 이상의 '날개' 첫 문장입니다.",
        "오늘 엄마가 죽었다는 카뮈의 '이방인' 첫 문장입니다.",
        "국경의 긴 터널을 빠져나오자는 가와바타 야스나리의 '설국' 첫 문장입니다.",
        "정답입니다. 톨스토이의 통찰이 담긴 안나 카레니나의 첫 문장입니다."
      ]
    },
    {
      "id": "ultra_lit_17",
      "topic": "문학 & 세계 고전",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "고대 그리스 3대 비극 시인 소포클레스의 비극으로, '아버지를 죽이고 어머니와 혼인할 운명'이라는 델포이 신탁을 피하려 발버둥 쳤으나 결국 스스로 자신의 눈을 찔러 장님이 되는 테베 왕의 비극은?",
      "options": [
        "오이디푸스 왕 (Oedipus Rex)",
        "안티고네",
        "엘렉트라",
        "아가멤논"
      ],
      "correctIndex": 0,
      "explanation": "아리스토텔레스가 '시학'에서 비극의 완벽한 전형(급전과 발견의 일치)으로 극찬한 작품으로, 가혹한 운명에 맞서 진실을 끝까지 추구한 인간의 숭고한 비극성을 보여줍니다.",
      "deepKnowledge": "지그문트 프로이트는 이 신화적 모티프를 차용하여 아동기 무의식적 모친 애착과 부친 갈등을 설명하는 '오이디푸스 콤플렉스'를 정립했습니다.",
      "sourceOrTrivia": "Sophocles (ca. 429 BC) Oedipus Tyrannus",
      "wrongOptionsReason": [
        "정답입니다. 운명의 아이러니와 카타르시스를 형상화한 오이디푸스 왕입니다.",
        "안티고네는 국법과 신의 도덕률 사이에서 오빠의 매장을 결행하는 오이디푸스 딸의 비극입니다.",
        "엘렉트라는 아버지 아가멤논의 복수를 위해 어머니를 살해하는 딸의 비극입니다.",
        "아가멤논은 아이스킬로스의 오레스테이아 3부작 중 첫 번째 비극입니다."
      ]
    },
    {
      "id": "ultra_lit_18",
      "topic": "문학 & 세계 고전",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "괴테가 생애 60여 년에 걸쳐 완성한 필생의 희곡 대작으로, 학문의 한계에 절망한 노학자가 악마 메피스토펠레스와 '순간아 멈추어라, 너는 정말 아름답구나!'라고 외치는 순간 영혼을 넘겨주기로 계약하는 작품은?",
      "options": [
        "젊은 베르테르의 슬픔",
        "파우스트 (Faust)",
        "빌헬름 마이스터의 수업시대",
        "에그몬트"
      ],
      "correctIndex": 1,
      "explanation": "파우스트는 지칠 줄 모르는 지식욕과 쾌락, 권력을 섭렵한 끝에 마침내 공공을 위한 헌신과 개척에서 진정한 보람을 찾고 천사들의 구원을 받습니다.",
      "deepKnowledge": "천사들이 파우스트의 영혼을 구원하며 읊는 '언제나 갈망하며 애쓰는 자, 그를 우리는 구원할 수 있다'는 구절은 괴테 인문주의 사상의 결정판입니다.",
      "sourceOrTrivia": "Goethe (1808/1832) Faust. Eine Tragödie",
      "wrongOptionsReason": [
        "젊은 베르테르의 슬픔은 로테를 향한 짝사랑의 열병과 자살을 다룬 서간체 소설입니다.",
        "정답입니다. 악마와의 영혼 계약과 구원을 그린 괴테의 필생 역작 파우스트입니다.",
        "빌헬름 마이스터의 수업시대는 주인공의 연극 편력과 인격 성장을 다룬 교양소설입니다.",
        "에그몬트는 네덜란드의 독립 투쟁을 다룬 괴테의 역사 비극입니다."
      ]
    },
    {
      "id": "ultra_lit_19",
      "topic": "문학 & 세계 고전",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "박경리 작가가 1969년부터 1994년까지 25년간 집필한 한국 문학사 최대의 대하소설로, 경남 하동 평사리의 최참판댁 몰락과 최서희, 김길상의 이야기를 축으로 동학부터 광복까지의 민족사를 복원한 작품은?",
      "options": [
        "태백산맥",
        "혼불",
        "토지 (土地)",
        "아리랑"
      ],
      "correctIndex": 2,
      "explanation": "원고지 3만 매, 등장인물 700여 명에 달하는 '토지'는 한민족의 질긴 생명력(한과 생명사상)과 사라져가는 토착어의 보고를 문학적으로 완성한 기념비적 서사입니다.",
      "deepKnowledge": "작품은 간도 용정으로 이주한 유민들의 개척사와 서울, 도쿄를 아우르는 장대한 공간 속에서 식민지 민중의 운명을 세밀하게 형상화했습니다.",
      "sourceOrTrivia": "박경리 대하소설 토지 (전 5부 16권)",
      "wrongOptionsReason": [
        "태백산맥은 조정래 작가가 여순사건부터 한국전쟁까지의 분단사를 다룬 소설입니다.",
        "혼불은 최명희 작가가 남원 매안마을 종갓집 삼대 여인을 그린 대하소설입니다.",
        "정답입니다. 하동 평사리를 무대로 민족사의 대서사시를 이룬 토지입니다.",
        "아리랑은 조정래 작가가 일제강점기 국외 민족 수난사를 다룬 소설입니다."
      ]
    },
    {
      "id": "ultra_lit_20",
      "topic": "문학 & 세계 고전",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "조세희 작가가 1978년 발표한 연작 소설집으로, 1970년대 급격한 산업화와 도시 재개발 그늘 속에서 낙원구 행복동 판자촌 철거민 가족의 비극과 계급적 절망을 몽환적이고 시적인 문체로 고발한 작품은?",
      "options": [
        "원미동 사람들",
        "난장이가 사는 마을",
        "아홉 켤레의 구두로 남은 사내",
        "난장이가 쏘아올린 작은 공 (난쏘공)"
      ],
      "correctIndex": 3,
      "explanation": "난장이라는 신체적 약자를 통해 불평등한 경제 성장 구조 속에서 짓밟히는 도시 빈민과 노동자의 실상을 '뫼비우스의 띠', '칼한센의 굴뚝 청소부' 우화를 곁들여 예리하게 해부했습니다.",
      "deepKnowledge": "발표 이후 수백 쇄를 돌파하며 한국 문학사에서 리얼리즘과 모더니즘 미학을 가장 성공적으로 결합한 독보적 고전으로 자리매김했습니다.",
      "sourceOrTrivia": "조세희 (1978) 난장이가 쏘아올린 작은 공",
      "wrongOptionsReason": [
        "원미동 사람들은 양귀자가 부천 서민들의 일상을 그린 연작 소설집입니다.",
        "난장이가 사는 마을은 실존하지 않는 왜곡된 제목입니다.",
        "아홉 켤레의 구두로 남은 사내는 윤흥길의 광주대단지 사건 모티프 중편입니다.",
        "정답입니다. 산업화의 그늘을 시적 리얼리즘으로 형상화한 '난쏘공'입니다."
      ]
    },
    {
      "id": "ultra_lit_21",
      "topic": "문학 & 세계 고전",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1936년 이상(李箱)이 잡지 '조광'에 발표한 심리주의 모더니즘 소설로, 전당포 유곽의 어두운 방에서 아내에게 기생하며 아스피린 대신 최면약 아달린을 먹고 환각에 빠져 미쓰코시 백화점 옥상에서 날개를 갈망하는 주인공의 독백은?",
      "options": [
        "날개",
        "종생기",
        "지주회시",
        "실화"
      ],
      "correctIndex": 0,
      "explanation": "'날개야 다시 돋아라. 날자. 날자. 날자. 한 번만 더 날자꾸나. 한 번만 더 날아보자꾸나'라는 결말을 통해 식민지 지식인의 분열된 자아와 박제된 삶의 비극을 천재적 초현실주의 기법으로 묘사했습니다.",
      "deepKnowledge": "서두의 '박제가 되어버린 천재를 아시오? 나는 유쾌하오. 이런 때 연애까지가 유쾌하오'는 한국 근대 문학사상 가장 실험적인 프롤로그로 꼽힙니다.",
      "sourceOrTrivia": "이상 (1936) 조광 9월호 '날개'",
      "wrongOptionsReason": [
        "정답입니다. 한국 초현실주의·심리주의 문학의 최고 금자탑인 이상의 날개입니다.",
        "종생기는 이상이 자신의 죽음을 가상하여 쓴 자전적 유작 소설입니다.",
        "지주회시는 증권 시장 투기와 착취를 다룬 이상의 경제 소설입니다.",
        "실화는 변절과 절망을 다룬 이상의 또 다른 단편입니다."
      ]
    },
    {
      "id": "ultra_lit_22",
      "topic": "문학 & 세계 고전",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "일제강점기 암흑기에 '죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를' 소망하며 순결한 양심과 참회, 자아 성찰의 서정을 노래한 윤동주 시인의 유고 시집 제목은?",
      "options": [
        "진달래꽃",
        "하늘과 바람과 별과 시",
        "님의 침묵",
        "사슴"
      ],
      "correctIndex": 1,
      "explanation": "윤동주는 1941년 연희전문 졸업 기념으로 이 시집을 자비 출간하려 했으나 일제 검열로 무산되었고, 1945년 후쿠오카 형무소에서 옥사한 뒤 1948년 정지용의 서문과 함께 정식 간행되었습니다.",
      "deepKnowledge": "시집에는 '서시', '자화상', '별 헤는 밤', '쉽게 씌어진 시' 등 한국인이 가장 사랑하는 민족 저항 서정시들이 망라되어 있습니다.",
      "sourceOrTrivia": "윤동주 유고시집 (1948년 정음사 초판본 / 등록문화재)",
      "wrongOptionsReason": [
        "진달래꽃은 김소월의 1925년 시집입니다.",
        "정답입니다. 윤동주의 부끄러움의 미학이 담긴 유고시집 '하늘과 바람과 별과 시'입니다.",
        "님의 침묵은 만해 한용운의 1926년 저항시집입니다.",
        "사슴은 백석의 1936년 평안도 방언 향토 시집입니다."
      ]
    },
    {
      "id": "ultra_lit_23",
      "topic": "문학 & 세계 고전",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1964년 김승옥이 발표하여 '감수성의 혁명'이라 격찬받은 단편 소설로, 서울에서 세무서 출세가 보장된 주인공 윤희원이 고향 무진에 내려와 짙은 안개 속에서 속물근성과 허무, 일탈을 겪고 다시 일상으로 귀환하는 여정을 다룬 작품은?",
      "options": [
        "싸늘한 광장",
        "서울, 1964년 겨울",
        "무진기행 (霧津紀行)",
        "차나 한잔"
      ],
      "correctIndex": 2,
      "explanation": "무진기행은 '무진의 명산물은 안개다'라는 문장으로 상징되듯, 순수의 세계(무진)와 세속적 성공의 세계(서울) 사이에서 타협하고 부끄러움을 느끼며 상경하는 현대인의 내면 풍경을 감각적인 문체로 그렸습니다.",
      "deepKnowledge": "문학평론가 유종호는 김승옥의 등장을 두고 '1960년대 한국 문학에 눈부신 감수성의 혁명이 도래했다'고 평했습니다.",
      "sourceOrTrivia": "김승옥 (1964) 사상계 10월호 '무진기행'",
      "wrongOptionsReason": [
        "싸늘한 광장은 김승옥의 초기 단편입니다.",
        "서울, 1964년 겨울은 선술집에서 만난 세 남자의 소외와 포장마차 대화를 다룬 김승옥의 또 다른 걸작입니다.",
        "정답입니다. 안개 낀 무진을 배경으로 한 현대 소설의 고전 무진기행입니다.",
        "차나 한잔은 김승옥의 소시민 일상 단편입니다."
      ]
    },
    {
      "id": "ultra_lit_24",
      "topic": "문학 & 세계 고전",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "메리 셸리가 1818년 불과 20세의 나이에 익명으로 발표하여 최초의 근대 SF(과학소설)로 평가받는 작품으로, 생명의 불꽃을 인공적으로 부여해 괴물을 창조했으나 결국 피조물에게 파멸당하는 과학자의 비극을 다룬 소설은?",
      "options": [
        "타임머신",
        "지킬 박사와 하이드 씨",
        "투명인간",
        "프랑켄슈타인 (Frankenstein, 근대의 프로메테우스)"
      ],
      "correctIndex": 3,
      "explanation": "부제가 '근대의 프로메테우스'인 이 소설은 자연의 신성한 영역을 침범한 과학 기술의 오만과, 흉측한 외모로 인해 사회적 인정과 사랑을 거부당한 괴물의 처절한 복수를 담은 다층적 고전입니다.",
      "deepKnowledge": "흔히 괴물의 이름을 프랑켄슈타인으로 오해하지만, 프랑켄슈타인은 괴물을 창조한 의학도 빅터 프랑켄슈타인의 성(姓)입니다.",
      "sourceOrTrivia": "Mary Shelley (1818) Frankenstein; or, The Modern Prometheus",
      "wrongOptionsReason": [
        "타임머신은 H.G. 웰스가 1895년 시간 여행을 개척한 소설입니다.",
        "지킬 박사와 하이드 씨는 로버트 루이스 스티븐슨의 이중인격 소설입니다.",
        "투명인간은 H.G. 웰스의 1897년 SF 소설입니다.",
        "정답입니다. SF 문학의 효시로 꼽히는 메리 셸리의 프랑켄슈타인입니다."
      ]
    },
    {
      "id": "ultra_lit_25",
      "topic": "문학 & 세계 고전",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "호메로스의 서사시 '오디세이아(Odyssey)'에서 트로이 전쟁이 끝난 후 10년간의 험난한 방랑 끝에 고향 이타카로 귀환하는 영웅 오디세우스의 아내로, 20년간 수많은 구혼자들의 청혼을 거절하기 위해 낮에는 수의를 짜고 밤에는 풀기를 반복하며 정절을 지킨 인물은?",
      "options": [
        "페넬로페 (Penelope)",
        "헬레네",
        "키르케",
        "칼립소"
      ],
      "correctIndex": 0,
      "explanation": "페넬로페는 시아버지 라에르테스의 수의를 다 짜면 구혼자 중 한 명과 재혼하겠다고 속인 뒤 3년 넘게 베틀을 짰다 풀며 남편을 기다린 정절과 지혜의 화신입니다.",
      "deepKnowledge": "오디세우스는 변장하고 궁전에 잠입하여 자신의 옛 활을 시위 당겨 12개의 도끼 자루 구멍을 통과시킨 뒤 구혼자들을 모조리 응징하고 왕국을 되찾습니다.",
      "sourceOrTrivia": "Homer, Odyssey Book XIX",
      "wrongOptionsReason": [
        "정답입니다. 끈기와 지혜로 정절을 지켜낸 오디세우스의 아내 페넬로페입니다.",
        "헬레네는 트로이의 왕자 파리스에게 유혹당해 트로이 전쟁의 불씨가 된 스파르타의 왕비입니다.",
        "키르케는 선원들을 돼지로 변하게 만든 마법의 섬 아이아이에의 여신입니다.",
        "칼립소는 오디세우스를 오기기아 섬에 7년간 붙잡아 둔 님프입니다."
      ]
    }
  ],
  "ai_cs": [
    {
      "id": "ultra_cs_1",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "2017년 구글 연구팀이 'Attention Is All You Need' 논문에서 발표하여 오늘날 ChatGPT, Claude 등 현대 초거대 언어 모델(LLM)의 근간이 된 딥러닝 아키텍처는?",
      "options": [
        "트랜스포머 (Transformer)",
        "합성곱 신경망 (CNN)",
        "순환 신경망 (RNN)",
        "다층 퍼셉트론 (MLP)"
      ],
      "correctIndex": 0,
      "explanation": "트랜스포머는 재귀적 구조(RNN)를 완전히 제거하고 '셀프 어텐션(Self-Attention)' 메커니즘만으로 문맥의 장거리 의존성을 병렬 연산하여 자연어 처리의 혁명을 이끌었습니다.",
      "deepKnowledge": "어텐션 가중치 행렬은 Softmax(Q Kᵀ / √dₖ) V 수식으로 계산되어 쿼리와 키의 유사도를 기반으로 값(V) 벡터들의 가중합을 도출합니다.",
      "sourceOrTrivia": "Vaswani et al. (2017) 'Attention Is All You Need', NeurIPS",
      "wrongOptionsReason": [
        "정답입니다. 생성형 AI 혁명을 촉발한 트랜스포머 아키텍처입니다.",
        "CNN은 이미지 인식과 컴퓨터 비전 분야의 대표적인 합성곱 신경망입니다.",
        "RNN은 순차 시계열 데이터 처리에 쓰였으나 기울기 소실과 병렬화 한계가 있었습니다.",
        "MLP는 가장 고전적인 피드포워드 인공 신경망입니다."
      ]
    },
    {
      "id": "ultra_cs_2",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "현대 컴퓨터의 기본 설계 구조로, 데이터와 실행할 프로그램 명령어를 동일한 메모리(기억장치)에 저장하고 중앙처리장치(CPU)가 순차적으로 인출·해석해 실행하는 구조는?",
      "options": [
        "하버드 구조",
        "폰 노이만 구조 (Von Neumann Architecture)",
        "튜링 아키텍처",
        "클라우드 분산 구조"
      ],
      "correctIndex": 1,
      "explanation": "존 폰 노이만이 1945년 EDVAC 보고서에서 체계화한 '프로그램 내장 방식'으로, 하드웨어 회로 배선을 바꾸지 않고 소프트웨어 교체만으로 다목적 계산이 가능해졌습니다.",
      "deepKnowledge": "CPU 연산 속도에 비해 CPU-메모리 간 단일 버스의 대역폭이 좁아 전체 시스템 성능이 저하되는 현상을 '폰 노이만 병목(Von Neumann Bottleneck)'이라고 부릅니다.",
      "sourceOrTrivia": "von Neumann (1945) First Draft of a Report on the EDVAC",
      "wrongOptionsReason": [
        "하버드 구조는 명령어 메모리와 데이터 메모리의 물리적 버스를 분리한 구조입니다.",
        "정답입니다. 현대 범용 컴퓨터의 표준 설계인 폰 노이만 구조입니다.",
        "튜링 아키텍처는 엔비디아의 특정 GPU 아키텍처 세대 이름입니다.",
        "클라우드 분산 구조는 네트워크로 연결된 여러 서버의 컴퓨팅 방식입니다."
      ]
    },
    {
      "id": "ultra_cs_3",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "관계형 데이터베이스(RDBMS)에서 트랜잭션이 안전하게 처리되고 데이터 무결성이 보장되기 위해 만족해야 하는 4대 원칙의 약칭은?",
      "options": [
        "SOLID",
        "BASE",
        "ACID (원자성, 일관성, 고립성, 지속성)",
        "CRUD"
      ],
      "correctIndex": 2,
      "explanation": "ACID는 All-or-Nothing의 원자성(Atomicity), 일관성(Consistency), 트랜잭션 간 독립성을 보장하는 고립성(Isolation), 영구 저장되는 지속성(Durability)을 뜻합니다.",
      "deepKnowledge": "반면 대규모 NoSQL 분산 DB는 고가용성을 위해 일시적 불일치를 허용하는 BASE(Basically Available, Soft state, Eventual consistency) 모델을 채택하기도 합니다.",
      "sourceOrTrivia": "Haerder & Reuter (1983) ACM Computing Surveys",
      "wrongOptionsReason": [
        "SOLID는 로버트 마틴의 객체지향 5대 설계 원칙입니다.",
        "BASE는 분산 NoSQL 데이터베이스의 최종 일관성 모델입니다.",
        "정답입니다. DB 트랜잭션의 절대적 안전성을 보장하는 ACID 속성입니다.",
        "CRUD는 Create, Read, Update, Delete의 4대 기본 데이터 조작 연산입니다."
      ]
    },
    {
      "id": "ultra_cs_4",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "정렬 알고리즘 중 '분할 정복(Divide and Conquer)' 기법을 사용하여, 피벗(Pivot)을 기준으로 작은 원소와 큰 원소를 분할해 평균 O(n log n)의 뛰어난 속도를 내는 알고리즘은?",
      "options": [
        "선택 정렬",
        "버블 정렬",
        "삽입 정렬",
        "퀵 정렬 (Quick Sort)"
      ],
      "correctIndex": 3,
      "explanation": "토니 호어(Tony Hoare)가 1959년 개발한 퀵 정렬은 제자리 정렬(In-place)이 가능하고 캐시 메모리 지역성이 우수하여 실무에서 가장 널리 쓰이는 정렬 알고리즘입니다.",
      "deepKnowledge": "최악의 경우(이미 정렬된 배열에서 맨 끝 값을 피벗으로 고를 때) O(n²) 시간 복잡도를 가질 수 있어, 랜덤 피벗이나 인트로소트(Introsort)로 보완합니다.",
      "sourceOrTrivia": "Hoare (1961) The Computer Journal 5",
      "wrongOptionsReason": [
        "선택 정렬은 최솟값을 찾아 맨 앞과 교환하는 O(n²) 정렬입니다.",
        "버블 정렬은 인접 원소를 비교 교환하는 O(n²)의 단순한 정렬입니다.",
        "삽입 정렬은 앞쪽 정렬 부분에 알맞은 위치를 찾아 삽입하는 정렬입니다.",
        "정답입니다. 실무에서 가장 대표적으로 쓰이는 피벗 분할 정복 퀵 정렬입니다."
      ]
    },
    {
      "id": "ultra_cs_5",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "에릭 브루어(Eric Brewer) 교수가 제시한 분산 시스템 정리로, 분산 데이터 저장소는 일관성(Consistency), 가용성(Availability), 분할 허용성(Partition tolerance) 중 최대 2가지만을 동시에 만족할 수 있다는 정리는?",
      "options": [
        "CAP 정리 (Brewer's CAP Theorem)",
        "FLM 불가능성 정리",
        "암달의 법칙",
        "무어의 법칙"
      ],
      "correctIndex": 0,
      "explanation": "네트워크 분할(P)은 물리적 네트워크 장애로 인해 언제든 발생할 수 있으므로, 실제 분산 시스템은 일관성 중심(CP 시스템) 또는 가용성 중심(AP 시스템) 중 양자택일을 해야 합니다.",
      "deepKnowledge": "구글 스패너(Google Spanner)는 원자시계와 GPS 하드웨어(TrueTime API)를 도입해 오차 한계를 제어함으로써 사실상의 CA에 근접한 글로벌 분산 일관성을 달성했습니다.",
      "sourceOrTrivia": "Brewer (2000) PODC / Gilbert & Lynch (2002) ACM SIGACT News",
      "wrongOptionsReason": [
        "정답입니다. 분산 시스템 설계의 근본 트레이드오프를 규명한 CAP 정리입니다.",
        "FLP 불가능성 정리는 비동기 시스템에서 단 하나의 프로세스 장애로도 합의가 불가능할 수 있다는 정리입니다.",
        "암달의 법칙은 병렬화에 따른 시스템 속도 향상의 이론적 한계를 나타냅니다.",
        "무어의 법칙은 반도체 집적도가 2년마다 2배로 증가한다는 관찰 법칙입니다."
      ]
    },
    {
      "id": "ultra_cs_6",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "앨런 튜링이 1936년 제기한 컴퓨터 과학의 근본 난제로, 임의의 프로그램과 입력값이 주어졌을 때 그 프로그램이 무한 루프에 빠지지 않고 유한한 시간 안에 종료될지 여부를 판별하는 범용 알고리즘이 존재하지 않는다는 결정 불가능성 문제는?",
      "options": [
        "P vs NP 문제",
        "정지 문제 (Halting Problem)",
        "비잔틴 장군 문제",
        "식사하는 철학자 문제"
      ],
      "correctIndex": 1,
      "explanation": "튜링은 칸토어의 대각선 논법과 유사한 귀류법적 자기참조 모순을 구성하여, 어떤 알고리즘으로도 모든 프로그램의 종료 여부를 판정할 수 없음을 수학적으로 증명했습니다.",
      "deepKnowledge": "이 증명은 컴퓨터가 원리적으로 모든 수학적 문제를 해결할 수 없다는 쿠르트 괴델의 '불완전성 정리'를 계산 이론의 언어로 실증한 것입니다.",
      "sourceOrTrivia": "Turing (1936) 'On Computable Numbers, with an Application to the Entscheidungsproblem'",
      "wrongOptionsReason": [
        "P vs NP는 다항 시간에 검증 가능한 문제가 다항 시간에 해결 가능한가를 묻는 밀레니엄 난제입니다.",
        "정답입니다. 계산 불가능성을 증명한 튜링의 정지 문제입니다.",
        "비잔틴 장군 문제는 배신자가 있는 분산 네트워크에서 합의를 달성하는 문제입니다.",
        "식사하는 철학자 문제는 운영체제의 교착 상태(Deadlock)를 설명하는 고전 모델입니다."
      ]
    },
    {
      "id": "ultra_cs_7",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "미국의 클레이 수학연구소(CMI)가 지정한 7대 밀레니엄 난제 중 유일한 컴퓨터 과학 분야 문제로, 다항 시간(Polynomial Time) 안에 해답을 검증할 수 있는 모든 문제가 다항 시간 안에 직접 풀릴 수 있는가를 묻는 질문은?",
      "options": [
        "푸앵카레 추측",
        "호지 추측",
        "P vs NP 문제",
        "내비어-스톡스 방정식"
      ],
      "correctIndex": 2,
      "explanation": "만약 P = NP임이 증명된다면 현재의 모든 공개키 암호(RSA, 타원곡선)가 순식간에 해독되며 신약 개발, 물류 최적화 등 복잡한 최적화 문제가 단시간에 풀리게 됩니다.",
      "deepKnowledge": "대다수 컴퓨터 과학자들은 P와 NP가 같지 않을 것(P ≠ NP)으로 추정하고 있으나, 아직 엄밀한 수학적 증명이나 반례가 제시되지 않았습니다.",
      "sourceOrTrivia": "Cook (1971) 'The Complexity of Theorem-Proving Procedures'",
      "wrongOptionsReason": [
        "푸앵카레 추측은 그리고리 페렐만이 2003년 유일하게 증명한 위상수학 난제입니다.",
        "호지 추측은 대수기하학의 밀레니엄 수학 난제입니다.",
        "정답입니다. 계산 복잡도 이론의 최대 미해결 난제인 P vs NP 문제입니다.",
        "내비어-스톡스 방정식은 유체역학 편미분방정식의 해의 매끄러움에 관한 난제입니다."
      ]
    },
    {
      "id": "ultra_cs_8",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "양자 컴퓨터에서 양자 중첩과 양자 푸리에 변환(QFT)을 활용하여, 고전 컴퓨터로는 천문학적 시간이 걸리는 거대한 합성수의 소인수분해를 다항 시간 O((log N)³) 안에 풀어내는 알고리즘은?",
      "options": [
        "VQE 알고리즘",
        "그로버 알고리즘 (Grover's Algorithm)",
        "도이치-조사 알고리즘",
        "쇼어 알고리즘 (Shor's Algorithm)"
      ],
      "correctIndex": 3,
      "explanation": "피터 쇼어가 1994년 고안한 이 알고리즘은 충분한 큐비트를 갖춘 오류 허용 양자 컴퓨터가 개발될 경우 RSA 공개키 암호 체계를 완전히 무력화시킬 수 있습니다.",
      "deepKnowledge": "그로버 알고리즘은 정렬되지 않은 N개 데이터베이스 탐색 속도를 O(√N)으로 가속하는 양자 탐색 알고리즘입니다.",
      "sourceOrTrivia": "Shor (1994) IEEE FOCS",
      "wrongOptionsReason": [
        "VQE는 양자화학 분자 에너지 계산에 쓰이는 하이브리드 변분 알고리즘입니다.",
        "그로버 알고리즘은 비정렬 DB 탐색을 제곱근 속도로 가속하는 알고리즘입니다.",
        "도이치-조사 알고리즘은 양자 병렬성의 우수성을 최초로 입증한 장난감 모델입니다.",
        "정답입니다. RSA 암호 체계를 깰 수 있는 양자 소인수분해 쇼어 알고리즘입니다."
      ]
    },
    {
      "id": "ultra_cs_9",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "운영체제에서 2개 이상의 프로세스가 상대방이 가진 자원을 서로 기다리며 무한히 멈춰 서 있는 '교착 상태(Deadlock)'가 발생하기 위한 4대 필수 필요조건이 아닌 것은?",
      "options": [
        "선점 허용 (Preemption allowed)",
        "상호 배제 (Mutual Exclusion)",
        "점유 및 대기 (Hold and Wait)",
        "원형 대기 (Circular Wait)"
      ],
      "correctIndex": 0,
      "explanation": "데드락이 발생하려면 '비선점(No preemption)' 조건, 즉 다른 프로세스의 자원을 강제로 빼앗을 수 없어야 합니다. 선점을 허용하면 데드락이 즉시 해결(예방)됩니다.",
      "deepKnowledge": "코프만(Coffman) 4대 조건은 상호 배제, 점유 및 대기, 비선점, 원형 대기이며 이 중 단 하나라도 깨뜨리면 교착 상태를 완벽히 예방할 수 있습니다.",
      "sourceOrTrivia": "Coffman, Elphick, Ahashani (1971) ACM Computing Surveys",
      "wrongOptionsReason": [
        "정답입니다. 선점을 허용하면 교착 상태가 풀리므로 '비선점'이 필수 조건입니다.",
        "상호 배제는 자원을 한 번에 한 프로세스만 써야 한다는 필수 조건입니다.",
        "점유 및 대기는 자원을 쥔 채 다른 자원을 기다린다는 필수 조건입니다.",
        "원형 대기는 자원 대기 관계가 원형 고리를 이룬다는 필수 조건입니다."
      ]
    },
    {
      "id": "ultra_cs_10",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "인터넷 통신 프로토콜의 표준 계층 모델인 OSI 7계층 중, 종단 간(End-to-End) 신뢰성 있는 데이터 전송과 흐름 제어, 혼잡 제어를 담당하는 4계층 프로토콜(TCP/UDP) 계층은?",
      "options": [
        "네트워크 계층",
        "전송 계층 (Transport Layer)",
        "데이터 링크 계층",
        "응용 계층"
      ],
      "correctIndex": 1,
      "explanation": "전송 계층(4계층)은 포트(Port) 번호를 통해 호스트 내의 특정 프로세스를 식별하고 가상 회선 연결(TCP의 3-way 핸드셰이크)을 수립합니다.",
      "deepKnowledge": "네트워크 계층(3계층)은 IP 주소를 바탕으로 라우팅을 수행하며, 데이터 링크 계층(2계층)은 MAC 주소로 물리적 프레임을 전송합니다.",
      "sourceOrTrivia": "Tanenbaum & Wetherall (2011) Computer Networks, 5th Edition",
      "wrongOptionsReason": [
        "네트워크 계층은 IP 패킷의 경로 설정(라우팅)을 맡는 3계층입니다.",
        "정답입니다. TCP와 UDP가 동작하는 4계층 전송 계층입니다.",
        "데이터 링크 계층은 인접 노드 간 이더넷 프레임을 주고받는 2계층입니다.",
        "응용 계층은 HTTP, DNS, FTP 등 사용자 응용 프로그램이 상호작용하는 7계층입니다."
      ]
    },
    {
      "id": "ultra_cs_11",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "심층 신경망 학습 시 은닉층이 깊어질수록 역전파되는 오차 기울기가 0에 수렴하여 앞쪽 가중치가 전혀 학습되지 않는 문제를 해결하기 위해 시그모이드 대신 도입된 대표적인 활성화 함수는?",
      "options": [
        "선형 함수",
        "소프트맥스 (Softmax)",
        "ReLU (Rectified Linear Unit)",
        "계단 함수"
      ],
      "correctIndex": 2,
      "explanation": "ReLU 함수는 입력이 0보다 크면 기울기가 항상 1(f'(x) = 1)로 유지되므로, 역전파 시 연쇄 법칙 곱셈에서 기울기가 소실되지 않고 깊은 망 학습이 가능합니다.",
      "deepKnowledge": "음수 영역에서 기울기가 0이 되어 뉴런이 비활성화되는 현상을 보완하기 위해 Leaky ReLU, GELU, Swish 등의 개선 함수들이 개발되었습니다.",
      "sourceOrTrivia": "Nair & Hinton (2010) ICML",
      "wrongOptionsReason": [
        "단순 선형 함수는 신경망을 아무리 깊게 쌓아도 단일 선형 회귀와 같아집니다.",
        "소프트맥스는 출력층에서 클래스별 확률 분포를 계산하는 함수입니다.",
        "정답입니다. 기울기 소실을 극복하여 딥러닝 부흥을 이끈 ReLU 함수입니다.",
        "계단 함수는 미분이 불가능하여 역전파 학습을 수행할 수 없습니다."
      ]
    },
    {
      "id": "ultra_cs_12",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "대규모 언어 모델(LLM)이 인간의 가치관, 유용성, 무해성에 부합하도록 사전학습된 모델을 인간 평가자의 선호도 피드백을 반영해 미세조정하는 기법의 약칭은?",
      "options": [
        "양자화 (Quantization)",
        "LoRA",
        "RAG (검색 증강 생성)",
        "RLHF (인간 피드백 기반 강화학습)"
      ],
      "correctIndex": 3,
      "explanation": "RLHF(Reinforcement Learning from Human Feedback)는 인간이 평가한 답변 선호도로 보상 모델(Reward Model)을 훈련시키고 PPO 강화학습으로 정책을 최적화하여 챗봇의 안전성과 품질을 극대화합니다.",
      "deepKnowledge": "최근에는 강화학습 과정의 복잡성을 간소화하기 위해 직접 선호도 최적화(DPO, Direct Preference Optimization) 기법도 널리 쓰이고 있습니다.",
      "sourceOrTrivia": "Ouyang et al. (OpenAI, 2022) 'Training language models to follow instructions with human feedback'",
      "wrongOptionsReason": [
        "양자화는 부동소수점 비트수를 줄여 모델을 경량화하는 기법입니다.",
        "LoRA는 적은 수의 가중치 행렬만 학습시키는 저비용 파라미터 미세조정 기법입니다.",
        "RAG는 외부 지식 문서를 검색하여 환각을 줄이는 기술입니다.",
        "정답입니다. LLM의 안전성과 답변 품질을 정렬하는 RLHF입니다."
      ]
    },
    {
      "id": "ultra_cs_13",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "이언 굿펠로(Ian Goodfellow)가 2014년 제안한 생성형 딥러닝 모델로, 가짜 데이터를 진짜처럼 만들어내려는 '생성자(Generator)'와 이를 진짜인지 가짜인지 감별하려는 '판별자(Discriminator)'가 서로 적대적으로 경쟁하며 성능을 높이는 모델은?",
      "options": [
        "GAN (생성적 적대 신경망)",
        "변이형 오토인코더 (VAE)",
        "확산 모델 (Diffusion Model)",
        "볼츠만 머신"
      ],
      "correctIndex": 0,
      "explanation": "GAN은 위조지폐범과 경찰의 게임 이론적 내시 균형에 비유되며, 극도로 사실적인 이미지 생성 및 딥페이크 기술의 기폭제가 되었습니다.",
      "deepKnowledge": "얀 르쿤(Yann LeCun) 교수는 GAN을 가리켜 '머신러닝 분야에서 지난 10년간 가장 흥미로운 아이디어'라고 극찬했습니다.",
      "sourceOrTrivia": "Goodfellow et al. (2014) Generative Adversarial Nets, NeurIPS",
      "wrongOptionsReason": [
        "정답입니다. 생성자와 판별자의 적대적 경쟁 학습을 이끈 GAN입니다.",
        "VAE는 잠재 공간의 확률 분포를 인코딩하고 디코딩하는 생성 모델입니다.",
        "확산 모델은 가우시안 노이즈를 점진적으로 제거해 이미지를 생성하는 최신 모델입니다.",
        "볼츠만 머신은 통계물리학의 볼츠만 분포를 이용한 확률적 신경망입니다."
      ]
    },
    {
      "id": "ultra_cs_14",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "시간 복잡도 빅오(Big-O) 표기법에서, 정렬된 배열에서 원하는 원소를 찾기 위해 탐색 범위를 매 단계마다 절반씩 줄여나가는 '이진 탐색(Binary Search)'의 시간 복잡도는?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      "correctIndex": 1,
      "explanation": "데이터가 100만 개에 달하더라도 이진 탐색은 매 단계마다 탐색 범위를 절반씩 좁혀나가 단 20번 안팎의 비교만으로 원하는 값을 찾아내므로 매우 효율적입니다.",
      "deepKnowledge": "빅오 표기법은 입력 크기 n이 무한히 커질 때 알고리즘의 최악 실행 시간 증가 추세를 나타내는 점근적 분석 척도입니다.",
      "sourceOrTrivia": "Cormen et al. (2009) Introduction to Algorithms (CLRS), 3rd Edition",
      "wrongOptionsReason": [
        "O(1)은 해시 테이블 검색 등 상수 시간 복잡도입니다.",
        "정답입니다. 탐색 범위를 반씩 줄여나가는 이진 탐색의 O(log n)입니다.",
        "O(n)은 처음부터 끝까지 순차적으로 훑는 선형 탐색의 복잡도입니다.",
        "O(n²)은 이중 반복문을 도는 버블 정렬의 복잡도입니다."
      ]
    },
    {
      "id": "ultra_cs_15",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "그래프 자료구조에서 시작 정점으로부터 출발하여 가중치가 음수가 아닌 간선들로 연결된 모든 다른 정점까지의 '단일 출발점 최단 경로'를 탐욕적(Greedy) 방식으로 구하는 유명한 알고리즘은?",
      "options": [
        "플로이드-워셜 알고리즘",
        "벨만-포드 알고리즘",
        "다익스트라 알고리즘 (Dijkstra's Algorithm)",
        "크루스칼 알고리즘"
      ],
      "correctIndex": 2,
      "explanation": "에츠허르 데이크스트라가 1956년 고안한 알고리즘으로, 우선순위 큐(최소 힙)를 적용하면 O((V + E) log V) 시간 안에 내비게이션 길찾기 최단 경로를 계산합니다.",
      "deepKnowledge": "음수 가중치 간선이 포함된 그래프에서는 다익스트라가 정상 작동하지 않으므로 O(V·E) 시간 복잡도의 벨만-포드(Bellman-Ford) 알고리즘을 사용해야 합니다.",
      "sourceOrTrivia": "Dijkstra (1959) Numerische Mathematik 1",
      "wrongOptionsReason": [
        "플로이드-워셜은 모든 정점 쌍 간의 최단 경로를 구하는 동적 계획법 알고리즘입니다.",
        "벨만-포드는 음수 가중치 간선이 있는 그래프에 사용되는 최단 경로 알고리즘입니다.",
        "정답입니다. 내비게이션 최단 경로의 표준 알고리즘 다익스트라입니다.",
        "크루스칼은 최소 신장 트리(MST)를 구하는 탐욕 알고리즘입니다."
      ]
    },
    {
      "id": "ultra_cs_16",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "분산 버전 관리 시스템 Git에서 소스 코드의 변경 이력과 브랜치 병합을 효율적으로 추적하기 위해 내부적으로 사용하는 유향 비순환 그래프 자료구조는?",
      "options": [
        "원형 큐",
        "B-Tree",
        "이진 탐색 트리",
        "DAG (Directed Acyclic Graph)"
      ],
      "correctIndex": 3,
      "explanation": "Git의 모든 커밋 객체는 SHA-1/SHA-256 해시값으로 식별되며, 부모 커밋을 가리키는 포인터를 통해 결코 순환하지 않는 방향성 그래프(DAG)를 형성합니다.",
      "deepKnowledge": "Git은 차분(Diff)을 저장하는 대신 각 커밋 시점의 전체 파일 스냅샷 트리를 가리키며, 변경되지 않은 파일은 기존 블롭(Blob) 해시를 재사용하여 공간을 극도로 절약합니다.",
      "sourceOrTrivia": "Chacon & Straub (2014) Pro Git, 2nd Edition",
      "wrongOptionsReason": [
        "원형 큐는 링 버퍼 형태로 동작하는 큐 자료구조입니다.",
        "B-Tree는 데이터베이스 인덱스에 주로 쓰이는 균형 다분 탐색 트리입니다.",
        "이진 탐색 트리는 각 노드가 최대 2개의 자식을 갖는 순서화된 트리입니다.",
        "정답입니다. Git 커밋 트리의 근간을 이루는 DAG 구조입니다."
      ]
    },
    {
      "id": "ultra_cs_17",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "최신 이미지 및 오디오 생성 AI(Stable Diffusion, Midjourney 등)의 핵심 원리로, 데이터에 가우시안 노이즈를 단계적으로 추가했다가(순방향) 신경망이 노이즈를 역으로 걷어내는(역방향) 물리 통계역학 모델은?",
      "options": [
        "확산 모델 (Diffusion Model, DDPM)",
        "오토인코더",
        "신경망 기계 번역",
        "강화학습"
      ],
      "correctIndex": 0,
      "explanation": "비평형 열역학의 확산 현상에서 착안한 확산 모델은 노이즈 제거 과정(Denoising Score Matching)을 학습하여 GAN보다 훈련이 안정적이고 압도적인 고해상도 품질을 달성했습니다.",
      "deepKnowledge": "잠재 확산 모델(Latent Diffusion Model)은 고해상도 픽셀 공간 대신 오토인코더가 압축한 저차원 잠재 공간에서 확산 과정을 수행하여 연산 비용을 획기적으로 낮췄습니다.",
      "sourceOrTrivia": "Ho et al. (2020) Denoising Diffusion Probabilistic Models, NeurIPS",
      "wrongOptionsReason": [
        "정답입니다. 현대 생성형 이미지 AI를 지배하는 확산 모델(Diffusion)입니다.",
        "오토인코더는 입력을 압축했다가 복원하는 비지도 학습 모델입니다.",
        "신경망 기계 번역은 언어 간 번역을 수행하는 모델입니다.",
        "강화학습은 보상 극대화를 위해 에이전트가 행동을 학습하는 프레임워크입니다."
      ]
    },
    {
      "id": "ultra_cs_18",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "리눅스 커널의 기능인 cgroups(자원 제한)와 네임스페이스(격리)를 활용하여, 게스트 OS 없이 애플리케이션과 실행 환경을 가볍게 패키징하고 배포하는 대표적 컨테이너 가상화 플랫폼은?",
      "options": [
        "버추얼박스 (VirtualBox)",
        "도커 (Docker)",
        "VMware ESXi",
        "젠 (Xen)"
      ],
      "correctIndex": 1,
      "explanation": "도커 컨테이너는 호스트 OS 커널을 직접 공유하므로 하이퍼바이저 기반 가상머신(VM)보다 부팅이 수 초 만에 이루어지고 메모리 오버헤드가 극도로 적습니다.",
      "deepKnowledge": "도커 이미지는 유니온 파일 시스템(OverlayFS)을 사용하여 읽기 전용 레이어를 겹겹이 쌓아 올리는 구조로 재사용성과 효율을 극대화합니다.",
      "sourceOrTrivia": "Merkel (2014) 'Docker: lightweight linux containers for consistent development and deployment'",
      "wrongOptionsReason": [
        "버추얼박스는 전체 게스트 OS를 에뮬레이트하는 무거운 타입 2 하이퍼바이저입니다.",
        "정답입니다. 컨테이너 가상화 생태계의 표준 도커입니다.",
        "VMware ESXi는 엔터프라이즈급 베어메탈 타입 1 하이퍼바이저입니다.",
        "Xen은 반가상화를 지원하는 고전 가상머신 모니터입니다."
      ]
    },
    {
      "id": "ultra_cs_19",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "비대칭 키 암호화 알고리즘의 대표 주자로, 두 개의 거대한 소수를 곱하기는 쉽지만 합성수를 다시 소인수분해하는 것은 계산 복잡도상 극도로 어렵다는 수학적 난제를 기반으로 보안을 유지하는 암호 체계는?",
      "options": [
        "DES",
        "AES 대칭키 암호",
        "RSA 암호 (Rivest-Shamir-Adleman)",
        "SHA-256 해시"
      ],
      "correctIndex": 2,
      "explanation": "1977년 라이베스트, 샤미르, 에이들먼이 고안한 공개키 암호로, 오일러의 피 함수와 모듈러 거듭제곱의 역원을 이용하여 공개키(암호화용)와 개인키(복호화용)를 분리했습니다.",
      "deepKnowledge": "양자 컴퓨터가 실용화되면 쇼어 알고리즘에 의해 RSA가 무력화될 수 있어, 현재 격자(Lattice) 기반의 '양자 내성 암호(PQC)'로의 표준 전환이 진행 중입니다.",
      "sourceOrTrivia": "Rivest, Shamir, Adleman (1978) Communications of the ACM",
      "wrongOptionsReason": [
        "DES는 1970년대 IBM이 개발한 구형 56비트 대칭키 암호입니다.",
        "AES는 현대 표준 128/256비트 대칭키 블록 암호입니다.",
        "정답입니다. 소인수분해 난이도에 기반한 비대칭 암호의 효시 RSA입니다.",
        "SHA-256은 단방향 암호학적 해시 함수입니다."
      ]
    },
    {
      "id": "ultra_cs_20",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "컴퓨터 중앙처리장치(CPU)와 주기억장치(RAM) 사이의 속도 차이를 완화하기 위해, 빈번히 접근하는 데이터를 미리 적재해 두는 초고속 SRAM 메모리는?",
      "options": [
        "가상 메모리",
        "하드디스크 (HDD)",
        "플래시 메모리",
        "캐시 메모리 (Cache Memory, L1/L2/L3)"
      ],
      "correctIndex": 3,
      "explanation": "캐시 메모리는 시간 지역성(방금 쓴 데이터 재사용)과 공간 지역성(인접 데이터 연속 접근) 원리를 활용하여 CPU의 연산 대기 시간을 극적으로 단축시킵니다.",
      "deepKnowledge": "원하는 데이터가 캐시에 존재하는 비율을 '캐시 적중률(Cache Hit Ratio)'이라 하며, 캐시 누락(Miss)이 발생하면 느린 메인 메모리에서 데이터를 가져와야 합니다.",
      "sourceOrTrivia": "Hennessy & Patterson (2017) Computer Architecture: A Quantitative Approach",
      "wrongOptionsReason": [
        "가상 메모리는 디스크의 일부를 RAM처럼 확장해 쓰는 OS 메모리 관리 기법입니다.",
        "하드디스크는 대용량이지만 기계적 동작으로 매우 느린 보조기억장치입니다.",
        "플래시 메모리는 전원이 꺼져도 데이터가 유지되는 비휘발성 저장장치입니다.",
        "정답입니다. CPU 속도를 받쳐주는 초고속 버퍼인 캐시 메모리입니다."
      ]
    },
    {
      "id": "ultra_cs_21",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "사토시 나카모토가 2008년 비트코인 백서에서 제안한 합의 알고리즘으로, 네트워크 참여자들이 수학적 암호 퍼즐(해시 파워)을 가장 먼저 풀어낸 블록을 유효한 것으로 인정하는 합의 방식은?",
      "options": [
        "작업 증명 (PoW, Proof of Work)",
        "지분 증명 (PoS)",
        "위임 지분 증명 (DPoS)",
        "권한 증명 (PoA)"
      ],
      "correctIndex": 0,
      "explanation": "작업 증명은 컴퓨팅 연산 능력을 투입하여 목표 해시값 이하의 난스(Nonce)를 찾아내는 방식으로, 비잔틴 장군 문제(분산 환경의 신뢰 구축)를 최초로 실용적 해결했습니다.",
      "deepKnowledge": "악의적인 공격자가 거래 내역을 위변조하려면 전체 네트워크 해시 파워의 과반(51% 공격)을 점유해야 하므로 보안성이 유지됩니다.",
      "sourceOrTrivia": "Nakamoto (2008) 'Bitcoin: A Peer-to-Peer Electronic Cash System'",
      "wrongOptionsReason": [
        "정답입니다. 채굴 연산력을 증명하여 합의를 이루는 작업 증명(PoW)입니다.",
        "지분 증명은 보유한 암호화폐 지분량과 비례하여 블록 검증 권한을 얻는 방식입니다.",
        "위임 지분 증명은 투표로 선출된 대표 노드들이 블록을 생성하는 방식입니다.",
        "권한 증명은 신원 인증된 특정 기관 노드들만 검증하는 방식입니다."
      ]
    },
    {
      "id": "ultra_cs_22",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "합성곱 신경망(CNN)을 극도로 깊게 쌓을 때 오히려 훈련 오류가 증가하는 퇴화 문제를 해결하기 위해, 계층의 출력을 다음 계층에 직접 더해주는 '잔차 연결(Skip / Residual Connection)'을 도입한 혁신적 망은?",
      "options": [
        "AlexNet",
        "ResNet (Residual Neural Network)",
        "VGGNet",
        "GoogLeNet (Inception)"
      ],
      "correctIndex": 1,
      "explanation": "허카이밍(Kaiming He) 등이 2015년 제안한 ResNet은 신경망 연산 결과에 처음 입력값을 그대로 합산하는 잔차 연결(스킵 커넥션) 구조를 통해 학습 기울기가 감쇠 없이 직접 흐를 수 있는 고속도로를 뚫어 152층 이상의 초심층 네트워크를 성공적으로 학습시켰습니다.",
      "deepKnowledge": "ResNet은 2015년 ILSVRC 이미지넷 대회에서 사람의 오차율(약 5%)을 뛰어넘는 3.57%의 최고 성능으로 우승을 차지했습니다.",
      "sourceOrTrivia": "He et al. (2016) 'Deep Residual Learning for Image Recognition', CVPR",
      "wrongOptionsReason": [
        "AlexNet은 2012년 GPU와 ReLU로 딥러닝 붐을 촉발한 8층 CNN입니다.",
        "정답입니다. 스킵 커넥션으로 딥러닝 깊이의 한계를 깬 ResNet입니다.",
        "VGGNet은 3x3 작은 필터만 깊게 쌓은 16~19층 CNN입니다.",
        "GoogLeNet은 다양한 크기의 필터를 병렬 결합한 인셉션 모듈 망입니다."
      ]
    },
    {
      "id": "ultra_cs_23",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "운영체제에서 물리 메모리(RAM)보다 더 큰 프로그램을 실행하기 위해 보조기억장치의 일부를 메모리처럼 확장 활용하며, 메모리를 일정한 고정 크기 블록으로 분할 관리하는 기법은?",
      "options": [
        "오버레이",
        "세그멘테이션 (Segmentation)",
        "페이징 (Paging)",
        "단편화"
      ],
      "correctIndex": 2,
      "explanation": "페이징은 가상 주소 공간을 '페이지(Page)'로, 물리 메모리를 '프레임(Frame)'이라는 동일한 크기(통상 4KB)로 쪼개어 페이지 테이블을 통해 사상(Mapping)함으로써 외부 단편화를 해결합니다.",
      "deepKnowledge": "CPU가 요구한 페이지가 물리 메모리에 없을 때 발생하는 인터럽트를 '페이지 폴트(Page Fault)'라고 하며, 가상 메모리 관리자가 디스크에서 해당 페이지를 스왑인(Swap-in)합니다.",
      "sourceOrTrivia": "Silberschatz, Galvin, Gagne (2018) Operating System Concepts, 10th Edition",
      "wrongOptionsReason": [
        "오버레이는 메모리가 부족하던 시절 프로그래머가 직접 모듈을 교체 적재하던 수동 기법입니다.",
        "세그멘테이션은 코드, 데이터, 스택 등 의미 있는 가변 크기 단위로 분할하는 기법입니다.",
        "정답입니다. 고정 크기 블록으로 가상 메모리를 관리하는 페이징 기법입니다.",
        "단편화는 메모리에 빈 공간이 쪼개져 낭비되는 비효율 현상 자체입니다."
      ]
    },
    {
      "id": "ultra_cs_24",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "Java, Python 등 최신 프로그래밍 언어의 런타임 환경에서 더 이상 어떤 변수도 참조하지 않는 힙(Heap) 메모리의 도달 불가능한 객체들을 자동으로 탐지하여 해제하는 시스템 기능은?",
      "options": [
        "동적 바인딩",
        "스택 언와인딩",
        "메모리 누수",
        "가비지 컬렉션 (Garbage Collection, GC)"
      ],
      "correctIndex": 3,
      "explanation": "가비지 컬렉터는 루트 세트(스택 프레임, 전역 변수)로부터 도달 가능 여부(Reachability)를 추적하여 쓰레기 객체를 회수함으로써 수동 메모리 해제 실수(메모리 누수, 이중 해제)를 방지합니다.",
      "deepKnowledge": "대부분의 현대 GC는 '대부분의 객체는 생성 후 금방 죽는다'는 약한 세대 가설(Weak Generational Hypothesis)에 착안하여 세대별 수집(Young/Old Gen GC)을 적용합니다.",
      "sourceOrTrivia": "McCarthy (1960) 'Recursive Functions of Symbolic Expressions and Their Computation by Machine'",
      "wrongOptionsReason": [
        "동적 바인딩은 실행 시점에 호출할 메서드가 결정되는 다형성 기법입니다.",
        "스택 언와인딩은 예외 발생 시 함수 호출 스택을 되감는 과정입니다.",
        "메모리 누수는 할당된 메모리를 해제하지 않아 점유가 누적되는 버그입니다.",
        "정답입니다. 메모리 자동 해제를 수행하는 가비지 컬렉션(GC)입니다."
      ]
    },
    {
      "id": "ultra_cs_25",
      "topic": "AI & 컴퓨터 과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "웹 브라우저와 웹 서버 간에 안전하게 암호화된 통신을 수행하기 위해 기존 HTTP에 전송 계층 보안(TLS/SSL) 암호화 계층을 추가한 통신 규약은?",
      "options": [
        "HTTPS (포트 443)",
        "FTP",
        "SSH",
        "SMTP"
      ],
      "correctIndex": 0,
      "explanation": "HTTPS는 대칭키로 본문 데이터를 고속 암호화하고 대칭키 교환은 공개키(인증서)로 안전하게 처리하여 도청과 중간자 공격(MITM)을 방지합니다.",
      "deepKnowledge": "오늘날 웹 보안 표준으로 인해 구글 크롬 등 브라우저는 순수 HTTP 연결 시 '안전하지 않음' 경고를 띄웁니다.",
      "sourceOrTrivia": "RFC 2818: HTTP Over TLS",
      "wrongOptionsReason": [
        "정답입니다. 보안 암호화 웹 통신 프로토콜인 HTTPS입니다.",
        "FTP는 암호화되지 않은 고전 파일 전송 프로토콜입니다.",
        "SSH는 원격 서버 접속을 위한 암호화 셸 프로토콜입니다.",
        "SMTP는 전자우편 전송을 위한 메일 전송 프로토콜입니다."
      ]
    }
  ],
  "economy": [
    {
      "id": "ultra_ec_1",
      "topic": "경제 & 금융",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "애덤 스미스가 1776년 '국부론'에서 설명한 개념으로, 개인이 오직 자신의 사적 이익을 추구하더라도 시장 가격 기구의 자동 조절 기능을 통해 사회 전체의 번영과 조화가 달성된다는 원리는?",
      "options": [
        "보이지 않는 손 (Invisible Hand)",
        "비교우위론",
        "세이의 법칙",
        "승수효과"
      ],
      "correctIndex": 0,
      "explanation": "보이지 않는 손은 자유 경쟁 시장에서 가격(Price)이 수급을 일치시키며 자원을 가장 효율적으로 배분하는 신호등 역할을 한다는 시장 경제학의 기본 원리입니다.",
      "deepKnowledge": "스미스는 국부론에서 '우리가 저녁 식사를 기대할 수 있는 것은 정육점, 양조장, 빵집 주인의 자비심 덕분이 아니라 그들의 돈벌이에 대한 관심 덕분이다'라고 갈파했습니다.",
      "sourceOrTrivia": "Smith (1776) The Wealth of Nations Book IV, Chapter 2",
      "wrongOptionsReason": [
        "정답입니다. 자유 시장 가격 기구의 자율 조절력을 뜻하는 보이지 않는 손입니다.",
        "비교우위론은 데이비드 리카도가 정립한 국제 무역의 기회비용 원리입니다.",
        "세이의 법칙은 '공급은 스스로 수요를 창조한다'는 고전학파 명제입니다.",
        "승수효과는 정부 지출 증가가 소득을 몇 배로 증폭시킨다는 케인스 경제학 개념입니다."
      ]
    },
    {
      "id": "ultra_ec_2",
      "topic": "경제 & 금융",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "어떤 선택을 할 때 포기해야 하는 다른 대안들 중 가장 가치가 큰 대안의 효용 가치를 의미하는 경제학의 기본 개념은?",
      "options": [
        "매몰비용 (Sunk Cost)",
        "기회비용 (Opportunity Cost)",
        "한계비용 (Marginal Cost)",
        "고정비용"
      ],
      "correctIndex": 1,
      "explanation": "기회비용은 회계적 명시적 비용뿐만 아니라 암묵적 포기 가치까지 합산한 진정한 경제학적 선택 비용으로, 합리적 선택은 항상 기회비용을 최소화하는 것입니다.",
      "deepKnowledge": "이미 지출되어 어떤 선택을 하더라도 되돌릴 수 없는 '매몰비용(Sunk Cost)'은 합리적 의사결정에서 철저히 배제되어야 합니다.",
      "sourceOrTrivia": "Mankiw (2020) Principles of Economics, 9th Edition",
      "wrongOptionsReason": [
        "매몰비용은 이미 지출되어 회수할 수 없는 비용입니다.",
        "정답입니다. 포기한 대안 중 최고의 가치를 뜻하는 기회비용입니다.",
        "한계비용은 생산량을 한 단위 늘릴 때 추가로 드는 비용입니다.",
        "고정비용은 생산량과 무관하게 일정하게 지출되는 임대료 등의 비용입니다."
      ]
    },
    {
      "id": "ultra_ec_3",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "게임 이론에서 모든 참여자가 상대방의 전략을 주어진 것으로 전제하고 자신의 이익을 극대화하는 최선의 전략을 선택했을 때, 어느 누구도 일방적으로 전략을 바꿀 유인이 없는 균형 상태는?",
      "options": [
        "우월 전략 균형",
        "파레토 최적",
        "내시 균형 (Nash Equilibrium)",
        "미니맥스 균형"
      ],
      "correctIndex": 2,
      "explanation": "존 내시가 1950년 수학적으로 증명한 비협조적 게임의 균형으로, '죄수의 딜레마'에서 양측 모두 자백을 택하여 파레토 열위의 상태에 도달하는 것이 대표적 사례입니다.",
      "deepKnowledge": "존 내시는 유한한 참여자와 유한한 전략을 가진 모든 비협조적 게임에는 적어도 하나의 혼합 전략 내시 균형이 존재함을 증명하여 1994년 노벨경제학상을 수상했습니다.",
      "sourceOrTrivia": "Nash (1950) PNAS 36, 48-49",
      "wrongOptionsReason": [
        "우월 전략 균형은 상대방 전략과 무관하게 항상 최선인 전략들의 조합입니다.",
        "파레토 최적은 다른 사람의 후생을 줄이지 않고는 어떤 사람의 후생도 늘릴 수 없는 자원 배분입니다.",
        "정답입니다. 아무도 일방적으로 이탈할 유인이 없는 상태인 내시 균형입니다.",
        "미니맥스 균형은 제로섬 게임에서 최대 손실을 최소화하는 전략입니다."
      ]
    },
    {
      "id": "ultra_ec_4",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "소비에 있어서 한 사람의 소비가 다른 사람의 소비를 방해하지 않고(비경합성), 대가를 지불하지 않은 사람의 이용을 배제할 수 없는(비배제성) 국방, 치안, 등대 같은 재화는?",
      "options": [
        "클럽재 (Club Goods)",
        "사유재 (Private Goods)",
        "공유자원 (Common Resources)",
        "공공재 (Public Goods)"
      ],
      "correctIndex": 3,
      "explanation": "공공재는 비배제성 때문에 대가를 치르지 않고 혜택만 누리려는 '무임승차자 문제(Free-rider problem)'가 발생하므로, 시장에 맡기면 사회적 최적 수준보다 과소 공급되어 정부가 직접 공급합니다.",
      "deepKnowledge": "공유자원(목초지, 어장)은 경합성은 있으나 배제성이 없어 남획으로 고갈되는 '공유지의 비극(Tragedy of the Commons)'이 발생합니다.",
      "sourceOrTrivia": "Samuelson (1954) Review of Economics and Statistics",
      "wrongOptionsReason": [
        "클럽재는 배제성은 있으나 경합성이 없는 유료 고속도로, 케이블 TV입니다.",
        "사유재는 경합성과 배제성을 모두 갖는 일반 시장 재화(음식, 옷)입니다.",
        "공유자원은 경합성은 있으나 배제성이 없는 어장, 산림입니다.",
        "정답입니다. 비경합성과 비배제성을 동시에 갖는 공공재입니다."
      ]
    },
    {
      "id": "ultra_ec_5",
      "topic": "경제 & 금융",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "피셔 블랙과 마이런 숄즈가 1973년 발표한 방정식으로, 주가의 무작위 보행(기하 브라운 운동)과 무위험 차익거래 원리를 적용하여 유럽형 주식 옵션의 공정 가격을 산출하는 불멸의 금융 모델은?",
      "options": [
        "블랙-숄즈 모형 (Black-Scholes Model)",
        "CAPM (자본자산가격결정모형)",
        "이항 옵션 평가 모형",
        "차익거래가격결정모형 (APT)"
      ],
      "correctIndex": 0,
      "explanation": "블랙-숄즈 모형은 기초자산 가격, 행사가격, 만기, 무위험 이자율, 주가 변동성(변동성(σ))의 5가지 변수만으로 파생상품 옵션의 이론 가격을 정확히 계산해 현대 금융공학의 폭발적 성장을 열었습니다.",
      "deepKnowledge": "마이런 숄즈와 로버트 머턴은 이 공로로 1997년 노벨경제학상을 수상했습니다(피셔 블랙은 1995년 작고하여 제외).",
      "sourceOrTrivia": "Black & Scholes (1973) Journal of Political Economy 81",
      "wrongOptionsReason": [
        "정답입니다. 옵션 가격 결정의 표준 방정식인 블랙-숄즈 모형입니다.",
        "CAPM은 주식의 기대수익률과 체계적 위험(베타)의 선형 관계를 나타내는 모형입니다.",
        "이항 모형은 이산적인 주가 상승/하락 확률 트리를 이용한 평가법입니다.",
        "APT는 다중 요인을 이용해 자산 가격을 설명하는 차익거래 모델입니다."
      ]
    },
    {
      "id": "ultra_ec_6",
      "topic": "경제 & 금융",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "대니얼 카너먼과 아모스 트버스키가 정립한 행동경제학 이론으로, 인간은 같은 금액이라도 이익에서 얻는 기쁨보다 손실에서 느끼는 고통을 약 2~2.5배 더 크게 체감한다는 원리는?",
      "options": [
        "시간 할인 편향",
        "손실 회피성 (Loss Aversion / 전망 이론)",
        "과신 편향",
        "매몰비용 오류"
      ],
      "correctIndex": 1,
      "explanation": "전망 이론(Prospect Theory)의 가치 함수는 이득 영역에서는 오목(위험 회피)하고 손실 영역에서는 볼록(위험 추구)하며, 기준점(Reference Point)을 중심으로 손실 쪽의 기울기가 훨씬 가파릅니다.",
      "deepKnowledge": "이 손실 회피성 때문에 주식 투자자들이 손실 난 종목은 팔지 못하고 손절매를 기피하다 더 큰 손실을 입는 '처분 효과(Disposition Effect)'가 일어납니다.",
      "sourceOrTrivia": "Kahneman & Tversky (1979) Econometrica 47",
      "wrongOptionsReason": [
        "시간 할인은 미래의 보상을 현재 가치로 깎아내리는 심리입니다.",
        "정답입니다. 이익보다 손실에 민감한 행동경제학의 손실 회피성입니다.",
        "과신 편향은 자신의 능력이나 예측 정확도를 과대평가하는 심리입니다.",
        "매몰비용 오류는 이미 들어간 매몰비용에 집착해 합리적 결정을 그르치는 오류입니다."
      ]
    },
    {
      "id": "ultra_ec_7",
      "topic": "경제 & 금융",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "중앙은행이 경기 부양을 위해 명목 기준금리를 제로(0%) 수준까지 낮추었음에도 불구하고, 시장 참여자들이 미래에 대한 불안으로 모든 화폐를 현금으로만 보유하려 하여 통화 공급 확대가 투자나 소비를 늘리지 못하는 통화정책 무력화 상태는?",
      "options": [
        "피셔 효과",
        "스태그플레이션",
        "유동성 함정 (Liquidity Trap)",
        "구축 효과"
      ],
      "correctIndex": 2,
      "explanation": "존 메이너드 케인스가 '고용·이자 및 화폐의 일반이론'에서 경고한 상태로, 화폐 수요의 이자율 탄력성이 무한대가 되어 채권 매입 등 전통적 통화정책이 완전히 마비됩니다.",
      "deepKnowledge": "이러한 유동성 함정에서는 중앙은행이 장기 국채를 직접 대량 매입하는 비전통적 '양적완화(QE)'를 시행하거나, 정부가 과감한 재정 지출 확대로 유효수요를 창출해야 합니다.",
      "sourceOrTrivia": "Keynes (1936) The General Theory of Employment, Interest and Money / Krugman (1998)",
      "wrongOptionsReason": [
        "피셔 효과는 명목이자율이 실질이자율과 기대인플레이션의 합이라는 원리입니다.",
        "스태그플레이션은 경기 침체와 고물가가 동시에 발생하는 현상입니다.",
        "정답입니다. 금리를 낮춰도 효과가 없는 통화정책의 한계 유동성 함정입니다.",
        "구축 효과는 정부의 재정 지출 확대로 이자율이 올라 민간 투자가 위축되는 현상입니다."
      ]
    },
    {
      "id": "ultra_ec_8",
      "topic": "경제 & 금융",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "로버트 트리핀(Robert Triffin) 교수가 제기한 국제금융의 모순으로, 달러가 세계 기축통화 역할을 하려면 전 세계에 유동성을 공급하기 위해 미국이 지속적인 경상수지 적자를 내야 하지만, 적자가 누적되면 달러의 신인도가 하락하여 기축통화 체제가 붕괴한다는 역설은?",
      "options": [
        "루카스 비판",
        "기펜의 역설",
        "투키디데스 함정",
        "트리핀 딜레마 (Triffin Dilemma)"
      ],
      "correctIndex": 3,
      "explanation": "트리핀 딜레마는 1960년대 브레턴우즈 금태환 체제의 구조적 내재적 붕괴를 정확히 예견한 이론으로, 결국 1971년 미국의 금 태환 중지(닉슨 쇼크)로 이어졌습니다.",
      "deepKnowledge": "오늘날에도 미국의 막대한 쌍둥이 적자(재정 적자+무역 적자)와 달러 패권 사이의 갈등을 설명하는 핵심 통화 이론입니다.",
      "sourceOrTrivia": "Triffin (1960) Gold and the Dollar Crisis",
      "wrongOptionsReason": [
        "루카스 비판은 경제 주체의 합리적 기대를 무시한 거시 계량 모형의 오류를 비판한 이론입니다.",
        "기펜의 역설은 가격이 오르면 수요량이 늘어나는 열등재 역설입니다.",
        "투키디데스 함정은 신흥 강국과 패권국의 필연적 전쟁 충돌 가설입니다.",
        "정답입니다. 기축통화국의 유동성 공급과 신인도 간의 모순인 트리핀 딜레마입니다."
      ]
    },
    {
      "id": "ultra_ec_9",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "소득 불평등도를 측정하는 대표적인 지표로, 대각선(완전 평등선)과 로렌츠 곡선 사이의 불평등 면적을 대각선 아래 삼각형 면적으로 나눈 값(0에서 1 사이)은?",
      "options": [
        "지니 계수 (Gini Coefficient)",
        "엥겔 지수",
        "슈바베 지수",
        "빅맥 지수"
      ],
      "correctIndex": 0,
      "explanation": "지니 계수는 0에 가까울수록 완전 평등하고 1에 가까울수록 완전 불평등(한 사람이 모든 소득 독점)을 의미하며, 보통 0.4를 넘으면 소득 분배의 불평등이 심각한 상태로 봅니다.",
      "deepKnowledge": "소득 5분위 배율(상위 20% 소득 / 하위 20% 소득)과 함께 국가 간 소득 양극화를 비교하는 핵심 척도로 쓰입니다.",
      "sourceOrTrivia": "Gini (1912) Variabilità e mutabilità",
      "wrongOptionsReason": [
        "정답입니다. 로렌츠 곡선을 수치화한 소득 불평등 지표 지니 계수입니다.",
        "엥겔 지수는 가계 총지출에서 식료품비가 차지하는 비율입니다.",
        "슈바베 지수는 가계 소비지출에서 주거비가 차지하는 비율입니다.",
        "빅맥 지수는 각국 맥도날드 햄버거 가격으로 환율 적정성을 평가하는 지표입니다."
      ]
    },
    {
      "id": "ultra_ec_10",
      "topic": "경제 & 금융",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "중앙은행이 물가 안정과 경기 조절을 위해 사용하는 3대 통화정책 수단에 속하지 않는 것은?",
      "options": [
        "기준금리(정책금리) 결정",
        "법인세율 직접 변경",
        "지급준비율(지준율) 조정",
        "공개시장운영 (국채 매매)"
      ],
      "correctIndex": 1,
      "explanation": "법인세율이나 소득세율 조정은 정부와 국회가 관할하는 '재정 정책(Fiscal Policy)'에 해당하며, 중앙은행의 통화 신용 정책 수단이 아닙니다.",
      "deepKnowledge": "중앙은행은 공개시장운영(국채를 사들여 유동성 공급 또는 매각해 회수)을 가장 일상적인 통화정책 수단으로 활용합니다.",
      "sourceOrTrivia": "Mishkin (2018) The Economics of Money, Banking and Financial Markets",
      "wrongOptionsReason": [
        "기준금리 결정은 중앙은행 금융통화위원회의 핵심 정책입니다.",
        "정답입니다. 세율 변경은 정부의 재정 정책 수단입니다.",
        "지급준비율 조정은 시중은행이 중앙은행에 예치해야 할 최소 현금 비율을 조절하는 수단입니다.",
        "공개시장운영은 채권 매매를 통해 시중 통화량을 직접 조절하는 주력 수단입니다."
      ]
    },
    {
      "id": "ultra_ec_11",
      "topic": "경제 & 금융",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "한 경제 주체의 생산이나 소비 행위가 시장 기구를 통하지 않고 제3자에게 의도치 않은 혜택(외부경제)이나 손해(외부불경제)를 끼치면서도 그에 대한 대가를 치르지 않는 현상은?",
      "options": [
        "역선택 (Adverse Selection)",
        "도덕적 해이 (Moral Hazard)",
        "외부효과 (Externality)",
        "독점적 경쟁"
      ],
      "correctIndex": 2,
      "explanation": "공장 폐수 오염 같은 부정적 외부효과는 사적 비용이 사회적 비용보다 작아 사회적 최적 수준보다 과다 생산되므로, 세금(피구세, Pigouvian Tax)을 부과해 내부화합니다.",
      "deepKnowledge": "로널드 코스(Ronald Coase)는 거래 비용이 0이라면 소유권(재산권)만 명확히 정의되어 있으면 당사자 간 자발적 협상을 통해 외부효과를 효율적으로 해결할 수 있다는 '코스 정리(Coase Theorem)'를 증명했습니다.",
      "sourceOrTrivia": "Pigou (1920) The Economics of Welfare / Coase (1960) J. Law & Econ.",
      "wrongOptionsReason": [
        "역선택은 정보 비대칭으로 인해 계약 전 불량품만 거래되는 현상입니다.",
        "도덕적 해이는 계약 체결 후 감시가 어려운 틈을 타 책임을 다하지 않는 행위입니다.",
        "정답입니다. 시장 실패의 대표적 원인인 외부효과입니다.",
        "독점적 경쟁은 차별화된 상품을 생산하는 다수 기업의 시장 형태입니다."
      ]
    },
    {
      "id": "ultra_ec_12",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "주식의 시장 가격을 주당순이익(EPS)으로 나눈 값으로, 현재 주가가 회사가 벌어들이는 이익에 비해 몇 배로 평가받고 있는지를 나타내는 대표적인 가치평가 지표는?",
      "options": [
        "EV/EBITDA",
        "PBR (주가순자산비율)",
        "ROE (자기자본이익률)",
        "PER (주가수익비율, Price-to-Earnings Ratio)"
      ],
      "correctIndex": 3,
      "explanation": "PER이 낮으면 기업의 이익 창출력에 비해 주가가 저평가되어 있음을 의미하며, 높으면 미래 성장성에 대한 높은 프리미엄이 반영되어 있음을 나타냅니다.",
      "deepKnowledge": "PBR은 주가를 주당순자산(BPS)으로 나눈 장부가치 대비 척도이며, ROE는 기업이 자기자본을 투입해 얼마의 순이익을 냈는지 보여주는 수익성 지표입니다.",
      "sourceOrTrivia": "Graham & Dodd (1934) Security Analysis",
      "wrongOptionsReason": [
        "EV/EBITDA는 기업 총 가치를 영업활동 현금흐름으로 나눈 기업 가치 지표입니다.",
        "PBR은 주가를 순자산(자본)으로 나눈 지표입니다.",
        "ROE는 순이익을 자기자본으로 나눈 이익률입니다.",
        "정답입니다. 주가를 순이익으로 나눈 주가수익비율 PER입니다."
      ]
    },
    {
      "id": "ultra_ec_13",
      "topic": "경제 & 금융",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "유진 파마(Eugene Fama) 교수가 1970년 정립한 가설로, 주식 시장의 모든 자산 가격은 이용 가능한 모든 관련 정보(과거 주가, 공시, 미공개 정보 등)를 즉각적이고 정확하게 반영하고 있다는 이론은?",
      "options": [
        "효율적 시장 가설 (Efficient Market Hypothesis, EMH)",
        "무작위 보행 이론",
        "포트폴리오 선택 이론",
        "행동재무학"
      ],
      "correctIndex": 0,
      "explanation": "효율적 시장 가설에 따르면 과거 주가 패턴 분석(기술적 분석)이나 재무제표 분석(기본적 분석)으로 시장 평균 이상의 지속적인 초과 수익(알파)을 내는 것은 불가능합니다.",
      "deepKnowledge": "정보의 반영 범위에 따라 과거 가격 정보만 반영된 '약형', 모든 공개 정보가 반영된 '준강형', 내부자 정보까지 반영된 '강형' 효율적 시장으로 구분됩니다.",
      "sourceOrTrivia": "Fama (1970) Journal of Finance 25 (2013 노벨경제학상)",
      "wrongOptionsReason": [
        "정답입니다. 정보의 즉각적 가격 반영을 주장한 효율적 시장 가설입니다.",
        "무작위 보행 이론은 주가 변동이 예측 불가능한 독립적 확률 과정이라는 가설입니다.",
        "포트폴리오 이론은 해리 마코위츠의 분산투자 위험-수익 최적화 이론입니다.",
        "행동재무학은 인간의 인지 편향으로 시장이 비효율적일 수 있음을 규명하는 학문입니다."
      ]
    },
    {
      "id": "ultra_ec_14",
      "topic": "경제 & 금융",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "국내총생산(GDP)을 지출 측면에서 파악할 때, 경제를 구성하는 4대 지출 항목(가계 소비, 민간 투자, 정부 지출, 순수출)의 올바른 결합 방식은?",
      "options": [
        "GDP = 소비 - 투자 - 정부지출 + (수출 + 수입)",
        "GDP = 소비 + 투자 + 정부지출 + 순수출(수출 - 수입)",
        "GDP = 소비 × 투자 × 정부지출 × 순수출",
        "GDP = 소비 + 투자 - 정부지출 - (수출 - 수입)"
      ],
      "correctIndex": 1,
      "explanation": "지출 국민소득 삼면등가의 법칙에 따라 GDP는 국내 가계 소비, 기업 투자, 정부 지출, 그리고 수출에서 수입을 뺀 순수출의 총합과 정확히 일치합니다.",
      "deepKnowledge": "우리나라는 순수출(무역 의존도)의 비중이 높아 글로벌 경기 변동에 GDP가 민감하게 반응하는 특성을 지닙니다.",
      "sourceOrTrivia": "Kuznets (1934) National Income Reports / 노벨경제학상 (1971)",
      "wrongOptionsReason": [
        "투자나 정부 지출을 차감하는 것은 잘못된 연산입니다.",
        "정답입니다. 거시경제학의 기초 GDP 지출 항등식입니다.",
        "단순 곱셈 형태는 소득의 총량 산출에 부합하지 않습니다.",
        "정부 지출이 누락되고 부호가 왜곡된 잘못된 식입니다."
      ]
    },
    {
      "id": "ultra_ec_15",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "중고차 시장처럼 판매자는 차량의 결함(레몬)을 잘 알지만 구매자는 알지 못하는 '정보의 비대칭성'이 존재할 때, 우량품은 시장에서 퇴출당하고 불량품만 남게 되는 현상은?",
      "options": [
        "사중손실",
        "도덕적 해이",
        "역선택 (Adverse Selection)",
        "포획 이론"
      ],
      "correctIndex": 2,
      "explanation": "조지 애커로프가 '레몬 시장(The Market for Lemons, 1970)' 논문에서 규명한 현상으로, 구매자가 평균 품질 수준의 가격만 지불하려 하므로 고품질 소유자는 거래를 포기해 시장이 붕괴합니다.",
      "deepKnowledge": "이를 해결하기 위해 판매자가 보증서나 브랜드를 제공하는 '신호 보내기(Signaling)'나 구매자가 자기선택을 유도하는 '선별(Screening)' 기제가 발전했습니다.",
      "sourceOrTrivia": "Akerlof (1970) Quarterly Journal of Economics / 2001 노벨경제학상",
      "wrongOptionsReason": [
        "사중손실은 세금이나 독점으로 인해 발생하는 사회적 잉여의 순손실입니다.",
        "도덕적 해이는 계약 체결 후 감시 결여로 발생하는 태만입니다.",
        "정답입니다. 계약 체결 전 정보 비대칭으로 인한 역선택입니다.",
        "포획 이론은 규제 기관이 피규제 집단의 로비에 포섭된다는 정치경제학 이론입니다."
      ]
    },
    {
      "id": "ultra_ec_16",
      "topic": "경제 & 금융",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "해리 마코위츠가 1952년 정립한 현대 포트폴리오 이론(MPT)에서, 상관계수가 1보다 작은 서로 다른 자산들을 분산 투자함으로써 완전히 제거할 수 있는 위험은?",
      "options": [
        "환율 위험",
        "체계적 위험 (시장 위험, Systematic Risk)",
        "국가 위험",
        "비체계적 위험 (개별 자산 고유 위험, Unsystematic Risk)"
      ],
      "correctIndex": 3,
      "explanation": "개별 기업의 경영 악화, 소송 등 고유한 '비체계적 위험'은 포트폴리오 종목 수를 늘리면 상쇄되어 0에 수렴하지만, 거시경제 충격인 '체계적 위험(시장 위험, 베타)'은 분산 투자로도 제거할 수 없습니다.",
      "deepKnowledge": "마코위츠는 동일한 기대수익률에서 분산을 최소화하거나, 동일한 위험에서 수익률을 극대화하는 포트폴리오들의 궤적인 '효율적 투자선(Efficient Frontier)'을 도출했습니다.",
      "sourceOrTrivia": "Markowitz (1952) Portfolio Selection, Journal of Finance (1990 노벨상)",
      "wrongOptionsReason": [
        "환율 위험은 글로벌 거시 위험의 일부로 환헤지가 필요합니다.",
        "체계적 위험은 금리, 전쟁 등 시장 전체에 미치는 위험으로 분산 제거가 불가능합니다.",
        "국가 위험은 단일 국가 내 분산 투자로는 제거되지 않습니다.",
        "정답입니다. 분산 투자를 통해 상쇄할 수 있는 비체계적 위험입니다."
      ]
    },
    {
      "id": "ultra_ec_17",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "채권 시장에서 시중 시장 금리(이자율)가 상승할 때, 기존에 발행된 고정 금리 채권의 시장 거래 가격은 어떻게 변화하는가?",
      "options": [
        "채권 가격은 하락한다",
        "채권 가격은 상승한다",
        "채권 가격은 변함없이 유지된다",
        "액면가가 두 배로 증가한다"
      ],
      "correctIndex": 0,
      "explanation": "시중 금리가 오르면 새로 발행되는 신규 채권의 이자가 더 매력적이 되므로, 낮은 고정 이자를 주는 기존 채권의 수요가 줄어 가격이 하락합니다.",
      "deepKnowledge": "금리 변동에 대한 채권 가격의 민감도를 '듀레이션(Duration)'이라고 하며, 만기가 길고 표면이율이 낮을수록 듀레이션이 커져 금리 상승 시 가격 하락 폭이 훨씬 큽니다.",
      "sourceOrTrivia": "Fabozzi (2012) Bond Markets, Analysis, and Strategies",
      "wrongOptionsReason": [
        "정답입니다. 채권 가격과 시장 금리는 역의 상관관계를 가집니다.",
        "채권 가격 상승은 시장 금리가 하락할 때 일어납니다.",
        "시장 금리가 변하면 채권 가격은 반드시 변동합니다.",
        "채권의 액면가는 만기 상환 금액으로 시장 금리와 무관하게 고정되어 있습니다."
      ]
    },
    {
      "id": "ultra_ec_18",
      "topic": "경제 & 금융",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "가격이 상승할 때 과시욕이나 허영심으로 인해 오히려 수요량이 증가하는 명품, 다이아몬드, 슈퍼카 등의 소비 행태를 설명하는 효과는?",
      "options": [
        "스놉 효과 (백로 효과)",
        "베블런 효과 (Veblen Effect)",
        "밴드왜건 효과 (편승 효과)",
        "전망 효과"
      ],
      "correctIndex": 1,
      "explanation": "소스타인 베블런이 '유한계급론(1899)'에서 지적한 '과시적 소비(Conspicuous Consumption)'로, 가격이 비쌀수록 자신의 부와 사회적 지위를 뽐낼 수 있어 수요가 늘어나는 수요법칙의 예외입니다.",
      "deepKnowledge": "스놉 효과는 남들이 많이 사면 차별화를 위해 구매를 꺼리는 현상이며, 밴드왜건 효과는 유행에 따라 남들이 사니까 따라 사는 현상입니다.",
      "sourceOrTrivia": "Veblen (1899) The Theory of the Leisure Class",
      "wrongOptionsReason": [
        "스놉 효과는 대중이 소비하면 오히려 소비를 중단하는 속물 효과입니다.",
        "정답입니다. 가격이 비쌀수록 과시를 위해 수요가 느는 베블런 효과입니다.",
        "밴드왜건 효과는 유행에 편승하여 타인을 모방 소비하는 효과입니다.",
        "전망 효과는 손실 회피성을 다루는 행동경제학 개념입니다."
      ]
    },
    {
      "id": "ultra_ec_19",
      "topic": "경제 & 금융",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "시장의 경쟁 체제를 왜곡하는 정부의 세금 부과나 독점 기업의 가격 책정으로 인해, 소비자와 생산자 잉여의 합인 사회적 총잉여가 순손실되는 영역을 부르는 경제학 용어는?",
      "options": [
        "마찰비용",
        "외부비용",
        "사중손실 (Deadweight Loss, 자중손실)",
        "기회손실"
      ],
      "correctIndex": 2,
      "explanation": "사중손실은 세금 부과 등으로 인해 시장 거래량이 사회적 최적 생산량보다 줄어들어 그 누구에게도 귀속되지 않고 허공으로 사라지는 순수한 사회적 후생 낭비분입니다.",
      "deepKnowledge": "하버거의 삼각형(Harberger's Triangle)으로 시각화되며, 수요와 공급의 탄력성이 클수록 왜곡에 의한 사중손실의 크기가 급증합니다.",
      "sourceOrTrivia": "Harberger (1964) 'Taxation, Resource Allocation, and Welfare'",
      "wrongOptionsReason": [
        "마찰비용은 탐색이나 협상에 소요되는 거래 비용입니다.",
        "외부비용은 제3자에게 끼친 환경 오염 등의 피해 비용입니다.",
        "정답입니다. 시장 왜곡으로 인한 사회적 후생 순손실인 사중손실입니다.",
        "기회손실은 포기한 대안의 이익을 뜻하는 비공식적 표현입니다."
      ]
    },
    {
      "id": "ultra_ec_20",
      "topic": "경제 & 금융",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "통화주의 학파의 영수 밀턴 프리드먼(Milton Friedman)이 화폐수량설을 바탕으로 물가 상승의 근원적 원인을 단언한 명언은?",
      "options": [
        "이자율은 화폐의 임대료에 불과하다",
        "수요가 공급을 창출한다",
        "공급이 수요를 창출한다",
        "인플레이션은 언제 어디서나 화폐적 현상이다"
      ],
      "correctIndex": 3,
      "explanation": "프리드먼은 인플레이션의 궁극적 원인은 정부나 중앙은행이 경제 산출량 증가 속도보다 더 빠르게 통화량을 남발하기 때문이라고 설파했습니다(MV = PY(화폐수량방정식)).",
      "deepKnowledge": "그는 재량적 통화정책을 불신하고 매년 경제성장률에 맞추어 통화량을 일정한 비율로만 공급하자는 'K-퍼센트 준칙'을 제안했습니다.",
      "sourceOrTrivia": "Friedman (1963) A Monetary History of the United States",
      "wrongOptionsReason": [
        "이자율은 화폐의 임대료라는 비공식적 설명 문구입니다.",
        "수요가 공급을 창출한다는 케인스 유효수요 이론의 명제입니다.",
        "공급이 수요를 창출한다는 고전학파 세이의 법칙입니다.",
        "정답입니다. 과도한 통화 발행이 인플레이션의 원인임을 밝힌 프리드먼의 명언입니다."
      ]
    },
    {
      "id": "ultra_ec_21",
      "topic": "경제 & 금융",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "금융기관의 부실이나 파산 소문이 퍼져 대량의 예금자들이 예금을 한꺼번에 인출하기 위해 은행 창구로 몰려드는 대규모 인출 사태는?",
      "options": [
        "뱅크런 (Bank Run)",
        "디폴트 (채무불이행)",
        "모라토리엄 (지불유예)",
        "어닝 쇼크"
      ],
      "correctIndex": 0,
      "explanation": "부분지급준비제도 하에서 은행은 예금의 극히 일부분만 현금으로 보유하므로, 단기간에 대량 인출 요구가 발생하면 건전한 은행도 유동성 부족으로 파산하게 됩니다.",
      "deepKnowledge": "뱅크런의 자기실현적 공포를 방지하기 위해 각국 정부는 예금보험제도(한국은 1인당 5천만 원까지 원리금 보장)와 중앙은행의 최종 대부자 기능을 운영합니다.",
      "sourceOrTrivia": "Diamond & Dybvig (1983) 'Bank Runs, Deposit Insurance, and Liquidity' (2022 노벨상)",
      "wrongOptionsReason": [
        "정답입니다. 대량 예금 인출 사태를 뜻하는 뱅크런입니다.",
        "디폴트는 채무자가 원리금 상환을 이행하지 못하는 파산 상태입니다.",
        "모라토리엄은 국가나 지자체가 채무 상환을 일시 유예하는 선언입니다.",
        "어닝 쇼크는 기업 실적이 시장 예상치에 크게 미달하는 현상입니다."
      ]
    },
    {
      "id": "ultra_ec_22",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "가격이 1% 변할 때 수요량이 몇 % 변하는지를 나타내는 지표로, 쌀이나 인슐린처럼 가격이 변해도 수요량이 거의 변하지 않는 재화를 무엇이라 부르는가?",
      "options": [
        "탄력적 재화 (탄력도 > 1)",
        "비탄력적 재화 (탄력도 < 1)",
        "단위 탄력적 재화",
        "완전 탄력적 재화"
      ],
      "correctIndex": 1,
      "explanation": "생활필수품이나 대체재가 없는 재화는 가격 탄력성이 1보다 작은 비탄력적 특성을 보이며, 가격을 올려도 수요가 크게 줄지 않아 기업의 총수입이 증가합니다.",
      "deepKnowledge": "반면 사치품이나 대체재가 풍부한 재화는 가격 탄력성이 1보다 커서 가격을 인상하면 수요량이 급감해 총수입이 감소합니다.",
      "sourceOrTrivia": "Pindyck & Rubinfeld (2018) Microeconomics, 9th Edition",
      "wrongOptionsReason": [
        "탄력적 재화는 가격 변화율보다 수요량 변화율이 더 큰 재화입니다.",
        "정답입니다. 가격 변화에 둔감한 비탄력적 재화입니다.",
        "단위 탄력적 재화는 가격 변화율과 수요량 변화율이 정확히 같은 재화입니다.",
        "완전 탄력적 재화는 아주 미세한 가격 변화에도 수요량이 무한히 변하는 재화입니다."
      ]
    },
    {
      "id": "ultra_ec_23",
      "topic": "경제 & 금융",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "1970년대 오일 쇼크 당시 실업률과 인플레이션이 상충 관계에 있다는 고전 필립스 곡선의 전제를 깨뜨리고, 경기 불황(Stagnation)과 고물가(Inflation)가 동시에 결합되어 발생한 경제 위기는?",
      "options": [
        "하이퍼인플레이션",
        "디플레이션 (Deflation)",
        "스태그플레이션 (Stagflation)",
        "리세션"
      ],
      "correctIndex": 2,
      "explanation": "공급 측면의 원자재 가격 충격(비용 인상 인플레이션)으로 총공급(AS) 곡선이 좌측 이동하면서, 생산량 감소(실업 증가)와 물가 상승이 동시에 일어나는 최악의 상황입니다.",
      "deepKnowledge": "이 위기로 인해 케인스주의 총수요 관리 정책의 한계가 노정되었고 통화주의와 합리적 기대 가설이 부상했습니다.",
      "sourceOrTrivia": "Blinder (1979) Economic Policy and the Great Stagflation",
      "wrongOptionsReason": [
        "하이퍼인플레이션은 물가가 통제 불능으로 수백~수천% 폭등하는 현상입니다.",
        "디플레이션은 전반적인 물가 수준이 지속적으로 하락하는 현상입니다.",
        "정답입니다. 불황과 고물가의 동시 결합인 스태그플레이션입니다.",
        "리세션은 단순한 경기 후퇴기를 의미합니다."
      ]
    },
    {
      "id": "ultra_ec_24",
      "topic": "경제 & 금융",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "영국의 경제학자 아서 피구(Arthur Pigou)가 제안한 정책으로, 환경 오염이나 교통 혼잡 같은 부정적 외부효과를 유발하는 경제 주체에게 사회적 한계 피해액만큼 세금을 부과하여 시장 실패를 교정하는 조세는?",
      "options": [
        "누진소득세",
        "토빈세 (Tobin Tax)",
        "부가가치세",
        "피구세 (Pigouvian Tax / 교정세)"
      ],
      "correctIndex": 3,
      "explanation": "탄소세나 혼잡통행료처럼 외부 불경제를 유발하는 사적 한계비용에 세금을 얹어 사회적 한계비용과 일치시킴으로써 효율적 자원 배분을 회복시키는 친시장적 환경 규제입니다.",
      "deepKnowledge": "환경세를 징수하여 얻은 세수로 다른 왜곡적 세금(소득세, 법인세)을 감면해 경제 효율과 환경 개선을 동시에 달성하는 것을 '이중 배당 가설(Double Dividend Hypothesis)'이라고 합니다.",
      "sourceOrTrivia": "Pigou (1920) The Economics of Welfare / Baumol (1972)",
      "wrongOptionsReason": [
        "누진소득세는 소득이 많을수록 높은 세율을 적용하는 직접세입니다.",
        "토빈세는 단기 투기성 외환 거래에 부과하는 세금입니다.",
        "부가가치세는 상품 유통 단계마다 창출된 부가가치에 매기는 일반 소비세입니다.",
        "정답입니다. 부정적 외부효과를 내부화하는 피구세입니다."
      ]
    },
    {
      "id": "ultra_ec_25",
      "topic": "경제 & 금융",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "무역 상대국에 비해 특정 재화를 생산하는 '기회비용'이 더 낮은 국가가 해당 재화의 생산에 특화하여 무역을 하면 양국 모두에게 이익이 발생한다는 데이비드 리카도의 무역 이론은?",
      "options": [
        "비교우위론 (Comparative Advantage)",
        "절대우위론 (Absolute Advantage)",
        "중상주의 보호무역론",
        "헥셔-올린 모형"
      ],
      "correctIndex": 0,
      "explanation": "애덤 스미스의 절대우위론은 모든 면에서 열위에 있는 국가는 무역 이익을 얻지 못한다고 보았으나, 리카도는 상대적 기회비용이 낮으면 무조건 무역 이익이 발생함을 입증했습니다.",
      "deepKnowledge": "컴퓨터 타이핑을 변호사가 비서보다 절대적으로 더 빨리 치더라도, 변호사는 법률 상담에 특화하고 타이핑은 비서에게 맡기는 것이 상호 기회비용상 훨씬 유리한 것과 같은 원리입니다.",
      "sourceOrTrivia": "Ricardo (1817) On the Principles of Political Economy and Taxation",
      "wrongOptionsReason": [
        "정답입니다. 기회비용의 차이에 기반한 자유무역의 근간 비교우위론입니다.",
        "절대우위론은 단순 생산비용의 절대적 우위를 비교한 이론입니다.",
        "중상주의는 수출을 늘리고 수입을 막아 금은을 축적하려던 17세기 보호주의입니다.",
        "헥셔-올린 모형은 생산 요소(자본, 노동)의 부존량 차이로 무역 구조를 설명하는 모형입니다."
      ]
    }
  ],
  "psychology_brain": [
    {
      "id": "ultra_psy_1",
      "topic": "심리학 & 인지과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "이반 파블로프가 개의 침샘 분비 실험을 통해 밝혀낸 학습 원리로, 먹이(무조건 자극)와 종소리(조건 자극)를 반복 결합하여 나중에는 종소리만 들어도 침을 흘리게 만드는 학습은?",
      "options": [
        "고전적 조건형성 (Classical Conditioning)",
        "조작적 조건형성",
        "사회학습이론",
        "통찰학습"
      ],
      "correctIndex": 0,
      "explanation": "고전적 조건형성은 본래 생리적 반응을 유발하지 않던 중립 자극이 무조건 자극과 짝지어짐으로써 동일한 반사 반응을 유도하도록 학습되는 연합 학습의 기초입니다.",
      "deepKnowledge": "존 왓슨은 이 원리를 인간에게 적용하여 흰쥐와 쇳소리를 짝지어 공포를 조건화한 악명 높은 '어린 앨버트 실험(1920)'을 진행했습니다.",
      "sourceOrTrivia": "Pavlov (1927) Conditioned Reflexes",
      "wrongOptionsReason": [
        "정답입니다. 자극과 반응의 연합 학습인 고전적 조건형성입니다.",
        "조작적 조건형성은 스키너의 보상과 처벌을 통한 자발적 행동 학습입니다.",
        "사회학습이론은 반두라의 타인 관찰과 모방을 통한 학습 이론입니다.",
        "통찰학습은 쾰러 침팬지 실험처럼 아하!(Aha!) 경험으로 문제를 해결하는 학습입니다."
      ]
    },
    {
      "id": "ultra_psy_2",
      "topic": "심리학 & 인지과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "에이브러햄 매슬로가 1943년 제안한 동기 이론으로, 인간의 욕구는 생리적 욕구부터 안전, 소속, 존중을 거쳐 가장 상위의 이 욕구로 피라미드처럼 위계화된다고 본 최고 단계 욕구는?",
      "options": [
        "소속의 욕구",
        "자아실현의 욕구 (Self-Actualization)",
        "안전의 욕구",
        "생리적 욕구"
      ],
      "correctIndex": 1,
      "explanation": "자아실현 욕구는 자신의 고유한 잠재력과 재능을 최대로 발휘하여 자신이 될 수 있는 최고의 인간이 되고자 하는 성장 욕구입니다.",
      "deepKnowledge": "하위의 결핍 욕구(생리, 안전, 소속, 존중)가 일정 수준 충족되어야만 상위의 자아실현 욕구가 본격적으로 발현된다고 설명했습니다.",
      "sourceOrTrivia": "Maslow (1943) 'A Theory of Human Motivation', Psychological Review",
      "wrongOptionsReason": [
        "소속의 욕구는 3단계 사회적 관계 욕구입니다.",
        "정답입니다. 매슬로 욕구 위계의 최정점에 위치한 자아실현 욕구입니다.",
        "안전의 욕구는 2단계 신체적·경제적 안전 욕구입니다.",
        "생리적 욕구는 1단계 의식주와 수면의 원초적 욕구입니다."
      ]
    },
    {
      "id": "ultra_psy_3",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "리언 페스팅거(Leon Festinger)가 정립한 이론으로, 자신의 신념과 행동이 서로 모순될 때 심리적 불편감을 느끼며, 이를 해소하기 위해 행동을 바꾸기보다 신념이나 태도를 합리화하는 현상은?",
      "options": [
        "피그말리온 효과",
        "후광 효과",
        "인지 부조화 (Cognitive Dissonance)",
        "초두 효과"
      ],
      "correctIndex": 2,
      "explanation": "페스팅거의 '1달러-20달러 실험'에서 거짓말을 하고 고작 1달러를 받은 피험자는 부조화를 해소하기 위해 '과제가 진짜 재미있었다'고 스스로의 신념을 바꾸었습니다.",
      "deepKnowledge": "이솝 우화의 여우가 높은 가지의 포도를 따지 못하자 '저 포도는 신 포도일 거야'라고 단념하는 것이 인지 부조화 해소의 고전적 비유입니다.",
      "sourceOrTrivia": "Festinger (1957) A Theory of Cognitive Dissonance",
      "wrongOptionsReason": [
        "피그말리온 효과는 타인의 기대나 격려가 실제 수행 성과 향상으로 이어지는 현상입니다.",
        "후광 효과는 어떤 대상의 매력적인 한 가지 특성이 다른 특성 평가까지 긍정적으로 왜곡하는 현상입니다.",
        "정답입니다. 신념과 행동의 불일치 시 태도를 바꾸는 인지 부조화입니다.",
        "초두 효과는 먼저 제시된 정보가 나중 정보보다 기억과 인상에 더 강하게 남는 현상입니다."
      ]
    },
    {
      "id": "ultra_psy_4",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "자신의 신념이나 가설과 일치하는 정보만 적극적으로 찾아서 신뢰하고, 그에 반대되는 명백한 객관적 증거는 의도적으로 무시하거나 과소평가하는 인간의 인지적 편향은?",
      "options": [
        "사후과잉확신 편향",
        "닻내림 효과 (앵커링)",
        "가용성 휴리스틱",
        "확증 편향 (Confirmation Bias)"
      ],
      "correctIndex": 3,
      "explanation": "확증 편향은 소셜 미디어 알고리즘의 필터 버블(Filter Bubble)과 결합하여 현대 사회의 정치적 양극화와 가짜뉴스 맹신을 부추기는 가장 파괴적인 인지 편향입니다.",
      "deepKnowledge": "피터 와슨(Peter Wason)의 '2-4-6 과제'와 '네 장의 카드 선택 실험'은 인간이 반증하려 하지 않고 오직 확증 증거만 탐색하는 경향을 입증했습니다.",
      "sourceOrTrivia": "Wason (1960) Quarterly Journal of Experimental Psychology",
      "wrongOptionsReason": [
        "사후과잉확신 편향은 일이 벌어진 후 '내 그럴 줄 알았어'라고 착각하는 편향입니다.",
        "닻내림 효과는 처음에 제시된 숫자에 얽매여 판단을 내리는 편향입니다.",
        "가용성 휴리스틱은 머릿속에 쉽게 떠오르는 사례를 바탕으로 확률을 과대평가하는 편향입니다.",
        "정답입니다. 보고 싶은 것만 보고 믿는 확증 편향입니다."
      ]
    },
    {
      "id": "ultra_psy_5",
      "topic": "심리학 & 인지과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "스탠리 밀그램이 1961년 예일대에서 실시한 사회심리학 실험으로, 권위 있는 연구원의 지시를 받은 평범한 피험자들이 비명을 지르는 상대방에게 치명적인 450볼트 전기 충격을 가하는 비율이 무려 65%에 달했던 실험은?",
      "options": [
        "권위에 대한 복종 실험 (Milgram Obedience Experiment)",
        "스탠퍼드 감옥 실험",
        "애시의 동조 실험",
        "방관자 효과 실험"
      ],
      "correctIndex": 0,
      "explanation": "밀그램 실험은 나치 전범 아이히만처럼 평범한 인간도 권위의 명령 체계 속에서 도덕적 판단을 유보하고 잔혹한 악행을 기계적으로 자행할 수 있음을 폭로했습니다.",
      "deepKnowledge": "한나 아렌트가 제시한 '악의 평범성(Banality of Evil)' 개념을 실험실 환경에서 심리학적으로 완벽히 검증한 실험으로 평가받습니다.",
      "sourceOrTrivia": "Milgram (1963) Journal of Abnormal and Social Psychology 67",
      "wrongOptionsReason": [
        "정답입니다. 인간의 권위 복종 취약성을 폭로한 밀그램 복종 실험입니다.",
        "스탠퍼드 감옥 실험은 짐바르도가 간수와 죄수 역할을 맡겨 탈개인화를 관찰한 실험입니다.",
        "애시 동조 실험은 집단 압력에 굴복해 뻔한 오답 선을 고르는 실험입니다.",
        "방관자 효과 실험은 사람이 많을수록 위급 상황에 도움을 주지 않는 실험입니다."
      ]
    },
    {
      "id": "ultra_psy_6",
      "topic": "심리학 & 인지과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "특정 분야에 대한 지식이나 능력이 부족한 사람일수록 자신의 실력을 과도하게 과신하고, 반대로 실제 전문성을 갖춘 고수는 자신의 능력을 과소평가하는 인지적 착각 현상은?",
      "options": [
        "피터의 법칙",
        "더닝-크루거 효과 (Dunning-Kruger Effect)",
        "임포스터 증후군 (가면 증후군)",
        "스톡홀름 증후군"
      ],
      "correctIndex": 1,
      "explanation": "데이비드 더닝과 저스틴 크루거 교수가 1999년 밝혀낸 현상으로, '무지는 지식보다 더 확신을 낳는다(찰스 다윈)'는 말을 심리학적으로 실증했습니다.",
      "deepKnowledge": "능력이 부족한 자는 자신의 무지를 인식할 '메타인지(Metacognition)' 능력 자체가 결여되어 있어 터무니없는 근거 없는 자신감의 봉우리에 오르게 됩니다.",
      "sourceOrTrivia": "Kruger & Dunning (1999) Journal of Personality and Social Psychology 77",
      "wrongOptionsReason": [
        "피터의 법칙은 위계 조직에서 모든 직원은 자신의 무능력 수준까지 승진한다는 원리입니다.",
        "정답입니다. 무지와 과신의 역설을 규명한 더닝-크루거 효과입니다.",
        "가면 증후군은 실력이 뛰어난 사람이 자신의 성공을 운 때문이라며 들킬까 봐 불안해하는 심리입니다.",
        "스톡홀름 증후군은 인질이 인질범에게 정서적 공감과 유대를 느끼는 현상입니다."
      ]
    },
    {
      "id": "ultra_psy_7",
      "topic": "심리학 & 인지과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1949년 신경생리학자 도널드 헤브(Donald Hebb)가 제안한 신경가소성 및 학습의 근본 법칙으로, '함께 발화하는 뉴런들은 함께 연결된다(Neurons that fire together, wire together)'는 가설은?",
      "options": [
        "베버의 법칙",
        "알렌의 법칙",
        "헤브의 학습 법칙 (Hebbian Learning)",
        "올포트의 특질 이론"
      ],
      "correctIndex": 2,
      "explanation": "시냅스전 뉴런이 시냅스후 뉴런을 반복적으로 활성화하면 두 뉴런 사이의 시냅스 연결 강도(시냅스 가중치)가 물리적으로 강화된다는 신경망 학습의 기본 규칙입니다.",
      "deepKnowledge": "이 이론은 1973년 블리스와 뢰모가 해마에서 발견한 '장기강화(LTP, Long-Term Potentiation)' 현상을 통해 생물학적으로 완벽히 확인되었습니다.",
      "sourceOrTrivia": "Hebb (1949) The Organization of Behavior / Bliss & Lømo (1973) J. Physiol.",
      "wrongOptionsReason": [
        "베버의 법칙은 자극의 변화를 감지하는 최소 차이가 초기 자극에 비례한다는 정신물리학 법칙입니다.",
        "알렌의 법칙은 추운 지방 동물일수록 말단 부위가 작아진다는 생물학 법칙입니다.",
        "정답입니다. 신경망 시냅스 가소성의 핵심인 헤브의 학습 법칙입니다.",
        "올포트 이론은 인간의 성격을 공통 특질과 개별 특질로 분류한 심리학 이론입니다."
      ]
    },
    {
      "id": "ultra_psy_8",
      "topic": "심리학 & 인지과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "지그문트 프로이트가 정립한 성격의 삼원 구조론에서, 본능적이고 무의식적인 쾌락 원리에 지배되는 '원초아(Id)'와 도덕적 양심과 이상을 대변하는 '초자아(Superego)' 사이에서 현실 원리에 따라 갈등을 중재하는 핵심 자아는?",
      "options": [
        "아니마",
        "페르소나",
        "그림자 (Shadow)",
        "자아 (Ego, 에고)"
      ],
      "correctIndex": 3,
      "explanation": "자아(Ego)는 원초아의 충동적 쾌락 요구와 초자아의 가혹한 도덕적 처벌 요구, 그리고 외부 현실의 제약 사이에서 타협을 조율하며, 불안을 방어하기 위해 방어기제를 동원합니다.",
      "deepKnowledge": "프로이트의 딸 안나 프로이트는 억압, 승화, 투사, 합리화, 반동형성 등 자아가 동원하는 심리적 방어기제를 체계적으로 집대성했습니다.",
      "sourceOrTrivia": "Freud (1923) Das Ich und das Es (자아와 원초아)",
      "wrongOptionsReason": [
        "아니마는 남성의 무의식 속에 존재하는 여성적 원형입니다.",
        "페르소나는 융이 제시한 사회적 가면(외적 인격)입니다.",
        "그림자는 융의 분석심리학에서 억압된 어두운 무의식입니다.",
        "정답입니다. 현실 원리에 따라 갈등을 조율하는 성격의 집행자 자아(Ego)입니다."
      ]
    },
    {
      "id": "ultra_psy_9",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "어떤 사건의 발생 확률을 추정할 때 객관적 통계보다 머릿속에 최근에 접했거나 생생하게 떠오르는 사례(예: 비행기 추락 뉴스)에 의존해 위험을 과대평가하는 인지적 어림셈(휴리스틱)은?",
      "options": [
        "가용성 휴리스틱 (Availability Heuristic)",
        "대표성 휴리스틱",
        "앵커링 휴리스틱",
        "감정 휴리스틱"
      ],
      "correctIndex": 0,
      "explanation": "카너먼과 트버스키가 명명한 가용성 휴리스틱에 따르면, 언론에 자극적으로 보도된 비행기 사고나 상어 공격은 교통사고나 당뇨병보다 훨씬 뇌리에 쉽게 떠올라 실제 확률보다 위험하다고 착각합니다.",
      "deepKnowledge": "사람들이 복권 당첨자의 환호는 생생히 떠올리지만 수백만 명의 꽝 낙첨자는 기억하지 못해 복권을 계속 사는 것도 가용성 휴리스틱 때문입니다.",
      "sourceOrTrivia": "Tversky & Kahneman (1973) Cognitive Psychology 5",
      "wrongOptionsReason": [
        "정답입니다. 기억 회상의 용이성에 휘둘리는 가용성 휴리스틱입니다.",
        "대표성 휴리스틱은 전형적인 스테레오타입과 유사한 정도에 따라 확률을 판단하는 편향입니다.",
        "앵커링은 초기에 주어진 기준 숫자에 끌려다니는 편향입니다.",
        "감정 휴리스틱은 사안에 대한 호불호 감정으로 위험과 이익을 판단하는 어림셈입니다."
      ]
    },
    {
      "id": "ultra_psy_10",
      "topic": "심리학 & 인지과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "1964년 뉴욕에서 키티 제노비스가 살해당할 때 수십 명의 이웃이 비명을 듣고도 아무도 경찰에 신고하지 않은 사건에서 연구된 것으로, 주변에 목격자가 많을수록 책임이 분산되어 위급 환자를 돕지 않는 현상은?",
      "options": [
        "피그말리온 효과",
        "방관자 효과 (Bystander Effect / 제노비스 신드롬)",
        "플라시보 효과",
        "베르테르 효과"
      ],
      "correctIndex": 1,
      "explanation": "존 달리와 밥 라타네 교수는 실험을 통해 혼자 있을 때는 85%의 사람이 즉시 구조에 나섰으나, 4명 이상과 함께 있을 때는 구조율이 31%로 급감함을 증명했습니다.",
      "deepKnowledge": "책임 분산(Diffusion of responsibility)과 함께 '다른 사람들도 가만히 있으니 심각한 일이 아닐 것'이라는 사회적 착각(대중적 무관심)이 결합된 결과입니다.",
      "sourceOrTrivia": "Darley & Latané (1968) Journal of Personality and Social Psychology 8",
      "wrongOptionsReason": [
        "피그말리온 효과는 기대가 성취를 낳는 자기충족적 예언입니다.",
        "정답입니다. 목격자가 많을수록 개입하지 않는 방관자 효과입니다.",
        "플라시보 효과는 가짜 약이 환자의 심리적 믿음으로 치료 효과를 내는 위약 효과입니다.",
        "베르테르 효과는 유명인의 자살을 모방하는 연쇄 자살 현상입니다."
      ]
    },
    {
      "id": "ultra_psy_11",
      "topic": "심리학 & 인지과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "대니얼 카너먼이 저서 '생각에 관한 생각(2011)'에서 집대성한 뇌의 2가지 사고 체계 중, 노력을 들이지 않고 거의 자동적으로 빠르고 직관적으로 작동하는 무의식적 사고 모드는?",
      "options": [
        "전두엽 통제 시스템",
        "시스템 2 (느린 생각, 논리적)",
        "시스템 1 (빠른 생각, 직관적)",
        "메타인지 시스템"
      ],
      "correctIndex": 2,
      "explanation": "시스템 1은 운전, 2+2 계산, 표정 읽기처럼 본능적이고 신속하게 처리하는 자동 조종 장치이며, 시스템 2는 17×24 암산처럼 에너지를 소모하며 깊이 숙고하는 통제적 사고입니다.",
      "deepKnowledge": "인간의 뇌는 인지적 게으름뱅이(Cognitive Miser)여서 대부분의 일상 결정을 시스템 1에 의존하기 때문에 수많은 인지 편향에 노출됩니다.",
      "sourceOrTrivia": "Kahneman (2011) Thinking, Fast and Slow",
      "wrongOptionsReason": [
        "전두엽 통제 시스템은 신경해부학적 용어로 시스템 2와 연결됩니다.",
        "시스템 2는 집중력과 노력이 요구되는 느리고 숙고적인 논리적 모드입니다.",
        "정답입니다. 직관적이고 자동적인 무의식적 인지 모드인 시스템 1입니다.",
        "메타인지는 자신의 사고 과정을 반성하고 조율하는 상위 인지입니다."
      ]
    },
    {
      "id": "ultra_psy_12",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "장 피아제(Jean Piaget)의 인지발달 4단계 이론 중, 눈앞에서 물체가 사라져도 그것이 공간 어딘가에 여전히 존재한다는 '대상영속성(Object Permanence)'을 획득하는 발달 단계는?",
      "options": [
        "형식적 조작기 (11세 이상)",
        "전조작기 (2~7세)",
        "구체적 조작기 (7~11세)",
        "감각운동기 (0~2세)"
      ],
      "correctIndex": 3,
      "explanation": "감각운동기 영아는 생후 8개월경부터 대상영속성을 획득하여, 장난감을 담요로 덮어도 사라진 것이 아니라 숨겨져 있음을 알고 찾아냅니다(까꿍놀이의 원리).",
      "deepKnowledge": "전조작기는 자기중심성과 보존개념 결여가 특징이며, 구체적 조작기에는 보존개념을 획득하고, 형식적 조작기에는 추상적 가설 연역 추론이 가능해집니다.",
      "sourceOrTrivia": "Piaget (1952) The Origins of Intelligence in Children",
      "wrongOptionsReason": [
        "형식적 조작기는 추상적 논리와 가설 검증이 가능한 성인기 사고 단계입니다.",
        "전조작기는 상징 놀이와 언어가 발달하지만 직관적 사고에 머무는 단계입니다.",
        "구체적 조작기는 가역성과 서열화, 보존 개념을 논리적으로 조작하는 단계입니다.",
        "정답입니다. 대상영속성을 습득하는 최초의 인지발달 단계인 감각운동기입니다."
      ]
    },
    {
      "id": "ultra_psy_13",
      "topic": "심리학 & 인지과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "단기 기억(작업 기억)의 용량 한계에 관한 조지 밀러(George Miller)의 1956년 기념비적 논문에서 밝혀낸 마법의 숫자 범위는?",
      "options": [
        "7 ± 2 개 (5~9개 청크)",
        "3 ± 1 개",
        "12 ± 2 개",
        "20 ± 5 개"
      ],
      "correctIndex": 0,
      "explanation": "인간의 단기 기억은 무의미한 정보를 한 번에 약 7개(5~9개)의 덩어리(청크, Chunk)만 보지할 수 있으므로, 정보를 의미 있는 단위로 묶는 청킹(Chunking)이 암기에 필수적입니다.",
      "deepKnowledge": "전화번호를 010-1234-5678처럼 3~4자리로 끊어서 표기하는 이유가 바로 이 단기 기억 용량 한계 때문입니다.",
      "sourceOrTrivia": "Miller (1956) 'The Magical Number Seven, Plus or Minus Two', Psychological Review",
      "wrongOptionsReason": [
        "정답입니다. 단기 기억 용량의 한계를 밝힌 마법의 숫자 7±2입니다.",
        "3±1은 넬슨 코완이 순수 집중 주의 용량으로 재수정한 일부 연구의 수치입니다.",
        "12개는 일반적인 단기 기억 용량을 훨씬 초과하는 수치입니다.",
        "20개는 단기 기억의 용량이 될 수 없습니다."
      ]
    },
    {
      "id": "ultra_psy_14",
      "topic": "심리학 & 인지과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "뇌의 측두엽 안쪽에 위치하며, 새로운 경험과 사실을 단기 기억에서 영구적인 장기 기억으로 고착화(Consolidation)하는 데 결정적인 역할을 수행하는 뇌 부위는?",
      "options": [
        "편도체 (Amygdala)",
        "해마 (Hippocampus)",
        "소뇌",
        "시상 (Thalamus)"
      ],
      "correctIndex": 1,
      "explanation": "뇌전증 치료를 위해 양측 해마를 절제했던 유명한 환자 H.M.(헨리 몰레이슨)의 사례를 통해 해마가 새로운 외현 기억(서술 기억) 형성의 관문임이 밝혀졌습니다.",
      "deepKnowledge": "해마가 손상되면 과거의 기억은 유지되지만 수술 이후의 새로운 사건을 단 몇 분도 기억하지 못하는 순행성 건망증(Anterograde Amnesia)이 발생합니다.",
      "sourceOrTrivia": "Scoville & Milner (1957) J. Neurol. Neurosurg. Psychiatry 20",
      "wrongOptionsReason": [
        "편도체는 공포와 분노 등 정서 기억을 관장하는 부위입니다.",
        "정답입니다. 장기 기억 형성의 핵심 중추인 해마입니다.",
        "소뇌는 자전거 타기 같은 비서술적 절차 기억과 운동 조절을 담당합니다.",
        "시상은 후각을 제외한 모든 감각 신호를 대뇌피질로 중계하는 정거장입니다."
      ]
    },
    {
      "id": "ultra_psy_15",
      "topic": "심리학 & 인지과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "솔로몬 애시(Solomon Asch)가 1951년 실시한 실험으로, 명백히 길이가 다른 선분을 고르는 쉬운 과제에서 다른 모든 참가자(실험 협조자)들이 한목소리로 엉뚱한 오답을 외칠 때 피험자의 75%가 집단 압력에 굴복해 오답을 따랐던 현상은?",
      "options": [
        "사회적 촉진",
        "사회적 태만",
        "동조 현상 (Conformity / 애시 실험)",
        "집단 극화"
      ],
      "correctIndex": 2,
      "explanation": "애시의 실험은 인간이 자신의 눈으로 본 명백한 물리적 진실보다도 집단에서 이탈하여 소외당하는 두려움(규범적 사회 영향) 때문에 오답에 굴복하는 나약함을 여실히 보여주었습니다.",
      "deepKnowledge": "그러나 협조자 중 단 한 명이라도 올바른 정답을 말하는 동맹군(Dissenter)이 존재하면 동조율이 4분의 1로 급감했습니다.",
      "sourceOrTrivia": "Asch (1951) Effects of group pressure upon the modification and distortion of judgments",
      "wrongOptionsReason": [
        "사회적 촉진은 타인이 지켜볼 때 단순 과제 수행 능률이 오르는 현상입니다.",
        "사회적 태만은 집단 작업 시 개인의 노력이 분산되어 게을러지는 링겔만 효과입니다.",
        "정답입니다. 집단 압력에 굴복하는 동조 현상입니다.",
        "집단 극화는 집단 토론을 거치며 구성원들의 의견이 더 극단적으로 치우치는 현상입니다."
      ]
    },
    {
      "id": "ultra_psy_16",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "헤르만 에빙하우스(Hermann Ebbinghaus)의 기억 실험에서 학습 직후 20분 만에 42%, 하루 만에 66%의 기억이 급격히 사라진다는 사실을 밝혀낸 유명한 곡선은?",
      "options": [
        "정규분포 곡선",
        "학습 곡선",
        "반응 시간 곡선",
        "망각 곡선 (Forgetting Curve)"
      ],
      "correctIndex": 3,
      "explanation": "에빙하우스는 무의미 철자(ZOF 등)를 암기하는 자기 실험을 통해 망각은 학습 직후 가장 가파르게 일어나므로, 일정한 시간 간격을 두고 반복 복습하는 '간격 효과(Spaced Effect)'가 필수적임을 입증했습니다.",
      "deepKnowledge": "이 망각곡선 이론은 오늘날 앙키(Anki) 등 전 세계 수험생들이 활용하는 분산 반복 학습(Spaced Repetition System, SRS)의 과학적 뼈대입니다.",
      "sourceOrTrivia": "Ebbinghaus (1885) Über das Gedächtnis",
      "wrongOptionsReason": [
        "정규분포 곡선은 가우스 벨 모양의 확률분포 곡선입니다.",
        "학습 곡선은 연습 횟수가 늘어남에 따라 숙련도가 향상되는 곡선입니다.",
        "반응 시간 곡선은 자극 제시 후 반응까지 걸리는 시간을 나타낸 그래프입니다.",
        "정답입니다. 시간에 따른 기억 유실을 수치화한 에빙하우스 망각곡선입니다."
      ]
    },
    {
      "id": "ultra_psy_17",
      "topic": "심리학 & 인지과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "물건의 초기 가격이나 협상 테이블에서 맨 처음 제시된 숫자가 일종의 닻(Anchor) 역할을 하여, 그 이후의 모든 판단과 가치 평가가 그 기준점 주변으로 강하게 편향되는 현상은?",
      "options": [
        "닻내림 효과 (앵커링 효과, Anchoring Effect)",
        "프레이밍 효과",
        "소유 효과",
        "사후과잉확신 편향"
      ],
      "correctIndex": 0,
      "explanation": "카너먼과 트버스키의 실험에서 룰렛을 돌려 무작위로 나온 숫자(10 또는 65)를 본 피험자들은 UN에 가입된 아프리카 국가 비율을 추정할 때 그 무관한 숫자에 크게 끌려다녔습니다.",
      "deepKnowledge": "정가 100만 원에 줄을 긋고 '특별 세일가 49만 원'으로 표시하는 마케팅 기법이 바로 닻내림 효과를 이용해 소비자가 싸다고 착각하게 만드는 전형적 상술입니다.",
      "sourceOrTrivia": "Tversky & Kahneman (1974) Science 185",
      "wrongOptionsReason": [
        "정답입니다. 최초 제시된 숫자에 얽매이는 닻내림(앵커링) 효과입니다.",
        "프레이밍 효과는 동일한 문제를 긍정적 틀(생존율 90%)이나 부정적 틀(사망률 10%)로 제시함에 따라 선택이 바뀌는 현상입니다.",
        "소유 효과는 자신이 소유한 물건에 대해 객관적 가치보다 더 높은 가치를 부여하는 현상입니다.",
        "사후과잉확신은 결과가 나온 뒤 자신이 이미 알고 있었다고 믿는 편향입니다."
      ]
    },
    {
      "id": "ultra_psy_18",
      "topic": "심리학 & 인지과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "어떤 사람의 단 한 가지 두드러진 긍정적인 특성(예: 뛰어난 외모나 학벌) 때문에 그 사람의 지능, 도덕성, 업무 능력 등 나머지 모든 특성까지 무조건 훌륭할 것이라고 좋게 평가하는 지각 오류는?",
      "options": [
        "악마 효과 (Horn Effect)",
        "후광 효과 (Halo Effect)",
        "투사 효과",
        "대비 효과"
      ],
      "correctIndex": 1,
      "explanation": "에드워드 손다이크(Edward Thorndike)가 1920년 명명한 인지 편향으로, 군대 장교들이 외모가 준수한 병사를 지능과 리더십까지 뛰어날 것으로 평가하는 실험에서 입증되었습니다.",
      "deepKnowledge": "반대로 단 하나의 부정적인 특성 때문에 그 사람의 다른 모든 장점까지 깎아내려 나쁘게 보는 것을 '악마 효과(Horn Effect)'라고 합니다.",
      "sourceOrTrivia": "Thorndike (1920) 'A Constant Error in Psychological Ratings'",
      "wrongOptionsReason": [
        "악마 효과는 단 하나의 결점이 전체를 부정적으로 보이게 만드는 반대 현상입니다.",
        "정답입니다. 첫인상이나 외모가 전체 평가를 지배하는 후광 효과입니다.",
        "투사 효과는 자신의 생각이나 약점을 타인에게 뒤집어씌워 지각하는 오류입니다.",
        "대비 효과는 바로 앞선 대상과의 차이로 인해 평가가 과장되는 오류입니다."
      ]
    },
    {
      "id": "ultra_psy_19",
      "topic": "심리학 & 인지과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "위험이나 공포 자극을 감지했을 때 교감신경계를 폭발적으로 활성화하여 심장 박동을 높이고 혈류를 근육으로 몰아 즉각 전투를 벌이거나 도망치도록 유도하는 신체적 생존 반응은?",
      "options": [
        "일반적응증후군",
        "이완 반응",
        "투쟁-도피 반응 (Fight-or-Flight Response)",
        "자기보호반응"
      ],
      "correctIndex": 2,
      "explanation": "월터 캐넌(Walter Cannon)이 규명한 적응적 생리 반응으로, 뇌의 편도체가 시상하부를 자극하고 부신수질에서 아드레날린과 노르아드레날린을 혈액으로 쏟아붓습니다.",
      "deepKnowledge": "현대인들은 맹수가 없는 일상에서도 직장 스트레스나 만성 불안으로 투쟁-도피 반응이 지속적으로 켜져 있어 고혈압, 면역 저하, 번아웃을 겪게 됩니다.",
      "sourceOrTrivia": "Cannon (1915) Bodily Changes in Pain, Hunger, Fear and Rage",
      "wrongOptionsReason": [
        "일반적응증후군은 한스 셀리에의 스트레스 3단계(경보-저항-탈진) 모델입니다.",
        "이완 반응은 부교감신경이 활성화되어 심박이 안정되는 반대 상태입니다.",
        "정답입니다. 원시 생존을 위한 자율신경계 반응인 투쟁-도피 반응입니다.",
        "자기보호반응은 비공식적 기술어입니다."
      ]
    },
    {
      "id": "ultra_psy_20",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "B.F. 스키너의 조작적 조건형성에서 유기체가 바람직한 행동을 했을 때, 싫어하는 불쾌한 자극(예: 청소 면제, 소음 제거)을 없애줌으로써 그 행동의 빈도를 증가시키는 강화 방식은?",
      "options": [
        "부적 처벌",
        "정적 강화 (Positive Reinforcement)",
        "정적 처벌",
        "부적 강화 (Negative Reinforcement)"
      ],
      "correctIndex": 3,
      "explanation": "강화(Reinforcement)는 행동을 늘리는 것이며, 부적(Negative)은 자극을 '제거'한다는 뜻이므로, 불쾌한 자극을 제거해 주어 좋은 행동을 강화하는 것이 부적 강화입니다.",
      "deepKnowledge": "안전벨트를 매지 않았을 때 삐- 하고 울리는 불쾌한 경고음은 벨트를 매게 만드는 전형적인 부적 강화의 공학적 설계입니다.",
      "sourceOrTrivia": "Skinner (1938) The Behavior of Organisms",
      "wrongOptionsReason": [
        "부적 처벌은 스마트폰 압수처럼 좋아하는 자극을 '박탈'하여 나쁜 행동을 줄이는 것입니다.",
        "정적 강화는 칭찬, 사탕 등 기분 좋은 자극을 '제공'하여 행동을 늘리는 것입니다.",
        "정적 처벌은 체벌 등 불쾌한 자극을 '부여'하여 나쁜 행동을 줄이는 것입니다.",
        "정답입니다. 불쾌 자극을 제거하여 바람직한 행동을 촉진하는 부적 강화입니다."
      ]
    },
    {
      "id": "ultra_psy_21",
      "topic": "심리학 & 인지과학",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "필립 짐바르도(Philip Zimbardo) 교수가 1971년 진행한 모의 감옥 실험으로, 평범한 대학생들에게 교도관과 죄수 역할을 무작위로 부여하자 교도관들이 극단적인 가학성과 폭력성을 보이며 6일 만에 조기 중단된 실험은?",
      "options": [
        "스탠퍼드 감옥 실험 (Stanford Prison Experiment)",
        "밀그램 복종 실험",
        "로버스 케이브 실험",
        "몬스터 실험"
      ],
      "correctIndex": 0,
      "explanation": "인간의 사악함은 타고난 성격 탓이 아니라 제복, 지위, 규칙이라는 사회적 '상황의 힘(Power of the Situation)'과 탈개인화(Deindividuation)에 의해 조장된다는 충격적 사실을 증명했습니다.",
      "deepKnowledge": "짐바르도는 이후 이 연구를 발전시켜 평범하고 선량한 인간이 상황적 악에 물들어 타락하는 현상을 '루시퍼 효과(The Lucifer Effect)'로 명명했습니다.",
      "sourceOrTrivia": "Haney, Banks, Zimbardo (1973) International Journal of Criminology and Penology 1",
      "wrongOptionsReason": [
        "정답입니다. 상황의 힘과 탈개인화의 위험을 경고한 스탠퍼드 감옥 실험입니다.",
        "밀그램 복종 실험은 권위자의 명령에 따라 전기 충격을 가하는 실험입니다.",
        "로버스 케이브 실험은 무자퍼 셰리프의 소년 캠프 내집단-외집단 갈등 실험입니다.",
        "몬스터 실험은 웬델 존슨의 고아원 아동 대상 말더듬 유발 비윤리적 실험입니다."
      ]
    },
    {
      "id": "ultra_psy_22",
      "topic": "심리학 & 인지과학",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "환자에게 아무런 약효가 없는 가짜 포도당 알약(위약)을 투여했음에도 불구하고, 환자가 진짜 효과적인 명약이라고 굳게 믿음으로써 실제로 질병 증상이 호전되는 심신 반응은?",
      "options": [
        "노시보 효과 (Nocebo Effect)",
        "플라시보 효과 (위약 효과, Placebo Effect)",
        "후광 효과",
        "바넘 효과"
      ],
      "correctIndex": 1,
      "explanation": "라틴어로 '내가 기쁘게 해주리라'는 뜻의 플라시보는 뇌에서 내인성 엔도르핀과 도파민이 실제로 분비되어 통증이 완화되는 실재하는 신경생물학적 현상입니다.",
      "deepKnowledge": "반대로 부작용이 없을 약인데도 부작용이 생길 것이라는 불안한 암시 때문에 실제로 부작용과 통증을 겪는 현상을 '노시보 효과(Nocebo Effect)'라고 부릅니다.",
      "sourceOrTrivia": "Beecher (1955) 'The Powerful Placebo', JAMA",
      "wrongOptionsReason": [
        "노시보 효과는 부정적 불신 때문에 실제로 몸 상태가 나빠지는 반대 현상입니다.",
        "정답입니다. 긍정적 믿음이 신체적 치유를 이끄는 플라시보 효과입니다.",
        "후광 효과는 한 가지 매력이 전체 인상을 좋게 만드는 인지 편향입니다.",
        "바넘 효과는 보편적인 성격 묘사를 자기만의 특별한 이야기로 믿는 현상입니다."
      ]
    },
    {
      "id": "ultra_psy_23",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "MBTI나 혈액형별 성격, 별자리 운세처럼 누구에게나 두루 들어맞는 애매하고 일반적인 성격 묘사를 듣고, 그것이 바로 자기 자신만을 콕 집어 맞춘 정확한 분석이라고 철석같이 믿는 심리 현상은?",
      "options": [
        "자이가르닉 효과",
        "스트룹 효과",
        "바넘 효과 (Barnum Effect / 포러 효과)",
        "칵테일 파티 효과"
      ],
      "correctIndex": 2,
      "explanation": "서커스 창시자 P.T. 바넘의 '우리는 모든 사람을 만족시킬 수 있는 무언가를 가지고 있다'는 말에서 유래하였으며, 버트럼 포러(Bertram Forer)가 1948년 성격 검사 실험으로 실증했습니다.",
      "deepKnowledge": "'당신은 겉으로는 외향적이지만 속으로는 혼자만의 시간을 갈망합니다' 같은 문장은 누구에게나 해당되므로 사람들은 신통하게 맞췄다고 감탄합니다.",
      "sourceOrTrivia": "Forer (1949) Journal of Abnormal and Social Psychology 44",
      "wrongOptionsReason": [
        "자이가르닉 효과는 끝마친 일보다 중단되거나 미완성된 일이 뇌리에 더 오래 남는 현상입니다.",
        "스트룹 효과는 글자의 의미와 글자 색상이 불일치할 때 색상 판독이 지연되는 현상입니다.",
        "정답입니다. 운세와 사이비 성격 검사의 심리적 비결인 바넘 효과입니다.",
        "칵테일 파티 효과는 시끄러운 파티장에서도 자기 이름이나 관심 대화만 쏙 골라 듣는 주의 집중 현상입니다."
      ]
    },
    {
      "id": "ultra_psy_24",
      "topic": "심리학 & 인지과학",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "학습과 경험, 환경의 변화, 뇌 손상에 대응하여 성인의 뇌도 평생에 걸쳐 신경세포 사이의 연결을 새롭게 만들고 시냅스 회로를 끊임없이 재구성할 수 있다는 뇌과학의 현대적 핵심 명제는?",
      "options": [
        "신경결정론",
        "골상학 (Phrenology)",
        "뇌 기능 국지화의 절대성",
        "신경가소성 (Neuroplasticity)"
      ],
      "correctIndex": 3,
      "explanation": "과거 뇌세포는 성인이 되면 더 이상 생성되지 않고 퇴화하기만 한다는 고정관념을 깨부수고, 뇌는 훈련과 학습을 통해 새로운 시냅스 경로를 확장하는 가변적 네트워크임이 입증되었습니다.",
      "deepKnowledge": "런던의 복잡한 도로망을 수년간 외우고 시험을 통과한 택시 기사들의 공간 기억 중추인 후두 해마 부피가 일반인보다 유의미하게 커진다는 사실이 fMRI로 증명되었습니다.",
      "sourceOrTrivia": "Maguire et al. (2000) PNAS 97, 4398-4403",
      "wrongOptionsReason": [
        "신경결정론은 뇌 구조가 인간의 운명을 결정한다는 생물학적 환원론입니다.",
        "골상학은 머리뼈의 융기 모양으로 성격을 진단하던 폐기된 19세기 유사과학입니다.",
        "국지화의 절대성은 뇌의 특정 부위가 손상되면 영원히 기능이 불가능하다는 과거의 경직된 모델입니다.",
        "정답입니다. 평생에 걸쳐 뇌 회로가 재편되는 신경가소성입니다."
      ]
    },
    {
      "id": "ultra_psy_25",
      "topic": "심리학 & 인지과학",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "칼 융(Carl Jung)의 분석심리학에서 인간이 사회적 기대와 역할에 부응하기 위해 대외적으로 착용하는 '사회적 가면'을 뜻하는 개념은?",
      "options": [
        "페르소나 (Persona)",
        "그림자 (Shadow)",
        "아니마 (Anima)",
        "자기 (Self)"
      ],
      "correctIndex": 0,
      "explanation": "고대 그리스 연극에서 배우들이 쓰던 가면에서 유래한 말로, 사회생활을 영위하는 데 필수적인 적응 도구이지만 지나치게 동일시하면 참된 내면의 자기를 잃어버리고 소외됩니다.",
      "deepKnowledge": "융은 페르소나 이면에 억압된 어두운 무의식적 자아를 '그림자(Shadow)'라고 부르며, 그림자를 인정하고 통합하는 개성화(Individuation)를 강조했습니다.",
      "sourceOrTrivia": "Jung (1928) Two Essays on Analytical Psychology",
      "wrongOptionsReason": [
        "정답입니다. 사회적 역할과 적응을 위한 외적 인격 페르소나입니다.",
        "그림자는 사회적으로 수용되지 못해 무의식에 억압된 어두운 본성입니다.",
        "아니마는 남성의 무의식 속에 자리 잡은 여성적 인격 원형입니다.",
        "자기는 의식과 무의식이 완벽한 전체성을 이룬 중심 원형입니다."
      ]
    }
  ],
  "art_culture": [
    {
      "id": "ultra_art_1",
      "topic": "미술 & 문화예술",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "레오나르도 다빈치가 '모나리자'의 눈가와 입가에 적용한 혁신적인 기법으로, 이탈리아어로 '연기처럼 사라지다'라는 뜻을 지니며 경계선을 칼로 자르듯 그리지 않고 부드럽게 흐릿하게 번지도록 처리한 회화 기법은?",
      "options": [
        "스푸마토 (Sfumato)",
        "키아로스쿠로 (Chiaroscuro)",
        "임파스토 (Impasto)",
        "점묘법 (Pointillism)"
      ],
      "correctIndex": 0,
      "explanation": "스푸마토 기법 덕분에 모나리자의 미소는 보는 각도와 빛에 따라 오묘하게 달라 보이며, 대기의 미세한 공기층을 사실적으로 표현했습니다.",
      "deepKnowledge": "다빈치는 '선(線)은 자연에 존재하지 않는다'며 붓질 자국이 보이지 않도록 수십 번의 극도로 얇은 유채 글레이징 층을 겹쳐 발랐습니다.",
      "sourceOrTrivia": "Vasari (1550) Le Vite de' più eccellenti pittori, scultori, e architettori",
      "wrongOptionsReason": [
        "정답입니다. 연기처럼 경계를 흐려 신비감을 주는 스푸마토 기법입니다.",
        "키아로스쿠로는 극적인 빛과 어둠의 강한 명암 대조법입니다.",
        "임파스토는 물감을 두껍게 덧칠해 마티에르(질감)를 살리는 기법입니다.",
        "점묘법은 쇠라처럼 순색의 점들을 찍어 병치 혼합을 노리는 기법입니다."
      ]
    },
    {
      "id": "ultra_art_2",
      "topic": "미술 & 문화예술",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "후기 인상주의의 거장 빈센트 반 고흐가 생레미 정신병원에 입원해 있을 때 창밖의 밤하늘을 보며 소용돌이치는 붓터치와 찬란한 노란 별빛으로 격정적인 내면을 표출한 불멸의 걸작은?",
      "options": [
        "해바라기",
        "별이 빛나는 밤 (The Starry Night)",
        "밤의 카페 테라스",
        "감자 먹는 사람들"
      ],
      "correctIndex": 1,
      "explanation": "1889년 6월 그려진 '별이 빛나는 밤'은 사이프러스 나무의 솟구침과 역동적인 소용돌이 천공을 통해 고흐의 영혼의 번민과 영적 갈망을 두터운 임파스토로 표현했습니다.",
      "deepKnowledge": "천문학자들의 분석에 따르면 당시 그림 속 거대한 하얀 별은 실제 당시 새벽 동쪽 하늘에서 가장 밝게 빛나던 금성(새벽별)의 실제 위치와 부합합니다.",
      "sourceOrTrivia": "뉴욕 현대미술관(MoMA) 소장 '별이 빛나는 밤'",
      "wrongOptionsReason": [
        "해바라기는 고갱과의 아를 동거를 위해 노란 집을 장식하려 그린 연작입니다.",
        "정답입니다. 요동치는 밤하늘의 걸작 별이 빛나는 밤입니다.",
        "밤의 카페 테라스는 아를 포럼 광장의 가스등 야경을 그린 작품입니다.",
        "감자 먹는 사람들은 네덜란드 초기 가난한 농민들의 노동을 그린 어두운 사실주의 작품입니다."
      ]
    },
    {
      "id": "ultra_art_3",
      "topic": "미술 & 문화예술",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "파블로 피카소가 1907년 발표하여 르네상스 이후 500년간 서양 회화를 지배해 온 단일 시점의 원근법을 해체하고, 다각도의 시점을 한 화면에 입체적으로 재구성한 입체주의(Cubism)의 효시가 된 작품은?",
      "options": [
        "우는 여인",
        "게르니카",
        "아비뇽의 처녀들 (Les Demoiselles d'Avignon)",
        "부채를 든 여인"
      ],
      "correctIndex": 2,
      "explanation": "바르셀로나 아비뇽 거리의 유곽 여인들을 그린 이 작품은 아프리카 가면의 원시적 조형미를 차용하고 신체를 기하학적 평면 조각으로 해체하여 미술사에 코페르니쿠스적 혁명을 일으켰습니다.",
      "deepKnowledge": "처음 작품을 본 동료 화가 마티스와 브라크조차 경악하며 '마치 석유를 마시고 불을 뿜으려는 미치광이 짓 같다'고 혹평했으나, 곧 브라크와 함께 입체주의를 창조했습니다.",
      "sourceOrTrivia": "Rubin (1994) Les Demoiselles d'Avignon, MoMA",
      "wrongOptionsReason": [
        "우는 여인은 피카소의 연인 도라 마르를 모델로 슬픔을 파편화한 후기 작품입니다.",
        "게르니카는 1937년 스페인 내전 당시 파시스트의 무차별 폭격을 고발한 대벽화입니다.",
        "정답입니다. 서양 미술의 패러다임을 바꾼 입체주의의 기념비작 아비뇽의 처녀들입니다.",
        "부채를 든 여인은 피카소의 고전주의 시기 작품입니다."
      ]
    },
    {
      "id": "ultra_art_4",
      "topic": "미술 & 문화예술",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "1917년 마르셀 뒤샹이 남성용 소변기를 그대로 떼어내 'R. Mutt'라는 가명 서명을 하고 독립미술가협회전에 출품하여 '예술이란 무엇인가'라는 근본적 질문을 던진 레디메이드 개념미술 작품은?",
      "options": [
        "계단을 내려오는 누드 No.2",
        "자전거 바퀴",
        "병걸이",
        "샘 (Fountain)"
      ],
      "correctIndex": 3,
      "explanation": "뒤샹은 예술 작품의 본질은 작가의 손기술이나 미적 아름다움이 아니라, 일상적 사물을 새로운 맥락에 배치하고 새로운 사유를 부여하는 '작가의 개념과 선택'에 있음을 선언했습니다.",
      "deepKnowledge": "2004년 영국 터너상 주간에 실시된 전 세계 미술 전문가 500명 대상 설문조사에서 '20세기 가장 영향력 있는 예술작품 1위'로 선정되었습니다.",
      "sourceOrTrivia": "Duchamp (1917) The Blind Man No. 2",
      "wrongOptionsReason": [
        "계단을 내려오는 누드는 1913년 뉴욕 아모리쇼를 발칵 뒤집어놓은 미래주의적 회화입니다.",
        "자전거 바퀴는 1913년 의자 위에 바퀴를 결합한 최초의 레디메이드 작품입니다.",
        "병걸이는 1914년 일상 철물점에서 산 물건을 그대로 예술품으로 제시한 작품입니다.",
        "정답입니다. 현대 개념 미술의 혁명을 연 뒤샹의 샘입니다."
      ]
    },
    {
      "id": "ultra_art_5",
      "topic": "미술 & 문화예술",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "에스파냐의 화가 디에고 벨라스케스의 1656년 대작으로, 펠리페 4세의 어린 마르가리타 공주와 시녀들뿐만 아니라 캔버스 뒤에서 관람객(국왕 부부)을 바라보며 그림을 그리고 있는 화가 자신의 모습과 벽면 거울을 정교하게 배치한 바로크 회화의 걸작은?",
      "options": [
        "시녀들 (Las Meninas)",
        "브레다의 항복",
        "바쿠스의 승리",
        "거울을 보는 비너스"
      ],
      "correctIndex": 0,
      "explanation": "프라도 미술관의 대표작인 '시녀들'은 관람객의 위치에 서 있는 국왕 부부가 배경 벽면의 거울에 비치도록 설계하여 보는 자와 보여지는 자의 시선 권력 관계를 다룬 메타회화의 정수입니다.",
      "deepKnowledge": "미셸 푸코는 '말과 사물(1966)'의 제1장에서 이 그림의 시선 배치를 분석하며 근대 재현(Representation) 체계의 본질을 철학적으로 해부했습니다.",
      "sourceOrTrivia": "Foucault (1966) Les Mots et les Choses Chapter 1 / 프라도 미술관",
      "wrongOptionsReason": [
        "정답입니다. 시선의 복합적 유희를 완성한 벨라스케스의 시녀들입니다.",
        "브레다의 항복은 네덜란드 브레다 요새 함락과 관용의 순간을 그린 역사화입니다.",
        "바쿠스의 승리는 술의 신과 평민 취객들을 해학적으로 그린 초기작입니다.",
        "거울을 보는 비너스는 런던 내셔널 갤러리 소장의 여성 누드화입니다."
      ]
    },
    {
      "id": "ultra_art_6",
      "topic": "미술 & 문화예술",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "미켈란젤로 부오나로티가 로마 바티칸의 시스티나 성당 천장에 1508년부터 4년간 홀로 사다리에 매달려 프레스코 기법으로 완성한 대작으로, 하나님의 손가락과 아담의 손가락이 맞닿기 직전의 전율을 묘사한 중앙 패널 그림은?",
      "options": [
        "최후의 심판",
        "아담의 창조 (The Creation of Adam)",
        "원죄와 낙원 추방",
        "노아의 방주"
      ],
      "correctIndex": 1,
      "explanation": "교황 율리오 2세의 명으로 그린 시스티나 성당 천장화의 핵심 장면으로, 흙으로 빚어진 인간 아담에게 창조주가 신성한 생명의 영혼을 불어넣는 찰나의 긴장감을 극적으로 표현했습니다.",
      "deepKnowledge": "하나님을 감싸고 있는 붉은 망토와 천사들의 배치가 인간의 뇌 해부도(대뇌 반구)와 소름 돋을 정도로 일치한다는 신경해부학적 분석 논문이 발표되기도 했습니다.",
      "sourceOrTrivia": "Meshberger (1990) 'An Interpretation of Michelangelo's Creation of Adam Based on Neuroanatomy', JAMA",
      "wrongOptionsReason": [
        "최후의 심판은 미켈란젤로가 30년 뒤 시스티나 성당 제단 벽에 그린 벽화입니다.",
        "정답입니다. 인간 창조의 순간을 불멸의 조형미로 승화시킨 아담의 창조입니다.",
        "원죄와 낙원 추방은 뱀의 유혹과 선악과를 먹고 쫓겨나는 장면입니다.",
        "노아의 방주는 대홍수와 구원을 다룬 천장화의 또 다른 패널입니다."
      ]
    },
    {
      "id": "ultra_art_7",
      "topic": "미술 & 문화예술",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "1919년 독일 바이마르에 건축가 발터 그로피우스가 설립한 조형 예술 학교로, '형태는 기능을 따른다'는 모더니즘 디자인 철학 아래 순수 미술과 공예·공학 기술을 통합하여 현대 건축, 가구, 타이포그래피의 표준을 세운 기관은?",
      "options": [
        "아르누보 길드",
        "에콜 데 보자르",
        "바우하우스 (Bauhaus)",
        "비엔나 분리파"
      ],
      "correctIndex": 2,
      "explanation": "바우하우스는 칸딘스키, 클레, 미스 반 데어 로에 등 거장들이 교수로 참여하여 대량 생산에 적합한 간결하고 기능적인 기하학적 미니멀리즘 디자인을 전 세계에 전파했습니다.",
      "deepKnowledge": "1933년 나치 정권의 탄압으로 강제 폐교당했으나, 교수진이 미국으로 망명하여 '뉴 바우하우스'와 현대 국제주의 건축 양식(커튼월 유리 빌딩)을 꽃피웠습니다.",
      "sourceOrTrivia": "Gropius (1919) Bauhaus Manifesto / Droste (2002) Bauhaus",
      "wrongOptionsReason": [
        "아르누보는 19세기 말 유기적인 곡선과 식물 문양을 강조한 장식 미술 양식입니다.",
        "에콜 데 보자르는 파리의 권위주의적인 고전주의 미술 학교입니다.",
        "정답입니다. 현대 모더니즘 디자인의 산실인 바우하우스입니다.",
        "비엔나 분리파는 클림트 등이 보수적 아카데미즘에 반발해 결성한 오스트리아 예술가 집단입니다."
      ]
    },
    {
      "id": "ultra_art_8",
      "topic": "미술 & 문화예술",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "잭슨 폴록이 캔버스를 이젤에 세우지 않고 바닥에 펼쳐놓은 채 에나멜 페인트를 막대기나 구멍 뚫린 캔으로 흩뿌리고 흘리는(Dripping) 방식으로, 그림의 완성된 결과보다 그리는 행위(Performance) 자체를 예술로 승화시킨 사조는?",
      "options": [
        "신조형주의",
        "팝아트",
        "다다이즘",
        "액션 페인팅 (Action Painting / 추상표현주의)"
      ],
      "correctIndex": 3,
      "explanation": "비평가 해럴드 로젠버그가 명명한 액션 페인팅은 화폭을 실재 사물을 재현하는 공간이 아니라 화가의 온몸을 던진 실존적 행위가 펼쳐지는 '투기장(Arena)'으로 탈바꿈시켰습니다.",
      "deepKnowledge": "화면의 중심과 주변부의 위계가 사라지고 캔버스 전체가 균일한 에너지로 뒤덮이는 전면 균일 회화(All-over painting)를 확립했습니다.",
      "sourceOrTrivia": "Rosenberg (1952) 'The American Action Painters', ARTnews",
      "wrongOptionsReason": [
        "신조형주의는 몬드리안의 수직선, 수평선, 삼원색 기하학적 추상입니다.",
        "팝아트는 앤디 워홀처럼 대중문화와 상업 광고 이미지를 차용한 미술입니다.",
        "다다이즘은 제1차 대전 중 기존 예술과 합리성을 부정한 반예술 운동입니다.",
        "정답입니다. 온몸으로 무의식적 행위를 쏟아붓는 액션 페인팅입니다."
      ]
    },
    {
      "id": "ultra_art_9",
      "topic": "미술 & 문화예술",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "1872년 클로드 모네가 르아브르 항구의 일출을 거친 붓터치와 빛의 순간적 반사 효과로 포착하여, 당시 비평가 루이 르루아가 조롱 섞인 비평에서 '인상주의(Impressionism)'라는 사조 명칭을 탄생시킨 그림은?",
      "options": [
        "인상, 해돋이 (Impression, soleil levant)",
        "수련 연작",
        "루앙 대성당 연작",
        "건초더미 연작"
      ],
      "correctIndex": 0,
      "explanation": "르루아는 사물의 윤곽선이 뭉개진 이 그림을 보고 '벽지 도안의 초벌 상태도 이것보다는 완성도가 높겠다'고 비아냥거렸으나, 이 조롱은 빛을 그리는 역사적 미술 사조의 공식 이름이 되었습니다.",
      "deepKnowledge": "튜브 물감의 발명 덕분에 화가들이 아틀리에를 벗어나 야외(En plein air)에서 시시각각 변화하는 자연광의 찰나를 캔버스에 담을 수 있게 되었습니다.",
      "sourceOrTrivia": "파리 마르모탕 모네 미술관 소장 '인상, 해돋이'",
      "wrongOptionsReason": [
        "정답입니다. 인상주의라는 명칭의 모태가 된 인상, 해돋이입니다.",
        "수련 연작은 모네가 지베르니 정원에서 만년에 그린 거대한 연못 연작입니다.",
        "루앙 대성당은 시간대별 태양광에 따라 대성당 석벽의 색채 변화를 그린 연작입니다.",
        "건초더미는 사계절과 날씨에 따른 빛의 변화를 탐구한 연작입니다."
      ]
    },
    {
      "id": "ultra_art_10",
      "topic": "미술 & 문화예술",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "앤디 워홀(Andy Warhol)이 대량 소비사회의 상징인 캠벨 수프 깡통, 코카콜라 병, 마릴린 먼로의 얼굴을 공장식 실크스크린(Silkscreen) 판화로 무한 복제하여 현대 대중소비문화를 예술로 끌어올린 사조는?",
      "options": [
        "미니멀리즘",
        "팝아트 (Pop Art)",
        "옵아트",
        "극사실주의"
      ],
      "correctIndex": 1,
      "explanation": "워홀은 자신의 작업실을 '팩토리(The Factory)'라고 부르며 예술의 유일무이한 아우라(Aura)를 파괴하고 상업적 대량 생산 이미지를 현대의 새로운 성상(Icon)으로 제시했습니다.",
      "deepKnowledge": "워홀은 '돈을 버는 예술이야말로 최고의 예술이며, 훌륭한 비즈니스가 최고의 예술이다'라는 도발적인 상업주의 예술관을 선언했습니다.",
      "sourceOrTrivia": "Warhol (1975) The Philosophy of Andy Warhol",
      "wrongOptionsReason": [
        "미니멀리즘은 형태와 색채를 극단적으로 단순화하여 사물성만을 남기는 미술입니다.",
        "정답입니다. 대중 소비사회와 미디어 이미지를 예술화한 팝아트입니다.",
        "옵아트는 착시와 기하학적 무늬로 시각적 착각과 움직임을 유발하는 예술입니다.",
        "극사실주의는 사진보다 더 정밀하게 세부를 묘사하는 회화 기법입니다."
      ]
    },
    {
      "id": "ultra_art_11",
      "topic": "미술 & 문화예술",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "네덜란드의 추상화가 피트 몬드리안(Piet Mondrian)이 '데 스틸(De Stijl)' 운동을 이끌며, 모든 자연의 형태를 수직선과 수평선, 그리고 빨강, 파랑, 노랑의 3원색과 흑백무채색으로만 환원한 순수 추상 회화 사조는?",
      "options": [
        "절대주의 (슈프레마티즘)",
        "입체파",
        "신조형주의 (Neo-Plasticism)",
        "오르피즘"
      ],
      "correctIndex": 2,
      "explanation": "몬드리안은 자연의 우연적 껍데기를 벗겨내고 보편적인 우주 법칙의 완벽한 질서와 조화를 나타내기 위해 오직 직각 격자와 삼원색만을 고집했습니다.",
      "deepKnowledge": "이 기하학적 그리드 디자인은 입생로랑의 몬드리안 룩 드레스와 현대 가구, 바우하우스 건축에 지대한 영향을 끼쳤습니다.",
      "sourceOrTrivia": "Mondrian (1920) Le Néo-Plasticisme",
      "wrongOptionsReason": [
        "절대주의는 말레비치가 검은 사각형으로 순수 감정의 극단을 추구한 사조입니다.",
        "입체파는 대상을 여러 각도의 면으로 해체한 피카소와 브라크의 사조입니다.",
        "정답입니다. 직각 그리드와 삼원색으로 우주적 질서를 추구한 신조형주의입니다.",
        "오르피즘은 들로네가 음악적 리듬감을 색채 원형으로 표현한 추상 사조입니다."
      ]
    },
    {
      "id": "ultra_art_12",
      "topic": "미술 & 문화예술",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "살바도르 달리가 1931년 발표한 대표적인 초현실주의 회화로, 카탈루냐의 황량한 해변을 배경으로 나뭇가지와 괴물 형상 위에 회중시계들이 까망베르 치즈처럼 축 늘어져 녹아내리는 광경을 그린 작품은?",
      "options": [
        "성 안토니우스의 유혹",
        "내란의 예감",
        "불타는 기린",
        "기억의 지속 (The Persistence of Memory)"
      ],
      "correctIndex": 3,
      "explanation": "달리는 자신의 기법을 '편집광적 비판 방법(Paranoiac-Critical Method)'이라 부르며, 견고하고 객관적인 시간이라는 개념이 무의식의 꿈속에서 무력하게 허물어지는 환각을 정밀하게 묘사했습니다.",
      "deepKnowledge": "뉴욕 현대미술관(MoMA)에 소장된 이 유명한 그림은 크기가 가로 33cm, 세로 24cm로 엽서보다 조금 큰 정도에 불과할 정도로 아담합니다.",
      "sourceOrTrivia": "Dali (1942) The Secret Life of Salvador Dali / MoMA",
      "wrongOptionsReason": [
        "성 안토니우스의 유혹은 긴 다리를 가진 코끼리들이 행렬하는 종교적 초현실주의화입니다.",
        "내란의 예감은 스페인 내전의 비극을 거대한 신체 절단 괴물로 예언한 작품입니다.",
        "불타는 기린은 서랍 달린 여인과 불타는 기린을 배치한 무의식 회화입니다.",
        "정답입니다. 녹아내리는 시계로 시간의 상대성을 환상적으로 그린 기억의 지속입니다."
      ]
    },
    {
      "id": "ultra_art_13",
      "topic": "미술 & 문화예술",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "한국이 낳은 세계적인 비디오 아트의 창시자로, 1988년 서울 올림픽을 기념하여 국립현대미술관 과천관에 1,003대의 TV 브라운관 모니터를 탑처럼 쌓아 올린 초대형 기념비적 설치 작품 '다다익선(多多益善)'을 제작한 예술가는?",
      "options": [
        "백남준 (Nam June Paik)",
        "이우환",
        "김환기",
        "박서보"
      ],
      "correctIndex": 0,
      "explanation": "백남준은 '달은 가장 오래된 TV다'라는 통찰 아래, 플럭서스(Fluxus) 전위예술 운동을 이끌며 텔레비전 모니터와 전자 신호를 예술 매체로 승화시킨 미디어 아트의 아버지입니다.",
      "deepKnowledge": "1,003대라는 숫자는 개천절인 10월 3일을 상징하며, 2022년 대대적인 복원 작업을 거쳐 디지털 LCD가 아닌 오리지널 CRT 브라운관 보존 방식으로 재가동되었습니다.",
      "sourceOrTrivia": "국립현대미술관 소장 백남준 '다다익선' (1988)",
      "wrongOptionsReason": [
        "정답입니다. 세계 미디어 아트의 개척자 백남준입니다.",
        "이우환은 점과 선, 돌과 철판의 관계성을 탐구한 모노하(物派)의 거장입니다.",
        "김환기는 한국 추상미술의 선구자로 푸른 전면점화 '어디서 무엇이 되어 다시 만나랴'의 작가입니다.",
        "박서보는 반복적인 연필 긋기로 유명한 한국 단색화(Dansaekhwa)의 대표 화가입니다."
      ]
    },
    {
      "id": "ultra_art_14",
      "topic": "미술 & 문화예술",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "조선 후기 영·정조 시대의 화가 겸재 정선(鄭敾)이 중국 산수화의 관념적 모방에서 탈피하여, 한양 근교와 금강산의 실제 우리 산천을 직접 답사하고 독창적인 수직준법으로 그려낸 화풍은?",
      "options": [
        "남종문인화",
        "진경산수화 (眞景山水畫)",
        "풍속화",
        "기명절지도"
      ],
      "correctIndex": 1,
      "explanation": "겸재 정선은 비 온 뒤 물기 머금은 인왕산 바위를 짙은 먹으로 담대하게 묘사한 '인왕제색도'와 금강산 1만 2천 봉을 한눈에 담은 '금강전도'(둘 다 국보)로 조선 고유의 화풍을 개척했습니다.",
      "deepKnowledge": "이 진경산수화는 조선 후기 민족적 자부심(조선중화주의)과 실학사상의 대두와 궤를 같이하는 문화적 르네상스의 정수입니다.",
      "sourceOrTrivia": "정선 인왕제색도 (국보 제216호) / 금강전도 (국보 제217호)",
      "wrongOptionsReason": [
        "남종문인화는 중국 강남 사대부들의 관념적인 탈속 산수화풍입니다.",
        "정답입니다. 우리 산천을 독창적 필묵으로 그린 겸재 정선의 진경산수화입니다.",
        "풍속화는 김홍도와 신윤복이 백성들의 일상생활을 해학적으로 그린 그림입니다.",
        "기명절지도는 그릇, 꽃, 과일 등을 배치한 조선의 정물화입니다."
      ]
    },
    {
      "id": "ultra_art_15",
      "topic": "미술 & 문화예술",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "노르웨이의 표현주의 화가 에드바르 뭉크가 1893년 발표한 작품으로, 핏빛으로 물든 노을 진 피오르 해안 다리 위에서 자연을 관통하는 거대한 무한한 비명을 들으며 귀를 틀어막고 공포에 떠는 인물을 묘사한 그림은?",
      "options": [
        "사춘기",
        "불안",
        "절규 (The Scream)",
        "마돈나"
      ],
      "correctIndex": 2,
      "explanation": "뭉크는 자신의 일기에서 '해가 지고 하늘이 핏빛으로 변했을 때, 자연을 찢는 듯한 무한한 절규를 느꼈다'고 고백하며 현대인의 실존적 불안과 공포를 강렬한 곡선으로 형상화했습니다.",
      "deepKnowledge": "그림 속 인물이 비명을 지르는 것이 아니라, 자연에서 울려 퍼지는 거대한 비명을 견디지 못해 귀를 막고 있는 장면입니다.",
      "sourceOrTrivia": "오슬로 뭉크 미술관 소장 '절규' (1893)",
      "wrongOptionsReason": [
        "사춘기는 침대 모서리에 불안하게 앉아있는 소녀를 그린 작품입니다.",
        "불안은 검은 옷을 입은 창백한 군중이 다가오는 모습을 그린 뭉크의 다른 작품입니다.",
        "정답입니다. 현대인의 실존적 공포를 상징하는 뭉크의 절규입니다.",
        "마돈나는 에로티시즘과 죽음의 신비를 결합한 뭉크의 유화입니다."
      ]
    },
    {
      "id": "ultra_art_16",
      "topic": "미술 & 문화예술",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "프랑스의 낭만주의 거장 외젠 들라크루아가 1830년 파리 시민들이 부르봉 왕정을 타도한 7월 혁명에 감명을 받아 제작한 역사화로, 삼색기를 높이 들고 바리케이드를 넘어 전진하는 여신을 묘사한 걸작은?",
      "options": [
        "키오스 섬의 학살",
        "사르다나팔루스의 죽음",
        "메두사호의 뗏목",
        "민중을 이끄는 자유의 여신"
      ],
      "correctIndex": 3,
      "explanation": "프랑스를 상징하는 '마리안느(Marianne)' 여신이 프리지아 모자를 쓰고 시민군(부르주아와 소년 노동자)을 이끄는 역동적 구도로, 자유와 저항의 불멸의 상징이 되었습니다.",
      "deepKnowledge": "영국의 록밴드 콜드플레이(Coldplay)의 명반 'Viva la Vida'의 앨범 커버로 사용되어 대중문화에서도 널리 알려졌습니다.",
      "sourceOrTrivia": "루브르 박물관 소장 '민중을 이끄는 자유의 여신' (1830)",
      "wrongOptionsReason": [
        "키오스 섬의 학살은 오스만 제국의 그리스 민간인 학살을 고발한 들라크루아의 작품입니다.",
        "사르다나팔루스의 죽음은 포위된 아시리아 왕의 장렬한 파멸을 그린 들라크루아의 낭만주의화입니다.",
        "메두사호의 뗏목은 테오도르 제리코가 난파선의 조난 비극을 고발한 그림입니다.",
        "정답입니다. 7월 혁명의 저항 정신을 극적으로 포착한 자유의 여신입니다."
      ]
    },
    {
      "id": "ultra_art_17",
      "topic": "미술 & 문화예술",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "후기 인상주의 화가 폴 세잔(Paul Cézanne)이 '자연의 모든 형태는 원기둥, 구, 원뿔로 다루어야 한다'며 대상을 단순한 기하학적 입체로 환원하여 피카소 입체주의의 직접적 모태가 된 프랑스 남부의 명산 연작은?",
      "options": [
        "생트 빅투아르 산 연작 (Mont Sainte-Victoire)",
        "몽블랑 연작",
        "에트르타 절벽",
        "베수비오 화산"
      ],
      "correctIndex": 0,
      "explanation": "세잔은 고향 엑상프로방스의 생트 빅투아르 산을 수십 번 반복해서 그리며 감각적 인상을 넘어 사물의 불변하는 구조적 질서와 공간성을 구축해 '현대 회화의 아버지'로 추앙받습니다.",
      "deepKnowledge": "색채의 면들을 병치하여 양감과 깊이를 형성하는 모듈라시옹(Modulation) 기법을 개척했습니다.",
      "sourceOrTrivia": "Cézanne's Letter to Émile Bernard (1904)",
      "wrongOptionsReason": [
        "정답입니다. 세잔이 사물의 입체적 구조를 탐구한 생트 빅투아르 산입니다.",
        "몽블랑은 알프스 최고봉으로 낭만주의 산악화의 소재입니다.",
        "에트르타 절벽은 모네가 바다 아치 절벽을 반복해서 그린 노르망디 해안입니다.",
        "베수비오 화산은 앤디 워홀 등이 팝아트로 그린 나폴리의 화산입니다."
      ]
    },
    {
      "id": "ultra_art_18",
      "topic": "미술 & 문화예술",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "벨기에의 초현실주의 화가 르네 마그리트가 1929년 파이프 그림 아래에 '이것은 파이프가 아니다(Ceci n'est pas une pipe)'라는 문구를 적어 넣어, 이미지와 언어, 그리고 실재 사이의 틈새를 날카롭게 성찰한 작품은?",
      "options": [
        "골콩드 (겨울비)",
        "이미지의 배반 (The Treachery of Images)",
        "빛의 제국",
        "사람의 아들"
      ],
      "correctIndex": 1,
      "explanation": "마그리트는 그림 속 파이프는 물감을 칠한 캔버스 '이미지'일 뿐 진짜 담배를 채워 피울 수 있는 실제 파이프가 아님을 지적하여, 재현된 이미지에 속아 넘어가는 인간의 인식을 해체했습니다.",
      "deepKnowledge": "미셸 푸코는 이 그림을 바탕으로 동명의 철학 에세이 '이것은 파이프가 아니다(1973)'를 저술하여 현대 기호학과 시각성의 문제를 심도 있게 분석했습니다.",
      "sourceOrTrivia": "Magritte (1929) La trahison des images / LACMA 소장",
      "wrongOptionsReason": [
        "골콩드는 중절모를 쓴 양복 신사들이 빗방울처럼 허공에 떠 있는 작품입니다.",
        "정답입니다. 언어와 이미지의 괴리를 해체한 마그리트의 이미지의 배반입니다.",
        "빛의 제국은 대낮의 푸른 하늘과 한밤의 어두운 가로등 집을 한 화면에 결합한 작품입니다.",
        "사람의 아들은 중절모 신사의 얼굴을 녹색 사과가 가리고 있는 작품입니다."
      ]
    },
    {
      "id": "ultra_art_19",
      "topic": "미술 & 문화예술",
      "difficulty": "easy",
      "difficultyLabel": "기초 상식",
      "question": "이탈리아 르네상스의 3대 거장 라파엘로 산치오가 바티칸 사도궁에 그린 벽화로, 플라톤(손가락으로 하늘을 가리킴)과 아리스토텔레스(손바닥으로 땅을 가리킴)를 비롯한 고대 철학자들이 회랑에 총집결해 토론하는 모습을 그린 걸작은?",
      "options": [
        "성체 조배",
        "최후의 만찬",
        "아테네 학당 (The School of Athens)",
        "파르나소스"
      ],
      "correctIndex": 2,
      "explanation": "인문주의 르네상스 지성의 절정을 시각화한 그림으로, 이데아를 가리키는 플라톤의 얼굴은 레오나르도 다빈치를, 사색에 잠긴 헤라클레이토스는 미켈란젤로를 모델로 그려 넣었습니다.",
      "deepKnowledge": "라파엘로는 수학자 에우클레이데스(브라만테의 얼굴) 옆 오른쪽 구석에 검은 모자를 쓴 자기 자신의 얼굴을 관람객을 응시하는 자화상으로 숨겨 넣었습니다.",
      "sourceOrTrivia": "바티칸 사도궁 서명의 방 프레스코화 '아테네 학당' (1511)",
      "wrongOptionsReason": [
        "성체 조배는 아테네 학당 맞은편 벽에 신학의 승리를 묘사한 라파엘로의 벽화입니다.",
        "최후의 만찬은 밀라노 산타마리아 델레 그라치에 성당에 있는 다빈치의 벽화입니다.",
        "정답입니다. 고대 그리스 지성과 르네상스 원근법의 종합인 아테네 학당입니다.",
        "파르나소스는 아폴론과 뮤즈들을 그린 서명의 방 세 번째 벽화입니다."
      ]
    },
    {
      "id": "ultra_art_20",
      "topic": "미술 & 문화예술",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "조선 후기 정조 대의 도화서 화원 단원 김홍도(金弘道)가 서민들의 진솔하고 해학적인 일상을 담아낸 풍속화첩(보물 제527호)에 수록되지 않은 그림은?",
      "options": [
        "대장간",
        "서당 (훈장과 우는 학동)",
        "씨름",
        "미인도 (美人圖)"
      ],
      "correctIndex": 3,
      "explanation": "'미인도'는 혜원 신윤복(申潤福)의 대표작(보물 제1352호)으로, 단오풍정, 월하정인 등과 함께 양반과 기녀의 풍류를 섬세한 필선으로 그린 걸작입니다.",
      "deepKnowledge": "단원 김홍도는 역동적 구도와 서민 노동의 건강한 활력을 그린 반면, 혜원 신윤복은 남녀 간의 에로티시즘과 화려한 채색을 즐겨 썼습니다.",
      "sourceOrTrivia": "단원풍속도첩 (국립중앙박물관) vs 신윤복 미인도 (간송미술관)",
      "wrongOptionsReason": [
        "대장간은 쇠를 달구고 벼리는 서민 노동의 활력을 담아낸 김홍도의 대표 풍속화입니다.",
        "서당은 종아리를 맞고 우는 학동을 둘러싼 아이들의 웃음을 그린 김홍도의 그림입니다.",
        "씨름은 엿장수와 둥글게 둘러앉은 관중의 시선을 완벽히 조율한 김홍도의 명작입니다.",
        "정답입니다. 미인도는 혜원 신윤복의 걸작으로 김홍도의 작품이 아닙니다."
      ]
    },
    {
      "id": "ultra_art_21",
      "topic": "미술 & 문화예술",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "이탈리아 바로크 미술의 반항아 카라바조(Caravaggio)가 확립한 화풍으로, 칠흑같이 어두운 배경 속에 인물을 배치하고 한 줄기 강렬한 스포트라이트 같은 빛을 투사하여 극적인 종교적 긴장감을 연출한 극단적 명암 대비법은?",
      "options": [
        "테네브리즘 (Tenebrism / 암흑양식)",
        "인타글리오",
        "그리자유",
        "모자이크"
      ],
      "correctIndex": 0,
      "explanation": "이탈리아어 '테네브로소(Tenebroso, 어두운)'에서 유래한 기법으로, '마태오의 소명', '홀로페르네스의 목을 베는 유디트' 등에서 성스러운 순간의 충격을 시각화했습니다.",
      "deepKnowledge": "카라바조의 혁신적인 암흑 양식은 렘브란트, 벨라스케스, 조르주 드 라 투르 등 유럽 바로크 회화 전체를 뒤흔들었습니다.",
      "sourceOrTrivia": "Friedlaender (1955) Caravaggio Studies",
      "wrongOptionsReason": [
        "정답입니다. 극적인 어둠과 강렬한 빛의 대조인 카라바조의 테네브리즘입니다.",
        "인타글리오는 동판화처럼 음각으로 홈을 파서 잉크를 묻히는 판화 기법입니다.",
        "그리자유는 회색 단색조로 조각 같은 양감을 표현하는 기법입니다.",
        "모자이크는 작은 돌이나 유리 파편을 붙여 벽화를 완성하는 장식 기법입니다."
      ]
    },
    {
      "id": "ultra_art_22",
      "topic": "미술 & 문화예술",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "근대 건축의 거장 르 코르뷔지에(Le Corbusier)가 1927년 발표하고 사보아 주택(Villa Savoye)에 완벽히 구현한 '근대 건축 5원칙'에 해당하지 않는 것은?",
      "options": [
        "필로티 (Pilotis, 기둥 지지)",
        "지하 벙커 방공호",
        "옥상 정원 (Roof Garden)",
        "자유로운 평면과 가로로 긴 창"
      ],
      "correctIndex": 1,
      "explanation": "르 코르뷔지에의 5원칙은 1. 필로티(지상을 비워 개방), 2. 옥상 정원, 3. 자유로운 평면, 4. 수평 띠창(가로로 긴 창), 5. 자유로운 파사드(외벽의 해방)입니다.",
      "deepKnowledge": "철근 콘크리트 슬래브와 기둥(도미노 시스템)을 통해 벽이 하중을 지탱하지 않아도 되면서 벽면에 전면 유리창을 뚫을 수 있는 건축 혁명이 가능해졌습니다.",
      "sourceOrTrivia": "Le Corbusier (1923) Vers une architecture",
      "wrongOptionsReason": [
        "필로티는 건물을 지상에서 띄워 공간을 확보하는 제1원칙입니다.",
        "정답입니다. 지하 벙커 방공호는 르 코르뷔지에의 5원칙이 아닙니다.",
        "옥상 정원은 콘크리트 슬래브를 보호하고 녹지를 회복하는 제2원칙입니다.",
        "자유로운 평면과 띠창은 하중 지지 벽이 사라져 얻게 된 핵심 원칙입니다."
      ]
    },
    {
      "id": "ultra_art_23",
      "topic": "미술 & 문화예술",
      "difficulty": "medium",
      "difficultyLabel": "일반 지식",
      "question": "네덜란드 바로크 회화의 거장 요하네스 페르메이르(Vermeer)의 대표작으로, 어두운 배경 속에서 뒤를 돌아보며 관람객을 응시하는 이국적인 터번을 두른 소녀와 귓가에 영롱하게 반짝이는 보석을 섬세한 빛으로 묘사하여 '북유럽의 모나리자'로 불리는 작품은?",
      "options": [
        "레이스 뜨는 여인",
        "우유 따르는 여인",
        "진주 귀걸이를 한 소녀 (Girl with a Pearl Earring)",
        "델프트 풍경"
      ],
      "correctIndex": 2,
      "explanation": "헤이그 마우리츠하위스 미술관 소장의 이 작품은 실존 인물의 초상화라기보다 특정 인물 유형을 묘사한 트로니(Tronie) 장르로, 귀걸이에 맺힌 하이라이트 빛 터치가 압권입니다.",
      "deepKnowledge": "페르메이르는 당시 광학 장치인 '카메라 옵스쿠라(Camera Obscura)'를 활용하여 빛의 점상 반사(포앵틸리에) 효과를 정밀하게 캔버스에 재현했습니다.",
      "sourceOrTrivia": "마우리츠하위스 미술관 컬렉션 '진주 귀걸이를 한 소녀'",
      "wrongOptionsReason": [
        "레이스 뜨는 여인은 루브르 박물관 소장의 섬세한 소품입니다.",
        "우유 따르는 여인은 암스테르담 국립미술관 소장으로 주방 하녀를 성스럽게 그린 작품입니다.",
        "정답입니다. 빛의 마술사 페르메이르의 진주 귀걸이를 한 소녀입니다.",
        "델프트 풍경은 고향 델프트 항구의 구름과 햇살을 그린 풍경화 걸작입니다."
      ]
    },
    {
      "id": "ultra_art_24",
      "topic": "미술 & 문화예술",
      "difficulty": "hard",
      "difficultyLabel": "심화 지식",
      "question": "러시아 출신의 바실리 칸딘스키(Wassily Kandinsky)가 1910년 구체적인 자연 대상을 일절 묘사하지 않고 순수한 선, 색채, 면의 유기적 구성만으로 내면의 음악적 울림을 표현하여 인류 최초로 완성한 미술 사조는?",
      "options": [
        "인상주의",
        "야수파",
        "초현실주의",
        "순수 추상미술 (Abstract Art)"
      ],
      "correctIndex": 3,
      "explanation": "칸딘스키는 '예술에서의 정신적인 것에 대하여(1912)'에서 음악이 음표만으로 인간의 영혼을 감동시키듯, 미술도 대상 재현을 버리고 색채와 형태만으로 '내적 필연성'을 표현해야 한다고 선언했습니다.",
      "deepKnowledge": "그는 소리를 들으면 색채를 보는 공감각(Synesthesia) 능력을 지녔으며, 즉흥(Improvisation)과 구성(Composition)이라는 음악 용어로 작품 제목을 붙였습니다.",
      "sourceOrTrivia": "Kandinsky (1912) Über das Geistige in der Kunst",
      "wrongOptionsReason": [
        "인상주의는 눈에 보이는 외적 빛의 찰나를 그린 사조입니다.",
        "야수파는 마티스처럼 원색을 강렬하게 해방시킨 구상 계열 사조입니다.",
        "초현실주의는 꿈과 무의식의 기이한 이미지를 다룬 사조입니다.",
        "정답입니다. 재현을 버리고 영혼의 음악성을 색채로 연주한 순수 추상미술입니다."
      ]
    },
    {
      "id": "ultra_art_25",
      "topic": "미술 & 문화예술",
      "difficulty": "profound",
      "difficultyLabel": "심오한 지식",
      "question": "20세기 초 앙리 마티스(Henri Matisse)와 앙드레 드랭 등이 사물의 고유색(나무는 초록, 피부는 살구색)을 완전히 거부하고, 튜브에서 짠 강렬한 원색을 캔버스에 거침없이 칠하여 비평가 루이 보셀로부터 '마치 야수들의 우리에 갇힌 도나텔로 같다'는 평을 들은 사조는?",
      "options": [
        "야수파 (포비즘, Fauvism)",
        "입체파 (큐비즘)",
        "미래파 (Futurism)",
        "다다이즘"
      ],
      "correctIndex": 0,
      "explanation": "1905년 살롱 도톤느에서 폭발한 야수파는 색채를 형태의 굴레에서 해방시켜, 대상의 모사가 아닌 화가의 주관적인 감정과 생명력을 표현하는 자율적 수단으로 확립했습니다.",
      "deepKnowledge": "마티스는 말년에 관절염으로 붓을 쥐기 어려워지자 색종이를 가위로 오려 붙이는 '데쿠파주(Découpage)' 기법으로 '재즈(Jazz)' 연작 등 불후의 역작을 남겼습니다.",
      "sourceOrTrivia": "Vauxcelles (1905) Gil Blas / Spurling (2005) Matisse the Master",
      "wrongOptionsReason": [
        "정답입니다. 원색의 강렬한 해방을 이끈 야수파(Fauvism)입니다.",
        "입체파는 피카소가 형태를 기하학적으로 해체한 사조입니다.",
        "미래파는 기계 문명의 속도와 역동성을 찬양한 이탈리아 사조입니다.",
        "다다이즘은 전쟁의 광기 속에서 허무와 우연성을 추구한 반예술 운동입니다."
      ]
    }
  ]
};
