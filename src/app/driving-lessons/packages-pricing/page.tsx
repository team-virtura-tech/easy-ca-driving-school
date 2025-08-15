import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packages & Pricing - Easy CA Driving School',
  description: 'Affordable driving lesson packages to fit your needs.',
};

export default function PackagesPricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Packages & Pricing</h1>
      <p className="mt-4 text-muted-foreground">
        Choose from our flexible driving lesson packages designed to fit your
        schedule and budget.
      </p>
    </div>
  );
}
