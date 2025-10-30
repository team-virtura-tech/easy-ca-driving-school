export type Pkg = {
  id: string;
  title: string;
  hours: number; // total hours
  lessons: number; // count
  carForTest: boolean;
  dmvTestIncluded: boolean;
  pickupDropoff: boolean;
  bestFor: string; // short tagline
  price: number; // current price
  originalPrice?: number; // optional crossed price
  badge?: 'Most Popular' | 'Best Value' | 'New' | 'DMV Ready' | 'Test Day';
  category: 'Teen' | 'Adult' | 'Test Day' | 'Universal';
  features: string[];
};

export const packages: Pkg[] = [
  // Basic Training Hours (2-4 hours)
  {
    id: 'training-2hrs',
    title: '2 Hours Training',
    hours: 2,
    lessons: 1,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Single Session',
    price: 180,
    category: 'Adult',
    features: [
      'Flexible scheduling',
      'Pickup & drop-off included',
      'Basic skills assessment',
      'Single focused session',
    ],
  },
  {
    id: 'training-4hrs',
    title: '4 Hours Training',
    hours: 4,
    lessons: 2,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Quick Refresher',
    price: 350,
    originalPrice: 360,
    category: 'Adult',
    features: [
      'Flexible scheduling',
      'Pickup & drop-off included',
      'Basic skills review',
      'Traffic rules update',
      'Progress assessment',
    ],
  },

  // Standard Training Hours (6-12 hours) - Universal for Teen & Adult
  {
    id: 'training-6hrs',
    title: '6 Hours Training',
    hours: 6,
    lessons: 3,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'DMV Requirements & Skill Building',
    price: 525,
    originalPrice: 540,
    badge: 'DMV Ready',
    category: 'Universal',
    features: [
      'Meets CA teen requirements (ages 15½-17½)',
      'Perfect for adult skill building',
      'Free online drivers ed (teens only)',
      'Pickup & drop-off included',
      'Certified instructors',
      'Progress tracking',
    ],
  },
  {
    id: 'training-8hrs',
    title: '8 Hours Training',
    hours: 8,
    lessons: 4,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Enhanced Skills & Confidence',
    price: 650,
    originalPrice: 670,
    badge: 'Most Popular',
    category: 'Universal',
    features: [
      'Exceeds CA teen requirements',
      'Enhanced skills for adults',
      'Free online drivers ed (teens only)',
      'Pickup & drop-off included',
      'Highway & city driving',
      'Parallel parking mastery',
      'Progress tracking',
    ],
  },
  {
    id: 'training-10hrs',
    title: '10 Hours Training',
    hours: 10,
    lessons: 5,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Extended Practice',
    price: 875,
    originalPrice: 900,
    badge: 'New',
    category: 'Universal',
    features: [
      'Extended practice for all ages',
      'Free online drivers ed (teens only)',
      'Pickup & drop-off included',
      'All driving scenarios',
      'Defensive driving techniques',
      'Mock road test preparation',
      'Progress tracking',
    ],
  },
  {
    id: 'training-12hrs',
    title: '12 Hours Training',
    hours: 12,
    lessons: 6,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Comprehensive Training',
    price: 1050,
    originalPrice: 1080,
    badge: 'Best Value',
    category: 'Universal',
    features: [
      'Comprehensive training for all ages',
      'Free online drivers ed (teens only)',
      'Extensive practice time',
      'Pickup & drop-off included',
      'All driving scenarios',
      'Defensive driving techniques',
      'Mock road test preparation',
      'Progress tracking',
    ],
  },

  // DMV Test Day Service
  {
    id: 'dmv-test-day',
    title: 'DMV Test Day Service',
    hours: 1, // Optional 1-hour warm-up
    lessons: 0,
    carForTest: true,
    dmvTestIncluded: true,
    pickupDropoff: true,
    bestFor: 'DMV Road Test Ready',
    price: 195,
    badge: 'Test Day',
    category: 'Test Day',
    features: [
      'Car provided for DMV test',
      'Meet you at DMV location',
      'Optional 1-hour warm-up session',
      'Insurance & registration handled',
      'Test day support & guidance',
      'Available for all DMV locations',
    ],
  },
];

export type FilterState = {
  zip: string;
  category: 'Teen' | 'Adult' | 'Test Day' | 'All';
  sort: 'popular' | 'price-asc' | 'price-desc' | 'hours-desc';
  includesCarForTest: boolean;
};

export const filterPackages = (
  packages: Pkg[],
  filters: FilterState
): Pkg[] => {
  let filtered = [...packages];

  // Filter by category
  if (filters.category !== 'All') {
    filtered = filtered.filter(
      (pkg) => pkg.category === filters.category || pkg.category === 'Universal'
    );
  }

  // Filter by car for test
  if (filters.includesCarForTest) {
    filtered = filtered.filter((pkg) => pkg.carForTest);
  }

  // Sort packages
  switch (filters.sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'hours-desc':
      filtered.sort((a, b) => b.hours - a.hours);
      break;
    case 'popular':
    default:
      // Keep original order (curated)
      break;
  }

  return filtered;
};
