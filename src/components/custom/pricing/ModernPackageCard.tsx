'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

import { type Pkg } from '@/lib/packages';
import { cn } from '@/lib/utils';

export type ModernPackageCardProps = {
  pkg: Pkg;
  zip: string;
  className?: string;
  index?: number;
  id?: string;
};

export const ModernPackageCard = ({
  pkg,
  zip,
  className,
  index = 0,
  id,
}: ModernPackageCardProps) => {
  const reduce = useReducedMotion();
  const componentName = 'ModernPackageCard';
  const savings = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;
  const isPopular = pkg.badge === 'Most Popular';

  return (
    <motion.div
      id={id}
      data-component={componentName}
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      className={cn('group h-full', className)}
    >
      <Card
        className={cn(
          'relative h-full transition-all duration-300',
          'bg-white dark:bg-gray-900',
          'border border-gray-200 dark:border-gray-700',
          'hover:border-primary/40 dark:hover:border-primary/60',
          'hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20',
          'group-hover:scale-[1.02]',
          'rounded-xl',
          isPopular && [
            'border-primary/30 dark:border-primary/50',
            'shadow-lg shadow-primary/10 dark:shadow-primary/20',
            'ring-1 ring-primary/20 dark:ring-primary/30',
          ]
        )}
      >
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full border border-primary shadow-sm">
              Most Popular
            </div>
          </div>
        )}

        <div
          className={cn(
            'px-6 py-6 h-full flex flex-col'
            // isPopular ? 'pt-6' : 'pt-6'
          )}
        >
          {/* Package Title */}
          <div className="mb-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {pkg.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {pkg.bestFor}
            </p>
          </div>

          {/* Price - Centered and Prominent */}
          <div className="mb-4 text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ${pkg.price}
              <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                /package
              </span>
            </div>
            {/* Always reserve space for savings to maintain consistent height */}
            <div className="h-5 flex items-center justify-center">
              {savings > 0 && (
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Save ${savings}
                </div>
              )}
            </div>
          </div>

          {/* Key Features - Clean List */}
          <div className="mb-6 flex-grow">
            {/* Use flex-grow to push button to bottom */}
            <ul className="space-y-2">
              {pkg.category !== 'Test Day' && (
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {pkg.hours} hours of professional instruction
                  </span>
                </li>
              )}
              {(pkg.category === 'Teen' || pkg.category === 'Universal') && (
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Free online driver&apos;s education (teens only)
                  </span>
                </li>
              )}
              {pkg.pickupDropoff && (
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Pickup & drop-off included
                  </span>
                </li>
              )}
              {pkg.carForTest && (
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    DMV road test car provided
                  </span>
                </li>
              )}
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {pkg.category === 'Teen'
                    ? 'Meets California teen requirements'
                    : pkg.category === 'Test Day'
                      ? 'Professional test day support'
                      : pkg.category === 'Universal'
                        ? 'Perfect for teens & adults'
                        : 'Flexible scheduling'}
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              asChild
              size="default"
              className="px-8 font-medium text-sm transition-all duration-200"
            >
              <Link href={`/contact-us?pkg=${pkg.id}&zip=${zip}`}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
