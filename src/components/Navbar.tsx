import React, { useState } from 'react';
import { ChevronDown, Camera, BrainCircuit, Moon, Sun } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';
import { useTheme } from '@/provider/useTheme';

const Navbar: React.FC = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-neutral-200 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* Logo Icon Circle */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg shadow-lg relative">
            <span className="z-10">GZ</span>
            <Camera
              className="absolute opacity-10 w-6 h-6 text-white"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
          </div>

          {/* Company Name with Icon */}
          <div className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold tracking-wide text-blue-900 dark:text-white font-[Poppins]">
              GAZZEE
            </span>
            <BrainCircuit className="w-5 h-5 text-blue-700 dark:text-cyan-300" />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <a href="#hero" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">What We Do</a>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">
              Solutions <ChevronDown size={18} className="ml-1" />
            </button>

            <AnimatePresence>
              {megaOpen && <MegaMenu />}
            </AnimatePresence>
          </div>

          <a href="#usecases" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Our use cases</a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Contact</a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
