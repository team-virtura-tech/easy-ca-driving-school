'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Star,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const keyBenefits = [
  {
    icon: CheckCircle,
    title: 'DMV Licensed Course',
    description: 'State-approved curriculum',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Study at your own pace',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 instructor assistance',
  },
  {
    icon: Star,
    title: '98% Success Rate',
    description: 'Proven track record',
  },
];

const stats = [
  {
    number: '30+',
    label: 'Years Experience',
  },
  {
    number: '30,000+',
    label: 'Students Certified',
  },
  {
    number: '98%',
    label: 'Pass Rate',
  },
  {
    number: '24/7',
    label: 'Support Available',
  },
];

export const PermitCta = () => {
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
      id="PermitCta"
      data-component="PermitCta"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-orange-50 text-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          variants={reduce ? {} : containerVariants}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-8"
        >
          <motion.div
            variants={reduce ? {} : itemVariants}
            className="space-y-4"
          >
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              Ready to Start Your Journey?
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Get Your California Learner&apos;s Permit{' '}
              <span className="text-primary">Today</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join thousands of successful students who started their driving
              journey with us. Complete our DMV-approved course and get expert
              support every step of the way.
            </p>
          </motion.div>

          {/* Key Benefits Grid */}
          <motion.div
            variants={reduce ? {} : itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/50 border border-slate-200"
                >
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={reduce ? {} : itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-lg px-8 shadow-lg font-semibold"
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2"
              >
                Start Your Course Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:text-slate-900 text-lg px-8 shadow-sm font-semibold transition-all duration-200"
            >
              <a
                href="tel:888-895-0644"
                className="inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call (888) 895-0644
              </a>
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={reduce ? {} : itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Trusted by California families for over 30 years
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-slate-600 text-sm font-medium">
              DMV Licensed
            </div>
            <div className="text-slate-600 text-sm font-medium">
              BBB Accredited
            </div>
            <div className="text-slate-600 text-sm font-medium">
              Licensed & Insured
            </div>
            <div className="text-slate-600 text-sm font-medium">
              Award Winning
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
