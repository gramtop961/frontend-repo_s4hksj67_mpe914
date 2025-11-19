import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Sparkles, Gauge, Fuel, MapPin, Car } from 'lucide-react'

function Feature({ icon: Icon, title, desc }){
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-cyan-400"/>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="text-sm text-slate-300">{desc}</p>
    </div>
  )
}

function Landing(){
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center">
          <div className="py-24">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Drive your next story</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl">Rent for a weekend getaway, buy your dream ride, or list your car to earn—one seamless experience.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/rent" className="px-5 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white inline-flex items-center gap-2">Rent a car <ArrowRight className="w-4 h-4"/></Link>
              <Link to="/buy" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20">Buy a car</Link>
              <Link to="/sell" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20">Sell your car</Link>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <Feature icon={ShieldCheck} title="Verified owners" desc="Trust and safety baked in"/>
              <Feature icon={Gauge} title="Flexible plans" desc="Hourly, daily, weekly"/>
              <Feature icon={Sparkles} title="Like-new fleet" desc="Curated for quality"/>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950" />
      </section>

      {/* Quick search strip */}
      <section className="py-6 border-t border-white/10 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2"><MapPin className="w-4 h-4 text-cyan-400"/><input placeholder="Location" className="bg-transparent outline-none w-full"/></div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2"><Car className="w-4 h-4 text-cyan-400"/>
            <select className="bg-transparent outline-none w-full"><option>SUV</option><option>Sedan</option><option>Truck</option><option>Electric</option></select>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2"><Fuel className="w-4 h-4 text-cyan-400"/>
            <select className="bg-transparent outline-none w-full"><option>Any fuel</option><option>Petrol</option><option>Diesel</option><option>Electric</option><option>Hybrid</option></select>
          </div>
          <Link to="/rent" className="inline-flex items-center justify-center rounded-lg bg-cyan-600 hover:bg-cyan-500 px-3 py-2">Search</Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Why choose AutoVerse?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Feature icon={ShieldCheck} title="Insurance included" desc="Drive with peace of mind on every trip."/>
            <Feature icon={Sparkles} title="Transparent pricing" desc="No surprises. What you see is what you pay."/>
            <Feature icon={Gauge} title="24/7 support" desc="We're here for you around the clock."/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
