import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { SectionHeader, FeatureCard, NumberedCard, StatCard, InfoBox, ResponsiveGrid } from '@/components/common';
import { getFeatures, getPreparednessCards } from '@/utils/home';
import { getHomeSEO } from '@/utils/seo';
import type { StatData } from '@/types/common';

const Home: React.FC = () => {
  const { t } = useTranslation('home');

  const features = getFeatures(t);
  const preparednessCards = getPreparednessCards(t);

  const stats: StatData[] = [
    {
      value: t('stats.monitored.value'),
      label: t('stats.monitored.label'),
      description: t('stats.monitored.description'),
    },
    {
      value: t('stats.daily.value'),
      label: t('stats.daily.label'),
      description: t('stats.daily.description'),
    },
    {
      value: t('stats.coverage.value'),
      label: t('stats.coverage.label'),
      description: t('stats.coverage.description'),
    },
  ];

  return (
    <>
      <SEO {...getHomeSEO()} />
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
              <div key={index} className="bg-background p-8 lg:p-10">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-y">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t('preparedness.title')}
            subtitle={t('preparedness.subtitle')}
            size="md"
            className="mb-12"
          />
          <ResponsiveGrid cols={{ sm: 2, lg: 4 }}>
            {preparednessCards.map((card, index) => (
              <NumberedCard
                key={index}
                title={card.title}
                description={card.description}
                number={card.number}
                link={card.link}
              />
            ))}
          </ResponsiveGrid>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-px sm:grid-cols-3 bg-border rounded-lg overflow-hidden">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <InfoBox variant="muted" className="p-8 lg:p-12 text-center">
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
            </InfoBox>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
