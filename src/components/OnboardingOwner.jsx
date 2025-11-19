import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function OnboardingOwner(){
  const { setSession } = useContext(AppContext)
  const [form, setForm] = useState({ role:'owner', full_name:'', email:'', phone:'', location:'', company_name:'' })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${baseUrl}/auth/onboard/owner`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    const data = await res.json()
    setSession({ email: form.email, role: 'owner', name: form.full_name })
    setDone(true)
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-2">Join as Owner</h1>
      <p className="text-slate-300 mb-6">List your cars for rent or sale. Start earning.</p>
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
        {[
          ['full_name','Full name'], ['email','Email'], ['phone','Phone'], ['location','City / Country']
        ].map(([k,ph])=> (
          <input key={k} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2" placeholder={ph} required/>
        ))}
        <input value={form.company_name} onChange={e=>setForm({...form,company_name:e.target.value})} className="rounded bg-white/5 border border-white/10 px-3 py-2 md:col-span-2" placeholder="Company name (optional)"/>
        <button className="mt-2 px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 md:col-span-2">Create account</button>
      </form>
      {done && <p className="mt-4 text-emerald-300">Account created! Head to Sell to list your car.</p>}
    </section>
  )
}

export default OnboardingOwner
