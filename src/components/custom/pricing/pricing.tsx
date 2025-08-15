'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Clock, Users } from 'lucide-react';

export type PricingPlan = {
  id: string;
  name: string;
  hours: number;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
  features: string[];
  description: string;
  buttonText?: string;
};

// Default pricing plans
const defaultPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    hours: 2,
    price: 120,
    originalPrice: 150,
    description: 'Perfect for getting started with basic driving skills',
    features: [
      '2 hours of instruction',
      'Basic driving fundamentals',
      'Vehicle safety check',
      'Parking practice',
      'Progress assessment',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'popular',
    name: 'Most Popular',
    hours: 4,
    price: 220,
    originalPrice: 280,
    isPopular: true,
    description: 'Our most comprehensive package for confident driving',
    features: [
      '4 hours of instruction',
      'Complete driving curriculum',
      'Highway driving practice',
      'Parallel parking mastery',
      'Mock road test',
      'Certificate of completion',
    ],
    buttonText: 'Choose Popular',
  },
  {
    id: 'intensive',
    name: 'Intensive',
    hours: 6,
    price: 320,
    originalPrice: 420,
    description: 'Intensive training for rapid skill development',
    features: [
      '6 hours of instruction',
      'Advanced driving techniques',
      'Night driving practice',
      'Adverse weather training',
      'Defensive driving skills',
      'Multiple mock tests',
      '30-day follow-up support',
    ],
    buttonText: 'Go Intensive',
  },
];

export type PricingProps = {
  plans?: PricingPlan[];
  onPlanSelect?: (planId: string) => void;
  className?: string;
};

export const Pricing = ({
  plans = defaultPlans,
  onPlanSelect,
  className,
}: PricingProps) => {
  const reduce = useReducedMotion();
  const componentName = 'Pricing';

  const handlePlanSelect = (planId: string) => {
    console.log('Plan selected:', planId);
    onPlanSelect?.(planId);
  };

  return (
    <motion.section
      id={componentName}
      data-component={componentName}
      className={cn(
        'relative bg-white dark:bg-gray-900 py-16 md:py-20',
        className
      )}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            Choose Your Driving Package
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Professional driving lessons tailored to your learning pace
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={cn(
                'relative rounded-2xl border p-6 md:p-8 shadow-sm transition-all hover:shadow-lg',
                plan.isPopular
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 scale-105'
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>

                {/* Hours Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <Clock className="h-4 w-4" />
                  {plan.hours} hours
                </div>

                {/* Pricing */}
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                      ${plan.originalPrice}
                    </span>
                  )}
                </div>
                {plan.originalPrice && (
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                    Save ${plan.originalPrice - plan.price}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => handlePlanSelect(plan.id)}
                className={cn(
                  'w-full',
                  plan.isPopular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white'
                )}
              >
                {plan.buttonText || 'Select Plan'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4" />
            All packages include certified instructor and modern vehicle
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Need a custom package? Contact us for personalized training options.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
