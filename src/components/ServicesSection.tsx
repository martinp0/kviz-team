'use client'

import { useLang } from '@/lib/LangContext'

// Visual "proof" content rendered inside each service card
function MdmVisual() {
  const devices = [
    { name: 'mbp-marketing-01', status: 'enrolled', os: 'macOS 15.4' },
    { name: 'ipad-reception-03', status: 'enrolled', os: 'iPadOS 18.4' },
    { name: 'mbp-dev-07',        status: 'enrolling', os: 'macOS 15.4' },
  ]
  return (
    <div
      className="mt-4 rounded-lg overflow-hidden"
      style={{
        background: 'rgba(0,0,0,0.08)',
        border: '1px solid rgba(0,0,0,0.07)',
        fontFamily: 'var(--font-geist-mono)',
        fontSize: '10px',
      }}
    >
      <div
        className="px-3 py-2 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', color: 'rgba(0,0,0,0.35)' }}
      >
        <span style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '9px' }}>MDM Dashboard</span>
        <span style={{ color: '#059669' }}>● 847 enrolled</span>
      </div>
      {devices.map(d => (
        <div key={d.name} className="flex items-center justify-between px-3 py-1.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
          <span style={{ color: 'rgba(0,0,0,0.55)' }}>{d.name}</span>
          <span style={{ color: d.status === 'enrolled' ? '#059669' : '#d97706', fontSize: '9px' }}>
            {d.status === 'enrolled' ? '✓' : '↻'} {d.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function DevOpsVisual() {
  return (
    <div
      className="mt-4 rounded-lg overflow-hidden"
      style={{
        background: 'rgba(0,0,0,0.55)',
        border: '1px solid rgba(255,255,255,0.06)',
        fontFamily: 'var(--font-geist-mono)',
        fontSize: '10px',
      }}
    >
      <div className="px-3 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.22)', fontSize: '9px', letterSpacing: '0.08em' }}>
        kubectl get pods -n production
      </div>
      {[
        { name: 'api-6c9f4d-xk2p1', ready: '1/1', status: 'Running', age: '22d' },
        { name: 'worker-7d8b9e-m3n4',ready: '1/1', status: 'Running', age: '22d' },
        { name: 'nginx-54c6f-p9q2r',  ready: '1/1', status: 'Running', age: '8d'  },
      ].map(p => (
        <div key={p.name} className="grid px-3 py-1" style={{ gridTemplateColumns: '1fr auto auto auto', gap: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>{p.name}</span>
          <span>{p.ready}</span>
          <span style={{ color: '#34d399' }}>{p.status}</span>
          <span>{p.age}</span>
        </div>
      ))}
    </div>
  )
}

function QaVisual() {
  const suites = [
    { name: 'auth flow',      pass: 24, fail: 0, skip: 1 },
    { name: 'checkout',       pass: 18, fail: 2, skip: 0 },
    { name: 'api contract',   pass: 61, fail: 0, skip: 3 },
  ]
  return (
    <div
      className="mt-4 space-y-2"
      style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px' }}
    >
      {suites.map(s => (
        <div key={s.name}>
          <div className="flex items-center justify-between mb-1">
            <span style={{ color: 'rgba(0,0,0,0.45)' }}>{s.name}</span>
            <span style={{ color: s.fail > 0 ? '#ef4444' : '#059669', fontSize: '9px' }}>
              {s.fail > 0 ? `${s.fail} FAIL` : 'PASS'}
            </span>
          </div>
          <div className="flex gap-0.5 h-1.5">
            <div style={{ flex: s.pass, background: '#059669', borderRadius: '2px 0 0 2px', opacity: 0.7 }} />
            {s.fail > 0 && <div style={{ flex: s.fail, background: '#ef4444', opacity: 0.8 }} />}
            {s.skip > 0 && <div style={{ flex: s.skip, background: 'rgba(0,0,0,0.15)', borderRadius: '0 2px 2px 0' }} />}
          </div>
        </div>
      ))}
    </div>
  )
}

function RecruitVisual() {
  const profiles = [
    { initials: 'TN', role: 'Senior DevOps', match: 94 },
    { initials: 'MK', role: 'QA Lead',        match: 89 },
    { initials: 'JV', role: 'Platform Eng',   match: 87 },
  ]
  return (
    <div className="mt-4 space-y-2" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px' }}>
      {profiles.map(p => (
        <div
          key={p.initials}
          className="flex items-center gap-3 px-3 py-2 rounded-lg"
          style={{ background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0"
            style={{ background: 'rgba(217,119,6,0.12)', color: '#d97706', border: '1px solid rgba(217,119,6,0.2)' }}
          >
            {p.initials}
          </div>
          <span style={{ flex: 1, color: 'rgba(0,0,0,0.55)' }}>{p.role}</span>
          <span style={{ color: '#059669' }}>{p.match}% match</span>
        </div>
      ))}
    </div>
  )
}

const CARDS = [
  {
    span: 'md:col-span-7',
    dark: false,
    accent: '#6d28d9',
    tagBg: 'rgba(109,40,217,0.08)',
    tagClr: '#6d28d9',
    tagBrd: 'rgba(109,40,217,0.18)',
    visual: <MdmVisual />,
  },
  {
    span: 'md:col-span-5',
    dark: true,
    accent: '#a78bfa',
    tagBg: 'rgba(255,255,255,0.09)',
    tagClr: 'rgba(255,255,255,0.75)',
    tagBrd: 'rgba(255,255,255,0.12)',
    visual: <DevOpsVisual />,
  },
  {
    span: 'md:col-span-5',
    dark: false,
    accent: '#059669',
    tagBg: 'rgba(5,150,105,0.08)',
    tagClr: '#059669',
    tagBrd: 'rgba(5,150,105,0.2)',
    visual: <QaVisual />,
  },
  {
    span: 'md:col-span-7',
    dark: false,
    accent: '#d97706',
    tagBg: 'rgba(217,119,6,0.08)',
    tagClr: '#d97706',
    tagBrd: 'rgba(217,119,6,0.2)',
    visual: <RecruitVisual />,
  },
]

export default function ServicesSection() {
  const { t } = useLang()
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="overline mb-4">{t.services.label}</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontSize: 'clamp(32px, 5.5vw, 60px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'var(--tx1)',
              }}
            >
              {t.services.titleMain}<br />
              <span className="grad-text">{t.services.titleAccent}</span>
            </h2>
            <p className="max-w-xs leading-relaxed text-sm" style={{ color: 'var(--tx2)' }}>
              {t.services.sub}
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {t.services.cards.map((card, i) => {
            const s = CARDS[i]
            return (
              <div
                key={card.title}
                className={`${s.span} relative overflow-hidden rounded-xl transition-all duration-200 group`}
                style={s.dark ? {
                  background: 'linear-gradient(135deg, #170f3a 0%, #0f0c28 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.35)',
                } : {
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--glass-shadow)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = s.dark
                    ? `inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(${s.dark ? '167,139,250' : '109,40,217'},0.15)`
                    : `var(--glass-shadow-lg)`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = ''
                  el.style.boxShadow = s.dark
                    ? 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.35)'
                    : 'var(--glass-shadow)'
                }}
              >
                {/* Accent corner bloom */}
                <div
                  className="absolute -right-8 -top-8 pointer-events-none"
                  style={{
                    width: '160px', height: '160px',
                    background: `radial-gradient(circle, ${s.accent}30, transparent 70%)`,
                    filter: 'blur(20px)',
                  }}
                />

                <div className="relative z-10 p-6 sm:p-7">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-5"
                    style={{
                      background: s.dark ? 'rgba(255,255,255,0.07)' : `${s.accent}12`,
                      border: `1px solid ${s.dark ? 'rgba(255,255,255,0.1)' : s.accent + '22'}`,
                    }}
                  >
                    {card.emoji}
                  </div>

                  <h3
                    className="font-bold text-base sm:text-lg mb-2 leading-tight"
                    style={{ color: s.dark ? '#fff' : 'var(--tx1)', letterSpacing: '-0.01em' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed mb-4"
                    style={{ color: s.dark ? 'rgba(255,255,255,0.42)' : 'var(--tx2)' }}
                  >
                    {card.desc}
                  </p>

                  {/* Visual proof */}
                  {s.visual}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {card.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-geist-mono)',
                          fontSize: '10px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: s.tagBg,
                          color: s.tagClr,
                          border: `1px solid ${s.tagBrd}`,
                          letterSpacing: '0.01em',
                        }}
                      >
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
        <div
          className="mt-3 px-6 py-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)',
            border: '1px solid var(--glass-border-accent)',
            boxShadow: '0 4px 20px var(--ac-glow)',
          }}
        >
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[14px]" style={{ color: 'var(--tx1)', letterSpacing: '-0.01em' }}>
              {t.services.ctaTitle}
            </p>
            <p className="text-[12px] mt-0.5" style={{ color: 'var(--tx2)' }}>{t.services.ctaSub}</p>
          </div>
          <button onClick={() => scrollTo('contact')} className="btn-ac flex-shrink-0 px-5 py-2.5 text-[13px] w-full sm:w-auto">
            {t.services.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  )
}
