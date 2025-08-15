import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews - Easy CA Driving School',
  description: 'Read reviews from our satisfied students and parents.',
};

export default function ServiceAreaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Service Area</h1>
      <p className="mt-4 text-muted-foreground">
        We proudly serve the following areas:
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>Los Angeles</li>
        <li>San Francisco</li>
        <li>San Diego</li>
        <li>Sacramento</li>
      </ul>
    </div>
  );
}
