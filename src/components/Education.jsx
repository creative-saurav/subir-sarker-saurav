
import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa'
import { education } from '../data/content'


export default function Education(){
  return (
    <motion.section id="Education" className="py-16">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold gradient-text">Education</h2>
        </div>

        <div className="relative mt-10 space-y-6 md:space-y-8">
          <div className="absolute bottom-5 left-3.5 top-5 w-px bg-indigo-400/30 md:left-1/2" />
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative pl-10 md:w-[calc(50%-2rem)] md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
            >
              <div className={`absolute left-0 top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#091426] bg-indigo-500 text-white md:left-auto ${index % 2 === 0 ? 'md:-right-3.5' : 'md:-left-3.5'}`}>
                <FaGraduationCap size={11} />
              </div>

              <div className="glass rounded-md border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1 md:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-white">{item.degree}</h3>
                    <p className="mt-2 font-medium text-indigo-300">{item.institution}</p>
                  </div>
                  <div className="flex w-fit shrink-0 items-center gap-2 rounded bg-indigo-500/15 px-3 py-1.5 text-sm font-medium text-indigo-200">
                    <FaAward size={12} /> {item.cgpa}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><FaCalendarAlt className="text-indigo-300" />{item.duration}</span>
                  <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-300" />{item.location}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>

                {item.thesis && (
                  <div className="mt-5 border-l-2 border-indigo-400/60 bg-white/[0.03] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Thesis / Research Project</p>
                    <h4 className="mt-2 font-medium leading-6 text-slate-100">{item.thesis.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.thesis.description}</p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

