import React from 'react'
import Header from '../Header/Header'
import Newtask from '../TaskListNumber/Newtask'

const Employee = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] text-white h-screen w-screen'>
      <Header/>
      <Newtask/>
    </div>
  )
}

export default Employee
