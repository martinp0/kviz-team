'use client'

import { useState, useTransition } from 'react'
import { submitMember } from '@/app/actions'
import { useLang } from '@/lib/LangContext'

export default function JoinSection() {
  const { t } = useLang()
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ error?: string; success?: boolean } | null>(null)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      setResult(await submitMember(formData) ?? { success: true })
    })
  }

  if (result?.success) {
    return (
      <section id="join" className="py-28 px-5">
        <div className="max-w-md mx-auto text-center">
          <div className="glass-strong p-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.2)' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="text-[17px] font-semibold mb-2" style={{ color: 'var(--tx1)', letterSpacing: '-0.01em' }}>
              {t.join.successTitle}
            </h3>
            <p className="text-[13px]" style={{ color: 'var(--tx2)' }}>{t.join.successDesc}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-shadow-lg)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — dark panel */}
            <div
              className="relative p-8 sm:p-10 overflow-hidden noise"
              style={{ background: 'radial-gradient(ellipse 120% 100% at 0% 100%, #1e1245 0%, #09090b 65%)' }}
            >
              <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: '250px', height: '250px',
                  background: 'radial-gradient(circle, rgba(109,40,217,0.18), transparent)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Subtle grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative z-10">
                <p className="overline mb-6" style={{ color: 'rgba(167,139,250,0.7)' }}>{t.join.label}</p>
                <h2
                  className="font-extrabold text-white mb-5 leading-tight whitespace-pre-line"
                  style={{
                    fontSize: 'clamp(24px, 3.5vw, 36px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t.join.leftTitle}
                </h2>
                <p className="text-[13px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  {t.join.leftSub}
                </p>

                <div className="space-y-4">
                  {t.join.benefits.map(item => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-semibold">{item.title}</p>
                        <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-8 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <p
                    className="text-[12px] italic"
                    style={{ color: 'rgba(255,255,255,0.18)', fontStyle: 'italic' }}
                  >
                    {t.join.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <form
              action={handleSubmit}
              className="p-8 sm:p-10 space-y-4"
              style={{ background: 'var(--glass-bg-strong)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)' }}
            >
              <div className="mb-6">
                <h3
                  className="text-[18px] font-semibold mb-1"
                  style={{ color: 'var(--tx1)', letterSpacing: '-0.02em' }}
                >
                  {t.join.formTitle}
                </h3>
                <p className="text-[12px]" style={{ color: 'var(--tx3)' }}>{t.join.formSub}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                    {t.join.name.toUpperCase()} *
                  </label>
                  <input name="name" required placeholder={t.join.namePh} className="glass-input" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                    {t.join.role.toUpperCase()} *
                  </label>
                  <input name="role" required placeholder={t.join.rolePh} className="glass-input" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                  {t.join.linkedin.toUpperCase()} *
                </label>
                <input name="linkedin_url" type="url" required placeholder={t.join.linkedinPh} className="glass-input" />
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                  {t.join.bio.toUpperCase()} *
                </label>
                <textarea name="description" required rows={3} placeholder={t.join.bioPh} className="glass-input resize-none" />
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                  {t.join.skills.toUpperCase()}{' '}
                  <span style={{ color: 'var(--tx3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                    {t.join.skillsNote}
                  </span>
                </label>
                <input name="services" placeholder={t.join.skillsPh} className="glass-input" />
              </div>

              {result?.error && (
                <p
                  className="text-[12px] px-4 py-3 rounded-lg"
                  style={{ color: '#ef4444', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.15)' }}
                >
                  {result.error}
                </p>
              )}

              <button type="submit" disabled={isPending} className="btn-ac w-full py-3 text-[13px] mt-2">
                {isPending ? t.join.submitting : t.join.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
