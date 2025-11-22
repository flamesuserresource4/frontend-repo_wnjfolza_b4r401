import React from 'react'

const packages = [
  {
    title: 'Cultural Triangle Tour',
    days: '5 Days',
    price: '$799',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop',
    desc: 'Explore Sigiriya, Dambulla, and Kandy with heritage-rich experiences.',
  },
  {
    title: 'Down South Beach Escape',
    days: '3 Days',
    price: '$499',
    img: 'https://images.unsplash.com/photo-1540206276202-87dce2fd1d08?q=80&w=1600&auto=format&fit=crop',
    desc: 'Relax by the golden beaches of Mirissa, Unawatuna, and Galle.',
  },
  {
    title: 'Hill Country Adventure',
    days: '7 Days',
    price: '$1,099',
    img: 'https://images.unsplash.com/photo-1569428034239-4f7b64f3355d?q=80&w=1600&auto=format&fit=crop',
    desc: 'Tea estates, waterfalls, and scenic train rides through the hills.',
  },
  {
    title: 'Wildlife & Safari Experience',
    days: '4 Days',
    price: '$699',
    img: 'https://images.unsplash.com/photo-1585468274950-c9fc38b89d1f?q=80&w=1600&auto=format&fit=crop',
    desc: 'Leopards, elephants, and birdlife in Yala and Udawalawe.',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-5xl font-semibold tracking-[-0.5px] text-[#003459]">
            Our Most Popular Packages
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-[#F4C542] to-[#FF7A45] mx-auto rounded-full"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-[#00C4CC] to-[#0066CC] text-white shadow">
                  {p.price}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#003459]">{p.title}</h3>
                  <span className="text-sm text-slate-600">{p.days}</span>
                </div>
                <p className="mt-2 text-slate-600 text-sm leading-[1.6]">{p.desc}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center justify-center rounded-xl border-2 border-[#00C4CC] text-[#003459] px-4 py-2 text-sm font-semibold hover:bg-[#00C4CC]/10 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
