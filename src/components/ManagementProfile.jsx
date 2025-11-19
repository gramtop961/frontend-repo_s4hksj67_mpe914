import React from 'react'

function ManagementProfile(){
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-4">Management Profile</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {[1,2,3].map(i=> (
          <div key={i} className="p-4 rounded bg-white/5 border border-white/10">
            <div className="aspect-video rounded bg-white/5"/>
            <p className="mt-2 font-semibold">Executive {i}</p>
            <p className="text-sm text-slate-400">Leadership team member focused on growth and trust.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ManagementProfile
