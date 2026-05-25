'use client'

import { useLang } from '@/lib/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="py-10 px-6" style={{ borderTop: '1px solid var(--divider)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 2px 12px rgba(124,58,237,0.35)' }}>
            K
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--tx1)' }}>Kvíz IT Tým</p>
            <p className="text-xs" style={{ color: 'var(--tx3)' }}>{t.footer.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs" style={{ color: 'var(--tx3)' }}>
          <a href="https://martinpohl.cz" target="_blank" rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--ac)]">martinpohl.cz</a>
          <a href="mailto:m@pohl.uk"
            className="transition-colors hover:text-[var(--ac)]">m@pohl.uk</a>
          <a href="https://www.linkedin.com/in/martinp0/" target="_blank" rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--ac)]">LinkedIn</a>
        </div>

        <p className="text-xs" style={{ color: 'var(--tx3)' }}>
          {t.footer.copy(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  )
}
