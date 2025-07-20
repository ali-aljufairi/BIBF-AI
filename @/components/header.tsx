import Link from "next/link"
import { useState } from "react"
import { Menu, X, BookOpen } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Personal Blog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/notes" className="text-slate-300 hover:text-white transition-colors font-medium">
              Notes
            </Link>
            <Link href="/aws-ml" className="text-slate-300 hover:text-white transition-colors font-medium">
              AWS ML
            </Link>
            <Link href="/data-science" className="text-slate-300 hover:text-white transition-colors font-medium">
              Data Science
            </Link>
            <Link href="/cloud-computing" className="text-slate-300 hover:text-white transition-colors font-medium">
              Cloud
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link href="/notes" className="text-slate-300 hover:text-white transition-colors font-medium">
                Notes
              </Link>
              <Link href="/aws-ml" className="text-slate-300 hover:text-white transition-colors font-medium">
                AWS ML
              </Link>
              <Link href="/data-science" className="text-slate-300 hover:text-white transition-colors font-medium">
                Data Science
              </Link>
              <Link href="/cloud-computing" className="text-slate-300 hover:text-white transition-colors font-medium">
                Cloud
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-white transition-colors font-medium">
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
