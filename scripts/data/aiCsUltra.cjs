module.exports = {
  ai_cs: [
    {
      id: "ultra_cs_1",
      topic: "AI & 컴퓨터 과학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "2017년 구글 연구팀이 'Attention Is All You Need' 논문에서 발표하여 오늘날 ChatGPT, Claude 등 현대 초거대 언어 모델(LLM)의 근간이 된 딥러닝 아키텍처는?",
      options: ["트랜스포머 (Transformer)", "합성곱 신경망 (CNN)", "순환 신경망 (RNN)", "다층 퍼셉트론 (MLP)"],
      correctIndex: 0,
      explanation: "트랜스포머는 재귀적 구조(RNN)를 완전히 제거하고 '셀프 어텐션(Self-Attention)' 메커니즘만으로 문맥의 장거리 의존성을 병렬 연산하여 자연어 처리의 혁명을 이끌었습니다.",
      deepKnowledge: "어텐션 가중치 행렬은 $\\text{Softmax}(QK^T / \\sqrt{d_k})V$ 수식으로 계산되어 쿼리와 키의 유사도를 기반으로 값(V) 벡터들의 가중합을 도출합니다.",
      sourceOrTrivia: "Vaswani et al. (2017) 'Attention Is All You Need', NeurIPS",
      wrongOptionsReason: [
        "정답입니다. 생성형 AI 혁명을 촉발한 트랜스포머 아키텍처입니다.",
        "CNN은 이미지 인식과 컴퓨터 비전 분야의 대표적인 합성곱 신경망입니다.",
        "RNN은 순차 시계열 데이터 처리에 쓰였으나 기울기 소실과 병렬화 한계가 있었습니다.",
        "MLP는 가장 고전적인 피드포워드 인공 신경망입니다."
      ]
    },
    {
      id: "ultra_cs_2",
      topic: "AI & 컴퓨터 과학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "현대 컴퓨터의 기본 설계 구조로, 데이터와 실행할 프로그램 명령어를 동일한 메모리(기억장치)에 저장하고 중앙처리장치(CPU)가 순차적으로 인출·해석해 실행하는 구조는?",
      options: ["폰 노이만 구조 (Von Neumann Architecture)", "하버드 구조", "튜링 아키텍처", "클라우드 분산 구조"],
      correctIndex: 0,
      explanation: "존 폰 노이만이 1945년 EDVAC 보고서에서 체계화한 '프로그램 내장 방식'으로, 하드웨어 회로 배선을 바꾸지 않고 소프트웨어 교체만으로 다목적 계산이 가능해졌습니다.",
      deepKnowledge: "CPU 연산 속도에 비해 CPU-메모리 간 단일 버스의 대역폭이 좁아 전체 시스템 성능이 저하되는 현상을 '폰 노이만 병목(Von Neumann Bottleneck)'이라고 부릅니다.",
      sourceOrTrivia: "von Neumann (1945) First Draft of a Report on the EDVAC",
      wrongOptionsReason: [
        "정답입니다. 현대 범용 컴퓨터의 표준 설계인 폰 노이만 구조입니다.",
        "하버드 구조는 명령어 메모리와 데이터 메모리의 물리적 버스를 분리한 구조입니다.",
        "튜링 아키텍처는 엔비디아의 특정 GPU 아키텍처 세대 이름입니다.",
        "클라우드 분산 구조는 네트워크로 연결된 여러 서버의 컴퓨팅 방식입니다."
      ]
    },
    {
      id: "ultra_cs_3",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "관계형 데이터베이스(RDBMS)에서 트랜잭션이 안전하게 처리되고 데이터 무결성이 보장되기 위해 만족해야 하는 4대 원칙의 약칭은?",
      options: ["ACID (원자성, 일관성, 고립성, 지속성)", "BASE", "SOLID", "CRUD"],
      correctIndex: 0,
      explanation: "ACID는 All-or-Nothing의 원자성(Atomicity), 일관성(Consistency), 트랜잭션 간 독립성을 보장하는 고립성(Isolation), 영구 저장되는 지속성(Durability)을 뜻합니다.",
      deepKnowledge: "반면 대규모 NoSQL 분산 DB는 고가용성을 위해 일시적 불일치를 허용하는 BASE(Basically Available, Soft state, Eventual consistency) 모델을 채택하기도 합니다.",
      sourceOrTrivia: "Haerder & Reuter (1983) ACM Computing Surveys",
      wrongOptionsReason: [
        "정답입니다. DB 트랜잭션의 절대적 안전성을 보장하는 ACID 속성입니다.",
        "BASE는 분산 NoSQL 데이터베이스의 최종 일관성 모델입니다.",
        "SOLID는 로버트 마틴의 객체지향 5대 설계 원칙입니다.",
        "CRUD는 Create, Read, Update, Delete의 4대 기본 데이터 조작 연산입니다."
      ]
    },
    {
      id: "ultra_cs_4",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "정렬 알고리즘 중 '분할 정복(Divide and Conquer)' 기법을 사용하여, 피벗(Pivot)을 기준으로 작은 원소와 큰 원소를 분할해 평균 $O(n \\log n)$의 뛰어난 속도를 내는 알고리즘은?",
      options: ["퀵 정렬 (Quick Sort)", "버블 정렬", "삽입 정렬", "선택 정렬"],
      correctIndex: 0,
      explanation: "토니 호어(Tony Hoare)가 1959년 개발한 퀵 정렬은 제자리 정렬(In-place)이 가능하고 캐시 메모리 지역성이 우수하여 실무에서 가장 널리 쓰이는 정렬 알고리즘입니다.",
      deepKnowledge: "최악의 경우(이미 정렬된 배열에서 맨 끝 값을 피벗으로 고를 때) $O(n^2)$ 시간 복잡도를 가질 수 있어, 랜덤 피벗이나 인트로소트(Introsort)로 보완합니다.",
      sourceOrTrivia: "Hoare (1961) The Computer Journal 5",
      wrongOptionsReason: [
        "정답입니다. 실무에서 가장 대표적으로 쓰이는 피벗 분할 정복 퀵 정렬입니다.",
        "버블 정렬은 인접 원소를 비교 교환하는 $O(n^2)$의 단순한 정렬입니다.",
        "삽입 정렬은 앞쪽 정렬 부분에 알맞은 위치를 찾아 삽입하는 정렬입니다.",
        "선택 정렬은 최솟값을 찾아 맨 앞과 교환하는 $O(n^2)$ 정렬입니다."
      ]
    },
    {
      id: "ultra_cs_5",
      topic: "AI & 컴퓨터 과학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "에릭 브루어(Eric Brewer) 교수가 제시한 분산 시스템 정리로, 분산 데이터 저장소는 일관성(Consistency), 가용성(Availability), 분할 허용성(Partition tolerance) 중 최대 2가지만을 동시에 만족할 수 있다는 정리는?",
      options: ["CAP 정리 (Brewer's CAP Theorem)", "FLM 불가능성 정리", "암달의 법칙", "무어의 법칙"],
      correctIndex: 0,
      explanation: "네트워크 분할(P)은 물리적 네트워크 장애로 인해 언제든 발생할 수 있으므로, 실제 분산 시스템은 일관성 중심(CP 시스템) 또는 가용성 중심(AP 시스템) 중 양자택일을 해야 합니다.",
      deepKnowledge: "구글 스패너(Google Spanner)는 원자시계와 GPS 하드웨어(TrueTime API)를 도입해 오차 한계를 제어함으로써 사실상의 CA에 근접한 글로벌 분산 일관성을 달성했습니다.",
      sourceOrTrivia: "Brewer (2000) PODC / Gilbert & Lynch (2002) ACM SIGACT News",
      wrongOptionsReason: [
        "정답입니다. 분산 시스템 설계의 근본 트레이드오프를 규명한 CAP 정리입니다.",
        "FLP 불가능성 정리는 비동기 시스템에서 단 하나의 프로세스 장애로도 합의가 불가능할 수 있다는 정리입니다.",
        "암달의 법칙은 병렬화에 따른 시스템 속도 향상의 이론적 한계를 나타냅니다.",
        "무어의 법칙은 반도체 집적도가 2년마다 2배로 증가한다는 관찰 법칙입니다."
      ]
    },
    {
      id: "ultra_cs_6",
      topic: "AI & 컴퓨터 과학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "앨런 튜링이 1936년 제기한 컴퓨터 과학의 근본 난제로, 임의의 프로그램과 입력값이 주어졌을 때 그 프로그램이 무한 루프에 빠지지 않고 유한한 시간 안에 종료될지 여부를 판별하는 범용 알고리즘이 존재하지 않는다는 결정 불가능성 문제는?",
      options: ["정지 문제 (Halting Problem)", "P vs NP 문제", "비잔틴 장군 문제", "식사하는 철학자 문제"],
      correctIndex: 0,
      explanation: "튜링은 칸토어의 대각선 논법과 유사한 귀류법적 자기참조 모순을 구성하여, 어떤 알고리즘으로도 모든 프로그램의 종료 여부를 판정할 수 없음을 수학적으로 증명했습니다.",
      deepKnowledge: "이 증명은 컴퓨터가 원리적으로 모든 수학적 문제를 해결할 수 없다는 쿠르트 괴델의 '불완전성 정리'를 계산 이론의 언어로 실증한 것입니다.",
      sourceOrTrivia: "Turing (1936) 'On Computable Numbers, with an Application to the Entscheidungsproblem'",
      wrongOptionsReason: [
        "정답입니다. 계산 불가능성을 증명한 튜링의 정지 문제입니다.",
        "P vs NP는 다항 시간에 검증 가능한 문제가 다항 시간에 해결 가능한가를 묻는 밀레니엄 난제입니다.",
        "비잔틴 장군 문제는 배신자가 있는 분산 네트워크에서 합의를 달성하는 문제입니다.",
        "식사하는 철학자 문제는 운영체제의 교착 상태(Deadlock)를 설명하는 고전 모델입니다."
      ]
    },
    {
      id: "ultra_cs_7",
      topic: "AI & 컴퓨터 과학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "미국의 클레이 수학연구소(CMI)가 지정한 7대 밀레니엄 난제 중 유일한 컴퓨터 과학 분야 문제로, 다항 시간(Polynomial Time) 안에 해답을 검증할 수 있는 모든 문제가 다항 시간 안에 직접 풀릴 수 있는가를 묻는 질문은?",
      options: ["P vs NP 문제", "호지 추측", "푸앵카레 추측", "내비어-스톡스 방정식"],
      correctIndex: 0,
      explanation: "만약 P = NP임이 증명된다면 현재의 모든 공개키 암호(RSA, 타원곡선)가 순식간에 해독되며 신약 개발, 물류 최적화 등 복잡한 최적화 문제가 단시간에 풀리게 됩니다.",
      deepKnowledge: "대다수 컴퓨터 과학자들은 P와 NP가 같지 않을 것(P ≠ NP)으로 추정하고 있으나, 아직 엄밀한 수학적 증명이나 반례가 제시되지 않았습니다.",
      sourceOrTrivia: "Cook (1971) 'The Complexity of Theorem-Proving Procedures'",
      wrongOptionsReason: [
        "정답입니다. 계산 복잡도 이론의 최대 미해결 난제인 P vs NP 문제입니다.",
        "호지 추측은 대수기하학의 밀레니엄 수학 난제입니다.",
        "푸앵카레 추측은 그리고리 페렐만이 2003년 유일하게 증명한 위상수학 난제입니다.",
        "내비어-스톡스 방정식은 유체역학 편미분방정식의 해의 매끄러움에 관한 난제입니다."
      ]
    },
    {
      id: "ultra_cs_8",
      topic: "AI & 컴퓨터 과학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "양자 컴퓨터에서 양자 중첩과 양자 푸리에 변환(QFT)을 활용하여, 고전 컴퓨터로는 천문학적 시간이 걸리는 거대한 합성수의 소인수분해를 다항 시간 $O((\\log N)^3)$ 안에 풀어내는 알고리즘은?",
      options: ["쇼어 알고리즘 (Shor's Algorithm)", "그로버 알고리즘 (Grover's Algorithm)", "도이치-조사 알고리즘", "VQE 알고리즘"],
      correctIndex: 0,
      explanation: "피터 쇼어가 1994년 고안한 이 알고리즘은 충분한 큐비트를 갖춘 오류 허용 양자 컴퓨터가 개발될 경우 RSA 공개키 암호 체계를 완전히 무력화시킬 수 있습니다.",
      deepKnowledge: "그로버 알고리즘은 정렬되지 않은 N개 데이터베이스 탐색 속도를 $O(\\sqrt{N})$으로 가속하는 양자 탐색 알고리즘입니다.",
      sourceOrTrivia: "Shor (1994) IEEE FOCS",
      wrongOptionsReason: [
        "정답입니다. RSA 암호 체계를 깰 수 있는 양자 소인수분해 쇼어 알고리즘입니다.",
        "그로버 알고리즘은 비정렬 DB 탐색을 제곱근 속도로 가속하는 알고리즘입니다.",
        "도이치-조사 알고리즘은 양자 병렬성의 우수성을 최초로 입증한 장난감 모델입니다.",
        "VQE는 양자화학 분자 에너지 계산에 쓰이는 하이브리드 변분 알고리즘입니다."
      ]
    },
    {
      id: "ultra_cs_9",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "운영체제에서 2개 이상의 프로세스가 상대방이 가진 자원을 서로 기다리며 무한히 멈춰 서 있는 '교착 상태(Deadlock)'가 발생하기 위한 4대 필수 필요조건이 아닌 것은?",
      options: ["선점 허용 (Preemption allowed)", "상호 배제 (Mutual Exclusion)", "점유 및 대기 (Hold and Wait)", "원형 대기 (Circular Wait)"],
      correctIndex: 0,
      explanation: "데드락이 발생하려면 '비선점(No preemption)' 조건, 즉 다른 프로세스의 자원을 강제로 빼앗을 수 없어야 합니다. 선점을 허용하면 데드락이 즉시 해결(예방)됩니다.",
      deepKnowledge: "코프만(Coffman) 4대 조건은 상호 배제, 점유 및 대기, 비선점, 원형 대기이며 이 중 단 하나라도 깨뜨리면 교착 상태를 완벽히 예방할 수 있습니다.",
      sourceOrTrivia: "Coffman, Elphick, Ahashani (1971) ACM Computing Surveys",
      wrongOptionsReason: [
        "정답입니다. 선점을 허용하면 교착 상태가 풀리므로 '비선점'이 필수 조건입니다.",
        "상호 배제는 자원을 한 번에 한 프로세스만 써야 한다는 필수 조건입니다.",
        "점유 및 대기는 자원을 쥔 채 다른 자원을 기다린다는 필수 조건입니다.",
        "원형 대기는 자원 대기 관계가 원형 고리를 이룬다는 필수 조건입니다."
      ]
    },
    {
      id: "ultra_cs_10",
      topic: "AI & 컴퓨터 과학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "인터넷 통신 프로토콜의 표준 계층 모델인 OSI 7계층 중, 종단 간(End-to-End) 신뢰성 있는 데이터 전송과 흐름 제어, 혼잡 제어를 담당하는 4계층 프로토콜(TCP/UDP) 계층은?",
      options: ["전송 계층 (Transport Layer)", "네트워크 계층", "데이터 링크 계층", "응용 계층"],
      correctIndex: 0,
      explanation: "전송 계층(4계층)은 포트(Port) 번호를 통해 호스트 내의 특정 프로세스를 식별하고 가상 회선 연결(TCP의 3-way 핸드셰이크)을 수립합니다.",
      deepKnowledge: "네트워크 계층(3계층)은 IP 주소를 바탕으로 라우팅을 수행하며, 데이터 링크 계층(2계층)은 MAC 주소로 물리적 프레임을 전송합니다.",
      sourceOrTrivia: "Tanenbaum & Wetherall (2011) Computer Networks, 5th Edition",
      wrongOptionsReason: [
        "정답입니다. TCP와 UDP가 동작하는 4계층 전송 계층입니다.",
        "네트워크 계층은 IP 패킷의 경로 설정(라우팅)을 맡는 3계층입니다.",
        "데이터 링크 계층은 인접 노드 간 이더넷 프레임을 주고받는 2계층입니다.",
        "응용 계층은 HTTP, DNS, FTP 등 사용자 응용 프로그램이 상호작용하는 7계층입니다."
      ]
    },
    {
      id: "ultra_cs_11",
      topic: "AI & 컴퓨터 과학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "심층 신경망 학습 시 은닉층이 깊어질수록 역전파되는 오차 기울기가 0에 수렴하여 앞쪽 가중치가 전혀 학습되지 않는 문제를 해결하기 위해 시그모이드 대신 도입된 대표적인 활성화 함수는?",
      options: ["ReLU (Rectified Linear Unit)", "소프트맥스 (Softmax)", "선형 함수", "계단 함수"],
      correctIndex: 0,
      explanation: "ReLU 함수는 입력이 0보다 크면 기울기가 항상 1($f'(x)=1$)로 유지되므로, 역전파 시 연쇄 법칙 곱셈에서 기울기가 소실되지 않고 깊은 망 학습이 가능합니다.",
      deepKnowledge: "음수 영역에서 기울기가 0이 되어 뉴런이 비활성화되는 현상을 보완하기 위해 Leaky ReLU, GELU, Swish 등의 개선 함수들이 개발되었습니다.",
      sourceOrTrivia: "Nair & Hinton (2010) ICML",
      wrongOptionsReason: [
        "정답입니다. 기울기 소실을 극복하여 딥러닝 부흥을 이끈 ReLU 함수입니다.",
        "소프트맥스는 출력층에서 클래스별 확률 분포를 계산하는 함수입니다.",
        "단순 선형 함수는 신경망을 아무리 깊게 쌓아도 단일 선형 회귀와 같아집니다.",
        "계단 함수는 미분이 불가능하여 역전파 학습을 수행할 수 없습니다."
      ]
    },
    {
      id: "ultra_cs_12",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "대규모 언어 모델(LLM)이 인간의 가치관, 유용성, 무해성에 부합하도록 사전학습된 모델을 인간 평가자의 선호도 피드백을 반영해 미세조정하는 기법의 약칭은?",
      options: ["RLHF (인간 피드백 기반 강화학습)", "LoRA", "RAG (검색 증강 생성)", "양자화 (Quantization)"],
      correctIndex: 0,
      explanation: "RLHF(Reinforcement Learning from Human Feedback)는 인간이 평가한 답변 선호도로 보상 모델(Reward Model)을 훈련시키고 PPO 강화학습으로 정책을 최적화하여 챗봇의 안전성과 품질을 극대화합니다.",
      deepKnowledge: "최근에는 강화학습 과정의 복잡성을 간소화하기 위해 직접 선호도 최적화(DPO, Direct Preference Optimization) 기법도 널리 쓰이고 있습니다.",
      sourceOrTrivia: "Ouyang et al. (OpenAI, 2022) 'Training language models to follow instructions with human feedback'",
      wrongOptionsReason: [
        "정답입니다. LLM의 안전성과 답변 품질을 정렬하는 RLHF입니다.",
        "LoRA는 적은 수의 가중치 행렬만 학습시키는 저비용 파라미터 미세조정 기법입니다.",
        "RAG는 외부 지식 문서를 검색하여 환각을 줄이는 기술입니다.",
        "양자화는 부동소수점 비트수를 줄여 모델을 경량화하는 기법입니다."
      ]
    },
    {
      id: "ultra_cs_13",
      topic: "AI & 컴퓨터 과학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "이언 굿펠로(Ian Goodfellow)가 2014년 제안한 생성형 딥러닝 모델로, 가짜 데이터를 진짜처럼 만들어내려는 '생성자(Generator)'와 이를 진짜인지 가짜인지 감별하려는 '판별자(Discriminator)'가 서로 적대적으로 경쟁하며 성능을 높이는 모델은?",
      options: ["GAN (생성적 적대 신경망)", "변이형 오토인코더 (VAE)", "확산 모델 (Diffusion Model)", "볼츠만 머신"],
      correctIndex: 0,
      explanation: "GAN은 위조지폐범과 경찰의 게임 이론적 내시 균형에 비유되며, 극도로 사실적인 이미지 생성 및 딥페이크 기술의 기폭제가 되었습니다.",
      deepKnowledge: "얀 르쿤(Yann LeCun) 교수는 GAN을 가리켜 '머신러닝 분야에서 지난 10년간 가장 흥미로운 아이디어'라고 극찬했습니다.",
      sourceOrTrivia: "Goodfellow et al. (2014) Generative Adversarial Nets, NeurIPS",
      wrongOptionsReason: [
        "정답입니다. 생성자와 판별자의 적대적 경쟁 학습을 이끈 GAN입니다.",
        "VAE는 잠재 공간의 확률 분포를 인코딩하고 디코딩하는 생성 모델입니다.",
        "확산 모델은 가우시안 노이즈를 점진적으로 제거해 이미지를 생성하는 최신 모델입니다.",
        "볼츠만 머신은 통계물리학의 볼츠만 분포를 이용한 확률적 신경망입니다."
      ]
    },
    {
      id: "ultra_cs_14",
      topic: "AI & 컴퓨터 과학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "시간 복잡도 빅오(Big-O) 표기법에서, 정렬된 배열에서 원하는 원소를 찾기 위해 탐색 범위를 매 단계마다 절반씩 줄여나가는 '이진 탐색(Binary Search)'의 시간 복잡도는?",
      options: ["$O(\\log n)$", "$O(1)$", "$O(n)$", "$O(n^2)$"],
      correctIndex: 0,
      explanation: "데이터가 100만 개($10^6$)라 하더라도 이진 탐색은 약 20번의 비교($\\log_2 10^6 \\approx 20$)만으로 탐색을 완료하므로 압도적으로 효율적입니다.",
      deepKnowledge: "빅오 표기법은 입력 크기 $n$이 무한히 커질 때 알고리즘의 최악 실행 시간 증가 추세를 나타내는 점근적 분석 척도입니다.",
      sourceOrTrivia: "Cormen et al. (2009) Introduction to Algorithms (CLRS), 3rd Edition",
      wrongOptionsReason: [
        "정답입니다. 탐색 범위를 반씩 줄여나가는 이진 탐색의 $O(\\log n)$입니다.",
        "$O(1)$은 해시 테이블 검색 등 상수 시간 복잡도입니다.",
        "$O(n)$은 처음부터 끝까지 순차적으로 훑는 선형 탐색의 복잡도입니다.",
        "$O(n^2)$은 이중 반복문을 도는 버블 정렬의 복잡도입니다."
      ]
    },
    {
      id: "ultra_cs_15",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "그래프 자료구조에서 시작 정점으로부터 출발하여 가중치가 음수가 아닌 간선들로 연결된 모든 다른 정점까지의 '단일 출발점 최단 경로'를 탐욕적(Greedy) 방식으로 구하는 유명한 알고리즘은?",
      options: ["다익스트라 알고리즘 (Dijkstra's Algorithm)", "벨만-포드 알고리즘", "플로이드-워셜 알고리즘", "크루스칼 알고리즘"],
      correctIndex: 0,
      explanation: "에츠허르 데이크스트라가 1956년 고안한 알고리즘으로, 우선순위 큐(최소 힙)를 적용하면 $O((V+E) \\log V)$ 시간 안에 내비게이션 길찾기 최단 경로를 계산합니다.",
      deepKnowledge: "음수 가중치 간선이 포함된 그래프에서는 다익스트라가 정상 작동하지 않으므로 $O(VE)$ 시간 복잡도의 벨만-포드(Bellman-Ford) 알고리즘을 사용해야 합니다.",
      sourceOrTrivia: "Dijkstra (1959) Numerische Mathematik 1",
      wrongOptionsReason: [
        "정답입니다. 내비게이션 최단 경로의 표준 알고리즘 다익스트라입니다.",
        "벨만-포드는 음수 가중치 간선이 있는 그래프에 사용되는 최단 경로 알고리즘입니다.",
        "플로이드-워셜은 모든 정점 쌍 간의 최단 경로를 구하는 동적 계획법 알고리즘입니다.",
        "크루스칼은 최소 신장 트리(MST)를 구하는 탐욕 알고리즘입니다."
      ]
    },
    {
      id: "ultra_cs_16",
      topic: "AI & 컴퓨터 과학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "분산 버전 관리 시스템 Git에서 소스 코드의 변경 이력과 브랜치 병합을 효율적으로 추적하기 위해 내부적으로 사용하는 유향 비순환 그래프 자료구조는?",
      options: ["DAG (Directed Acyclic Graph)", "B-Tree", "이진 탐색 트리", "원형 큐"],
      correctIndex: 0,
      explanation: "Git의 모든 커밋 객체는 SHA-1/SHA-256 해시값으로 식별되며, 부모 커밋을 가리키는 포인터를 통해 결코 순환하지 않는 방향성 그래프(DAG)를 형성합니다.",
      deepKnowledge: "Git은 차분(Diff)을 저장하는 대신 각 커밋 시점의 전체 파일 스냅샷 트리를 가리키며, 변경되지 않은 파일은 기존 블롭(Blob) 해시를 재사용하여 공간을 극도로 절약합니다.",
      sourceOrTrivia: "Chacon & Straub (2014) Pro Git, 2nd Edition",
      wrongOptionsReason: [
        "정답입니다. Git 커밋 트리의 근간을 이루는 DAG 구조입니다.",
        "B-Tree는 데이터베이스 인덱스에 주로 쓰이는 균형 다분 탐색 트리입니다.",
        "이진 탐색 트리는 각 노드가 최대 2개의 자식을 갖는 순서화된 트리입니다.",
        "원형 큐는 링 버퍼 형태로 동작하는 큐 자료구조입니다."
      ]
    },
    {
      id: "ultra_cs_17",
      topic: "AI & 컴퓨터 과학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "최신 이미지 및 오디오 생성 AI(Stable Diffusion, Midjourney 등)의 핵심 원리로, 데이터에 가우시안 노이즈를 단계적으로 추가했다가(순방향) 신경망이 노이즈를 역으로 걷어내는(역방향) 물리 통계역학 모델은?",
      options: ["확산 모델 (Diffusion Model, DDPM)", "오토인코더", "신경망 기계 번역", "강화학습"],
      correctIndex: 0,
      explanation: "비평형 열역학의 확산 현상에서 착안한 확산 모델은 노이즈 제거 과정(Denoising Score Matching)을 학습하여 GAN보다 훈련이 안정적이고 압도적인 고해상도 품질을 달성했습니다.",
      deepKnowledge: "잠재 확산 모델(Latent Diffusion Model)은 고해상도 픽셀 공간 대신 오토인코더가 압축한 저차원 잠재 공간에서 확산 과정을 수행하여 연산 비용을 획기적으로 낮췄습니다.",
      sourceOrTrivia: "Ho et al. (2020) Denoising Diffusion Probabilistic Models, NeurIPS",
      wrongOptionsReason: [
        "정답입니다. 현대 생성형 이미지 AI를 지배하는 확산 모델(Diffusion)입니다.",
        "오토인코더는 입력을 압축했다가 복원하는 비지도 학습 모델입니다.",
        "신경망 기계 번역은 언어 간 번역을 수행하는 모델입니다.",
        "강화학습은 보상 극대화를 위해 에이전트가 행동을 학습하는 프레임워크입니다."
      ]
    },
    {
      id: "ultra_cs_18",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "리눅스 커널의 기능인 cgroups(자원 제한)와 네임스페이스(격리)를 활용하여, 게스트 OS 없이 애플리케이션과 실행 환경을 가볍게 패키징하고 배포하는 대표적 컨테이너 가상화 플랫폼은?",
      options: ["도커 (Docker)", "버추얼박스 (VirtualBox)", "VMware ESXi", "젠 (Xen)"],
      correctIndex: 0,
      explanation: "도커 컨테이너는 호스트 OS 커널을 직접 공유하므로 하이퍼바이저 기반 가상머신(VM)보다 부팅이 수 초 만에 이루어지고 메모리 오버헤드가 극도로 적습니다.",
      deepKnowledge: "도커 이미지는 유니온 파일 시스템(OverlayFS)을 사용하여 읽기 전용 레이어를 겹겹이 쌓아 올리는 구조로 재사용성과 효율을 극대화합니다.",
      sourceOrTrivia: "Merkel (2014) 'Docker: lightweight linux containers for consistent development and deployment'",
      wrongOptionsReason: [
        "정답입니다. 컨테이너 가상화 생태계의 표준 도커입니다.",
        "버추얼박스는 전체 게스트 OS를 에뮬레이트하는 무거운 타입 2 하이퍼바이저입니다.",
        "VMware ESXi는 엔터프라이즈급 베어메탈 타입 1 하이퍼바이저입니다.",
        "Xen은 반가상화를 지원하는 고전 가상머신 모니터입니다."
      ]
    },
    {
      id: "ultra_cs_19",
      topic: "AI & 컴퓨터 과학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "비대칭 키 암호화 알고리즘의 대표 주자로, 두 개의 거대한 소수를 곱하기는 쉽지만 합성수를 다시 소인수분해하는 것은 계산 복잡도상 극도로 어렵다는 수학적 난제를 기반으로 보안을 유지하는 암호 체계는?",
      options: ["RSA 암호 (Rivest-Shamir-Adleman)", "AES 대칭키 암호", "DES", "SHA-256 해시"],
      correctIndex: 0,
      explanation: "1977년 라이베스트, 샤미르, 에이들먼이 고안한 공개키 암호로, 오일러의 피 함수와 모듈러 거듭제곱의 역원을 이용하여 공개키(암호화용)와 개인키(복호화용)를 분리했습니다.",
      deepKnowledge: "양자 컴퓨터가 실용화되면 쇼어 알고리즘에 의해 RSA가 무력화될 수 있어, 현재 격자(Lattice) 기반의 '양자 내성 암호(PQC)'로의 표준 전환이 진행 중입니다.",
      sourceOrTrivia: "Rivest, Shamir, Adleman (1978) Communications of the ACM",
      wrongOptionsReason: [
        "정답입니다. 소인수분해 난이도에 기반한 비대칭 암호의 효시 RSA입니다.",
        "AES는 현대 표준 128/256비트 대칭키 블록 암호입니다.",
        "DES는 1970년대 IBM이 개발한 구형 56비트 대칭키 암호입니다.",
        "SHA-256은 단방향 암호학적 해시 함수입니다."
      ]
    },
    {
      id: "ultra_cs_20",
      topic: "AI & 컴퓨터 과학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "컴퓨터 중앙처리장치(CPU)와 주기억장치(RAM) 사이의 속도 차이를 완화하기 위해, 빈번히 접근하는 데이터를 미리 적재해 두는 초고속 SRAM 메모리는?",
      options: ["캐시 메모리 (Cache Memory, L1/L2/L3)", "하드디스크 (HDD)", "플래시 메모리", "가상 메모리"],
      correctIndex: 0,
      explanation: "캐시 메모리는 시간 지역성(방금 쓴 데이터 재사용)과 공간 지역성(인접 데이터 연속 접근) 원리를 활용하여 CPU의 연산 대기 시간을 극적으로 단축시킵니다.",
      deepKnowledge: "원하는 데이터가 캐시에 존재하는 비율을 '캐시 적중률(Cache Hit Ratio)'이라 하며, 캐시 누락(Miss)이 발생하면 느린 메인 메모리에서 데이터를 가져와야 합니다.",
      sourceOrTrivia: "Hennessy & Patterson (2017) Computer Architecture: A Quantitative Approach",
      wrongOptionsReason: [
        "정답입니다. CPU 속도를 받쳐주는 초고속 버퍼인 캐시 메모리입니다.",
        "하드디스크는 대용량이지만 기계적 동작으로 매우 느린 보조기억장치입니다.",
        "플래시 메모리는 전원이 꺼져도 데이터가 유지되는 비휘발성 저장장치입니다.",
        "가상 메모리는 디스크의 일부를 RAM처럼 확장해 쓰는 OS 메모리 관리 기법입니다."
      ]
    },
    {
      id: "ultra_cs_21",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "사토시 나카모토가 2008년 비트코인 백서에서 제안한 합의 알고리즘으로, 네트워크 참여자들이 수학적 암호 퍼즐(해시 파워)을 가장 먼저 풀어낸 블록을 유효한 것으로 인정하는 합의 방식은?",
      options: ["작업 증명 (PoW, Proof of Work)", "지분 증명 (PoS)", "위임 지분 증명 (DPoS)", "권한 증명 (PoA)"],
      correctIndex: 0,
      explanation: "작업 증명은 컴퓨팅 연산 능력을 투입하여 목표 해시값 이하의 난스(Nonce)를 찾아내는 방식으로, 비잔틴 장군 문제(분산 환경의 신뢰 구축)를 최초로 실용적 해결했습니다.",
      deepKnowledge: "악의적인 공격자가 거래 내역을 위변조하려면 전체 네트워크 해시 파워의 과반(51% 공격)을 점유해야 하므로 보안성이 유지됩니다.",
      sourceOrTrivia: "Nakamoto (2008) 'Bitcoin: A Peer-to-Peer Electronic Cash System'",
      wrongOptionsReason: [
        "정답입니다. 채굴 연산력을 증명하여 합의를 이루는 작업 증명(PoW)입니다.",
        "지분 증명은 보유한 암호화폐 지분량과 비례하여 블록 검증 권한을 얻는 방식입니다.",
        "위임 지분 증명은 투표로 선출된 대표 노드들이 블록을 생성하는 방식입니다.",
        "권한 증명은 신원 인증된 특정 기관 노드들만 검증하는 방식입니다."
      ]
    },
    {
      id: "ultra_cs_22",
      topic: "AI & 컴퓨터 과학",
      difficulty: "profound",
      difficultyLabel: "심오한 지식",
      question: "합성곱 신경망(CNN)을 극도로 깊게 쌓을 때 오히려 훈련 오류가 증가하는 퇴화 문제를 해결하기 위해, 계층의 출력을 다음 계층에 직접 더해주는 '잔차 연결(Skip / Residual Connection)'을 도입한 혁신적 망은?",
      options: ["ResNet (Residual Neural Network)", "AlexNet", "VGGNet", "GoogLeNet (Inception)"],
      correctIndex: 0,
      explanation: "허카이밍(Kaiming He) 등이 2015년 제안한 ResNet은 $H(x) = F(x) + x$ 잔차 구조를 통해 기울기가 직접 흐를 수 있는 고속도로를 뚫어 152층 이상의 초심층 네트워크를 성공적으로 학습시켰습니다.",
      deepKnowledge: "ResNet은 2015년 ILSVRC 이미지넷 대회에서 사람의 오차율(약 5%)을 뛰어넘는 3.57%의 최고 성능으로 우승을 차지했습니다.",
      sourceOrTrivia: "He et al. (2016) 'Deep Residual Learning for Image Recognition', CVPR",
      wrongOptionsReason: [
        "정답입니다. 스킵 커넥션으로 딥러닝 깊이의 한계를 깬 ResNet입니다.",
        "AlexNet은 2012년 GPU와 ReLU로 딥러닝 붐을 촉발한 8층 CNN입니다.",
        "VGGNet은 3x3 작은 필터만 깊게 쌓은 16~19층 CNN입니다.",
        "GoogLeNet은 다양한 크기의 필터를 병렬 결합한 인셉션 모듈 망입니다."
      ]
    },
    {
      id: "ultra_cs_23",
      topic: "AI & 컴퓨터 과학",
      difficulty: "medium",
      difficultyLabel: "일반 지식",
      question: "운영체제에서 물리 메모리(RAM)보다 더 큰 프로그램을 실행하기 위해 보조기억장치의 일부를 메모리처럼 확장 활용하며, 메모리를 일정한 고정 크기 블록으로 분할 관리하는 기법은?",
      options: ["페이징 (Paging)", "세그멘테이션 (Segmentation)", "오버레이", "단편화"],
      correctIndex: 0,
      explanation: "페이징은 가상 주소 공간을 '페이지(Page)'로, 물리 메모리를 '프레임(Frame)'이라는 동일한 크기(통상 4KB)로 쪼개어 페이지 테이블을 통해 사상(Mapping)함으로써 외부 단편화를 해결합니다.",
      deepKnowledge: "CPU가 요구한 페이지가 물리 메모리에 없을 때 발생하는 인터럽트를 '페이지 폴트(Page Fault)'라고 하며, 가상 메모리 관리자가 디스크에서 해당 페이지를 스왑인(Swap-in)합니다.",
      sourceOrTrivia: "Silberschatz, Galvin, Gagne (2018) Operating System Concepts, 10th Edition",
      wrongOptionsReason: [
        "정답입니다. 고정 크기 블록으로 가상 메모리를 관리하는 페이징 기법입니다.",
        "세그멘테이션은 코드, 데이터, 스택 등 의미 있는 가변 크기 단위로 분할하는 기법입니다.",
        "오버레이는 메모리가 부족하던 시절 프로그래머가 직접 모듈을 교체 적재하던 수동 기법입니다.",
        "단편화는 메모리에 빈 공간이 쪼개져 낭비되는 비효율 현상 자체입니다."
      ]
    },
    {
      id: "ultra_cs_24",
      topic: "AI & 컴퓨터 과학",
      difficulty: "hard",
      difficultyLabel: "심화 지식",
      question: "Java, Python 등 최신 프로그래밍 언어의 런타임 환경에서 더 이상 어떤 변수도 참조하지 않는 힙(Heap) 메모리의 도달 불가능한 객체들을 자동으로 탐지하여 해제하는 시스템 기능은?",
      options: ["가비지 컬렉션 (Garbage Collection, GC)", "스택 언와인딩", "메모리 누수", "동적 바인딩"],
      correctIndex: 0,
      explanation: "가비지 컬렉터는 루트 세트(스택 프레임, 전역 변수)로부터 도달 가능 여부(Reachability)를 추적하여 쓰레기 객체를 회수함으로써 수동 메모리 해제 실수(메모리 누수, 이중 해제)를 방지합니다.",
      deepKnowledge: "대부분의 현대 GC는 '대부분의 객체는 생성 후 금방 죽는다'는 약한 세대 가설(Weak Generational Hypothesis)에 착안하여 세대별 수집(Young/Old Gen GC)을 적용합니다.",
      sourceOrTrivia: "McCarthy (1960) 'Recursive Functions of Symbolic Expressions and Their Computation by Machine'",
      wrongOptionsReason: [
        "정답입니다. 메모리 자동 해제를 수행하는 가비지 컬렉션(GC)입니다.",
        "스택 언와인딩은 예외 발생 시 함수 호출 스택을 되감는 과정입니다.",
        "메모리 누수는 할당된 메모리를 해제하지 않아 점유가 누적되는 버그입니다.",
        "동적 바인딩은 실행 시점에 호출할 메서드가 결정되는 다형성 기법입니다."
      ]
    },
    {
      id: "ultra_cs_25",
      topic: "AI & 컴퓨터 과학",
      difficulty: "easy",
      difficultyLabel: "기초 상식",
      question: "웹 브라우저와 웹 서버 간에 안전하게 암호화된 통신을 수행하기 위해 기존 HTTP에 전송 계층 보안(TLS/SSL) 암호화 계층을 추가한 통신 규약은?",
      options: ["HTTPS (포트 443)", "FTP", "SSH", "SMTP"],
      correctIndex: 0,
      explanation: "HTTPS는 대칭키로 본문 데이터를 고속 암호화하고 대칭키 교환은 공개키(인증서)로 안전하게 처리하여 도청과 중간자 공격(MITM)을 방지합니다.",
      deepKnowledge: "오늘날 웹 보안 표준으로 인해 구글 크롬 등 브라우저는 순수 HTTP 연결 시 '안전하지 않음' 경고를 띄웁니다.",
      sourceOrTrivia: "RFC 2818: HTTP Over TLS",
      wrongOptionsReason: [
        "정답입니다. 보안 암호화 웹 통신 프로토콜인 HTTPS입니다.",
        "FTP는 암호화되지 않은 고전 파일 전송 프로토콜입니다.",
        "SSH는 원격 서버 접속을 위한 암호화 셸 프로토콜입니다.",
        "SMTP는 전자우편 전송을 위한 메일 전송 프로토콜입니다."
      ]
    }
  ]
};
