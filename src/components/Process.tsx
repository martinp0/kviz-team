'use client'

import { useLang } from '@/lib/LangContext'

const TIME_BADGES = ['< 24h', '< 3d', '< 1w']
const STEP_COLORS = ['#7c3aed', '#2563eb', '#059669']

export default function Process() {
  const { t } = useLang()

  return (
    <section id="process" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="overline mb-4">{t.process.label}</p>
          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(32px, 5.5vw, 60px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--tx1)',
            }}
          >
            {t.process.titleMain}<br />
            <span className="grad-text">{t.process.titleAccent}</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {t.process.steps.map((step, i) => (
            <div
              key={step.num}
              className="relative grid grid-cols-[64px_1fr] md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-start py-8 group"
              style={{ borderTop: i === 0 ? '1px solid var(--divider)' : undefined, borderBottom: '1px solid var(--divider)' }}
            >
              {/* Step number */}
              <div className="flex flex-col items-start">
                <span
                  className="font-mono font-bold"
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'var(--tx3)',
                    transition: 'color 0.2s',
                  }}
                  data-num={step.num}
                >
                  {step.num}
                </span>
                <div
                  className="mt-2 h-0.5 w-8"
                  style={{
                    background: `linear-gradient(90deg, ${STEP_COLORS[i]}, transparent)`,
                    transition: 'width 0.3s',
                  }}
                />
              </div>

              {/* Content */}
              <div className="pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: 'var(--tx1)', letterSpacing: '-0.02em' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed max-w-lg" style={{ color: 'var(--tx2)' }}>
                  {step.desc}
                </p>
              </div>

              {/* Time badge — desktop */}
              <div className="hidden md:flex items-start pt-1">
                <span
                  className="px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    background: `${STEP_COLORS[i]}12`,
                    color: STEP_COLORS[i],
                    border: `1px solid ${STEP_COLORS[i]}25`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {TIME_BADGES[i]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center gap-3">
          <span className="status-dot" />
          <p className="text-[13px]" style={{ color: 'var(--tx2)' }}>
            {t.process.avgTime}{' '}
            <strong style={{ color: 'var(--tx1)', fontWeight: 600 }}>{t.process.avgTimeValue}</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
