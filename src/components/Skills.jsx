import React from 'react'
import { skills } from '../data/content'
import { motion } from 'framer-motion'

function SkillCard({cat}){
  return (
    <motion.div className="glass p-4 rounded-md">
      <h3 className="font-semibold mb-2">{cat.title}</h3>
      <ul className="flex flex-wrap gap-2">
        {cat.items.map(i=> <li key={i} className="px-2 py-1 bg-white/5 rounded">{i}</li>)}
      </ul>
    </motion.div>
  )
}

export default function Skills(){
  return (
    <section id="Skills" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold gradient-text">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {skills.categories.map(c => <SkillCard key={c.title} cat={c} />)}
        </div>
      </div>
    </section>
  )
}
