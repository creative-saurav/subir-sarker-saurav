import React from 'react'
import { experience } from '../data/content'
import { motion } from 'framer-motion'

export default function Experience(){
  return (
    <section id="Experience" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold gradient-text">Experience</h2>
        <div className="mt-6">
          {experience.map((e,idx)=> (
            <motion.div key={e.role} className="mb-6 flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-3" />
              <div>
                <div className="font-semibold">{e.role} <span className="text-sm text-slate-400">@ {e.company}</span></div>
                <div className="text-sm text-slate-500">{e.period}</div>
                <p className="mt-2 text-slate-300">{e.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
