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
  badge?: 'Most Popular' | 'Best Value' | 'New' | 'DMV Ready';
  category: 'Teen' | 'Adult';
  features: string[];
};

export const packages: Pkg[] = [
  // Teen Packages
  {
    id: 'teen-basic-3',
    title: '3 Driving Lessons',
    hours: 6,
    lessons: 3,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'CA Teen DMV Requirements',
    price: 525,
    originalPrice: 555,
    badge: 'DMV Ready',
    category: 'Teen',
    features: [
      'Free online drivers ed',
      'Meets CA teen requirements (ages 15½-17½)',
      'Pickup & drop-off included',
      'Certified instructors',
      'Progress tracking',
    ],
  },
  {
    id: 'teen-standard-4',
    title: '4 Driving Lessons',
    hours: 8,
    lessons: 4,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Extra Practice & Confidence',
    price: 695,
    originalPrice: 740,
    badge: 'Most Popular',
    category: 'Teen',
    features: [
      'Free online drivers ed',
      'Exceeds CA teen requirements',
      'Pickup & drop-off included',
      'Highway & city driving',
      'Parallel parking mastery',
      'Progress tracking',
    ],
  },
  {
    id: 'teen-premium-6',
    title: '6 Driving Lessons',
    hours: 12,
    lessons: 6,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Comprehensive Training',
    price: 1035,
    originalPrice: 1110,
    badge: 'Best Value',
    category: 'Teen',
    features: [
      'Free online drivers ed',
      'Extensive practice time',
      'Pickup & drop-off included',
      'All driving scenarios',
      'Defensive driving techniques',
      'Mock road test preparation',
      'Progress tracking',
    ],
  },
  {
    id: 'teen-complete-8',
    title: '8 Lessons + DMV Road Test',
    hours: 16,
    lessons: 8,
    carForTest: true,
    dmvTestIncluded: true,
    pickupDropoff: true,
    bestFor: 'Complete Package with Test',
    price: 1445,
    originalPrice: 1565,
    category: 'Teen',
    features: [
      'Free online drivers ed',
      'DMV road test included',
      'Car provided for test',
      'Pickup & drop-off included',
      'Pre-test practice session',
      'All driving scenarios',
      'Comprehensive training',
      'Test day support',
    ],
  },
  // Adult Packages
  {
    id: 'adult-basic-2',
    title: '2 Driving Lessons',
    hours: 4,
    lessons: 2,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Quick Refresher',
    price: 360,
    originalPrice: 370,
    badge: 'New',
    category: 'Adult',
    features: [
      'Flexible scheduling',
      'Pickup & drop-off included',
      'Basic skills review',
      'Traffic rules update',
      'Progress assessment',
    ],
  },
  {
    id: 'adult-standard-4',
    title: '4 Driving Lessons',
    hours: 8,
    lessons: 4,
    carForTest: false,
    dmvTestIncluded: false,
    pickupDropoff: true,
    bestFor: 'Skill Building',
    price: 695,
    originalPrice: 740,
    badge: 'Most Popular',
    category: 'Adult',
    features: [
      'Flexible scheduling',
      'Pickup & drop-off included',
      'Highway & city driving',
      'Parallel parking practice',
      'Defensive driving tips',
      'Progress tracking',
    ],
  },
  {
    id: 'adult-premium-6',
    title: '6 Lessons + DMV Test',
    hours: 12,
    lessons: 6,
    carForTest: true,
    dmvTestIncluded: true,
    pickupDropoff: true,
    bestFor: 'Complete Adult Package',
    price: 1295,
    originalPrice: 1395,
    badge: 'Best Value',
    category: 'Adult',
    features: [
      'DMV road test included',
      'Car provided for test',
      'Flexible scheduling',
      'Pickup & drop-off included',
      'All driving scenarios',
      'Test preparation',
      'Comprehensive training',
      'Test day support',
    ],
  },
  {
    id: 'adult-intensive-8',
    title: '8 Intensive Lessons',
    hours: 16,
    lessons: 8,
    carForTest: true,
    dmvTestIncluded: true,
    pickupDropoff: true,
    bestFor: 'Comprehensive Adult Training',
    price: 1595,
    originalPrice: 1740,
    category: 'Adult',
    features: [
      'DMV road test included',
      'Car provided for test',
      'Intensive training program',
      'Pickup & drop-off included',
      'Advanced driving techniques',
      'Night driving practice',
      'Freeway driving mastery',
      'Complete confidence building',
      'Test day support',
    ],
  },
];

export type FilterState = {
  zip: string;
  category: 'Teen' | 'Adult' | 'All';
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
    filtered = filtered.filter((pkg) => pkg.category === filters.category);
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
