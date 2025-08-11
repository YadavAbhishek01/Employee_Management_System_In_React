import React, { useState, useEffect, createContext } from 'react'
import { getLocalStorage, SetLocalStorage } from '../Utils/Localstorage'
import Employee from '../Componets/Dashboard/Employee';
import { normalizeModuleId } from 'vite/module-runner';

export const AuthContext = createContext()

let counts=1;
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(getLocalStorage());
 
  useEffect(() => {

    const data = getLocalStorage();
  setUserData(data);
    console.log(userData)
  }, []) // Empty dependency array = run once after mount

  return (
    <AuthContext.Provider value={userData }>   
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
