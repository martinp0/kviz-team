'use client'

import { Member } from '@/lib/types'
import MemberCard from './MemberCard'
import { useLang } from '@/lib/LangContext'

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
  { role: 'QA Engineer',     color: '#059669', bg: 'rgba(5,150,105,0.08)',   border: 'rgba(5,150,105,0.2)',   icon: '🔍' },
  { role: 'IT Recruiter',    color: '#d97706', bg: 'rgba(217,119,6,0.08)',   border: 'rgba(217,119,6,0.2)',   icon: '🤝' },
  { role: 'DevOps Engineer', color: '#2563eb', bg: 'rgba(37,99,235,0.08)',   border: 'rgba(37,99,235,0.2)',   icon: '⚙️' },
]

function OpenSlot({ role, color, bg, border, icon }: typeof OPEN_SLOTS[0]) {
  const { t } = useLang()

  const scrollToJoin = () =>
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="relative rounded-[1.25rem] flex flex-col items-center justify-center text-center gap-3 p-6 transition-all hover:scale-[1.01]"
      style={{
        border: `1.5px dashed ${border}`,
        minHeight: 260,
        background: 'var(--glass-bg-subtle)',
        backdropFilter: 'blur(12px)',
      }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-1"
        style={{ background: bg, border: `1.5px solid ${border}` }}>
        {icon}
      </div>
      <div>
        <p className="font-bold text-sm" style={{ color: 'var(--tx1)' }}>{role}</p>
        <span className="inline-block text-xs font-semibold mt-1.5 px-2.5 py-0.5 rounded-full"
          style={{ background: bg, color, border: `1px solid ${border}` }}>
          {t.team.openBadge}
        </span>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--tx3)' }}>
        {t.team.openDesc}
      </p>
      <button
        onClick={scrollToJoin}
        className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all"
        style={{ color, background: bg, border: `1px solid ${border}` }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = color
          ;(e.currentTarget as HTMLElement).style.color = 'white'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = bg
          ;(e.currentTarget as HTMLElement).style.color = color
        }}>
        {t.team.openCta}
      </button>
    </div>
  )
}

export default function TeamSection({ dbMembers }: { dbMembers: Member[] }) {
  const { t } = useLang()

  const martinFromDb = dbMembers.find(m => m.linkedin_url.includes('martinp0'))
  const others = dbMembers.filter(m => !m.linkedin_url.includes('martinp0'))

  return (
    <section id="team" className="py-24 px-6">
      {/* Decorative orb */}
      <div className="pointer-events-none absolute left-0 w-96 h-96 rounded-full blur-[100px] opacity-10"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="max-w-5xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="overline mb-3">{t.team.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--tx1)' }}>
              {t.team.title}
            </h2>
          </div>
          <p className="max-w-xs leading-relaxed text-sm" style={{ color: 'var(--tx2)' }}>
            {t.team.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MemberCard member={martinFromDb ?? MARTIN} />
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
