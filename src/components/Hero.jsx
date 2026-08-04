import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter";
import { hero } from "../data/content";
import { FaDownload, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  const typed = useTypewriter(hero.roles, 100);
  return (
    <section id="Home" className="min-h-screen flex items-center">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Subir Sarker Saurav
          </h1>
          <div className="text-slate-300 mt-3 font-medium">
            Full Stack Developer • Laravel & MERN Stack
          </div>
          <p className="mt-4 text-lg text-slate-300">{hero.subtitle}</p>
          <p className="mt-3 text-indigo-200 font-medium">{typed}</p>
          <div className="mt-6 flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-medium shadow-lg hover:scale-105 transition-all duration-300"
            >
              Download Resume
              <FaDownload size={14} />
            </a>

            <a
              href="https://www.fiverr.com/creative_saurav"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-violet-500 text-white font-medium hover:bg-violet-500/10 hover:scale-105 transition-all duration-300"
            >
              Hire Me
              <FaPaperPlane size={14} />
            </a>
          </div>
          <div className="mt-6 flex gap-4 items-center text-slate-300">
            <a
              aria-label="github"
              href="https://github.com/creative-saurav"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/creativesaurav/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl scale-110"></div>
            <div className="relative w-[450px] h-[450px] rounded-full border-[6px] border-violet-400/80 overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950"></div>
              <img
                src="/photo.png"
                alt="Subir Sarker"
                className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[320px]
          object-contain
          z-10
        "
              />
            </div>

            {/* Decorative Arc */}
            <div className="absolute -right-12 top-10 w-[480px] h-[480px] rounded-full border border-dashed border-violet-500/40"></div>
            <div className="absolute top-6 right-0 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_20px_#8b5cf6]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
