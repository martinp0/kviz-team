'use client'

import { Member } from '@/lib/types'
import MemberCard from './MemberCard'

const MARTIN: Member = {
  id: 'seed-martin',
  name: 'Martin Pohl',
  role: 'Systems Engineer',
  linkedin_url: 'https://www.linkedin.com/in/martinp0/',
  description: 'Apple MDM specialista. Zero-touch deployment, Jamf Pro, Mosyle, SSO. Správa Apple flotily, která prostě funguje — tiše, spolehlivě, automaticky.',
  services: ['Apple MDM', 'Jamf Pro', 'Mosyle', 'macOS', 'iOS', 'SSO'],
  avatar_url: null,
  approved: true,
  accepting_work: true,
  created_at: '',
}

const OPEN_SLOTS = [
  { role: 'QA Engineer', color: '#047857', bg: '#ecfdf5', border: '#6ee7b7', icon: '🔍' },
  { role: 'IT Recruiter', color: '#b45309', bg: '#fffbeb', border: '#fcd34d', icon: '🤝' },
  { role: 'DevOps Engineer', color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe', icon: '⚙️' },
]

function OpenSlot({ role, color, bg, border, icon }: typeof OPEN_SLOTS[0]) {
  return (
    <div className="relative rounded-[1.25rem] border border-dashed p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-zinc-50 transition-colors group"
      style={{ borderColor: border, minHeight: 260 }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-1"
        style={{ background: bg, border: `1.5px solid ${border}` }}>
        {icon}
      </div>
      <div>
        <p className="font-bold text-zinc-900 text-base">{role}</p>
        <p className="text-xs font-semibold mt-0.5 px-2.5 py-0.5 rounded-full inline-block mt-1.5"
          style={{ background: bg, color, border: `1px solid ${border}` }}>
          hledáme parťáka
        </p>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed">
        Máš volnou kapacitu a chceš pracovat s cool týmem?
      </p>
      <a href="#join"
        className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-colors group-hover:text-white"
        style={{ color, borderColor: border, background: bg }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = color; (e.currentTarget as HTMLElement).style.color = 'white' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = bg; (e.currentTarget as HTMLElement).style.color = color }}>
        Přidat se →
      </a>
    </div>
  )
}

export default function TeamSection({ dbMembers }: { dbMembers: Member[] }) {
  const martinFromDb = dbMembers.find(m => m.linkedin_url.includes('martinp0'))
  const others = dbMembers.filter(m => !m.linkedin_url.includes('martinp0'))

  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-3">Tým</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              Kdo za tím stojí
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed text-sm">
            Čtyři specialisté. Potkáváme se u kvízu, pracujeme u projektů.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Martin — real card */}
          <MemberCard member={martinFromDb ?? MARTIN} />

          {/* DB members or open slots */}
          {[0, 1, 2].map(i =>
            others[i]
              ? <MemberCard key={others[i].id} member={others[i]} />
              : <OpenSlot key={i} {...OPEN_SLOTS[i]} />
          )}
        </div>
      </div>
    </section>
  )
}
