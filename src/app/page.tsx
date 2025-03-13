import { Metadata } from 'next'
import Hero from '@/components/Hero'
import IntegrationChannels from '@/components/IntegrationChannels'
import Solutions from '@/components/Solutions'
import PageTransition from '@/components/PageTransition'
import PageShowcase from '@/components/PageShowcase'
import SetupSteps from '@/components/SetupSteps'

export const metadata: Metadata = {
  title: 'SupAgent - AI-Driven Support Solution - Coming Soon',
  description: 'AI-Driven Agent Integrated Support Solution for modern businesses - Join our waiting list',
}

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Solutions />
        <PageShowcase />
        <IntegrationChannels />
        <SetupSteps />
      </main>
    </PageTransition>
  )
} 