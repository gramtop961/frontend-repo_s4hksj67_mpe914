import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Transactions(){
  const { session } = useContext(AppContext)
  const [items, setItems] = useState([])

  useEffect(()=>{
    if(!session?.email) return
    fetch(`${baseUrl}/transactions?email=${encodeURIComponent(session.email)}`).then(r=>r.json()).then(setItems)
  },[session])

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">Transaction History</h1>
      <div className="space-y-3">
        {items.map(t => (
          <div key={t.id} className="p-4 rounded bg-white/5 border border-white/10 flex items-center justify-between">
            <div>
              <p className="font-semibold">{t.description || 'Transaction'}</p>
              <p className="text-sm text-slate-400">{t.type} • {t.currency}</p>
            </div>
            <p className="font-semibold">{t.amount}</p>
          </div>
        ))}
        {items.length===0 && <p className="text-slate-400">No transactions yet.</p>}
      </div>
    </section>
  )
}

export default Transactions
