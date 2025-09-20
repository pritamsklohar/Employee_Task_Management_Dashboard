import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-0  py-5 px-5 justify-between gap-10 w-full'>
        <div className='py-6 px-9 rounded-xl w-[40%] bg-red-400'>
         <h2 className='text-2xl font-semibold'>{data.taskCount.newTask}</h2>
         <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-xl w-[40%] bg-blue-400'>
         <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
         <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='py-6 px-9 rounded-xl w-[40%] bg-green-400'>
         <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
         <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='py-6 px-9 rounded-xl w-[40%] bg-yellow-400'>
         <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
         <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers