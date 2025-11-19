import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function OnboardingCustomer(){
  const { setSession } = useContext(AppContext)
  const [form, setForm] = useState({ role:'customer', full_name:'', email:'', phone:'', location:'', driver_license:'' })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${baseUrl}/auth/onboard/customer`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    const data = await res.json()
    setSession({ email: form.email, role: 'customer', name: form.full_name })
    setDone(true)
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-2">Join as Customer</h1>
      <p className="text-slate-300 mb-6">Tell us a bit about you to unlock renting and buying.</p>
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
        {[
          ['full_name','Full name'], ['email','Email'], ['phone','Phone'], ['location','City / Country']
        ].map(([k,ph])=> (
          <input key={k} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder={ph} required/>
        ))}
        <input value={form.driver_license} onChange={e=>setForm({...form,driver_license:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2 md:col-span-2" placeholder="Driver license ID"/>
        <button className="mt-2 px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500 md:col-span-2">Create account</button>
      </form>
      {done && <p className="mt-4 text-emerald-300">You're all set! Explore rentals and cars now.</p>}
    </section>
  )
}

export default OnboardingCustomer
