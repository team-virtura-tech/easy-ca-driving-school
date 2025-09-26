// app/our-instructors/page.tsx (Server Component)
import {
  AnimatedCard,
  AnimatedInView,
  AnimatedSection,
} from '@/components/custom/Animated';
import { BadgeCheck, Car, Clock, Languages, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Instructors - Easy CA Driving School',
  description:
    'Meet our certified driving instructors serving Milpitas, Fremont, San Jose, and Sunnyvale. Friendly, patient, and DMV-test focused.',
};

type Instructor = {
  name: string;
  city: string;
  years: number;
  languages: string[];
  specialties: string[];
  bio: string;
  photo: string;
};

const INSTRUCTORS: Instructor[] = [
  {
    name: 'Raj Patel',
    city: 'Milpitas',
    years: 7,
    languages: ['English', 'Gujarati', 'Hindi'],
    specialties: ['Freeway coaching', 'Parallel parking', 'DMV route practice'],
    bio: 'Patient and detail‑oriented. Raj focuses on confidence building and safe habits from day one.',
    photo: '/images/aboutUs/maleProfile.png',
  },
  {
    name: 'Daniel Kim',
    city: 'Fremont',
    years: 5,
    languages: ['English', 'Korean'],
    specialties: ['New drivers', 'Lane discipline', 'Defensive driving'],
    bio: 'Daniel simplifies complex maneuvers into easy steps and keeps lessons calm and encouraging.',
    photo: '/images/aboutUs/maleProfile.png',
  },
  {
    name: 'Carlos Rivera',
    city: 'San Jose',
    years: 9,
    languages: ['English', 'Spanish'],
    specialties: ['Hill starts', 'Parking mastery', 'Night driving'],
    bio: 'Carlos brings real‑world city experience and practical tips that help you pass on the first try.',
    photo: '/images/aboutUs/maleProfile.png',
  },
  {
    name: 'Ethan Wong',
    city: 'Sunnyvale',
    years: 6,
    languages: ['English', 'Mandarin'],
    specialties: ['Test readiness', 'Mirror discipline', 'Smooth braking'],
    bio: "Clear communication and structured lesson plans so you always know what's next.",
    photo: '/images/aboutUs/maleProfile.png',
  },
  {
    name: 'Marcus Lee',
    city: 'San Jose',
    years: 8,
    languages: ['English'],
    specialties: ['Highway merges', 'Route planning', 'Emergency handling'],
    bio: "Marcus tailors practice routes to your neighborhood and the DMV you'll use.",
    photo: '/images/aboutUs/maleProfile.png',
  },
  {
    name: 'Aman Sharma',
    city: 'Fremont',
    years: 4,
    languages: ['English', 'Hindi'],
    specialties: ['Beginners', '3‑point turns', 'Confidence building'],
    bio: 'Friendly, calm, and great with first‑time drivers who want a judgement‑free start.',
    photo: '/images/aboutUs/maleProfile.png',
  },
];

export default function OurInstructorsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero */}
      <AnimatedSection
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary/90">
          <BadgeCheck className="size-4" />
          Certified & background‑checked instructors
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Our Instructors
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Meet the team serving Milpitas, Fremont, San Jose, and Sunnyvale.
          Patient, professional, and focused on safe driving.
        </p>
      </AnimatedSection>

      {/* Vertical Cards in 3x2 grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSTRUCTORS.map((ins, i) => (
          <AnimatedCard
            key={ins.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="group rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Photo on top with 1rem vertical padding */}
            <div className="rounded-xl border bg-muted/20 overflow-hidden py-4">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={ins.photo}
                  alt={`${ins.name} profile photo`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain group-hover:scale-[1.03] transition-transform"
                  priority={i < 2}
                />
              </div>
            </div>

            {/* Content below */}
            <div className="mt-4 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold leading-tight">
                  {ins.name}
                </h3>
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {ins.city}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{ins.bio}</p>

              <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <span>
                    <strong>{ins.years}+ yrs</strong> experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="size-4 text-primary" />
                  <span>{ins.languages.join(' • ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="size-4 text-primary" />
                  <span>Specialties</span>
                </div>
              </div>

              <ul className="mt-2 flex flex-wrap gap-2">
                {ins.specialties.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-5 flex items-center justify-between">
              <a
                href={`/book?instructor=${encodeURIComponent(ins.name)}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                <BadgeCheck className="size-4" /> Book with{' '}
                {ins.name.split(' ')[0]}
              </a>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" /> Based in {ins.city}
              </span>
            </div>
          </AnimatedCard>
        ))}
      </section>

      {/* Bottom note */}
      <AnimatedInView
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Don&apos;t see your city? We often accommodate nearby areas in the
          South Bay.
        </p>
      </AnimatedInView>
    </div>
  );
}
