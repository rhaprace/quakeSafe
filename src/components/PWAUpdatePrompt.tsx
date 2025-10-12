import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Prompt to notify users when a new version of the app is available
 * Allows them to update immediately
 */
export const PWAUpdatePrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log('SW Registered:', r);
    },
    onRegisterError(error: Error) {
      console.log('SW registration error', error);
    },
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (needRefresh) {
      setIsVisible(true);
    }
  }, [needRefresh]);

  const handleUpdate = () => {
    updateServiceWorker(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    setNeedRefresh(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-md sm:left-auto sm:right-4">
      <div className="rounded-lg border bg-card p-4 shadow-lg">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0 rounded-full bg-blue-100 p-2 dark:bg-blue-900/20">
            <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-500" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold">Update Available</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A new version of QuakeSafe is available. Update now to get the latest features and improvements.
            </p>

            {/* Actions */}
            <div className="mt-3 flex gap-2">
              <Button onClick={handleUpdate} size="sm" className="h-8">
                Update Now
              </Button>
              <Button onClick={handleClose} variant="ghost" size="sm" className="h-8">
                Later
              </Button>
            </div>
          </div>

          {/* Close button */}
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

export default PWAUpdatePrompt;

