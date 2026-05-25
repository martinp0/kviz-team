'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-zinc-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#5b21b6] flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <span className="font-semibold text-[#0a0a0a] text-sm">Kvíz IT Tým</span>
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
              className="px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="ml-2 px-5 py-2 text-sm font-semibold bg-[#5b21b6] text-white rounded-full hover:bg-[#4c1d95] transition-colors shadow-md shadow-violet-200/50"
          >
            Napište nám
          </button>
        </div>
      </div>
    </nav>
  )
}
