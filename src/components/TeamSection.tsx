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
  { role: 'QA Engineer',     color: '#059669', bg: 'rgba(5,150,105,0.06)',   border: 'rgba(5,150,105,0.18)',   icon: '🔍', slug: 'qa-engineer'     },
  { role: 'IT Recruiter',    color: '#d97706', bg: 'rgba(217,119,6,0.06)',   border: 'rgba(217,119,6,0.18)',   icon: '🤝', slug: 'it-recruiter'    },
  { role: 'DevOps Engineer', color: '#2563eb', bg: 'rgba(37,99,235,0.06)',   border: 'rgba(37,99,235,0.18)',   icon: '⚙️', slug: 'devops-engineer'  },
]

function OpenSlot({ role, color, bg, border, icon, slug }: typeof OPEN_SLOTS[0]) {
  const { t } = useLang()
  const scrollToJoin = () => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      className="flex flex-col items-center justify-center text-center gap-4 p-6 rounded-xl transition-all duration-200 relative overflow-hidden"
      style={{
        border: `1.5px dashed ${border}`,
        minHeight: 280,
        background: 'var(--glass-bg-subtle)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Monospace slug in corner */}
      <div
        className="absolute top-3 right-3"
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: '9px',
          color: `${color}55`,
          letterSpacing: '0.05em',
        }}
      >
        # {slug}
      </div>

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
        style={{ background: bg, border: `1.5px solid ${border}` }}
      >
        {icon}
      </div>

      <div>
        <p className="font-semibold text-[14px] mb-2" style={{ color: 'var(--tx1)', letterSpacing: '-0.01em' }}>
          {role}
        </p>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '10px',
            padding: '2px 8px',
            borderRadius: '4px',
            background: bg,
            color,
            border: `1px solid ${border}`,
            letterSpacing: '0.06em',
          }}
        >
          {t.team.openBadge.toUpperCase()}
        </span>
      </div>

      <p className="text-[12px] leading-relaxed max-w-[160px]" style={{ color: 'var(--tx3)' }}>
        {t.team.openDesc}
      </p>

      <button
        onClick={scrollToJoin}
        className="text-[11px] font-semibold px-4 py-2 rounded-lg transition-all"
        style={{
          fontFamily: 'var(--font-geist-mono)',
          color, background: bg, border: `1px solid ${border}`,
          letterSpacing: '0.04em',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = color
          el.style.color = '#fff'
          el.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = bg
          el.style.color = color
          el.style.transform = ''
        }}
      >
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
    <section id="team" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="overline mb-4">{t.team.label}</p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontSize: 'clamp(32px, 5.5vw, 60px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'var(--tx1)',
              }}
            >
              {t.team.title}
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed" style={{ color: 'var(--tx2)' }}>
            {t.team.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
