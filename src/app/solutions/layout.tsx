import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupAgent - Solutions',
  description: 'Explore our comprehensive AI-driven solutions for various business needs',
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 