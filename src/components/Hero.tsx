'use client'

import { useLang } from '@/lib/LangContext'

const TICKER = [
  '🍎 Apple MDM', '⚙️ Kubernetes', '🔍 QA Testing', '🤝 IT Recruitment',
  '📱 Jamf Pro', '🏗️ Terraform', '🚀 CI/CD', '🔐 SSO & Identity',
  '☁️ AWS / GCP', '🐳 Docker', '🎯 Cypress', '📊 Playwright',
]

export default function Hero() {
  const { t } = useLang()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden noise"
      style={{ background: 'radial-gradient(ellipse 110% 75% at 50% -10%, #2e1065 0%, #09090b 58%)' }}>

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[130px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c084fc, transparent)' }} />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-2xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-10 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium text-violet-300"
          style={{
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.3)',
            backdropFilter: 'blur(12px)',
          }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="font-bold tracking-tight leading-[1.0] text-white mb-6"
          style={{ fontSize: 'clamp(50px, 9vw, 96px)' }}>
          {t.hero.h1[0]}<br />
          <span className="grad-text italic">{t.hero.h1[1]}</span><br />
          {t.hero.h1[2]}
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed mb-10">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
          <button
            onClick={() => scrollTo('contact')}
            className="btn-ac group px-8 py-4 text-sm"
            style={{ boxShadow: '0 0 40px rgba(124,58,237,0.45)' }}>
            {t.hero.cta1}
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          <button
            onClick={() => scrollTo('team')}
            className="btn-ghost px-8 py-4 text-sm text-zinc-300"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            {t.hero.cta2}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-16">
          {t.hero.stats.map((s) => (
            <div key={s.label}
              className="rounded-2xl p-4 text-center"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
              }}>
              <div className="text-2xl font-bold grad-text">{s.value}</div>
              <div className="text-white/70 text-xs font-medium mt-0.5">{s.label}</div>
              <div className="text-zinc-600 text-[10px] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 pb-20 overflow-hidden">
        <div className="flex gap-3 whitespace-nowrap w-max"
          style={{ animation: 'marquee 30s linear infinite' }}>
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-zinc-400 flex-shrink-0"
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.04)',
              }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--page-bg), transparent)' }} />
    </section>
  )
}
