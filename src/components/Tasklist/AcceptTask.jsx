import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
         <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4>{data.date}</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
           <p className='text-lg mt-2'>
            {data.description}
           </p>
           <div className='flex justify-between mt-4 '>
              
              <button className='bg-green-500 h-8 py-1 px-2 text-sm hover:bg-green-600 rounded'>Mark as Completed</button>
              <button className='bg-red-500 py-1 h-8 px-2 text-sm hover:bg-red-600 rounded'>Mark as Failed</button>
           </div>
       </div>
    </div>
  )
}

export default AcceptTask