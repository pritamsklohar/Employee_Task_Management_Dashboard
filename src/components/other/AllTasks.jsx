import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = ({elem}) => {

  const [userData, setUserData] = useContext(AuthContext)
  

  return (
    <div className='p-8 mt-[-3%]'>
     <div id='AllTask' className='bg-[#1c1c1c] p-5 rounded-lg  h-89 '>
      <div  className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h5 className='w-1/5 text-lg font-medium '>Employee Name</h5>
        <h5 className='w-1/5 text-lg font-medium '>New Task</h5>
        <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium '>Failed</h5>

      </div>
      <div id='AllTask' className='h-[80%]'>
        {userData.map(function(elem,idx){

        return<div key={idx} className='bg-transparent border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-medium '>{elem.name}</h2>
        <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCount.newTask}</h3>
        <h5 className='w-1/5 text-lg font-medium text-yellow-600'>{elem.taskCount.active}</h5>
        <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskCount.completed}</h5>
        <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCount.failed}</h5>
      </div>
      })}</div>
      
     </div>
    </div>
  )
}

export default AllTasks