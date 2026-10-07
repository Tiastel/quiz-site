import { useState, useMemo, useEffect } from 'react';
import type React from 'react';
import {
  X,
  BookOpen,
  Trash2,
  Edit3,
  CheckCircle2,
  Printer,
  Play,
  RotateCcw,
  Search,
  Volume2,
  VolumeX,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { Question, MistakeEntry } from '../types/quiz';
import {
  getAllMistakes,
  updateMistakeUserNote,
  removeMistake,
  clearMasteredMistakes,
  clearAllMistakes,
  getMistakeStats,
} from '../services/mistakeService';
import { audioService } from '../services/audioService';
import { speechService } from '../services/speechService';
import { getOptionExplanation } from '../services/optionExplanationService';

interface MistakeNoteModalProps {
  onClose: () => void;
  onStartQuizWithQuestions: (questions: Question[]) => void;
}

export const MistakeNoteModal: React.FC<MistakeNoteModalProps> = ({
  onClose,
  onStartQuizWithQuestions,
}) => {
  const [mistakes, setMistakes] = useState<MistakeEntry[]>(() => getAllMistakes());
  const [filterStatus, setFilterStatus] = useState<'all' | 'learning' | 'mastered'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [expandedOptionAnalysis, setExpandedOptionAnalysis] = useState<Record<string, boolean>>({});

  const toggleOptionAnalysis = (questionId: string) => {
    audioService.playClick();
    setExpandedOptionAnalysis((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Stop speech on modal close / unmount
  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, []);

  const handleToggleTts = (q: Question) => {
    if (speakingId === q.id) {
      speechService.stop();
      setSpeakingId(null);
    } else {
      speechService.stop();
      setSpeakingId(q.id);
      const textToRead = `${q.question}. 정답은 ${q.options[q.correctIndex]}입니다. 해설: ${q.explanation}. 심화 지식: ${q.deepKnowledge}`;
      speechService.speak(textToRead, () => {
        setSpeakingId(null);
      });
    }
  };

  const stats = useMemo(() => getMistakeStats(), [mistakes]);

  const allTopics = useMemo(() => {
    const set = new Set<string>();
    mistakes.forEach((m) => set.add(m.question.topic || '기타'));
    return Array.from(set);
  }, [mistakes]);

  // Filtered mistakes
  const filteredList = useMemo(() => {
    return mistakes.filter((m) => {
      if (filterStatus !== 'all' && m.status !== filterStatus) return false;
      if (selectedTopic !== 'all' && m.question.topic !== selectedTopic) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQ = m.question.question.toLowerCase().includes(q);
        const matchesTopic = m.question.topic.toLowerCase().includes(q);
        const matchesNote = m.userNote?.toLowerCase().includes(q);
        if (!matchesQ && !matchesTopic && !matchesNote) return false;
      }
      return true;
    });
  }, [mistakes, filterStatus, selectedTopic, searchQuery]);

  const handleSaveNote = (questionId: string) => {
    audioService.playClick();
    updateMistakeUserNote(questionId, tempNoteText);
    setMistakes(getAllMistakes());
    setEditingNoteId(null);
  };

  const handleDeleteItem = (questionId: string) => {
    audioService.playClick();
    removeMistake(questionId);
    setMistakes(getAllMistakes());
  };

  const handleClearMastered = () => {
    if (window.confirm('정복 완료된 오답들을 오답 노트에서 정리하시겠습니까?')) {
      audioService.playClick();
      clearMasteredMistakes();
      setMistakes(getAllMistakes());
    }
  };

  const handleClearAll = () => {
    if (window.confirm('오답 노트의 모든 기록을 삭제하시겠습니까?')) {
      audioService.playClick();
      clearAllMistakes();
      setMistakes([]);
    }
  };

  // Launch conquer quiz with filtered mistakes
  const handleStartConquerQuiz = () => {
    const targetQuestions = filteredList.map((m) => m.question);
    if (targetQuestions.length === 0) return;
    audioService.playClick();
    onClose();
    onStartQuizWithQuestions(targetQuestions);
  };

  // Print A4 exam sheet
  const handlePrint = () => {
    audioService.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-800 dark:text-slate-100">
                  스마트 오답 노트 & 정복소
                </h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400">
                  {mistakes.length}문항 누적
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                에빙하우스 망각곡선 기반 반복 복습 & 2회 연속 정답 시 완전 정복
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="A4 오답 시험지 인쇄 / PDF 출력"
            >
              <Printer className="w-4 h-4" />
            </button>
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
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3 shrink-0">
          <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 block">총 오답 문항</span>
            <strong className="text-base font-extrabold text-slate-800 dark:text-slate-100">
              {stats.total}개
            </strong>
          </div>
          <div className="p-2.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/40">
            <span className="text-[11px] font-semibold text-amber-600 block">복습 필요 (학습 중)</span>
            <strong className="text-base font-extrabold text-amber-600">
              {stats.learning}개
            </strong>
          </div>
          <div className="p-2.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/40">
            <span className="text-[11px] font-semibold text-emerald-600 block">완전 정복 (마스터)</span>
            <strong className="text-base font-extrabold text-emerald-600">
              {stats.mastered}개
            </strong>
          </div>
          <div className="p-2.5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/40">
            <span className="text-[11px] font-semibold text-indigo-600 block">최대 취약 분야</span>
            <strong className="text-xs font-bold text-indigo-600 truncate block">
              {stats.topVulnerableTopics[0]?.topic || '없음'}
            </strong>
          </div>
        </div>

        {/* Filter and Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Status pills */}
            {(['all', 'learning', 'mastered'] as const).map((st) => (
              <button
                key={st}
                onClick={() => {
                  audioService.playClick();
                  setFilterStatus(st);
                }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-colors ${
                  filterStatus === st
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {st === 'all' ? '전체' : st === 'learning' ? '복습 중' : '완전 정복'}
              </button>
            ))}

            {/* Topic dropdown */}
            {allTopics.length > 0 && (
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 border-none text-slate-700 dark:text-slate-300"
              >
                <option value="all">모든 분야 ({mistakes.length})</option>
                {allTopics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            )}
            {/* Search input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="오답 검색..."
                className="pl-8 pr-2.5 py-1 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:ring-1 focus:ring-rose-500 w-32 sm:w-44"
              />
            </div>
          </div>

          {/* Quick launch / clear actions */}
          <div className="flex items-center gap-2">
            {filteredList.length > 0 && (
              <button
                onClick={handleStartConquerQuiz}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>선택 문항({filteredList.length}) 재도전</span>
              </button>
            )}

            {stats.mastered > 0 && (
              <button
                onClick={handleClearMastered}
                className="px-2.5 py-1 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                title="정복 완료된 문항만 정리"
              >
                정복 완료 정리
              </button>
            )}

            {mistakes.length > 0 && (
              <button
                onClick={handleClearAll}
                className="p-1.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                title="전체 오답 기록 삭제"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mistakes List */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 scrollbar-thin">
          {filteredList.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center gap-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                현재 보관함에 표시할 오답 문항이 없습니다.
              </p>
              <span className="text-xs text-slate-400">
                퀴즈를 풀다 틀린 문제가 생기면 자동으로 여기에 등록됩니다!
              </span>
            </div>
          ) : (
            filteredList.map((entry) => {
              const q = entry.question;
              const isEditing = editingNoteId === q.id;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    entry.status === 'mastered'
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 shadow-sm'
                  }`}
                >
                  {/* Top Bar: Topic, Difficulty, Status */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {q.topic}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 font-semibold">
                        {q.difficultyLabel}
                      </span>
                      <span className="text-rose-500 font-bold">
                        오답 {entry.wrongCount}회
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {entry.status === 'mastered' ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          완전 정복
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-[10px] font-extrabold flex items-center gap-1">
                          <RotateCcw className="w-3 h-3" />
                          연속 정답: {entry.consecutiveCorrectCount}/2회
                        </span>
                      )}

                      <button
                        onClick={() => handleDeleteItem(q.id)}
                        className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                        title="이 오답 삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Question Text with TTS listen button */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-snug">
                      {q.question}
                    </h4>
                    <button
                      type="button"
                      onClick={() => handleToggleTts(q)}
                      className={`p-1.5 rounded-lg border text-xs font-semibold shrink-0 transition-all ${
                        speakingId === q.id
                          ? 'bg-indigo-100 dark:bg-indigo-950 border-indigo-400 text-indigo-700 dark:text-indigo-300 animate-pulse'
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                      title={speakingId === q.id ? '음성 읽기 중지' : '문제 및 해설 음성으로 듣기'}
                    >
                      {speakingId === q.id ? (
                        <VolumeX className="w-3.5 h-3.5 text-indigo-600" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Options (Answer Highlighted) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctIndex;
                      return (
                        <div
                          key={optIdx}
                          className={`p-2 rounded-xl text-xs flex items-start gap-2 ${
                            isCorrect
                              ? 'bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold border border-emerald-300 dark:border-emerald-800'
                              : 'bg-slate-50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center shrink-0 font-bold ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                            }`}
                          >
                            {optIdx + 1}
                          </span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation & Deep Knowledge */}
                  <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3 text-xs space-y-1.5 border border-slate-100 dark:border-slate-800">
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong className="text-emerald-600 dark:text-emerald-400 mr-1.5">[정답 해설]</strong>
                      {q.explanation}
                    </p>
                    {q.deepKnowledge && (
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                        <strong className="text-indigo-600 dark:text-indigo-400 mr-1.5">[심오한 지식]</strong>
                        {q.deepKnowledge}
                      </p>
                    )}
                  </div>

                  {/* Option Concept Analysis Accordion */}
                  <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => toggleOptionAnalysis(q.id)}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-indigo-500" />
                        <span>선지별 정밀 개념 해설 (오답 함정 파헤치기)</span>
                      </span>
                      {expandedOptionAnalysis[q.id] ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {expandedOptionAnalysis[q.id] && (
                      <div className="space-y-1.5 pt-2 animate-fadeIn">
                        {q.options.map((opt, oIdx) => {
                          const isCorrectOpt = oIdx === q.correctIndex;
                          const reason = getOptionExplanation(q, oIdx);
                          return (
                            <div
                              key={oIdx}
                              className={`text-xs p-2 rounded-xl border flex items-start gap-2 leading-relaxed ${
                                isCorrectOpt
                                  ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200'
                                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <span
                                className={`shrink-0 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 ${
                                  isCorrectOpt
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300'
                                }`}
                              >
                                {oIdx + 1}
                              </span>
                              <div className="flex-1">
                                <span className="font-semibold text-slate-900 dark:text-slate-100 mr-1.5">
                                  {opt}:
                                </span>
                                <span className={isCorrectOpt ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}>
                                  {reason}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* User Note Section */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    {isEditing ? (
                      <div className="space-y-1.5">
                        <textarea
                          value={tempNoteText}
                          onChange={(e) => setTempNoteText(e.target.value)}
                          placeholder="나만의 헷갈린 이유, 핵심 암기 공식이나 노트를 입력하세요..."
                          className="w-full text-xs p-2.5 rounded-xl border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                          rows={2}
                        />
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setEditingNoteId(null)}
                            className="px-2.5 py-1 rounded-lg text-xs text-slate-500 hover:bg-slate-100"
                          >
                            취소
                          </button>
                          <button
                            onClick={() => handleSaveNote(q.id)}
                            className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm"
                          >
                            저장
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setEditingNoteId(q.id);
                          setTempNoteText(entry.userNote || '');
                        }}
                        className="group flex items-center justify-between p-2 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-amber-200/50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-start gap-1.5">
                          <Edit3 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <span className="text-xs text-slate-700 dark:text-slate-300">
                            {entry.userNote ? (
                              <strong className="font-semibold text-amber-900 dark:text-amber-200">
                                💡 나의 메모: {entry.userNote}
                              </strong>
                            ) : (
                              <span className="text-slate-400 group-hover:text-slate-600">
                                클릭하여 나만의 오답 풀이 메모 작성...
                              </span>
                            )}
                          </span>
                        </div>
                        <span className="text-[10px] text-amber-600 font-bold group-hover:underline">
                          {entry.userNote ? '수정' : '작성'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
