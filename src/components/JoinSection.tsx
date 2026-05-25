'use client'

import { useState, useTransition } from 'react'
import { submitMember } from '@/app/actions'

export default function JoinSection() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ error?: string; success?: boolean } | null>(null)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await submitMember(formData)
      setResult(res ?? { success: true })
    })
  }

  if (result?.success) {
    return (
      <section id="join" className="py-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#f0fdf4] border border-emerald-100 flex items-center justify-center mx-auto mb-5 text-2xl">
            ✓
          </div>
          <h3 className="text-xl font-semibold text-[#0f0f0f] mb-2">Žádost odeslána!</h3>
          <p className="text-gray-500 text-sm">Přidáme tě do týmu po schválení. Martin se ozve.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — info */}
            <div className="p-10 bg-[#1e1b4b] text-white">
              <p className="text-xs font-semibold text-[#a78bfa] uppercase tracking-widest mb-6">
                Přidat se
              </p>
              <h2 className="text-3xl font-bold mb-4 leading-tight">
                Jsi IT specialista?<br />
                <span className="text-[#a78bfa] italic">Přidej se k týmu.</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Máš volnou kapacitu a chceš spolupracovat na projektech?
                Přidej svůj profil — zobrazíme tě na webu a budeme tě kontaktovat,
                když přijde relevantní projekt.
              </p>

              <div className="space-y-4">
                {[
                  { icon: '🎯', title: 'Profil na webu', desc: 'Tvoje specialita viditelná pro klienty' },
                  { icon: '🤝', title: 'Spolupráce na projektech', desc: 'Přístup k poptávkám z celého týmu' },
                  { icon: '🍺', title: 'Kvíz každý týden', desc: 'A samozřejmě i pivo' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-white/50">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form action={handleSubmit} className="p-10 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Jméno *
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Jan Novák"
                    className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Role *
                  </label>
                  <input
                    name="role"
                    required
                    placeholder="DevOps Engineer"
                    className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  LinkedIn URL *
                </label>
                <input
                  name="linkedin_url"
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/..."
                  className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Krátké bio *
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  placeholder="Čím se zabývám, co umím, co hledám..."
                  className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 resize-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Skills (oddělené čárkou)
                </label>
                <input
                  name="services"
                  placeholder="Kubernetes, Terraform, AWS..."
                  className="w-full bg-[#f4f4f8] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f0f0f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]/50 transition-all"
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
                className="w-full py-3 rounded-xl bg-[#7c3aed] text-white text-sm font-semibold hover:bg-[#6d28d9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isPending ? 'Odesílám...' : 'Přidat se do týmu →'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Profil se zobrazí po schválení správcem.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
