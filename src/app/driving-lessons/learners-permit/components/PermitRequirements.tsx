'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BRAND_INFO } from '@/constants/brandInfo';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AlertCircle,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  MapPin,
  User,
} from 'lucide-react';

const requirements = [
  {
    icon: Clock,
    title: 'Age Requirement',
    description: 'Must be at least 15½ years old to take the DMV written test',
    highlight: '15½+ years',
  },
  {
    icon: FileText,
    title: 'Driver Education Certificate',
    description:
      'Complete DMV-approved driver education course (required for under 18)',
    highlight: 'DMV Licensed',
  },
  {
    icon: User,
    title: 'Birth Certificate',
    description:
      'Original birth certificate with purple ink or state seal (no copies accepted)',
    highlight: 'Original Only',
  },
  {
    icon: CreditCard,
    title: 'Application Fee',
    description: 'DMV application fee of $33.00 (cash, check, or money order)',
    highlight: '$33.00',
  },
  {
    icon: MapPin,
    title: 'Proof of Residency',
    description:
      'Two forms of California residency proof (utility bills, bank statements, etc.)',
    highlight: '2 Documents',
  },
  {
    icon: Calendar,
    title: 'DMV Appointment',
    description:
      'Schedule appointment online at dmv.ca.gov (recommended) or visit walk-in center',
    highlight: 'Book Online',
  },
];

export const PermitRequirements = () => {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="PermitRequirements"
      data-component="PermitRequirements"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Requirements Checklist
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            What You&apos;ll Need for Your{' '}
            <span className="text-primary">Permit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Make sure you have everything ready before your DMV visit to avoid
            delays and ensure a smooth process.
          </p>
        </motion.div>

        <motion.div
          variants={reduce ? {} : containerVariants}
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {requirements.map((requirement) => {
            const IconComponent = requirement.icon;
            return (
              <motion.div
                key={requirement.title}
                variants={reduce ? {} : cardVariants}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {requirement.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-card-foreground">
                      {requirement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {requirement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    Important Notes
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Social Security card is recommended (though not always
                      required)
                    </li>
                    <li>• DMV will take your photo, so come prepared</li>
                    <li>
                      • If you have paperwork issues, call us at{' '}
                      {BRAND_INFO.phoneNumber} before leaving the DMV
                    </li>
                    <li>
                      • The permit test has 46 questions - you can miss up to 8
                      questions
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
