'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/LangContext'

export default function Nav() {
  const { lang, t, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = isDark ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setIsDark(!isDark)
  }

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { label: t.nav.team, id: 'team' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.join, id: 'join' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? 'glass-nav' : ''}`}>
      <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 2px 12px rgba(124,58,237,0.4)' }}>
            K
          </div>
          <span className="font-semibold text-sm" style={{ color: scrolled || mobileOpen ? 'var(--tx1)' : 'rgba(255,255,255,0.9)' }}>
            Kvíz IT Tým
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="px-4 py-2 text-sm rounded-xl transition-all duration-150 font-medium"
              style={{ color: scrolled ? 'var(--tx2)' : 'rgba(255,255,255,0.65)' }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.color = scrolled ? 'var(--tx1)' : '#fff'
                el.style.background = scrolled ? 'var(--ac-light)' : 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.color = scrolled ? 'var(--tx2)' : 'rgba(255,255,255,0.65)'
                el.style.background = 'transparent'
              }}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <button onClick={() => setLang(lang === 'cs' ? 'en' : 'cs')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150"
            style={{
              color: scrolled || mobileOpen ? 'var(--ac)' : 'rgba(255,255,255,0.8)',
              background: scrolled || mobileOpen ? 'var(--ac-light)' : 'rgba(255,255,255,0.1)',
              border: `1px solid ${scrolled || mobileOpen ? 'var(--ac-border)' : 'rgba(255,255,255,0.15)'}`,
            }}>
            {lang === 'cs' ? 'EN' : 'CS'}
          </button>

          {/* Theme toggle */}
          <button onClick={toggleTheme}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-base transition-all"
            style={{
              background: scrolled || mobileOpen ? 'var(--ac-light)' : 'rgba(255,255,255,0.1)',
              border: `1px solid ${scrolled || mobileOpen ? 'var(--ac-border)' : 'rgba(255,255,255,0.15)'}`,
            }}
            aria-label="Toggle theme">
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Desktop CTA */}
          <button onClick={() => scrollTo('contact')}
            className="hidden sm:flex btn-ac px-5 py-2 text-sm">
            {t.nav.cta}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center transition-all"
            style={{
              background: scrolled || mobileOpen ? 'var(--ac-light)' : 'rgba(255,255,255,0.1)',
              border: `1px solid ${scrolled || mobileOpen ? 'var(--ac-border)' : 'rgba(255,255,255,0.15)'}`,
              color: scrolled || mobileOpen ? 'var(--tx1)' : '#fff',
            }}
            aria-label="Menu">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t px-5 py-4 space-y-1" style={{ borderColor: 'var(--divider)' }}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
              style={{ color: 'var(--tx1)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ac-light)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button onClick={() => scrollTo('contact')} className="btn-ac w-full py-3 text-sm">
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
