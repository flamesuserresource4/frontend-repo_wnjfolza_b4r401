import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to match brand colors; pointer-events-none so Spline stays interactive */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#00345966] via-black/50 to-black/70" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-28 md:py-36 text-center text-white">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md mb-6">
          <span className="text-yellow-300">★</span>
          <span className="text-sm">4.9 Rating • 10,000+ Happy Travellers</span>
        </div>

        <h1 className="font-[600] leading-[1.15] tracking-[-0.5px] text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display',serif]">
          Discover Sri Lanka Like Never Before
        </h1>
        <p className="mt-6 text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-[1.5]">
          Tailor-made tours, unforgettable experiences, and the true spirit of Ceylon.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#packages" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00C4CC] to-[#0066CC] text-white px-7 py-4 text-base font-semibold shadow-[0_8px_24px_rgba(0,102,204,0.28)] hover:shadow-[0_12px_32px_rgba(0,102,204,0.4)] transform hover:scale-[1.02] transition-all">
            Explore Packages
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border-2 border-[#00C4CC] text-white/95 px-7 py-4 text-base font-semibold hover:bg-[#00C4CC]/10 transition-colors">
            Plan Your Trip
          </a>
        </div>
      </div>
    </section>
  )
}
