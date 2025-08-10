import React from 'react'
import Header from '../Header/Header'
import Newtask from '../TaskListNumber/Newtask'
import Tasklist from '../TaskList/Tasklist'

const Employee = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] text-white h-screen w-screen'>
      <Header/>
      <Newtask/>
      <Tasklist/>
    </div>
  )
}

export default Employee
