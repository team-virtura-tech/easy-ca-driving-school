'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Award,
  Car,
  Clock,
  MapPin,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react';

import { cn } from '@/lib/utils';

export type ModernPricingHeroProps = {
  className?: string;
  id?: string;
};

export const ModernPricingHero = ({
  className,
  id,
}: ModernPricingHeroProps) => {
  const reduce = useReducedMotion();
  const componentName = 'ModernPricingHero';

  const stats = [
    { icon: Users, label: '15,000+', desc: 'Students Trained' },
    { icon: Award, label: '98%', desc: 'Pass Rate' },
    { icon: Star, label: '4.9/5', desc: 'Average Rating' },
    { icon: Clock, label: '6-12 AM', desc: 'Support Available' },
  ];

  const features = [
    { icon: Car, text: 'Professional Instructors' },
    { icon: Shield, text: 'DMV Certified' },
    { icon: MapPin, text: 'Pickup & Drop-off' },
    { icon: Zap, text: 'Quick Scheduling' },
  ];

  return (
    <section
      id={id ?? componentName}
      data-component={componentName}
      className={cn(
        'relative overflow-hidden',
        'bg-gradient-to-br from-white via-orange-50/30 to-white',
        'dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950',
        'text-gray-900 dark:text-gray-100',
        className
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,105,0,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(255,105,0,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-yellow-50/30 dark:bg-gradient-to-br dark:from-orange-950/30 dark:via-transparent dark:to-yellow-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(249,115,22,0.03)_50%,transparent_60%)] dark:bg-[linear-gradient(45deg,transparent_40%,rgba(249,115,22,0.08)_50%,transparent_60%)]" />
      </div>

      {/* Animated Background Elements - Removed */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
              <span className="block">Master the Road with</span>
              <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Expert Driving Lessons
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
              Choose from our comprehensive packages designed for California
              teens and adults. Professional instruction, flexible scheduling,
              and proven results.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isStarIcon = stat.icon === Star;
              return (
                <motion.div
                  key={index}
                  initial={reduce ? {} : { opacity: 0, scale: 0.8 }}
                  animate={reduce ? {} : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-2xl border border-orange-200/50 bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 dark:border-orange-800/30 dark:bg-gray-800/60 dark:hover:bg-gray-800/80 dark:hover:border-primary/40 dark:shadow-2xl">
                    <Icon
                      className={cn(
                        'mx-auto mb-3 h-8 w-8 transition-colors',
                        isStarIcon
                          ? 'text-amber-400 group-hover:text-amber-500 dark:text-amber-400 dark:group-hover:text-amber-300'
                          : 'text-gray-600 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary'
                      )}
                      fill={isStarIcon ? 'currentColor' : 'none'}
                    />
                    <div className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
                      {stat.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={reduce ? {} : { opacity: 0, x: -20 }}
                  animate={reduce ? {} : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 rounded-full border border-orange-200/50 bg-white/70 backdrop-blur-sm px-4 py-2 shadow-sm hover:bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 dark:border-orange-800/30 dark:bg-gray-800/50 dark:hover:bg-gray-800/70 dark:hover:border-primary/40"
                >
                  <Icon className="h-5 w-5 text-gray-600 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={reduce ? {} : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={reduce ? {} : { y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto h-6 w-1 rounded-full bg-gradient-to-b from-primary to-orange-300"
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Scroll to explore packages
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
