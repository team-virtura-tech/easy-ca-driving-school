import type { Metadata } from 'next';
import { Suspense } from 'react';

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

// Loading component for suspense fallback
function PackagesLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-muted rounded-md w-1/3"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PackagesPricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<PackagesLoading />}>{children}</Suspense>;
}
