export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
          <span className="font-medium text-gray-600">Kvíz IT Tým</span>
          <span>·</span>
          <span>Praha & remote</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://martinpohl.cz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">martinpohl.cz</a>
          <a href="mailto:m@pohl.uk" className="hover:text-gray-600 transition-colors">m@pohl.uk</a>
        </div>
      </div>
    </footer>
  )
}
