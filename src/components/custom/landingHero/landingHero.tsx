'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export type LandingHeroProps = {
  id?: string;
  className?: string;
  firstLine?: string;
  secondLine?: string;
  highlightWords?: string[];
};

export const LandingHero = ({
  id,
  className,
  firstLine = 'Solutions digitales',
  secondLine = '',
  highlightWords = [],
}: LandingHeroProps) => {
  const reduce = useReducedMotion();
  const componentName = 'LandingHero';
  const rootId = id ?? componentName;

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
            className="bg-primary text-primary-foreground px-3 py-1 rounded-lg"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <motion.section
      id={rootId}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0 }}
      animate={reduce ? {} : { opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'relative w-full min-h-screen bg-background flex flex-col',
        className
      )}
    >
      {/* Hero Content - Text Section */}
      <div className="flex-1 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground mb-8"
          >
            {renderTextWithHighlights(firstLine, highlightWords)}
          </motion.h1>

          {secondLine && (
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 32 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-8"
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
            <span className="flex items-center gap-3">Fremont</span>
            <span className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse"></span>
            <span className="flex items-center gap-3">San Jose</span>
            <span className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse"></span>
            <span className="flex items-center gap-3">Santa Clara</span>
            <span className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse"></span>
            <span className="flex items-center gap-3">Sunnyvale</span>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="px-4 sm:px-6 lg:px-8 pb-8"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
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
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
