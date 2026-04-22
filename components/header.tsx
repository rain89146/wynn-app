'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BurgerIcon } from './icons';
import { LinkObject } from './types/types';

type HeaderProps = {
  logo: string;
  menuItems: LinkObject[];
}

export default function Header({ logo, menuItems }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='sticky top-0 z-50 md:relative bg-white w-full'>
        <div className='container max-w-5xl flex gap-12 py-5 mx-auto items-center px-8 md:px-0'>
          <div className="relative w-[132px] h-[60px]">
            <Link href="/">
              <Image src={logo} alt="Logo" fill className="object-contain" />
            </Link>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {menuItems.map((item, index) => (
                <NavItem key={index} href={item.url} label={item.displayName} />
              ))}
            </ul>
          </div>
          {/* mobile hamburger icon */}
          <div className='md:hidden flex-1 flex justify-end'>
            <BurgerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='md:hidden fixed inset-0 z-40 bg-white flex flex-col px-8 pt-28'
          >
            <ul className='flex flex-col'>
              {menuItems.map((item, index) => (
                <MobileNavItem key={index} href={item.url} label={item.displayName} onClick={() => setMenuOpen(false)} />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <div className='text-center font-bold list-none text-sm uppercase relative transition-all duration-300 hover:border-black focus-halo border-transparent border-b-1'>
        <Link href={href} className='relative focus-outline outline-none'>{label}</Link>
      </div>
    </li>
  )
}

function MobileNavItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <li className='border-b border-gray-200'>
      <Link
        href={href}
        onClick={onClick}
        className='block font-bold text-sm uppercase tracking-wide py-5 transition-colors duration-200 hover:text-gray-500'
      >
        {label}
      </Link>
    </li>
  )
}
