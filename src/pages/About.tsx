import { dataSources } from '@/utils/about';
import { useTranslation } from 'react-i18next';
import { useLocaleStore } from '@/store/localeStore';
import { SEO } from '@/components/SEO';
import { SectionHeader, FeatureCard, ExternalLinkCard, InfoBox, ResponsiveGrid } from '@/components/common';
import { getAboutSEO } from '@/utils/seo';
import type { FeatureCard as FeatureCardType } from '@/types/common';

const About: React.FC = () => {
  const { t } = useTranslation('about');
  const { countryConfig } = useLocaleStore();

  const features: FeatureCardType[] = [
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
    <>
      <SEO {...getAboutSEO()} />
      <div className="container mx-auto px-4 py-12 lg:py-16">
      <SectionHeader
        title={t('title')}
        subtitle={t('subtitle')}
        size="lg"
      />

      <div className="space-y-16">
        <section>
          <InfoBox variant="muted" className="p-8 lg:p-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4">{t('mission.title')}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {t('mission.text')}
            </p>
          </InfoBox>
        </section>

        <section>
          <SectionHeader
            title={t('features.title')}
            subtitle={t('features.subtitle')}
          />
          <ResponsiveGrid cols={{ sm: 2, lg: 4 }}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </ResponsiveGrid>
        </section>

        <section>
          <SectionHeader
            title={t('dataSources.title')}
            subtitle={t('dataSources.subtitle')}
          />
          <ResponsiveGrid cols={{ sm: 2, lg: 3 }}>
            {dataSources.map((source, index) => (
              <ExternalLinkCard
                key={index}
                name={source.name}
                description={source.description}
                url={source.url}
                type={source.type}
              />
            ))}
          </ResponsiveGrid>
        </section>
        <section>
          <SectionHeader
            title={t('technical.title')}
            subtitle={t('technical.subtitle')}
          />
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
          <InfoBox title={t('disclaimer.title')} variant="destructive">
            <div className="space-y-4 leading-relaxed">
              <p>{t('disclaimer.text1')}</p>
              <p>{t('disclaimer.text2')}</p>
              <p>{t('disclaimer.text3')}</p>
            </div>
          </InfoBox>
        </section>

        <section className="border-t pt-12">
          <InfoBox title={t('contact.title')} variant="muted">
            <p className="leading-relaxed mb-4">
              {t('contact.text')}
            </p>
            <p className="text-xs">
              {t('contact.footer')}
            </p>
          </InfoBox>
        </section>
      </div>
    </div>
    </>
  );
};

export default About;
