import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0E1A22] text-white">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,#00C4CC_0,transparent_35%),radial-gradient(circle_at_80%_30%,#0066CC_0,transparent_35%)]" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-5xl font-semibold tracking-[-0.5px]">
            Plan Your Dream Trip Today
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-[#F4C542] to-[#FF7A45] mx-auto rounded-full"></div>
          <p className="mt-6 text-white/80 leading-[1.5]">Well craft a bespoke itinerary just for you. Tell us what you love and well handle the rest.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6 shadow-xl">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input className="w-full rounded-xl bg-white/90 text-slate-900 px-4 py-3 outline-none focus:ring-4 focus:ring-[#00C4CC]/40 shadow-sm" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Email</label>
                <input type="email" className="w-full rounded-xl bg-white/90 text-slate-900 px-4 py-3 outline-none focus:ring-4 focus:ring-[#00C4CC]/40 shadow-sm" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Message</label>
                <textarea rows="4" className="w-full rounded-xl bg-white/90 text-slate-900 px-4 py-3 outline-none focus:ring-4 focus:ring-[#00C4CC]/40 shadow-sm" placeholder="Tell us about your dream trip" />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00C4CC] to-[#0066CC] text-white px-6 py-3 text-base font-semibold shadow-[0_8px_24px_rgba(0,102,204,0.28)] hover:shadow-[0_12px_32px_rgba(0,102,204,0.4)]">Send Message</button>
            <div className="mt-4 text-sm text-white/70">
              <p>Phone: +94 77 123 4567</p>
              <p>WhatsApp: +94 77 123 4567</p>
              <p>Location: Colombo, Sri Lanka</p>
            </div>
          </form>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63358.19717673472!2d79.8144104!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593c36f7a8e9%3A0x6f2b56e2b9f0e3c2!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
