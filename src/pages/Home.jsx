import React, {useEffect, useState} from 'react'
import { Nav } from '../components.jsx'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home(){
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    const t = setTimeout(()=> setLoaded(true), 1400);
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className='min-h-screen bg-[var(--bg)] text-white'>
      <Nav />
      {!loaded && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]'>
          <motion.img src='/BM_1.png' alt='logo' className='w-48'
            initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.9}} />
        </div>
      )}

      <header className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <video className='w-full h-full object-cover' src='/hero.mp4' autoPlay muted loop playsInline />
        </div>
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative z-20 text-center px-6'>
          <motion.h1 className='text-4xl md:text-6xl font-serif font-bold mb-4' initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.6}}>Designing iconic spaces that inspire and endure.</motion.h1>
          <motion.p className='max-w-2xl mx-auto text-lg mb-6' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}>Architecture | Interiors | Consultation</motion.p>
          <div className='space-x-4 flex justify-center'>
            <Link to='/projects' className='px-6 py-3 rounded-full bg-[var(--accent)] text-black font-semibold'>View Projects</Link>
            <Link to='/consultation' className='px-6 py-3 rounded-full border border-white/30 text-white'>Book Consultation</Link>
          </div>
        </div>
      </header>

      <section className='max-w-6xl mx-auto py-20 px-6'>
        <h2 className='text-2xl font-serif mb-8' style={{color:'var(--accent)'}}>Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[0,1,2].map(i=>(
            <motion.div key={i} className='h-64 rounded-2xl overflow-hidden relative' whileHover={{scale:1.02}}>
              <img src={['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80'][i]} className='w-full h-full object-cover' alt='proj'/>
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6'>
                <div>
                  <h3 className='text-xl'>Project {i+1}</h3>
                  <p className='text-sm text-white/80'>Residential</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className='py-12 text-center text-white/70'>
        &copy; {new Date().getFullYear()} BM Designs — All rights reserved
      </footer>
    </div>
)
}
