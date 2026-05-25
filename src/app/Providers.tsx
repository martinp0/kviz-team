'use client'

import { LangProvider } from '@/lib/LangContext'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>
}
