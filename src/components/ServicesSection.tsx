const SERVICES = [
  {
    emoji: '🍎',
    title: 'Apple MDM & Device Management',
    desc: 'Nasazení a správa Apple zařízení ve firmách. Zero-touch enrollment, Jamf Pro, Mosyle, identity & SSO.',
    tags: ['Jamf', 'Mosyle', 'ABM', 'SSO', 'iOS/macOS'],
    accent: '#7c3aed',
    bg: '#faf5ff',
  },
  {
    emoji: '⚙️',
    title: 'DevOps & Infrastructure',
    desc: 'CI/CD pipelines, Kubernetes, cloud infrastructure, IaC. Vaše infra jako kód — spolehlivá a opakovatelná.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Docker'],
    accent: '#2563eb',
    bg: '#eff6ff',
  },
  {
    emoji: '🔍',
    title: 'Quality Assurance',
    desc: 'Manuální i automatizované testování. Test strategie, regrese, performance. Kvalita jako standard, ne doplněk.',
    tags: ['Manual QA', 'Cypress', 'Selenium', 'Playwright'],
    accent: '#059669',
    bg: '#f0fdf4',
  },
  {
    emoji: '🤝',
    title: 'IT Recruitment',
    desc: 'Hledáme správné lidi do vašeho IT týmu. Sourcing, screening, placement. Rozumíme technologiím i lidem.',
    tags: ['Sourcing', 'Screening', 'Tech Roles', 'Onboarding'],
    accent: '#d97706',
    bg: '#fffbeb',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#f4f4f8]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#7c3aed] uppercase tracking-widest mb-3">
            Služby
          </p>
          <h2 className="text-4xl font-bold text-[#0f0f0f] mb-3 tracking-tight">
            Co umíme
          </h2>
          <p className="text-gray-500 max-w-lg text-base leading-relaxed">
            Každý z nás přináší jinou sadu skills. Dohromady pokryjeme většinu
            IT potřeb vašeho projektu nebo firmy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: s.bg }}
              >
                {s.emoji}
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: s.bg, color: s.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
