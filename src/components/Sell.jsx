import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Sell(){
  const [form, setForm] = useState({
    owner_email:'', title:'', brand:'', model:'', year:2020, images:[], location:'', car_type:'sedan', transmission:'automatic', fuel:'petrol', mileage:'', color:'', for_rent:false, for_sale:true, price_per_day:'', sale_price:'', description:''
  })
  const [result, setResult] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const payload = {...form, year:Number(form.year), mileage: form.mileage? Number(form.mileage): undefined, price_per_day: form.price_per_day? Number(form.price_per_day): undefined, sale_price: form.sale_price? Number(form.sale_price): undefined}
    const res = await fetch(`${baseUrl}/cars`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
    const data = await res.json()
    setResult(data)
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">Sell or Rent Your Car</h1>
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
        {[
          ['owner_email','Owner email'], ['title','Title'], ['brand','Brand'], ['model','Model'], ['location','Location'], ['color','Color']
        ].map(([k,ph])=> (
          <input key={k} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder={ph} required={k==='owner_email' || k==='title'}/>
        ))}
        <input type="number" value={form.year} onChange={e=>setForm({...form,year:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Year"/>
        <input type="number" value={form.mileage} onChange={e=>setForm({...form,mileage:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Mileage"/>
        <select value={form.car_type} onChange={e=>setForm({...form,car_type:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2">
          <option value="sedan">Sedan</option><option value="suv">SUV</option><option value="truck">Truck</option><option value="electric">Electric</option>
        </select>
        <select value={form.transmission} onChange={e=>setForm({...form,transmission:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2">
          <option value="automatic">Automatic</option><option value="manual">Manual</option>
        </select>
        <select value={form.fuel} onChange={e=>setForm({...form,fuel:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2">
          <option value="petrol">Petrol</option><option value="diesel">Diesel</option><option value="electric">Electric</option><option value="hybrid">Hybrid</option>
        </select>
        <div className="col-span-2 grid grid-cols-2 gap-2">
          <label className="flex items-center gap-2"><input type="checkbox" checked={form.for_rent} onChange={e=>setForm({...form,for_rent:e.target.checked})}/> For rent</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={form.for_sale} onChange={e=>setForm({...form,for_sale:e.target.checked})}/> For sale</label>
          <input type="number" value={form.price_per_day} onChange={e=>setForm({...form,price_per_day:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Price per day"/>
          <input type="number" value={form.sale_price} onChange={e=>setForm({...form,sale_price:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Sale price"/>
          <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} rows="4" className="col-span-2 rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Description"/>
        </div>
        <button className="mt-2 px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 col-span-2">Publish</button>
      </form>
      {result && <p className="mt-4 text-sm text-slate-300">Car saved with id: {result.id}</p>}
    </section>
  )
}

export default Sell
