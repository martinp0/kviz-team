const services = [
  {
    icon: '🍎',
    title: 'Apple MDM & Device Management',
    description:
      'Nasazení a správa Apple zařízení (Mac, iPhone, iPad) ve firmách. Jamf Pro, Mosyle, zero-touch enrollment.',
    tags: ['Jamf', 'Mosyle', 'ABM', 'MDM'],
    color: '#00d4ff',
  },
  {
    icon: '🔧',
    title: 'DevOps & Infrastructure',
    description:
      'CI/CD pipelines, Kubernetes, cloud infrastructure (AWS/GCP/Azure), IaC s Terraform.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD'],
    color: '#7c3aed',
  },
  {
    icon: '🔍',
    title: 'Quality Assurance',
    description:
      'Manuální i automatizované testování. Test plány, regrese, performance testing. Zajistíme kvalitu vašeho produktu.',
    tags: ['Manual QA', 'Automation', 'Selenium', 'Cypress'],
    color: '#00ff88',
  },
  {
    icon: '🤝',
    title: 'IT Recruitment',
    description:
      'Hledáme správné lidi do vašeho IT týmu. Sourcing, screening, placement. Rozumíme technologiím i lidem.',
    tags: ['Sourcing', 'Screening', 'Tech Roles', 'HR'],
    color: '#fbbf24',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d4ff] mb-4">
            <span className="text-[#7c3aed]">{'// '}</span>
            services.available
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Co umíme
          </h2>
          <p className="text-[#94a3b8] max-w-xl">
            Každý z nás přináší jinou sadu skills. Dohromady pokryjeme většinu IT potřeb vašeho projektu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#0f0f1a] border border-[#1e2035] rounded-2xl p-6 hover:border-[#00d4ff]/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: `${service.color}10`, border: `1px solid ${service.color}20` }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          backgroundColor: `${service.color}10`,
                          color: service.color,
                          border: `1px solid ${service.color}20`,
                        }}
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
      </div>
    </section>
  )
}
