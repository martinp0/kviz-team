export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f0f1a] border border-[#1e2035] text-sm text-[#94a3b8] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] pulse-dot" />
          Přijímáme nové projekty
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          IT tým{' '}
          <span className="text-gradient">z kvízu</span>
        </h1>

        <p className="text-xl text-[#94a3b8] mb-4 max-w-2xl mx-auto leading-relaxed">
          Skupina IT specialistů, která se potkala u kvízových otázek a spojila u
          projektů. QA, DevOps, IT recruitment a Apple MDM — jsme k dispozici.
        </p>

        <p className="text-sm text-[#94a3b8]/70 mb-10 font-mono">
          Praha &amp; okolí · Remote-first · Flexibilní kapacita
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-[#00d4ff] text-[#08080f] font-semibold hover:bg-[#00d4ff]/90 transition-colors"
          >
            Poptejte projekt
          </a>
          <a
            href="#team"
            className="px-8 py-3 rounded-lg border border-[#1e2035] text-[#94a3b8] hover:border-[#00d4ff]/50 hover:text-white transition-colors"
          >
            Poznejte tým
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: '4+', label: 'specialistů' },
            { value: '10+', label: 'let zkušeností' },
            { value: '∞', label: 'kvízových otázek' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-[#94a3b8] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8]/40 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#94a3b8]/40 to-transparent" />
      </div>
    </section>
  )
}
