export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-3">Služby</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Čtyři oblasti,<br />
            <span className="text-violet-600">jeden tým.</span>
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto leading-relaxed">
            Nemusíte hledat čtyři různé lidi. Máme je pohromadě — a setkáváme se u piva.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Apple MDM — wide */}
          <div className="md:col-span-7 card-light p-8 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-violet-50 border border-violet-100">🍎</div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Apple MDM & Device Management</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Zero-touch deployment, správa Apple flotily, Jamf Pro, Mosyle, identity & SSO.
              Vaše Apple zařízení nakonfigurovaná automaticky, tiše, spolehlivě.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Jamf Pro', 'Mosyle', 'Apple Business Manager', 'SSO', 'iOS/macOS'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-violet-50 text-violet-700 border border-violet-100">{t}</span>
              ))}
            </div>
          </div>

          {/* DevOps — narrow */}
          <div className="md:col-span-5 card-light p-8 relative overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1d1640 100%)' }}>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-white/10">⚙️</div>
            <h3 className="text-xl font-bold text-white mb-2">DevOps & Cloud</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              CI/CD, Kubernetes, Terraform, AWS/GCP. Infra jako kód — opakovatelná a spolehlivá.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Kubernetes', 'Terraform', 'AWS', 'CI/CD'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">{t}</span>
              ))}
            </div>
          </div>

          {/* QA — narrow */}
          <div className="md:col-span-5 card-light p-8 relative overflow-hidden group">
            <div className="absolute -left-4 -bottom-4 w-28 h-28 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #059669, transparent)' }} />
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-emerald-50 border border-emerald-100">🔍</div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Quality Assurance</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Manuální i automatizované testování. Kvalita jako standard, ne jako afterthought.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Manual QA', 'Cypress', 'Playwright', 'Selenium'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">{t}</span>
              ))}
            </div>
          </div>

          {/* IT Recruitment — wide */}
          <div className="md:col-span-7 card-light p-8 relative overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef9c3 100%)' }}>
            <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full opacity-30"
              style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-amber-100 border border-amber-200">🤝</div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">IT Recruitment</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Hledáme správné lidi do vašeho IT týmu. Rozumíme technologiím i lidem —
              nedodáme vám CVčko, dodáme vám kolegu.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Sourcing', 'Tech Screening', 'Onboarding', 'IT Roles'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">{t}</span>
              ))}
            </div>
          </div>

        </div>

        {/* CTA strip */}
        <div className="mt-6 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-violet-100 bg-gradient-to-r from-violet-50 to-purple-50">
          <div>
            <p className="font-bold text-zinc-900">Potřebujete kombinaci více oblastí?</p>
            <p className="text-zinc-500 text-sm mt-0.5">Navrhneme řešení na míru vašeho projektu.</p>
          </div>
          <a href="#contact"
            className="flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 4px 16px rgba(124,58,237,0.3)' }}>
            Kontaktujte nás →
          </a>
        </div>
      </div>
    </section>
  )
}
