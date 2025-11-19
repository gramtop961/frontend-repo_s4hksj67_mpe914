import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProfileCustomer(){
  const { session } = useContext(AppContext)
  const [orders, setOrders] = useState([])

  useEffect(()=>{
    if(!session?.email) return
    fetch(`${baseUrl}/orders?email=${encodeURIComponent(session.email)}&role=customer`).then(r=>r.json()).then(setOrders)
  },[session])

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold">Customer Profile</h1>
      <p className="text-slate-300">{session?.name} • {session?.email}</p>
      <h2 className="mt-6 font-semibold">Your Orders</h2>
      <div className="mt-3 grid md:grid-cols-2 gap-3">
        {orders.map(o=> (
          <div key={o.id} className="p-4 rounded bg-white/5 border border-white/10">
            <p className="text-sm text-slate-400">Type: {o.order_type}</p>
            <p className="text-sm text-slate-400">Status: {o.status}</p>
          </div>
        ))}
        {orders.length===0 && <p className="text-slate-400">No orders yet.</p>}
      </div>
    </section>
  )
}

export default ProfileCustomer
