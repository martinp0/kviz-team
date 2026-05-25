'use client'

import { useLang } from '@/lib/LangContext'

const CARD_STYLES = [
  { span: 'md:col-span-7', dark: false, accentColor: '#7c3aed', iconBg: 'rgba(124,58,237,0.1)', tagBg: 'rgba(124,58,237,0.08)', tagColor: '#7c3aed', tagBorder: 'rgba(124,58,237,0.2)' },
  { span: 'md:col-span-5', dark: true,  accentColor: '#a78bfa', iconBg: 'rgba(255,255,255,0.12)', tagBg: 'rgba(255,255,255,0.1)', tagColor: 'rgba(255,255,255,0.8)', tagBorder: 'rgba(255,255,255,0.15)' },
  { span: 'md:col-span-5', dark: false, accentColor: '#059669', iconBg: 'rgba(5,150,105,0.1)',   tagBg: 'rgba(5,150,105,0.08)', tagColor: '#059669', tagBorder: 'rgba(5,150,105,0.2)' },
  { span: 'md:col-span-7', dark: false, accentColor: '#d97706', iconBg: 'rgba(217,119,6,0.1)',   tagBg: 'rgba(217,119,6,0.08)', tagColor: '#d97706', tagBorder: 'rgba(217,119,6,0.2)' },
]

export default function ServicesSection() {
  const { t } = useLang()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="py-24 px-6" style={{ background: 'var(--section-alt)' }}>
      {/* Orb */}
      <div className="pointer-events-none absolute right-0 w-80 h-80 rounded-full blur-[100px] opacity-8"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <p className="overline mb-3">{t.services.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--tx1)' }}>
            {t.services.titleMain}<br />
            <span className="grad-text">{t.services.titleAccent}</span>
          </h2>
          <p className="max-w-md mx-auto leading-relaxed" style={{ color: 'var(--tx2)' }}>
            {t.services.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {t.services.cards.map((card, i) => {
            const s = CARD_STYLES[i]
            return (
              <div
                key={card.title}
                className={`${s.span} relative overflow-hidden rounded-[1.25rem] p-8 transition-all duration-250 hover:scale-[1.01]`}
                style={s.dark ? {
                  background: 'linear-gradient(135deg, #1e1b4b 0%, #1a1535 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
                } : {
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                }}>
                {/* Decorative glow */}
                <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${s.accentColor}30, transparent)`, filter: 'blur(24px)' }} />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                    style={{ background: s.iconBg, border: `1px solid ${s.accentColor}20` }}>
                    {card.emoji}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: s.dark ? '#ffffff' : 'var(--tx1)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: s.dark ? 'rgba(255,255,255,0.55)' : 'var(--tx2)' }}>
                    {card.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: s.tagBg, color: s.tagColor, border: `1px solid ${s.tagBorder}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-5 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            border: '1px solid var(--ac-border)',
            boxShadow: '0 4px 24px var(--ac-glow)',
          }}>
          <div>
            <p className="font-bold" style={{ color: 'var(--tx1)' }}>{t.services.ctaTitle}</p>
            <p className="text-sm mt-0.5" style={{ color: 'var(--tx2)' }}>{t.services.ctaSub}</p>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-ac flex-shrink-0 px-6 py-2.5 text-sm">
            {t.services.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  )
}
