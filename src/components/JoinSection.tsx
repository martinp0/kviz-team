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
      <section id="join" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center mx-auto mb-6 text-3xl">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Žádost odeslána!</h3>
          <p className="text-[#94a3b8]">
            Přidáme tě do týmu po schválení. Ozve se ti Martin.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d4ff] mb-4">
            <span className="text-[#7c3aed]">{'// '}</span>
            team.join()
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Přidej se k týmu
          </h2>
          <p className="text-[#94a3b8] leading-relaxed mb-6">
            Jsi IT specialista s volnou kapacitou? Chodíš nebo chceš chodit na kvíz?
            Přidej se. Dostaneš profil na tomto webu a budeme moct spolupracovat na projektech.
          </p>

          <div className="space-y-3">
            {[
              { icon: '🎯', text: 'Profil na tomto webu' },
              { icon: '🤝', text: 'Přístup k projektům týmu' },
              { icon: '🍺', text: 'Kvíz každý týden' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-[#94a3b8]">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">
                jméno *
              </label>
              <input
                name="name"
                required
                placeholder="Jan Novák"
                className="w-full bg-[#0f0f1a] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">
                role *
              </label>
              <input
                name="role"
                required
                placeholder="DevOps Engineer"
                className="w-full bg-[#0f0f1a] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">
              LinkedIn URL *
            </label>
            <input
              name="linkedin_url"
              type="url"
              required
              placeholder="https://linkedin.com/in/..."
              className="w-full bg-[#0f0f1a] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">
              krátký bio *
            </label>
            <textarea
              name="description"
              required
              rows={3}
              placeholder="Čím se zabývám, co umím, co hledám..."
              className="w-full bg-[#0f0f1a] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm resize-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-[#94a3b8] mb-1.5 font-mono">
              skills (oddělené čárkou)
            </label>
            <input
              name="services"
              placeholder="Kubernetes, Terraform, AWS, CI/CD"
              className="w-full bg-[#0f0f1a] border border-[#1e2035] rounded-lg px-4 py-2.5 text-white placeholder-[#94a3b8]/40 focus:outline-none focus:border-[#00d4ff]/50 text-sm transition-colors"
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
            {isPending ? 'Odesílám...' : 'Přidat se do týmu'}
          </button>

          <p className="text-xs text-[#94a3b8]/60 text-center">
            Profil bude zobrazen po schválení správcem.
          </p>
        </form>
      </div>
    </section>
  )
}
