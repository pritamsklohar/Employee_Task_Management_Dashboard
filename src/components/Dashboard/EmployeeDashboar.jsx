import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboar = (props) => {
  
  return (
    <div className='bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboar