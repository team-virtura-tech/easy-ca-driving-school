import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCircle, Clock, MapPin, Phone, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Easy CA Driving School - Professional Driving Education',
  description:
    "Learn about California's premier driving school. Over 15 years of experience, certified instructors, and proven success rates.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            California Driving Education Since 2008
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            About Easy CA Driving School
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
            California&apos;s trusted driving education partner, helping
            students build confidence and master safe driving skills for over 15
            years.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[--color-brand-orange]" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide the highest quality driving education that builds
                confident, safe, and responsible drivers while making the
                learning process enjoyable and stress-free for students and
                their families.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[--color-brand-orange]" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be California&apos;s leading driving school, recognized for
                excellence in driver education, innovative teaching methods, and
                exceptional student success rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-[--color-brand-orange] md:text-4xl">
                15+
              </div>
              <div className="mt-2 text-sm text-muted-foreground md:text-base">
                Years of Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[--color-brand-orange] md:text-4xl">
                5,000+
              </div>
              <div className="mt-2 text-sm text-muted-foreground md:text-base">
                Students Trained
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[--color-brand-orange] md:text-4xl">
                95%
              </div>
              <div className="mt-2 text-sm text-muted-foreground md:text-base">
                First-Time Pass Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[--color-brand-orange] md:text-4xl">
                50+
              </div>
              <div className="mt-2 text-sm text-muted-foreground md:text-base">
                Service Areas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose Easy CA Driving School?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <CheckCircle className="h-6 w-6" />,
              title: 'Certified Instructors',
              description:
                'All our instructors are DMV-certified with years of professional teaching experience.',
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: 'Flexible Scheduling',
              description:
                'Lessons available 7 days a week with convenient pickup and drop-off service.',
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: 'High Success Rate',
              description:
                '95% of our students pass their driving test on the first attempt.',
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: 'Patient Teaching',
              description:
                "We adapt our teaching methods to each student's learning style and pace.",
            },
            {
              icon: <MapPin className="h-6 w-6" />,
              title: 'Wide Coverage',
              description:
                'Serving over 50 cities across California with local instructors.',
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: '24/7 Support',
              description:
                'Round-the-clock customer support for scheduling and questions.',
            },
          ].map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[--color-brand-orange]/10 text-[--color-brand-orange]">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Easy CA Driving School was founded in 2008 with a simple
                mission: to make learning to drive a positive, stress-free
                experience. Starting with just two instructors and a vision for
                excellence, we&apos;ve grown to become one of California&apos;s
                most trusted driving education providers.
              </p>
              <p>
                Our founder, a former DMV examiner with over 20 years of
                experience, recognized the need for a driving school that
                combined professional instruction with a patient, encouraging
                approach. This philosophy has shaped everything we do, from our
                curriculum development to our instructor training programs.
              </p>
              <p>
                Today, we&apos;re proud to have helped thousands of students
                achieve their driving goals, from nervous teenagers getting
                their first license to adults returning to driving after years
                away from the road. Our commitment to safety, professionalism,
                and student success remains as strong as ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of successful students who chose Easy CA Driving
            School for their driver education.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/contact-us">Book Your First Lesson</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about-us/reviews">Read Our Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
