import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboar from './components/Dashboard/EmployeeDashboar'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from "react";
import { AuthContext } from './context/AuthProvider';


const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData]= useContext(AuthContext)
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)

      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }


  // }, [authData])
  

  const handleLogin = (email,password)=> {
    if(email =='admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){

        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    }
    else{
      alert("Invalid Credentials")
    }
  }
 
  
  
  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/>: ''}
     {user == 'admin' ? <AdminDashboard changeUser = {setUser}/>: (user == 'employee'?<EmployeeDashboar  changeUser = {setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
