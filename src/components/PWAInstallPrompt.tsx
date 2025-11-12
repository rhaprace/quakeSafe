import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { useNotificationSound } from '@/hooks/useNotificationSound';

export const PWAInstallPrompt = () => {
  const { shouldShowPrompt, promptInstall, dismissPrompt } = usePWAInstall();
  const { playNotificationSound } = useNotificationSound();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (shouldShowPrompt) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
        playNotificationSound();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [shouldShowPrompt, playNotificationSound]);

  const handleInstall = async () => {
    const accepted = await promptInstall();
    if (accepted) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      dismissPrompt();
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-md transition-all duration-300 sm:left-auto sm:right-4 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="rounded-lg border bg-card p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
            <Download className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Install QuakeSafe</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Install our app for quick access and offline support during emergencies.
            </p>
            <div className="mt-3 flex gap-2">
              <Button onClick={handleInstall} size="sm" className="h-8">
                Install
              </Button>
              <Button onClick={handleClose} variant="ghost" size="sm" className="h-8">
                Not now
              </Button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
