'use client'

import { useLang } from '@/lib/LangContext'

const SLUGS = [
  '01_direct_line',
  '02_no_process_tax',
  '03_expert_depth',
  '04_flex_capacity',
]

export default function WhyUs() {
  const { t } = useLang()

  return (
    <section
      className="py-28 px-5 relative overflow-hidden noise"
      style={{ background: 'linear-gradient(160deg, #0a0820 0%, #09090b 60%, #0d0b22 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '60vw', height: '60vw', maxWidth: 700, maxHeight: 700,
          top: '-20%', right: '-10%',
          background: 'radial-gradient(circle, rgba(109,40,217,0.1), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '40vw', height: '40vw', maxWidth: 500, maxHeight: 500,
          bottom: '-10%', left: '-5%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="overline mb-4" style={{ color: 'rgba(167,139,250,0.8)' }}>{t.whyUs.label}</p>
          <h2
            className="font-extrabold tracking-tight text-white"
            style={{
              fontSize: 'clamp(32px, 5.5vw, 60px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            {t.whyUs.titleMain}<br />
            <span className="grad-text">{t.whyUs.titleAccent}</span>
          </h2>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.whyUs.points.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-xl p-6 relative overflow-hidden transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.065)'
                el.style.borderColor = 'rgba(167,139,250,0.22)'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.transform = ''
              }}
            >
              {/* Monospace header */}
              <div
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '9px',
                  color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                # {SLUGS[i]}
              </div>

              <h3 className="text-white font-semibold text-[15px] mb-2" style={{ letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div
          className="mt-12 pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p
            className="font-bold italic text-center"
            style={{
              fontSize: 'clamp(18px, 3vw, 28px)',
              color: 'rgba(255,255,255,0.12)',
              letterSpacing: '-0.01em',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            {t.whyUs.quote}
          </p>
        </div>
      </div>
    </section>
  )
}
