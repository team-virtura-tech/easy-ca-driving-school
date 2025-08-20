'use client';

import { StaggerAnimation } from '@/components/custom/staggerAnimation';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CheckCircle,
  CreditCard,
  FileText,
  Shield,
  TrendingDown,
  Users,
} from 'lucide-react';

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Default benefits data
const defaultBenefits: Benefit[] = [
  {
    id: 'dismiss-ticket',
    title: 'Dismiss Your Ticket',
    description:
      'Complete the course to remove the citation from your driving record and avoid paying fines',
    icon: CheckCircle,
  },
  {
    id: 'prevent-insurance',
    title: 'Prevent Insurance Increases',
    description:
      'Keep your insurance rates low by preventing points from being added to your driving record',
    icon: TrendingDown,
  },
  {
    id: 'avoid-points',
    title: 'Avoid License Points',
    description:
      'Prevent points from being added to your license, helping you maintain a clean driving record',
    icon: Shield,
  },
  {
    id: 'court-approved',
    title: 'Court & DMV Licensed',
    description:
      'Our courses are fully approved by California courts and the DMV for traffic violation dismissal',
    icon: FileText,
  },
  {
    id: 'money-back',
    title: 'Money-Back Guarantee',
    description:
      "If you're not completely satisfied with our course, we'll refund your money - no questions asked",
    icon: CreditCard,
  },
  {
    id: 'experienced',
    title: '400K+ Satisfied Students',
    description:
      'Join hundreds of thousands of drivers who have successfully completed traffic school with us',
    icon: Users,
  },
];

export type BenefitCardProps = {
  benefit: Benefit;
  index: number;
  reduce: boolean | null;
  className?: string;
};

export const BenefitCard = ({
  benefit,
  index,
  reduce,
  className,
}: BenefitCardProps) => {
  const IconComponent = benefit.icon;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md',
        'hover:border-primary/20 hover:bg-card/80',
        className
      )}
      data-component="BenefitCard"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-semibold text-card-foreground">
            {benefit.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {benefit.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export type TrafficSchoolBenefitsProps = {
  id?: string;
  className?: string;
  benefits?: Benefit[];
};

export const TrafficSchoolBenefits = ({
  id,
  className,
  benefits = defaultBenefits,
}: TrafficSchoolBenefitsProps) => {
  const reduce = useReducedMotion();
  const componentName = 'TrafficSchoolBenefits';

  return (
    <section
      id={id ?? componentName}
      data-component={componentName}
      className={cn('py-20 md:py-32', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <StaggerAnimation className="mb-16">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Why Choose Our{' '}
                <span className="bg-gradient-to-r from-primary to-[var(--brand-orange)] bg-clip-text text-transparent">
                  Traffic School?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Get back on the road with confidence. Our DMV-approved course
                offers the easiest way to dismiss your ticket and protect your
                driving record.
              </p>
            </motion.div>
          </StaggerAnimation>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                index={index}
                reduce={reduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
