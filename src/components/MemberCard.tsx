import { Member } from '@/lib/types'

const ROLE_CONFIG: Record<string, { color: string; bg: string; dot: string }> = {
  Systems: { color: '#3b1f8c', bg: '#ede9fe', dot: '#7c3aed' },
  DevOps:  { color: '#1e40af', bg: '#dbeafe', dot: '#3b82f6' },
  QA:      { color: '#065f46', bg: '#d1fae5', dot: '#10b981' },
  IT:      { color: '#92400e', bg: '#fef3c7', dot: '#f59e0b' },
}

function getRoleConfig(role: string) {
  for (const [key, val] of Object.entries(ROLE_CONFIG)) {
    if (role.startsWith(key)) return val
  }
  return { color: '#374151', bg: '#f3f4f6', dot: '#9ca3af' }
}

export default function MemberCard({ member }: { member: Member }) {
  const cfg = getRoleConfig(member.role)
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover cursor-default">
      <div className="flex items-start justify-between mb-5">
        {/* Avatar */}
        {member.avatar_url ? (
          <img
            src={member.avatar_url}
            alt={member.name}
            className="w-14 h-14 rounded-xl object-cover"
          />
        ) : (
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
            style={{ background: cfg.bg, color: cfg.color }}
          >
            {initials}
          </div>
        )}

        {/* Capacity dot */}
        {member.accepting_work && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse" />
            volná kapacita
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="font-semibold text-[#0f0f0f] text-base mb-1">{member.name}</h3>

      {/* Role badge */}
      <div
        className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
        style={{ background: cfg.bg, color: cfg.color }}
      >
        {member.role}
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
        {member.description}
      </p>

      {/* Skills */}
      {member.services.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.services.slice(0, 5).map((s) => (
            <span
              key={s}
              className="px-2.5 py-0.5 rounded-full text-xs bg-gray-50 text-gray-500 border border-gray-100"
            >
              {s}
            </span>
          ))}
          {member.services.length > 5 && (
            <span className="px-2 py-0.5 text-xs text-gray-400">
              +{member.services.length - 5}
            </span>
          )}
        </div>
      )}

      {/* LinkedIn */}
      <a
        href={member.linkedin_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7c3aed] hover:text-[#5b21b6] transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn profil →
      </a>
    </div>
  )
}
