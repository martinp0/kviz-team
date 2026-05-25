'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function submitMember(formData: FormData) {
  const name = formData.get('name') as string
  const role = formData.get('role') as string
  const linkedin_url = formData.get('linkedin_url') as string
  const description = formData.get('description') as string
  const servicesRaw = formData.get('services') as string
  const services = servicesRaw
    ? servicesRaw.split(',').map((s) => s.trim()).filter(Boolean)
    : []

  if (!name || !role || !linkedin_url || !description) {
    return { error: 'Vyplň prosím všechna povinná pole.' }
  }

  const linkedinPattern = /^https:\/\/(www\.)?linkedin\.com\//i
  if (!linkedinPattern.test(linkedin_url)) {
    return { error: 'Zadej platnou LinkedIn URL (https://linkedin.com/in/...)' }
  }

  const { error } = await supabase.from('members').insert({
    name,
    role,
    linkedin_url,
    description,
    services,
    approved: false,
    accepting_work: true,
  })

  if (error) {
    return { error: 'Něco se pokazilo. Zkus to prosím znovu.' }
  }

  revalidatePath('/')
  return { success: true }
}

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'Vyplň prosím všechna pole.' }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return { error: 'Zadej platnou emailovou adresu.' }
  }

  const { error } = await supabase.from('contacts').insert({ name, email, message })

  if (error) {
    return { error: 'Něco se pokazilo. Zkus to prosím znovu.' }
  }

  return { success: true }
}
