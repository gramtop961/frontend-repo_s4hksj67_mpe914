import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Loyalty(){
  const { session } = useContext(AppContext)
  const [reward, setReward] = useState(null)

  useEffect(()=>{
    if(!session?.email) return
    // Placeholder: in a full app we'd fetch reward details. For now, display starter tier.
    setReward({ points: 0, tier: 'Bronze' })
  },[session])

  return (
    <section className="max-w-md mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-extrabold mb-2">Loyalty Rewards</h1>
      <p className="text-slate-300">Earn points on every transaction. Unlock higher tiers for more perks.</p>
      <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="text-5xl font-black text-cyan-400">{reward?.points ?? 0}</p>
        <p className="mt-2">Current tier: <span className="font-semibold">{reward?.tier ?? 'Bronze'}</span></p>
        <div className="mt-4 h-2 rounded bg-white/10"><div className="h-2 rounded bg-cyan-500" style={{ width: `${Math.min(100, (reward?.points ?? 0)/2)}%`}}/></div>
      </div>
    </section>
  )
}

export default Loyalty
