import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email,password) 
    console.log("Email is", email)
    console.log("Password is", password)

    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
           <form
           onSubmit={(e)=>{
              submitHandler(e)
           }}
           className='flex flex-col items-center justify-center'>
              <input 
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              required 
              className=' outline-none  border-2 border-emerald-600 text-xl rounded-full py-4 px-5 placeholder:text-gray-400' type="email" placeholder='enter your email' />
              <input
              value={password}
              onChange={(e=>{
                setPassword(e.target.value)
              })}
              required className=' outline-none  border-2 border-emerald-600 text-xl mt-4 rounded-full py-4 px-5 placeholder:text-gray-400'type="password" placeholder='enter your password' />
              <button className='text-white outline-none w-full  border-none bg-emerald-600 text-xl my-4 rounded-full py-4 px-5 placeholder:text-white'>Login</button>

           </form>
        </div>
    </div>
  )
}

export default Login
