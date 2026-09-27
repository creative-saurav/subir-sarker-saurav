
import React from "react";
import { motion } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter";
import { hero } from "../data/content";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Hero() {
  const typed = useTypewriter(hero.roles, 100);

  return (
    <section
      id="Home"
      className="min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Subir Sarker</span>
            <br />
            <span className="text-white">Saurav</span>
          </h1>

          <p className="mt-4 text-xl text-violet-300 font-medium">
            Full Stack Developer • Laravel & MERN Stack
          </p>

          <p className="mt-6 text-slate-300 text-lg max-w-xl leading-relaxed">
            {hero.subtitle}
          </p>

          <p className="mt-4 text-indigo-300 font-semibold text-lg">
            {typed}
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Subir_Sarker_Saurav.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                px-7 py-3
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-purple-500
                text-white
                font-medium
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Download Resume
              <FaDownload size={14} />
            </a>

            <a
              href="https://www.fiverr.com/creative_saurav"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                px-7 py-3
                rounded-xl
                border border-violet-500
                text-white
                font-medium
                hover:bg-violet-500/10
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Hire Me
              <FaPaperPlane size={14} />
            </a>
          </div>

          {/* SOCIAL */}
          <div className="mt-8 flex gap-5 text-slate-300">
            <a
              href="https://github.com/creative-saurav"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-violet-400 transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/creativesaurav/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-violet-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            relative
            flex
            justify-center
            items-center
            min-h-[520px]
            lg:min-h-[650px]
          "
        >
          {/* Main Ambient Glow */}
          <div
            className="
              absolute
              w-[430px]
              h-[430px]
              rounded-full
              bg-violet-600/20
              blur-[100px]
            "
          />

          {/* Secondary Glow */}
          <div
            className="
              absolute
              w-[320px]
              h-[320px]
              rounded-full
              bg-indigo-500/20
              blur-[70px]
            "
          />

          {/* Rotating Outer Dashed Ring */}
          <div
            className="
              absolute
              w-[500px]
              h-[500px]
              rounded-full
              border
              border-dashed
              border-violet-400/20
              animate-[spin_25s_linear_infinite]
            "
          />

          {/* Small Decorative Ring */}
          <div
            className="
              absolute
              w-[485px]
              h-[485px]
              rounded-full
              border
              border-white/5
            "
          />

          {/* Main Gradient Circle */}
          <div
            className="
              relative
              w-[390px]
              h-[390px]
              sm:w-[420px]
              sm:h-[420px]
              md:w-[470px]
              md:h-[470px]
              rounded-full
              p-[3px]
              bg-gradient-to-br
              from-violet-400
              via-indigo-500
              to-purple-700
              shadow-[0_0_80px_rgba(139,92,246,0.30)]
            "
          >
            {/* Inner Circle */}
            <div
              className="
                relative
                w-full
                h-full
                rounded-full
                overflow-hidden
                bg-slate-950/95
                border
                border-white/10
                backdrop-blur-xl
              "
            >
              {/* Top Right Glow */}
              <div
                className="
                  absolute
                  -top-24
                  -right-20
                  w-64
                  h-64
                  rounded-full
                  bg-violet-500/20
                  blur-3xl
                "
              />

              {/* Bottom Left Glow */}
              <div
                className="
                  absolute
                  -bottom-24
                  -left-20
                  w-64
                  h-64
                  rounded-full
                  bg-indigo-500/20
                  blur-3xl
                "
              />

              {/* Image */}
              <img
                src="/photo.png"
                alt="Subir Sarker"
                className="
                  relative
                  z-10
                  w-full
                  h-full
                  object-contain
                  object-bottom
                  scale-[1.05]
                  drop-shadow-[0_25px_50px_rgba(0,0,0,0.60)]
                "
              />

              {/* Bottom Inner Gradient */}
              <div
                className="
                  absolute
                  z-20
                  bottom-0
                  left-0
                  right-0
                  h-24
                  bg-gradient-to-t
                  from-slate-950/40
                  to-transparent
                  pointer-events-none
                "
              />
            </div>
          </div>

          {/* ================= FLOATING BADGE ================= */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-10
              left-0
              sm:left-4
              md:left-0
              px-4
              py-3
              rounded-2xl
              bg-slate-900/80
              border
              border-violet-400/20
              backdrop-blur-xl
              shadow-[0_15px_40px_rgba(0,0,0,0.35)]
            "
          >
            <p className="text-xs text-slate-400">
              Currently
            </p>

            <p className="text-sm font-semibold text-white whitespace-nowrap">
              Building Digital Experiences
            </p>
          </motion.div>

          {/* ================= TOP FLOATING DOT ================= */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-16
              right-8
              w-4
              h-4
              rounded-full
              bg-violet-400
              shadow-[0_0_30px_rgba(139,92,246,0.9)]
            "
          />

          {/* Small Decorative Dot */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-32
              right-4
              w-2
              h-2
              rounded-full
              bg-indigo-400
              shadow-[0_0_20px_rgba(99,102,241,0.9)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
