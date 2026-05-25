'use client'

import { useLang } from '@/lib/LangContext'

export default function Process() {
  const { t } = useLang()

  return (
    <section id="process" className="py-24 px-6" style={{ background: 'var(--page-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="overline mb-3">{t.process.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--tx1)' }}>
            {t.process.titleMain}<br />
            <span className="grad-text">{t.process.titleAccent}</span>
          </h2>
          <p className="max-w-sm mx-auto leading-relaxed" style={{ color: 'var(--tx2)' }}>
            {t.process.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px"
            style={{ background: 'linear-gradient(to right, rgba(124,58,237,0.3), rgba(37,99,235,0.3), rgba(5,150,105,0.3))' }} />

          {t.process.steps.map((step) => (
            <div key={step.num} className="glass p-8 relative">
              {/* Number badge */}
              <div className="text-xs font-bold mb-5 inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                  style={{ background: step.color, boxShadow: `0 4px 12px ${step.color}40` }}>
                  {parseInt(step.num)}
                </span>
                <span style={{ color: step.color }}>{step.num}</span>
              </div>

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: step.bg }}>
                {step.icon}
              </div>

              <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--tx1)' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--tx2)' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm" style={{ color: 'var(--tx3)' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse flex-shrink-0" />
          {t.process.avgTime}&nbsp;
          <strong style={{ color: 'var(--tx1)' }}>{t.process.avgTimeValue}</strong>
        </div>
      </div>
    </section>
  )
}
