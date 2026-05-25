const STEPS = [
  {
    num: '01',
    title: 'Napište nám',
    desc: 'Pošlete nám pár vět o tom, co potřebujete. Email, formulář, LinkedIn — je to jedno. Odpovíme do 24 hodin.',
    icon: '✉️',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    num: '02',
    title: 'Domluvíme scope',
    desc: 'Krátká schůzka nebo hovor. Domluvíme co, jak a za kolik. Žádné zdlouhavé procurement procesy.',
    icon: '🎯',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    num: '03',
    title: 'Jedeme',
    desc: 'Pracujeme přímo, komunikujeme lidsky. Průběžné updaty, žádné překvapení na faktuře.',
    icon: '🚀',
    color: '#059669',
    bg: '#ecfdf5',
  },
]

export default function Process() {
  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-3">Jak to funguje</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Od poptávky k výsledku<br />
            <span className="text-violet-600">ve třech krocích.</span>
          </h2>
          <p className="text-zinc-500 max-w-sm mx-auto text-base leading-relaxed">
            Žádná byrokracie. Žádné čekání týdny na response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-violet-200 via-blue-200 to-emerald-200" />

          {STEPS.map((step) => (
            <div key={step.num} className="card-light p-8 relative">
              {/* Number */}
              <div className="text-xs font-bold mb-5 inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: step.color }}>
                  {step.num.replace('0', '')}
                </span>
                <span style={{ color: step.color }}>{step.num}</span>
              </div>

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: step.bg }}>
                {step.icon}
              </div>

              <h3 className="font-bold text-zinc-900 text-xl mb-3">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse flex-shrink-0" />
          Průměrná doba od první zprávy k zahájení spolupráce: <strong className="text-zinc-600">méně než týden</strong>
        </div>
      </div>
    </section>
  )
}
