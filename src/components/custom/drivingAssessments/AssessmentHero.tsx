'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Shield, Star, Users } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export type StatItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
};

const StatItem = ({ icon: Icon, value, label }: StatItemProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, scale: 0.8 }}
      animate={reduce ? {} : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-primary/20"
    >
      <Icon className="h-6 w-6 text-primary mb-2" />
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </motion.div>
  );
};

export const AssessmentHero = () => {
  const reduce = useReducedMotion();
  const componentName = 'AssessmentHero';

  const stats: StatItemProps[] = [
    {
      icon: Users,
      value: '30k+',
      label: 'Certified Drivers',
    },
    {
      icon: Star,
      value: '96%',
      label: 'Pass Rate',
    },
    {
      icon: Clock,
      value: '30+',
      label: 'Years Experience',
    },
    {
      icon: Shield,
      value: '#1',
      label: 'Voted Best',
    },
  ];

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative min-h-[80vh] bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Hero Image - Positioned for desktop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[70%] hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/drivingAssessments/driving-assessments.jpg"
            alt="Professional driving assessment in progress"
            fill
            className="object-cover rounded-l-3xl"
            sizes="(max-width: 1024px) 0vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 rounded-l-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -20 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 10 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Professional Assessment Services
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-foreground">Expert Driving</span>
                <br />
                <span className="text-primary">Assessments</span>
              </motion.h1>

              <motion.p
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
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
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-base px-8 py-6">
                Schedule Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Image */}
          <div className="lg:hidden relative aspect-[4/3] w-full">
            <Image
              src="/images/landing/student-driver.jpg"
              alt="Professional driving assessment in progress"
              fill
              className="object-cover rounded-3xl"
              sizes="(max-width: 1024px) 100vw, 0vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
