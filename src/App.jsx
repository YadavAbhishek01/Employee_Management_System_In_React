
import { useContext, useEffect, useState } from 'react'
import Login from './Componets/Auth/Login'
import Admindashboard from './Componets/Dashboard/Admindashboard'
import Employee from './Componets/Dashboard/Employee'
import { getLocalStorage, SetLocalStorage } from './Utils/Localstorage'

import { AuthContext } from './Context/AuthProvider'
import { date } from 'joi'


const App = () => {
  const [user, setUser] = useState(null)
  const [LoggedInUSer, setLoggedInUser] = useState(null)


  const Authdata = useContext(AuthContext);

  useEffect(()=>{
    SetLocalStorage();
  },[])
  useEffect(() => {
   
    const loggedInUSer = localStorage.getItem("loggedInUSer")
    if (loggedInUSer) {
      const userdata=JSON.parse(loggedInUSer)
      setUser(userdata.role)
      setLoggedInUser(userdata.data)

    
    }
  }, [Authdata])


  const HandleLogin = (email, password) => {
  //   if (Authdata && Authdata.Admin.find((e) => e.email === email && e.password === password)) {
  //     setUser('Admin')
  //     localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'Admin',Admin  }))
  //   }
  //   else if (Authdata) {
  //     const employee = Authdata.Employees.find((e) => email === e.email && password === e.password)
  //     if (employee) {
  //       setUser('Employee')
  //       setLoggedInUser(employee)
  //       localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'Employee'  ,data:employee}))         
  //     }
  //   }
  //   else {
  //     alert("invalid email or  password")
  //   }
        if(Authdata)
        {
          const admin=Authdata.Admin.find((e) => e.email === email && e.password === password)

          if(admin)
          {
            setUser('Admin')
                  setLoggedInUser(admin)
                  localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'Admin'  ,data:admin}))     
                  return;
          }

          const employee=Authdata.Employees.find((e) => e.email === email && e.password === password)

          if(employee)
          {
            setUser('Employee')
                  setLoggedInUser(employee)
                  localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'Employee'  ,data:employee}))     
                  return;
          }
          alert(' invalid email or password')           
        }
  }

  return (
    <div>

      {!user && <Login HandleLogin={HandleLogin} />}
      {user === 'Admin' && <Admindashboard  LoggedInUSerData={LoggedInUSer}/>}
      {user === 'Employee' && <Employee LoggedInUSerData={LoggedInUSer} />}
    </div>
  )
}

export default App
 