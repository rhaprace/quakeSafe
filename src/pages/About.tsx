import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { dataSources } from '@/utils/about';
import { useTranslation } from 'react-i18next';
import { useLocaleStore } from '@/store/localeStore';

const About = () => {
  const { t } = useTranslation('about');
  const { countryConfig } = useLocaleStore();

  const features = [
    {
      title: t('features.realtime.title'),
      description: t('features.realtime.description'),
    },
    {
      title: t('features.safety.title'),
      description: t('features.safety.description'),
    },
    {
      title: t('features.community.title'),
      description: t('features.community.description'),
    },
    {
      title: t('features.reliable.title'),
      description: t('features.reliable.description'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12 lg:mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
          {t('title')}
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          {t('subtitle')}
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <div className="rounded-lg border bg-muted/50 p-8 lg:p-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">{t('mission.title')}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {t('mission.text')}
            </p>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t('features.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('features.subtitle')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-lg p-6"
              >
                <div className="mb-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded border bg-background font-mono text-xs font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t('dataSources.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('dataSources.subtitle')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataSources.map((source, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all flex flex-col"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                      {source.type}
                    </span>
                    <h3 className="font-semibold">{source.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{source.description}</p>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full justify-center">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('buttons.visitWebsite', { ns: 'common' })}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t('technical.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('technical.subtitle')}</p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('technical.updateFrequency')}</span>
                <span className="font-medium">{t('technical.updateFrequencyValue')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('technical.dataSource')}</span>
                <span className="font-medium">{countryConfig.dataSource.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('technical.coverage')}</span>
                <span className="font-medium">{t('technical.coverageValue')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t('technical.accuracy')}</span>
                <span className="font-medium">{t('technical.accuracyValue')}</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-6 lg:p-8">
            <h3 className="font-semibold mb-4">{t('disclaimer.title')}</h3>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>{t('disclaimer.text1')}</p>
              <p>{t('disclaimer.text2')}</p>
              <p>{t('disclaimer.text3')}</p>
            </div>
          </div>
        </section>

        <section className="border-t pt-12">
          <div className="rounded-lg border bg-muted/50 p-6 lg:p-8">
            <h3 className="font-semibold mb-3">{t('contact.title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t('contact.text')}
            </p>
            <p className="text-xs text-muted-foreground">
              {t('contact.footer')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
