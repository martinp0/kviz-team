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
    <section id="contact" className="py-24 px-6 bg-[#f4f4f8]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-[#7c3aed] uppercase tracking-widest mb-3">
              Kontakt
            </p>
            <h2 className="text-4xl font-bold text-[#0f0f0f] mb-4 tracking-tight leading-tight">
              Pojďme si<br />
              <span className="accent-italic">promluvit.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              Máte projekt nebo potřebu? Napište nám — odpovídáme do 24 hodin.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:m@pohl.uk"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#7c3aed]/30 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#7c3aed] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm font-medium text-[#0f0f0f] group-hover:text-[#7c3aed] transition-colors">m@pohl.uk</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/martinp0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#7c3aed]/30 transition-colors">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#7c3aed] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">LinkedIn</div>
                  <div className="text-sm font-medium text-[#0f0f0f] group-hover:text-[#7c3aed] transition-colors">Martin Pohl</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          {result?.success ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-emerald-100 flex items-center justify-center mx-auto mb-4 text-xl">✓</div>
              <h3 className="font-semibold text-[#0f0f0f] mb-1">Zpráva odeslána!</h3>
              <p className="text-gray-400 text-sm">Ozveme se do 24 hodin.</p>
            </div>
          ) : (
            <form
              action={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Jméno</label>
                  <input
                    name="name"
                    required
                    placeholder="Jan Novák"
                    className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jan@firma.cz"
                    className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Zpráva</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Popište váš projekt nebo požadavek..."
                  className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 resize-none transition-all"
                />
              </div>

              {result?.error && (
                <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                  {result.error}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3 rounded-xl bg-[#1e1b4b] text-white text-sm font-semibold hover:bg-[#2d2a6e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isPending ? 'Odesílám...' : 'Odeslat zprávu →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
