import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Channels from '@/components/Channels'
import Solutions from '@/components/Solutions'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'SupAgent - Home',
  description: 'AI-Driven Agent Integrated Support Solution for modern businesses',
}

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Features />
        <Channels />
        <Solutions />
      </main>
    </PageTransition>
  )
} 