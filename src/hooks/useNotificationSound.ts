import { useCallback, useRef } from 'react';

export const useNotificationSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playNotificationSound = useCallback(() => {
    try {
      const soundEnabled = localStorage.getItem('notification-sound-enabled') !== 'false';
      if (!soundEnabled) {
        return;
      }

      if (!audioContextRef.current) {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const audioContext = audioContextRef.current;

      const playTone = (frequency: number, startTime: number, duration: number) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };

      const now = audioContext.currentTime;
      playTone(1046.5, now, 0.15);
      playTone(1318.5, now + 0.15, 0.2);

    } catch (error) {
      console.debug('Notification sound could not be played:', error);
    }
  }, []);

  return { playNotificationSound };
};

export default useNotificationSound;

