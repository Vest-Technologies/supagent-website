import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupAgent - HR Support Solution',
  description: 'AI-powered HR support solution to streamline HR processes and enhance employee experience',
};

export default function HRSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 