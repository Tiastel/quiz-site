// Native Web Speech API Text-to-Speech Service for DeepQuiz Accessibility & Auditory Learning

class SpeechService {
  private speaking: boolean = false;

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public speak(text: string, onDone?: () => void): void {
    if (!this.isSupported()) return;

    this.stop();

    // Clean emojis and decorative characters for clear pronunciation
    const cleanText = text
      .replace(/[🌱📘🔥👑💡📖✨•#⭐🎉❤️⚡🛡️📅📇📝]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) return;

    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'ko-KR';
      utterance.rate = 1.02;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        this.speaking = true;
      };

      utterance.onend = () => {
        this.speaking = false;
        onDone?.();
      };

      utterance.onerror = () => {
        this.speaking = false;
        onDone?.();
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      this.speaking = false;
    }
  }

  public stop(): void {
    if (!this.isSupported()) return;
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore
    }
    this.speaking = false;
  }

  public isSpeaking(): boolean {
    return this.speaking;
  }
}

export const speechService = new SpeechService();
