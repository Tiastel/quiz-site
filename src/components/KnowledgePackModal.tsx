import React, { useState, useEffect } from 'react';
import {
  Database,
  Download,
  Upload,
  Sparkles,
  Trash2,
  CheckCircle2,
  AlertCircle,
  X,
  FileCode,
  Layers,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import type { Question } from '../types/quiz';
import {
  getKnowledgeStats,
  exportKnowledgePack,
  importQuestionPack,
  clearLearnedStore,
  getAllLearnedQuestions,
} from '../services/knowledgeStoreService';
import { CURATED_QUESTIONS } from '../services/quizBank';
import { audioService } from '../services/audioService';

interface KnowledgePackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStoreUpdated?: () => void;
}

// Built-in curated sample packs for 1-click instant boost
const SAMPLE_PACKS: {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
}[] = [
  {
    id: 'pack_sf_tech',
    title: 'SF 문학 & 미래 테크놀로지',
    description: '아이작 아시모프의 로봇공학 3원칙부터 다이슨 스피어, 사이버펑크의 철학까지',
    category: 'SF/미래학',
    questions: [
      {
        id: 'pack_sf_1',
        topic: 'SF 문학 & 미래 테크놀로지',
        difficulty: 'easy',
        difficultyLabel: '기초 상식',
        question: '아이작 아시모프의 소설에서 정립된 "로봇공학 3원칙" 중 제1원칙은 무엇인가?',
        options: [
          '로봇은 인간에게 해를 입히거나 위험에 처한 인간을 방관해서는 안 된다',
          '로봇은 첫째 원칙에 위배되지 않는 한 인간의 명령에 복종해야 한다',
          '로봇은 첫째와 둘째 원칙에 위배되지 않는 한 스스로를 보호해야 한다',
          '로봇은 지구 생태계를 우선적으로 수호해야 한다',
        ],
        correctIndex: 0,
        explanation: '아시모프가 1942년 단편 <런어라운드>에서 공식화한 로봇 제1원칙은 인간 보호와 불상해 의무를 절대적 우선순위로 명시합니다.',
        deepKnowledge: '후에 아시모프는 로봇이 개별 인간보다 인류 전체의 이익을 우선해야 한다는 상위 원칙인 "제0원칙(Zeroth Law)"을 추가했습니다.',
        sourceOrTrivia: 'Isaac Asimov (1942) "Runaround"',
      },
      {
        id: 'pack_sf_2',
        topic: 'SF 문학 & 미래 테크놀로지',
        difficulty: 'medium',
        difficultyLabel: '일반 지식',
        question: '항성 전체를 거대한 구형 구조물로 감싸 별에서 방출되는 에너지를 100% 포집하는 우주 메가스트럭처 개념은?',
        options: ['다이슨 스피어 (Dyson Sphere)', '오닐 실린더', '링월드', '스탠포드 토러스'],
        correctIndex: 0,
        explanation: '물리학자 프리먼 다이슨이 1960년 논문에서 제안한 가상의 거대 구조물로, 카르다쇼프 척도 2단계 문명의 상징입니다.',
        deepKnowledge: '실제로는 단일 고체 구형 껍질보다는 수십억 개의 태양광 발전 위성들이 항성 주위를 도는 "다이슨 스웜(Dyson Swarm)" 형태가 역학적으로 안정적입니다.',
        sourceOrTrivia: 'Freeman Dyson (1960) "Search for Artificial Stellar Sources of Infrared Radiation"',
      },
      {
        id: 'pack_sf_3',
        topic: 'SF 문학 & 미래 테크놀로지',
        difficulty: 'hard',
        difficultyLabel: '심화 지식',
        question: '윌리엄 깁슨의 1984년 소설 <뉴로맨서>에서 대중화된 단어로, 컴퓨터 네트워크로 연결된 가상 정보 공간을 뜻하는 용어는?',
        options: ['사이버스페이스 (Cyberspace)', '메타버스', '홀로덱', '매트릭스 넷'],
        correctIndex: 0,
        explanation: '깁슨은 "수십억의 합법적 오퍼레이터들이 매일 경험하는 공감각적 환각"으로 사이버스페이스를 정의하며 사이버펑크 장르의 바이블을 열었습니다.',
        deepKnowledge: '<뉴로맨서>는 휴고상, 네뷸러상, 필립 K. 딕 상을 사상 최초로 동시 석권한 전설적인 SF 작품입니다.',
        sourceOrTrivia: 'William Gibson (1984) "Neuromancer"',
      },
      {
        id: 'pack_sf_4',
        topic: 'SF 문학 & 미래 테크놀로지',
        difficulty: 'profound',
        difficultyLabel: '심오한 지식',
        question: '버너 빈지(Vernor Vinge)와 레이 커즈와일이 주창한 개념으로, 인공지능이 인간 지능을 초월해 기술 문명의 발전 속도가 무한대에 수렴하는 예측 불가능의 분기점은?',
        options: ['기술적 특이점 (Technological Singularity)', '초지능 임계점', '페르미 전환점', '튜링 폭발점'],
        correctIndex: 0,
        explanation: '특이점은 기술 발전이 자기강화적 피드백 루프를 타며 인간의 지적 모델로는 이후의 사회 변화를 전혀 예측할 수 없게 되는 역사적 단절점을 뜻합니다.',
        deepKnowledge: '커즈와일은 "수확 가속의 법칙(Law of Accelerating Returns)"을 근거로 약 2045년경 인공지능 특이점이 도래할 것으로 예측했습니다.',
        sourceOrTrivia: 'Ray Kurzweil (2005) "The Singularity is Near"',
      },
    ],
  },
  {
    id: 'pack_ancient_civ',
    title: '고대 문명 & 미스터리 고고학',
    description: '메소포타미아 쐐기문자부터 로제타석 해독, 마야의 천문 달력까지',
    category: '역사/고고학',
    questions: [
      {
        id: 'pack_anc_1',
        topic: '고대 문명 & 미스터리 고고학',
        difficulty: 'easy',
        difficultyLabel: '기초 상식',
        question: '1799년 나폴레옹 원정군이 이집트에서 발견하여 고대 이집트 상형문자를 해독하는 결정적 열쇠가 된 비석은?',
        options: ['로제타석 (Rosetta Stone)', '함무라비 법전비', '베히스툰 비문', '사자의 서'],
        correctIndex: 0,
        explanation: '로제타석에는 동일한 내용이 이집트 상형문자, 민중문자(데모틱), 고대 그리스어 3가지 언어로 기록되어 있어 프랑스의 장 프랑수아 샹폴리옹이 해독에 성공했습니다.',
        deepKnowledge: '샹폴리옹은 파라오의 이름이 둘러싸인 타원형 테두리인 "카르투슈(Cartouche)"를 분석하여 상형문자가 표의문자이자 표음문자라는 사실을 밝혔습니다.',
        sourceOrTrivia: 'British Museum Rosetta Stone Collection',
      },
      {
        id: 'pack_anc_2',
        topic: '고대 문명 & 미스터리 고고학',
        difficulty: 'medium',
        difficultyLabel: '일반 지식',
        question: '인류 최고(最古)의 서사시로, 영생의 풀을 찾아 떠난 우루크의 왕과 그의 야생 친구 엔키두의 모험을 다룬 문학 작품은?',
        options: ['길가메시 서사시 (Epic of Gilgamesh)', '일리아스', '마하바라타', '오디세이아'],
        correctIndex: 0,
        explanation: '수메르 문명에서 점토판 쐐기문자로 기록된 길가메시 서사시는 대홍수 설화와 죽음의 불가피성을 마주한 인간의 실존을 다룹니다.',
        deepKnowledge: '기원전 19세기 아시리아 니네베의 아슈르바니팔 도서관 유적에서 12개의 점토판 형태로 대량 발굴되었습니다.',
        sourceOrTrivia: 'George Smith (1872) British Museum Translation',
      },
      {
        id: 'pack_anc_3',
        topic: '고대 문명 & 미스터리 고고학',
        difficulty: 'hard',
        difficultyLabel: '심화 지식',
        question: '에게해 남부 산토리니(티라) 섬의 대규모 화산 폭발로 인해 붕괴된 것으로 추정되는 유럽 최초의 고도 청동기 해양 문명은?',
        options: ['미노아 문명 (Minoan Civilization)', '미케네 문명', '키클라데스 문명', '트로이 문명'],
        correctIndex: 0,
        explanation: '크레타섬의 크노소스 궁전으로 대표되는 미노아 문명은 선문자 A를 사용하고 화려한 벽화와 해양 무역으로 번영했습니다.',
        deepKnowledge: '미노아 문명의 갑작스러운 멸망은 플라톤의 대화편 <티마이오스>와 <크리티아스>에 등장하는 전설의 아틀란티스 대륙 전설의 원형으로 강력하게 추정됩니다.',
        sourceOrTrivia: 'Marinatos (1939) "The Volcanic Destruction of Minoan Crete"',
      },
      {
        id: 'pack_anc_4',
        topic: '고대 문명 & 미스터리 고고학',
        difficulty: 'profound',
        difficultyLabel: '심오한 지식',
        question: '현대 튀르키예 동남부에서 발견된 기원전 9600년경 유적으로, 농경 이전에 수렵채집인들이 거석 신전을 먼저 건설했음을 입증하여 인류 문명사 이론을 송두리째 뒤흔든 유적은?',
        options: ['괴베클리 테페 (Göbekli Tepe)', '차탈회위크', '예리코', '스톤헨지'],
        correctIndex: 0,
        explanation: '독일 고고학자 클라우스 슈미트가 발굴한 괴베클리 테페는 농경과 정주 생활이 종교를 만든 것이 아니라, 종교적 의례가 정주와 농경을 촉발했다는 대전환을 증명했습니다.',
        deepKnowledge: 'T자형 석주에 정교하게 조각된 여우, 사자, 전갈 등의 부조는 당시 수렵채집 집단의 고도화된 상징 체계와 조직적 노동 동원력을 증명합니다.',
        sourceOrTrivia: 'Klaus Schmidt (2006) "Sie bauten die ersten Tempel"',
      },
    ],
  },
];

export const KnowledgePackModal: React.FC<KnowledgePackModalProps> = ({
  isOpen,
  onClose,
  onStoreUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'import' | 'sample'>('overview');
  const [importJsonText, setImportJsonText] = useState('');
  const [importStatus, setImportStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });
  const [stats, setStats] = useState(getKnowledgeStats());
  const [learnedCount, setLearnedCount] = useState(0);

  const refreshData = () => {
    const s = getKnowledgeStats();
    setStats(s);
    const learned = getAllLearnedQuestions();
    setLearnedCount(learned.length);
  };

  // Refresh counts when modal opens
  useEffect(() => {
    if (isOpen) {
      refreshData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate total curated count
  const curatedTotal = Object.values(CURATED_QUESTIONS).reduce(
    (acc, list) => acc + list.length,
    0
  );
  const grandTotal = curatedTotal + learnedCount;

  // Handle JSON file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setImportJsonText(content);
      executeImport(content);
    };
    reader.readAsText(file);
  };

  // Execute import
  const executeImport = (jsonStr: string) => {
    if (!jsonStr.trim()) {
      setImportStatus({
        type: 'error',
        message: 'JSON 데이터가 비어 있습니다.',
      });
      return;
    }

    const result = importQuestionPack(jsonStr);
    if (result.success) {
      audioService.playCorrect();
      setImportStatus({
        type: 'success',
        message: `성공! 총 ${result.importedCount}개의 신규 문항을 지식 저장소에 추가했습니다.`,
      });
      refreshData();
      onStoreUpdated?.();
    } else {
      audioService.playWrong();
      setImportStatus({
        type: 'error',
        message: result.message || 'JSON 파싱에 실패했습니다.',
      });
    }
  };

  // Instant load sample pack
  const handleLoadSamplePack = (pack: (typeof SAMPLE_PACKS)[0]) => {
    const jsonStr = JSON.stringify({
      version: '2.0',
      description: pack.title,
      questions: pack.questions,
    });
    const result = importQuestionPack(jsonStr);
    if (result.success) {
      audioService.playCorrect();
      refreshData();
      onStoreUpdated?.();
      setImportStatus({
        type: 'success',
        message: `"${pack.title}" (${result.importedCount}문항)이 지식 저장소에 성공적으로 탑재되었습니다!`,
      });
      setActiveTab('overview');
    }
  };

  // Clear learned store
  const handleClearStore = () => {
    if (
      window.confirm(
        '자가학습 및 임포트된 모든 사용자 문항을 초기화하시겠습니까? (내장 큐레이션 1,200문항은 안전하게 유지됩니다)'
      )
    ) {
      clearLearnedStore();
      audioService.playClick();
      refreshData();
      onStoreUpdated?.();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col max-h-[88vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                  지식 저장소 & 퀴즈 팩 센터
                </h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                  {grandTotal}문항 보유
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                1,200개 심화 큐레이션 + 실시간 AI 자가학습 누적 및 커스텀 팩 관리
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <button
            onClick={() => {
              audioService.playClick();
              setActiveTab('overview');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            지식 통계 & 내보내기
          </button>
          <button
            onClick={() => {
              audioService.playClick();
              setActiveTab('import');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'import'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Upload className="w-4 h-4" />
            지식 팩 들여오기 (Import)
          </button>
          <button
            onClick={() => {
              audioService.playClick();
              setActiveTab('sample');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'sample'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            추천 보너스 팩 (1-Click)
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">기본 큐레이션</span>
                  <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">
                    {curatedTotal} <span className="text-xs font-normal text-slate-400">문항</span>
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">12대 전 분야 완비</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">자가학습 & 임포트</span>
                  <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                    {learnedCount} <span className="text-xs font-normal text-slate-400">문항</span>
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">AI 플레이 시 자동 축적</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">총 가용 지식 풀</span>
                  <div className="text-xl font-extrabold text-indigo-700 dark:text-indigo-300 mt-1">
                    {grandTotal} <span className="text-xs font-normal text-indigo-400">문항</span>
                  </div>
                  <span className="text-[11px] text-indigo-500/80">서바이벌/타임어택 자동 연동</span>
                </div>
              </div>

              {/* Learning Mechanism Explainer */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-slate-800/40 dark:to-indigo-950/20 border border-indigo-100/60 dark:border-indigo-900/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-300">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>지속 학습 시스템 작동 방식</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  사용자가 Gemini AI로 새로운 주제(예: "양자컴퓨팅", "삼국지", "영화사")의 퀴즈를 생성하거나 지식 팩을 가져올 때마다, 검증된 문항들이 브라우저 로컬 저장소에 영구 학습·누적됩니다. 이후 동일하거나 유사한 주제를 플레이할 때 해당 지식이 즉시 수혈되며, 서바이벌 및 타임어택 모드의 전체 문제 은행도 함께 무한히 팽창합니다.
                </p>
              </div>

              {/* Learned Topics Breakdown */}
              {stats.topics.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span>학습 및 누적된 주제 리스트 ({stats.topics.length}개)</span>
                    <span className="text-[11px] font-normal text-slate-400">최근 업데이트: {new Date(stats.lastUpdated).toLocaleDateString()}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800">
                    {stats.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    audioService.playClick();
                    exportKnowledgePack();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  지식 팩 JSON 내보내기 (Export)
                </button>

                {learnedCount > 0 && (
                  <button
                    onClick={handleClearStore}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 transition-all flex items-center gap-1.5"
                    title="자가학습된 문항만 초기화"
                  >
                    <Trash2 className="w-4 h-4" />
                    학습 데이터 초기화
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 2. IMPORT TAB */}
          {activeTab === 'import' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 dark:text-slate-300">
                JSON 포맷의 퀴즈 팩 파일을 업로드하거나 아래 텍스트 상자에 붙여넣어 즉시 문제 은행에 편입하세요.
              </div>

              {/* File Drop / Select */}
              <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-indigo-200 dark:border-indigo-800/60 rounded-2xl hover:border-indigo-500 dark:hover:border-indigo-400 bg-indigo-50/20 dark:bg-indigo-950/10 cursor-pointer transition-colors">
                <FileCode className="w-8 h-8 text-indigo-500 mb-2" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  퀴즈 팩 JSON 파일 선택 또는 드래그 앤 드롭
                </span>
                <span className="text-[11px] text-slate-400 mt-1">.json 파일 지원 (표준 DeepQuiz 스키마)</span>
                <input
                  type="file"
                  accept=".json,application/json"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>

              {/* Raw JSON Paste Area */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>또는 JSON 텍스트 직접 입력</span>
                  <button
                    onClick={() => setImportJsonText('')}
                    className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    내용 지우기
                  </button>
                </div>
                <textarea
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  placeholder={`{\n  "version": "2.0",\n  "questions": [\n    {\n      "id": "custom_1",\n      "topic": "주제명",\n      "difficulty": "medium",\n      "difficultyLabel": "일반 지식",\n      "question": "문항 내용...",\n      "options": ["선지1", "선지2", "선지3", "선지4"],\n      "correctIndex": 0,\n      "explanation": "해설...",\n      "deepKnowledge": "심화 지식..."\n    }\n  ]\n}`}
                  rows={6}
                  className="w-full text-xs font-mono p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-200 resize-none"
                />
              </div>

              {/* Status Alert */}
              {importStatus.type !== 'idle' && (
                <div
                  className={`p-3 rounded-xl flex items-center gap-2 text-xs font-medium ${
                    importStatus.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                  }`}
                >
                  {importStatus.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  )}
                  <span>{importStatus.message}</span>
                </div>
              )}

              {/* Import Button */}
              <button
                onClick={() => executeImport(importJsonText)}
                disabled={!importJsonText.trim()}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                지식 팩 파싱 및 지식 저장소 편입
              </button>
            </div>
          )}

          {/* 3. SAMPLE PACKS TAB */}
          {activeTab === 'sample' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-600 dark:text-slate-300">
                DeepQuiz 연구팀이 사전에 엄선하여 제작한 고품격 스페셜 지식 팩을 원클릭으로 즉시 저장소에 탑재할 수 있습니다.
              </div>

              {SAMPLE_PACKS.map((pack) => (
                <div
                  key={pack.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                        {pack.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">
                        {pack.title}
                      </h4>
                      <span className="text-[11px] text-slate-400">({pack.questions.length}문항)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {pack.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleLoadSamplePack(pack)}
                    className="shrink-0 py-2 px-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <span>즉시 탑재</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            브라우저 로컬 저장소 동기화 활성
          </span>
          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
