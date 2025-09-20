import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4>{data.date}</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
           <p className='text-lg mt-2'>
             {data.description}
           </p>
           <div className='mt-4 '>
             <button className='w-full bg-emerald-500 rounded h-8'>Completed</button>
           </div>
       </div>
  )
}

export default CompleteTask