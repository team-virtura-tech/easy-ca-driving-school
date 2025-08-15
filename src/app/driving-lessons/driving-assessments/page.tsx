import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driving Assessments - Easy CA Driving School',
  description: 'Professional driving assessments to evaluate your skills.',
};

export default function DrivingAssessmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Driving Assessments</h1>
      <p className="mt-4 text-muted-foreground">
        Get a professional assessment of your driving skills with our certified
        instructors.
      </p>
    </div>
  );
}
