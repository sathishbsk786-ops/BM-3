import React from 'react'
import { Nav } from '../components.js'

export default function About(){
  return (
    <div className='min-h-screen bg-[var(--bg)] text-white'>
      <Nav />
      <main className='max-w-5xl mx-auto py-28 px-6'>
        <h1 className='text-4xl font-serif mb-6' style={{color:'var(--accent)'}}>About BM Designs</h1>
        <p className='text-lg mb-4'>BM Designs, led by Chief Architect <strong>Ar. Sathishkumar Baskaran (B.Arch, M.A)</strong>, is a boutique studio redefining modern architecture and interiors through a philosophy rooted in elegance, sustainability and craft.</p>
        <h2 className='mt-8 text-2xl font-serif' style={{color:'var(--accent)'}}>Our Values</h2>
        <ul className='list-disc ml-6 mt-4 space-y-2 text-gray-300'>
          <li><strong>Innovation:</strong> We pursue new materials and thoughtful solutions.</li>
          <li><strong>Integrity:</strong> Clear process, transparent communication.</li>
          <li><strong>Aesthetics:</strong> Timeless design that elevates everyday life.</li>
        </ul>
      </main>
    </div>
)
}