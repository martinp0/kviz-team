const POINTS = [
  {
    icon: '🤝',
    title: 'Lidé, které znáte',
    desc: 'Nejsme agentura s hromadou neznámých. Víte, kdo na vašem projektu pracuje — a my víme, co děláme.',
  },
  {
    icon: '⚡',
    title: 'Žádné zbytečné procesy',
    desc: 'Komunikujeme přímo. Žádné tikety, žádní account manageři. Napíšete nám, odpovíme my.',
  },
  {
    icon: '🎯',
    title: 'Hluboká specializace',
    desc: 'Každý z nás dělá svoji oblast na 100 %. Nedostanete generalistu, dostanete experta.',
  },
  {
    icon: '🔄',
    title: 'Flexibilní kapacita',
    desc: 'Potřebujete 10 hodin nebo 40? Přizpůsobíme se. Remote-first, bez zbytečné byrokracie.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden noise"
      style={{ background: 'linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)' }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(ellipse, #7c3aed, transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">Proč my</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Přesně to, co<br />
            <span className="grad-text">potřebujete.</span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
            Setkáváme se u kvízu — ale projekty bereme vážně.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {POINTS.map((p) => (
            <div key={p.title} className="card-dark p-7 group hover:bg-white/[0.08] transition-colors">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-white/20 italic">
            "Potkali jsme se u kvízu.<br className="hidden sm:block" /> Zůstali jsme kvůli projektům."
          </p>
        </div>
      </div>
    </section>
  )
}
