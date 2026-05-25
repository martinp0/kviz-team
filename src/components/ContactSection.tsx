'use client'

import { useState, useTransition } from 'react'
import { submitContact } from '@/app/actions'
import { useLang } from '@/lib/LangContext'

export default function ContactSection() {
  const { t } = useLang()
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ error?: string; success?: boolean } | null>(null)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      setResult(await submitContact(formData) ?? { success: true })
    })
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--section-alt)' }}>
      {/* Orb */}
      <div className="pointer-events-none absolute right-0 w-80 h-80 rounded-full blur-[100px] opacity-10"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="overline mb-4">{t.contact.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: 'var(--tx1)' }}>
              {t.contact.titleMain}<br />
              <span className="grad-text italic">{t.contact.titleAccent}</span>
            </h2>
            <p className="leading-relaxed mb-8 text-lg" style={{ color: 'var(--tx2)' }}>
              {t.contact.sub}
            </p>

            {/* Contact rows */}
            <div className="space-y-3 mb-8">
              <a href="mailto:m@pohl.uk"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all group"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(16px)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--ac-border)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--ac-light)', color: 'var(--ac)' }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'var(--tx3)' }}>{t.contact.emailLabel}</p>
                  <p className="font-semibold text-sm transition-colors group-hover:text-[var(--ac)]" style={{ color: 'var(--tx1)' }}>
                    m@pohl.uk
                  </p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/martinp0/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all group"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(16px)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--ac-border)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--ac-light)', color: 'var(--ac)' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'var(--tx3)' }}>{t.contact.linkedinLabel}</p>
                  <p className="font-semibold text-sm transition-colors group-hover:text-[var(--ac)]" style={{ color: 'var(--tx1)' }}>
                    {t.contact.linkedinName}
                  </p>
                </div>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.2)', color: '#059669' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse" />
              {t.contact.responseTime}
            </div>
          </div>

          {/* Right — form or success */}
          {result?.success ? (
            <div className="glass-strong p-10 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl"
                style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.2)' }}>✓</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--tx1)' }}>{t.contact.successTitle}</h3>
              <p style={{ color: 'var(--tx2)' }}>{t.contact.successDesc}</p>
            </div>
          ) : (
            <form action={handleSubmit} className="glass-strong p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>{t.contact.name}</label>
                  <input name="name" required placeholder={t.contact.namePh} className="glass-input" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>{t.contact.email}</label>
                  <input name="email" type="email" required placeholder={t.contact.emailPh} className="glass-input" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--tx2)' }}>{t.contact.message}</label>
                <textarea name="message" required rows={5} placeholder={t.contact.messagePh}
                  className="glass-input resize-none" />
              </div>

              {result?.error && (
                <p className="text-red-500 text-sm px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  {result.error}
                </p>
              )}

              <button type="submit" disabled={isPending} className="btn-ac w-full py-3.5 text-sm">
                {isPending ? t.contact.submitting : t.contact.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
