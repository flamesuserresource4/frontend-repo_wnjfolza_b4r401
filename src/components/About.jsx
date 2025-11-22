import React from 'react'

const features = [
  {
    title: 'Licensed local guides',
    desc: 'Travel with experts who know every hidden gem and cultural nuance.',
  },
  {
    title: 'Custom itineraries',
    desc: 'Your journey, your pace — crafted around what you love most.',
  },
  {
    title: 'Private transport',
    desc: 'Comfortable, air-conditioned vehicles with professional drivers.',
  },
  {
    title: '24/7 support',
    desc: 'We are always a message away to help you feel at home.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-[#F7F9FB] to-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-5xl font-semibold tracking-[-0.5px] text-[#003459]">
            Why Travel With Ceylon RS Tours?
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-[#F4C542] to-[#FF7A45] mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 leading-[1.5]">
            We combine authentic local knowledge with premium hospitality to deliver journeys that feel effortless and unforgettable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all border border-slate-100">
              <h3 className="text-xl font-semibold text-[#003459]">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-[1.6]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
