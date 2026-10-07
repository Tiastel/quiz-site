import type React from 'react';
import { Keyboard, X, Sparkles } from 'lucide-react';
import { audioService } from '../services/audioService';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const SHORTCUTS = [
    { key: '1, 2, 3, 4', desc: '1~4번 선택지 즉시 선택' },
    { key: 'Enter / Space', desc: '정답 확인 후 다음 문제로 넘어가기' },
    { key: 'F', desc: '50:50 찬스 사용 (오답 2개 제거)' },
    { key: 'H', desc: '힌트 찬스 사용 (핵심 키워드 확인)' },
    { key: 'B', desc: '현재 문제 나만의 보관함에 북마크' },
    { key: 'M', desc: '앰비언트 집중 BGM 켜기 / 끄기' },
    { key: '?', desc: '단축키 도움말 열기' },
    { key: 'ESC', desc: '열려 있는 모달 닫기' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            <Keyboard className="w-5 h-5 text-indigo-500" />
            <span>키보드 단축키 안내</span>
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

        {/* Shortcuts List */}
        <div className="py-4 space-y-2.5">
          {SHORTCUTS.map((sc) => (
            <div
              key={sc.key}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {sc.desc}
              </span>
              <kbd className="px-2 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 font-mono font-bold shadow-xs">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer tip */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>마우스 없이 키보드만으로 빠른 스피드런이 가능합니다.</span>
          </span>
          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="px-3 py-1 font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
