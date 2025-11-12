import React, {useState} from 'react'
import { Nav } from '../components.js'

export default function Consultation(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const handle=(e)=> setForm({...form,[e.target.name]:e.target.value})
  const submit=(e)=>{e.preventDefault(); fetch('https://formspree.io/f/xayzzzzz',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); alert('Request sent'); setForm({name:'',email:'',message:''})}
  return (
    <div className='min-h-screen bg-[var(--bg)] text-white'>
      <Nav />
      <main className='max-w-4xl mx-auto py-28 px-6'>
        <h1 className='text-4xl font-serif mb-4' style={{color:'var(--accent)'}}>Consultation</h1>
        <p className='mb-6 text-gray-300'>Request a design consultation with our lead architect. We'll discuss scope, timeline and next steps.</p>
        <form onSubmit={submit} className='bg-white/5 p-6 rounded-2xl'>
          <input name='name' value={form.name} onChange={handle} placeholder='Name' className='w-full p-3 mb-3 rounded' required />
          <input name='email' value={form.email} onChange={handle} placeholder='Email' className='w-full p-3 mb-3 rounded' required />
          <textarea name='message' value={form.message} onChange={handle} placeholder='Project brief' className='w-full p-3 mb-3 rounded h-40' required />
          <button className='px-6 py-3 rounded-full bg-[var(--accent)] text-black'>Request Consultation</button>
        </form>
      </main>
    </div>
)
}