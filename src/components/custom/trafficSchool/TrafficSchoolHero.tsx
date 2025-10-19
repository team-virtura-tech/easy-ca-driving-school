'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Shield, Star, Users } from 'lucide-react';

export type TrafficSchoolHeroProps = {
  id?: string;
  className?: string;
};

export const TrafficSchoolHero = ({
  id,
  className,
}: TrafficSchoolHeroProps) => {
  const reduce = useReducedMotion();
  const componentName = 'TrafficSchoolHero';

  return (
    <section
      id={id ?? componentName}
      data-component={componentName}
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              DMV Licensed Traffic School
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Dismiss Your Traffic Ticket{' '}
              <span className="bg-gradient-to-r from-primary via-[var(--brand-orange)] to-primary bg-clip-text text-transparent">
                Online
              </span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Complete California DMV-approved traffic school from the comfort
              of your home. Clear your driving record, prevent insurance
              increases, and keep points off your license.
            </p>

            {/* Stats Row */}
            <div className="mb-8 flex flex-wrap justify-center gap-6 text-center md:gap-12">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  <strong className="text-lg">400K+</strong> Students
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[var(--brand-orange)]" />
                <span className="text-sm font-medium">
                  <strong className="text-lg">99.99%</strong> Success Rate
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  <strong className="text-lg">100%</strong> DMV Licensed
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                  Start Traffic School Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ Mobile Friendly</span>
              <span>✓ 6-12 AM Access</span>
              <span>✓ Instant Certificate</span>
              <span>✓ Money Back Guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
