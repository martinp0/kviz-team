import { Member } from '@/lib/types'

const ROLE_CONFIG: Record<string, { color: string; bg: string; border: string; gradient: string }> = {
  Systems: { color: '#5b21b6', bg: '#f5f3ff', border: '#ddd6fe', gradient: 'from-violet-50 to-white' },
  DevOps:  { color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe', gradient: 'from-blue-50 to-white' },
  QA:      { color: '#065f46', bg: '#ecfdf5', border: '#a7f3d0', gradient: 'from-emerald-50 to-white' },
  IT:      { color: '#92400e', bg: '#fffbeb', border: '#fde68a', gradient: 'from-amber-50 to-white' },
}

function getCfg(role: string) {
  for (const [k, v] of Object.entries(ROLE_CONFIG)) {
    if (role.startsWith(k)) return v
  }
  return { color: '#374151', bg: '#f9fafb', border: '#e5e7eb', gradient: 'from-gray-50 to-white' }
}

export default function MemberCard({ member }: { member: Member }) {
  const cfg = getCfg(member.role)
  const initials = member.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className="card-premium group flex flex-col overflow-hidden">
      {/* Colored top strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r`} style={{ background: `linear-gradient(90deg, ${cfg.color}40, ${cfg.color}20)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          {member.avatar_url ? (
            <img src={member.avatar_url} alt={member.name} className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-sm" />
          ) : (
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm ring-2 ring-white"
              style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
            >
              {initials}
            </div>
          )}

          {member.accepting_work && (
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse" />
              volná kapacita
            </span>
          )}
        </div>

        {/* Name + role */}
        <div className="mb-3">
          <h3 className="font-bold text-[#0a0a0a] text-base mb-1.5">{member.name}</h3>
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
            style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
          >
            {member.role}
          </span>
        </div>

        {/* Bio */}
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {member.description}
        </p>

        {/* Skills */}
        {member.services.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {member.services.slice(0, 4).map((s) => (
              <span key={s} className="px-2.5 py-0.5 rounded-full text-[11px] bg-zinc-50 text-zinc-500 border border-zinc-100">
                {s}
              </span>
            ))}
            {member.services.length > 4 && (
              <span className="text-[11px] text-zinc-400 px-1">+{member.services.length - 4}</span>
            )}
          </div>
        )}

        {/* LinkedIn */}
        <a
          href={member.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: cfg.color }}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn →
        </a>
      </div>
    </div>
  )
}
