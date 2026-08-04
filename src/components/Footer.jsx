import React from 'react'
import { siteData } from '../data/content'

export default function Footer(){
  return (
    <footer className="py-6 mt-12 border-t border-white/5">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} {siteData.name} — Built with React & Framer Motion</div>
        <div className="mt-3 md:mt-0">Quick Links</div>
      </div>
    </footer>
  )
}
