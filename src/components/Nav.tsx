'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-sm'
        : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
            K
          </div>
          <span className={`font-semibold text-sm transition-colors ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
            Kvíz IT Tým
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Tým', id: 'team' },
            { label: 'Služby', id: 'services' },
            { label: 'Přidat se', id: 'join' },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                scrolled ? 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50' : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}>
              {item.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className="ml-2 px-5 py-2 text-sm font-semibold text-white rounded-full transition-all"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 2px 12px rgba(124,58,237,0.35)' }}>
            Napište nám
          </button>
        </div>
      </div>
    </nav>
  )
}
