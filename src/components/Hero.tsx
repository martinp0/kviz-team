'use client'

import { useLang } from '@/lib/LangContext'

const TICKER = [
  '🍎 Apple MDM', '⚙️ Kubernetes', '🔍 QA Testing', '🤝 IT Recruitment',
  '📱 Jamf Pro', '🏗️ Terraform', '🚀 CI/CD', '🔐 SSO & Identity',
  '☁️ AWS / GCP', '🐳 Docker', '🎯 Cypress', '📊 Playwright',
]

const TERMINAL_LINES = [
  { type: 'meta', text: 'Last login: Mon May 26 09:12 on ttys001' },
  { type: 'cmd',  text: 'jamf enroll --zero-touch' },
  { type: 'ok',   text: '✓  MDM enrollment complete' },
  { type: 'cmd',  text: 'kubectl get nodes' },
  { type: 'ok',   text: '3/3 nodes   Ready   v1.32' },
  { type: 'cmd',  text: 'terraform plan' },
  { type: 'ok',   text: 'Plan: 0 to add, 0 to destroy.' },
  { type: 'cursor', text: '' },
]

function TerminalCard() {
  return (
    <div className="rounded-2xl overflow-hidden w-full max-w-xs"
      style={{
        background: 'rgba(10,8,18,0.82)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
      }}>
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3"
        style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
        <span className="ml-auto text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.22)' }}>
          bash — 80×24
        </span>
      </div>
      {/* Lines */}
      <div className="p-4 font-mono text-xs space-y-1.5">
        {TERMINAL_LINES.map((l, i) => (
          <div key={i}>
            {l.type === 'meta'   && <span style={{ color: 'rgba(255,255,255,0.28)' }}>{l.text}</span>}
            {l.type === 'cmd'    && <span><span style={{ color: '#a78bfa' }}>$ </span><span style={{ color: 'rgba(255,255,255,0.85)' }}>{l.text}</span></span>}
            {l.type === 'ok'     && <span style={{ color: '#34d399', paddingLeft: '0.75rem', display: 'block' }}>{l.text}</span>}
            {l.type === 'cursor' && <span><span style={{ color: '#a78bfa' }}>$ </span><span className="animate-pulse" style={{ color: '#a78bfa' }}>▋</span></span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden noise"
      style={{ background: 'radial-gradient(ellipse 110% 75% at 50% -10%, #2e1065 0%, #09090b 60%)' }}>

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-18 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="absolute top-1/4 right-1/5 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c084fc, transparent)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-32 pb-10">

        {/* Main grid: text | terminal */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-10 xl:gap-16 items-center">

          {/* Left: text */}
          <div className="text-center xl:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-xs font-medium text-violet-300"
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', backdropFilter: 'blur(12px)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse" />
              {t.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="font-bold tracking-tight leading-[1.0] text-white mb-5"
              style={{ fontSize: 'clamp(44px, 8vw, 88px)' }}>
              {t.hero.h1[0]}<br />
              <span className="grad-text italic">{t.hero.h1[1]}</span><br />
              {t.hero.h1[2]}
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-lg mx-auto xl:mx-0 leading-relaxed mb-8">
              {t.hero.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center xl:justify-start">
              <button onClick={() => scrollTo('contact')}
                className="btn-ac group px-7 py-3.5 text-sm"
                style={{ boxShadow: '0 0 40px rgba(124,58,237,0.45)' }}>
                {t.hero.cta1}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
              <button onClick={() => scrollTo('team')}
                className="btn-ghost px-7 py-3.5 text-sm text-zinc-300"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                {t.hero.cta2}
              </button>
            </div>
          </div>

          {/* Right: terminal (xl only) */}
          <div className="hidden xl:flex flex-col gap-4">
            <TerminalCard />

            {/* Stats – desktop in right column */}
            <div className="grid grid-cols-3 gap-2">
              {t.hero.stats.map(s => (
                <div key={s.label} className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
                  <div className="text-xl font-bold grad-text">{s.value}</div>
                  <div className="text-white/65 text-[11px] font-medium mt-0.5 leading-tight">{s.label}</div>
                  <div className="text-zinc-600 text-[10px] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats – mobile/tablet only */}
        <div className="xl:hidden grid grid-cols-3 gap-3 max-w-sm sm:max-w-md mx-auto mt-10 mb-8">
          {t.hero.stats.map(s => (
            <div key={s.label} className="rounded-2xl p-4 text-center"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
              <div className="text-xl sm:text-2xl font-bold grad-text">{s.value}</div>
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
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.04)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Fade to canvas background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, transparent, transparent)' }} />
    </section>
  )
}
