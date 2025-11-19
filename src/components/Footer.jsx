import React from 'react'

function Footer(){
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-300">
        <div>
          <p className="text-white font-semibold mb-2">AutoVerse</p>
          <p className="text-slate-400">Rent, buy, and sell cars in one modern marketplace.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Company</p>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-cyan-300">About</a></li>
            <li><a href="/services" className="hover:text-cyan-300">Services</a></li>
            <li><a href="/contact" className="hover:text-cyan-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Support</p>
          <ul className="space-y-2">
            <li><a href="/notifications" className="hover:text-cyan-300">Notifications</a></li>
            <li><a href="/transactions" className="hover:text-cyan-300">Transactions</a></li>
            <li><a href="/account-statement" className="hover:text-cyan-300">Account Statement</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Get the latest</p>
          <form className="flex gap-2">
            <input className="flex-1 rounded bg-white/5 border border-white/10 px-3 py-2 placeholder:text-slate-400" placeholder="Email address"/>
            <button className="px-3 py-2 rounded bg-cyan-600 text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-6">© {new Date().getFullYear()} AutoVerse. All rights reserved.</div>
    </footer>
  )
}

export default Footer
