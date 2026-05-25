export default function Footer() {
  return (
    <footer className="border-t border-[#1e2035] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]/60">
        <div className="flex items-center gap-2 font-mono">
          <span className="text-[#00d4ff]">{'{'}</span>
          <span>kvíz.IT</span>
          <span className="text-[#7c3aed]">{'}'}</span>
          <span className="ml-2">Praha · Remote-first</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://martinpohl.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#94a3b8] transition-colors"
          >
            martinpohl.cz
          </a>
          <a
            href="mailto:m@pohl.uk"
            className="hover:text-[#94a3b8] transition-colors"
          >
            m@pohl.uk
          </a>
        </div>
      </div>
    </footer>
  )
}
