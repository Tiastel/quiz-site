import React, { useState, useEffect, useRef } from 'react';
import { X, Zap, Clock, Trophy, RotateCcw, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioService } from '../services/audioService';
import {
  generateMatchTiles,
  getBestMatchTime,
  saveBestMatchTime,
  type MatchTile,
} from '../services/conceptMatchService';

interface ConceptMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicId: string;
  topicTitle: string;
}

export const ConceptMatchModal: React.FC<ConceptMatchModalProps> = ({
  isOpen,
  onClose,
  topicId,
  topicTitle,
}) => {
  const [tiles, setTiles] = useState<MatchTile[]>([]);
  const [selectedTileId, setSelectedTileId] = useState<string | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<Set<string>>(new Set());
  const [mismatchedTileIds, setMismatchedTileIds] = useState<string[]>([]);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timeElapsedMs, setTimeElapsedMs] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [penaltyMessage, setPenaltyMessage] = useState<string | null>(null);

  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const bestTime = getBestMatchTime(topicId);

  // Initialize or reset game
  const initGame = () => {
    const { tiles: newTiles } = generateMatchTiles(topicId);
    setTiles(newTiles);
    setSelectedTileId(null);
    setMatchedPairIds(new Set());
    setMismatchedTileIds([]);
    setCombo(0);
    setMaxCombo(0);
    setTimeElapsedMs(0);
    setIsFinished(false);
    setIsNewRecord(false);
    setPenaltyMessage(null);
    setIsPlaying(true);
    startTimeRef.current = performance.now();
  };

  useEffect(() => {
    if (isOpen) {
      initGame();
    } else {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      setIsPlaying(false);
    }
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [isOpen, topicId]);

  // High-precision millisecond stopwatch
  useEffect(() => {
    if (!isPlaying || isFinished) return;

    const tick = () => {
      const now = performance.now();
      setTimeElapsedMs(Math.max(0, now - startTimeRef.current));
      timerRef.current = requestAnimationFrame(tick);
    };

    timerRef.current = requestAnimationFrame(tick);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [isPlaying, isFinished]);

  // Tile click handling
  const handleTileClick = (tile: MatchTile) => {
    if (!isPlaying || isFinished) return;
    if (matchedPairIds.has(tile.pairId)) return;
    if (mismatchedTileIds.length > 0) return; // Ignore clicks during mismatch wobble

    audioService.playClick();

    // If clicking already selected tile, unselect
    if (selectedTileId === tile.tileId) {
      setSelectedTileId(null);
      return;
    }

    // First tile selection
    if (!selectedTileId) {
      setSelectedTileId(tile.tileId);
      return;
    }

    // Second tile selection
    const firstTile = tiles.find((t) => t.tileId === selectedTileId);
    if (!firstTile) {
      setSelectedTileId(tile.tileId);
      return;
    }

    // Check match
    if (firstTile.pairId === tile.pairId && firstTile.tileId !== tile.tileId) {
      // SUCCESS MATCH!
      audioService.playCorrect();
      const newMatched = new Set(matchedPairIds);
      newMatched.add(tile.pairId);
      setMatchedPairIds(newMatched);
      setSelectedTileId(null);

      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setMaxCombo((prev) => Math.max(prev, nextCombo));

      // Check if all 6 pairs matched
      if (newMatched.size >= 6) {
        setIsPlaying(false);
        setIsFinished(true);
        if (timerRef.current) cancelAnimationFrame(timerRef.current);

        const finalSecs = (performance.now() - startTimeRef.current) / 1000;
        const newRecordSet = saveBestMatchTime(topicId, finalSecs);
        setIsNewRecord(newRecordSet);

        audioService.playVictory();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
        });
      }
    } else {
      // MISMATCH!
      audioService.playWrong();
      setCombo(0);
      setMismatchedTileIds([firstTile.tileId, tile.tileId]);

      // +1.0s penalty
      startTimeRef.current -= 1000;
      setPenaltyMessage('+1.0s 오답 패널티!');
      setTimeout(() => setPenaltyMessage(null), 1200);

      setTimeout(() => {
        setMismatchedTileIds([]);
        setSelectedTileId(null);
      }, 700);
    }
  };

  if (!isOpen) return null;

  const seconds = (timeElapsedMs / 1000).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 dark:bg-amber-400/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-inner">
              <Zap className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                  스피드 개념 매칭
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                  Quizlet 모드
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {topicTitle} · 개념어와 정의 짝을 가장 빠르게 찾아보세요!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audioService.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Bar */}
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/80 dark:from-slate-900 dark:via-slate-850 dark:to-indigo-950/40 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm">
          {/* Stopwatch */}
          <div className="flex items-center gap-2 font-mono font-extrabold text-indigo-600 dark:text-indigo-400 text-base sm:text-lg">
            <Clock className="w-4 h-4 text-indigo-500 animate-pulse" />
            <span>{seconds}초</span>
            {penaltyMessage && (
              <span className="text-xs text-rose-500 font-sans font-bold animate-bounce">
                {penaltyMessage}
              </span>
            )}
          </div>

          {/* Combo Indicator */}
          <div className="flex items-center gap-1.5 font-bold">
            {combo >= 2 ? (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-white shadow-md shadow-amber-500/30 animate-pulse text-xs">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {combo} COMBO!
              </span>
            ) : (
              <span className="text-slate-400 dark:text-slate-500 text-xs">
                남은 짝: {6 - matchedPairIds.size} / 6
              </span>
            )}
          </div>

          {/* Best Record */}
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold text-xs">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>최고 기록: {bestTime !== null ? `${bestTime}초` : '기록 없음'}</span>
          </div>
        </div>

        {/* Main Game Grid or Victory Screen */}
        <div className="p-5 flex-1 overflow-y-auto">
          {isFinished ? (
            <div className="text-center py-8 px-4 space-y-6 animate-pop">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center shadow-lg border border-amber-500/20">
                <Sparkles className="w-10 h-10 animate-spin" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {isNewRecord ? '🎉 새로운 신기록 달성!' : '⚡ 개념 매칭 완료!'}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {topicTitle}의 6가지 핵심 개념을 성공적으로 모두 매칭했습니다.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40 text-center">
                  <span className="text-xs text-indigo-500 font-semibold block mb-1">소요 시간</span>
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                    {seconds}s
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-800/40 text-center">
                  <span className="text-xs text-amber-600 font-semibold block mb-1">최대 콤보</span>
                  <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                    {maxCombo}x
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    initGame();
                  }}
                  className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                  한 번 더 도전
                </button>
                <button
                  type="button"
                  onClick={() => {
                    audioService.playClick();
                    onClose();
                  }}
                  className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold transition active:scale-95"
                >
                  나가기
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {tiles.map((tile) => {
                const isMatched = matchedPairIds.has(tile.pairId);
                const isSelected = selectedTileId === tile.tileId;
                const isMismatched = mismatchedTileIds.includes(tile.tileId);

                if (isMatched) {
                  return (
                    <div
                      key={tile.tileId}
                      className="h-24 sm:h-28 rounded-2xl border border-emerald-300 dark:border-emerald-800/40 bg-emerald-50/40 dark:bg-emerald-950/20 flex flex-col items-center justify-center p-3 opacity-30 pointer-events-none transition-all duration-500 scale-95"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-1" />
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold truncate max-w-full">
                        {tile.type === 'term' ? tile.text : '매칭 완료'}
                      </span>
                    </div>
                  );
                }

                return (
                  <button
                    key={tile.tileId}
                    type="button"
                    onClick={() => handleTileClick(tile)}
                    className={`h-24 sm:h-28 rounded-2xl p-3 text-left flex flex-col justify-between transition-all duration-150 active:scale-95 select-none text-xs sm:text-sm font-medium ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 ring-4 ring-indigo-300 dark:ring-indigo-700 -translate-y-1'
                        : isMismatched
                        ? 'bg-rose-500 text-white animate-shake ring-4 ring-rose-300'
                        : 'bg-slate-50 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected || isMismatched
                            ? 'bg-white/20 text-white'
                            : tile.type === 'term'
                            ? 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300'
                            : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                        }`}
                      >
                        {tile.type === 'term' ? '개념어' : '정의/해설'}
                      </span>
                    </div>

                    <div className="line-clamp-3 leading-snug break-keep">
                      {tile.text}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer tip */}
        <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between text-xs text-slate-400">
          <span>💡 틀린 타일을 선택하면 1.0초 패널티가 부여됩니다.</span>
          <button
            type="button"
            onClick={() => {
              audioService.playClick();
              initGame();
            }}
            className="flex items-center gap-1 text-indigo-500 hover:text-indigo-600 font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            재배치
          </button>
        </div>
      </div>
    </div>
  );
};
