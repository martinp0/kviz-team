import { Member } from '@/lib/types'
import MemberCard from './MemberCard'

const SEED_MEMBERS: Member[] = [
  {
    id: 'seed-1',
    name: 'Martin Pohl',
    role: 'Systems Engineer',
    linkedin_url: 'https://www.linkedin.com/in/martinp0/',
    description:
      'Apple MDM specialista. Zero-touch deployment, Jamf Pro, Mosyle, SSO a identity management pro Apple fleet. Taky buduju vlastní projekty a nástroje.',
    services: ['Apple MDM', 'Jamf Pro', 'Mosyle', 'macOS', 'iOS', 'SSO'],
    avatar_url: null,
    approved: true,
    accepting_work: true,
    created_at: '',
  },
  {
    id: 'seed-2',
    name: 'QA specialista',
    role: 'QA Engineer',
    linkedin_url: 'https://linkedin.com',
    description: 'Člen týmu z kvízu. Přidej se přes formulář níže a doplň svůj vlastní profil.',
    services: ['Manual QA', 'Testování', 'Automatizace'],
    avatar_url: null,
    approved: true,
    accepting_work: false,
    created_at: '',
  },
  {
    id: 'seed-3',
    name: 'IT Recruiterka',
    role: 'IT Recruiter',
    linkedin_url: 'https://linkedin.com',
    description: 'Člen týmu z kvízu. Přidej se přes formulář níže a doplň svůj vlastní profil.',
    services: ['IT Recruitment', 'Sourcing', 'Screening'],
    avatar_url: null,
    approved: true,
    accepting_work: false,
    created_at: '',
  },
  {
    id: 'seed-4',
    name: 'DevOps Engineer',
    role: 'DevOps Engineer',
    linkedin_url: 'https://linkedin.com',
    description: 'Člen týmu z kvízu. Přidej se přes formulář níže a doplň svůj vlastní profil.',
    services: ['Kubernetes', 'CI/CD', 'AWS', 'Terraform', 'Docker'],
    avatar_url: null,
    approved: true,
    accepting_work: false,
    created_at: '',
  },
]

export default function TeamSection({ dbMembers }: { dbMembers: Member[] }) {
  const martinFromDb = dbMembers.find((m) => m.linkedin_url.includes('martinp0'))
  const others = dbMembers.filter((m) => !m.linkedin_url.includes('martinp0'))

  const displayed: Member[] = [
    martinFromDb ?? SEED_MEMBERS[0],
    ...SEED_MEMBERS.slice(1).map((seed, i) => others[i] ?? seed),
    ...others.slice(3),
  ]

  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest mb-3">Tým</p>
            <h2 className="text-4xl font-bold text-[#0a0a0a] tracking-tight mb-3">
              Kdo za tím stojí
            </h2>
            <p className="text-zinc-500 max-w-md leading-relaxed">
              Čtyři IT specialisté s různými oblastmi. Potkáváme se u kvízu,
              spolupracujeme u projektů.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse" />
            Přijímáme nové projekty
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayed.slice(0, 8).map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
