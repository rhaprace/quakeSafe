import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');

  const features = [
    {
      title: t('features.realtime.title'),
      description: t('features.realtime.description'),
    },
    {
      title: t('features.interactive.title'),
      description: t('features.interactive.description'),
    },
    {
      title: t('features.preparedness.title'),
      description: t('features.preparedness.description'),
    },
  ];

  const preparednessCards = [
    {
      title: t('preparedness.before.title'),
      description: t('preparedness.before.description'),
      link: '/guides',
      number: '01',
    },
    {
      title: t('preparedness.during.title'),
      description: t('preparedness.during.description'),
      link: '/guides',
      number: '02',
    },
    {
      title: t('preparedness.after.title'),
      description: t('preparedness.after.description'),
      link: '/guides',
      number: '03',
    },
    {
      title: t('preparedness.kit.title'),
      description: t('preparedness.kit.description'),
      link: '/guides',
      number: '04',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="border-b">
        <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm font-medium">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span>{t('hero.badge')}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/tracker">{t('buttons.viewLiveTracker', { ns: 'common' })}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold">
                <Link to="/guides">{t('buttons.safetyGuidelines', { ns: 'common' })}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-px md:grid-cols-3 bg-border rounded-lg overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-8 lg:p-10"
              >
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background font-mono text-sm font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 border-y">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
              {t('preparedness.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {t('preparedness.subtitle')}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {preparednessCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="group block border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded border bg-background font-mono text-xs font-semibold">
                    {card.number}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    →
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-px sm:grid-cols-3 bg-border rounded-lg overflow-hidden">
              <div className="bg-background p-8 text-center">
                <div className="mb-3">
                  <div className="text-3xl font-bold tracking-tight">{t('stats.monitored.value')}</div>
                </div>
                <div className="text-sm font-medium mb-1">{t('stats.monitored.label')}</div>
                <div className="text-xs text-muted-foreground">{t('stats.monitored.description')}</div>
              </div>
              <div className="bg-background p-8 text-center">
                <div className="mb-3">
                  <div className="text-3xl font-bold tracking-tight">{t('stats.daily.value')}</div>
                </div>
                <div className="text-sm font-medium mb-1">{t('stats.daily.label')}</div>
                <div className="text-xs text-muted-foreground">{t('stats.daily.description')}</div>
              </div>
              <div className="bg-background p-8 text-center">
                <div className="mb-3">
                  <div className="text-3xl font-bold tracking-tight">{t('stats.coverage.value')}</div>
                </div>
                <div className="text-sm font-medium mb-1">{t('stats.coverage.label')}</div>
                <div className="text-xs text-muted-foreground">{t('stats.coverage.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border bg-muted/50 p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/tracker">{t('buttons.viewLiveTracker', { ns: 'common' })}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-semibold">
                  <Link to="/resources">{t('buttons.emergencyResources', { ns: 'common' })}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
