import React, { useEffect, useState } from 'react'
import { MapPin, Filter, Car, Fuel, Gauge, CalendarDays, DollarSign, Search } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function FilterBar({ onChange }){
  const [f, setF] = useState({ location:'', car_type:'', min_price:'', max_price:'', q:'', mode:'rent' })
  useEffect(()=>{ onChange(f) },[f])
  return (
    <div className="grid md:grid-cols-6 gap-2 bg-white/5 border border-white/10 p-3 rounded-xl">
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-2"><Search className="w-4 h-4 text-cyan-400"/><input className="bg-transparent w-full py-1 outline-none" placeholder="Search" value={f.q} onChange={e=>setF({...f,q:e.target.value})}/></div>
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-2"><MapPin className="w-4 h-4 text-cyan-400"/><input className="bg-transparent w-full py-1 outline-none" placeholder="Location" value={f.location} onChange={e=>setF({...f,location:e.target.value})}/></div>
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-2"><Car className="w-4 h-4 text-cyan-400"/><select className="bg-transparent w-full py-1 outline-none" value={f.car_type} onChange={e=>setF({...f,car_type:e.target.value})}><option value="">Any type</option><option value="suv">SUV</option><option value="sedan">Sedan</option><option value="truck">Truck</option><option value="electric">Electric</option></select></div>
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-2"><DollarSign className="w-4 h-4 text-cyan-400"/><input type="number" min="0" className="bg-transparent w-full py-1 outline-none" placeholder="Min price" value={f.min_price} onChange={e=>setF({...f,min_price:e.target.value})}/></div>
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-2"><DollarSign className="w-4 h-4 text-cyan-400"/><input type="number" min="0" className="bg-transparent w-full py-1 outline-none" placeholder="Max price" value={f.max_price} onChange={e=>setF({...f,max_price:e.target.value})}/></div>
      <div className="flex items-center justify-end"><Filter className="w-5 h-5 text-slate-400"/></div>
    </div>
  )
}

function CarCard({ car }){
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors">
      <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400">{car.brand} {car.model}</div>
      <p className="mt-3 font-semibold">{car.title}</p>
      <p className="text-sm text-slate-400">{car.location} • {car.year} • {car.transmission}</p>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-cyan-300 font-semibold">${car.price_per_day ?? '--'}/day</p>
        <a href={`/profile/owner?email=${encodeURIComponent(car.owner_email)}`} className="text-sm text-slate-300 hover:text-white">Owner profile</a>
      </div>
      <a href={`/rent?car=${car.id}`} className="mt-3 block text-center px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500">Rent</a>
    </div>
  )
}

function Rent(){
  const [cars,setCars] = useState([])
  const [filters,setFilters] = useState({})

  useEffect(()=>{
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([k,v])=>{ if(v!=='' && v!=null) params.append(k,v) })
    params.append('mode','rent')
    fetch(`${baseUrl}/cars?${params.toString()}`).then(r=>r.json()).then(setCars).catch(()=>setCars([]))
  },[filters])

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">Rent Cars</h1>
      <FilterBar onChange={setFilters}/>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map(c=> <CarCard key={c.id} car={c}/>)}
        {cars.length===0 && <p className="text-slate-400">No cars found. Try adjusting filters.</p>}
      </div>
    </section>
  )
}

export default Rent
