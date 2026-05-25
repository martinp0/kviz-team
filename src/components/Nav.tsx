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
          ? 'bg-[#08080f]/90 backdrop-blur-md border-b border-[#1e2035]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#00d4ff] font-mono text-xl font-bold">{'{'}</span>
          <span className="text-white font-semibold">kvíz.IT</span>
          <span className="text-[#7c3aed] font-mono text-xl font-bold">{'}'}</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-[#94a3b8]">
          <button
            onClick={() => scrollTo('team')}
            className="hover:text-[#00d4ff] transition-colors"
          >
            Tým
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-[#00d4ff] transition-colors"
          >
            Služby
          </button>
          <button
            onClick={() => scrollTo('join')}
            className="hover:text-[#00d4ff] transition-colors"
          >
            Přidat se
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-1.5 rounded-full border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  )
}
