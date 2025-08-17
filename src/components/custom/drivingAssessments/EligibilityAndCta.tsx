'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const eligibilityRequirements = [
  "Valid driver's license or learner's permit",
  'DMV "Special Instruction Permits" accepted',
  'Current vehicle registration and insurance',
  'Medical clearance (if applicable)',
  'Comfortable driving environment',
];

const trustSignals = [
  {
    icon: Users,
    title: '30,000+ Certified Drivers',
    description: 'Successfully trained and certified',
  },
  {
    icon: Shield,
    title: '96% First-Time Pass Rate',
    description: 'Industry-leading success rate',
  },
  {
    icon: CheckCircle,
    title: '30+ Years Experience',
    description: 'Trusted by California families',
  },
];

export const EligibilityAndCta = () => {
  const reduce = useReducedMotion();
  const componentName = 'EligibilityAndCta';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="py-16 md:py-20 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Eligibility Requirements */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -30 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Eligibility Requirements
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our assessments are available to drivers of all experience
                levels. Here&apos;s what you need to participate:
              </p>
            </div>

            <div className="space-y-4">
              {eligibilityRequirements.map((requirement, index) => (
                <motion.div
                  key={requirement}
                  initial={reduce ? {} : { opacity: 0, x: -20 }}
                  animate={reduce ? {} : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{requirement}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {trustSignals.map((signal, index) => {
                const Icon = signal.icon;
                return (
                  <motion.div
                    key={signal.title}
                    initial={reduce ? {} : { opacity: 0, y: 20 }}
                    animate={reduce ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-foreground text-sm">
                      {signal.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {signal.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 30 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 p-8 md:p-10">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/landing/student-driving.jpg"
                  alt="Professional driving instruction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="relative z-10 space-y-6 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Book Your Assessment Today
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join thousands of satisfied drivers who have improved their
                    skills with our professional assessments.
                  </p>
                </div>

                {/* Pricing Info */}
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary">
                      Starting at $89
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Per assessment session
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Basic Assessment
                      </span>
                      <span className="font-semibold">$89</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Comprehensive Report
                      </span>
                      <span className="font-semibold">$129</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Business Package
                      </span>
                      <span className="font-semibold">$179</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full text-base py-6">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Schedule Online Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-base py-6"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (888) 945-0644
                  </Button>
                </div>

                {/* Guarantee */}
                <div className="pt-4 border-t border-primary/20">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
