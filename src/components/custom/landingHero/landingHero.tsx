'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Car, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export type StatItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
};

const StatItem = ({ icon: Icon, value }: StatItemProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, scale: 0.8 }}
      animate={reduce ? {} : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center p-3 md:p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-primary/20 min-w-0"
    >
      <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1 md:mb-2" />
      <div className="text-xs md:text-sm font-bold text-foreground text-center leading-tight truncate w-full">
        {value}
      </div>
      {/* <div className="text-sm text-muted-foreground text-center">{label}</div> */}
    </motion.div>
  );
};

export const LandingHero = () => {
  const reduce = useReducedMotion();
  const componentName = 'LandingHero';

  const stats: StatItemProps[] = [
    {
      icon: Users,
      value: 'DMV Approved',
      label: '1',
    },
    {
      icon: Car,
      value: 'Dual-Control Cars',
      label: '2',
    },
    {
      icon: Clock,
      value: 'Flexible Scheduling',
      label: '3',
    },
  ];

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative min-h-[80vh] bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden w-full max-w-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Hero Image - Positioned for desktop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[70%] hidden xl:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/landing/student-driver.jpg"
            alt="Professional driving assessment in progress"
            fill
            className="object-cover rounded-l-3xl"
            sizes="(max-width: 1280px) 0vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 rounded-l-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10 w-full max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Content Column */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -20 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 w-full max-w-full"
          >
            {/* Badge */}
            {/* <motion.div
              initial={reduce ? {} : { opacity: 0, y: 10 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Professional Assessment Services
              </span>
            </motion.div> */}
            {/* Headline */}
            <div className="space-y-3 md:space-y-4">
              <motion.h1
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words"
              >
                <span className="text-foreground">PROVIDING </span>
                <br />
                <span className="text-primary">SAFE </span>
                <span className="text-foreground">& </span>
                <span className="text-primary">PROFESSIONAL </span>
                <span className="text-foreground">DRIVING CLASSES</span>
              </motion.h1>

              <motion.p
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl break-words"
              >
                Get professional evaluation of your driving skills with our
                certified instructors. Perfect for business liability, family
                safety, or DMV test preparation.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-full"
            >
              <Button
                asChild
                size="lg"
                className="text-sm md:text-base px-6 md:px-8 py-4 md:py-6"
              >
                <Link href="/contact-us">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm md:text-base px-6 md:px-8 py-4 md:py-6"
              >
                <Link href="/about-us">Learn More</Link>
              </Button>
            </motion.div>
            {/* Stats Grid */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8 w-full"
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Image */}
          <div className="xl:hidden relative aspect-[4/3] w-full mt-8 md:mt-0 max-w-full">
            <Image
              src="/images/landing/student-driver.jpg"
              alt="Professional driving assessment in progress"
              fill
              className="object-cover rounded-2xl md:rounded-3xl w-full h-full"
              sizes="(max-width: 1280px) 100vw, 0vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-2xl md:rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
