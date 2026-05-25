import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TeamSection from '@/components/TeamSection'
import ServicesSection from '@/components/ServicesSection'
import JoinSection from '@/components/JoinSection'
import ContactSection from '@/components/ContactSection'
import QuizEasterEgg from '@/components/QuizEasterEgg'
import Footer from '@/components/Footer'
import { Member } from '@/lib/types'

async function getMembers(): Promise<Member[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return []
  try {
    const { supabase } = await import('@/lib/supabase')
    const { data } = await supabase
      .from('members')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: true })
    return data ?? []
  } catch {
    return []
  }
}

export const revalidate = 60

export default async function Page() {
  const members = await getMembers()

  return (
    <main>
      <Nav />
      <Hero />
      <TeamSection dbMembers={members} />
      <ServicesSection />
      <QuizEasterEgg />
      <JoinSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
