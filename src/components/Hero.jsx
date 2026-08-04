import React from 'react'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'
import { hero } from '../data/content'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero(){
  const typed = useTypewriter(hero.roles, 100)
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Subir Sarker</h1>
          <div className="text-slate-300 mt-3 font-medium">Full Stack Developer • Laravel & MERN Stack</div>
          <p className="mt-4 text-lg text-slate-300">{hero.subtitle}</p>
          <p className="mt-3 text-indigo-200 font-medium">{typed}</p>
          <div className="mt-6 flex gap-3">
            {hero.ctas.map(c=> (
              <a key={c.label} href={c.href} className="btn bg-primary px-4 py-2 rounded-md text-white shadow-md">{c.label}</a>
            ))}
          </div>
          <div className="mt-6 flex gap-4 items-center text-slate-300">
            <a aria-label="github" href="#"><FaGithub size={20} /></a>
            <a aria-label="linkedin" href="#"><FaLinkedin size={20} /></a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.95,y:10}} animate={{opacity:1,scale:1,y:0}} transition={{duration:0.8}} className="flex justify-center">
          <motion.img
            src="/photo.png"
            alt="Subir Sarker"
            className="w-90 h-90 object-cover rounded-2xl shadow-2xl"
            whileHover={{ y: -6 }}
            onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/avatar.svg'}}
          />
        </motion.div>
      </div>
    </section>
  )
}
