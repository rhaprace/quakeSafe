import { WifiOff, BookOpen, AlertTriangle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Offline = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-amber-100 p-6 dark:bg-amber-900/20">
            <WifiOff className="h-16 w-16 text-amber-600 dark:text-amber-500" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          You're Offline
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          It looks like you've lost your internet connection. Don't worry - you can still access
          some features of QuakeSafe while offline.
        </p>
        <div className="mb-8 rounded-lg border bg-card p-6 text-left">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <BookOpen className="h-5 w-5 text-primary" />
            Available Offline
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>Previously viewed earthquake data (cached)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>Earthquake preparedness guides</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>Emergency resources and contacts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>Safety information and tips</span>
            </li>
          </ul>
        </div>
        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6 text-left dark:border-amber-900/50 dark:bg-amber-900/10">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-amber-900 dark:text-amber-500">
            <AlertTriangle className="h-5 w-5" />
            Requires Internet
          </h2>
          <ul className="space-y-3 text-amber-800 dark:text-amber-400">
            <li className="flex items-start gap-2">
              <span className="mt-1">✗</span>
              <span>Real-time earthquake updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">✗</span>
              <span>Interactive maps with live data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">✗</span>
              <span>Location-based earthquake alerts</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={handleRefresh} size="lg" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/guides">View Safety Guides</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/resources">Emergency Resources</Link>
          </Button>
        </div>
        <div className="mt-12 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
          <p className="font-medium">💡 Tip:</p>
          <p className="mt-1">
            When you're back online, QuakeSafe will automatically update with the latest earthquake data.
            Pages you visit while online are cached for offline access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offline;
