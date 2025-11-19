import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Car, User, Bell, LayoutDashboard, BadgeDollarSign } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()

  const NavLink = ({ to, children }) => (
    <Link to={to} className={`px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-300 ${pathname===to?'text-cyan-400':'text-slate-200'}`}>{children}</Link>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Car className="w-6 h-6 text-cyan-400"/>
          <span className="font-semibold">AutoVerse</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/rent">Rent</NavLink>
          <NavLink to="/buy">Buy</NavLink>
          <NavLink to="/sell">Sell</NavLink>
          <NavLink to="/dashboard"><LayoutDashboard className="inline w-4 h-4 -mt-1 mr-1"/>Dashboard</NavLink>
          <NavLink to="/notifications"><Bell className="inline w-4 h-4 -mt-1 mr-1"/>Alerts</NavLink>
          <NavLink to="/loyalty"><BadgeDollarSign className="inline w-4 h-4 -mt-1 mr-1"/>Loyalty</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/onboarding/customer" className="hidden md:inline px-3 py-2 rounded-md bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30">Join as Customer</Link>
          <Link to="/onboarding/owner" className="hidden md:inline px-3 py-2 rounded-md bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">Join as Owner</Link>
          <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex p-2 text-white/80"><Menu/></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/" className="px-3 py-2 rounded bg-white/5">Home</Link>
            <Link to="/about" className="px-3 py-2 rounded bg-white/5">About</Link>
            <Link to="/services" className="px-3 py-2 rounded bg-white/5">Services</Link>
            <Link to="/contact" className="px-3 py-2 rounded bg-white/5">Contact</Link>
            <Link to="/rent" className="px-3 py-2 rounded bg-white/5">Rent</Link>
            <Link to="/buy" className="px-3 py-2 rounded bg-white/5">Buy</Link>
            <Link to="/sell" className="px-3 py-2 rounded bg-white/5">Sell</Link>
            <Link to="/dashboard" className="px-3 py-2 rounded bg-white/5">Dashboard</Link>
          </div>
          <div className="flex gap-2">
            <Link to="/onboarding/customer" className="flex-1 px-3 py-2 rounded bg-cyan-500/20">Customer</Link>
            <Link to="/onboarding/owner" className="flex-1 px-3 py-2 rounded bg-emerald-500/20">Owner</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
