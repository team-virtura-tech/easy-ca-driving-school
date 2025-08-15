import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traffic School - Easy CA Driving School',
  description: 'Traffic school courses to help you dismiss tickets.',
};

export default function TrafficSchoolPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Traffic School</h1>
      <p className="mt-4 text-muted-foreground">
        Complete traffic school courses to dismiss tickets and improve your
        driving record.
      </p>
    </div>
  );
}
