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
  { href: '/about-us', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
  { href: '/drivers-ed/learners-permit', label: 'Drivers Ed' },
  { href: '/driving-lessons/packages-pricing', label: 'Lessons' },
  { href: '/traffic-school', label: 'Traffic School' },
  { href: '/resources/dmv-info', label: 'DMV Info' },
  { href: '/resources/dmv-practice-tests', label: 'Practice Tests' },
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
        className="flex justify-center md:justify-center"
      >
        <ul className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-6">
          {routes.map((route) => (
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
          ))}
        </ul>
      </nav>
      {/* Right: Map */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <GMap className="w-full max-w-xs md:max-w-sm" />
      </div>
    </motion.footer>
  );
};
