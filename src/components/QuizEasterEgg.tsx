'use client'

import { useState } from 'react'

const QUESTIONS = [
  {
    q: 'Co je MDM?',
    options: ['Mobile Device Management', 'Most Dynamic Method', 'Mega Data Module', 'Martin\'s Deployment Machine'],
    correct: 0,
  },
  {
    q: 'Jaký příkaz zobrazí running containers?',
    options: ['docker list', 'docker ps', 'docker show', 'docker containers'],
    correct: 1,
  },
  {
    q: 'Kolik je 2^10?',
    options: ['512', '1024', '2048', '100'],
    correct: 1,
  },
]

export default function QuizEasterEgg() {
  const [open, setOpen] = useState(false)
  const [qi, setQi] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  function handleAnswer(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    if (idx === QUESTIONS[qi].correct) setScore((s) => s + 1)
    setTimeout(() => {
      if (qi + 1 < QUESTIONS.length) {
        setQi((q) => q + 1)
        setSelected(null)
      } else {
        setDone(true)
      }
    }, 900)
  }

  function reset() {
    setQi(0)
    setScore(0)
    setSelected(null)
    setDone(false)
  }

  const q = QUESTIONS[qi]

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e2035] text-[#94a3b8] hover:border-[#7c3aed]/50 hover:text-white transition-all text-sm group"
        >
          <span className="text-lg">🧠</span>
          <span>Jsme IT tým z kvízu — otestuj se</span>
          <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>↓</span>
        </button>

        {open && (
          <div className="mt-6 w-full max-w-md bg-[#0f0f1a] border border-[#7c3aed]/30 rounded-2xl p-6 text-left">
            {!done ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#94a3b8]">
                    {qi + 1}/{QUESTIONS.length}
                  </span>
                  <div className="h-1 flex-1 mx-3 bg-[#1e2035] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#7c3aed] rounded-full transition-all"
                      style={{ width: `${((qi) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>
                <p className="text-white font-medium mb-4">{q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, idx) => {
                    const isCorrect = idx === q.correct
                    const isSelected = idx === selected
                    return (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(idx)}
                        disabled={selected !== null}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm border transition-all ${
                          selected === null
                            ? 'border-[#1e2035] text-[#94a3b8] hover:border-[#7c3aed]/50 hover:text-white'
                            : isSelected && isCorrect
                            ? 'border-[#00ff88] bg-[#00ff88]/10 text-[#00ff88]'
                            : isSelected && !isCorrect
                            ? 'border-red-400 bg-red-400/10 text-red-400'
                            : isCorrect
                            ? 'border-[#00ff88]/50 text-[#00ff88]/50'
                            : 'border-[#1e2035] text-[#94a3b8]/50'
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">
                  {score === QUESTIONS.length ? '🏆' : score >= 2 ? '🎯' : '📚'}
                </div>
                <p className="text-white font-semibold mb-1">
                  {score}/{QUESTIONS.length} správně
                </p>
                <p className="text-[#94a3b8] text-sm mb-4">
                  {score === QUESTIONS.length
                    ? 'Perfektní! Ty bys do týmu pasoval/a.'
                    : score >= 2
                    ? 'Dobrá práce! Kvíz bys zvládl/a.'
                    : 'Nevadí — na kvízu se naučíš víc 😄'}
                </p>
                <button
                  onClick={reset}
                  className="px-4 py-2 rounded-lg text-sm border border-[#7c3aed]/50 text-[#a78bfa] hover:bg-[#7c3aed]/10 transition-colors"
                >
                  Hrát znovu
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
