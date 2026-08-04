import React from 'react'
import { motion } from 'framer-motion'

const icons = [
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Tailwind',
  'DaisyUI',
  'JavaScript',
  'jQuery',
  'React',
  'Framer Motion',
  'PHP',
  'Laravel',
  'CodeIgniter',
  'Node',
  'Express',
  'MongoDB',
  'MySQL',
  'Git',
  'GitHub',
  'Postman',
  'Firebase'
]

export default function TechStack(){
  return (
    <section id="tech" className="py-12">
      <div className="container overflow-hidden">
        <h3 className="text-xl font-semibold gradient-text">Tech Stack</h3>
        <div className="mt-4 flex gap-4 items-center">
          <div className="flex animate-marquee gap-6">
            {icons.map(i=> (
              <div key={i} className="glass px-4 py-2 rounded">{i}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
