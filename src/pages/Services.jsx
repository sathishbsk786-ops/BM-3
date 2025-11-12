import React from 'react'
import { Nav } from '../components.jsx'
import { motion } from 'framer-motion'

const services = [
  {title:'Architecture', desc:'Concept to construction — full architectural services.'},
  {title:'Interior Design', desc:'Luxury interiors tailored to your lifestyle.'},
  {title:'Master Planning', desc:'Strategic planning for large developments.'},
  {title:'Renovation', desc:'Reimagining existing spaces with modern techniques.'},
  {title:'Consultation', desc:'Expert guidance to shape your vision.'},
]

export default function Services(){
  return (
    <div className='min-h-screen bg-[var(--bg)] text-white'>
      <Nav />
      <main className='max-w-6xl mx-auto py-28 px-6'>
        <h1 className='text-4xl font-serif mb-8' style={{color:'var(--accent)'}}>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {services.map((s,i)=>(
            <motion.div key={i} className='bg-white/5 p-8 rounded-2xl' whileHover={{scale:1.02}}>
              <h3 className='text-xl mb-2'>{s.title}</h3>
              <p className='text-gray-300'>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
)
}
