'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { motion, useReducedMotion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What age can I start driver education in California?',
    answer:
      'You can start our driver education course at any age, but you must be at least 15½ years old to take the DMV written permit test. We recommend starting the course a few months before you turn 15½ to be fully prepared.',
  },
  {
    question: 'How long does the driver education course take?',
    answer:
      'Our online driver education course is self-paced and typically takes 1-2 weeks to complete. The course includes 30 hours of instruction as required by California law. You can study at your convenience and log in/out as needed.',
  },
  {
    question: 'What happens if I fail the DMV written test?',
    answer:
      "Don't worry! If you don't pass the first time, you can retake the test after waiting one week. The test has 46 questions and you need to answer at least 38 correctly. We offer free practice tests to help you prepare for retakes.",
  },
  {
    question: "Can I drive alone with a learner's permit?",
    answer:
      'No, California law requires that permit holders must always be accompanied by a licensed driver who is at least 25 years old (or a licensed parent/guardian who is 18+). The supervising driver must sit in the front passenger seat.',
  },
  {
    question: "How much does it cost to get a learner's permit?",
    answer:
      "The DMV application fee is $33. Additionally, you'll need to complete a DMV-approved driver education course (our online course pricing varies). Some students may also need to purchase additional documents like certified birth certificates.",
  },
  {
    question: 'What documents do I need for the DMV appointment?',
    answer:
      "You'll need: (1) Completed DL44 application form, (2) Original birth certificate, (3) Social Security number, (4) Two proofs of California residency, (5) Driver education completion certificate, and (6) $33 application fee.",
  },
  {
    question: "How long is a learner's permit valid?",
    answer:
      "A California learner's permit is valid for 12 months from the date of issuance. If you don't get your license within that time, you may need to renew your permit or retake the written test.",
  },
  {
    question:
      'Can I take the driving test immediately after getting my permit?',
    answer:
      "No, if you're under 18, you must hold your permit for at least 6 months before taking the driving test. You also need to complete 6 hours of professional driving lessons and 50 hours of supervised practice (10 hours at night).",
  },
  {
    question: 'Is online driver education accepted by the DMV?',
    answer:
      "Yes! Our online driver education course is fully approved by the California DMV. Online courses are convenient, self-paced, and meet all state requirements. You'll receive the same completion certificate as classroom courses.",
  },
  {
    question: 'What are the restrictions for permit holders?',
    answer:
      'Permit holders must: (1) Always have a licensed adult supervisor, (2) Cannot drive between 11 PM and 5 AM unless accompanied by a parent/guardian or licensed instructor, (3) Cannot use cell phones while driving, (4) Must carry the permit at all times while driving.',
  },
];

export const PermitFaq = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="PermitFaq"
      data-component="PermitFaq"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="mr-2 h-3 w-3" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Got Questions About Your{' '}
            <span className="text-primary">Permit?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to the most common questions about getting your
            California learner&apos;s permit.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 py-2 hover:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-muted/50 rounded-xl p-6 md:p-8">
            <HelpCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you navigate the permit process. Contact
              us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:888-895-0644"
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Call (888) 895-0644
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Contact Form
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
