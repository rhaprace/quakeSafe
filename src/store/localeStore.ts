import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCountryConfig, type CountryConfig } from '@/config/countries';
import i18n from '@/i18n/config';

interface LocaleState {
  countryCode: string;
  language: string;
  countryConfig: CountryConfig;
  setCountry: (countryCode: string) => void;
  setLanguage: (language: string) => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      countryCode: 'US',
      language: 'en',
      countryConfig: getCountryConfig('US'),
      setCountry: (countryCode: string) => {
        const config = getCountryConfig(countryCode);
        set({
          countryCode,
          countryConfig: config,
          language: config.language,
        });
        i18n.changeLanguage(config.language);
      },
      setLanguage: (language: string) => {
        set({ language });
        i18n.changeLanguage(language);
      },
    }),
    {
      name: 'locale-storage',
    }
  )
);

