import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocaleStore } from '@/store/localeStore';
import { useTranslation } from 'react-i18next';

const LocaleSelector = () => {
  const { t } = useTranslation('common');
  const { countryCode, language, setCountry, setLanguage } = useLocaleStore();

  const countries = [
    { code: 'US', name: t('country.us'), flag: '🇺🇸' },
    { code: 'JP', name: t('country.japan'), flag: '🇯🇵' },
    { code: 'MX', name: t('country.mexico'), flag: '🇲🇽' },
    { code: 'CL', name: t('country.chile'), flag: '🇨🇱' },
    { code: 'ID', name: t('country.indonesia'), flag: '🇮🇩' },
    { code: 'PH', name: t('country.philippines'), flag: '🇵🇭' },
  ];

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇬🇧' },
    { code: 'es', name: t('language.spanish'), flag: '🇪🇸' },
    { code: 'ja', name: t('language.japanese'), flag: '🇯🇵' },
    { code: 'tl', name: t('language.tagalog'), flag: '🇵🇭' },
  ];

  const currentCountry = countries.find((c) => c.code === countryCode);
  const currentLanguage = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentCountry?.flag} {currentLanguage?.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{t('country.select')}</DropdownMenuLabel>
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => setCountry(country.code)}
            className={countryCode === country.code ? 'bg-muted' : ''}
          >
            <span className="mr-2">{country.flag}</span>
            {country.name}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel>{t('language.select')}</DropdownMenuLabel>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? 'bg-muted' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSelector;

