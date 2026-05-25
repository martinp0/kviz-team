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
      if (qi + 1 < qs.length) {
        setQi(q => q + 1)
        setSelected(null)
      } else {
        setDone(true)
      }
    }, 900)
  }

  function reset() {
    setQi(0); setScore(0); setSelected(null); setDone(false)
  }

  const q = qs[qi]
  const resultMsg = score === qs.length ? t.quiz.results[0] : score >= 2 ? t.quiz.results[1] : t.quiz.results[2]

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <button
          onClick={() => setOpen(o => !o)}
          className="btn-ghost px-6 py-3 text-sm"
          style={{ color: 'var(--tx2)' }}>
          <span className="text-base">🧠</span>
          {t.quiz.toggle}
          <span style={{ color: 'var(--tx3)', transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }}>↓</span>
        </button>

        {open && (
          <div className="mt-5 w-full max-w-sm glass-strong p-6 fade-in">
            {!done ? (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono" style={{ color: 'var(--tx3)' }}>{qi + 1}/{qs.length}</span>
                  <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'var(--glass-bg)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${(qi / qs.length) * 100}%`, background: 'var(--ac)' }} />
                  </div>
                </div>

                <p className="text-sm font-semibold mb-4" style={{ color: 'var(--tx1)' }}>{q.q}</p>

                <div className="space-y-2">
                  {q.opts.map((opt, idx) => {
                    const isCorrect = idx === q.correct
                    const isSelected = idx === selected
                    let bg = 'var(--glass-bg)'
                    let color = 'var(--tx2)'
                    let border = 'var(--glass-border)'

                    if (selected !== null) {
                      if (isSelected && isCorrect)  { bg = 'rgba(5,150,105,0.1)';  color = '#059669'; border = 'rgba(5,150,105,0.25)' }
                      else if (isSelected && !isCorrect) { bg = 'rgba(239,68,68,0.08)';  color = '#ef4444'; border = 'rgba(239,68,68,0.2)' }
                      else if (isCorrect)           { bg = 'rgba(5,150,105,0.07)';  color = '#059669'; border = 'rgba(5,150,105,0.2)' }
                      else                          { color = 'var(--tx3)' }
                    }

                    return (
                      <button key={opt}
                        onClick={() => handleAnswer(idx)}
                        disabled={selected !== null}
                        className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all"
                        style={{ background: bg, color, border: `1px solid ${border}` }}
                        onMouseEnter={e => {
                          if (selected === null) {
                            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--ac-border)'
                            ;(e.currentTarget as HTMLElement).style.color = 'var(--tx1)'
                          }
                        }}
                        onMouseLeave={e => {
                          if (selected === null) {
                            ;(e.currentTarget as HTMLElement).style.borderColor = border
                            ;(e.currentTarget as HTMLElement).style.color = color
                          }
                        }}>
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-2">
                <div className="text-3xl mb-3">
                  {score === qs.length ? '🏆' : score >= 2 ? '🎯' : '📚'}
                </div>
                <p className="font-semibold mb-1" style={{ color: 'var(--tx1)' }}>
                  {t.quiz.score(score, qs.length)}
                </p>
                <p className="text-sm mb-4" style={{ color: 'var(--tx2)' }}>{resultMsg}</p>
                <button
                  onClick={reset}
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                  style={{ background: 'var(--ac-light)', color: 'var(--ac)', border: '1px solid var(--ac-border)' }}>
                  {t.quiz.restart}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
