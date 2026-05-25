export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #3b0764 0%, #09090b 60%)' }}
    >
      {/* Violet glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full text-xs font-medium text-violet-300 shimmer-border">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 pulse" />
          Volná kapacita · Praha &amp; remote
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.0] mb-6">
          IT tým,<br />
          <span className="grad-text">který víte,</span><br />
          <span className="text-white/90">co dělá.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
          QA, DevOps, IT recruiter a Apple MDM specialista. Každý z nás má ostrou specialitu — dohromady pokryjeme váš projekt od A do Z.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', boxShadow: '0 0 32px rgba(124,58,237,0.4)' }}
          >
            Poptejte projekt →
          </a>
          <a href="#team"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-zinc-300 border border-white/10 hover:border-white/25 hover:text-white transition-all bg-white/5"
          >
            Poznejte tým
          </a>
        </div>

        {/* Floating skill badges */}
        <div className="flex flex-wrap gap-2.5 justify-center">
          {[
            { label: 'Apple MDM', icon: '🍎' },
            { label: 'Kubernetes', icon: '⚙️' },
            { label: 'QA Testing', icon: '🔍' },
            { label: 'IT Recruitment', icon: '🤝' },
            { label: 'Jamf Pro', icon: '📱' },
            { label: 'Terraform', icon: '🏗️' },
            { label: 'CI/CD', icon: '🚀' },
          ].map((b, i) => (
            <span key={b.label}
              className="card-dark inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {b.icon} {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: '4+', label: 'IT specialistů', sub: 'v týmu' },
            { value: '10+', label: 'let zkušeností', sub: 'kombinovaně' },
            { value: '100%', label: 'remote-friendly', sub: 'flexibilní kapacita' },
          ].map((s) => (
            <div key={s.label} className="card-dark p-5 text-center">
              <div className="text-3xl font-bold grad-text mb-1">{s.value}</div>
              <div className="text-white/80 text-sm font-medium">{s.label}</div>
              <div className="text-zinc-500 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
