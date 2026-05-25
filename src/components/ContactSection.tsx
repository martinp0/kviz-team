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
    <section id="contact" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">

          {/* Left */}
          <div>
            <p className="overline mb-4">{t.contact.label}</p>
            <h2
              className="font-extrabold tracking-tight mb-5"
              style={{
                fontSize: 'clamp(32px, 5.5vw, 60px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'var(--tx1)',
              }}
            >
              {t.contact.titleMain}<br />
              <span className="grad-text italic">{t.contact.titleAccent}</span>
            </h2>
            <p className="text-[14px] leading-relaxed mb-8 max-w-md" style={{ color: 'var(--tx2)' }}>
              {t.contact.sub}
            </p>

            {/* Contact links */}
            <div className="space-y-2 mb-7">
              {[
                {
                  href: 'mailto:m@pohl.uk',
                  label: t.contact.emailLabel,
                  value: 'm@pohl.uk',
                  external: false,
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.linkedin.com/in/martinp0/',
                  label: t.contact.linkedinLabel,
                  value: t.contact.linkedinName,
                  external: true,
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map(row => (
                <a
                  key={row.href}
                  href={row.href}
                  target={row.external ? '_blank' : undefined}
                  rel={row.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3.5 rounded-xl transition-all"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--glass-border-accent)'
                    el.style.transform = 'translateY(-1px)'
                    el.style.boxShadow = 'var(--glass-shadow-lg)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--glass-border)'
                    el.style.transform = ''
                    el.style.boxShadow = ''
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--ac-light)', color: 'var(--ac)' }}
                  >
                    {row.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '9px', color: 'var(--tx3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {row.label}
                    </p>
                    <p className="font-medium text-[13px]" style={{ color: 'var(--tx1)' }}>{row.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium"
              style={{
                background: 'rgba(5,150,105,0.08)',
                border: '1px solid rgba(5,150,105,0.2)',
                color: '#059669',
              }}
            >
              <span className="status-dot" />
              {t.contact.responseTime}
            </div>
          </div>

          {/* Right — form */}
          {result?.success ? (
            <div className="glass-strong p-8 text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.2)' }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-semibold mb-2" style={{ color: 'var(--tx1)', letterSpacing: '-0.01em' }}>
                {t.contact.successTitle}
              </h3>
              <p className="text-[13px]" style={{ color: 'var(--tx2)' }}>{t.contact.successDesc}</p>
            </div>
          ) : (
            <form action={handleSubmit} className="glass-strong p-6 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                    {t.contact.name.toUpperCase()}
                  </label>
                  <input name="name" required placeholder={t.contact.namePh} className="glass-input" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                    {t.contact.email.toUpperCase()}
                  </label>
                  <input name="email" type="email" required placeholder={t.contact.emailPh} className="glass-input" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1.5" style={{ color: 'var(--tx2)', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.04em' }}>
                  {t.contact.message.toUpperCase()}
                </label>
                <textarea name="message" required rows={5} placeholder={t.contact.messagePh} className="glass-input resize-none" />
              </div>

              {result?.error && (
                <p
                  className="text-[12px] px-4 py-3 rounded-lg"
                  style={{ color: '#ef4444', background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.15)' }}
                >
                  {result.error}
                </p>
              )}

              <button type="submit" disabled={isPending} className="btn-ac w-full py-3 text-[13px]">
                {isPending ? t.contact.submitting : t.contact.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
