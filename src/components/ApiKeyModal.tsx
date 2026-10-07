import { useState, useEffect } from 'react';
import type React from 'react';

import { Key, X, Check, ExternalLink, ShieldCheck, Sparkles, Trash2 } from 'lucide-react';
import { getStoredApiKey, saveApiKey } from '../services/geminiService';
import { audioService } from '../services/audioService';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyChange: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onKeyChange }) => {
  const [apiKey, setApiKey] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(getStoredApiKey());
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    audioService.playClick();
    saveApiKey(apiKey.trim());
    setSavedSuccess(true);
    onKeyChange();
    setTimeout(() => {
      onClose();
    }, 800);
  };

  const handleClear = () => {
    audioService.playClick();
    saveApiKey('');
    setApiKey('');
    onKeyChange();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
            <Sparkles className="w-5 h-5" />
            <span>AI 무한 퀴즈 생성 설정</span>
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

        {/* Body */}
        <div className="mt-4 space-y-4">
          <div className="bg-indigo-50 dark:bg-indigo-950/40 rounded-xl p-3.5 border border-indigo-100 dark:border-indigo-900/50 text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-0.5">API 키가 없어도 100% 즉시 구동됩니다!</strong>
                내장된 방대한 고품질 지식 데이터베이스로 8대 분야 및 맞춤 퀴즈를 무제한 즐기실 수 있습니다.
                Gemini API 키를 등록하시면 세상의 모든 이색 주제를 실시간 AI로 무한 생성할 수 있습니다.
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Google Gemini API Key
            </label>
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center justify-between">
              <span>브라우저 로컬 스토리지에 안전하게 저장됩니다.</span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                무료 키 발급 <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          {apiKey ? (
            <button
              onClick={handleClear}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              키 삭제
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                audioService.playClick();
                onClose();
              }}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              닫기
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition-all active:scale-95"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>저장 완료!</span>
                </>
              ) : (
                <span>저장하기</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
