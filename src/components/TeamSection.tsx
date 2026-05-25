import { Member } from '@/lib/types'
import MemberCard from './MemberCard'

const SEED_MEMBERS: Member[] = [
  {
    id: 'seed-1',
    name: 'Martin Pohl',
    role: 'Systems Engineer',
    linkedin_url: 'https://www.linkedin.com/in/martinp0/',
    description:
      'Apple MDM specialista. Nastavuji a automatizuji Apple zařízení ve firmách — zero-touch deployment, Jamf, Mosyle, SSO. Taky buduju vlastní projekty.',
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
    description: 'Přidej se přes formulář níže a doplň svůj profil.',
    services: ['Testování', 'Automatizace', 'QA'],
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
    description: 'Přidej se přes formulář níže a doplň svůj profil.',
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
    description: 'Přidej se přes formulář níže a doplň svůj profil.',
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
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#7c3aed] uppercase tracking-widest mb-3">
            Tým
          </p>
          <h2 className="text-4xl font-bold text-[#0f0f0f] mb-3 tracking-tight">
            Kdo jsme
          </h2>
          <p className="text-gray-500 max-w-lg text-base leading-relaxed">
            Čtyři IT specialisté s různými oblastmi. Potkáváme se u kvízu,
            spolupracujeme u projektů.
          </p>
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
