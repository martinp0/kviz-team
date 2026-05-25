'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LangContext'

export default function QuizEasterEgg() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [qi, setQi] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  const qs = t.quiz.questions

  function handleAnswer(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    if (idx === qs[qi].correct) setScore(s => s + 1)
    setTimeout(() => {
      if (qi + 1 < qs.length) { setQi(q => q + 1); setSelected(null) }
      else setDone(true)
    }, 900)
  }

  function reset() {
    setQi(0); setScore(0); setSelected(null); setDone(false)
  }

  const q = qs[qi]
  const resultMsg = score === qs.length ? t.quiz.results[0] : score >= 2 ? t.quiz.results[1] : t.quiz.results[2]

  return (
    <section className="py-12 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all text-[12px]"
          style={{
            fontFamily: 'var(--font-geist-mono)',
            color: 'var(--tx3)',
            border: '1px solid var(--divider)',
            letterSpacing: '0.04em',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = 'var(--ac)'
            el.style.borderColor = 'var(--ac-border)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = 'var(--tx3)'
            el.style.borderColor = 'var(--divider)'
          }}
        >
          <span>{'>'}_</span>
          <span>{t.quiz.toggle}</span>
          <span style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>↓</span>
        </button>

        {open && (
          <div
            className="mt-4 w-full max-w-md rounded-xl overflow-hidden fade-in"
            style={{
              background: 'rgba(5,5,14,0.96)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 16px 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-1.5 px-4 py-2.5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.025)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-2 h-2 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-2 h-2 rounded-full" style={{ background: '#28c840' }} />
              <span
                className="ml-auto"
                style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}
              >
                TECH-SCREENING v1.0
              </span>
            </div>

            <div className="p-5">
              {!done ? (
                <>
                  {/* Progress */}
                  <div className="flex items-center gap-3 mb-5">
                    <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
                      Q{qi + 1}/{qs.length}
                    </span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${(qi / qs.length) * 100}%`, background: 'var(--ac)' }}
                      />
                    </div>
                  </div>

                  {/* Prompt */}
                  <div className="mb-4">
                    <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px', color: '#a78bfa' }}>❯ </span>
                    <span className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{q.q}</span>
                  </div>

                  <div className="space-y-1.5">
                    {q.opts.map((opt, idx) => {
                      const isCorrect = idx === q.correct
                      const isSelected = idx === selected
                      let bg = 'rgba(255,255,255,0.04)'
                      let color = 'rgba(255,255,255,0.55)'
                      let border = 'rgba(255,255,255,0.07)'
                      let prefix = String.fromCharCode(65 + idx) // A, B, C, D

                      if (selected !== null) {
                        if (isSelected && isCorrect)   { bg = 'rgba(16,185,129,0.12)'; color = '#34d399'; border = 'rgba(16,185,129,0.25)' }
                        else if (isSelected && !isCorrect) { bg = 'rgba(239,68,68,0.1)'; color = '#f87171'; border = 'rgba(239,68,68,0.22)' }
                        else if (isCorrect)             { bg = 'rgba(16,185,129,0.07)'; color = '#34d399'; border = 'rgba(16,185,129,0.18)' }
                        else                            { color = 'rgba(255,255,255,0.22)' }
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleAnswer(idx)}
                          disabled={selected !== null}
                          className="w-full text-left px-3.5 py-2.5 rounded-lg text-[12px] transition-all flex items-center gap-2.5"
                          style={{ background: bg, color, border: `1px solid ${border}`, fontFamily: 'var(--font-geist-mono)' }}
                          onMouseEnter={e => {
                            if (selected === null) {
                              const el = e.currentTarget as HTMLElement
                              el.style.borderColor = 'rgba(167,139,250,0.3)'
                              el.style.color = '#fff'
                            }
                          }}
                          onMouseLeave={e => {
                            if (selected === null) {
                              const el = e.currentTarget as HTMLElement
                              el.style.borderColor = border
                              el.style.color = color
                            }
                          }}
                        >
                          <span style={{ fontSize: '10px', opacity: 0.5, width: '14px', flexShrink: 0 }}>{prefix}</span>
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <div
                    className="text-2xl mb-3"
                    style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '28px' }}
                  >
                    {score === qs.length ? '🏆' : score >= 2 ? '🎯' : '📚'}
                  </div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: '#fff', fontFamily: 'var(--font-geist-mono)', fontSize: '13px', letterSpacing: '0.04em' }}
                  >
                    {t.quiz.score(score, qs.length)}
                  </p>
                  <p className="text-[12px] mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>{resultMsg}</p>
                  <button
                    onClick={reset}
                    className="px-4 py-2 rounded-lg text-[11px] font-semibold transition-all"
                    style={{
                      fontFamily: 'var(--font-geist-mono)',
                      background: 'rgba(167,139,250,0.1)',
                      color: '#a78bfa',
                      border: '1px solid rgba(167,139,250,0.22)',
                      letterSpacing: '0.06em',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.18)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(167,139,250,0.1)' }}
                  >
                    {t.quiz.restart.toUpperCase()}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
