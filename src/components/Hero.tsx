'use client'

import { useLang } from '@/lib/LangContext'

const TERMINAL_LINES = [
  { type: 'meta',   text: 'bash-5.2 — kviz@infra ~ %' },
  { type: 'cmd',    text: 'jamf enroll --zero-touch --mdm=prod' },
  { type: 'ok',     text: '✓  847 devices  ·  0 failures' },
  { type: 'cmd',    text: 'kubectl get nodes -A' },
  { type: 'ok',     text: '3/3  Ready  v1.32.1  22d' },
  { type: 'cmd',    text: 'terraform apply --auto-approve' },
  { type: 'ok',     text: 'Apply complete!  0 destroyed.' },
  { type: 'cursor', text: '' },
]

const METRICS = [
  { label: 'CPU',    val: 82,  unit: '%', color: '#f59e0b', w: 82 },
  { label: 'MEM',    val: 61,  unit: '%', color: '#10b981', w: 61 },
  { label: 'NET I/O',val: 340, unit: 'MB/s', color: '#60a5fa', w: 68 },
]

function TerminalCard() {
  return (
    <div
      className="terminal-block w-full"
      style={{ boxShadow: '0 20px 56px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)' }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ background: 'rgba(255,255,255,0.035)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full cursor-default" style={{ background: '#ff5f57' }} />
        <span className="w-2.5 h-2.5 rounded-full cursor-default" style={{ background: '#febc2e' }} />
        <span className="w-2.5 h-2.5 rounded-full cursor-default" style={{ background: '#28c840' }} />
        <span
          className="ml-auto"
          style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.02em' }}
        >
          zsh — 80×24
        </span>
      </div>

      {/* Lines */}
      <div className="p-4 space-y-1.5" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '11px' }}>
        {TERMINAL_LINES.map((l, i) => (
          <div key={i} style={{ lineHeight: '1.5' }}>
            {l.type === 'meta' && (
              <span style={{ color: 'rgba(255,255,255,0.22)' }}>{l.text}</span>
            )}
            {l.type === 'cmd' && (
              <span>
                <span style={{ color: '#a78bfa', userSelect: 'none' }}>❯ </span>
                <span style={{ color: 'rgba(255,255,255,0.82)' }}>{l.text}</span>
              </span>
            )}
            {l.type === 'ok' && (
              <span style={{ color: '#34d399', paddingLeft: '1rem', display: 'block' }}>{l.text}</span>
            )}
            {l.type === 'cursor' && (
              <span>
                <span style={{ color: '#a78bfa', userSelect: 'none' }}>❯ </span>
                <span style={{ color: '#a78bfa', animation: 'cursor-blink 1.1s step-end infinite' }}>▋</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricsCard() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{
        background: 'rgba(5,5,14,0.88)',
        border: '1px solid rgba(255,255,255,0.07)',
        fontFamily: 'var(--font-geist-mono)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
      >
        <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          SYSTEM MONITOR
        </span>
        <div className="flex items-center gap-1.5">
          <span className="status-dot" />
          <span style={{ fontSize: '9px', color: '#10b981', letterSpacing: '0.06em' }}>LIVE</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="p-4 space-y-3">
        {METRICS.map(m => (
          <div key={m.label}>
            <div className="flex items-center justify-between mb-1">
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)' }}>{m.label}</span>
              <span style={{ fontSize: '10px', color: m.color }}>{m.val} {m.unit}</span>
            </div>
            <div style={{ height: '3px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%', width: `${m.w}%`,
                  background: `linear-gradient(90deg, ${m.color}90, ${m.color})`,
                  borderRadius: '2px',
                  animation: 'bar-fill 1.2s ease forwards',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer row */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}
      >
        <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)' }}>UPTIME</span>
        <span style={{ fontSize: '10px', color: '#10b981' }}>847d 14h 32m</span>
      </div>
    </div>
  )
}

const TICKER = [
  'Apple MDM', 'Kubernetes', 'QA Testing', 'IT Recruitment',
  'Jamf Pro', 'Terraform', 'CI/CD', 'SSO & Identity',
  'AWS / GCP', 'Docker', 'Cypress', 'Playwright', 'Ansible', 'Helm',
]

export default function Hero() {
  const { t } = useLang()
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      className="relative overflow-hidden noise"
      style={{
        background: 'radial-gradient(ellipse 120% 80% at 60% -15%, #1e1245 0%, #09090b 55%)',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '55vw', height: '55vw', maxWidth: 700, maxHeight: 700,
          top: '-15%', right: '-5%',
          background: 'radial-gradient(circle, rgba(109,40,217,0.14), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '35vw', height: '35vw', maxWidth: 450, maxHeight: 450,
          bottom: '5%', left: '-8%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-6xl mx-auto w-full px-5 pt-28 pb-8">
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-[1fr_310px] gap-12 xl:gap-16 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full"
              style={{
                background: 'rgba(109,40,217,0.14)',
                border: '1px solid rgba(167,139,250,0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="status-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '11px',
                  color: '#c4b5fd',
                  letterSpacing: '0.04em',
                }}
              >
                {t.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold tracking-tight text-white"
              style={{
                fontSize: 'clamp(52px, 8.5vw, 96px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              {t.hero.h1[0]}<br />
              <span className="grad-text italic">{t.hero.h1[1]}</span><br />
              {t.hero.h1[2]}
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-[480px]"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {t.hero.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-ac px-6 py-3 text-[13px]"
                style={{ boxShadow: '0 0 32px rgba(109,40,217,0.5), inset 0 1px 0 rgba(255,255,255,0.18)' }}
              >
                {t.hero.cta1}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
              <button
                onClick={() => scrollTo('team')}
                className="btn-ghost px-6 py-3 text-[13px]"
                style={{ color: 'rgba(255,255,255,0.65)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {t.hero.cta2}
              </button>
            </div>

            {/* Stats — mobile/tablet */}
            <div className="xl:hidden grid grid-cols-3 gap-2 max-w-xs">
              {t.hero.stats.map(s => (
                <div
                  key={s.label}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="font-bold grad-text"
                    style={{ fontSize: 'clamp(18px,4vw,24px)', letterSpacing: '-0.02em' }}
                  >{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '2px' }}>{s.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — desktop only */}
          <div className="hidden xl:flex flex-col gap-3">
            <TerminalCard />
            <MetricsCard />

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-2">
              {t.hero.stats.map(s => (
                <div
                  key={s.label}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="font-bold grad-text"
                    style={{ fontSize: '20px', letterSpacing: '-0.02em' }}
                  >{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', marginTop: '2px', fontFamily: 'var(--font-geist-mono)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden pt-6 pb-4">
          <div
            className="flex gap-2 whitespace-nowrap w-max"
            style={{ animation: 'marquee 35s linear infinite' }}
          >
            {[...TICKER, ...TICKER].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.28)',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  letterSpacing: '0.02em',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(7,7,15,0.6), transparent)' }}
      />
    </section>
  )
}
