/**
 * Philippines Regional Emergency Resources
 * Organized by Region, Province, and City
 */

export interface LocalEmergencyContact {
  name: string;
  number: string;
  type: 'EMERGENCY' | 'HOSPITAL' | 'FIRE' | 'POLICE' | 'DISASTER' | 'EVACUATION';
  address?: string;
}

export interface CityEmergencyData {
  city: string;
  province: string;
  region: string;
  coordinates: [number, number]; // [latitude, longitude]
  contacts: LocalEmergencyContact[];
  evacuationCenters: string[];
  hospitals: string[];
  localGovernment: {
    name: string;
    hotline?: string;
    address?: string;
  };
}

export const philippinesRegions = [
  { code: 'NCR', name: 'National Capital Region (Metro Manila)' },
  { code: 'CAR', name: 'Cordillera Administrative Region' },
  { code: 'I', name: 'Ilocos Region (Region I)' },
  { code: 'II', name: 'Cagayan Valley (Region II)' },
  { code: 'III', name: 'Central Luzon (Region III)' },
  { code: 'IV-A', name: 'CALABARZON (Region IV-A)' },
  { code: 'IV-B', name: 'MIMAROPA (Region IV-B)' },
  { code: 'V', name: 'Bicol Region (Region V)' },
  { code: 'VI', name: 'Western Visayas (Region VI)' },
  { code: 'VII', name: 'Central Visayas (Region VII)' },
  { code: 'VIII', name: 'Eastern Visayas (Region VIII)' },
  { code: 'IX', name: 'Zamboanga Peninsula (Region IX)' },
  { code: 'X', name: 'Northern Mindanao (Region X)' },
  { code: 'XI', name: 'Davao Region (Region XI)' },
  { code: 'XII', name: 'SOCCSKSARGEN (Region XII)' },
  { code: 'XIII', name: 'Caraga (Region XIII)' },
  { code: 'BARMM', name: 'Bangsamoro Autonomous Region in Muslim Mindanao' },
];

// Sample data for major cities (can be expanded)
export const philippinesCities: CityEmergencyData[] = [
  // Metro Manila
  {
    city: 'Manila',
    province: 'Metro Manila',
    region: 'NCR',
    coordinates: [14.5995, 120.9842],
    contacts: [
      {
        name: 'Manila Emergency Operations Center',
        number: '(02) 8527-5174',
        type: 'EMERGENCY',
      },
      {
        name: 'Manila Disaster Risk Reduction and Management Office',
        number: '(02) 8527-5174',
        type: 'DISASTER',
      },
      {
        name: 'Manila Fire Department',
        number: '(02) 8310-2222',
        type: 'FIRE',
      },
      {
        name: 'Manila Police District',
        number: '(02) 8527-3065',
        type: 'POLICE',
      },
      {
        name: 'Philippine General Hospital',
        number: '(02) 8554-8400',
        type: 'HOSPITAL',
        address: 'Taft Avenue, Ermita, Manila',
      },
      {
        name: 'Manila Doctors Hospital',
        number: '(02) 8558-0888',
        type: 'HOSPITAL',
        address: 'UN Avenue, Ermita, Manila',
      },
    ],
    evacuationCenters: [
      'Rizal Memorial Sports Complex',
      'Manila City Hall Compound',
      'Mehan Garden',
      'Kartilya ng Katipunan Elementary School',
    ],
    hospitals: [
      'Philippine General Hospital',
      'Manila Doctors Hospital',
      'University of Santo Tomas Hospital',
      'Chinese General Hospital',
    ],
    localGovernment: {
      name: 'Manila City Government',
      hotline: '(02) 8527-5174',
      address: 'Manila City Hall, Arroceros St., Manila',
    },
  },
  {
    city: 'Quezon City',
    province: 'Metro Manila',
    region: 'NCR',
    coordinates: [14.6760, 121.0437],
    contacts: [
      {
        name: 'Quezon City Disaster Risk Reduction and Management Office',
        number: '(02) 8988-4242',
        type: 'DISASTER',
      },
      {
        name: 'Quezon City Fire Department',
        number: '(02) 8426-0219',
        type: 'FIRE',
      },
      {
        name: 'Quezon City Police District',
        number: '(02) 8924-6065',
        type: 'POLICE',
      },
      {
        name: 'Veterans Memorial Medical Center',
        number: '(02) 8927-0001',
        type: 'HOSPITAL',
        address: 'North Avenue, Quezon City',
      },
      {
        name: 'East Avenue Medical Center',
        number: '(02) 8928-0611',
        type: 'HOSPITAL',
        address: 'East Avenue, Quezon City',
      },
    ],
    evacuationCenters: [
      'Quezon City Memorial Circle',
      'Amoranto Sports Complex',
      'Quezon City Sports Club',
      'Various Barangay Halls',
    ],
    hospitals: [
      'Veterans Memorial Medical Center',
      'East Avenue Medical Center',
      'Philippine Heart Center',
      'National Kidney and Transplant Institute',
    ],
    localGovernment: {
      name: 'Quezon City Government',
      hotline: '(02) 8988-4242',
      address: 'Quezon City Hall, Elliptical Road, Quezon City',
    },
  },
  {
    city: 'Makati',
    province: 'Metro Manila',
    region: 'NCR',
    coordinates: [14.5547, 121.0244],
    contacts: [
      {
        name: 'Makati Disaster Risk Reduction and Management Office',
        number: '(02) 8870-1301',
        type: 'DISASTER',
      },
      {
        name: 'Makati Fire Department',
        number: '(02) 8899-3142',
        type: 'FIRE',
      },
      {
        name: 'Makati Police',
        number: '(02) 8899-8282',
        type: 'POLICE',
      },
      {
        name: 'Makati Medical Center',
        number: '(02) 8888-8999',
        type: 'HOSPITAL',
        address: '2 Amorsolo Street, Legaspi Village, Makati',
      },
      {
        name: 'Ospital ng Makati',
        number: '(02) 8882-6810',
        type: 'HOSPITAL',
        address: 'Sampaguita Street, Pembo, Makati',
      },
    ],
    evacuationCenters: [
      'Makati Coliseum',
      'Makati Sports Club',
      'Various Barangay Covered Courts',
    ],
    hospitals: [
      'Makati Medical Center',
      'Ospital ng Makati',
      'Cardinal Santos Medical Center',
    ],
    localGovernment: {
      name: 'Makati City Government',
      hotline: '(02) 8870-1301',
      address: 'Makati City Hall, J.P. Rizal Street, Makati',
    },
  },
  // Cebu
  {
    city: 'Cebu City',
    province: 'Cebu',
    region: 'VII',
    coordinates: [10.3157, 123.8854],
    contacts: [
      {
        name: 'Cebu City Disaster Risk Reduction and Management Office',
        number: '(032) 256-0441',
        type: 'DISASTER',
      },
      {
        name: 'Cebu City Fire Department',
        number: '(032) 256-0945',
        type: 'FIRE',
      },
      {
        name: 'Cebu City Police Office',
        number: '(032) 231-3232',
        type: 'POLICE',
      },
      {
        name: 'Vicente Sotto Memorial Medical Center',
        number: '(032) 253-9891',
        type: 'HOSPITAL',
        address: 'B. Rodriguez Street, Cebu City',
      },
      {
        name: 'Cebu Doctors University Hospital',
        number: '(032) 255-5555',
        type: 'HOSPITAL',
        address: 'Osmena Boulevard, Cebu City',
      },
    ],
    evacuationCenters: [
      'Cebu City Sports Center',
      'Abellana Sports Complex',
      'Various Barangay Gymnasiums',
    ],
    hospitals: [
      'Vicente Sotto Memorial Medical Center',
      'Cebu Doctors University Hospital',
      'Chong Hua Hospital',
    ],
    localGovernment: {
      name: 'Cebu City Government',
      hotline: '(032) 256-0441',
      address: 'Cebu City Hall, Osmena Boulevard, Cebu City',
    },
  },
  // Davao
  {
    city: 'Davao City',
    province: 'Davao del Sur',
    region: 'XI',
    coordinates: [7.1907, 125.4553],
    contacts: [
      {
        name: 'Davao City Disaster Risk Reduction and Management Office',
        number: '(082) 221-1111',
        type: 'DISASTER',
      },
      {
        name: 'Davao City Fire Department',
        number: '(082) 221-1111',
        type: 'FIRE',
      },
      {
        name: 'Davao City Police Office',
        number: '(082) 244-4601',
        type: 'POLICE',
      },
      {
        name: 'Southern Philippines Medical Center',
        number: '(082) 227-2731',
        type: 'HOSPITAL',
        address: 'J.P. Laurel Avenue, Davao City',
      },
      {
        name: 'Davao Doctors Hospital',
        number: '(082) 222-8000',
        type: 'HOSPITAL',
        address: 'E. Quirino Avenue, Davao City',
      },
    ],
    evacuationCenters: [
      'Almendras Gym',
      'University of Mindanao Gym',
      'Various Barangay Covered Courts',
    ],
    hospitals: [
      'Southern Philippines Medical Center',
      'Davao Doctors Hospital',
      'Davao Regional Medical Center',
    ],
    localGovernment: {
      name: 'Davao City Government',
      hotline: '(082) 221-1111',
      address: 'Davao City Hall, San Pedro Street, Davao City',
    },
  },
];

export const getCitiesByRegion = (regionCode: string): CityEmergencyData[] => {
  return philippinesCities.filter((city) => city.region === regionCode);
};

export const searchCities = (query: string): CityEmergencyData[] => {
  const lowerQuery = query.toLowerCase();
  return philippinesCities.filter(
    (city) =>
      city.city.toLowerCase().includes(lowerQuery) ||
      city.province.toLowerCase().includes(lowerQuery)
  );
};

export const getCityData = (cityName: string): CityEmergencyData | undefined => {
  return philippinesCities.find(
    (city) => city.city.toLowerCase() === cityName.toLowerCase()
  );
};

