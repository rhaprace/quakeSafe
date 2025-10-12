import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation('privacy');
  const [openSection, setOpenSection] = useState<string | null>('introduction');

  const sections = [
    'introduction',
    'collection',
    'usage',
    'storage',
    'thirdParty',
    'rights',
    'cookies',
    'children',
    'changes',
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

              {openSection === 'collection' && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-3">{t('sections.collection.title')}</h2>
                  <div>
                    <h3 className="text-base font-medium mb-2">{t('sections.collection.automatic.title')}</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      {(t('sections.collection.automatic.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-base font-medium mb-2">{t('sections.collection.location.title')}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('sections.collection.location.content')}
                    </p>
                  </div>
                </div>
              )}

              {openSection === 'usage' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.usage.title')}</h2>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {(t('sections.usage.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {openSection === 'storage' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.storage.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {t('sections.storage.content')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {(t('sections.storage.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {openSection === 'thirdParty' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.thirdParty.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {t('sections.thirdParty.content')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {(t('sections.thirdParty.services', { returnObjects: true }) as string[]).map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}

              {openSection === 'rights' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.rights.title')}</h2>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {(t('sections.rights.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {openSection === 'cookies' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.cookies.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.cookies.content')}
                  </p>
                </div>
              )}

              {openSection === 'children' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.children.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.children.content')}
                  </p>
                </div>
              )}

              {openSection === 'changes' && (
                <div>
                  <h2 className="text-xl font-semibold mb-3">{t('sections.changes.title')}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('sections.changes.content')}
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

export default Privacy;

