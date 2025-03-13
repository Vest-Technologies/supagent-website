import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupAgent - Customer Support Solution',
  description: 'Automated customer support solution powered by AI to enhance customer satisfaction and reduce response times',
};

export default function CustomerSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 