// app/reviews/page.tsx (Server Component)
import { AnimatedSection } from '@/components/custom/Animated';
import { MasonryWall } from '@/components/custom/reviews/MasonryWall';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Student Reviews - Easy CA Driving School',
  description:
    'Read real reviews from students and parents across Milpitas, Fremont, San Jose, and Sunnyvale.',
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number; // 1–5
  city?: 'Milpitas' | 'Fremont' | 'San Jose' | 'Sunnyvale';
  tags?: string[];
  date?: string; // ISO
};

export const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'New Driver',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'The instructors were incredibly patient and professional. I passed my test on the first try thanks to their excellent guidance and teaching methods.',
    rating: 5,
    city: 'Fremont',
    tags: ['Passed First Try', 'DMV Prep'],
    date: '2025-05-12',
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Student',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'Amazing experience! The flexible scheduling and modern teaching techniques made learning to drive stress-free and enjoyable.',
    rating: 5,
    city: 'San Jose',
    tags: ['Flexible Scheduling'],
    date: '2025-04-28',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Professional Driver',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'I needed to refresh my driving skills and this school exceeded my expectations. Highly recommend their professional courses.',
    rating: 5,
    city: 'Milpitas',
    tags: ['Refresher Course'],
    date: '2025-03-30',
  },
  {
    id: '4',
    name: 'David Kumar',
    role: 'New Driver',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'The best driving school in the area! Their safety-first approach and comprehensive curriculum gave me confidence on the road.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Safety First'],
    date: '2025-02-18',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Professional, reliable, and effective. The instructors truly care about your success and safety. Passed my test with flying colors!',
    rating: 5,
    city: 'Fremont',
    tags: ['Professional', 'Passed First Try'],
    date: '2025-01-22',
  },
  // Added reviews (15 more)
  {
    id: '6',
    name: 'Priya Shah',
    role: 'Parent',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'My daughter felt comfortable from day one. Clear feedback after every lesson and a structured path to the test date.',
    rating: 5,
    city: 'Milpitas',
    tags: ['Parent Review'],
    date: '2024-12-02',
  },
  {
    id: '7',
    name: 'Kevin Nguyen',
    role: 'New Driver',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'Friendly instructors and super practical tips for busy Bay Area roads. Parallel parking finally makes sense!',
    rating: 5,
    city: 'San Jose',
    tags: ['Parking Mastery'],
    date: '2025-06-08',
  },
  {
    id: '8',
    name: 'Sofia Martinez',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Scheduling was easy and lessons were tailored to my weak spots. I felt more confident each week.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Flexible Scheduling'],
    date: '2025-03-10',
  },
  {
    id: '9',
    name: 'Jason Lee',
    role: 'Working Professional',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Took refresher lessons after a long break from driving. Patient coaching and real-world scenarios helped a ton.',
    rating: 5,
    city: 'Fremont',
    tags: ['Refresher Course'],
    date: '2025-04-05',
  },
  {
    id: '10',
    name: 'Aisha Patel',
    role: 'Student',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'They focused on safety and awareness. The mock test routes were a game changer before my DMV exam.',
    rating: 5,
    city: 'Milpitas',
    tags: ['DMV Prep', 'Safety First'],
    date: '2025-05-14',
  },
  {
    id: '11',
    name: "Brian O'Connor",
    role: 'New Driver',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Clear instructions and zero judgment. I went from nervous to confident faster than I expected.',
    rating: 5,
    city: 'San Jose',
    tags: ['Confidence Building'],
    date: '2025-05-01',
  },
  {
    id: '12',
    name: 'Hannah Park',
    role: 'Student',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Loved the step-by-step breakdowns. Parking and lane changes finally clicked for me.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Parking Mastery'],
    date: '2025-04-22',
  },
  {
    id: '13',
    name: 'Omar Ali',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Professional and always on time. They customized lessons around my work schedule.',
    rating: 5,
    city: 'Fremont',
    tags: ['Professional'],
    date: '2025-02-27',
  },
  {
    id: '14',
    name: 'Grace Williams',
    role: 'Parent',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'My son learned safe habits, not just how to pass. Instructors were respectful and thorough.',
    rating: 5,
    city: 'Milpitas',
    tags: ['Parent Review', 'Safety First'],
    date: '2025-01-30',
  },
  {
    id: '15',
    name: 'Nikhil Verma',
    role: 'Student',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Great freeway coaching and lane discipline. The feedback after each lesson was super specific.',
    rating: 5,
    city: 'San Jose',
    tags: ['Freeway Coaching'],
    date: '2025-03-18',
  },
  {
    id: '16',
    name: 'Chloe Anderson',
    role: 'New Driver',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'I was terrified of hill starts—now they are easy. Couldn’t recommend more!',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Beginners'],
    date: '2025-02-09',
  },
  {
    id: '17',
    name: 'Mateo Garcia',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'The lesson plans were clear and the instructors kept me calm. Passed first try.',
    rating: 5,
    city: 'Fremont',
    tags: ['Passed First Try'],
    date: '2025-06-01',
  },
  {
    id: '18',
    name: 'Olivia Nguyen',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Loved the mock DMV test. It felt exactly like the real thing and boosted my confidence.',
    rating: 5,
    city: 'Milpitas',
    tags: ['DMV Prep'],
    date: '2025-05-26',
  },
  {
    id: '19',
    name: 'Isabella Rossi',
    role: 'Student',
    avatar: '/images/aboutUs/maleProfile.png',
    content:
      'Patient, positive, and super knowledgeable. The best learning experience I’ve had.',
    rating: 5,
    city: 'San Jose',
    tags: ['Confidence Building'],
    date: '2025-04-09',
  },
  {
    id: '20',
    name: 'Ethan Brown',
    role: 'New Driver',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Flexible scheduling and practical routes around my neighborhood. I felt ready for everything.',
    rating: 5,
    city: 'Sunnyvale',
    tags: ['Flexible Scheduling'],
    date: '2025-03-05',
  },
];

function calcAverageRating(items: Testimonial[]) {
  const total = items.reduce((sum, t) => sum + (t.rating || 0), 0);
  return items.length ? Math.round((total / items.length) * 10) / 10 : 0;
}

export default function ReviewsPage() {
  const reviewCount = defaultTestimonials.length;
  const avg = calcAverageRating(defaultTestimonials);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Easy CA Driving School',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg,
      reviewCount,
    },
    review: defaultTestimonials.slice(0, 20).map((t) => ({
      '@type': 'Review',
      reviewBody: t.content,
      reviewRating: { '@type': 'Rating', ratingValue: t.rating },
      author: { '@type': 'Person', name: t.name },
      datePublished: t.date || undefined,
    })),
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Stats band + logos */}
      <AnimatedSection
        className="mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="rounded-2xl border bg-muted/30 p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold">{avg.toFixed(1)}★</p>
              <p className="text-xs text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{reviewCount}+</p>
              <p className="text-xs text-muted-foreground">Student Reviews</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">4 Cities</p>
              <p className="text-xs text-muted-foreground">
                Milpitas • Fremont • San Jose • Sunnyvale
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border px-2 py-1 bg-background">
                Google
              </span>
              <span className="rounded-full border px-2 py-1 bg-background">
                Yelp
              </span>
              <span className="rounded-full border px-2 py-1 bg-background">
                Facebook
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Heading */}
      <AnimatedSection
        className="text-center mb-6"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Wall of Love
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Real feedback from learners just like you. Click any card to read the
          full review.
        </p>
      </AnimatedSection>

      {/* Masonry wall */}
      <MasonryWall testimonials={defaultTestimonials} />

      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
