import { useState, useEffect } from 'react';
import type React from 'react';
import { Bookmark, X, Trash2, Sparkles, Play } from 'lucide-react';

import type { Question } from '../types/quiz';
import { getAllBookmarkedQuestions, toggleBookmarkQuestion } from '../services/progressService';
import { audioService } from '../services/audioService';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartQuizWithQuestions: (questions: Question[]) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  onStartQuizWithQuestions,
}) => {
  const [bookmarks, setBookmarks] = useState<Question[]>([]);

  useEffect(() => {
    if (isOpen) {
      setBookmarks(getAllBookmarkedQuestions());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRemove = (id: string) => {
    audioService.playClick();
    toggleBookmarkQuestion(id);
    setBookmarks(getAllBookmarkedQuestions());
  };

  const handlePlayBookmarks = () => {
    if (bookmarks.length === 0) return;
    audioService.playClick();
    onStartQuizWithQuestions(bookmarks);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            <Bookmark className="w-5 h-5 fill-indigo-500 text-indigo-500" />
            <span>나만의 지식 보관함 ({bookmarks.length})</span>
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

        {/* Content list */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3.5 scrollbar-thin">
          {bookmarks.length === 0 ? (
            <div className="py-16 text-center text-slate-400 dark:text-slate-500 text-sm space-y-2">
              <Bookmark className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700" />
              <p className="font-semibold text-slate-600 dark:text-slate-300">
                아직 저장된 문제가 없습니다.
              </p>
              <p className="text-xs">
                퀴즈를 풀면서 기억하고 싶은 심오한 지식을 북마크(★) 해보세요!
              </p>
            </div>
          ) : (
            bookmarks.map((q, idx) => (
              <div
                key={q.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5 relative group"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                      {q.topic}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {q.difficultyLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemove(q.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors"
                    title="보관함에서 삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug">
                  {idx + 1}. {q.question}
                </h4>

                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs">
                  <strong className="text-emerald-800 dark:text-emerald-300 block mb-0.5">
                    정답: {q.options[q.correctIndex]}
                  </strong>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>

                {q.deepKnowledge && (
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-1 font-bold text-amber-800 dark:text-amber-300 mb-0.5">
                      <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
                      <span>심오한 지식:</span>
                    </div>
                    <p className="leading-relaxed">{q.deepKnowledge}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            총 {bookmarks.length}개의 저장된 지식 카드
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                audioService.playClick();
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              닫기
            </button>
            {bookmarks.length > 0 && (
              <button
                onClick={handlePlayBookmarks}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>보관함 문제 풀기</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
