'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { BadgeCheck, CalendarClock, Package } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export type StepId = 'package' | 'schedule' | 'drive' | 'pass';

export type Step = {
  id: StepId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type HowItWorksProps = {
  id?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  onCardClick?: (stepId: StepId) => void;
};

// Default steps data
const defaultSteps: Step[] = [
  {
    id: 'package',
    label: 'Choose Your Package',
    icon: Package,
  },
  {
    id: 'schedule',
    label: 'Schedule Your Appointment',
    icon: CalendarClock,
  },
  {
    id: 'drive',
    label: 'Start Driving',
    icon: CalendarClock,
  },
  {
    id: 'pass',
    label: 'Pass Your Test',
    icon: BadgeCheck,
  },
];

export type StepCardProps = {
  step: Step;
  index: number;
  onClick?: (stepId: StepId) => void;
  reduce: boolean | null;
};

export const StepCard = ({ step, index, onClick, reduce }: StepCardProps) => {
  const { id, label, icon: Icon } = step;

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: reduce ? 0 : index * 0.08,
        ease: 'easeOut',
      }}
    >
      <button
        onClick={() => onClick?.(id)}
        aria-label={label}
        className={cn(
          'group w-full p-4 md:p-5',
          'bg-primary text-primary-foreground',
          'rounded-xl shadow-lg',
          'hover:shadow-xl hover:scale-105',
          'transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:ring-offset-2 focus:ring-offset-primary',
          'flex flex-col items-center text-center gap-3'
        )}
      >
        <Icon className="w-6 h-6 md:w-7 md:h-7 opacity-90 group-hover:opacity-100 transition-opacity" />
        <span className="text-sm md:text-base font-medium leading-tight">
          {label}
        </span>
      </button>
    </motion.li>
  );
};

export const HowItWorks = ({
  id,
  className,
  imageSrc = '/images/landing/student-driving.jpg',
  imageAlt = 'Professional driving instruction in action',
  onCardClick,
}: HowItWorksProps) => {
  const reduce = useReducedMotion();
  const componentName = 'HowItWorks';
  const rootId = id ?? componentName;

  // Parallax scroll refs and transforms
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Image expansion transforms for zoom effect (shared with cards)
  const imageContainerScale = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    reduce ? [1, 1] : [1, 1.15]
  );
  const imageContainerPadding = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    reduce ? [1, 1] : [1, 0.5]
  );
  const imageBorderRadius = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    reduce ? [16, 16] : [16, 8]
  );

  return (
    <motion.section
      ref={containerRef}
      id={rootId}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0 }}
      animate={reduce ? {} : { opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('relative w-full bg-background', className)}
    >
      {/* Shared container for image and cards with same transform */}
      <motion.div
        style={{
          scale: imageContainerScale,
          paddingLeft: imageContainerPadding,
          paddingRight: imageContainerPadding,
        }}
        className="px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="relative">
            {/* Hero Image */}
            <motion.div
              style={{
                borderRadius: imageBorderRadius,
              }}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1280px) 100vw,
                       100vw"
              />

              {/* Subtle gradient overlay for contrast (bottom only) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:from-black/30" />
            </motion.div>

            {/* Cards Container */}
            <div className="relative md:absolute md:inset-x-0 md:bottom-0 md:p-6 lg:p-8">
              {/* Desktop: Overlay cards */}
              <ul
                role="list"
                className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6"
              >
                {defaultSteps.map((step, index) => (
                  <StepCard
                    key={step.id}
                    step={step}
                    index={index}
                    onClick={onCardClick}
                    reduce={reduce}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile: Cards below image */}
      <div className="md:hidden px-4 sm:px-6 pt-6 pb-8">
        <div className="max-w-screen-2xl mx-auto">
          <ul role="list" className="space-y-4">
            {defaultSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                onClick={onCardClick}
                reduce={reduce}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
