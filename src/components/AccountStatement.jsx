import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function AccountStatement(){
  const { session } = useContext(AppContext)
  const [items, setItems] = useState([])

  useEffect(()=>{
    if(!session?.email) return
    fetch(`${baseUrl}/transactions?email=${encodeURIComponent(session.email)}`).then(r=>r.json()).then(setItems)
  },[session])

  const total = items.reduce((acc, i)=> acc + (i.type==='debit' ? -i.amount : i.amount), 0)

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">Account Statement</h1>
      <div className="p-4 rounded bg-white/5 border border-white/10">
        <p className="text-slate-300">Owner: {session?.name || 'You'} ({session?.email})</p>
        <p className="mt-2">Balance: <span className="font-semibold">{total.toFixed(2)}</span></p>
      </div>
      <div className="mt-4 space-y-2">
        {items.map(i=> (
          <div key={i.id} className="p-3 rounded bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-sm text-slate-400">{i.description || 'Transaction'}</span>
            <span className="font-semibold">{i.type==='debit' ? '-' : '+'}{i.amount}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AccountStatement
