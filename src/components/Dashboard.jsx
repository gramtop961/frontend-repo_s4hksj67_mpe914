import React from 'react'
import { Link } from 'react-router-dom'

function Tile({ title, desc, to }){
  return (
    <Link to={to} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors block">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-slate-400">{desc}</p>
    </Link>
  )
}

function Dashboard(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Tile title="Profile (Customer)" desc="View your orders and details" to="/profile/customer"/>
        <Tile title="Profile (Owner)" desc="Manage incoming requests" to="/profile/owner"/>
        <Tile title="Transactions" desc="All your payments and earnings" to="/transactions"/>
        <Tile title="Account Statement" desc="Export and view statements" to="/account-statement"/>
        <Tile title="Notifications" desc="All updates in one place" to="/notifications"/>
        <Tile title="Loyalty Rewards" desc="Track your points and tier" to="/loyalty"/>
        <Tile title="List a Car" desc="Sell or rent your car" to="/sell"/>
      </div>
    </section>
  )
}

export default Dashboard
