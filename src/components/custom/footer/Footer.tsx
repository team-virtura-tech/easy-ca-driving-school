'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CircularText from './circularText';

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
      style={{ backgroundColor: 'var(--primary-foreground)' }}
      className={cn('w-full border-t border-border text-foreground', className)}
    >
      {/* Main Footer Content */}
      <div className="py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left: Brand Section */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
            <div className="flex justify-center lg:justify-start">
              <CircularText
                text="EASY*CA*DRIVERS*ED*"
                spinDuration={20}
                onHover="speedUp"
                className="dark:text-white"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center lg:text-left max-w-xs">
              Professional driving education in California. Safe, reliable, and
              convenient lessons.
            </p>
          </div>

          {/* Navigation Links - Split into 2 columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services Column */}
            <nav aria-label="Services navigation">
              <h3 className="font-semibold text-base mb-4 text-center md:text-left">
                Our Services
              </h3>
              <ul className="space-y-2 text-sm">
                {routes
                  .filter(
                    (route) =>
                      route.href.includes('/driving-lessons') ||
                      route.href.includes('/drivers-ed') ||
                      route.href.includes('/traffic-school')
                  )
                  .map((route) => (
                    <li key={route.href} className="text-center md:text-left">
                      <Link
                        href={route.href}
                        className={cn(
                          'hover:text-primary transition-colors',
                          pathname === route.href
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground'
                        )}
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>

            {/* Company & Resources Column */}
            <nav aria-label="Company navigation">
              <h3 className="font-semibold text-base mb-4 text-center md:text-left">
                Company & Resources
              </h3>
              <ul className="space-y-2 text-sm">
                {routes
                  .filter(
                    (route) =>
                      route.href.includes('/about-us') ||
                      route.href.includes('/resources') ||
                      route.href.includes('/contact-us') ||
                      route.href === '/'
                  )
                  .map((route) => (
                    <li key={route.href} className="text-center md:text-left">
                      <Link
                        href={route.href}
                        className={cn(
                          'hover:text-primary transition-colors',
                          pathname === route.href
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground'
                        )}
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>

          {/* Right: Contact & Address */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-base mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col space-y-2">
                  <a
                    href="tel:+18882998911"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    📞 (888) 299-8911
                  </a>
                  <a
                    href="mailto:info@easycadriversed.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    ✉️ info@easycadriversed.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-base mb-3">Visit Our Office</h3>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                📍 1776 Clear Lake Ave, Suite 200
                <br />
                Milpitas, California 95035
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="border-t border-border/50 py-4 px-4 md:px-8"
        style={{
          backgroundColor: 'var(--primary)',
        }}
      >
        <p className="text-center text-md text-foreground">
          © 2025 Easy California Drivers Ed. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
