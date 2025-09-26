export const generateLearnerPermitStructuredData = () => {
  const baseUrl = 'https://easycodrivingschool.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${baseUrl}/driving-lessons/learners-permit`,
    name: "California Teen Learner's Permit Course",
    description:
      "DMV-approved online driver education course for California teens to obtain their learner's permit. Start at any age, take the permit test at 15½.",
    provider: {
      '@type': 'Organization',
      name: 'Easy California Driving School',
      url: baseUrl,
      telephone: '888-895-0644',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    courseMode: 'online',
    educationalLevel: 'beginner',
    teaches: [
      'California traffic laws',
      'Safe driving practices',
      'Road signs and signals',
      'DMV permit test preparation',
    ],
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      startDate: '2025-01-01',
      endDate: '2025-12-31',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
    inLanguage: 'en-US',
    isAccessibleForFree: false,
    accessibilityFeature: ['alternativeText', 'captions'],
    learningResourceType: 'Course',
    educationalUse: 'instruction',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
      audienceType: 'teenager',
    },
  };
};

export const generateFAQStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What age can I start driver education in California?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can start our driver education course at any age, but you must be at least 15½ years old to take the DMV written permit test. We recommend starting the course a few months before you turn 15½ to be fully prepared.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the driver education course take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our online driver education course is self-paced and typically takes 1-2 weeks to complete. The course includes 30 hours of instruction as required by California law.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents do I need for the DMV appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will need: (1) Completed DL44 application form, (2) Original birth certificate, (3) Social Security number, (4) Two proofs of California residency, (5) Driver education completion certificate, and (6) $33 application fee.',
        },
      },
      {
        '@type': 'Question',
        name: "How much does it cost to get a learner's permit?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The DMV application fee is $33. Additionally, you will need to complete a DMV-approved driver education course.',
        },
      },
      {
        '@type': 'Question',
        name: "Can I drive alone with a learner's permit?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, California law requires that permit holders must always be accompanied by a licensed driver who is at least 25 years old (or a licensed parent/guardian who is 18+). The supervising driver must sit in the front passenger seat.',
        },
      },
    ],
  };
};

export default function LearnerPermitStructuredData() {
  // This is a placeholder component that will be used in the page
  return null;
}
