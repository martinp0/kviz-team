'use client'

import { useState } from 'react'

const QUESTIONS = [
  {
    q: 'Co je MDM?',
    options: ['Mobile Device Management', 'Most Dynamic Method', 'Mega Data Module', "Martin's Deploy Machine"],
    correct: 0,
  },
  {
    q: 'Jaký příkaz zobrazí running containers?',
    options: ['docker list', 'docker ps', 'docker show', 'docker containers'],
    correct: 1,
  },
  {
    q: 'Kolik je 2¹⁰?',
    options: ['512', '1 024', '2 048', '100'],
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
    setQi(0); setScore(0); setSelected(null); setDone(false)
  }

  const q = QUESTIONS[qi]

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white shadow-sm text-sm text-gray-600 hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition-all group"
        >
          <span className="text-base">🧠</span>
          Jsme tým z kvízu — otestuj se
          <span className={`text-gray-300 transition-transform ${open ? 'rotate-180' : ''}`}>↓</span>
        </button>

        {open && (
          <div className="mt-5 w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            {!done ? (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs text-gray-400 font-mono">{qi + 1}/{QUESTIONS.length}</span>
                  <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#7c3aed] rounded-full transition-all duration-500"
                      style={{ width: `${(qi / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-4">{q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, idx) => {
                    const isCorrect = idx === q.correct
                    const isSelected = idx === selected
                    let cls = 'w-full text-left px-4 py-2.5 rounded-xl text-sm border transition-all '
                    if (selected === null) {
                      cls += 'border-gray-200 text-gray-600 hover:border-[#7c3aed]/40 hover:bg-[#faf5ff] hover:text-[#7c3aed]'
                    } else if (isSelected && isCorrect) {
                      cls += 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    } else if (isSelected && !isCorrect) {
                      cls += 'border-red-200 bg-red-50 text-red-600'
                    } else if (isCorrect) {
                      cls += 'border-emerald-100 bg-emerald-50/50 text-emerald-600'
                    } else {
                      cls += 'border-gray-100 text-gray-400'
                    }
                    return (
                      <button key={opt} onClick={() => handleAnswer(idx)} disabled={selected !== null} className={cls}>
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-2">
                <div className="text-3xl mb-3">
                  {score === QUESTIONS.length ? '🏆' : score >= 2 ? '🎯' : '📚'}
                </div>
                <p className="font-semibold text-[#0f0f0f] mb-1">{score}/{QUESTIONS.length} správně</p>
                <p className="text-gray-400 text-sm mb-4">
                  {score === QUESTIONS.length
                    ? 'Perfektní! Ty bys do týmu pasoval/a.'
                    : score >= 2 ? 'Dobrá práce! Kvíz bys zvládl/a.'
                    : 'Nevadí — na kvízu se naučíš víc 😄'}
                </p>
                <button
                  onClick={reset}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-[#faf5ff] text-[#7c3aed] hover:bg-[#ede9fe] transition-colors"
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
