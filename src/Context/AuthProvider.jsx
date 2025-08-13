import React, { useState, useEffect, createContext } from 'react'
import { getLocalStorage, SetLocalStorage } from '../Utils/Localstorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // 1. Get initial data from localStorage
  const initialData = getLocalStorage()

  // 2. Use state to manage that data
  const [Employees, setEmployees] = useState(initialData.Employees || [])
  const [Admin, setAdmin] = useState(initialData.Admin || [])

  // 3. Save to localStorage whenever data changes
  useEffect(() => {
    SetLocalStorage(Employees, Admin)
  }, [Employees, Admin])

  // 4. Provide both state and setters through context
  return (
    <AuthContext.Provider value={{ Employees, setEmployees, Admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
  