'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CircularText from './circularText';
import { GMap } from './gMap';

export type FooterProps = {
  id?: string;
  className?: string;
};

const routes = [
  { href: '/', label: 'Home' },
  { href: '/driving-lessons/packages-pricing', label: 'Packages & Pricing' },
  {
    href: '/driving-lessons/driving-assessments',
    label: 'Driving Assessments',
  },
  { href: '/driving-lessons/dmv-road-tests', label: 'DMV Road Tests' },
  { href: '/drivers-ed/learners-permit', label: "Learner's Permit" },
  { href: '/traffic-school', label: 'Traffic School' },
  { href: '/about-us', label: 'About Us' },
  { href: '/about-us/reviews', label: 'Reviews' },
  { href: '/about-us/service-area', label: 'Service Area' },
  { href: '/about-us/our-instructors', label: 'Our Instructors' },
  { href: '/resources/dmv-practice-tests', label: 'DMV Practice Tests' },
  { href: '/resources/dmv-info', label: 'DMV Info' },
  { href: '/contact-us', label: 'Contact Us' },
];

export const Footer = ({ id, className }: FooterProps) => {
  const reduceMotion = useReducedMotion();
  const componentName = 'Footer';
  const rootId = id ?? componentName;
  const pathname = usePathname();

  return (
    <motion.footer
      id={rootId}
      data-component={componentName}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'w-full border-t border-border bg-background text-foreground',
        'py-6 px-4 md:px-8',
        'grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm',
        className
      )}
    >
      {/* Left: CircularText */}
      <div className="flex justify-center md:justify-start mb-2 md:mb-0">
        <div className="flex w-full justify-center items-center p-8">
          <CircularText
            text="EASY*CA*DRIVERS*ED*"
            spinDuration={20}
            onHover="speedUp"
            className="dark:text-white"
          />
        </div>
      </div>
      {/* Center: Navigation links */}
      <nav
        aria-label="Footer navigation"
        className="flex flex-col justify-center md:justify-center"
      >
        <h3 className="text-center font-semibold text-base mb-3">
          Quick Links
        </h3>
        <ul className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-6 items-center">
          {routes.map((route, index) => (
            <>
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    'hover:underline transition-colors',
                    pathname === route.href ? 'text-primary font-medium' : ''
                  )}
                >
                  {route.label}
                </Link>
              </li>
              {index < routes.length - 1 && (
                <li key={`dot-${index}`} className="hidden sm:block">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse block"></span>
                </li>
              )}
            </>
          ))}
        </ul>
      </nav>
      {/* Right: Map */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <GMap className="w-full md:max-w-sm" />
      </div>
    </motion.footer>
  );
};
