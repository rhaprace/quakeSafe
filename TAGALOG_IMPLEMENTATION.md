# 🇵🇭 Tagalog Language Implementation

## Overview
QuakeSafe now supports **Tagalog (Filipino)** language to better serve the Philippines community!

## What's Implemented

### ✅ Complete Tagalog Translation Files
All pages and components have been translated to Tagalog:

1. **`common.json`** - Navigation, buttons, language/country names
2. **`home.json`** - Hero section, features, preparedness, stats, CTA
3. **`guides.json`** - Page title, subtitle, section names
4. **`resources.json`** - Emergency resources, hotlines, agencies
5. **`about.json`** - Mission, features, data sources, technical info, disclaimer
6. **`tracker.json`** - Live tracker, filters, views, card labels

### ✅ Philippines Country Configuration
- **Default Language**: Tagalog (`tl`)
- **Emergency Numbers**:
  - 911 - National emergency hotline
  - (02) 8911-1406 - NDRRMC Hotline
  - 143 - Philippine Red Cross
  - (02) 8527-8481 - Coast Guard
- **Government Agencies**:
  - PHIVOLCS - Philippine Institute of Volcanology and Seismology
  - NDRRMC - National Disaster Risk Reduction and Management Council
  - PAGASA - Philippine Atmospheric, Geophysical and Astronomical Services Administration
  - Philippine Red Cross

### ✅ Language Selector Updated
- Added Tagalog 🇵🇭 to language dropdown
- Automatically switches to Tagalog when Philippines is selected

## File Structure

```
src/i18n/locales/tl/
├── index.ts           # Exports all Tagalog translations
├── common.json        # Common UI elements
├── home.json          # Home page content
├── guides.json        # Guides page content
├── resources.json     # Resources page content
├── about.json         # About page content
└── tracker.json       # Tracker page content
```

## Key Translations

### Navigation
- **Home** → Home
- **Tracker** → Tracker
- **Guides** → Gabay
- **Resources** → Resources
- **About** → Tungkol

### Common Buttons
- **Visit Website** → Bisitahin ang Website
- **View Live Tracker** → Tingnan ang Live Tracker
- **Safety Guidelines** → Mga Alituntunin sa Kaligtasan
- **Emergency Resources** → Mga Emergency Resources
- **Learn more** → Matuto pa

### Home Page
- **Live Earthquake Monitoring** → Live na Pagsubaybay sa Lindol
- **Earthquake Safety & Real-Time Monitoring** → Kaligtasan sa Lindol at Real-Time na Pagsubaybay
- **Preparedness Guidelines** → Mga Gabay sa Paghahanda
- **Before Earthquake** → Bago ang Lindol
- **During Earthquake** → Habang may Lindol
- **After Earthquake** → Pagkatapos ng Lindol
- **Tsunami Preparedness** → Kahandaan sa Tsunami

### Resources Page
- **Emergency Resources** → Mga Emergency Resources
- **Emergency Hotlines** → Mga Emergency Hotline
- **Government Agencies** → Mga Ahensya ng Gobyerno
- **Volunteer Organizations** → Mga Volunteer Organizations

### About Page
- **About QuakeSafe** → Tungkol sa QuakeSafe
- **Our Mission** → Ang Aming Misyon
- **What We Provide** → Ano ang Aming Inaalok
- **Data Sources & Acknowledgments** → Mga Sanggunian ng Data at Pagkilala
- **Technical Information** → Teknikal na Impormasyon
- **Important Disclaimer** → Mahalagang Paalala
- **Stay Connected** → Manatiling Konektado

### Tracker Page
- **Live Earthquake Tracker** → Live na Earthquake Tracker
- **Magnitude** → Magnitude
- **Depth** → Lalim
- **Location** → Lokasyon
- **Time** → Oras
- **Tsunami Warning** → Babala sa Tsunami

## How to Use

### For Filipino Users:

1. **Open QuakeSafe** at http://localhost:5173/
2. **Click the Globe icon** 🌍 in the header
3. **Select "Pilipinas 🇵🇭"** from the country dropdown
4. **Language automatically switches to Tagalog!**

### Manual Language Selection:

1. **Click the Globe icon** 🌍 in the header
2. **Select "Tagalog 🇵🇭"** from the language dropdown
3. **All pages now display in Tagalog**

## Example Use Case

### Scenario: Filipino User in Manila

1. **User opens QuakeSafe**
2. **Selects Philippines 🇵🇭** from country selector
3. **App automatically switches to Tagalog**
4. **User sees:**
   - Hero: "Kaligtasan sa Lindol at Real-Time na Pagsubaybay"
   - Emergency Numbers: 911, NDRRMC (02) 8911-1406, Red Cross 143
   - Agencies: PHIVOLCS, NDRRMC, PAGASA
   - All navigation and buttons in Tagalog

5. **User goes to Resources page:**
   - "Mga Emergency Resources"
   - "Mga Emergency Hotline"
   - "Mga Ahensya ng Gobyerno"
   - Philippines-specific emergency contacts

6. **User goes to Guides page:**
   - "Mga Gabay sa Lindol"
   - "Bago ang Lindol"
   - "Habang may Lindol"
   - "Pagkatapos ng Lindol"

## Translation Quality

### Natural Filipino Phrasing
- Used natural Tagalog expressions
- Mixed English technical terms where commonly used (e.g., "Tracker", "Resources")
- Maintained formal tone appropriate for government/safety information

### Technical Terms
Some technical terms are kept in English as they are commonly used in the Philippines:
- **Tracker** (commonly used)
- **Resources** (commonly used)
- **Magnitude** (scientific term)
- **PHIVOLCS**, **NDRRMC**, **PAGASA** (official agency names)

### Cultural Considerations
- Emergency numbers reflect Philippine system (911, 143, etc.)
- Government agencies are Philippines-specific
- Safety protocols adapted for Philippine context

## Testing

### Build Status
✅ **Build Successful** - No errors or warnings

### Files Created
- 7 new files (6 JSON + 1 TypeScript index)
- Total lines: ~200 lines of translations

### Files Modified
- `src/i18n/config.ts` - Added Tagalog import and registration
- `src/components/LocaleSelector.tsx` - Added Tagalog to language dropdown
- `src/config/countries.ts` - Changed Philippines default language to Tagalog
- `src/i18n/locales/en/common.json` - Added Tagalog language name
- `src/i18n/locales/es/common.json` - Added Tagalog language name
- `src/i18n/locales/ja/common.json` - Added Tagalog language name

## Future Enhancements

### Potential Improvements
1. **Regional Dialects** - Add support for Cebuano, Ilocano, etc.
2. **More Natural Translations** - Get native speaker review
3. **Cultural Adaptations** - Add Philippines-specific earthquake preparedness tips
4. **Local Resources** - Add more local emergency contacts and resources
5. **Community Contributions** - Allow Filipino community to suggest improvements

### Additional Content
1. **Philippines-Specific Guides** - Earthquake preparedness for Philippine building types
2. **Typhoon + Earthquake** - Combined disaster preparedness
3. **Barangay Resources** - Local community emergency contacts
4. **SMS Alerts** - Integration with PHIVOLCS SMS alert system

## Contributing

### How to Improve Translations
1. Fork the repository
2. Edit files in `src/i18n/locales/tl/`
3. Test thoroughly
4. Submit pull request with description of changes

### Translation Guidelines
- Use formal Tagalog appropriate for government communications
- Keep technical terms in English if commonly used in Philippines
- Maintain consistency with existing translations
- Test all pages to ensure translations fit UI layout

## Credits

**Language**: Tagalog (Filipino)  
**Country**: Philippines 🇵🇭  
**Data Source**: PHIVOLCS (Philippine Institute of Volcanology and Seismology)  
**Emergency Services**: 911, NDRRMC, Philippine Red Cross  

---

**Salamat sa paggamit ng QuakeSafe!** 🇵🇭  
*Thank you for using QuakeSafe!*

