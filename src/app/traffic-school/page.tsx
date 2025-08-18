import {
  TrafficSchoolBenefits,
  TrafficSchoolFaq,
  TrafficSchoolFeatures,
  TrafficSchoolHero,
  TrafficSchoolLicense,
} from '@/components/custom/trafficSchool';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Traffic School - Dismiss Your Ticket | Easy CA Driving School',
  description:
    'Complete DMV-approved online traffic school to dismiss your ticket, clear your driving record, and save on insurance. 24/7 access, mobile-friendly, 400,000+ satisfied students.',
  keywords:
    'traffic school, online traffic school, dismiss ticket, California traffic school, DMV approved, clear driving record',
};

export default function TrafficSchoolPage() {
  return (
    <main>
      <TrafficSchoolHero />
      <TrafficSchoolBenefits />
      <TrafficSchoolFeatures />
      <TrafficSchoolLicense />
      <TrafficSchoolFaq />
    </main>
  );
}
