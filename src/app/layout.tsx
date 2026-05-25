import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeScript } from './ThemeScript'
import { Providers } from './Providers'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kvíz IT Tým | Freelance IT specialisté',
  description: 'Jsme IT tým z kvízu. QA, DevOps, IT recruitment a Apple MDM specialista. Máme kapacitu na váš projekt.',
  keywords: ['IT freelance', 'QA', 'DevOps', 'Apple MDM', 'IT recruitment', 'Praha'],
  openGraph: {
    title: 'Kvíz IT Tým',
    description: 'Freelance IT specialisté s volnou kapacitou',
    url: 'https://kviz.martinpohl.cz',
    siteName: 'Kvíz IT Tým',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
