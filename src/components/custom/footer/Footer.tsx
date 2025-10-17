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
  { href: '/driving-lessons/learners-permit', label: "Learner's Permit" },
  { href: '/traffic-school', label: 'Traffic School' },
  { href: '/about-us', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/driving-lessons/service-area', label: 'Service Area' },
  { href: '/our-instructors', label: 'Our Instructors' },
  { href: '/resources/dmv-practice-tests', label: 'DMV Practice Tests' },
  { href: '/resources/dmv-info', label: 'DMV Info' },
  { href: '/contact-us', label: 'Contact Us' },
];

export const Footer = ({ id, className }: FooterProps) => {
  const reduceMotion = useReducedMotion();
  const componentName = 'Footer';
  const rootId = id ?? componentName;
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Left: Brand Section */}
          <div className="xl:col-span-1 flex flex-col items-center xl:items-start space-y-4">
            <div className="flex justify-center xl:justify-start">
              <CircularText
                text="EASY*CA*DRIVERS*ED*"
                spinDuration={20}
                onHover="speedUp"
                className="dark:text-white"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center xl:text-left max-w-xs">
              Professional driving education in California. Safe, reliable, and
              convenient lessons.
            </p>
          </div>

          {/* Navigation Links - Split into 2 columns */}
          <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Services Column */}
            <nav aria-label="Services navigation">
              <h3 className="font-semibold text-base mb-4 text-center sm:text-left">
                Our Services
              </h3>
              <ul className="space-y-2 text-sm">
                {routes
                  .filter(
                    (route) =>
                      route.href.includes('/driving-lessons') ||
                      route.href.includes('/traffic-school')
                  )
                  .map((route) => (
                    <li key={route.href} className="text-center sm:text-left">
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
              <h3 className="font-semibold text-base mb-4 text-center sm:text-left">
                Company & Resources
              </h3>
              <ul className="space-y-2 text-sm">
                {routes
                  .filter(
                    (route) =>
                      route.href.includes('/about-us') ||
                      route.href.includes('/resources') ||
                      route.href.includes('/contact-us') ||
                      route.href.includes('/our-instructors') ||
                      route.href.includes('/reviews') ||
                      route.href === '/'
                  )
                  .map((route) => (
                    <li key={route.href} className="text-center sm:text-left">
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

          {/* Right: Contact & Address - Side by side on tablets */}
          <div className="xl:col-span-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-6">
            {/* Contact Info */}
            <div className="text-center md:text-left xl:text-left">
              <h3 className="font-semibold text-base mb-3">Get in Touch</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center md:justify-start xl:justify-start gap-2">
                  <span>📞</span>
                  <a
                    href="tel:+18882998911"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (888) 299-8911
                  </a>
                </div>
                <div className="flex items-start justify-center md:justify-start xl:justify-start gap-2">
                  <span className="mt-0.5">✉️</span>
                  <a
                    href="mailto:info@easycadriversed.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all text-xs md:text-sm leading-tight"
                  >
                    info@easycadriversed.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start xl:justify-start gap-2 pt-2 border-t border-border/30 mt-3">
                  <span>🏛️</span>
                  <span className="font-medium text-[--color-brand-orange] text-xs md:text-sm">
                    CA DMV License # E2127
                  </span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="text-center md:text-left xl:text-left">
              <h3 className="font-semibold text-base mb-3">Visit Our Office</h3>
              <address className="not-italic text-xs md:text-sm text-muted-foreground leading-relaxed">
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
        <p className="text-center text-md text-white">
          © {currentYear} Easy California Drivers Ed. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
