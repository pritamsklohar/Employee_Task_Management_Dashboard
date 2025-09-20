import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

 

  const submitHandler=(e)=>{
     e.preventDefault()
     console.log("task createed")

     setNewTask({title, description, date, category,  active:false,newTask:true, failed:false, completed:false})
     
     const data = userData


     data.forEach(function(elem){
        if(assignTo==elem.name){
          elem.tasks.push(newTask)
          elem.taskCount.newTask = elem.taskCount.newTask+1
        }
     })
     setUserData(data)
     console.log(data)


     setAssignTo('')
     setCategory('')
     setDate('')
     setTitle('')
     setDescription('')
  }

  return (
    <div className='p-8'>
        <div className='p-2 bg-[#1c1c1c] mt-5 rounded-lg'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex w-full flex-wrap p-5 item-start justify-between'>
          <div className='w-1/2 '>
            <div>
             <h3>Task Title</h3>
             <input
             value={title}
             onChange={(e)=>{
              setTitle(e.target.value)
             }} 
             className='text-sm mt-1 py-1 px-1.5 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4' type="text" placeholder='make a ui design'  />
            </div>
            <div>
              <h3>Date</h3>
              <input
              value={date}
              onChange={(e)=>{
              setDate(e.target.value)
              }} 
              className='text-sm mt-1 py-1 px-1.5 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4'  type="date" />
            </div>
            <div>
              <h3>Assign to</h3>
              <input 
              value={assignTo}
              onChange={(e)=>{
              setAssignTo(e.target.value)
              }} 
              className='text-sm mt-1 py-1 px-1.5 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4'  type="text" placeholder='employee name'/>
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input 
              value={category}
              onChange={(e)=>{
              setCategory(e.target.value)
              }} 
              className='text-sm mt-1 py-1 px-1.5 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4'  type="text" placeholder='design,dev,etc.'/>
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-start'>
            <h3>Discription</h3>
            <textarea 
             value={description}
             onChange={(e)=>{
             setDescription(e.target.value)
             }} 
            className='mt-2 h-46 outline-none rounded-sm w-full px-4 py-2 border-[1px] border-gray-400'  name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-emerald-400 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
          
        </form>
      </div>
      </div>
  )
}

export default CreateTask