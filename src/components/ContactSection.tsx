'use client'

import { useState, useTransition } from 'react'
import { submitContact } from '@/app/actions'

export default function ContactSection() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ error?: string; success?: boolean } | null>(null)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      setResult(await submitContact(formData) ?? { success: true })
    })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-4">Kontakt</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-6">
              Pojďme na to<br />
              <span className="text-violet-600 italic">společně.</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-lg">
              Máte projekt, potřebu nebo jen otázku?
              Napište nám — odpovíme do 24 hodin.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <a href="mailto:m@pohl.uk"
                className="flex items-center gap-4 group p-4 rounded-2xl border border-zinc-100 hover:border-violet-100 hover:bg-violet-50/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-0.5">Email</p>
                  <p className="font-semibold text-zinc-900 group-hover:text-violet-700 transition-colors">m@pohl.uk</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/martinp0/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 rounded-2xl border border-zinc-100 hover:border-violet-100 hover:bg-violet-50/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-0.5">LinkedIn</p>
                  <p className="font-semibold text-zinc-900 group-hover:text-violet-700 transition-colors">Martin Pohl</p>
                </div>
              </a>
            </div>

            {/* Response time badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse" />
              Odpovídáme do 24 hodin
            </div>
          </div>

          {/* Right — form */}
          {result?.success ? (
            <div className="card-light p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Zpráva odeslána!</h3>
              <p className="text-zinc-400">Ozveme se do 24 hodin.</p>
            </div>
          ) : (
            <form action={handleSubmit} className="card-light p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-2">Jméno</label>
                  <input name="name" required placeholder="Jan Novák"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-2">Email</label>
                  <input name="email" type="email" required placeholder="jan@firma.cz"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-2">Zpráva</label>
                <textarea name="message" required rows={5} placeholder="Popište váš projekt nebo požadavek..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 resize-none transition-all" />
              </div>

              {result?.error && (
                <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{result.error}</p>
              )}

              <button type="submit" disabled={isPending}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 4px 20px rgba(124,58,237,0.3)' }}>
                {isPending ? 'Odesílám...' : 'Odeslat zprávu →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
