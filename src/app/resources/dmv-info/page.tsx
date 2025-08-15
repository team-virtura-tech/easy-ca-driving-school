import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - Easy CA Driving School',
  description: 'Helpful resources for new drivers including DMV information.',
};

export default function DMVInfoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">DMV Information</h1>
      <p className="mt-4 text-muted-foreground">
        Access helpful resources, practice tests, and DMV information to help
        you prepare for your driving test.
      </p>
    </div>
  );
}
