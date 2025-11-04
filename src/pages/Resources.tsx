import { useLocaleStore } from '@/store/localeStore';
import { useTranslation } from 'react-i18next';
import { SectionHeader, ExternalLinkCard, InfoCard, IconListItem, TypeTag, ResponsiveGrid } from '@/components/common';
import { getLocalResources, getVolunteerOrganizations } from '@/utils/resources';

const Resources: React.FC = () => {
  const { countryConfig } = useLocaleStore();
  const { t } = useTranslation('resources');

  const localResources = getLocalResources(t);
  const volunteerOrganizations = getVolunteerOrganizations(t);

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <SectionHeader
        title={t('title')}
        subtitle={t('subtitle')}
        size="lg"
      />

      <div className="space-y-16">
        <section>
          <SectionHeader
            title={t('sections.hotlines.title')}
            subtitle={t('sections.hotlines.subtitle')}
          />
          <ResponsiveGrid cols={{ sm: 2 }}>
            {countryConfig.emergencyNumbers.map((contact, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{contact.name}</h3>
                    <TypeTag type={contact.type} />
                  </div>
                  <div className="text-2xl font-mono font-bold text-primary">
                    {contact.number}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </div>
            ))}
          </ResponsiveGrid>
        </section>
        <section>
          <SectionHeader
            title={t('sections.agencies.title')}
            subtitle={t('sections.agencies.subtitle')}
          />
          <ResponsiveGrid cols={{ sm: 2 }}>
            {countryConfig.agencies.map((agency, index) => (
              <ExternalLinkCard
                key={index}
                name={agency.name}
                description={agency.description}
                url={agency.url}
                type={agency.type}
              />
            ))}
          </ResponsiveGrid>
        </section>
        <section>
          <SectionHeader
            title={t('sections.local.title')}
            subtitle={t('sections.local.subtitle')}
          />
          <ResponsiveGrid cols={{ sm: 2, lg: 3 }}>
            {localResources.map((resource, index) => (
              <InfoCard
                key={index}
                title={resource.category}
                description={resource.description}
              >
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <IconListItem key={itemIndex}>
                      {item}
                    </IconListItem>
                  ))}
                </ul>
              </InfoCard>
            ))}
          </ResponsiveGrid>
        </section>
        <section>
          <SectionHeader
            title={t('sections.volunteer.title')}
            subtitle={t('sections.volunteer.subtitle')}
          />
          <ResponsiveGrid cols={{ sm: 2 }}>
            {volunteerOrganizations.map((org, index) => (
              <ExternalLinkCard
                key={index}
                name={org.name}
                description={org.description}
                url={org.url}
                type={org.type}
              />
            ))}
          </ResponsiveGrid>
        </section>
        <section className="border-t pt-12">
          <InfoCard
            title={t('disclaimer.title')}
            description={t('disclaimer.text')}
            variant="muted"
            className="p-6 lg:p-8"
          />
        </section>
      </div>
    </div>
  );
};

export default Resources;
