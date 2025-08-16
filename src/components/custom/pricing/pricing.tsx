'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

import { cn } from '@/lib/utils';

export type PricingProps = {
  onPlanSelect?: (planId: string) => void;
  className?: string;
};

const pricingPlans = [
  {
    id: 'teen-basic',
    name: 'Teen Package',
    description: 'Perfect for new teen drivers',
    price: 525,
    originalPrice: 555,
    badge: 'CA Required',
    features: [
      '6 hours of driving lessons',
      'Free online drivers ed',
      'Pickup & drop-off included',
      'DMV test preparation',
    ],
    popular: false,
  },
  {
    id: 'teen-premium',
    name: 'Teen Premium',
    description: 'Extra practice for confidence',
    price: 695,
    originalPrice: 740,
    badge: 'Most Popular',
    features: [
      '8 hours of driving lessons',
      'Free online drivers ed',
      'Highway & city driving',
      'Pickup & drop-off included',
      'Parallel parking mastery',
    ],
    popular: true,
  },
  {
    id: 'adult-package',
    name: 'Adult Package',
    description: 'Flexible lessons for adults',
    price: 695,
    originalPrice: 740,
    badge: 'Flexible',
    features: [
      '8 hours of driving lessons',
      'Flexible scheduling',
      'Pickup & drop-off included',
      'Highway & city practice',
    ],
    popular: false,
  },
];

export const Pricing = ({ onPlanSelect, className }: PricingProps) => {
  const handlePlanSelect = (planId: string) => {
    onPlanSelect?.(planId);
  };

  return (
    <section
      id="Pricing"
      data-component="Pricing"
      className={cn('py-16 md:py-24', className)}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Choose Your Perfect Package
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Affordable driving lessons with professional instruction and
            flexible scheduling
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  'relative h-full transition-all duration-300 hover:shadow-xl',
                  plan.popular && 'ring-2 ring-blue-500'
                )}
              >
                {/* Badge */}
                <div className="absolute right-4 top-4 z-10">
                  <Badge
                    variant={plan.popular ? 'default' : 'secondary'}
                    className="whitespace-nowrap"
                  >
                    {plan.badge}
                  </Badge>
                </div>

                <CardHeader className="text-center">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${plan.originalPrice}
                        </span>
                      )}
                    </div>
                    {plan.originalPrice && (
                      <p className="text-sm text-green-600">
                        Save ${plan.originalPrice - plan.price}
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-6">
                  <div className="w-full space-y-3">
                    <Button
                      onClick={() => handlePlanSelect(plan.id)}
                      className="w-full"
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full"
                      size="sm"
                    >
                      <Link href="/driving-lessons/packages-pricing">
                        View All Packages
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <Link href="/driving-lessons/packages-pricing">
              View All Packages & Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            All packages include pickup & drop-off service • DMV approved
            instructors
          </p>
        </motion.div>
      </div>
    </section>
  );
};
