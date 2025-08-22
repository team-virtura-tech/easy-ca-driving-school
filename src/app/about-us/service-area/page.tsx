// app/service-areas/page.tsx (Server Component)
import {
  AnimatedCard,
  AnimatedInView,
  AnimatedSection,
} from '@/components/custom/Animated';
import { Car, Clock, MapPin, Navigation2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas - Easy CA Driving School',
  description:
    'We provide professional driving lessons in multiple California cities. Check coverage and view maps for each area.',
};

type City = {
  name: string;
  blurb: string;
  highlights?: string[];
};

const CITIES: City[] = [
  {
    name: 'Milpitas, CA',
    blurb: 'Local instruction with easy access to freeway practice routes.',
    highlights: ['Teen & Adult Lessons', 'Road Test Prep', 'Freeway Coaching'],
  },
  {
    name: 'Fremont, CA',
    blurb: 'Convenient lessons near popular DMV test locations.',
    highlights: ['Manual or Automatic', 'Parking Mastery', 'Test Route Drills'],
  },
  {
    name: 'San Jose, CA',
    blurb: 'South Bay coverage with focus on freeway and city driving.',
    highlights: ['Beginner Friendly', 'Night Lessons', 'Defensive Driving'],
  },
  {
    name: 'Sunnyvale, CA',
    blurb: 'Lessons designed for both downtown traffic and residential areas.',
    highlights: ['DMV Test Prep', 'City & Suburb Mix', 'Instructor Feedback'],
  },
];

function cityToId(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export default function ServiceAreaPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero */}
      <AnimatedSection
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary/90">
          <Navigation2 className="size-4" />
          We come to your city
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Service Areas
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Professional, friendly instructors across multiple California cities.
          If you don’t see your city listed, reach out — we may still be able to
          help.
        </p>
      </AnimatedSection>

      {/* Cities grid */}
      <section aria-labelledby="cities" className="mb-12">
        <h2 id="cities" className="sr-only">
          Cities we serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CITIES.map((city, idx) => (
            <AnimatedCard
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl border size-10 flex items-center justify-center">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{city.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {city.blurb}
                  </p>
                </div>
              </div>

              {city.highlights?.length ? (
                <ul className="mt-4 space-y-1 text-sm">
                  {city.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Car className="size-4 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5">
                <a
                  href={`#${cityToId(city.name)}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <Clock className="size-4" />
                  View map & coverage
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Map + coverage (expandable per city) */}
      <AnimatedInView
        aria-labelledby="maps"
        className="space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="maps" className="text-xl font-semibold">
          Map & Coverage
        </h2>
        <p className="text-sm text-muted-foreground">
          Click a city below to expand its map. Each map centers on that city;
          use the controls to zoom/pan and find your neighborhood.
        </p>

        <div className="space-y-4">
          {CITIES.map((city) => {
            const id = cityToId(city.name);
            const q = encodeURIComponent(city.name);
            return (
              // IMPORTANT: Keep native <details> so summary toggling works
              <details
                key={id}
                id={id}
                className="group rounded-xl border bg-card"
              >
                <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-primary" />
                    <span className="font-medium">{city.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground group-open:hidden">
                    Expand
                  </span>
                  <span className="text-sm text-muted-foreground hidden group-open:inline">
                    Collapse
                  </span>
                </summary>

                {/* We can still animate the revealed content */}
                <AnimatedInView
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="px-4 pb-4"
                >
                  <div className="relative w-full overflow-hidden rounded-lg border">
                    <div className="pt-[56.25%]" />
                    <iframe
                      title={`Map of ${city.name}`}
                      src={`https://www.google.com/maps?q=${q}&output=embed`}
                      loading="lazy"
                      className="absolute left-0 top-0 h-full w-full"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Tip: Use directions in the map to estimate instructor travel
                    time to your area.
                  </p>
                </AnimatedInView>
              </details>
            );
          })}
        </div>
      </AnimatedInView>

      {/* Bottom CTA */}
      <AnimatedInView
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="inline-flex flex-col items-center gap-3 rounded-2xl border bg-muted/30 px-6 py-6">
          <p className="text-sm text-muted-foreground">
            Ready to start? We’ll match you with an instructor near you.
          </p>
          <a
            href="/book"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-primary-foreground font-medium hover:opacity-90 transition"
          >
            <Navigation2 className="size-4" />
            Check Availability
          </a>
        </div>
      </AnimatedInView>
    </div>
  );
}
