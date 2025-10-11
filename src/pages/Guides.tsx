import { useState } from 'react';
import { preparednessGuides } from '@/utils/guide';
import { useTranslation } from 'react-i18next';

const Guides = () => {
  const { t } = useTranslation('guides');
  const [selectedGuide, setSelectedGuide] = useState('before');
  const currentGuide =
    preparednessGuides.find((g) => g.id === selectedGuide) ||
    preparednessGuides[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            {t('title')}
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-border overflow-x-auto">
            <nav className="flex gap-1 min-w-max" aria-label="Guide tabs">
              {preparednessGuides.map((guide) => {
                const Icon = guide.icon;
                const isActive = selectedGuide === guide.id;
                return (
                  <button
                    key={guide.id}
                    onClick={() => setSelectedGuide(guide.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
                      isActive
                        ? 'border-primary text-primary font-semibold'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm lg:text-base">{guide.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="mb-6">
          <div className="bg-background/50 backdrop-blur-sm rounded-lg border p-6 mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
              {currentGuide.title}
            </h2>
            <p className="text-muted-foreground">
              {currentGuide.description}
            </p>
          </div>

          {/* Grid Layout for Content Sections */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentGuide.content.map((section, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border/50 p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 group h-full flex flex-col"
              >
                <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                  <span className="w-1.5 h-5 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="flex-1">{section.subtitle}</span>
                </h3>
                <ul className="space-y-3 flex-1">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary font-bold flex-shrink-0 select-none mt-0.5" aria-hidden="true">
                        •
                      </span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;