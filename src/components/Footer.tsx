'use client'

import { useLang } from '@/lib/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="px-5 pb-10 pt-8" style={{ borderTop: '1px solid var(--divider)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Status bar — top */}
        <div
          className="flex items-center gap-2 mb-6 pb-6 flex-wrap"
          style={{ borderBottom: '1px solid var(--divider)' }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(5,150,105,0.07)',
              border: '1px solid rgba(5,150,105,0.18)',
            }}
          >
            <span className="status-dot" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px', color: '#059669', letterSpacing: '0.06em' }}>
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '10px',
              color: 'var(--tx3)',
              letterSpacing: '0.04em',
            }}
          >
            {/* Build hash — a nerd detail */}
            build #b44a6b0
          </span>
        </div>

        {/* Main footer row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #6d28d9, #9333ea)',
                boxShadow: '0 2px 10px rgba(109,40,217,0.35)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>K</span>
            </div>
            <div>
              <div className="flex items-baseline gap-0.5">
                <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 600, color: 'var(--tx1)', letterSpacing: '-0.02em' }}>kviz</span>
                <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 400, color: 'var(--tx3)' }}>.team</span>
              </div>
              <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px', color: 'var(--tx3)', letterSpacing: '0.04em', marginTop: '1px' }}>
                Praha & remote · IT freelancers
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            {[
              { href: 'https://martinpohl.cz', label: 'martinpohl.cz', external: true },
              { href: 'mailto:m@pohl.uk',      label: 'm@pohl.uk',     external: false },
              { href: 'https://www.linkedin.com/in/martinp0/', label: 'LinkedIn', external: true },
            ].map(l => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '11px', color: 'var(--tx3)', letterSpacing: '0.02em', transition: 'color 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ac)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--tx3)' }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px', color: 'var(--tx3)', letterSpacing: '0.04em' }}>
            {t.footer.copy(new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  )
}
