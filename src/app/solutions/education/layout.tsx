import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupAgent - Education Solution',
  description: 'AI-powered education solution to enhance learning experiences and improve educational outcomes',
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 