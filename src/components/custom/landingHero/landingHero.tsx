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
  isMobile?: boolean;
};

export const StepCard = ({
  step,
  index,
  onClick,
  reduce,
  isMobile,
}: StepCardProps) => {
  const { id, label, icon: Icon } = step;

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: reduce ? 0 : isMobile ? index * 0.1 + 0.2 : index * 0.08,
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

export type LandingHeroProps = {
  id?: string;
  className?: string;
  firstLine?: string;
  secondLine?: string;
  highlightWords?: string[];
  onCardClick?: (stepId: StepId) => void;
};

export const LandingHero = ({
  id,
  className,
  firstLine = 'Solutions digitales',
  secondLine = '',
  highlightWords = [],
  onCardClick,
}: LandingHeroProps) => {
  const reduce = useReducedMotion();
  const componentName = 'LandingHero';
  const rootId = id ?? componentName;

  // Parallax scroll refs and transforms
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms - only apply if motion is not reduced
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -25]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 25]
  );

  // Image expansion transforms for fullscreen effect
  const imageContainerScale = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    reduce ? [1, 1] : [1, 1.2]
  );
  const imageContainerPadding = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    reduce ? [1, 1] : [1, 0]
  );
  const imageBorderRadius = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    reduce ? [16, 16] : [16, 0]
  );

  // Function to render text with highlighted words
  const renderTextWithHighlights = (text: string, highlights: string[]) => {
    if (!text || highlights.length === 0) {
      return text;
    }

    // Create a regex pattern that matches any of the highlight words (case insensitive)
    const pattern = new RegExp(`\\b(${highlights.join('|')})\\b`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, index) => {
      const isHighlighted = highlights.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );

      if (isHighlighted) {
        return (
          <span
            key={index}
            className="bg-primary text-primary-foreground px-2 py-1 rounded-md mx-1 inline-block"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <>
      <motion.section
        ref={containerRef}
        id={rootId}
        data-component={componentName}
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'relative w-full bg-background flex flex-col overflow-hidden',
          className
        )}
      >
        {/* Hero Content - Text Section */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        >
          <div className="max-w-screen-xl mx-auto">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 32 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground mb-2 md:mb-3 leading-tight"
            >
              {renderTextWithHighlights(firstLine, highlightWords)}
            </motion.h1>

            {secondLine && (
              <motion.h2
                initial={reduce ? false : { opacity: 0, y: 32 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-2 md:mb-3 leading-tight"
              >
                {renderTextWithHighlights(secondLine, highlightWords)}
              </motion.h2>
            )}

            {/* Service Tags */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg text-muted-foreground"
            >
              <span className="flex items-center gap-3">DMV Approved</span>
              <span className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse"></span>
              <span className="flex items-center gap-3">Dual-Control Cars</span>
              <span className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse"></span>
              <span className="flex items-center gap-3">
                Flexible Scheduling
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          style={{ y: imageY }}
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="pb-6 relative md:pb-6"
        >
          <motion.div
            style={{
              paddingLeft: imageContainerPadding,
              paddingRight: imageContainerPadding,
            }}
            className="px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-screen-2xl mx-auto relative">
              <motion.div
                style={{
                  scale: imageContainerScale,
                  borderRadius: imageBorderRadius,
                }}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/landing/student-driver.jpg"
                  alt="Student learning to drive with professional instructor"
                  fill
                  priority
                  className="object-cover object-center grayscale"
                  sizes="(max-width: 768px) 100vw,
                       (max-width: 1280px) 100vw,
                       100vw"
                />
                <div className="absolute inset-0 bg-foreground/10 dark:bg-background/20" />

                {/* Subtle gradient overlay for contrast (bottom only) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:from-black/30" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* How it Works Cards Overlay - Desktop only */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pointer-events-none z-10">
          <div className="max-w-screen-2xl mx-auto pointer-events-auto">
            <div className="px-6 lg:px-8 pb-8">
              <ul role="list" className="grid grid-cols-4 gap-4 lg:gap-6">
                {defaultSteps.map((step, index) => (
                  <StepCard
                    key={step.id}
                    step={step}
                    index={index}
                    onClick={onCardClick}
                    reduce={reduce}
                    isMobile={false}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mobile Cards - Independent section to avoid scroll transform interference */}
      <motion.section
        className="md:hidden px-4 sm:px-6 pt-4 pb-8 bg-background"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <ul role="list" className="space-y-4">
            {defaultSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                index={index}
                onClick={onCardClick}
                reduce={reduce}
                isMobile={true}
              />
            ))}
          </ul>
        </div>
      </motion.section>
    </>
  );
};
