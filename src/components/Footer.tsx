export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-10 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#5b21b6] flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0a0a0a]">Kvíz IT Tým</p>
            <p className="text-xs text-zinc-400">Praha & remote · IT freelancers</p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-xs text-zinc-400">
          <a href="https://martinpohl.cz" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 transition-colors">martinpohl.cz</a>
          <a href="mailto:m@pohl.uk" className="hover:text-zinc-700 transition-colors">m@pohl.uk</a>
          <a href="https://www.linkedin.com/in/martinp0/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-700 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
