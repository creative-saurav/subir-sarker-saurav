import React from 'react'
import { siteData } from '../data/content'

export default function Footer(){
  return (
    <footer className="py-6 mt-12 border-t border-white/5">
      <div className="container ">
   
        <div className="text-center">
            © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </div>


      </div>
    </footer>
  )
}
