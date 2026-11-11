import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TeamSection from '@/components/TeamSection'
import ServicesSection from '@/components/ServicesSection'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import QuizEasterEgg from '@/components/QuizEasterEgg'
import JoinSection from '@/components/JoinSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { Member } from '@/lib/types'

// Public marketing page: language, theme, and motion run in the browser.
// The only server data is the shared approved-members list, so prerender
// the route and refresh it every 5 minutes instead of on each request.
export const dynamic = 'force-static'
export const revalidate = 300

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

export default async function Page() {
  const members = await getMembers()
  return (
    <main>
      <Nav />
      <Hero />
      <TeamSection dbMembers={members} />
      <ServicesSection />
      <Process />
      <WhyUs />
      <QuizEasterEgg />
      <JoinSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
