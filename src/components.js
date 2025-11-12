import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Nav(){ 
  const location = useLocation();
  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='max-w-6xl mx-auto flex items-center justify-between py-4 px-6 bg-transparent'>
        <Link to='/' className='flex items-center space-x-3'>
          <img src='/BM_1.png' alt='BM Designs' className='w-36 brightness-125' />
        </Link>
        <div className='space-x-6 text-white text-sm'>
          <Link to='/' className={location.pathname === '/' ? 'opacity-100' : 'opacity-80'}>Home</Link>
          <Link to='/about' className={location.pathname === '/about' ? 'opacity-100' : 'opacity-80'}>About</Link>
          <Link to='/services' className={location.pathname === '/services' ? 'opacity-100' : 'opacity-80'}>Services</Link>
          <Link to='/projects' className={location.pathname === '/projects' ? 'opacity-100' : 'opacity-80'}>Projects</Link>
          <Link to='/consultation' className={location.pathname === '/consultation' ? 'opacity-100' : 'opacity-80'}>Consultation</Link>
          <Link to='/contact' className={location.pathname === '/contact' ? 'opacity-100' : 'opacity-80'}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
