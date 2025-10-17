'use client';

import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Gift, MessageCircle, Phone, Shield } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export type ModernCtaSectionProps = {
  className?: string;
  id?: string;
};

export const ModernCtaSection = ({ className, id }: ModernCtaSectionProps) => {
  const reduce = useReducedMotion();
  const componentName = 'ModernCtaSection';

  // const benefits = [
  //   {
  //     icon: Shield,
  //     title: 'DMV Certified',
  //     desc: 'All instructors are state certified',
  //   },
  //   {
  //     icon: Award,
  //     title: '98% Pass Rate',
  //     desc: 'Industry-leading success rate',
  //   },
  //   {
  //     icon: Users,
  //     title: '15,000+ Students',
  //     desc: 'Trusted by thousands of families',
  //   },
  //   {
  //     icon: Star,
  //     title: '4.9/5 Rating',
  //     desc: 'Consistently excellent reviews',
  //   },
  // ];

  return (
    <section
      id={id ?? componentName}
      data-component={componentName}
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30',
        'dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/30',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Main CTA */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Driving Journey?
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Join thousands of successful students who chose our expert
            instruction. Flexible scheduling, professional instructors, and
            proven results.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-12 min-w-48 bg-gradient-to-r from-primary to-orange-700 px-8 text-base font-semibold shadow-lg transition-all duration-300 hover:from-orange-700 hover:to-orange-800 hover:shadow-xl hover:shadow-orange-500/25"
            >
              <Link href="/contact-us">
                <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get Custom Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 min-w-48 border-2 px-8 text-base font-semibold transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <a href="tel:+15551234567">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-4567
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        {/* <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={reduce ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 transition-colors group-hover:bg-primary dark:bg-orange-900">
                  <Icon className="h-6 w-6 text-orange-600 transition-colors group-hover:text-white dark:text-orange-400 dark:group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div> */}

        {/* Secondary CTAs */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Special Offers & Additional Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore more ways to save and enhance your driving education
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 min-w-40 border-2 border-green-200 bg-green-50 text-green-700 transition-all duration-300 hover:bg-green-100 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300 dark:hover:bg-green-900/30"
            >
              <Link href="/contact-us">
                <Gift className="mr-2 h-4 w-4" />
                Gift Cards
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 min-w-40 border-2 border-purple-200 bg-purple-50 text-purple-700 transition-all duration-300 hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-300 dark:hover:bg-purple-900/30"
            >
              <Link href="/driving-lessons/driving-assessments">
                <Calendar className="mr-2 h-4 w-4" />
                Free Assessment
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={reduce ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 rounded-2xl border bg-gradient-to-r from-amber-50 to-orange-50 p-6 dark:from-amber-950/20 dark:to-orange-950/20 dark:border-amber-800"
        >
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              <Shield className="h-4 w-4" />
              California DMV Certified
            </div>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              <strong>Important for California Teens:</strong> All our packages
              meet the state requirement of 6+ hours of professional driving
              instruction for ages 15½-17½. We&apos;re fully licensed and
              insured for your safety and peace of mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
