import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProfileOwner(){
  const { session } = useContext(AppContext)
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    const email = new URLSearchParams(window.location.search).get('email') || session?.email
    if(!email) return
    fetch(`${baseUrl}/orders?email=${encodeURIComponent(email)}&role=owner`).then(r=>r.json()).then(setOrders)
  },[session])

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold">Owner Profile</h1>
      <p className="text-slate-300">{session?.name || 'Owner'} • {session?.email}</p>
      <h2 className="mt-6 font-semibold">Incoming Requests</h2>
      <div className="mt-3 grid md:grid-cols-2 gap-3">
        {orders.map(o=> (
          <div key={o.id} className="p-4 rounded bg-white/5 border border-white/10">
            <p className="text-sm text-slate-400">Type: {o.order_type}</p>
            <p className="text-sm text-slate-400">Status: {o.status}</p>
            <div className="mt-2 flex gap-2">
              <button className="px-3 py-1 rounded bg-emerald-600" onClick={()=>fetch(`${baseUrl}/orders/${o.id}/status`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify('accepted')}).then(()=>window.location.reload())}>Accept</button>
              <button className="px-3 py-1 rounded bg-rose-600" onClick={()=>fetch(`${baseUrl}/orders/${o.id}/status`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify('rejected')}).then(()=>window.location.reload())}>Reject</button>
            </div>
          </div>
        ))}
        {orders.length===0 && <p className="text-slate-400">No requests yet.</p>}
      </div>
    </section>
  )
}

export default ProfileOwner
