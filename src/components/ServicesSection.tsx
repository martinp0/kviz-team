const SERVICES = [
  {
    emoji: '🍎',
    title: 'Apple MDM & Device Management',
    desc: 'Zero-touch enrollment, správa Apple zařízení ve firmách, identity & SSO. Jamf Pro, Mosyle, Apple Business Manager.',
    tags: ['Jamf Pro', 'Mosyle', 'ABM', 'SSO', 'iOS & macOS'],
    color: '#5b21b6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
  {
    emoji: '⚙️',
    title: 'DevOps & Cloud Infrastructure',
    desc: 'CI/CD pipelines, Kubernetes, cloud (AWS/GCP/Azure), infrastructure as code. Vaše infra spolehlivá a opakovatelná.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Docker'],
    color: '#1d4ed8',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    emoji: '🔍',
    title: 'Quality Assurance',
    desc: 'Manuální i automatizované testování, test strategie, regrese, performance. Kvalita jako standard, ne doplněk.',
    tags: ['Manual QA', 'Cypress', 'Playwright', 'Selenium'],
    color: '#065f46',
    bg: '#ecfdf5',
    border: '#a7f3d0',
  },
  {
    emoji: '🤝',
    title: 'IT Recruitment',
    desc: 'Hledáme správné lidi do vašeho IT týmu. Sourcing, screening, placement. Rozumíme technologiím i lidem.',
    tags: ['Sourcing', 'Screening', 'Tech Roles', 'Onboarding'],
    color: '#92400e',
    bg: '#fffbeb',
    border: '#fde68a',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] to-white" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #ddd6fe 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest mb-3">Služby</p>
          <h2 className="text-4xl font-bold text-[#0a0a0a] tracking-tight mb-4">
            Co umíme
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Každý z nás přináší jinou sadu skills. Dohromady pokryjeme většinu
            IT potřeb vašeho projektu nebo firmy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="card-premium p-7 group">
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                >
                  {s.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0a0a0a] mb-2">{s.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Potřebujete kombinaci více služeb?</p>
            <p className="text-white/70 text-sm mt-0.5">Rádi navrhneme řešení šité na míru.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-2.5 bg-white text-[#5b21b6] rounded-full text-sm font-bold hover:bg-white/90 transition-colors"
          >
            Kontaktujte nás →
          </a>
        </div>
      </div>
    </section>
  )
}
