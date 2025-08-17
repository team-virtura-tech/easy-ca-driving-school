'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  CalendarCheck,
  Car,
  ClipboardCheck,
  MessageSquare,
} from 'lucide-react';

import { cn } from '@/lib/utils';

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const processSteps: ProcessStep[] = [
  {
    id: 'schedule',
    title: 'Schedule Your Assessment',
    description:
      'Choose your preferred date, time, and assessment type through our easy online booking system.',
    icon: CalendarCheck,
  },
  {
    id: 'meet',
    title: 'Meet Your Instructor',
    description:
      'Meet with a certified instructor who will explain the assessment process and answer any questions.',
    icon: MessageSquare,
  },
  {
    id: 'evaluate',
    title: 'Driving Evaluation',
    description:
      'Complete a comprehensive driving assessment covering various skills, situations, and safety practices.',
    icon: Car,
  },
  {
    id: 'receive',
    title: 'Receive Your Report',
    description:
      'Get a detailed written report with findings, recommendations, and next steps for improvement.',
    icon: ClipboardCheck,
  },
];

export type ProcessStepCardProps = {
  step: ProcessStep;
  index: number;
  isLast: boolean;
  className?: string;
  id?: string;
};

const ProcessStepCard = ({
  step,
  index,
  isLast,
  className,
  id,
}: ProcessStepCardProps) => {
  const reduce = useReducedMotion();
  const Icon = step.icon;

  return (
    <motion.div
      id={id}
      data-component="ProcessStepCard"
      initial={reduce ? {} : { opacity: 0, y: 30 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      className={cn('relative flex flex-col items-center', className)}
    >
      {/* Connector Line - Desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          <motion.div
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2 + 0.5,
            }}
            className="h-full bg-primary origin-left"
          />
        </div>
      )}

      {/* Step Number & Icon */}
      <div className="relative z-10 mb-6">
        <motion.div
          initial={reduce ? {} : { scale: 0 }}
          animate={reduce ? {} : { scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.3,
            type: 'spring',
            stiffness: 200,
          }}
          className={cn(
            'w-16 h-16 rounded-full bg-primary text-primary-foreground',
            'flex items-center justify-center shadow-lg',
            'border-4 border-background'
          )}
        >
          <Icon className="h-7 w-7" />
        </motion.div>

        {/* Step Number Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-bold">
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="text-center max-w-sm">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Connector Line - Mobile */}
      {!isLast && (
        <div className="lg:hidden mt-8 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
      )}
    </motion.div>
  );
};

export const AssessmentProcess = () => {
  const reduce = useReducedMotion();
  const componentName = 'AssessmentProcess';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/5"
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
            <ClipboardCheck className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Simple Assessment Process
          </motion.h2>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Our streamlined process ensures a comprehensive evaluation while
            making the experience comfortable and stress-free.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
