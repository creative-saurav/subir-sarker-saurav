import React from 'react'
import { faqs } from '../data/content'
import { useState } from 'react'

export default function FAQ(){
  return (
    <section id="faq" className="py-12">
      <div className="container">
        <h3 className="text-xl font-semibold gradient-text">FAQ</h3>
        <div className="mt-4 space-y-2">
          {faqs.map((f,idx)=> <Accordion key={idx} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}

function Accordion({q,a}){
  const [open,setOpen] = useState(false)
  return (
    <div className="glass p-4 rounded-md">
      <button onClick={()=>setOpen(!open)} className="w-full text-left flex justify-between items-center">
        <span className="font-medium">{q}</span>
        <span>{open?'-':'+'}</span>
      </button>
      {open && <div className="mt-2 text-slate-300">{a}</div>}
    </div>
  )
}
