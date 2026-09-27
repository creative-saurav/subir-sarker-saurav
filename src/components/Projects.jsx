import React from 'react';
import { projects } from '../data/content';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="Projects" className="py-16">
      <div className="container">
        {/* Heading */}
        <div className="">
          <h2 className="text-2xl font-semibold gradient-text">
            Featured Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass group overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden rounded-lg bg-white/5">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title + Type */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">
                  {p.title}
                </h3>

                <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-2.5 py-1 text-[11px] font-medium text-indigo-300 whitespace-nowrap">
                  {p.type}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-300">
                {p.short}
              </p>

              {/* Tech */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="mt-5">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
                >
                  View Live
                  <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}