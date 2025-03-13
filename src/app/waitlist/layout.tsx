import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Join the SupAgent Waiting List',
  description: 'Be among the first to experience our AI-powered support solution when it launches',
}

export default function WaitlistLayout({ children }: { children: ReactNode }) {
  return children
} 