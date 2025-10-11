export interface EmergencyContact {
  name: string;
  number: string;
  description: string;
  type: string;
}

export interface GovernmentAgency {
  name: string;
  description: string;
  url: string;
  type: string;
}

export interface CountryConfig {
  code: string;
  name: string;
  language: string;
  emergencyNumbers: EmergencyContact[];
  agencies: GovernmentAgency[];
  dataSource: {
    name: string;
    url: string;
    apiEndpoint?: string;
  };
}

export const countries: Record<string, CountryConfig> = {
  US: {
    code: 'US',
    name: 'United States',
    language: 'en',
    emergencyNumbers: [
      {
        name: 'Emergency Services',
        number: '911',
        description: 'Police, Fire, Medical emergencies',
        type: 'EMERGENCY',
      },
      {
        name: 'FEMA Helpline',
        number: '1-800-621-3362',
        description: 'Federal disaster assistance and information',
        type: 'DISASTER',
      },
      {
        name: 'Red Cross',
        number: '1-800-733-2767',
        description: 'Disaster relief and emergency assistance',
        type: 'RELIEF',
      },
      {
        name: 'Poison Control',
        number: '1-800-222-1222',
        description: 'Poison emergency hotline',
        type: 'MEDICAL',
      },
    ],
    agencies: [
      {
        name: 'U.S. Geological Survey (USGS)',
        description: 'Real-time earthquake data and scientific monitoring',
        url: 'https://www.usgs.gov/programs/earthquake-hazards',
        type: 'PRIMARY DATA SOURCE',
      },
      {
        name: 'Federal Emergency Management Agency (FEMA)',
        description: 'Emergency preparedness guidelines and best practices',
        url: 'https://www.fema.gov',
        type: 'PREPAREDNESS GUIDELINES',
      },
      {
        name: 'Ready.gov',
        description: 'National preparedness campaign resources',
        url: 'https://www.ready.gov/earthquakes',
        type: 'EDUCATIONAL CONTENT',
      },
    ],
    dataSource: {
      name: 'USGS Earthquake API',
      url: 'https://earthquake.usgs.gov/earthquakes/feed/',
      apiEndpoint: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
    },
  },
  JP: {
    code: 'JP',
    name: 'Japan',
    language: 'ja',
    emergencyNumbers: [
      {
        name: '警察 (Police)',
        number: '110',
        description: '警察への緊急通報',
        type: '緊急',
      },
      {
        name: '消防・救急 (Fire/Ambulance)',
        number: '119',
        description: '火災・救急医療の緊急通報',
        type: '緊急',
      },
      {
        name: '災害用伝言ダイヤル',
        number: '171',
        description: '災害時の安否確認サービス',
        type: '災害',
      },
    ],
    agencies: [
      {
        name: '気象庁 (Japan Meteorological Agency)',
        description: '地震情報と津波警報の発表',
        url: 'https://www.jma.go.jp/jma/indexe.html',
        type: '主要データソース',
      },
      {
        name: '防災科学技術研究所 (NIED)',
        description: '地震観測ネットワークと研究',
        url: 'https://www.bosai.go.jp/e/',
        type: '研究機関',
      },
      {
        name: '内閣府防災情報',
        description: '政府の防災情報と対策',
        url: 'http://www.bousai.go.jp/',
        type: '政府機関',
      },
    ],
    dataSource: {
      name: 'Japan Meteorological Agency',
      url: 'https://www.jma.go.jp/jma/indexe.html',
    },
  },
  MX: {
    code: 'MX',
    name: 'Mexico',
    language: 'es',
    emergencyNumbers: [
      {
        name: 'Emergencias',
        number: '911',
        description: 'Policía, bomberos, emergencias médicas',
        type: 'EMERGENCIA',
      },
      {
        name: 'Cruz Roja Mexicana',
        number: '065',
        description: 'Asistencia médica de emergencia',
        type: 'MÉDICO',
      },
      {
        name: 'Protección Civil',
        number: '5683-2222',
        description: 'Información y asistencia en desastres',
        type: 'DESASTRE',
      },
    ],
    agencies: [
      {
        name: 'Servicio Sismológico Nacional (SSN)',
        description: 'Monitoreo sísmico y datos en tiempo real',
        url: 'http://www.ssn.unam.mx/',
        type: 'FUENTE DE DATOS PRIMARIA',
      },
      {
        name: 'CENAPRED',
        description: 'Centro Nacional de Prevención de Desastres',
        url: 'https://www.gob.mx/cenapred',
        type: 'PREVENCIÓN',
      },
      {
        name: 'Protección Civil Nacional',
        description: 'Coordinación nacional de emergencias',
        url: 'https://www.gob.mx/segob/acciones-y-programas/proteccion-civil',
        type: 'GOBIERNO',
      },
    ],
    dataSource: {
      name: 'Servicio Sismológico Nacional',
      url: 'http://www.ssn.unam.mx/',
    },
  },
  CL: {
    code: 'CL',
    name: 'Chile',
    language: 'es',
    emergencyNumbers: [
      {
        name: 'Emergencias',
        number: '131',
        description: 'Ambulancia y emergencias médicas',
        type: 'EMERGENCIA',
      },
      {
        name: 'Bomberos',
        number: '132',
        description: 'Servicio de bomberos',
        type: 'EMERGENCIA',
      },
      {
        name: 'Carabineros',
        number: '133',
        description: 'Policía de Chile',
        type: 'EMERGENCIA',
      },
    ],
    agencies: [
      {
        name: 'Centro Sismológico Nacional',
        description: 'Monitoreo sísmico de Chile',
        url: 'https://www.sismologia.cl/',
        type: 'FUENTE DE DATOS PRIMARIA',
      },
      {
        name: 'ONEMI',
        description: 'Oficina Nacional de Emergencia',
        url: 'https://www.onemi.gov.cl/',
        type: 'GOBIERNO',
      },
      {
        name: 'SHOA',
        description: 'Servicio Hidrográfico y Oceanográfico (Tsunamis)',
        url: 'https://www.shoa.cl/',
        type: 'ALERTA DE TSUNAMI',
      },
    ],
    dataSource: {
      name: 'Centro Sismológico Nacional',
      url: 'https://www.sismologia.cl/',
    },
  },
  ID: {
    code: 'ID',
    name: 'Indonesia',
    language: 'en',
    emergencyNumbers: [
      {
        name: 'Emergency Services',
        number: '112',
        description: 'Police, fire, medical emergencies',
        type: 'EMERGENCY',
      },
      {
        name: 'Ambulance',
        number: '118',
        description: 'Medical emergency services',
        type: 'MEDICAL',
      },
      {
        name: 'Disaster Management',
        number: '117',
        description: 'BNPB disaster hotline',
        type: 'DISASTER',
      },
    ],
    agencies: [
      {
        name: 'BMKG (Meteorology Agency)',
        description: 'Earthquake and tsunami monitoring',
        url: 'https://www.bmkg.go.id/',
        type: 'PRIMARY DATA SOURCE',
      },
      {
        name: 'BNPB',
        description: 'National Disaster Management Agency',
        url: 'https://bnpb.go.id/',
        type: 'DISASTER MANAGEMENT',
      },
      {
        name: 'Indonesian Red Cross (PMI)',
        description: 'Disaster relief and emergency response',
        url: 'https://pmi.or.id/',
        type: 'RELIEF',
      },
    ],
    dataSource: {
      name: 'BMKG Indonesia',
      url: 'https://www.bmkg.go.id/',
    },
  },
  PH: {
    code: 'PH',
    name: 'Philippines',
    language: 'tl',
    emergencyNumbers: [
      {
        name: 'Emergency Hotline',
        number: '911',
        description: 'National emergency hotline for police, fire, and medical',
        type: 'EMERGENCY',
      },
      {
        name: 'NDRRMC Hotline',
        number: '(02) 8911-1406',
        description: 'National Disaster Risk Reduction and Management Council',
        type: 'DISASTER',
      },
      {
        name: 'Philippine Red Cross',
        number: '143',
        description: 'Emergency medical services and disaster response',
        type: 'RELIEF',
      },
      {
        name: 'Coast Guard',
        number: '(02) 8527-8481',
        description: 'Maritime emergencies and search and rescue',
        type: 'EMERGENCY',
      },
    ],
    agencies: [
      {
        name: 'PHIVOLCS',
        description: 'Philippine Institute of Volcanology and Seismology - Earthquake monitoring and tsunami warnings',
        url: 'https://www.phivolcs.dost.gov.ph/',
        type: 'PRIMARY DATA SOURCE',
      },
      {
        name: 'NDRRMC',
        description: 'National Disaster Risk Reduction and Management Council',
        url: 'https://ndrrmc.gov.ph/',
        type: 'DISASTER MANAGEMENT',
      },
      {
        name: 'PAGASA',
        description: 'Philippine Atmospheric, Geophysical and Astronomical Services Administration',
        url: 'https://www.pagasa.dost.gov.ph/',
        type: 'WEATHER & CLIMATE',
      },
      {
        name: 'Philippine Red Cross',
        description: 'Humanitarian services and disaster response',
        url: 'https://redcross.org.ph/',
        type: 'RELIEF',
      },
    ],
    dataSource: {
      name: 'PHIVOLCS',
      url: 'https://www.phivolcs.dost.gov.ph/',
    },
  },
};

export const getCountryConfig = (countryCode: string): CountryConfig => {
  return countries[countryCode] || countries.US;
};

export const getCountryByLanguage = (language: string): CountryConfig => {
  const countryEntry = Object.entries(countries).find(
    ([, config]) => config.language === language
  );
  return countryEntry ? countryEntry[1] : countries.US;
};

