'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

// Default FAQ data
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
  const reduce = useReducedMotion();
  const componentName = 'TrafficSchoolFaq';

  return (
    <section
      id={id ?? componentName}
      data-component={componentName}
      className={cn('bg-muted/30 py-20 md:py-32', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-primary to-[var(--brand-orange)] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Get answers to the most common questions about our traffic school
              course.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="rounded-2xl border bg-card p-8 shadow-lg md:p-12">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Still Have Questions?
              </h3>
              <p className="mb-6 text-muted-foreground md:text-lg">
                Our friendly customer support team is here to help you 24/7. Get
                started with your traffic school course today!
              </p>
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
                    Start Your Course Now
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8"
                  asChild
                >
                  <a href="/contact-us">Contact Support</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
