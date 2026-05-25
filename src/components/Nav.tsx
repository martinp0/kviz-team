'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/LangContext'

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Nav() {
  const { lang, t, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
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
    { label: t.nav.team,     id: 'team' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.process,  id: 'process' },
    { label: t.nav.join,     id: 'join' },
  ]

  const onDark = !scrolled && !mobileOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? 'glass-nav' : ''}`}
      style={{ '--nav-fg': onDark ? 'rgba(255,255,255,0.65)' : 'var(--tx2)' } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 flex-shrink-0 group"
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #6d28d9, #9333ea)',
              boxShadow: '0 2px 10px rgba(109,40,217,0.4)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '10px',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.03em',
              }}
            >K</span>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '13px',
                fontWeight: 600,
                color: onDark ? 'rgba(255,255,255,0.9)' : 'var(--tx1)',
                letterSpacing: '-0.02em',
              }}
            >kviz</span>
            <span
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '13px',
                fontWeight: 400,
                color: onDark ? 'rgba(255,255,255,0.38)' : 'var(--tx3)',
              }}
            >.team</span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-150"
              style={{ color: onDark ? 'rgba(255,255,255,0.55)' : 'var(--tx2)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = onDark ? '#fff' : 'var(--tx1)'
                el.style.background = onDark ? 'rgba(255,255,255,0.08)' : 'var(--ac-light)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = onDark ? 'rgba(255,255,255,0.55)' : 'var(--tx2)'
                el.style.background = 'transparent'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          {/* Lang */}
          <button
            onClick={() => setLang(lang === 'cs' ? 'en' : 'cs')}
            className="px-2.5 py-1.5 rounded-md text-[11px] font-mono font-semibold transition-all"
            style={{
              color: onDark ? 'rgba(255,255,255,0.55)' : 'var(--tx3)',
              border: `1px solid ${onDark ? 'rgba(255,255,255,0.1)' : 'var(--divider)'}`,
              letterSpacing: '0.04em',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = onDark ? '#fff' : 'var(--ac)'
              el.style.borderColor = onDark ? 'rgba(255,255,255,0.22)' : 'var(--ac-border)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = onDark ? 'rgba(255,255,255,0.55)' : 'var(--tx3)'
              el.style.borderColor = onDark ? 'rgba(255,255,255,0.1)' : 'var(--divider)'
            }}
          >
            {lang === 'cs' ? 'EN' : 'CS'}
          </button>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{
              color: onDark ? 'rgba(255,255,255,0.55)' : 'var(--tx3)',
              border: `1px solid ${onDark ? 'rgba(255,255,255,0.1)' : 'var(--divider)'}`,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = onDark ? '#fff' : 'var(--tx1)'
              el.style.borderColor = onDark ? 'rgba(255,255,255,0.22)' : 'var(--glass-border-accent)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = onDark ? 'rgba(255,255,255,0.55)' : 'var(--tx3)'
              el.style.borderColor = onDark ? 'rgba(255,255,255,0.1)' : 'var(--divider)'
            }}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:flex btn-ac px-4 py-2 text-[13px] ml-1"
          >
            {t.nav.cta}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{
              color: onDark ? 'rgba(255,255,255,0.7)' : 'var(--tx2)',
              border: `1px solid ${onDark ? 'rgba(255,255,255,0.1)' : 'var(--divider)'}`,
            }}
            aria-label="Menu"
          >
            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden px-5 pb-4 pt-2 space-y-0.5" style={{ borderTop: '1px solid var(--divider)' }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all"
              style={{ color: 'var(--tx2)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ac-light)'; (e.currentTarget as HTMLElement).style.color = 'var(--ac)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--tx2)' }}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button onClick={() => scrollTo('contact')} className="btn-ac w-full py-2.5 text-[13px]">
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
