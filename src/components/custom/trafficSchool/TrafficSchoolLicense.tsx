'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Calendar, MapPin, Shield } from 'lucide-react';

export type LicenseInfo = {
  licenseNumber: string;
  issuedTo: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  dateIssued: string;
  expirationDate: string;
  formControlNo: string;
  validFor: string;
};

const defaultLicenseInfo: LicenseInfo = {
  licenseNumber: 'E0538',
  issuedTo: 'URBAN TRAFFIC SCHOOL',
  address: '1776 CLEAR LAKE AVE STE 200',
  city: 'MILPITAS',
  state: 'CA',
  zipCode: '95035',
  dateIssued: 'Jul 25, 2023',
  expirationDate: 'Jul 25, 2024',
  formControlNo: '1535568',
  validFor: 'Internet',
};

export type TrafficSchoolLicenseProps = {
  id?: string;
  className?: string;
  licenseInfo?: LicenseInfo;
};

export const TrafficSchoolLicense = ({
  id,
  className,
  licenseInfo = defaultLicenseInfo,
}: TrafficSchoolLicenseProps) => {
  const reduce = useReducedMotion();
  const componentName = 'TrafficSchoolLicense';

  return (
    <section
      id={id ?? componentName}
      data-component={componentName}
      className={cn('py-20 md:py-32', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Fully{' '}
              <span className="bg-gradient-to-r from-primary to-[var(--brand-orange)] bg-clip-text text-transparent">
                Licensed & Approved
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Our traffic school is officially licensed by the California
              Department of Motor Vehicles and approved by all California
              courts.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-8 shadow-xl md:p-12"
          >
            {/* License Header */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">California DMV License</h3>
                <Badge variant="secondary" className="mt-1">
                  Traffic Violator School
                </Badge>
              </div>
            </div>

            {/* License Details Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* License Number */}
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    License No.
                  </p>
                  <p className="text-lg font-bold text-[var(--brand-orange)]">
                    {licenseInfo.licenseNumber}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Location
                  </p>
                  <p className="font-semibold">
                    {licenseInfo.city}, {licenseInfo.state}
                  </p>
                </div>
              </div>

              {/* Valid Until */}
              <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Valid Until
                  </p>
                  <p className="font-semibold">{licenseInfo.expirationDate}</p>
                </div>
              </div>
            </div>

            {/* License Details */}
            <div className="mt-8 rounded-lg bg-muted/30 p-6">
              <h4 className="mb-4 text-lg font-semibold">Licensed School</h4>
              <div className="space-y-2 text-left">
                <p className="font-semibold">{licenseInfo.issuedTo}</p>
                <p className="text-muted-foreground">{licenseInfo.address}</p>
                <p className="text-muted-foreground">
                  {licenseInfo.city}, {licenseInfo.state} {licenseInfo.zipCode}
                </p>
                <p className="text-sm text-muted-foreground">
                  Form Control No: {licenseInfo.formControlNo} | Valid for:{' '}
                  {licenseInfo.validFor}
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                DMV Licensed
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-600" />
                Court Accepted
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-600" />
                Current License
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
