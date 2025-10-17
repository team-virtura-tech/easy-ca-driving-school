'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Clock,
  GraduationCap,
  Heart,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type AssessmentType = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  duration: string;
  recommended?: boolean;
};

const assessmentTypes: AssessmentType[] = [
  {
    id: 'business',
    title: 'Business Employee Assessment',
    description:
      'Comprehensive evaluation for commercial drivers and employees who drive company vehicles.',
    icon: Building2,
    duration: '45-60 minutes',
    features: [
      'Liability risk evaluation',
      'Professional driving standards',
      'Insurance discount eligibility',
      'Detailed written report',
      'Compliance documentation',
    ],
  },
  {
    id: 'family',
    title: 'Family Safety Assessment',
    description:
      'Unbiased evaluation for family members, especially older drivers needing skill updates.',
    icon: Heart,
    duration: '30-45 minutes',
    features: [
      'Skills and knowledge evaluation',
      'Updated traffic laws review',
      'Vision and reaction assessment',
      'Personalized recommendations',
      'Family consultation included',
    ],
    recommended: true,
  },
  {
    id: 'dmv-prep',
    title: 'DMV Test Preparation',
    description:
      "Ensure you're fully prepared for your DMV road test with professional evaluation.",
    icon: ShieldCheck,
    duration: '60 minutes',
    features: [
      'DMV-specific driving techniques',
      'Test route familiarity',
      'Common failure point review',
      'Practice test simulation',
      '96% first-time pass rate',
    ],
  },
  {
    id: 'medical',
    title: 'Medical Condition Assessment',
    description:
      'Specialized evaluation after medical conditions that may affect driving ability.',
    icon: GraduationCap,
    duration: '45 minutes',
    features: [
      'Post-medical condition evaluation',
      'Adaptive driving techniques',
      'Equipment recommendation',
      'Gradual skill building',
      'Medical professional coordination',
    ],
  },
];

export type AssessmentCardProps = {
  assessment: AssessmentType;
  index: number;
  className?: string;
  id?: string;
};

const AssessmentCard = ({
  assessment,
  index,
  className,
  id,
}: AssessmentCardProps) => {
  const reduce = useReducedMotion();
  const Icon = assessment.icon;

  return (
    <motion.div
      id={id}
      data-component="AssessmentCard"
      initial={reduce ? {} : { opacity: 0, y: 30 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className={cn('group h-full', className)}
    >
      <Card
        className={cn(
          'relative h-full p-6 transition-all duration-300',
          'bg-white dark:bg-gray-900',
          'border border-gray-200 dark:border-gray-700',
          'hover:border-primary/40 dark:hover:border-primary/60',
          'hover:shadow-lg hover:shadow-primary/10',
          'hover:-translate-y-1',
          assessment.recommended &&
            'ring-2 ring-primary/20 border-primary/40 shadow-lg shadow-primary/10'
        )}
      >
        {/* Recommended Badge */}
        {assessment.recommended && (
          <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
            Most Popular
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={cn(
              'p-3 rounded-2xl bg-primary/10 text-primary',
              'group-hover:bg-primary group-hover:text-primary-foreground',
              'transition-all duration-300'
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {assessment.title}
            </h3>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Clock className="h-4 w-4 mr-1" />
              {assessment.duration}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {assessment.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {assessment.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <div className="mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="w-full group/button"
          variant={assessment.recommended ? 'default' : 'outline'}
        >
          <Link href={`/contact-us?service=assessment&type=${assessment.id}`}>
            Book an Appointment
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </Card>
    </motion.div>
  );
};

export const AssessmentTypes = () => {
  const reduce = useReducedMotion();
  const componentName = 'AssessmentTypes';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="py-16 md:py-20 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <GraduationCap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Assessment Services
            </span>
          </motion.div>

          <motion.h2
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Choose Your Assessment Type
          </motion.h2>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Professional driving assessments tailored to your specific needs.
            Each evaluation includes detailed feedback and personalized
            recommendations.
          </motion.p>
        </div>

        {/* Assessment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {assessmentTypes.map((assessment, index) => (
            <AssessmentCard
              key={assessment.id}
              assessment={assessment}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
