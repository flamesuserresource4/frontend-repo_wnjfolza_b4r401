import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#packages', label: 'Packages' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/80 shadow-md' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-[1320px] px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold tracking-tight inline-flex items-baseline gap-1 select-none">
          {/* Text-only mark using brand fonts for a refined, traditional feel */}
          <span
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-[#003459] leading-none"
          >
            Ceylon
          </span>
          <span
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
            className="text-[#F4C542] leading-none"
          >
            RS
          </span>
          <span
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
            className="text-[#0066CC] leading-none"
          >
            Tours
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-[#003459] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          {/* Subtle Lankan warm-gradient for primary CTA */}
          <a
            href="#packages"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#F4C542] via-[#FF7A45] to-[#C05C2A] text-white px-5 py-2.5 shadow-[0_8px_24px_rgba(255,122,69,0.25)] hover:shadow-[0_12px_28px_rgba(255,122,69,0.35)] transition-all duration-200"
          >
            Explore Packages
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/70 shadow-sm"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6 text-slate-800" />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold text-slate-900">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-slate-700 text-lg">
                  {link.label}
                </a>
              ))}
              <a
                href="#packages"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#F4C542] via-[#FF7A45] to-[#C05C2A] text-white px-5 py-3 shadow-[0_8px_24px_rgba(255,122,69,0.25)]"
              >
                Explore Packages
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
