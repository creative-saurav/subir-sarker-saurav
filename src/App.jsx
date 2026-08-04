import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Achievements />
        {/* <Testimonials /> */}
        {/* <TechStack /> */}
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
