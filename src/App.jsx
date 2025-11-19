import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Rent from './components/Rent'
import Buy from './components/Buy'
import Sell from './components/Sell'
import OnboardingCustomer from './components/OnboardingCustomer'
import OnboardingOwner from './components/OnboardingOwner'
import ProfileCustomer from './components/ProfileCustomer'
import ProfileOwner from './components/ProfileOwner'
import Dashboard from './components/Dashboard'
import Transactions from './components/Transactions'
import AccountStatement from './components/AccountStatement'
import Notifications from './components/Notifications'
import ManagementProfile from './components/ManagementProfile'
import Loyalty from './components/Loyalty'
import './index.css'

export const AppContext = React.createContext()

function App() {
  const [session, setSession] = useState(() => {
    const s = localStorage.getItem('session')
    return s ? JSON.parse(s) : null
  })

  useEffect(() => {
    if (session) localStorage.setItem('session', JSON.stringify(session))
  }, [session])

  return (
    <AppContext.Provider value={{ session, setSession }}>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <Navbar />
        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/onboarding/customer" element={<OnboardingCustomer />} />
            <Route path="/onboarding/owner" element={<OnboardingOwner />} />
            <Route path="/profile/customer" element={<ProfileCustomer />} />
            <Route path="/profile/owner" element={<ProfileOwner />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/account-statement" element={<AccountStatement />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/management-profile" element={<ManagementProfile />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
