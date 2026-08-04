import React from 'react'
import { testimonials } from '../data/content'
import { motion } from 'framer-motion'

export default function Testimonials(){
  return (
    <section id="Testimonials" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold gradient-text">Testimonials</h2>
        <motion.div className="mt-6 grid md:grid-cols-2 gap-4">
          {testimonials.map(t => (
            <motion.blockquote key={t.name} className="glass p-4 rounded-md">
              <p className="text-slate-200">“{t.text}”</p>
              <cite className="block mt-3 text-sm text-slate-400">— {t.name}</cite>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
