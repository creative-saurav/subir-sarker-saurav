import React from 'react'
import { projects } from '../data/content'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="Projects" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold gradient-text">Featured Projects</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.article key={p.title} className="glass p-4 rounded-md hover:translate-y-[-4px] transition-transform">
              <div className="h-40 bg-white/5 rounded mb-3 flex items-center justify-center">
              <img src={p.image} alt="" />
              </div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{p.short}</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs">
                {p.tech.map(t=> <span key={t} className="px-2 py-1 bg-white/5 rounded">{t}</span>)}
              </div>
              <div className="mt-3 flex gap-2">
                <a href={p.live} className="text-sm text-indigo-300">Live</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
