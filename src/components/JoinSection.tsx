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
      <section id="join" className="py-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="glass-strong p-12">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl"
              style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.2)' }}>
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--tx1)' }}>{t.join.successTitle}</h3>
            <p className="text-sm" style={{ color: 'var(--tx2)' }}>{t.join.successDesc}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="py-24 px-6">
      {/* Orb */}
      <div className="pointer-events-none absolute left-1/4 w-80 h-80 rounded-full blur-[100px] opacity-8"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="max-w-5xl mx-auto relative">
        <div className="glass-strong rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — dark panel */}
            <div className="relative p-10 overflow-hidden noise"
              style={{ background: 'radial-gradient(ellipse 120% 100% at 0% 100%, #2e1065 0%, #09090b 70%)' }}>
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

              <div className="relative z-10">
                <p className="overline mb-6" style={{ color: '#a78bfa' }}>{t.join.label}</p>
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight whitespace-pre-line">
                  {t.join.leftTitle}
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {t.join.leftSub}
                </p>

                <div className="space-y-5">
                  {t.join.benefits.map(item => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{item.title}</p>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-xs italic" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    {t.join.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <form action={handleSubmit} className="p-10 space-y-5" style={{ background: 'var(--glass-bg-strong)' }}>
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--tx1)' }}>{t.join.formTitle}</h3>
                <p className="text-sm" style={{ color: 'var(--tx3)' }}>{t.join.formSub}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>{t.join.name} *</label>
                  <input name="name" required placeholder={t.join.namePh} className="glass-input" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>{t.join.role} *</label>
                  <input name="role" required placeholder={t.join.rolePh} className="glass-input" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>{t.join.linkedin} *</label>
                <input name="linkedin_url" type="url" required placeholder={t.join.linkedinPh} className="glass-input" />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>{t.join.bio} *</label>
                <textarea name="description" required rows={3} placeholder={t.join.bioPh}
                  className="glass-input resize-none" />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>
                  {t.join.skills} <span style={{ color: 'var(--tx3)', fontWeight: 400 }}>{t.join.skillsNote}</span>
                </label>
                <input name="services" placeholder={t.join.skillsPh} className="glass-input" />
              </div>

              {result?.error && (
                <p className="text-red-500 text-sm px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  {result.error}
                </p>
              )}

              <button type="submit" disabled={isPending} className="btn-ac w-full py-3.5 text-sm">
                {isPending ? t.join.submitting : t.join.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
