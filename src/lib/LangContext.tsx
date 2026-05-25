'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Lang, T } from './i18n'

interface LangCtx {
  lang: Lang
  t: T
  setLang: (l: Lang) => void
}

const Ctx = createContext<LangCtx>({ lang: 'cs', t: translations.cs, setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('cs')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'cs' || stored === 'en') setLangState(stored)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('lang', l)
    document.documentElement.lang = l
  }

  return (
    <Ctx.Provider value={{ lang, t: translations[lang] as T, setLang }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLang = () => useContext(Ctx)
