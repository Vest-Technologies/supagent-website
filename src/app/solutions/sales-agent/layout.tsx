import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupAgent - Sales Agent Solution',
  description: 'AI-powered sales agent solution to boost conversion rates and streamline your sales processes',
};

export default function SalesAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 