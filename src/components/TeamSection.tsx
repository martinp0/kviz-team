import { Member } from '@/lib/types'
import MemberCard from './MemberCard'

const SEED_MEMBERS: Member[] = [
  {
    id: 'seed-1',
    name: 'Martin Pohl',
    role: 'Systems Engineer',
    linkedin_url: 'https://www.linkedin.com/in/martinpohl/',
    description:
      'Apple MDM specialista a systems engineer. Nastavuji, spravuji a automatizuji Apple zařízení ve firmách — od startupů po enterprise. Taky buduju vlastní projekty a nástroje.',
    services: ['Apple MDM', 'Jamf Pro', 'Mosyle', 'IT Automation', 'macOS', 'iOS'],
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
    description:
      'Přidej se a doplň svůj profil přes formulář níže.',
    services: ['Testování', 'QA'],
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
    description:
      'Přidej se a doplň svůj profil přes formulář níže.',
    services: ['IT Recruitment', 'Sourcing'],
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
    description:
      'Přidej se a doplň svůj profil přes formulář níže.',
    services: ['Kubernetes', 'CI/CD', 'AWS', 'Terraform'],
    avatar_url: null,
    approved: true,
    accepting_work: false,
    created_at: '',
  },
]

type Props = {
  dbMembers: Member[]
}

export default function TeamSection({ dbMembers }: Props) {
  const allMembers = [
    ...SEED_MEMBERS.map((s) => {
      const match = dbMembers.find((m) =>
        m.linkedin_url.includes('martinpohl') && s.id === 'seed-1'
      )
      return match ?? s
    }),
    ...dbMembers.filter(
      (m) => !m.linkedin_url.includes('martinpohl')
    ),
  ]

  return (
    <section id="team" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00d4ff] mb-4">
          <span className="text-[#7c3aed]">{'// '}</span>
          team.members
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Kdo jsme
        </h2>
        <p className="text-[#94a3b8] max-w-xl">
          Čtyři IT lidé s různými specialitami. Potkáváme se u kvízu, spolupracujeme u projektů.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {allMembers.slice(0, 8).map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}
