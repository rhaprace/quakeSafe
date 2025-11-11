import { WifiOff, BookOpen, AlertTriangle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { InfoBox, IconListItem } from '@/components/common';
import { refreshPage } from '@/utils/offline';
import { getOfflineSEO } from '@/utils/seo';

const Offline: React.FC = () => {
  return (
    <>
      <SEO {...getOfflineSEO()} />
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

        <InfoBox title="Available Offline" icon={BookOpen} className="mb-8 text-left">
          <ul className="space-y-3">
            <IconListItem icon={<span className="mt-1 text-green-500">✓</span>}>
              Previously viewed earthquake data (cached)
            </IconListItem>
            <IconListItem icon={<span className="mt-1 text-green-500">✓</span>}>
              Earthquake preparedness guides
            </IconListItem>
            <IconListItem icon={<span className="mt-1 text-green-500">✓</span>}>
              Emergency resources and contacts
            </IconListItem>
            <IconListItem icon={<span className="mt-1 text-green-500">✓</span>}>
              Safety information and tips
            </IconListItem>
          </ul>
        </InfoBox>

        <InfoBox title="Requires Internet" icon={AlertTriangle} variant="warning" className="mb-8 text-left">
          <ul className="space-y-3 text-amber-800 dark:text-amber-400">
            <IconListItem icon={<span className="mt-1">✗</span>}>
              Real-time earthquake updates
            </IconListItem>
            <IconListItem icon={<span className="mt-1">✗</span>}>
              Interactive maps with live data
            </IconListItem>
            <IconListItem icon={<span className="mt-1">✗</span>}>
              Location-based earthquake alerts
            </IconListItem>
          </ul>
        </InfoBox>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={refreshPage} size="lg" className="gap-2">
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

        <InfoBox variant="muted" className="mt-12 text-sm">
          <p className="font-medium">💡 Tip:</p>
          <p className="mt-1">
            When you're back online, QuakeSafe will automatically update with the latest earthquake data.
            Pages you visit while online are cached for offline access.
          </p>
        </InfoBox>
      </div>
    </div>
    </>
  );
};

export default Offline;
