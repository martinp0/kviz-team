import { Member } from '@/lib/types'

const roleColors: Record<string, { bg: string; text: string; border: string }> = {
  'Systems Engineer': { bg: '#00d4ff10', text: '#00d4ff', border: '#00d4ff30' },
  'DevOps Engineer': { bg: '#7c3aed10', text: '#a78bfa', border: '#7c3aed30' },
  'QA Engineer': { bg: '#00ff8810', text: '#00ff88', border: '#00ff8830' },
  'IT Recruiter': { bg: '#f59e0b10', text: '#fbbf24', border: '#f59e0b30' },
  default: { bg: '#94a3b810', text: '#94a3b8', border: '#94a3b830' },
}

function getRoleStyle(role: string) {
  for (const key of Object.keys(roleColors)) {
    if (role.includes(key.split(' ')[0])) return roleColors[key]
  }
  return roleColors.default
}

export default function MemberCard({ member }: { member: Member }) {
  const style = getRoleStyle(member.role)
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="group relative bg-[#0f0f1a] border border-[#1e2035] rounded-2xl p-6 card-glow transition-all duration-300 hover:border-[#00d4ff]/20">
      {/* Accepting work indicator */}
      {member.accepting_work && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-[#00ff88]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] pulse-dot" />
          volná kapacita
        </div>
      )}

      {/* Avatar */}
      <div className="mb-4">
        {member.avatar_url ? (
          <img
            src={member.avatar_url}
            alt={member.name}
            className="w-16 h-16 rounded-xl object-cover"
          />
        ) : (
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-lg font-bold"
            style={{ background: `${style.bg}`, border: `1px solid ${style.border}`, color: style.text }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Name & role */}
      <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
      <div
        className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
        style={{ backgroundColor: style.bg, color: style.text, border: `1px solid ${style.border}` }}
      >
        {member.role}
      </div>

      {/* Description */}
      <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-3">
        {member.description}
      </p>

      {/* Services */}
      {member.services.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.services.slice(0, 4).map((service) => (
            <span
              key={service}
              className="px-2 py-0.5 rounded text-xs bg-[#1a1a28] text-[#94a3b8] border border-[#1e2035]"
            >
              {service}
            </span>
          ))}
          {member.services.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs text-[#94a3b8]/50">
              +{member.services.length - 4}
            </span>
          )}
        </div>
      )}

      {/* LinkedIn */}
      <a
        href={member.linkedin_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors group/link"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <span>LinkedIn</span>
        <svg
          className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity -translate-x-1 group-hover/link:translate-x-0 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}
