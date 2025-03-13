import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupAgent - Onboarding Buddy Solution',
  description: 'AI-powered onboarding solution to streamline employee onboarding and improve new hire experience',
};

export default function OnboardingBuddyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 