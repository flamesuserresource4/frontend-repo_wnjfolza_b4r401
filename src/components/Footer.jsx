import React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0B1620] text-white pt-16 pb-10">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-semibold tracking-tight mb-3">
            <span className="text-[#003459]">Ceylon</span>
            <span className="text-[#00C4CC]"> RS</span>
            <span className="text-white"> Tours</span>
          </div>
          <p className="text-white/70 text-sm leading-[1.6]">Premium, tailor-made travel experiences across Sri Lanka.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-white/80 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <div className="text-white/80 text-sm">
            <p>Email: hello@ceylonrstours.com</p>
            <p>Phone: +94 77 123 4567</p>
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Follow</h4>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/10 hover:bg-white/15 transition"><Facebook className="w-5 h-5"/></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/10 hover:bg-white/15 transition"><Instagram className="w-5 h-5"/></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-lg bg-white/10 hover:bg-white/15 transition"><Youtube className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10" />
      <div className="mx-auto max-w-[1200px] px-6 pt-6 text-center text-white/60 text-sm">© {new Date().getFullYear()} Ceylon RS Tours. All rights reserved.</div>
    </footer>
  )
}
