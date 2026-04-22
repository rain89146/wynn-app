import React from 'react'
import { motion } from 'framer-motion';

export function BurgerIcon({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative w-6 h-5 cursor-pointer"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    >
      <span className={`absolute left-0 block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'top-2 w-full rotate-45' : 'top-0 w-full'}`} />
      {/* middle bar — split halves */}
      <motion.span
        className="absolute left-0 top-2 block h-0.5 w-1/2 bg-current origin-right"
        animate={menuOpen ? { x: -10, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="absolute left-1/2 top-2 block h-0.5 w-1/2 bg-current origin-left"
        animate={menuOpen ? { x: 10, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <span className={`absolute left-0 block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'top-2 w-full -rotate-45' : 'top-4 w-full'}`} />
    </button>
  );
}