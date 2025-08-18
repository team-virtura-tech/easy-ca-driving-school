import type { Metadata } from 'next';
import {
  PermitCta,
  PermitFaq,
  PermitHero,
  PermitProcess,
  PermitRequirements,
} from './components';
import {
  generateFAQStructuredData,
  generateLearnerPermitStructuredData,
} from './structured-data';

export const metadata: Metadata = {
  title: "California Teen Learner's Permit | Easy CA Driving School",
  description:
    "Get your California learner's permit with our DMV-approved driver's education course. Step-by-step guide for teens 15½+ to obtain their permit.",
  keywords:
    'California learners permit, teen permit, DMV permit test, driver education, driving school',
};

export default function LearnersPermitPage() {
  const courseStructuredData = generateLearnerPermitStructuredData();
  const faqStructuredData = generateFAQStructuredData();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <main className="min-h-screen">
        <PermitHero />
        <PermitRequirements />
        <PermitProcess />
        <PermitFaq />
        <PermitCta />
      </main>
    </>
  );
}
