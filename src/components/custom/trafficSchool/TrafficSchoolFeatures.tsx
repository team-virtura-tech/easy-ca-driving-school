'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  Headphones,
  Smartphone,
} from 'lucide-react';

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Default features data
const defaultFeatures: Feature[] = [
  {
    id: 'online-course',
    title: 'Fully Online Course',
    description:
      'Complete the entire course from anywhere with an internet connection - no need to visit a physical classroom',
    icon: Globe,
  },
  {
    id: 'mobile-friendly',
    title: 'Mobile Friendly',
    description:
      'Study on any device - smartphone, tablet, laptop, or desktop. Your progress is automatically saved',
    icon: Smartphone,
  },
  {
    id: 'self-paced',
    title: 'Self-Paced Learning',
    description:
      'Take as much time as you need. Pause, resume, and review materials at your own convenience',
    icon: Clock,
  },
  {
    id: 'expert-content',
    title: 'Expert-Created Content',
    description:
      'Course materials developed by traffic safety experts and updated regularly to meet current California laws',
    icon: GraduationCap,
  },
  {
    id: 'customer-support',
    title: '24/7 Customer Support',
    description:
      'Get help when you need it with our round-the-clock customer support via phone, email, or live chat',
    icon: Headphones,
  },
];

export type FeatureCardProps = {
  feature: Feature;
  index: number;
  reduce: boolean | null;
  className?: string;
};

export const FeatureCard = ({
  feature,
  index,
  reduce,
  className,
}: FeatureCardProps) => {
  const IconComponent = feature.icon;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg',
        'hover:border-[var(--brand-orange)]/20 hover:bg-card/80',
        className
      )}
      data-component="FeatureCard"
    >
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-[var(--brand-orange)]/10 transition-all duration-300 group-hover:from-primary/20 group-hover:to-[var(--brand-orange)]/20">
          <IconComponent className="h-8 w-8 text-[var(--brand-orange)]" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-card-foreground">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export type TrafficSchoolFeaturesProps = {
  id?: string;
  className?: string;
  features?: Feature[];
};

export const TrafficSchoolFeatures = ({
  id,
  className,
  features = defaultFeatures,
}: TrafficSchoolFeaturesProps) => {
  const reduce = useReducedMotion();
  const componentName = 'TrafficSchoolFeatures';

  return (
    <section
      id={id ?? 'features'}
      data-component={componentName}
      className={cn('bg-muted/30 py-20 md:py-32', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Course{' '}
              <span className="bg-gradient-to-r from-primary to-[var(--brand-orange)] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Our online traffic school is designed for your convenience and
              success. Here&apos;s what makes our course stand out.
            </p>
          </motion.div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
                reduce={reduce}
              />
            ))}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border bg-gradient-to-r from-primary/5 to-[var(--brand-orange)]/5 p-8 md:p-12"
          >
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to Get Started?
            </h3>
            <p className="mb-6 text-muted-foreground md:text-lg">
              Join thousands of satisfied customers who have successfully
              completed their traffic school requirements with us.
            </p>
            <Button
              size="lg"
              className="h-12 bg-[var(--brand-orange)] px-8 text-white hover:bg-[var(--brand-orange)]/90"
              asChild
            >
              <a
                href="https://www.urbantrafficschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Enroll in Traffic School
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
