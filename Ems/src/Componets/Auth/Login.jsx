import React from 'react'
import { useState } from 'react'
const Login = ({HandleLogin}) => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('') 
  
 
  const submithandler=(e)=>{
    e.preventDefault();
    HandleLogin(email,password)
    console.log(email)
    console.log(password)
    setEmail('')
    setPassword('') 

  }
  return (
    <div className='container h-screen w-screen flex items-center justify-center'>
    <div className="box  border-2 border-sky-500 rounded-2xl flex p-20">
    <form  className='flex flex-col items-center justify-center gap-3  py-3 px-2    ' onSubmit={submithandler}>
      <h1 className='text-5xl font-bold text-sky-800 mb-4'>Login</h1>
      <input type="email"  placeholder="Enter your email" className="input py-3 px-2 text-xl border-zinc-800 rounded-4xl outline-none  bg-sky-100" required value={email} onChange={ (e)=>setEmail(e.target.value) }/>  
      <input type="password"  placeholder="Enter your password" className="input items-center text-xl  border-zinc-800 py-3 px-2 rounded-4xl outline-none  bg-sky-100"  value={password} required  onChange={(e)=>Number(setPassword(e.target.value))}/>    
      <button type='submit' className="submitbtn rounded-full bg-sky-600 py-2 px-6 text-white text-2xl mt-3"  >Login</button>
    </form>
    </div>
  </div>
  )
}

export default Login
