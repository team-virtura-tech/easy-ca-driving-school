'use client';

import { StandardFaq, type FaqItem } from '@/components/custom/common';

// Default FAQ data for traffic school
const defaultFaqItems: FaqItem[] = [
  {
    id: 'what-is-traffic-school',
    question: 'What is traffic school?',
    answer:
      'Traffic school is a court-approved educational course designed to help drivers improve their knowledge of traffic safety and laws. Upon successful completion, you can dismiss your traffic ticket, prevent points from being added to your driving record, and potentially avoid insurance rate increases.',
  },
  {
    id: 'who-eligible',
    question: 'Who is eligible for traffic school?',
    answer:
      'Generally, you are eligible if: 1) You have a valid driver&apos;s license, 2) Your violation is not for driving over 25+ mph above the speed limit, 3) You haven&apos;t attended traffic school in the past 18 months, 4) Your violation did not result in an accident causing injury or death. Check with your court to confirm eligibility.',
  },
  {
    id: 'how-long-course',
    question: 'How long does the course take?',
    answer:
      'The California-mandated traffic school course is 8 hours long. However, since our course is self-paced, you can complete it over multiple sessions and take as much time as you need. Most students finish within a few days to a week.',
  },
  {
    id: 'when-receive-certificate',
    question: 'When will I receive my completion certificate?',
    answer:
      'Upon successful completion of the course and final exam, your completion certificate is available for immediate download. We also electronically report your completion to the court and DMV, typically within 1-2 business days.',
  },
  {
    id: 'what-if-fail',
    question: 'What if I fail the final exam?',
    answer:
      'Don&apos;t worry! If you don&apos;t pass the final exam on your first try, you can retake it as many times as needed at no additional cost. We provide unlimited retakes to ensure your success.',
  },
  {
    id: 'cost-traffic-school',
    question: 'How much does traffic school cost?',
    answer:
      'Visit our partner site at urbantrafficschool.com for current pricing and special offers. They frequently have promotions and discounts available to help you save money on your traffic school course.',
  },
  {
    id: 'mobile-friendly',
    question: 'Can I take the course on my phone or tablet?',
    answer:
      'Yes! Our course is fully mobile-friendly and works on smartphones, tablets, laptops, and desktop computers. Your progress is automatically saved, so you can switch between devices and pick up where you left off.',
  },
  {
    id: 'customer-support',
    question: 'What if I need help during the course?',
    answer:
      'We offer 24/7 customer support via phone, email, and live chat. Our friendly support team is ready to help you with any questions or technical issues you may encounter during your course.',
  },
];

export type TrafficSchoolFaqProps = {
  id?: string;
  className?: string;
  faqItems?: FaqItem[];
};

export const TrafficSchoolFaq = ({
  id,
  className,
  faqItems = defaultFaqItems,
}: TrafficSchoolFaqProps) => {
  return (
    <StandardFaq
      id={id}
      className={className}
      title="Frequently Asked Questions"
      subtitle="Get answers to the most common questions about our traffic school course."
      faqItems={faqItems}
      ctaTitle="Still Have Questions?"
      ctaDescription="Our friendly customer support team is here to help you 24/7. Get started with your traffic school course today!"
      primaryCta={{
        text: 'Start Your Course Now',
        href: 'https://www.urbantrafficschool.com/',
        external: true,
      }}
      secondaryCta={{
        text: 'Contact Support',
        href: '/contact-us',
      }}
    />
  );
};
