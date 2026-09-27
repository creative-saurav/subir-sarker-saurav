import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const links = ['Home','About','Skills', 'Experience','Projects','Education','Contact']
  return (
    <nav className="fixed w-full z-40 top-4 px-4">
      <div className="container flex items-center justify-between backdrop-blur-xl bg-slate-900/60 rounded-full px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-sm font-bold text-white shadow-lg">
            SS
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <Link key={l} to={l} smooth={true} offset={-80} className="cursor-pointer text-slate-300 hover:text-white">{l}</Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
