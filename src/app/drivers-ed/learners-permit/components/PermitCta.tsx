'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Star,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: CheckCircle,
    text: 'DMV Approved Course',
  },
  {
    icon: Clock,
    text: 'Complete at Your Own Pace',
  },
  {
    icon: Users,
    text: 'Expert Instructor Support',
  },
  {
    icon: Star,
    text: '98% Pass Rate',
  },
];

const stats = [
  {
    number: '30+',
    label: 'Years Experience',
  },
  {
    number: '30,000+',
    label: 'Certified Drivers',
  },
  {
    number: '98%',
    label: 'Pass Rate',
  },
  {
    number: '24/7',
    label: 'Online Access',
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
              Ready to Start?
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Get Your California Learner&apos;s Permit{' '}
              <span className="text-primary">Today</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join thousands of successful students who started their driving
              journey with us. Begin your DMV-approved driver education course
              now.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={reduce ? {} : itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <IconComponent className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{benefit.text}</span>
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

        {/* Contact Cards */}
        <motion.div
          variants={reduce ? {} : containerVariants}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          <motion.div variants={reduce ? {} : itemVariants}>
            <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">
                      Call Us Today
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Speak with our friendly team about getting started with
                      your permit.
                    </p>
                    <a
                      href="tel:888-895-0644"
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      (888) 895-0644
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={reduce ? {} : itemVariants}>
            <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900">
                      Contact Form
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Send us a message and we&apos;ll get back to you within 24
                      hours.
                    </p>
                    <Link
                      href="/contact-us"
                      className="text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Send Message
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              DMV Approved
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
