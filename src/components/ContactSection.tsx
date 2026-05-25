'use client'

import { useState, useTransition } from 'react'
import { submitContact } from '@/app/actions'

export default function ContactSection() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ error?: string; success?: boolean } | null>(null)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await submitContact(formData)
      setResult(res ?? { success: true })
    })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#00d4ff]/5 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d4ff] mb-4">
              <span className="text-[#7c3aed]">{'// '}</span>
              contact.send()
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Pojďme si promluvit
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              Máte projekt? Potřebujete IT pomoc? Nebo jen chcete vědět víc?
              Napište nám — odpovíme do 24 hodin.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:m@pohl.uk"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#00d4ff] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0f0f1a] border border-[#1e2035] flex items-center justify-center group-hover:border-[#00d4ff]/30 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                m@pohl.uk
              </a>

              <a
                href="https://www.linkedin.com/in/martinpohl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94a3b8] hover:text-[#00d4ff] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0f0f1a] border border-[#1e2035] flex items-center justify-center group-hover:border-[#00d4ff]/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                linkedin.com/in/martinpohl
              </a>
            </div>
          </div>

          {result?.success ? (
            <div className="bg-[#0f0f1a] border border-[#00ff88]/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-white font-semibold text-lg mb-2">Zpráva odeslána!</h3>
              <p className="text-[#94a3b8] text-sm">Ozveme se do 24 hodin.</p>
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-4 bg-[#0f0f1a] border border-[#1e2035] rounded-2xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">jméno</label>
                  <input
                    name="name"
                    required
                    placeholder="Jan Novák"
                    className="w-full bg-[#08080f] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jan@firma.cz"
                    className="w-full bg-[#08080f] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">zpráva</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Popište váš projekt nebo požadavek..."
                  className="w-full bg-[#08080f] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm resize-none transition-colors"
                />
              </div>

              {result?.error && (
                <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                  {result.error}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3 rounded-lg bg-[#00d4ff] text-[#08080f] font-semibold hover:bg-[#00d4ff]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isPending ? 'Odesílám...' : 'Odeslat zprávu'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
