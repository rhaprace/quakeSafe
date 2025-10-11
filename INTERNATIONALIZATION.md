# 🌍 QuakeSafe Internationalization (i18n)

## Overview
QuakeSafe now supports **multiple languages** and **country-specific resources** to serve earthquake-prone regions worldwide.

## Supported Languages
- 🇬🇧 **English** (`en`)
- 🇪🇸 **Spanish** (`es`)
- 🇯🇵 **Japanese** (`ja`)
- 🇵🇭 **Tagalog** (`tl`)

## Supported Countries/Regions
- 🇺🇸 **United States** (English) - USGS, FEMA, Ready.gov
- 🇯🇵 **Japan** (Japanese) - JMA, NIED, Cabinet Office
- 🇲🇽 **Mexico** (Spanish) - SSN, CENAPRED, Protección Civil
- 🇨🇱 **Chile** (Spanish) - CSN, ONEMI, SHOA
- 🇮🇩 **Indonesia** (English) - BMKG, BNPB, PMI
- 🇵🇭 **Philippines** (Tagalog) - PHIVOLCS, NDRRMC, PAGASA

## Features

### 1. Language Selection
Users can select their preferred language from the header dropdown:
- Automatically detects browser language
- Persists selection in localStorage
- Updates all UI text dynamically

### 2. Country-Specific Resources
Each country has customized:
- **Emergency Numbers** - Local emergency hotlines
- **Government Agencies** - National earthquake monitoring agencies
- **Data Sources** - Country-specific seismic data providers

### 3. Dynamic Content
Pages automatically update based on selected country:
- **Resources Page** - Shows country-specific emergency contacts and agencies
- **About Page** - Displays local data source information
- **All Pages** - Translated UI elements

## File Structure

```
src/
├── i18n/
│   ├── config.ts                 # i18n configuration
│   └── locales/
│       ├── en/                   # English translations
│       │   ├── index.ts
│       │   ├── common.json
│       │   ├── home.json
│       │   ├── guides.json
│       │   ├── resources.json
│       │   ├── about.json
│       │   └── tracker.json
│       ├── es/                   # Spanish translations
│       │   └── ...
│       └── ja/                   # Japanese translations
│           └── ...
├── config/
│   └── countries.ts              # Country configurations
├── store/
│   └── localeStore.ts            # Locale state management
└── components/
    └── LocaleSelector.tsx        # Language/country selector
```

## Usage

### Adding a New Language

1. **Create translation files:**
```bash
src/i18n/locales/[language-code]/
├── index.ts
├── common.json
├── home.json
├── guides.json
├── resources.json
├── about.json
└── tracker.json
```

2. **Register in config:**
```typescript
// src/i18n/config.ts
import newLangTranslations from './locales/[language-code]';

i18n.init({
  resources: {
    // ...
    [language-code]: newLangTranslations,
  },
});
```

3. **Add to LocaleSelector:**
```typescript
// src/components/LocaleSelector.tsx
const languages = [
  // ...
  { code: '[language-code]', name: 'Language Name', flag: '🏳️' },
];
```

### Adding a New Country

1. **Add country configuration:**
```typescript
// src/config/countries.ts
export const countries: Record<string, CountryConfig> = {
  // ...
  XX: {
    code: 'XX',
    name: 'Country Name',
    language: 'en',
    emergencyNumbers: [
      {
        name: 'Emergency Services',
        number: '123',
        description: 'Emergency hotline',
        type: 'EMERGENCY',
      },
    ],
    agencies: [
      {
        name: 'National Agency',
        description: 'Earthquake monitoring',
        url: 'https://example.com',
        type: 'PRIMARY DATA SOURCE',
      },
    ],
    dataSource: {
      name: 'Data Source Name',
      url: 'https://example.com',
    },
  },
};
```

2. **Add translations:**
```json
// src/i18n/locales/en/common.json
{
  "country": {
    "countryName": "Country Name"
  }
}
```

3. **Add to LocaleSelector:**
```typescript
// src/components/LocaleSelector.tsx
const countries = [
  // ...
  { code: 'XX', name: t('country.countryName'), flag: '🏳️' },
];
```

## Translation Keys

### Common (`common.json`)
- `appName` - Application name
- `navigation.*` - Navigation menu items
- `buttons.*` - Button labels
- `language.*` - Language names
- `country.*` - Country names

### Home (`home.json`)
- `hero.*` - Hero section content
- `features.*` - Feature descriptions
- `preparedness.*` - Preparedness section
- `stats.*` - Statistics section
- `cta.*` - Call-to-action section

### Resources (`resources.json`)
- `title` - Page title
- `subtitle` - Page subtitle
- `sections.*` - Section titles and subtitles
- `disclaimer.*` - Disclaimer text

### About (`about.json`)
- `title` - Page title
- `subtitle` - Page subtitle
- `mission.*` - Mission statement
- `features.*` - Features section
- `dataSources.*` - Data sources section
- `technical.*` - Technical information
- `disclaimer.*` - Disclaimer text
- `contact.*` - Contact information

### Guides (`guides.json`)
- `title` - Page title
- `subtitle` - Page subtitle
- `sections.*` - Guide section names

### Tracker (`tracker.json`)
- `title` - Page title
- `subtitle` - Page subtitle
- `loading` - Loading message
- `error` - Error message
- `filters.*` - Filter options
- `views.*` - View options
- `card.*` - Card labels
- `stats.*` - Statistics labels

## Technical Details

### Libraries Used
- **react-i18next** - React integration for i18next
- **i18next** - Internationalization framework
- **i18next-browser-languagedetector** - Automatic language detection

### State Management
- **Zustand** - Locale state persistence
- **localStorage** - Persists language and country selection

### Auto-Detection
- Detects browser language on first visit
- Falls back to English if language not supported
- Remembers user selection across sessions

## Future Enhancements

### Planned Languages
- 🇮🇩 Indonesian (Bahasa Indonesia)
- 🇹🇷 Turkish
- 🇮🇹 Italian
- 🇬🇷 Greek

### Planned Countries
- Turkey
- Italy
- Greece
- New Zealand
- Iran
- Peru

### Features
- RTL (Right-to-Left) support for Arabic/Hebrew
- Regional dialects (e.g., Latin American Spanish vs Spain Spanish)
- Community translation contributions
- Automatic translation suggestions
- Date/time localization
- Number formatting (decimal separators, etc.)

## Contributing

To contribute translations:
1. Fork the repository
2. Add translation files for your language
3. Test thoroughly
4. Submit a pull request

For country-specific data:
1. Verify emergency numbers are accurate
2. Include official government sources only
3. Provide reliable data source URLs
4. Test all links

## License
All translations are part of the QuakeSafe project and follow the same license.

