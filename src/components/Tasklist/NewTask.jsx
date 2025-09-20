import React from 'react'

const NewTask = ({data}) => {
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
           <div className='mt-4'>
             <button className='h-8 w-full rounded bg-blue-500'>Accept Task</button>
           </div>
       </div>
  )
}

export default NewTask