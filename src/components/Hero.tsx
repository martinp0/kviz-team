export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-bg">
      {/* Soft violet glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7c3aed]/6 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-20">
        {/* Pills row */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['Apple MDM', 'DevOps', 'QA', 'IT Recruitment'].map((tag) => (
            <span key={tag} className="pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] opacity-70" />
              {tag}
            </span>
          ))}
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0f0f0f] leading-[1.08] mb-4">
          IT specialisté,
          <br />
          <span className="accent-italic">kteří se znají.</span>
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-3">
          Jsme skupina IT lidí z kvízu. Každý z nás má svoji oblast — dohromady
          pokryjeme většinu IT potřeb vašeho projektu.
        </p>
        <p className="text-sm text-gray-400 mb-10">
          Praha &amp; okolí · Remote-first · Flexibilní kapacita
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a
            href="#contact"
            className="px-7 py-3 rounded-full bg-[#1e1b4b] text-white text-sm font-medium hover:bg-[#2d2a6e] transition-colors inline-flex items-center gap-2"
          >
            Poptejte projekt
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#team"
            className="px-7 py-3 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Poznejte tým
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { value: '4+', label: 'specialistů' },
            { value: '10+', label: 'let zkušeností' },
            { value: '∞', label: 'kvízových kol' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm py-4 px-3"
            >
              <div className="text-2xl font-bold text-[#7c3aed]">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300 text-xs">
        <span className="tracking-widest uppercase text-[10px]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-200 to-transparent" />
      </div>
    </section>
  )
}
