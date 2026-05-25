'use client'

import { useState, useTransition } from 'react'
import { submitMember } from '@/app/actions'

export default function JoinSection() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ error?: string; success?: boolean } | null>(null)

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      setResult(await submitMember(formData) ?? { success: true })
    })
  }

  if (result?.success) {
    return (
      <section id="join" className="py-24 px-6 bg-white">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
          <h3 className="text-xl font-bold text-zinc-900 mb-2">Žádost odeslána!</h3>
          <p className="text-zinc-500 text-sm">Martin tě přidá do týmu po schválení. Brzy se ozve.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-zinc-100 shadow-xl shadow-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — dark */}
            <div className="relative p-10 overflow-hidden noise"
              style={{ background: 'radial-gradient(ellipse 120% 100% at 0% 100%, #2e1065 0%, #09090b 70%)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

              <div className="relative z-10">
                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-6">Přidat se</p>
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Jsi IT specialista<br />
                  s volnou kapacitou?
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Hledáme lidi, kteří jsou dobří v tom, co dělají — a nebojí se o tom mluvit. Přidej se, získáš profil na webu a přístup k projektům.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: '🎯', title: 'Profil na webu', desc: 'Viditelnost pro reálné klienty' },
                    { icon: '🤝', title: 'Přístup k projektům', desc: 'Sdílíme poptávky v týmu' },
                    { icon: '🍺', title: 'Kvíz každý týden', desc: 'A pivo, samozřejmě' },
                  ].map(item => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{item.title}</p>
                        <p className="text-white/40 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/30 text-xs italic">
                    "Setkali jsme se u kvízu. Zůstali jsme kvůli projektům."
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <form action={handleSubmit} className="p-10 bg-white space-y-5">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">Pošli žádost</h3>
                <p className="text-zinc-400 text-sm">Profil se zobrazí po schválení.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-2">Jméno *</label>
                  <input name="name" required placeholder="Jan Novák"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all placeholder-zinc-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-2">Role *</label>
                  <input name="role" required placeholder="DevOps Engineer"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all placeholder-zinc-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-2">LinkedIn URL *</label>
                <input name="linkedin_url" type="url" required placeholder="https://linkedin.com/in/..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all placeholder-zinc-400" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-2">Krátké bio *</label>
                <textarea name="description" required rows={3} placeholder="Čím se zabývám, co umím, co hledám..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 resize-none transition-all placeholder-zinc-400" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-2">Skills <span className="text-zinc-300 font-normal">(oddělené čárkou)</span></label>
                <input name="services" placeholder="Kubernetes, Terraform, AWS..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all placeholder-zinc-400" />
              </div>

              {result?.error && (
                <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">{result.error}</p>
              )}

              <button type="submit" disabled={isPending}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 4px 20px rgba(124,58,237,0.3)' }}>
                {isPending ? 'Odesílám...' : 'Přidat se do týmu →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
