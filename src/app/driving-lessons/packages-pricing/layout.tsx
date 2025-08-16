import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packages & Pricing - Easy CA Driving School',
  description:
    'Choose from our flexible driving lesson packages for teens and adults. Professional instruction with pickup & drop-off service. CA DMV approved courses with competitive pricing.',
  keywords: [
    'driving lessons',
    'driving school packages',
    'California driving lessons',
    'teen driving lessons',
    'adult driving lessons',
    'DMV test preparation',
    'driving instruction',
  ],
  openGraph: {
    title: 'Driving Lesson Packages & Pricing - Easy CA Driving School',
    description:
      'Professional driving lessons with flexible packages. Pickup & drop-off included. CA teen and adult programs available.',
    type: 'website',
  },
};

export default function PackagesPricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
