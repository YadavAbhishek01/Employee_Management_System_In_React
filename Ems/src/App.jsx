
import { useEffect, useState } from 'react'
import Login from './Componets/Auth/Login'
import Admindashboard from './Componets/Dashboard/Admindashboard'
import Employee from './Componets/Dashboard/Employee'
import { getLocalStorage, SetLocalStorage } from './Utils/Localstorage'

const App = () => {
  const [user,setUser]=useState(null)
  const HandleLogin=(email,password)=>{
    if(email=='abc@gmail.com' && password==='123')
    {
      console.log("login")
    }
  }
  return (
    <div>
     {(!user ? <Login HandleLogin={HandleLogin}/> :' ')}
      {/* <Employee/> */}
      {/* <Admindashboard/> */}
    </div>
  )
}

export default App
