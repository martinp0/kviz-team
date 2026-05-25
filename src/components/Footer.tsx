export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>K</div>
          <div>
            <p className="text-sm font-semibold text-zinc-900">Kvíz IT Tým</p>
            <p className="text-xs text-zinc-400">Praha & remote · IT freelancers</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="https://martinpohl.cz" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">martinpohl.cz</a>
          <a href="mailto:m@pohl.uk" className="hover:text-violet-600 transition-colors">m@pohl.uk</a>
          <a href="https://www.linkedin.com/in/martinp0/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
