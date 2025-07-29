'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-[#0b1b3e] shadow-md' : 'bg-[#0b1b3e]'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png" // 🖼 Replace with your actual logo path
            alt="Feedbox Logo"
            className="h-8 sm:h-10"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-white font-medium text-sm tracking-wide">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1b3e] text-white px-4 pb-4 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
