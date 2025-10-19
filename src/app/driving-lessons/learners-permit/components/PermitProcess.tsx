'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  FileCheck,
} from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  {
    step: '1',
    icon: BookOpen,
    title: 'Complete Driver Education',
    description:
      'Enroll in our DMV-approved online driver education course. You can start at any age but must be 15½ to take the permit test.',
    details: [
      'Interactive online lessons',
      'Study at your own pace',
      'DMV-approved curriculum',
      'Certificate mailed upon completion',
    ],
    cta: 'Start Course',
    ctaLink: '/contact-us',
  },
  {
    step: '2',
    icon: Calendar,
    title: 'Schedule DMV Appointment',
    description:
      'Book your written test appointment online at dmv.ca.gov. Wait until you receive your completion certificate.',
    details: [
      'Book online at dmv.ca.gov',
      'Walk-ins available at select centers',
      'Bring all required documents',
      'Arrive 15 minutes early',
    ],
    cta: 'DMV Website',
    ctaLink:
      'https://www.dmv.ca.gov/portal/appointments/select-appointment-type/',
    external: true,
  },
  {
    step: '3',
    icon: FileCheck,
    title: 'Pass the Written Test',
    description:
      'Take the 46-question DMV written test. You must answer at least 38 questions correctly to pass.',
    details: [
      '46 multiple choice questions',
      'Need 38+ correct to pass',
      '1 minute per question',
      'Free retake if needed (1 week wait)',
    ],
    cta: 'Practice Tests',
    ctaLink: '/resources/dmv-practice-tests',
  },
  {
    step: '4',
    icon: Car,
    title: 'Start Driving Practice',
    description:
      'With your permit, you can start practicing with a licensed adult or professional instructor.',
    details: [
      'Practice with licensed adult 25+',
      'Or book professional lessons',
      'Drive during daylight hours',
      'Always have permit and supervision',
    ],
    cta: 'Book Lessons',
    ctaLink: '/driving-lessons/packages-pricing',
  },
];

export const PermitProcess = () => {
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

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="PermitProcess"
      data-component="PermitProcess"
      className="py-16 md:py-24 bg-muted/50"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Step-by-Step Guide
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            How to Get Your{' '}
            <span className="text-primary">Learner&apos;s Permit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow these four simple steps to obtain your California
            learner&apos;s permit and start your driving journey.
          </p>
        </motion.div>

        <motion.div
          variants={reduce ? {} : containerVariants}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8"
        >
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === processSteps.length - 1;

            return (
              <motion.div
                key={step.step}
                variants={reduce ? {} : stepVariants}
                className="relative"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    {/* Step Number and Icon */}
                    <div className="bg-gradient-to-br from-primary to-primary/80 p-6 md:w-48 flex flex-col items-center justify-center text-white">
                      <div className="bg-white/20 rounded-full p-4 mb-4">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-4xl font-bold mb-1">{step.step}</div>
                      <div className="text-white/80 text-sm text-center">
                        Step {step.step} of {processSteps.length}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-card-foreground mb-2">
                          {step.title}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Details */}
                        <div className="grid gap-2 md:grid-cols-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                              <span className="text-sm text-muted-foreground">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button asChild className="w-full sm:w-auto">
                            {step.external ? (
                              <a
                                href={step.ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                              >
                                {step.cta}
                                <ArrowRight className="h-4 w-4" />
                              </a>
                            ) : (
                              <Link
                                href={step.ctaLink}
                                className="inline-flex items-center gap-2"
                              >
                                {step.cta}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>

                {/* Arrow between steps */}
                {!isLast && (
                  <div className="flex justify-center py-4">
                    <div className="bg-primary/10 rounded-full p-2">
                      <ArrowRight className="h-5 w-5 text-primary rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline Summary */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Expected Timeline
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Most students complete this process in 2-4 weeks, depending
                    on DMV appointment availability.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <span className="bg-primary/10 px-2 py-1 rounded-full text-primary">
                      Course: 1-2 weeks
                    </span>
                    <span className="bg-primary/10 px-2 py-1 rounded-full text-primary">
                      DMV Test: Same day
                    </span>
                    <span className="bg-primary/10 px-2 py-1 rounded-full text-primary">
                      Practice: Ongoing
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
