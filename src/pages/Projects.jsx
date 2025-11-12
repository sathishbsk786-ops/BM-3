import React, {useState} from 'react'
import { Nav } from '../components.js'
import { motion } from 'framer-motion'

const residential = [
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80'
]
const commercial = [
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529429614464-5a5b6f8e3b88?auto=format&fit=crop&w=1200&q=80'
]

export default function Projects(){
  const [tab, setTab] = useState('residential')
  const list = tab==='residential'? residential: commercial
  return (
    <div className='min-h-screen bg-[var(--bg)] text-white'>
      <Nav />
      <main className='max-w-6xl mx-auto py-28 px-6'>
        <h1 className='text-4xl font-serif mb-6' style={{color:'var(--accent)'}}>Projects</h1>
        <div className='mb-6'>
          <button onClick={()=>setTab('residential')} className={'px-4 py-2 mr-2 rounded-full '+(tab==='residential'?'bg-[var(--accent)] text-black':'bg-white/5')}>Residential</button>
          <button onClick={()=>setTab('commercial')} className={'px-4 py-2 rounded-full '+(tab==='commercial'?'bg-[var(--accent)] text-black':'bg-white/5')}>Commercial</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {list.map((src,i)=>(
            <motion.div key={i} whileHover={{scale:1.02}} className='rounded-2xl overflow-hidden h-64'>
              <img src={src} alt='' className='w-full h-full object-cover'/>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
)
}