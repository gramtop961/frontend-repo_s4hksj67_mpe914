import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Notifications(){
  const { session } = useContext(AppContext)
  const [items, setItems] = useState([])

  useEffect(()=>{
    if(!session?.email) return
    fetch(`${baseUrl}/notifications?email=${encodeURIComponent(session.email)}`).then(r=>r.json()).then(setItems)
  },[session])

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">Notifications</h1>
      <div className="space-y-3">
        {items.map(n => (
          <div key={n.id} className="p-4 rounded bg-white/5 border border-white/10">
            <p className="font-semibold">{n.title}</p>
            <p className="text-sm text-slate-400">{n.message}</p>
          </div>
        ))}
        {items.length===0 && <p className="text-slate-400">No notifications right now.</p>}
      </div>
    </section>
  )
}

export default Notifications
