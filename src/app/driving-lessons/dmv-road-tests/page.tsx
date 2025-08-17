import { AnimateNumber } from '@/components/custom/AnimateNumber';
import { TestimonialsCarousel } from '@/components/custom/testimonialsCarousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Target,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'DMV Road Tests - Professional Test Preparation | Easy CA Driving School',
  description:
    'Pass your DMV road test on the first try! Our professional instructors provide pickup, preparation, and support. 96% first-time pass rate.',
};

// Custom data for DMV Road Test process
const dmvTestSteps = [
  {
    id: 'schedule' as const,
    title: 'You Schedule Your DMV Test',
    description:
      'Book your DMV road test appointment online or by phone at your preferred DMV location.',
    icon: Calendar,
  },
  {
    id: 'pickup' as const,
    title: 'We Pick You Up',
    description:
      'Our instructor arrives 1 hour before your test to pick you up from your location.',
    icon: Car,
  },
  {
    id: 'preparation' as const,
    title: 'Pre-Test Coaching',
    description:
      'Get familiar with traffic conditions, speed limits, and essential skills on the way to DMV.',
    icon: Target,
  },
  {
    id: 'support' as const,
    title: 'Test Day Support',
    description:
      'We escort you through check-in and wait with you until your test begins.',
    icon: Shield,
  },
];

const benefits = [
  {
    id: 'high-pass-rate',
    title: '96% First-Time Pass Rate',
    description:
      'Our proven preparation method helps students pass their road test on the first attempt.',
    icon: Award,
  },
  {
    id: 'experienced-instructors',
    title: 'Professional Instructors',
    description:
      'Learn from certified instructors with years of experience preparing students for success.',
    icon: Users,
  },
  {
    id: 'convenient-pickup',
    title: 'Door-to-Door Service',
    description:
      'We pick you up and drop you off, making your test day stress-free and convenient.',
    icon: Car,
  },
  {
    id: 'modern-vehicles',
    title: 'Well-Maintained Vehicles',
    description:
      'Take your test in our modern, reliable vehicles equipped with dual controls for safety.',
    icon: Shield,
  },
  {
    id: 'flexible-timing',
    title: 'Flexible Scheduling',
    description:
      'Available for morning, afternoon, and weekend DMV appointments across California.',
    icon: Clock,
  },
  {
    id: 'comprehensive-prep',
    title: 'Complete Test Preparation',
    description:
      'Route familiarization, parallel parking practice, and confidence-building coaching.',
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'I was so nervous about my road test, but the instructor made me feel confident and prepared. Passed on my first try! The pickup service was incredibly convenient.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'New Driver',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'The pre-test coaching was invaluable. My instructor helped me understand exactly what the DMV examiner was looking for. Highly recommend their road test service!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Professional, punctual, and effective. The instructor waited for me during the entire test and drove me home afterwards. Worth every penny!',
    rating: 5,
  },
];
export default function DMVRoadTestsPage() {
  return (
    <div data-component="DMVRoadTestsPage" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="max-w-xl lg:max-w-none">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                96% First-Time Pass Rate
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Pass Your DMV Road Test with{' '}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Professional instructors provide convenient pickup, expert
                preparation, and complete support on your DMV road test day.
                Join thousands of successful drivers who passed on their first
                try.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    <AnimateNumber value={96} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    <AnimateNumber value={15000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Students Certified
                  </p>
                </div>
                <div className="text-center md:col-span-1 col-span-2">
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    <AnimateNumber value={25} suffix=" Years" />
                  </div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="text-base">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (888) 945-0644
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Online
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <Car className="mx-auto h-16 w-16 text-primary/60 mb-4" />
                  <p className="text-muted-foreground">
                    Professional DMV Road Test Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              How Our DMV Road Test Service Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We make your DMV road test day stress-free with professional
              pickup, preparation, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {dmvTestSteps.map((step, index) => (
              <Card key={step.id} className="relative text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < dmvTestSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-primary/30 lg:block -translate-y-1/2" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Our DMV Road Test Service?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional preparation and support that gives you the confidence
              to pass your test.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card
                key={benefit.id}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Success Stories from Our Students
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from students who passed their DMV road test with our help.
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Pass Your DMV Road Test?
            </h2>
            <p className="mt-4 text-lg opacity-90 md:text-xl">
              Join the 96% of our students who pass their road test on the first
              try. Professional instruction, convenient pickup, and complete
              test day support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="text-base">
                <Phone className="mr-2 h-5 w-5" />
                Call (888) 945-0644
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Online
              </Button>
            </div>

            {/* Service Areas */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center justify-center gap-2 text-sm opacity-75">
                <MapPin className="h-4 w-4" />
                <span>
                  Serving San Jose, Santa Clara County, Contra Costa County &
                  Surrounding Areas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
