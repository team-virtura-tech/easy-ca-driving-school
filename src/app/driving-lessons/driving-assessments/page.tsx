import type { Metadata } from 'next';

import {
  AssessmentHero,
  AssessmentProcess,
  AssessmentTypes,
  EligibilityAndCta,
} from '@/components/custom/drivingAssessments';

export const metadata: Metadata = {
  title:
    'Driving Assessments - Easy CA Driving School | Professional Evaluation',
  description:
    'Professional driving assessments for business liability, family safety, and DMV test preparation. 96% pass rate with certified instructors. Schedule your evaluation today.',
  keywords: [
    'driving assessment',
    'driving evaluation',
    'business driver assessment',
    'family driving safety',
    'DMV test preparation',
    'California driving school',
    'professional driving instructor',
    'driving skills evaluation',
  ],
  openGraph: {
    title: 'Professional Driving Assessments | Easy CA Driving School',
    description:
      'Expert driving assessments tailored to your needs. Business, family, and DMV preparation evaluations available.',
    type: 'website',
  },
};

export default function DrivingAssessmentsPage() {
  return (
    <main>
      <AssessmentHero />
      <AssessmentTypes />
      <AssessmentProcess />
      <EligibilityAndCta />
    </main>
  );
}
