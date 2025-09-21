import React, { useEffect } from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data, ...props}) => {

   const [username, setUsername] = useState('')

   useEffect(() => {
     if(data){
    setUsername(data.name)
   }else{
    setUsername('Admin')
   }
   
   }, [data])
   

  const logOutUser = () => {

     localStorage.setItem('loggedInUser','')
     props.changeUser('')
     //  window.location.reload()
  }


  

  return (
    <div className='flex p-8 item-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{username}👋</span></h1>
        <button onClick={logOutUser} className='border-none bg-red-500 text-white px-5 py-2 mt-8 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header