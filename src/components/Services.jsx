import React from 'react'
import { Link } from 'react-router-dom'

function Card({title,desc,cta,to}){
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors">
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-slate-300 mt-2">{desc}</p>
      <Link to={to} className="mt-4 inline-block px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500">{cta}</Link>
    </div>
  )
}

function Services(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold">Services</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card title="Rent Cars" desc="Flexible rentals by hour, day, or week with premium insurance." cta="Find rentals" to="/rent"/>
        <Card title="Buy Cars" desc="Curated collection of verified vehicles with transparent history." cta="Browse cars" to="/buy"/>
        <Card title="Sell Cars" desc="List your car in minutes and reach serious buyers fast." cta="List your car" to="/sell"/>
      </div>
    </section>
  )
}

export default Services
