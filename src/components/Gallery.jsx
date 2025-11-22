import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541844053589-346841d0b34a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562157873-818bc0726f3f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1572197498888-95f5d8f8b9c6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#F7F9FB]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-5xl font-semibold tracking-[-0.5px] text-[#003459]">
            Gallery
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-[#F4C542] to-[#FF7A45] mx-auto rounded-full"></div>
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {images.map((src, i) => (
            <img key={i} src={src} alt="Sri Lanka" className="mb-4 w-full rounded-2xl shadow-sm hover:shadow-md transition-shadow" />
          ))}
        </div></div>
      </div>
    </section>
  )
}
