'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
          <span className="font-semibold text-[#0f0f0f] text-sm tracking-tight">Kvíz IT Tým</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Tým', id: 'team' },
            { label: 'Služby', id: 'services' },
            { label: 'Přidat se', id: 'join' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="ml-2 px-5 py-2 text-sm font-medium bg-[#1e1b4b] text-white rounded-full hover:bg-[#2d2a6e] transition-colors"
          >
            Napište nám
          </button>
        </div>
      </div>
    </nav>
  )
}
