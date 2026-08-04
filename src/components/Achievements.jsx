import React from 'react'
import { achievements } from '../data/content'

export default function Achievements(){
  return (
    <section id="achievements" className="py-12">
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          {achievements.map(a => (
            <div key={a.label} className="glass p-6 rounded-md text-center">
              <div className="text-3xl font-bold">{a.value}</div>
              <div className="text-sm text-slate-300">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
