const TICKER_ITEMS = [
  '🍎 Apple MDM', '⚙️ Kubernetes', '🔍 QA Testing', '🤝 IT Recruitment',
  '📱 Jamf Pro', '🏗️ Terraform', '🚀 CI/CD', '🔐 SSO & Identity',
  '☁️ AWS / GCP', '🐳 Docker', '🎯 Cypress', '📊 Playwright',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden noise"
      style={{ background: 'radial-gradient(ellipse 100% 70% at 50% -5%, #2e1065 0%, #09090b 55%)' }}>

      {/* Violet orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c084fc, transparent)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium text-violet-300 border border-violet-500/20 bg-violet-500/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse" />
          Přijímáme nové projekty · Praha &amp; remote
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(52px,9vw,96px)] font-bold tracking-tight leading-[1.0] text-white mb-6">
          IT tým,<br />
          <span className="grad-text italic">který víte,</span><br />
          co dělá.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed mb-10">
          QA, DevOps, IT recruiter a Apple MDM specialista.<br className="hidden sm:block" />
          Čtyři experti. Jeden tým. Žádný bullshit.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
          <a href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 0 40px rgba(124,58,237,0.5)' }}>
            Poptejte projekt
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="#team"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-zinc-300 border border-white/10 hover:border-white/30 hover:text-white transition-all hover:bg-white/5">
            Poznejte tým
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-16">
          {[
            { value: '4', label: 'specialistů', sub: 'v týmu' },
            { value: '10+', label: 'let praxe', sub: 'kombinovaně' },
            { value: '100%', label: 'remote OK', sub: 'i na místě' },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-4 text-center border border-white/8 bg-white/4 backdrop-blur-sm">
              <div className="text-2xl font-bold grad-text">{s.value}</div>
              <div className="text-white/70 text-xs font-medium mt-0.5">{s.label}</div>
              <div className="text-zinc-600 text-[10px] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 pb-20 overflow-hidden">
        <div className="flex gap-3 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-zinc-400 border border-white/8 bg-white/4 flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
