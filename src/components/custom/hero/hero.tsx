'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export type HeroProps = {
  id?: string;
  className?: string;
  firstLine?: string;
  secondLine?: string;
};

export const Hero = ({
  id,
  className,
  firstLine = 'PROVIDING SAFE',
  secondLine = '& PROFESSIONAL DRIVING CLASSES',
}: HeroProps) => {
  const reduce = useReducedMotion();
  const componentName = 'Hero';
  const rootId = id ?? componentName;

  return (
    <motion.section
      id={rootId}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'relative w-full h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/landing/student-driver.jpg"
          alt="Student learning to drive with professional instructor"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1280px) 100vw,
                 100vw"
        />
      </div>

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="space-y-2 sm:space-y-4"
        >
          {/* First Line */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white drop-shadow-lg">
            {firstLine}
          </div>

          {/* Second Line */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#ff6900] drop-shadow-lg">
            {secondLine}
          </div>
        </motion.h1>

        {/* Optional Subtitle */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Learn to drive with confidence from experienced, certified
            instructors
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
