import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  ExternalLink,
  FileText,
  Target,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Free DMV Practice Tests - Easy CA Driving School',
  description:
    'Access free California DMV practice tests to prepare for your permit exam. Based on 2024 CA driver handbook with instant grading and feedback.',
};

export default function DMVPracticeTestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section
        id="dmv-practice-hero"
        data-component="DMVPracticeHero"
        className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-muted/10 py-16 md:py-16"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Free Resources
                  </Badge>
                  <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    Free DMV Practice Tests
                  </h1>
                  <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
                    Master your California DMV written test with our
                    comprehensive practice exams. Based on the 2024 CA driver
                    handbook with instant grading and detailed feedback.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90"
                  >
                    <Link
                      href="https://www.dmv-written-test.com/california"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Practice Test
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact-us">Book Driving Lessons</Link>
                  </Button>
                </div>
              </div>

              {/* Right Video */}
              <div className="relative mt-8 lg:mt-12">
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                    <iframe
                      src="https://www.youtube.com/embed/5rRHpNE87uk?rel=0&modestbranding=1&controls=1&showinfo=0"
                      title="California DMV Written Test 2025 - Practice Questions"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Watch real California DMV test questions with detailed
                    explanations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CA DMV Exam Overview */}
      <section
        id="exam-overview"
        data-component="ExamOverview"
        className="py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                CA DMV Permit Exam at a Glance
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about the California DMV written
                test
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-l-4 border-l-brand-orange">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-brand-orange" />
                    Under 18 Years Old
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Total Questions:
                    </span>
                    <span className="font-semibold">46 questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Passing Score:
                    </span>
                    <span className="font-semibold">38 correct (83.3%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Minimum Age:
                    </span>
                    <span className="font-semibold">15.5 years old</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    18+ Years Old
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Total Questions:
                    </span>
                    <span className="font-semibold">36 questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Passing Score:
                    </span>
                    <span className="font-semibold">30 correct (83.3%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Required Age:
                    </span>
                    <span className="font-semibold">18+ years old</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Test Features */}
      <section
        id="practice-features"
        data-component="PracticeFeatures"
        className="bg-muted/30 py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Why Our Practice Tests Work
              </h2>
              <p className="text-muted-foreground">
                Comprehensive preparation tools designed for success
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 group-hover:bg-brand-orange/20">
                    <BookOpen className="h-6 w-6 text-brand-orange" />
                  </div>
                  <CardTitle>2024 Updated Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All questions based on the latest 2024 California Driver
                    Handbook, ensuring you study current laws and regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Instant Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get immediate results with detailed explanations for each
                    answer, helping you understand mistakes and learn faster.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-200 dark:bg-green-900/30 dark:group-hover:bg-green-800/40">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Real DMV Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Questions sourced from actual DMV administered tests,
                    submitted by students who have taken the real exam.
                  </p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 dark:bg-blue-900/30 dark:group-hover:bg-blue-800/40">
                    <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Multiple Test Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Perfect for learner&apos;s permit, driver&apos;s license,
                    senior refresher, and license renewal tests.
                  </p>
                </CardContent>
              </Card>

              {/* <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 group-hover:bg-purple-200 dark:bg-purple-900/30 dark:group-hover:bg-purple-800/40">
                    <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Bilingual Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Available in both English and Spanish to accommodate all
                    California drivers.
                  </p>
                </CardContent>
              </Card> */}

              <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/40">
                    <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle>Comprehensive Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Covers rules of the road, traffic signs, and driving laws -
                    everything on the official DMV test.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="practice-cta"
        data-component="PracticeCTA"
        className="py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl bg-gradient-to-r from-primary/5 via-background to-brand-orange/5 border-brand-orange/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Ready to Ace Your DMV Test?
                </h2>
                <p className="mb-8 text-muted-foreground md:text-lg">
                  Start practicing now with our free California DMV practice
                  tests. Join thousands of successful drivers who passed their
                  test on the first try.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90"
                  >
                    <Link
                      href="https://www.dmv-written-test.com/california"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Take Free Practice Test
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact-us">Schedule Driving Lessons</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stats */}
      <section
        id="success-stats"
        data-component="SuccessStats"
        className="bg-primary/5 py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">
              Our Success Record
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-brand-orange md:text-5xl">
                  96%
                </div>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Pass Rate
                </p>
                <p className="text-muted-foreground">
                  Students pass on their first try
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  30+
                </div>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Years
                </p>
                <p className="text-muted-foreground">In business serving CA</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-green-600 md:text-5xl">
                  30,000+
                </div>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Certified
                </p>
                <p className="text-muted-foreground">Drivers trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
