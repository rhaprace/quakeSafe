import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation('terms');
  const [openSection, setOpenSection] = useState<string | null>('introduction');

  const sections = [
    'introduction',
    'acceptance',
    'service',
    'disclaimer',
    'responsibilities',
    'intellectual',
    'thirdPartyData',
    'liability',
    'availability',
    'modifications',
    'law',
    'contact',
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
            {t('title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('lastUpdated')}: {t('date')}
          </p>
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-lg border overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x">
            <div className="md:col-span-1 p-4 bg-muted/20">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => toggleSection(section)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      openSection === section
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    {t(`sections.${section}.title`)}
                  </button>
                ))}
              </nav>
            </div>
            <div className="md:col-span-2 p-6 max-h-[600px] overflow-y-auto">
              {openSection === 'introduction' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.introduction.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.introduction.content')}
                  </p>
                </div>
              )}

              {openSection === 'acceptance' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.acceptance.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.acceptance.content')}
                  </p>
                </div>
              )}

              {openSection === 'service' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.service.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {t('sections.service.content')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {(t('sections.service.features', { returnObjects: true }) as string[]).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {openSection === 'disclaimer' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-destructive">{t('sections.disclaimer.title')}</h2>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-3">
                    <p className="text-sm font-medium text-destructive">
                      {t('sections.disclaimer.warning')}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      {(t('sections.disclaimer.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {openSection === 'responsibilities' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.responsibilities.title')}</h2>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {(t('sections.responsibilities.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {openSection === 'intellectual' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.intellectual.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.intellectual.content')}
                  </p>
                </div>
              )}

              {openSection === 'thirdPartyData' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.thirdPartyData.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {t('sections.thirdPartyData.content')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {(t('sections.thirdPartyData.sources', { returnObjects: true }) as string[]).map((source, i) => (
                      <li key={i}>{source}</li>
                    ))}
                  </ul>
                </div>
              )}

              {openSection === 'liability' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.liability.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.liability.content')}
                  </p>
                </div>
              )}

              {openSection === 'availability' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.availability.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.availability.content')}
                  </p>
                </div>
              )}

              {openSection === 'modifications' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.modifications.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.modifications.content')}
                  </p>
                </div>
              )}

              {openSection === 'law' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.law.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.law.content')}
                  </p>
                </div>
              )}

              {openSection === 'contact' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.contact.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.contact.content')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
