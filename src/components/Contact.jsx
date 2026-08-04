import React from 'react'
import { siteData } from '../data/content'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold gradient-text">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="glass p-6 rounded-md" onSubmit={(e)=> e.preventDefault()}>
            <label className="block text-sm">Name<input className="w-full mt-2 p-2 rounded bg-transparent border border-white/5"/></label>
            <label className="block text-sm mt-3">Email<input className="w-full mt-2 p-2 rounded bg-transparent border border-white/5"/></label>
            <label className="block text-sm mt-3">Message<textarea className="w-full mt-2 p-2 rounded bg-transparent border border-white/5"/></label>
            <div className="mt-3"><button className="btn bg-primary px-4 py-2 rounded-md">Send Message</button></div>
          </form>
          <div className="p-6">
            <h3 className="font-semibold">Email</h3>
            <p className="text-slate-300">{siteData.email}</p>
            <h3 className="font-semibold mt-4">Location</h3>
            <p className="text-slate-300">{siteData.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
