// Navbar.tsx
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import MegaMenu from './MegaMenu'

const Navbar: React.FC = () => {
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <img src="/ai-logo.svg" alt="AI Logo" className="w-8 h-8" /> */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
            GZ
          </div>
          <span className="text-2xl font-semibold tracking-wide text-white font-['Poppins']">
            GAZZEE
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-white">
          <a href="#hero" className="hover:text-cyan-400 transition">Home</a>
          <a href="#services" className="hover:text-cyan-400 transition">What We Do</a>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center hover:text-cyan-400 transition">
              Solutions <ChevronDown size={18} className="ml-1" />
            </button>

            <AnimatePresence>
              {megaOpen && <MegaMenu />}
            </AnimatePresence>
          </div>

          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          {/* <ThemeToggle /> */}
        </nav>
      </div>
    </header>
  )
}

export default Navbar;