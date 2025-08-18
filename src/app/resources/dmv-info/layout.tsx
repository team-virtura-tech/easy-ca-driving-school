import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMV Information & Office Locations - Easy CA Driving School',
  description:
    'Complete guide to California DMV offices, appointments, and road test locations. Get your driver&apos;s license with professional driving instruction.',
  keywords:
    'DMV offices California, DMV appointments, road test locations, driver license, CA DMV',
};

export default function DMVInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
