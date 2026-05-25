export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient hero background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3ff] via-[#fdfcff] to-white" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#ddd6fe]/60 via-[#ede9fe]/30 to-transparent rounded-full -translate-y-1/3 translate-x-1/4 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#e0e7ff]/50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c4b5fd 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-28">
        <div className="text-center">
          {/* Top label */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#ede9fe] rounded-full px-4 py-1.5 text-xs font-medium text-[#7c3aed] mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] pulse" />
            Praha &amp; remote · Volná kapacita
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-[80px] font-bold tracking-tight text-[#0a0a0a] leading-[1.05] mb-6">
            IT specialisté,
            <br />
            <span className="accent-italic text-violet-gradient">kteří se znají.</span>
          </h1>

          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Jsme IT tým z kvízu — QA, DevOps, IT recruiter a Apple MDM specialista.
            Každý z nás má svoji oblast, dohromady pokryjeme váš projekt.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#5b21b6] text-white text-sm font-semibold hover:bg-[#4c1d95] transition-colors shadow-lg shadow-violet-200"
            >
              Poptejte projekt
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-700 hover:border-violet-200 hover:text-[#7c3aed] transition-colors"
            >
              Poznejte tým
            </a>
          </div>

          {/* Skills pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {[
              { label: 'Apple MDM', color: '#7c3aed', bg: '#f5f3ff' },
              { label: 'DevOps & Kubernetes', color: '#2563eb', bg: '#eff6ff' },
              { label: 'QA & Testování', color: '#059669', bg: '#f0fdf4' },
              { label: 'IT Recruitment', color: '#d97706', bg: '#fffbeb' },
              { label: 'Remote-first', color: '#6b7280', bg: '#f9fafb' },
            ].map((p) => (
              <span
                key={p.label}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium border"
                style={{ color: p.color, background: p.bg, borderColor: `${p.color}20` }}
              >
                {p.label}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: '4+', label: 'IT specialistů', icon: '👥' },
              { value: '10+', label: 'let zkušeností', icon: '📅' },
              { value: '∞', label: 'kvízových otázek', icon: '🧠' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-premium p-5 text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#7c3aed]">{stat.value}</div>
                <div className="text-xs text-zinc-400 mt-0.5 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
