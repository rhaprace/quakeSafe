import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLocaleStore } from '@/store/localeStore';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { countryConfig } = useLocaleStore();
  const { t } = useTranslation('resources');

  const localResources = [
    {
      category: t('sections.local.shelters.category'),
      description: t('sections.local.shelters.description'),
      items: [
        t('sections.local.shelters.items.community'),
        t('sections.local.shelters.items.schools'),
        t('sections.local.shelters.items.religious'),
        t('sections.local.shelters.items.redcross'),
      ],
    },
    {
      category: t('sections.local.healthcare.category'),
      description: t('sections.local.healthcare.description'),
      items: [
        t('sections.local.healthcare.items.hospitals'),
        t('sections.local.healthcare.items.urgent'),
        t('sections.local.healthcare.items.fire'),
        t('sections.local.healthcare.items.community'),
      ],
    },
    {
      category: t('sections.local.supply.category'),
      description: t('sections.local.supply.description'),
      items: [
        t('sections.local.supply.items.eoc'),
        t('sections.local.supply.items.fema'),
        t('sections.local.supply.items.foodbanks'),
        t('sections.local.supply.items.distribution'),
      ],
    },
  ];

  const volunteerOrganizations = [
    {
      name: t('sections.volunteer.cert.name'),
      description: t('sections.volunteer.cert.description'),
      url: 'https://www.fema.gov/emergency-managers/individuals-communities/cert',
      type: t('sections.volunteer.cert.type'),
    },
    {
      name: t('sections.volunteer.redcross.name'),
      description: t('sections.volunteer.redcross.description'),
      url: 'https://www.redcross.org/volunteer',
      type: t('sections.volunteer.redcross.type'),
    },
    {
      name: t('sections.volunteer.salvation.name'),
      description: t('sections.volunteer.salvation.description'),
      url: 'https://www.salvationarmyusa.org/usn/disaster-relief/',
      type: t('sections.volunteer.salvation.type'),
    },
    {
      name: t('sections.volunteer.radio.name'),
      description: t('sections.volunteer.radio.description'),
      url: 'http://www.arrl.org/ares',
      type: t('sections.volunteer.radio.type'),
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t('sections.hotlines.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('sections.hotlines.subtitle')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {countryConfig.emergencyNumbers.map((contact, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{contact.name}</h3>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {contact.type}
                    </span>
                  </div>
                  <div className="text-2xl font-mono font-bold text-primary">
                    {contact.number}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t('sections.agencies.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('sections.agencies.subtitle')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {countryConfig.agencies.map((agency, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all flex flex-col"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                      {agency.type}
                    </span>
                    <h3 className="font-semibold">{agency.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{agency.description}</p>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full justify-center">
                    <a
                      href={agency.url}
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
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t('sections.local.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('sections.local.subtitle')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localResources.map((resource, index) => (
              <div
                key={index}
                className="border rounded-lg p-6"
              >
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">{resource.category}</h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{t('sections.volunteer.title')}</h2>
            <p className="text-sm text-muted-foreground">{t('sections.volunteer.subtitle')}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {volunteerOrganizations.map((org, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all flex flex-col"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                      {org.type}
                    </span>
                    <h3 className="font-semibold">{org.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{org.description}</p>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full justify-center">
                    <a
                      href={org.url}
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

        <section className="border-t pt-12">
          <div className="rounded-lg border bg-muted/50 p-6 lg:p-8">
            <h3 className="font-semibold mb-3">{t('disclaimer.title')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('disclaimer.text')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
