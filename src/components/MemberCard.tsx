'use client'

import { Member } from '@/lib/types'
import { useLang } from '@/lib/LangContext'

const ROLE_THEME: Record<string, { color: string; glow: string; bg: string }> = {
  Systems:  { color: '#7c3aed', glow: 'rgba(124,58,237,0.18)', bg: 'rgba(124,58,237,0.08)' },
  DevOps:   { color: '#2563eb', glow: 'rgba(37,99,235,0.18)',  bg: 'rgba(37,99,235,0.08)'  },
  QA:       { color: '#059669', glow: 'rgba(5,150,105,0.18)',  bg: 'rgba(5,150,105,0.08)'  },
  IT:       { color: '#d97706', glow: 'rgba(217,119,6,0.18)',  bg: 'rgba(217,119,6,0.08)'  },
  Platform: { color: '#0891b2', glow: 'rgba(8,145,178,0.18)',  bg: 'rgba(8,145,178,0.08)'  },
}
function theme(role: string) {
  for (const [k, v] of Object.entries(ROLE_THEME)) if (role.startsWith(k)) return v
  return ROLE_THEME.Systems
}

export default function MemberCard({ member }: { member: Member }) {
  const { t } = useLang()
  const c = theme(member.role)
  const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div
      className="glass flex flex-col h-full relative overflow-hidden"
      style={{ padding: 0 }}
    >
      {/* Top color accent line */}
      <div
        className="h-[2px] w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}44, transparent)` }}
      />

      <div className="p-5 flex flex-col flex-1 gap-4">

        {/* Header row */}
        <div className="flex items-start justify-between">
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-[15px] font-bold flex-shrink-0"
            style={{
              background: c.bg,
              border: `1.5px solid ${c.color}28`,
              color: c.color,
              boxShadow: `0 4px 14px ${c.glow}`,
            }}
          >
            {initials}
          </div>

          {member.accepting_work && (
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-full flex-shrink-0"
              style={{
                background: 'rgba(5,150,105,0.08)',
                border: '1px solid rgba(5,150,105,0.2)',
              }}
            >
              <span className="status-dot" style={{ width: 5, height: 5, minWidth: 5 }} />
              <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '9px', color: '#059669', letterSpacing: '0.05em' }}>
                {t.team.available.toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Identity */}
        <div>
          <p
            className="font-semibold text-[14px] mb-1"
            style={{ color: 'var(--tx1)', letterSpacing: '-0.01em' }}
          >
            {member.name}
          </p>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '10px',
              padding: '2px 7px',
              borderRadius: '4px',
              background: c.bg,
              color: c.color,
              border: `1px solid ${c.color}22`,
              letterSpacing: '0.02em',
            }}
          >
            {member.role}
          </span>
        </div>

        {/* Bio */}
        <p
          className="text-[12px] leading-relaxed flex-1 line-clamp-3"
          style={{ color: 'var(--tx2)' }}
        >
          {member.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1">
          {member.services.slice(0, 5).map(s => (
            <span key={s} className="chip">{s}</span>
          ))}
          {member.services.length > 5 && (
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px', color: 'var(--tx3)', alignSelf: 'center' }}>
              +{member.services.length - 5}
            </span>
          )}
        </div>

        {/* LinkedIn */}
        <a
          href={member.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-all"
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '10px',
            fontWeight: 600,
            color: c.color,
            letterSpacing: '0.03em',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LINKEDIN →
        </a>
      </div>
    </div>
  )
}
