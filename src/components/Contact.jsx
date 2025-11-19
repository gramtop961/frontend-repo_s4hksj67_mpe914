import React from 'react'

function Contact(){
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold">Contact Us</h1>
      <p className="mt-2 text-slate-300">We'd love to hear from you. Send us a message and we'll get back within 24 hours.</p>
      <form className="mt-8 grid gap-4">
        <input className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Full name"/>
        <input className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Email"/>
        <textarea rows="5" className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Your message"/>
        <button className="px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500 w-fit">Send</button>
      </form>
    </section>
  )
}

export default Contact
