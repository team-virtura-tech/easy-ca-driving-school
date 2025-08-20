'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export type PricingPreviewPlan = {
  id: string;
  name: string;
  hours: number;
  price: number;
  isPopular?: boolean;
};

// Simplified pricing plans for preview
const previewPlans: PricingPreviewPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    hours: 2,
    price: 120,
  },
  {
    id: 'popular',
    name: 'Most Popular',
    hours: 4,
    price: 220,
    isPopular: true,
  },
  {
    id: 'intensive',
    name: 'Intensive',
    hours: 6,
    price: 320,
  },
];

export type PricingPreviewProps = {
  plans?: PricingPreviewPlan[];
  className?: string;
};

export const PricingPreview = ({
  plans = previewPlans,
  className,
}: PricingPreviewProps) => {
  const reduce = useReducedMotion();
  const componentName = 'PricingPreview';

  return (
    <motion.section
      id={componentName}
      data-component={componentName}
      className={cn(
        'relative bg-white dark:bg-gray-900 py-12 md:py-16',
        className
      )}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            Choose Your Package
          </motion.h2>
          <motion.p
            className="mt-2 text-base text-gray-600 dark:text-gray-300"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Professional driving lessons at competitive prices
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={cn(
                'relative rounded-lg border p-4 md:p-6 shadow-sm transition-all hover:shadow-md',
                plan.isPopular
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 scale-105 md:scale-110'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/50 dark:hover:border-primary/70'
              )}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: 'easeOut',
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {plan.name}
                </h3>

                {/* Hours */}
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <Clock className="h-4 w-4" />
                  {plan.hours} hours
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                    ${plan.price}
                  </span>
                </div>

                {/* CTA Button */}
                {/* <Button
                  asChild
                  className={cn(
                    'w-full group',
                    plan.isPopular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white'
                  )}
                >
                  <Link href="/driving-lessons/packages-pricing">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Pricing CTA */}
        <motion.div
          className="mt-8 text-center "
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          <Button
            variant="outline"
            asChild
            className="group bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/driving-lessons/packages-pricing">
              View All Packages & Pricing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
