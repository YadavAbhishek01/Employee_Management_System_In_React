import React from 'react'
import Header from '../Header/Header'
import CreateTask from '../CreateTask/CreateTask'
import AllTask from '../TaskList/AllTask'
const Admindashboard = () => {
  return (
    <div className= ' relative p-10 h-full w-full  bg-black text-2xl text-white'>
      <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default Admindashboard
