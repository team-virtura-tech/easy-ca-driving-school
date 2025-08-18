'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const PermitHero = () => {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="PermitHero"
      data-component="PermitHero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950 text-gray-900 dark:text-gray-100 py-16 md:py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,105,0,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(255,105,0,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-yellow-50/30 dark:bg-gradient-to-br dark:from-orange-950/30 dark:via-transparent dark:to-yellow-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(249,115,22,0.03)_50%,transparent_60%)] dark:bg-[linear-gradient(45deg,transparent_40%,rgba(249,115,22,0.08)_50%,transparent_60%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/20 dark:bg-primary/30"
            animate={
              reduce
                ? {}
                : {
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }
            }
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
        {/* Larger floating elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute h-3 w-3 rounded-full bg-gradient-to-br from-primary/10 to-orange-300/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-orange-400/20"
            animate={
              reduce
                ? {}
                : {
                    x: [0, -50, 50, 0],
                    y: [0, 50, -50, 0],
                    scale: [1, 1.2, 0.8, 1],
                  }
            }
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${15 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={reduce ? {} : containerVariants}
          initial={reduce ? false : 'hidden'}
          animate="visible"
          className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Content */}
          <motion.div
            variants={reduce ? {} : itemVariants}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                DMV Approved Course
              </Badge>

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Get Your California{' '}
                <span className="text-primary">Learner&apos;s Permit</span>
              </h1>

              <p className="text-lg text-muted-foreground md:text-xl">
                Complete your driver&apos;s education with our DMV-approved
                online course. Start your driving journey at 15½ years old.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>DMV Approved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Online & Flexible</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>Expert Instructors</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg">
                <Link href="/contact-us">Start Your Course</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/dmv-practice-tests">
                  Free Practice Tests
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                Trusted by thousands of California teens
              </p>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="text-primary">30+ Years Experience</span>
                <span className="text-primary">30,000+ Certified Drivers</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={reduce ? {} : itemVariants}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/landing/student-driver.jpg"
                alt="Teen learning to drive with instructor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              variants={
                reduce
                  ? {}
                  : {
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.8, duration: 0.5 },
                      },
                    }
              }
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-card-foreground">
                    98% Pass Rate
                  </div>
                  <div className="text-xs text-muted-foreground">
                    First Time Success
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
