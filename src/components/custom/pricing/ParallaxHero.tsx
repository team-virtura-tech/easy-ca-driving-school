'use client';

import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform } from 'framer-motion';

import { AnimateNumber } from '@/components/custom/AnimateNumber';
import { Typewriter } from '@/components/custom/Typewriter';

import { cn } from '@/lib/utils';

export type ParallaxHeroProps = {
  className?: string;
};

export const ParallaxHero = ({ className }: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const stats = [
    { label: 'Lesson Hours', value: 4000, suffix: '+' },
    { label: 'Students Trained', value: 1200, suffix: '+' },
    { label: 'Pass Rate', value: 94, suffix: '%' },
  ];

  return (
    <section
      ref={ref}
      id="ParallaxHero"
      data-component="ParallaxHero"
      className={cn(
        'relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-950 dark:via-slate-900 dark:to-green-950',
        className
      )}
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-green-100/30 dark:from-blue-900/30 dark:to-green-900/30"
      />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <Typewriter
                text="Driving Lessons "
                speed={100}
                className="inline"
              />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                <Typewriter
                  text="That Fit"
                  delay={1400}
                  speed={100}
                  className="inline"
                />
              </span>{' '}
              <Typewriter
                text="Your Life"
                delay={2200}
                speed={100}
                className="inline"
              />
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              Choose from our flexible packages designed for teens and adults.
              Professional instruction, convenient scheduling, and proven
              results.
            </p>

            {/* Feature Chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2"
              >
                🚗 Pickup & Drop-off
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2"
              >
                🛡️ Dual-Control Cars
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2"
              >
                💰 Bundle & Save
              </Badge>
            </div>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="rounded-3xl border bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80">
              <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-white">
                Our Track Record
              </h3>
              <div className="mt-6 space-y-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </span>
                    <AnimateNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      direction="up"
                      className="text-2xl font-bold text-orange-600 dark:text-orange-400"
                      duration={2}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-16 w-full fill-white dark:fill-gray-900"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};
