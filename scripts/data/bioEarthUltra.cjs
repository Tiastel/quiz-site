// 25 questions for biology_medicine, 25 for earth_environment
module.exports = {
  biology_medicine: [
    {
      id: "ultra_bio_1",
      topic: "생명과학 & 의학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "세포 내에서 포도당과 산소를 이용하여 세포 활동의 에너지 화폐인 ATP를 대량 합성하는 세포 소기관은?",
      options: ["골지체", "소포체", "미토콘드리아 (Mitochondria)", "리소좀"],
      correctIndex: 2,
      explanation: "미토콘드리아는 세포 호흡(TCA 회로 및 전자전달계)을 통해 유기물을 산화시켜 고효율의 ATP를 생성하는 세포 내 발전소입니다.",
      deepKnowledge: "미토콘드리아는 독자적인 원형 DNA와 리보솜을 지니고 있어, 고대 진핵세포에 호기성 알파프로테오박테리아가 공생하여 기원했다는 세포내공생설(Endosymbiotic Theory)의 핵심 증거입니다.",
      sourceOrTrivia: "Margulis (1970) Origin of Eukaryotic Cells",
      wrongOptionsReason: [
        "골지체는 단백질을 가공, 포장, 분비하는 소기관입니다.",
        "소포체는 단백질과 지질의 합성과 수송을 담당합니다.",
        "정답입니다. ATP 에너지를 합성하는 미토콘드리아입니다.",
        "리소좀은 가수분해 효소로 세포 내 불필요한 물질을 소화하는 소기관입니다."
      ]
    },
    {
      id: "ultra_bio_2",
      topic: "생명과학 & 의학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "DNA 분자의 이중 나선 구조에서 아데닌(A)과 티민(T), 구아닌(G)과 사이토신(C) 사이에 형성되는 화학 결합의 종류는?",
      options: ["공유 결합", "이온 결합", "수소 결합 (Hydrogen Bond)", "금속 결합"],
      correctIndex: 2,
      explanation: "DNA 두 가닥의 상보적 염기쌍은 수소 결합으로 연결되어 있으며, A-T 사이에는 2개, G-C 사이에는 3개의 수소 결합이 형성됩니다.",
      deepKnowledge: "G-C 함량이 높은 DNA 영역은 수소 결합 수가 많아 열에 의한 이중 나선 변성(Melting) 온도가 상대적으로 높습니다.",
      sourceOrTrivia: "Watson & Crick (1953) Nature 171",
      wrongOptionsReason: [
        "공유 결합은 DNA 당-인산 골격의 포스포다이에스터 결합에 해당합니다.",
        "이온 결합은 전하 차이에 의한 결합입니다.",
        "정답입니다. 두 가닥의 염기쌍을 결합시키는 수소 결합입니다.",
        "금속 결합은 금속 원자 간의 전자 바다 결합입니다."
      ]
    },
    {
      id: "ultra_bio_3",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "박테리아의 면역 체계에서 유래한 3세대 유전자 가위로, 단일 가이드 RNA(gRNA)를 통해 특정 DNA 서열을 정밀 타깃하여 절단하는 기술은?",
      options: ["탈렌 (TALEN)", "징크핑거 뉴클레이즈 (ZFN)", "크리스퍼-카스9 (CRISPR-Cas9)", "제한효소 클로닝"],
      correctIndex: 2,
      explanation: "CRISPR-Cas9은 gRNA의 염기서열만 바꾸면 원하는 DNA 위치를 자유자재로 편집할 수 있어, 샤르팡티에와 다우드나 교수가 2020년 노벨화학상을 수상했습니다.",
      deepKnowledge: "Cas9 단백질은 표적 DNA 서열 옆에 PAM(Protospacer Adjacent Motif, NGG 서열)이 존재해야만 DNA 이중 나선을 절단할 수 있습니다.",
      sourceOrTrivia: "Jinek et al. (2012) Science 337",
      wrongOptionsReason: [
        "TALEN은 인공 단백질 도메인으로 DNA를 인식하는 2세대 유전자 가위입니다.",
        "ZFN은 아연 집게 도메인을 쓰는 1세대 유전자 가위입니다.",
        "정답입니다. RNA 가이드를 사용하는 3세대 혁신 유전자 가위입니다.",
        "제한효소는 특정 짧은 회문 서열만 절단하는 고전 생화학 도구입니다."
      ]
    },
    {
      id: "ultra_bio_4",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "세포 분열 시 염색체 말단이 손실되는 것을 보호하며, 분열을 거듭할수록 짧아져 세포 노화의 생물학적 타이머 역할을 하는 구조는?",
      options: ["센트로미어 (동원체)", "텔로미어 (Telomere)", "키네토코어", "뉴클레오솜"],
      correctIndex: 1,
      explanation: "텔로미어는 염색체 말단의 반복 DNA 서열(인간의 경우 TTAGGG)로, 말단 복제 문제로 인해 세포 분열마다 길이가 점차 짧아집니다.",
      deepKnowledge: "생식세포와 대다수 암세포에서는 텔로머레이스(Telomerase) 효소가 활성화되어 텔로미어를 연장함으로써 무한 분열 능력을 획득합니다.",
      sourceOrTrivia: "Blackburn, Greider, Szostak (2009 Nobel Prize in Physiology or Medicine)",
      wrongOptionsReason: [
        "동원체는 염색분체가 결합하는 염색체의 중심 부위입니다.",
        "정답입니다. 세포 수명의 한계를 규정하는 말단 텔로미어입니다.",
        "키네토코어는 동원체에 방추사가 부착되는 단백질 복합체입니다.",
        "뉴클레오솜은 DNA가 히스톤 8량체를 감싼 염색질의 기본 단위입니다."
      ]
    },
    {
      id: "ultra_bio_5",
      topic: "생명과학 & 의학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "암세포가 T세포의 면역 공격을 회피하기 위해 악용하는 면역관문 수용체(PD-1, CTLA-4)를 차단하여, 환자 본인의 면역세포가 암을 공격하도록 유도하는 항암제는?",
      options: ["표적 항암제 (키나아제 억제제)", "면역관문 억제제 (Immune Checkpoint Inhibitor)", "화학 세포독성 항암제", "호르몬 치료제"],
      correctIndex: 1,
      explanation: "면역관문 억제제(예: 키트루다, 옵디보)는 암세포의 면역 회피 신호를 차단해 면역체계 본연의 항암 능력을 되살리며, 혼조와 앨리슨 교수가 2018 노벨상을 수상했습니다.",
      deepKnowledge: "PD-1 수용체와 종양의 PD-L1 리간드 결합을 항체로 차단하면 지쳐있던 CD8+ 세포독성 T세포가 재활성화되어 암세포를 효과적으로 사멸시킵니다.",
      sourceOrTrivia: "Ishida et al. (1992) EMBO J / Leach et al. (1996) Science",
      wrongOptionsReason: [
        "표적 항암제는 암세포의 특정 유전자 돌연변이 단백질을 직접 억제합니다.",
        "정답입니다. 암의 면역 브레이크를 해제하는 면역관문 억제제입니다.",
        "세포독성 항암제는 빠르게 분열하는 모든 세포를 공격합니다.",
        "호르몬 치료제는 에스트로겐 등 호르몬 수용체 경로를 차단합니다."
      ]
    },
    {
      id: "ultra_bio_6",
      topic: "생명과학 & 의학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "2006년 야마나카 신야 교수가 성체 섬유아세포에 단 4개의 전사인자(Oct4, Sox2, Klf4, c-Myc)를 도입하여 배아줄기세포와 동일한 전분화능을 획득시킨 세포는?",
      options: ["유도만능줄기세포 (iPSC, 역분화 줄기세포)", "중간엽 줄기세포", "조혈모세포", "신경줄기세포"],
      correctIndex: 0,
      explanation: "iPSC는 분화가 끝난 체세포를 배아 단계의 미분화 상태로 되돌린 세포로, 인간 배아를 파괴하지 않고 환자 맞춤형 줄기세포를 만들 수 있어 2012 노벨생리의학상을 받았습니다.",
      deepKnowledge: "야마나카 4대 인자는 후성유전학적 리프로그래밍을 촉진하여 메틸화되어 침묵하던 다능성 핵심 유전자 네트워크를 재가동시킵니다.",
      sourceOrTrivia: "Takahashi & Yamanaka (2006) Cell 126, 663-676",
      wrongOptionsReason: [
        "정답입니다. 성체 세포를 역분화시킨 유도만능줄기세포(iPSC)입니다.",
        "중간엽 줄기세포는 골수, 지방 등에서 얻는 다분화능 성체 줄기세포입니다.",
        "조혈모세포는 혈액 세포를 만드는 성체 줄기세포입니다.",
        "신경줄기세포는 뇌 신경계 세포로만 분화하는 조직 특이적 줄기세포입니다."
      ]
    },
    {
      id: "ultra_bio_7",
      topic: "생명과학 & 의학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "세포 손상이나 스트레스 상황에서 세포가 자신의 세포질 구성물과 손상된 소기관을 이중막 소포로 감싸 리소좀과 융합시켜 분해·재활용하는 세포 정화 기전은?",
      options: ["세포자멸사 (Apoptosis)", "오토파지 (자가포식, Autophagy)", "괴사 (Necrosis)", "파이롭토시스 (Pyroptosis)"],
      correctIndex: 1,
      explanation: "자가포식(Autophagy)은 영양 결핍이나 손상 단백질 누적 시 세포 항상성을 유지하는 생명 보존 기전으로, 오스미 요시노리 교수가 2016 노벨상을 수상했습니다.",
      deepKnowledge: "오토파고좀(Autophagosome) 형성은 LC3 단백질 전환과 mTOR 억제 경로에 의해 엄격히 제어되며, 기능 이상 시 파킨슨병 등 신경퇴행성 질환이 유발됩니다.",
      sourceOrTrivia: "Takeshige et al. (1992) J. Cell Biol / Nobel Prize (2016)",
      wrongOptionsReason: [
        "세포자멸사는 프로그램된 능동적 세포 자살 과정입니다.",
        "정답입니다. 손상 소기관을 자가 분해·재활용하는 오토파지입니다.",
        "괴사는 외부 손상으로 세포가 팽창하여 터지는 비조절성 사멸입니다.",
        "파이롭토시스는 염증 반응을 동반하는 감염성 세포 사멸입니다."
      ]
    },
    {
      id: "ultra_bio_8",
      topic: "생명과학 & 의학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "정상 프리온 단백질($PrP^C$)이 비정상적인 베타-병풍 구조($PrP^{Sc}$)로 변형되어 불용성 응집체를 형성하고 중추신경계 스펀지형 뇌병증을 유발하는 무핵산 병원체 기전은?",
      options: ["레트로바이러스 전파 기전", "단백질 유도 응집 감염 (프리온, Prion)", "세균성 독소 외독소 기전", "비로이드 (Viroid) 복제 기전"],
      correctIndex: 1,
      explanation: "스탠리 프루시너가 규명한 프리온은 핵산(DNA/RNA) 없이 오직 단백질의 3차원 입체 구조 변형과 전파만으로 감염을 일으키는 혁명적 병원체입니다.",
      deepKnowledge: "비정상 프리온은 고열, 방사선, 일반 단백질 분해효소(Proteinase K) 처리에 극도의 저항성을 지니며 광우병(BSE)과 크로이츠펠트-야코프병(CJD)을 유발합니다.",
      sourceOrTrivia: "Prusiner (1982) Science 216 / Nobel Prize (1997)",
      wrongOptionsReason: [
        "레트로바이러스는 RNA 유전체를 가진 바이러스입니다.",
        "정답입니다. 핵산 없이 구조 변형으로 감염되는 프리온 기전입니다.",
        "세균성 외독소는 세균이 분비하는 단백질 독소입니다.",
        "비로이드는 단백질 껍질 없는 단일가닥 원형 RNA 병원체입니다."
      ]
    },
    {
      id: "ultra_bio_9",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "중합효소 연쇄 반응(PCR)에서 열에 변성되지 않고 72℃ 고온에서 새로운 DNA 가닥을 합성하는 데 사용되는 호열성 세균 유래 DNA 중합효소는?",
      options: ["Taq 중합효소 (Taq Polymerase)", "DNA 중합효소 I", "RNA 중합효소 II", "역전사효소"],
      correctIndex: 0,
      explanation: "온천수 호열성 세균 Thermus aquaticus에서 추출한 Taq 중합효소는 95℃의 고온 DNA 변성 단계에서도 실활되지 않아 자동화된 PCR 순환 반응을 가능케 했습니다.",
      deepKnowledge: "캐리 멀리스는 Taq 효소를 도입하여 유전자 증폭 기술을 완성하고 1993년 노벨화학상을 수상했습니다.",
      sourceOrTrivia: "Saiki et al. (1988) Science 239, 487-491",
      wrongOptionsReason: [
        "정답입니다. 열에 강한 내열성 Taq 중합효소입니다.",
        "DNA 중합효소 I은 상온 대장균 효소로 고온에서 쉽게 변성됩니다.",
        "RNA 중합효소 II는 mRNA 전사를 담당하는 효소입니다.",
        "역전사효소는 RNA로부터 상보적 DNA(cDNA)를 합성하는 효소입니다."
      ]
    },
    {
      id: "ultra_bio_10",
      topic: "생명과학 & 의학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "신경계에서 신경세포(뉴런) 사이에 신경전달물질이 방출되어 신호가 전달되는 미세한 연결 틈새 구조는?",
      options: ["랑비에 결절", "시냅스 (Synapse)", "축삭둔덕", "말이집 (수초)"],
      correctIndex: 1,
      explanation: "시냅스는 축삭 말단과 다음 신경세포의 수상돌기 사이의 약 20nm 간격으로, 칼슘 유입에 의해 신경전달물질이 소포에서 분비되어 신호를 전달합니다.",
      deepKnowledge: "전기적 신호가 시냅스에서 화학적 신호로 변환되는 과정은 신호의 방향성과 가변적 조절(가소성)을 가능하게 합니다.",
      sourceOrTrivia: "Sherrington (1897) The Integrative Action of the Nervous System",
      wrongOptionsReason: [
        "랑비에 결절은 말이집 사이의 도약전도가 일어나는 무수초 부위입니다.",
        "정답입니다. 뉴런 간 화학적 신호 전달 통로인 시냅스입니다.",
        "축삭둔덕은 활동전위가 최초로 생성되는 신경세포체 부위입니다.",
        "말이집은 축삭을 감싸 절연체 역할을 하는 지질 구조입니다."
      ]
    },
    {
      id: "ultra_bio_11",
      topic: "생명과학 & 의학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "후성유전학(Epigenetics)에서 DNA 염기서열 자체의 변화 없이 유전자 발현을 억제(침묵)시키는 대표적인 화학적 수식은?",
      options: ["사이토신 5번 탄소의 메틸화 (DNA Methylation)", "인산화", "글리코실화", "유비퀴틴화"],
      correctIndex: 0,
      explanation: "DNA 메틸화는 CpG 섬(CpG island)의 사이토신에 메틸기(-CH3)가 결합하여 전사인자의 접근을 차단함으로써 유전자 전사를 억제하는 기전입니다.",
      deepKnowledge: "히스톤 단백질의 아세틸화는 염색질을 느슨하게 열어 전사를 촉진하는 반면, 탈아세틸화와 특정 메틸화는 이형염색질을 형성하여 유전자를 침묵시킵니다.",
      sourceOrTrivia: "Bird (2002) Genes & Dev 16",
      wrongOptionsReason: [
        "정답입니다. 전사를 영구적 또는 가역적으로 억제하는 DNA 메틸화입니다.",
        "인산화는 주로 단백질의 활성을 온/오프 조절하는 수식입니다.",
        "글리코실화는 단백질에 당 사슬이 결합하는 번역 후 수식입니다.",
        "유비퀴틴화는 분해할 단백질에 표지를 붙이는 과정입니다."
      ]
    },
    {
      id: "ultra_bio_12",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "이자(췌장)의 랑게르한스섬 베타($\\beta$) 세포에서 분비되며, 혈액 속의 포도당을 세포 내로 흡수시켜 혈당을 낮추는 호르몬은?",
      options: ["글루카곤", "에피네프린", "인슐린 (Insulin)", "코르티솔"],
      correctIndex: 2,
      explanation: "인슐린은 식후 혈당이 상승했을 때 분비되어 간과 근육에서 글리코젠 합성을 촉진하고 포도당 수송체(GLUT4)를 막으로 이동시켜 혈당을 강하시킵니다.",
      deepKnowledge: "반대로 혈당이 낮을 때는 알파($\\alpha$) 세포에서 글루카곤이 분비되어 글리코젠 분해와 당신생합성을 촉진합니다.",
      sourceOrTrivia: "Banting & Best (1922) J. Lab. Clin. Med.",
      wrongOptionsReason: [
        "글루카곤은 알파 세포에서 분비되어 혈당을 올리는 호르몬입니다.",
        "에피네프린은 부신수질에서 분비되는 스트레스 호르몬입니다.",
        "정답입니다. 유일하게 혈당을 낮추는 호르몬인 인슐린입니다.",
        "코르티솔은 부신피질에서 분비되어 당신생을 촉진하는 스테로이드 호르몬입니다."
      ]
    },
    {
      id: "ultra_bio_13",
      topic: "생명과학 & 의학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "혈액 순환계에서 산소가 풍부한 동맥혈을 온몸으로 뿜어내는 심장의 가장 두꺼운 근육벽을 가진 방은?",
      options: ["우심방", "우심실", "좌심방", "좌심실"],
      correctIndex: 3,
      explanation: "좌심실은 대동맥을 통해 전신의 모세혈관망까지 높은 혈압으로 혈액을 순환시켜야 하므로 심장 벽이 가장 두껍게 발달해 있습니다.",
      deepKnowledge: "우심실은 압력이 훨씬 낮은 폐순환만 담당하므로 좌심실 벽 두께의 약 3분의 1 수준에 불과합니다.",
      sourceOrTrivia: "Guyton and Hall Textbook of Medical Physiology",
      wrongOptionsReason: [
        "우심방은 온몸을 돌고 온 정맥혈을 받아들이는 곳입니다.",
        "우심실은 폐로 정맥혈을 보내는 방입니다.",
        "좌심방은 폐에서 산소화된 동맥혈을 받는 곳입니다.",
        "정답입니다. 대동맥으로 체순환을 뿜어내는 좌심실입니다."
      ]
    },
    {
      id: "ultra_bio_14",
      topic: "생명과학 & 의학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "바이러스 유전체인 단일가닥 RNA로부터 상보적인 DNA를 합성하여 숙주 유전체에 삽입되도록 하는 레트로바이러스의 핵심 효소는?",
      options: ["RNA 중합효소", "역전사효소 (Reverse Transcriptase)", "DNA 리가아제", "헬리카아제"],
      correctIndex: 1,
      explanation: "역전사효소는 중심원리(DNA→RNA)의 역방향(RNA→DNA) 흐름을 증명한 효소로, 테민과 볼티모어가 1970년 발견하여 1975년 노벨상을 받았습니다.",
      deepKnowledge: "HIV 치료제인 AZT 등은 역전사효소의 기질 결합을 방해하는 뉴클레오사이드 유사체 역전사 억제제(NRTI)입니다.",
      sourceOrTrivia: "Temin & Mizutani (1970) & Baltimore (1970) Nature",
      wrongOptionsReason: [
        "RNA 중합효소는 DNA를 주형으로 RNA를 만드는 효소입니다.",
        "정답입니다. RNA를 주형으로 DNA를 역방향 합성하는 역전사효소입니다.",
        "DNA 리가아제는 끊어진 DNA 가닥을 연결하는 효소입니다.",
        "헬리카아제는 이중 나선을 풀어헤치는 효소입니다."
      ]
    },
    {
      id: "ultra_bio_15",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "세균이 특정 항생제의 공격을 무력화하기 위해 페니실린 계열 항생제의 핵심 고리 구조를 가수분해하여 파괴하는 효소는?",
      options: ["베타락타마제 (Beta-lactamase)", "DNA 분해효소", "프로테아제", "아밀라아제"],
      correctIndex: 0,
      explanation: "베타락타마제는 페니실린, 세팔로스포린 등의 4원환 베타락탐 고리를 절단하여 세균 세포벽 합성 억제 기능을 무력화시키는 대표적 항생제 내성 기전입니다.",
      deepKnowledge: "이에 대항하여 클라불란산(Clavulanic acid)처럼 베타락타마제를 비가역적으로 저해하는 복합 처방제가 개발되었습니다.",
      sourceOrTrivia: "Abraham & Chain (1940) Nature 146",
      wrongOptionsReason: [
        "정답입니다. 페니실린 고리를 분해하는 내성 효소 베타락타마제입니다.",
        "DNA 분해효소는 핵산을 분해하는 효소입니다.",
        "프로테아제는 펩타이드 결합을 자르는 단백질 분해효소입니다.",
        "아밀라아제는 녹말을 엿당으로 분해하는 소화효소입니다."
      ]
    },
    {
      id: "ultra_bio_16",
      topic: "생명과학 & 의학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "적응 면역계에서 세포 표면에 제시된 바이러스 항원 펩타이드를 인식하여 감염 세포를 직접 살상하는 T세포의 종류는?",
      options: ["조절 T세포 (Treg)", "보조 T세포 (CD4+ Th)", "세포독성 T세포 (CD8+ CTL)", "기억 B세포"],
      correctIndex: 2,
      explanation: "CD8+ 세포독성 T세포는 MHC 클래스 I 분자에 결합된 비자기(Non-self) 항원을 인식한 후 퍼포린과 그랜자임을 분비하여 표적 세포의 세포자멸사를 유도합니다.",
      deepKnowledge: "보조 T세포(CD4+)는 사이토카인을 분비해 B세포와 대식세포를 지휘하는 반면, CTL은 직접적인 물리적 사멸을 집행합니다.",
      sourceOrTrivia: "Janeway's Immunobiology, 9th Edition",
      wrongOptionsReason: [
        "조절 T세포는 과도한 면역 반응을 억제하고 자가면역을 방지합니다.",
        "보조 T세포는 다른 면역세포를 활성화하는 사이토카인을 분비합니다.",
        "정답입니다. 감염 세포를 직접 파괴하는 세포독성 T세포입니다.",
        "기억 B세포는 체액성 면역의 항체 기억을 보존합니다."
      ]
    },
    {
      id: "ultra_bio_17",
      topic: "생명과학 & 의학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "혈액 응고 과정에서 최종적으로 그물망을 형성하여 혈소판을 엉기게 하고 피떡(혈전)을 만들어 출혈을 멈추게 하는 불용성 섬유 단백질은?",
      options: ["알부민", "헤모글로빈", "피브린 (Fibrin, 섬유소)", "콜라겐"],
      correctIndex: 2,
      explanation: "트롬빈 효소에 의해 혈장 수용성 피브리노겐이 불용성 피브린 섬유로 전환되어 적혈구와 혈소판을 엮어 지혈 플러그를 완성합니다.",
      deepKnowledge: "혈우병 환자는 이 혈액 응고 연쇄 반응에 필요한 응고 인자(제8인자 또는 제9인자)가 결핍되어 지혈이 지연됩니다.",
      sourceOrTrivia: "Davie & Ratnoff (1964) Science 145",
      wrongOptionsReason: [
        "알부민은 혈장 삼투압 유지와 물질 수송을 담당합니다.",
        "헤모글로빈은 적혈구 내 산소 운반 단백질입니다.",
        "정답입니다. 혈전의 물리적 그물을 형성하는 피브린입니다.",
        "콜라겐은 피부, 연골 등 결합조직의 구조 단백질입니다."
      ]
    },
    {
      id: "ultra_bio_18",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "신장의 기능적 기본 단위인 네프론(Nephron)에서 보먼주머니와 함께 혈액의 여과가 일어나는 모세혈관 덩어리는?",
      options: ["세뇨관", "사구체 (Glomerulus)", "헨레 고리", "집합관"],
      correctIndex: 1,
      explanation: "사구체는 높은 유체정역학적 압력을 바탕으로 혈액 속의 물, 포도당, 아미노산, 요소 등 미세 분자를 보먼주머니로 여과시키는 모세혈관 구형 망입니다.",
      deepKnowledge: "정상 상태에서는 혈구와 고분자 단백질(알부민)이 사구체 여과 장벽(족세포)을 통과하지 못하므로 소변에서 단백뇨가 검출되면 신장 손상을 의미합니다.",
      sourceOrTrivia: "Brenner & Rector's The Kidney",
      wrongOptionsReason: [
        "세뇨관은 여과액에서 필요한 물질의 재흡수와 분비가 일어나는 관입니다.",
        "정답입니다. 혈액 여과가 일어나는 사구체입니다.",
        "헨레 고리는 소변 농축을 위한 삼투 기울기를 형성합니다.",
        "집합관은 최종적으로 소변을 신우로 모으는 관입니다."
      ]
    },
    {
      id: "ultra_bio_19",
      topic: "생명과학 & 의학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "식물의 엽록체 스트로마에서 대기 중의 이산화탄소($CO_2$)를 5탄당인 RuBP에 고정시키는 캘빈 회로의 핵심 효소는?",
      options: ["루비스코 (RuBisCO)", "ATP 합성효소", "PEP 카복실레이스", "피루브산 탈수소효소"],
      correctIndex: 0,
      explanation: "루비스코(Ribulose-1,5-bisphosphate carboxylase-oxygenase)는 지구상에서 가장 풍부한 효소로, 식물의 탄소 동화 작용을 주관합니다.",
      deepKnowledge: "루비스코는 산소와도 결합하는 산소화 반응을 일으켜 광호흡(Photorespiration)이라는 에너지 낭비를 유발하므로, C4 식물과 CAM 식물은 이를 극복하는 농축 기전을 진화시켰습니다.",
      sourceOrTrivia: "Calvin (1961 Nobel Prize in Chemistry)",
      wrongOptionsReason: [
        "정답입니다. 지구상 최대의 탄소 고정 효소인 루비스코입니다.",
        "ATP 합성효소는 양성자 구동력으로 ATP를 만드는 효소입니다.",
        "PEP 카복실레이스는 C4 식물의 엽육세포에서 1차 탄소 고정을 맡습니다.",
        "피루브산 탈수소효소는 해당과정과 TCA 회로를 잇는 효소입니다."
      ]
    },
    {
      id: "ultra_bio_20",
      topic: "생명과학 & 의학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "인간 유전체 프로젝트(HGP) 이후 밝혀진 인간 DNA 중 실제 단백질을 암호화하는 엑손(Exon) 영역이 차지하는 비율은 대략 얼마인가?",
      options: ["약 1.5% 내외", "약 50%", "약 80%", "약 99%"],
      correctIndex: 0,
      explanation: "놀랍게도 30억 쌍의 인간 게놈 중 단백질을 코딩하는 서열은 약 1.5%에 불과하며, 나머지는 인트론, 조절 영역, 반복 서열, 비코딩 RNA 등으로 구성되어 있습니다.",
      deepKnowledge: "과거 '정크 DNA'로 치부되었던 비코딩 영역은 ENCODE 프로젝트를 통해 유전자 발현을 정밀 조절하는 핵심 후성유전학적 스위치 역할을 함이 밝혀졌습니다.",
      sourceOrTrivia: "International Human Genome Sequencing Consortium (2001) Nature 409",
      wrongOptionsReason: [
        "정답입니다. 단백질 코딩 서열은 전체 게놈의 불과 1.5% 수준입니다.",
        "50%는 트랜스포존 등 반복 서열의 비율에 가깝습니다.",
        "80%는 ENCODE 프로젝트가 밝힌 생화학적 전사 활성을 가진 게놈의 비율입니다.",
        "99%는 두 사람 사이의 게놈 염기서열 유사도에 해당하는 수치입니다."
      ]
    },
    {
      id: "ultra_bio_21",
      topic: "생명과학 & 의학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "인간의 적혈구에 존재하며 철(Fe) 이온을 함유하여 폐에서 조직으로 산소를 운반하는 복합 단백질은?",
      options: ["미오글로빈", "헤모글로빈 (Hemoglobin)", "인슐린", "면역글로불린"],
      correctIndex: 1,
      explanation: "헤모글로빈은 4개의 폴리펩타이드 사슬(알파2, 베타2)과 4개의 헴(Heme)기로 이루어져 있어 한 분자당 최대 4개의 산소 분자($O_2$)를 결합합니다.",
      deepKnowledge: "헤모글로빈은 산소 결합 시 다른 소단위체의 산소 친화도가 증가하는 협동성(Cooperativity)을 보여 S자형 산소 해리 곡선을 나타냅니다.",
      sourceOrTrivia: "Perutz (1960) Nature 185 (Nobel Prize in Chemistry 1962)",
      wrongOptionsReason: [
        "미오글로빈은 근육 조직에 산소를 저장하는 단일 사슬 단백질입니다.",
        "정답입니다. 적혈구의 주 산소 운반 단백질인 헤모글로빈입니다.",
        "인슐린은 혈당 조절 펩타이드 호르몬입니다.",
        "면역글로불린은 B세포가 분비하는 항체 단백질입니다."
      ]
    },
    {
      id: "ultra_bio_22",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "mRNA의 유전 암호 코돈(Codon)에 대응하여 특정 아미노산을 리보솜으로 운반해 단백질 번역을 완수하는 RNA는?",
      options: ["tRNA (운반 RNA)", "rRNA (리보솜 RNA)", "snRNA", "siRNA"],
      correctIndex: 0,
      explanation: "tRNA는 클로버 잎 모양의 3차원 구조를 가지며, 한쪽 끝에는 3개 염기의 안티코돈이, 반대편 3' 말단에는 아미노산이 결합되어 리보솜으로 수송됩니다.",
      deepKnowledge: "아미노아실-tRNA 합성효소(aaRS)는 20종의 아미노산을 각 tRNA에 오차율 1만분의 1 이하로 정밀하게 결합시키는 교정 기능을 갖추고 있습니다.",
      sourceOrTrivia: "Crick (1958) 'On Protein Synthesis' / Holley (1965) Science",
      wrongOptionsReason: [
        "정답입니다. 아미노산을 운반하는 tRNA입니다.",
        "rRNA는 리보솜을 구성하며 펩타이드 결합을 촉매합니다.",
        "snRNA는 스플라이싱 복합체(Spliceosome)를 구성합니다.",
        "siRNA는 RNA 간섭(RNAi)을 통해 표적 mRNA를 분해합니다."
      ]
    },
    {
      id: "ultra_bio_23",
      topic: "생명과학 & 의학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "세포막을 가로질러 3개의 나트륨($Na^+$)을 세포 밖으로 퍼내고 2개의 칼륨($K^+$)을 세포 안으로 들여와 휴지 전위(-70mV)를 유지하는 수송체는?",
      options: ["전압 개폐성 칼슘 채널", "$Na^+/K^+$ ATP가수분해효소 펌프", "포도당 촉진확산 수송체", "아쿠아포린"],
      correctIndex: 1,
      explanation: "나트륨-칼륨 펌프는 ATP 에너지를 직접 소비하여 농도 기울기를 거슬러 이온을 수송하는 1차 능동수송체로, 신경 세포의 흥분성 유지에 필수적입니다.",
      deepKnowledge: "이 펌프는 세포 전체 ATP 소비량의 약 30%(뇌세포의 경우 50% 이상)를 소모하는 생체 핵심 열역학 장치입니다.",
      sourceOrTrivia: "Skou (1957) Biochim. Biophys. Acta / Nobel Prize in Chemistry (1997)",
      wrongOptionsReason: [
        "칼슘 채널은 수동 수송으로 칼슘을 유입시키는 채널입니다.",
        "정답입니다. 휴지 전위를 형성하는 1차 능동수송 나트륨-칼륨 펌프입니다.",
        "포도당 수송체는 농도 기울기를 따르는 촉진확산체입니다.",
        "아쿠아포린은 물 분자만 선택적으로 통과시키는 수분 통로입니다."
      ]
    },
    {
      id: "ultra_bio_24",
      topic: "생명과학 & 의학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "장내에 서식하는 수십조 마리의 미생물 군집과 중추신경계가 미주신경 및 대사산물(단쇄지방산)을 통해 양방향으로 긴밀히 소통하는 축을 부르는 용어는?",
      options: ["장-뇌 축 (Gut-Brain Axis)", "시상하부-뇌하수체 축", "신경-내분비 루프", "뇌실막 장벽"],
      correctIndex: 0,
      explanation: "장-뇌 축은 장내 미생물총(Microbiome)이 세로토닌 생성, 신경 전달, 면역 반응을 조절하여 우울증, 파킨슨병, 자폐스펙트럼 등 뇌 기능에 지대한 영향을 미친다는 최신 의학 패러다임입니다.",
      deepKnowledge: "체내 세로토닌의 약 90% 이상이 뇌가 아닌 장의 장크롬친화성 세포에서 장내 미생물의 자극을 받아 합성됩니다.",
      sourceOrTrivia: "Cryan & Dinan (2012) Nature Reviews Neuroscience 13",
      wrongOptionsReason: [
        "정답입니다. 장내 미생물과 뇌의 양방향 소통을 뜻하는 장-뇌 축입니다.",
        "HPA 축은 스트레스 반응을 조절하는 내분비 경로입니다.",
        "신경-내분비 루프는 일반적인 호르몬 조절 경로 명칭입니다.",
        "뇌실막 장벽은 뇌척수액과 뇌실질 사이의 경계막입니다."
      ]
    },
    {
      id: "ultra_bio_25",
      topic: "생명과학 & 의학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "간에서 합성되어 쓸개(담낭)에 저장되었다가 십이지장으로 분비되며, 지방 방울을 미세하게 유화시켜 소화효소(리파아제) 작용을 돕는 액체는?",
      options: ["위산", "이자액", "쓸개즙 (담즙, Bile)", "침 (타액)"],
      correctIndex: 2,
      explanation: "쓸개즙은 소화효소는 없지만 담즙산염의 계면활성 작용을 통해 큰 지방 덩어리를 미세한 유화 방울로 쪼개어 리파아제의 접촉 표면적을 폭발적으로 넓힙니다.",
      deepKnowledge: "쓸개즙 색소의 주성분인 빌리루빈은 노화된 적혈구의 헤모글로빈이 파괴될 때 헴이 분해되어 생성되는 대사 부산물입니다.",
      sourceOrTrivia: "Vander's Human Physiology, 14th Edition",
      wrongOptionsReason: [
        "위산은 위에서 분비되어 단백질을 변성시키고 살균합니다.",
        "이자액은 3대 영양소 분해효소가 모두 들어있는 소화액입니다.",
        "정답입니다. 지방을 물리적으로 유화시키는 쓸개즙입니다.",
        "침은 프티알린(아밀라아제)이 들어있는 구강 분비액입니다."
      ]
    }
  ],
  earth_environment: [
    {
      id: "ultra_geo_1",
      topic: "지구과학 & 환경생태",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "지구 내부 층상 구조 중, 지각과 맨틀의 경계면으로 지진파의 속도가 불연속적으로 급격히 빨라지는 면의 명칭은?",
      options: ["구텐베르크 불연속면", "모호로비치치 불연속면 (모호면)", "레만 불연속면", "콘라드 불연속면"],
      correctIndex: 1,
      explanation: "모호로비치치 불연속면(약칭 모호면)은 대륙 지각 아래 약 35km, 해양 지각 아래 약 5km 깊이에 존재하는 지각과 맨틀의 뚜렷한 경계면입니다.",
      deepKnowledge: "1909년 크로아티아 지진학자 안드리야 모호로비치치가 천발 지진파 도달 시간 분석을 통해 고속 매질의 굴절파 존재를 밝혀내며 발견했습니다.",
      sourceOrTrivia: "Mohorovičić (1910) Jahrbuch des meteorologischen Observatoriums in Zagreb",
      wrongOptionsReason: [
        "구텐베르크면은 맨틀과 외핵 사이의 경계(약 2,900km)입니다.",
        "정답입니다. 지각과 맨틀 사이의 경계인 모호면입니다.",
        "레만면은 액체 외핵과 고체 내핵 사이의 경계(약 5,100km)입니다.",
        "콘라드면은 대륙 지각 상부(화강암질)와 하부(현무암질) 사이의 경계입니다."
      ]
    },
    {
      id: "ultra_geo_2",
      topic: "지구과학 & 환경생태",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "지구 대기권의 4대 층상 구조 중, 오존층이 존재하여 자외선을 흡수함으로써 고도가 높아질수록 기온이 상승하고 대기가 매우 안정한 층은?",
      options: ["대류권", "성층권 (Stratosphere)", "중간권", "열권"],
      correctIndex: 1,
      explanation: "성층권(약 12~50km)은 오존이 태양 자외선을 흡수하여 가열되므로 위로 갈수록 온도가 상승하며, 대류가 일어나지 않아 여객기의 순항 고도로 활용됩니다.",
      deepKnowledge: "성층권의 오존 농도는 약 20~30km 고도에서 최대치를 이루며, 생명체에 치명적인 단파장 자외선(UV-C 및 대부분의 UV-B)을 완벽히 차단합니다.",
      sourceOrTrivia: "Ahrens (2018) Meteorology Today, 12th Edition",
      wrongOptionsReason: [
        "대류권은 기상 현상이 발생하며 위로 갈수록 기온이 낮아집니다.",
        "정답입니다. 오존층이 존재하여 역전층을 형성하는 성층권입니다.",
        "중간권은 대기권 중 최저 기온(-90℃)이 나타나는 층입니다.",
        "열권은 태양 X선 흡수로 고온을 띠며 오로라가 발생하는 층입니다."
      ]
    },
    {
      id: "ultra_geo_3",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "동태평양 적도 해역의 해수면 온도가 평년보다 0.5℃ 이상 높은 상태가 수개월 이상 지속되는 이상 기후 현상은?",
      options: ["라니냐 (La Niña)", "엘니뇨 (El Niño)", "인도양 다이폴 (IOD)", "북극진동 (AO)"],
      correctIndex: 1,
      explanation: "엘니뇨는 적도 무역풍이 약화되어 서태평양의 따뜻한 해수가 동태평양으로 이동하고 페루 연안의 용승이 차단되면서 발생합니다.",
      deepKnowledge: "엘니뇨 시기에는 남미 서해안에 폭우와 홍수가, 인도네시아와 호주 등 서태평양 지역에는 극심한 가뭄과 산불이 유발됩니다.",
      sourceOrTrivia: "NOAA Climate Prediction Center - ENSO Monitoring",
      wrongOptionsReason: [
        "라니냐는 동태평양 수온이 평년보다 비정상적으로 차가워지는 현상입니다.",
        "정답입니다. 동태평양 수온이 비정상적으로 상승하는 엘니뇨입니다.",
        "인도양 다이폴은 인도양 동서 간의 수온 편차 진동입니다.",
        "북극진동은 북극 소용돌이의 세력 변화에 따른 한파 주기입니다."
      ]
    },
    {
      id: "ultra_geo_4",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "지구 외핵의 액체 철-니켈 유체가 자전과 열대류에 의해 회전하면서 거대한 전류를 유도하고 지구 자기장을 스스로 발생·유지한다는 이론은?",
      options: ["대륙이동설", "다이내모 이론 (Geodynamo Theory)", "맨틀 대류설", "탄성반발설"],
      correctIndex: 1,
      explanation: "다이내모 이론은 지구 외핵의 전도성 유체 운동이 전자기 유도 법칙에 따라 영구 전자석처럼 지구 자기장을 자체 재생산한다고 설명합니다.",
      deepKnowledge: "지구 자기장은 태양풍의 고에너지 하전입자들을 차단하여 밴 앨런 복사대를 형성하고 지구 대기가 우주로 유실되는 것을 막아줍니다.",
      sourceOrTrivia: "Elsasser (1946) Phys. Rev. 69 / Bullard (1949)",
      wrongOptionsReason: [
        "대륙이동설은 판게아 대륙의 분리를 설명하는 학설입니다.",
        "정답입니다. 액체 금속 외핵의 대류 발전 현상을 규명한 다이내모 이론입니다.",
        "맨틀 대류설은 판 운동의 구동력을 설명하는 이론입니다.",
        "탄성반발설은 지진의 발생 메커니즘을 설명하는 이론입니다."
      ]
    },
    {
      id: "ultra_geo_5",
      topic: "지구과학 & 환경생태",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "대서양에서 멕시코 만류가 북상하여 냉각되고 염분이 높아져 가라앉음으로써 전 지구적 해양 열수송을 담당하는 해류 순환계로, 최근 지구온난화로 붕괴 우려가 커진 시스템은?",
      options: ["대서양 자오선 역전순환 (AMOC)", "쿠로시오 해류계", "엘니뇨-남방진동", "환남극 순환류 (ACC)"],
      correctIndex: 0,
      explanation: "AMOC(Atlantic Meridional Overturning Circulation)는 열대 열을 북유럽으로 실어 나르는 거대한 컨베이어 벨트로, 그린란드 빙하가 녹아 담수가 유입되면 침강이 멈춰 유럽에 한랭화를 초래할 수 있습니다.",
      deepKnowledge: "기후학자들은 AMOC가 기후 시스템의 비가역적 파국을 초래할 수 있는 핵심 티핑 포인트(Tipping Point) 중 하나라고 경고합니다.",
      sourceOrTrivia: "Rahmstorf et al. (2015) Nature Climate Change 5",
      wrongOptionsReason: [
        "정답입니다. 전 지구 해양 열순환의 핵심 축인 AMOC입니다.",
        "쿠로시오 해류는 북태평양 서안 경계류입니다.",
        "남방진동은 열대 태평양의 기압 시소 현상입니다.",
        "환남극 순환류는 남극 대륙 주위를 동쪽으로 도는 거대한 해류입니다."
      ]
    },
    {
      id: "ultra_geo_6",
      topic: "지구과학 & 환경생태",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "약 2억 5천만 년 전 고생대 말 페름기-트라이아스기 대멸종(The Great Dying) 당시 해양 생물종의 96%를 절멸시킨 가장 유력한 지구물리학적 원인은?",
      options: ["소행성 충돌", "시베리아 트랩(Siberian Traps) 대규모 현무암질 화산 분출", "산소 농도의 비정상적 급증", "빙하기의 급작스러운 도래"],
      correctIndex: 1,
      explanation: "시베리아 트랩에서 분출된 수백만 입방킬로미터의 용암과 석탄층 연소로 막대한 온실가스($CO_2$, $CH_4$)가 대기에 뿜어져 급격한 온난화와 해양 산성화, 무산소화(Anoxia)를 유발했습니다.",
      deepKnowledge: "해양의 무산소 환경에서 황산염 환원균이 번성하여 유독한 황화수소($H_2S$) 가스를 대량 방출함으로써 육상 생태계까지 초토화되었습니다.",
      sourceOrTrivia: "Burgess et al. (2014) PNAS 111, 3316-3321",
      wrongOptionsReason: [
        "소행성 충돌은 중생대 말 K-Pg 멸종(공룡 멸종)의 주원인입니다.",
        "정답입니다. 고생대 말 대멸종을 촉발한 시베리아 트랩 화산 활동입니다.",
        "당시 해양은 산소가 완전히 고갈된 무산소증 상태였습니다.",
        "당시는 빙하기가 아니라 극심한 폭염 온난화가 문제였습니다."
      ]
    },
    {
      id: "ultra_geo_7",
      topic: "지구과학 & 환경생태",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "제임스 러브록(James Lovelock)이 주창한 가설로, 지구와 지구상의 모든 생물권이 하나의 거대한 자기조절 복합 유기체처럼 기능하여 환경을 생명 유지에 적합하도록 능동적으로 제어한다는 학설은?",
      options: ["가이아 가설 (Gaia Hypothesis)", "판구조론", "지속가능성 이론", "생태발자국 이론"],
      correctIndex: 0,
      explanation: "가이아 가설은 지구 대기의 조성(산소 21%, 메탄, 질소)과 해양 염분, 지표 온도가 생명 활동과의 유기적 피드백을 통해 40억 년간 안정된 항상성을 유지해 왔다고 주장합니다.",
      deepKnowledge: "린 마굴리스와의 협력을 통해 발전된 이 이론은 지구 시스템 과학(Earth System Science)이라는 융합 학문의 토대를 마련했습니다.",
      sourceOrTrivia: "Lovelock & Margulis (1974) Tellus 26",
      wrongOptionsReason: [
        "정답입니다. 지구를 능동적 자기조절 유기체로 보는 가이아 가설입니다.",
        "판구조론은 지구 암석권 판들의 운동을 설명하는 지질학 이론입니다.",
        "지속가능성 이론은 미래 세대를 위한 자원 보전 패러다임입니다.",
        "생태발자국은 인간이 자연에 남기는 생태적 수요를 측정한 지표입니다."
      ]
    },
    {
      id: "ultra_geo_8",
      topic: "지구과학 & 환경생태",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "중생대 백악기 말-신생대 고진기 경계층(K-Pg 경계) 전 세계 퇴적층에서 발견되며, 직경 10km 소행성이 유카탄 반도 칙술루브에 충돌했음을 증명한 희귀 원소는?",
      options: ["우라늄 (U)", "이리듐 (Ir)", "플루토늄 (Pu)", "티타늄 (Ti)"],
      correctIndex: 1,
      explanation: "이리듐은 지표면에는 거의 없고 소행성이나 지구 핵에 농축된 친철성 백금족 원소로, 루이스 앨버레즈 연구팀이 점토층에서 비정상적 고농도 이리듐 피크를 발견했습니다.",
      deepKnowledge: "이 충돌로 인해 발생한 메가 쓰나미, 전 지구적 산불, 그리고 충돌 먼지가 태양을 가린 '충돌 겨울'로 인해 공룡을 포함한 지구 생물종의 75%가 멸종했습니다.",
      sourceOrTrivia: "Alvarez et al. (1980) Science 208, 1095-1108",
      wrongOptionsReason: [
        "우라늄은 지각 암석에 광범위하게 존재하는 방사성 원소입니다.",
        "정답입니다. 소행성 충돌의 지질학적 지문인 이리듐입니다.",
        "플루토늄은 인공 방사성 원소로 자연 지층에는 없습니다.",
        "티타늄은 지각을 구성하는 흔한 조암 광물 원소입니다."
      ]
    },
    {
      id: "ultra_geo_9",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "해양 생태계의 갯벌, 염습지, 맹그로브 숲 등 연안 서식지 식생과 퇴적층에 장기간 격리·저장되는 탄소를 일컫는 용어는?",
      options: ["그린 카본 (Green Carbon)", "블랙 카본 (Black Carbon)", "블루 카본 (Blue Carbon)", "브라운 카본 (Brown Carbon)"],
      correctIndex: 2,
      explanation: "블루 카본은 육상 산림(그린 카본)보다 탄소 흡수 속도가 최대 50배 빠르고 수백~수천 년간 탄소를 해저 퇴적층에 격리할 수 있어 기후변화 대응의 핵심 자원으로 꼽힙니다.",
      deepKnowledge: "염습지와 갯벌은 산소가 희박한 혐기성 퇴적 환경 덕분에 유기물이 미생물에 의해 쉽게 분해되지 않고 안정적으로 고착됩니다.",
      sourceOrTrivia: "Nellemann et al. (UNEP, 2009) 'Blue Carbon: The Role of Healthy Oceans'",
      wrongOptionsReason: [
        "그린 카본은 육상 식물과 산림에 흡수·저장되는 탄소입니다.",
        "블랙 카본은 화석연료 불완전 연소로 생기는 매연 분진입니다.",
        "정답입니다. 해양 및 연안 생태계가 격리하는 블루 카본입니다.",
        "브라운 카본은 유기물 연소로 방출되는 황갈색 탄소 입자입니다."
      ]
    },
    {
      id: "ultra_geo_10",
      topic: "지구과학 & 환경생태",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "판구조론에서 서로 마주보고 다가오는 수렴형 판 경계 중, 밀도가 큰 해양판이 밀도가 작은 대륙판 아래로 비스듬히 미끄러져 들어가는 영역은?",
      options: ["섭입대 (Subduction Zone)", "발산대 (열곡대)", "변환단층", "해저 확장대"],
      correctIndex: 0,
      explanation: "섭입대에서는 심해 해구(Trench)가 형성되며, 판이 깊숙이 들어가면서 마그마가 생성되어 화산호(Volcanic Arc)와 심발 지진이 발생합니다.",
      deepKnowledge: "섭입하는 해양판의 경사면을 따라 진원이 점점 깊어지는 지진대를 '베니오프대(Wadati-Benioff Zone)'라고 부릅니다.",
      sourceOrTrivia: "Kearey, Klepeis, Vine (2009) Global Tectonics",
      wrongOptionsReason: [
        "정답입니다. 판이 지하로 침강하는 섭입대입니다.",
        "발산대는 판이 서로 멀어지며 새로운 지각이 생성되는 곳입니다.",
        "변환단층은 판이 수평으로 엇갈려 미끄러지는 보존형 경계입니다.",
        "해저 확장대는 해령에서 새로운 해양저가 생겨나는 곳입니다."
      ]
    },
    {
      id: "ultra_geo_11",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "지구 궤도의 주기적 천문학적 변화(이심률, 자전축 기울기, 세차운동)가 지구에 도달하는 태양 복사 에너지 분포를 변화시켜 빙하기와 간빙기를 주기적으로 촉발한다는 이론은?",
      options: ["밀란코비치 주기 (Milankovitch Cycles)", "태양 활동 주기설", "맨틀 플룸 주기설", "판게아 주기"],
      correctIndex: 0,
      explanation: "세르비아 물리학자 밀루틴 밀란코비치가 계산한 이론으로, 이심률(10만년), 자전축 기울기(4.1만년), 세차운동(2.6만년) 주기의 중첩이 빙하기를 지배함을 규명했습니다.",
      deepKnowledge: "1976년 심해 퇴적물 코어의 산소 동위원소($\\delta^{18}O$) 분석을 통해 지질학적 빙하기 데이터와 밀란코비치 계산이 완벽히 일치함이 입증되었습니다.",
      sourceOrTrivia: "Hays, Imbrie, Shackleton (1976) Science 194",
      wrongOptionsReason: [
        "정답입니다. 지구 궤도 천문학적 요인에 의한 기후 주기 이론입니다.",
        "태양 활동 주기는 11년 흑점 주기를 가리킵니다.",
        "맨틀 플룸 주기설은 지각 하부의 대규모 마그마 상승 주기입니다.",
        "판게아 주기는 초대륙이 모이고 흩어지는 5억 년 주기입니다."
      ]
    },
    {
      id: "ultra_geo_12",
      topic: "지구과학 & 환경생태",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "판의 내부 맨틀 깊은 곳(코어-맨틀 경계인 D'' 층)에서 고온의 마그마 기둥이 상승하여 마그마를 지속적으로 공급하는 지점으로, 하와이 제도 화산열을 형성한 근원은?",
      options: ["열점 (Hotspot / Mantle Plume)", "해령 (Oceanic Ridge)", "해구 (Trench)", "배호 분지"],
      correctIndex: 0,
      explanation: "열점은 판의 이동과 무관하게 하부 맨틀에서 고정된 위치를 유지하므로, 그 위를 지나가는 해양판에 줄지어 늘어선 화산섬 사슬(하와이-엠페러 해산열)을 만듭니다.",
      deepKnowledge: "J. 투조 윌슨이 제안하고 제이슨 모건이 맨틀 플룸 모델로 체계화한 개념으로 판구조론의 판 내부 화산 활동을 완벽히 설명했습니다.",
      sourceOrTrivia: "Wilson (1963) Can. J. Phys. / Morgan (1971) Nature",
      wrongOptionsReason: [
        "정답입니다. 판 내부 고정된 마그마 공급처인 열점입니다.",
        "해령은 판이 갈라지는 발산형 해저 산맥입니다.",
        "해구는 판이 섭입하는 깊은 해저 골짜기입니다.",
        "배호 분지는 화산호 뒤쪽에서 지각이 인장되어 생긴 분지입니다."
      ]
    },
    {
      id: "ultra_geo_13",
      topic: "지구과학 & 환경생태",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "프레온가스(CFCs)에 의해 남극 상공의 오존층이 파괴되는 것을 막기 위해 1987년 국제사회가 오존층 파괴 물질의 생산과 사용을 전면 규제하기로 합의한 환경 협약은?",
      options: ["교토 의정서", "파리 기후 협약", "몬트리올 의정서 (Montreal Protocol)", "바젤 협약"],
      correctIndex: 2,
      explanation: "몬트리올 의정서는 역사상 가장 성공적인 국제 환경 협약으로 평가받으며, CFC 물질 퇴출로 현재 성층권 오존층이 점진적으로 회복되고 있습니다.",
      deepKnowledge: "CFC에서 자외선에 의해 분리된 염소 원자(Cl) 1개는 연쇄 촉매 반응을 통해 무려 10만 개 이상의 오존 분자($O_3$)를 파괴합니다.",
      sourceOrTrivia: "Molina & Rowland (1974) Nature / UNEP Montreal Protocol (1987)",
      wrongOptionsReason: [
        "교토 의정서는 1997년 온실가스 감축을 위해 채택된 협약입니다.",
        "파리 협약은 2015년 지구 온도 상승을 1.5℃ 이내로 제한하기로 한 협약입니다.",
        "정답입니다. 오존층 파괴 물질을 규제한 몬트리올 의정서입니다.",
        "바젤 협약은 유해 폐기물의 국가 간 불법 이동을 규제하는 협약입니다."
      ]
    },
    {
      id: "ultra_geo_14",
      topic: "지구과학 & 환경생태",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "약 5,600만 년 전 신생대 팔레오세-에오세 경계에서 대기 중으로 대량의 온실가스가 급격히 분출되어 전 지구 기온이 5~8℃ 폭등하고 심해 탄산염 층이 용해된 극단적 온난화 사건은?",
      options: ["PETM (팔레오세-에오세 최고온기)", "소빙하기 (Little Ice Age)", "영거 드라이아스기", "중세 온난기"],
      correctIndex: 0,
      explanation: "PETM(Paleocene-Eocene Thermal Maximum)은 심해 메탄 하이드레이트 붕괴 등으로 수천 기가톤의 탄소가 분출된 사건으로, 현재 인류세의 온난화 속도와 영향을 비교 연구하는 고기후학의 핵심 모델입니다.",
      deepKnowledge: "탄소 동위원소($\\delta^{13}C$)의 급격한 음의 변위(Negative Excursion)를 통해 유기 탄소의 대량 유입이 실증되었습니다.",
      sourceOrTrivia: "Zachos et al. (2001) Science 292, 686-693",
      wrongOptionsReason: [
        "정답입니다. 과거 지구 온난화의 대표 모델인 PETM 사건입니다.",
        "소빙하기는 14~19세기에 걸쳐 유럽과 북미를 덮친 한랭기입니다.",
        "영거 드라이아스기는 마지막 빙하기 직후 일시적으로 찾아온 급격한 한랭화 사건입니다.",
        "중세 온난기는 10~13세기의 국지적 온난기입니다."
      ]
    },
    {
      id: "ultra_geo_15",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "지구 표면이 흡수한 태양 복사 에너지를 반사하는 비율을 뜻하며, 눈과 빙하(0.8~0.9)가 아스팔트나 짙은 바다(0.06~0.1)보다 훨씬 높은 물리량은?",
      options: ["방사율 (Emissivity)", "알베도 (Albedo, 반사율)", "투과율 (Transmittance)", "굴절률"],
      correctIndex: 1,
      explanation: "알베도가 높으면 빛을 반사해 표면이 차가워지고, 온난화로 빙하가 녹으면 알베도가 낮아져 태양열을 더 많이 흡수해 빙하가 더 빨리 녹는 양의 되먹임(Ice-Albedo Feedback)이 일어납니다.",
      deepKnowledge: "지구 전체의 평균 알베도는 약 0.30(30%) 수준으로, 구름과 지표면 얼음이 결정적인 기여를 합니다.",
      sourceOrTrivia: "Budyko (1969) Tellus 21",
      wrongOptionsReason: [
        "방사율은 물체가 흑체 대비 복사열을 방출하는 효율입니다.",
        "정답입니다. 표면의 빛 반사율을 나타내는 알베도입니다.",
        "투과율은 매질을 빛이 통과하는 비율입니다.",
        "굴절률은 매질 내에서 빛의 속도가 줄어드는 비율입니다."
      ]
    },
    {
      id: "ultra_geo_16",
      topic: "지구과학 & 환경생태",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "생태계에서 개체수가 많지는 않지만 생태계 전체의 구조와 생물다양성을 유지하는 데 결정적인 영향력을 행사하는 종(예: 북미 태평양 연안의 해달)을 지칭하는 용어는?",
      options: ["우점종 (Dominant Species)", "핵심종 (Keystone Species)", "지표종 (Indicator Species)", "외래종 (Invasive Species)"],
      correctIndex: 1,
      explanation: "로버트 페인이 제안한 개념으로, 해달이 성게를 잡아먹음으로써 해조류(다시마 숲)가 초토화되는 것을 막아 연안 전체의 생태계를 지탱하는 것이 대표적 사례입니다.",
      deepKnowledge: "핵심종이 사라지면 영양 단계의 연쇄 붕괴(Trophic Cascade)가 일어나 생태계 전체의 종 다양성이 급감합니다.",
      sourceOrTrivia: "Paine (1966) American Naturalist 100",
      wrongOptionsReason: [
        "우점종은 생체량이나 개체수가 가장 많아 겉보기를 지배하는 종입니다.",
        "정답입니다. 아치석의 쐐기돌처럼 생태계를 지탱하는 핵심종입니다.",
        "지표종은 환경 오염이나 기후 변화를 민감하게 반영하는 종입니다.",
        "외래종은 외부에서 유입되어 토착 생태계를 교란할 수 있는 종입니다."
      ]
    },
    {
      id: "ultra_geo_17",
      topic: "지구과학 & 환경생태",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "지구 자전으로 인해 북반구에서 운동하는 물체(바람, 해류 등)가 진행 방향의 오른쪽으로 휘어지게 만드는 가상적인 힘은?",
      options: ["구심력", "원심력", "전향력 (코리올리 힘, Coriolis Force)", "마찰력"],
      correctIndex: 2,
      explanation: "가스파르-귀스타브 드 코리올리가 수학적으로 유도한 힘으로, 회전 좌표계에서 운동하는 물체에 작용하여 북반구에서는 오른쪽, 남반구에서는 왼쪽으로 편향을 일으킵니다.",
      deepKnowledge: "태풍(열대저기압)이 북반구에서 반시계 방향으로 소용돌이치며 중심부로 불어 들어가는 이유가 바로 이 전향력 때문입니다.",
      sourceOrTrivia: "Coriolis (1835) Journal de l'École Polytechnique",
      wrongOptionsReason: [
        "구심력은 원운동을 유지하기 위해 중심으로 당기는 실제 힘입니다.",
        "원심력은 회전계에서 바깥쪽으로 튕겨 나간다고 느끼는 관성력입니다.",
        "정답입니다. 지구 자전에 의한 전향력(코리올리 힘)입니다.",
        "마찰력은 두 표면의 접촉에 의해 운동을 방해하는 저항력입니다."
      ]
    },
    {
      id: "ultra_geo_18",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "해저 지진, 해저 화산 폭발, 해저 산사태 등으로 인해 거대한 해수 전체가 상하로 출렁거리며 시속 수백 km로 해안으로 밀려오는 파동은?",
      options: ["풍랑 (Wind Waves)", "조석 (Tides)", "지진해일 (쓰나미, Tsunami)", "연안류"],
      correctIndex: 2,
      explanation: "쓰나미는 천해파(Shallow Water Wave)의 특성을 가져 파장이 수백 km에 달하므로 수심이 깊은 먼바다에서는 높이가 낮지만, 해안에 도달하면 속도가 줄어들며 파고가 수십 미터로 치솟습니다.",
      deepKnowledge: "쓰나미의 전파 속도는 $v = \\sqrt{gh}$ (g는 중력가속도, h는 수심)로 계산되어, 수심 4,000m의 대양에서는 제트기 속도인 시속 약 700km로 질주합니다.",
      sourceOrTrivia: "National Oceanic and Atmospheric Administration (NOAA) Tsunami Basics",
      wrongOptionsReason: [
        "풍랑은 해수면의 바람에 의해 생기는 일반 파도입니다.",
        "조석은 달과 태양의 기조력에 의한 하루 1~2회의 해수면 오르내림입니다.",
        "정답입니다. 해저 지각 변동에 의한 지진해일(쓰나미)입니다.",
        "연안류는 해안선을 따라 평행하게 흐르는 해류입니다."
      ]
    },
    {
      id: "ultra_geo_19",
      topic: "지구과학 & 환경생태",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "20세기 중반 해령을 축으로 대칭적인 줄무늬 형태로 기록된 고지자기 역전 패턴을 분석하여 '해저확장설(Seafloor Spreading)'을 결정적으로 입증한 발견은?",
      options: ["바인-매슈스-몰리 가설 (Vine-Matthews-Morley Hypothesis)", "베게너의 화석 일치", "베니오프대 발견", "모호로비치치 굴절파"],
      correctIndex: 0,
      explanation: "해령에서 솟아나 굳는 현무암질 용암에 당시 지구 자기장의 방향이 기록되고, 해령 양쪽으로 해저가 확장되면서 완벽한 대칭 줄무늬 자기 테이프 기록을 남겼음을 증명했습니다.",
      deepKnowledge: "이 발견은 당시 학계에서 조롱받던 알프레트 베게너의 대륙이동설을 현대의 정밀한 판구조론으로 완성시킨 결정적 계기가 되었습니다.",
      sourceOrTrivia: "Vine & Matthews (1963) Nature 199, 947-949",
      wrongOptionsReason: [
        "정답입니다. 해양저 자기 역전 대칭 패턴을 입증한 가설입니다.",
        "화석 일치는 베게너가 제시한 대륙이동의 초기 정성적 증거입니다.",
        "베니오프대는 섭입대의 지진 진원 분포를 밝힌 것입니다.",
        "모호면은 지각과 맨틀의 경계면입니다."
      ]
    },
    {
      id: "ultra_geo_20",
      topic: "지구과학 & 환경생태",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "지구 역사상 약 7억 년 전 원생누대 후기에 지구 표면 전체가 적도 부근까지 완전히 빙하로 뒤덮여 우주에서 볼 때 거대한 눈 뭉치처럼 보였다는 지질학적 학설은?",
      options: ["눈덩이 지구 가설 (Snowball Earth Hypothesis)", "소빙하기설", "휴로니안 빙하기", "안데스-사하라 빙하기"],
      correctIndex: 0,
      explanation: "폴 호프만 등이 정립한 눈덩이 지구 가설은 초토화된 알베도 양의 피드백으로 적도까지 바다가 수백 미터 두께로 얼어붙었으나, 화산에서 분출된 $CO_2$가 축적되어 해빙되었다고 설명합니다.",
      deepKnowledge: "눈덩이 지구가 녹는 과정에서 빙하 퇴적층 위에 탄산염암 캡(Cap Carbonate)이 형성되었으며, 이후 캄브리아기 다세포 생물의 폭발적 진화로 이어졌습니다.",
      sourceOrTrivia: "Hoffman et al. (1998) Science 281, 1342-1346",
      wrongOptionsReason: [
        "정답입니다. 적도까지 지구 전체가 얼어붙었던 눈덩이 지구 가설입니다.",
        "소빙하기는 근세의 미미한 기온 강하 시기입니다.",
        "휴로니안 빙하기는 24억 년 전 대산화 사건 직후의 빙하기입니다.",
        "안데스-사하라 빙하기는 고생대 오르도비스기 말의 빙하기입니다."
      ]
    },
    {
      id: "ultra_geo_21",
      topic: "지구과학 & 환경생태",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "마그마가 지표면으로 분출하여 빠르게 냉각되면서 입자가 미세하거나 유리질로 형성된 화성암(예: 현무암, 유문암)을 무엇이라 부르는가?",
      options: ["심성암 (Plutonic Rock)", "화산암 (Volcanic Rock / 분출암)", "변성암 (Metamorphic Rock)", "퇴적암 (Sedimentary Rock)"],
      correctIndex: 1,
      explanation: "화산암(분출암)은 지표면 밖으로 분출되어 급랭하므로 광물 결정이 크게 자랄 시간이 없어 세립질이나 유리질 조직을 띱니다.",
      deepKnowledge: "반면 지하 깊은 곳에서 서서히 식어 광물 입자가 굵고 뚜렷하게 발달한 화성암을 심성암(예: 화강암, 반려암)이라고 부릅니다.",
      sourceOrTrivia: "Tarbuck, Lutgens, Tasa (2017) Earth: An Introduction to Physical Geology",
      wrongOptionsReason: [
        "심성암은 지하 깊은 곳에서 서서히 굳은 조립질 화성암입니다.",
        "정답입니다. 지표 부근에서 급랭한 화산암입니다.",
        "변성암은 높은 열과 압력으로 기존 암석이 재결정된 암석입니다.",
        "퇴적암은 풍화 퇴적물이 다져지고 굳어져 층리를 이룬 암석입니다."
      ]
    },
    {
      id: "ultra_geo_22",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "생태계 먹이사슬의 각 영양 단계에서 상위 영양 단계로 전달되는 에너지의 비율이 보통 10% 내외에 불과하다는 생태학 법칙은?",
      options: ["하디-바인베르크 법칙", "린데만 10% 법칙 (Lindeman's Efficiency)", "베르그만의 법칙", "알렌의 법칙"],
      correctIndex: 1,
      explanation: "레이먼드 린데만이 확립한 법칙으로, 하위 생물이 섭취한 에너지의 약 90%는 호흡, 열 손실, 배설 등으로 소모되고 오직 10%만이 다음 단계의 생체량으로 축적됩니다.",
      deepKnowledge: "이 에너지 전달 효율의 급감 때문에 먹이사슬의 최상위 포식자(호랑이, 독수리 등)는 개체수가 매우 적을 수밖에 없으며 먹이 피라미드가 4~5단계 이상 유지되기 어렵습니다.",
      sourceOrTrivia: "Lindeman (1942) Ecology 23, 399-417",
      wrongOptionsReason: [
        "하디-바인베르크 법칙은 이상적 개체군에서 유전자 빈도의 보존 법칙입니다.",
        "정답입니다. 영양 단계별 에너지 전달 한계를 규명한 10% 법칙입니다.",
        "베르그만의 법칙은 추운 지방 동물일수록 체구가 커진다는 법칙입니다.",
        "알렌의 법칙은 추운 지방 동물일수록 말단 부위(귀, 코)가 작아진다는 법칙입니다."
      ]
    },
    {
      id: "ultra_geo_23",
      topic: "지구과학 & 환경생태",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "대기 중의 온실가스가 지표면에서 방출되는 지구 복사 에너지(적외선)를 흡수하였다가 다시 지표면으로 재복사하여 지구 평균 기온을 약 15℃로 온난하게 유지시키는 현상은?",
      options: ["산란 효과", "온실효과 (Greenhouse Effect)", "도시 열섬 효과", "단열 팽창"],
      correctIndex: 1,
      explanation: "온실효과가 없다면 지구의 평균 표면 온도는 영하 18℃에 불과하여 생명체가 살 수 없었으나, 수증기, $CO_2$, $CH_4$ 등의 온실가스가 생존 가능한 온도를 보장합니다.",
      deepKnowledge: "문제는 화석연료 연소로 온실가스 농도가 급격히 증가하여 평형을 깨고 '지구온난화(강화된 온실효과)'라는 인류세 위기를 촉발한 것입니다.",
      sourceOrTrivia: "Fourier (1824) & Arrhenius (1896) Philosophical Magazine",
      wrongOptionsReason: [
        "산란 효과는 빛이 입자에 부딪혀 사방으로 흩어지는 현상입니다.",
        "정답입니다. 지구 복사 적외선을 흡수 재방출하는 온실효과입니다.",
        "도시 열섬 효과는 인공 구조물로 도시 중심부 기온이 높아지는 현상입니다.",
        "단열 팽창은 공기 덩어리가 상승하며 압력 감소로 온도가 떨어지는 현상입니다."
      ]
    },
    {
      id: "ultra_geo_24",
      topic: "지구과학 & 환경생태",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "스웨덴 스톡홀름 회복력 센터가 2009년 발표한 프레임워크로, 인류가 안전하게 생존할 수 있는 지구 환경 한계치(기후변화, 생물다양성, 담수, 화학물질 등 9대 영역)를 정의한 개념은?",
      options: ["행성 한계선 (Planetary Boundaries)", "국가 온실가스 감축목표 (NDC)", "탄소 중립 넷제로", "생태 수용력"],
      correctIndex: 0,
      explanation: "요한 록스트룀 등이 제안한 행성 한계선은 지구 시스템이 자정 능력을 잃고 파국적인 비가역 상태로 전환되지 않기 위해 지켜야 할 절대적 생태 안전 영역입니다.",
      deepKnowledge: "2023년 최신 평가에 따르면 9개 영역 중 생물권 온전성, 기후변화, 신규 물질 유입, 질소·인 순환, 담수 변화, 토지 시스템 변화 등 6개 이상이 이미 한계선을 넘어섰습니다.",
      sourceOrTrivia: "Rockström et al. (2009) Nature / Richardson et al. (2023) Science Advances",
      wrongOptionsReason: [
        "정답입니다. 인류의 안전한 생존 경계를 정의한 행성 한계선입니다.",
        "NDC는 파리 협약에 따라 각국이 제출하는 탄소 감축 공약입니다.",
        "탄소 중립은 배출량과 흡수량을 같게 하여 순 배출을 0으로 만드는 것입니다.",
        "생태 수용력은 자연이 재생산할 수 있는 생물학적 생산력의 총량입니다."
      ]
    },
    {
      id: "ultra_geo_25",
      topic: "지구과학 & 환경생태",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "농경지 비료나 생활하수의 유입으로 하천과 호수에 질소와 인 같은 영양염류가 과다하게 유입되어 플랑크톤이 대량 증식하고 수중 용존산소가 고갈되는 현상은?",
      options: ["부영양화 (Eutrophication)", "사막화 (Desertification)", "토양 산성화", "생물 농축"],
      correctIndex: 0,
      explanation: "부영양화가 일어나면 조류가 폭발적으로 번성(녹조/적조)하고, 이 조류가 죽어 분해될 때 호기성 세균이 수중 산소를 모두 소모하여 어패류가 떼죽음을 당하는 빈산소 수괴(Dead Zone)가 형성됩니다.",
      deepKnowledge: "세계 해양과 하구에 보고된 저산소 데드존(Dead Zone)의 수는 화학비료 사용 증가로 지난 반세기 동안 수백 개 이상으로 급증했습니다.",
      sourceOrTrivia: "Diaz & Rosenberg (2008) Science 321, 926-929",
      wrongOptionsReason: [
        "정답입니다. 영양염류 과다로 인한 수질 오염 현상인 부영양화입니다.",
        "사막화는 건조지대의 토양이 황폐화되는 현상입니다.",
        "토양 산성화는 산성비나 화학비료로 토양 pH가 떨어지는 현상입니다.",
        "생물 농축은 중금속 등이 먹이사슬 상위로 갈수록 농축되는 현상입니다."
      ]
    }
  ]
};
