import React from 'react'

function About(){
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold">About Us</h1>
      <p className="mt-4 text-slate-300">We are building the modern marketplace for mobility. Our mission is to make driving experiences accessible, flexible, and joyful—whether you're renting for a weekend or buying your dream car.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {["Quality fleet","Trusted community","Seamless experience"].map((t,i)=> (
          <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="font-semibold text-white">{t}</p>
            <p className="text-slate-400 text-sm mt-2">We obsess over details so you can focus on the journey.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
