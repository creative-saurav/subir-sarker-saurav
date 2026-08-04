import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../data/content'

export default function About(){
  return (
    <motion.section id="About" className="py-16">
      <div className="container">
        <motion.h2 className="text-3xl font-semibold gradient-text">{about.heading}</motion.h2>
        <motion.p className="mt-4 text-slate-300 max-w-3xl">{about.paragraph}</motion.p>
        <div className="mt-6 flex gap-6">
          {about.stats.map(s=> (
            <div key={s.label} className="glass p-4 rounded-md">
              <div className="text-2xl font-bold">{s.value}+</div>
              <div className="text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
