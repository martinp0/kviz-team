'use client'

import { useLang } from '@/lib/LangContext'

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section className="py-24 px-6 relative overflow-hidden noise"
      style={{ background: 'linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)' }}>
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7c3aed, transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="overline mb-3" style={{ color: '#a78bfa' }}>{t.whyUs.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {t.whyUs.titleMain}<br />
            <span className="grad-text">{t.whyUs.titleAccent}</span>
          </h2>
          <p className="max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {t.whyUs.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.whyUs.points.map((p) => (
            <div key={p.title}
              className="p-7 rounded-[1.25rem] transition-all duration-250 hover:scale-[1.01]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(16px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}>
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold italic" style={{ color: 'rgba(255,255,255,0.15)' }}>
            {t.whyUs.quote}
          </p>
        </div>
      </div>
    </section>
  )
}
