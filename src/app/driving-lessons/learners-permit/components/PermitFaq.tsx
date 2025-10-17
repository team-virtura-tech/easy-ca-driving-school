'use client';

import { StandardFaq, type FaqItem } from '@/components/custom/common';

const permitFaqs: FaqItem[] = [
  {
    id: 'age-requirement',
    question: 'What age can I start driver education in California?',
    answer:
      'You can start our driver education course at any age, but you must be at least 15½ years old to take the DMV written permit test. We recommend starting the course a few months before you turn 15½ to be fully prepared.',
  },
  {
    id: 'course-duration',
    question: 'How long does the driver education course take?',
    answer:
      'Our online driver education course is self-paced and typically takes 1-2 weeks to complete. The course includes 30 hours of instruction as required by California law. You can study at your convenience and log in/out as needed.',
  },
  {
    id: 'failed-test',
    question: 'What happens if I fail the DMV written test?',
    answer:
      "Don't worry! If you don't pass the first time, you can retake the test after waiting one week. The test has 46 questions and you need to answer at least 38 correctly. We offer free practice tests to help you prepare for retakes.",
  },
  {
    id: 'drive-alone',
    question: "Can I drive alone with a learner's permit?",
    answer:
      'No, California law requires that permit holders must always be accompanied by a licensed driver who is at least 25 years old (or a licensed parent/guardian who is 18+). The supervising driver must sit in the front passenger seat.',
  },
  {
    id: 'permit-cost',
    question: "How much does it cost to get a learner's permit?",
    answer:
      "The DMV application fee is $33. Additionally, you'll need to complete a DMV-approved driver education course (our online course pricing varies). Some students may also need to purchase additional documents like certified birth certificates.",
  },
  {
    id: 'required-documents',
    question: 'What documents do I need for the DMV appointment?',
    answer:
      "You'll need: (1) Completed DL44 application form, (2) Original birth certificate, (3) Social Security number, (4) Two proofs of California residency, (5) Driver education completion certificate, and (6) $33 application fee.",
  },
  {
    id: 'permit-validity',
    question: "How long is a learner's permit valid?",
    answer:
      "A California learner's permit is valid for 12 months from the date of issuance. If you don't get your license within that time, you may need to renew your permit or retake the written test.",
  },
  {
    id: 'driving-test-timing',
    question:
      'Can I take the driving test immediately after getting my permit?',
    answer:
      "No, if you're under 18, you must hold your permit for at least 6 months before taking the driving test. You also need to complete 6 hours of professional driving lessons and 50 hours of supervised practice (10 hours at night).",
  },
  {
    id: 'online-education',
    question: 'Is online driver education accepted by the DMV?',
    answer:
      "Yes! Our online driver education course is fully approved by the California DMV. Online courses are convenient, self-paced, and meet all state requirements. You'll receive the same completion certificate as classroom courses.",
  },
  {
    id: 'permit-restrictions',
    question: 'What are the restrictions for permit holders?',
    answer:
      'Permit holders must: (1) Always have a licensed adult supervisor, (2) Cannot drive between 11 PM and 5 AM unless accompanied by a parent/guardian or licensed instructor, (3) Cannot use cell phones while driving, (4) Must carry the permit at all times while driving.',
  },
];

export const PermitFaq = () => {
  return (
    <StandardFaq
      id="PermitFaq"
      title="Got Questions About Your Permit?"
      subtitle="Find answers to the most common questions about getting your California learner's permit."
      faqItems={permitFaqs}
      showCta={false}
    />
  );
};
