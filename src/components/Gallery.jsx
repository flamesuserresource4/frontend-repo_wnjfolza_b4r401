import React from 'react'

const images = [
  { src: 'https://images.unsplash.com/photo-1637652979770-0892f62f2a84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWdpcml5YSUyMFJvY2slMjBGb3J0cmVzcyUyMGF0fGVufDB8MHx8fDE3NjM4MDEyMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Sigiriya Rock Fortress at sunrise' },
  { src: 'https://images.unsplash.com/photo-1637652979770-0892f62f2a84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWdpcml5YSUyMFJvY2slMjBGb3J0cmVzcyUyMGF0fGVufDB8MHx8fDE3NjM4MDEyMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Nine Arches Bridge with scenic train in Ella' },
  { src: 'https://images.unsplash.com/photo-1637652979770-0892f62f2a84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWdpcml5YSUyMFJvY2slMjBGb3J0cmVzcyUyMGF0fGVufDB8MHx8fDE3NjM4MDEyMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Lush tea plantations in Nuwara Eliya' },
  { src: 'https://images.unsplash.com/photo-1637652979770-0892f62f2a84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWdpcml5YSUyMFJvY2slMjBGb3J0cmVzcyUyMGF0fGVufDB8MHx8fDE3NjM4MDEyMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Palm-fringed beach in Mirissa' },
  { src: 'https://images.unsplash.com/photo-1637652979770-0892f62f2a84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWdpcml5YSUyMFJvY2slMjBGb3J0cmVzcyUyMGF0fGVufDB8MHx8fDE3NjM4MDEyMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Galle Fort lighthouse and ramparts' },
  { src: 'https://images.unsplash.com/photo-1637652979770-0892f62f2a84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWdpcml5YSUyMFJvY2slMjBGb3J0cmVzcyUyMGF0fGVufDB8MHx8fDE3NjM4MDEyMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Leopard in Yala National Park' },
  { src: 'https://images.unsplash.com/photo-1665564807063-d306ea1d7876?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOaW5lJTIwQXJjaGVzJTIwQnJpZGdlJTIwd2l0aHxlbnwwfDB8fHwxNzYzODAxMjI3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Traditional stilt fishermen at dusk' },
  { src: 'https://images.unsplash.com/photo-1693379372097-66b49603eb77?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXNoJTIwdGVhJTIwcGxhbnRhdGlvbnMlMjBpbnxlbnwwfDB8fHwxNzYzODAxMjI3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Temple of the Tooth in Kandy' },
  { src: 'https://images.unsplash.com/photo-1585334633835-8d22cf73bc4e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWxtLWZyaW5nZWQlMjBiZWFjaCUyMGluJTIwTWlyaXNzYXxlbnwwfDB8fHwxNzYzODAxMjI4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Blue whale watching off the southern coast' },
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
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="mb-4 w-full rounded-2xl shadow-sm hover:shadow-md transition-shadow" />
          ))}
        </div></div>
      </div>
    </section>
  )
}
