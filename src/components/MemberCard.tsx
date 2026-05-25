import { Member } from '@/lib/types'

const ROLES: Record<string, { color: string; bg: string; border: string }> = {
  Systems: { color: '#6d28d9', bg: '#f5f3ff', border: '#ddd6fe' },
  DevOps:  { color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe' },
  QA:      { color: '#047857', bg: '#ecfdf5', border: '#6ee7b7' },
  IT:      { color: '#b45309', bg: '#fffbeb', border: '#fcd34d' },
}
function cfg(role: string) {
  for (const [k, v] of Object.entries(ROLES)) if (role.startsWith(k)) return v
  return { color: '#52525b', bg: '#fafafa', border: '#e4e4e7' }
}

export default function MemberCard({ member }: { member: Member }) {
  const c = cfg(member.role)
  const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className="card-light flex flex-col h-full group">
      {/* Top accent bar */}
      <div className="h-1 rounded-t-[1.25rem]" style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}50)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Avatar + capacity */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold shadow-sm"
            style={{ background: c.bg, color: c.color, border: `1.5px solid ${c.border}` }}>
            {initials}
          </div>
          {member.accepting_work && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse" />
              volná kapacita
            </span>
          )}
        </div>

        {/* Name */}
        <p className="font-bold text-zinc-900 text-base mb-1">{member.name}</p>
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-3"
          style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
          {member.role}
        </span>

        {/* Bio */}
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{member.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.services.slice(0, 4).map(s => (
            <span key={s} className="px-2.5 py-0.5 rounded-full text-[11px] bg-zinc-50 text-zinc-500 border border-zinc-100">{s}</span>
          ))}
          {member.services.length > 4 && (
            <span className="text-[11px] text-zinc-400">+{member.services.length - 4}</span>
          )}
        </div>

        {/* LinkedIn */}
        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-75"
          style={{ color: c.color }}>
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn →
        </a>
      </div>
    </div>
  )
}
