'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  Shield,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const dmvOffices = [
  {
    county: 'Santa Clara County',
    offices: [
      {
        name: 'San Jose – Alma Office',
        address: '111 W Alma Avenue',
        city: 'San Jose, CA 95111',
      },
      {
        name: 'San Jose – Martinvale Office',
        address: '180 Martinvale Lane',
        city: 'San Jose, CA 95119',
      },
      {
        name: 'Los Gatos Office',
        address: '600 N Santa Cruz Avenue',
        city: 'Los Gatos, CA 95030',
      },
      {
        name: 'Gilroy Office',
        address: '6984 Automall Parkway Suite A',
        city: 'Gilroy, CA 95020',
      },
      {
        name: 'Santa Clara Office',
        address: '3665 Flora Vista Avenue',
        city: 'Santa Clara, CA 95051',
      },
    ],
  },
  {
    county: 'Santa Cruz County',
    offices: [
      {
        name: 'Capitola Office',
        address: '4200 Capitola Road',
        city: 'Capitola, CA 95010',
      },
      {
        name: 'Watsonville Office',
        address: '90 Alta Vista Avenue',
        city: 'Watsonville, CA 95076',
      },
    ],
  },
  {
    county: 'Contra Costa County',
    offices: [
      {
        name: 'Pittsburgh Office',
        address: '1399 Buchanan Road',
        city: 'Pittsburgh, CA 94565',
      },
      {
        name: 'Concord Office',
        address: '2070 Diamond Boulevard',
        city: 'Concord, CA 94520',
      },
    ],
  },
  {
    county: 'San Joaquin County',
    offices: [
      {
        name: 'Tracy Office',
        address: '2785 Auto Plaza Drive',
        city: 'Tracy, CA 95304',
      },
    ],
  },
];

const achievements = [
  {
    icon: CheckCircle2,
    title: '96% Pass Rate',
    description: 'Our students pass the driving test on their first try',
  },
  {
    icon: Shield,
    title: 'Patient Instructors',
    description: 'Professional and supportive driving instructors',
  },
  {
    icon: Award,
    title: 'Voted Best',
    description: 'Best driving school for 10 consecutive years',
  },
  {
    icon: Users,
    title: '30,000+ Certified',
    description: 'Successfully certified drivers in California',
  },
];

export default function DMVInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              DMV Resources
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              California DMV
              <span className="bg-gradient-to-r from-[#ff6900] to-[#D0783B] bg-clip-text text-transparent">
                {' '}
                Information
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Your comprehensive guide to California DMV offices, appointments,
              and road test locations. Get prepared for success with our
              professional driving instruction.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-[#ff6900] hover:bg-[#D0783B]"
                asChild
              >
                <Link href="/contact-us">
                  Schedule Appointment
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resources/dmv-practice-tests">
                  View Practice Tests
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              Essential DMV Links
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff6900]/10">
                      <ExternalLink className="h-6 w-6 text-[#ff6900]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Official CA DMV Website</h3>
                      <p className="text-sm text-muted-foreground">
                        Access all DMV services and information
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a
                      href="https://www.dmv.ca.gov/portal/dmv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit DMV Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff6900]/10">
                      <Clock className="h-6 w-6 text-[#ff6900]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">
                        Schedule DMV Appointments
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Book your road test appointment online
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a
                      href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Appointment
                      <Clock className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
              Why Choose Easy CA Driving School
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6900]/10">
                      <achievement.icon className="h-8 w-8 text-[#ff6900]" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DMV Offices Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              DMV Offices for Behind-the-Wheel Tests
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Find the nearest DMV office to schedule your road test appointment
            </p>

            <div className="grid gap-8 lg:grid-cols-2">
              {dmvOffices.map((county, countyIndex) => (
                <Card key={countyIndex} className="overflow-hidden">
                  <div className="bg-[#ff6900]/5 p-6">
                    <h3 className="flex items-center text-xl font-bold">
                      <MapPin className="mr-2 h-5 w-5 text-[#ff6900]" />
                      {county.county}
                    </h3>
                  </div>
                  <CardContent className="p-0">
                    {county.offices.map((office, officeIndex) => (
                      <div
                        key={officeIndex}
                        className="border-b border-border last:border-b-0 p-6 transition-colors hover:bg-muted/30"
                      >
                        <h4 className="mb-2 font-semibold">{office.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {office.address}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {office.city}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-2xl border bg-card p-8 shadow-lg md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Get Your Driver&apos;s License?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of successful drivers who passed the test on the
                first try with our professional instruction.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 bg-[#ff6900] px-8 text-white hover:bg-[#D0783B]"
                  asChild
                >
                  <a
                    href="tel:+18882998911"
                    className="inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call (888) 299-8911
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8"
                  asChild
                >
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2"
                  >
                    Schedule Appointment
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
