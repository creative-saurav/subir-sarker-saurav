import React from 'react'
import { services } from '../data/content'
import { motion } from 'framer-motion'

export default function Services(){
  return (
    <section id="Services" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold gradient-text">Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {services.map(s => (
            <motion.div key={s} className="glass p-4 rounded-md hover:scale-105 transition-transform">
              <h3 className="font-semibold">{s}</h3>
              <p className="text-slate-300 mt-2 text-sm">Custom solutions tailored to product needs.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
