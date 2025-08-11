import React from 'react'
import Header from '../Header/Header'
import Newtask from '../TaskListNumber/Newtask'
import Tasklist from '../TaskList/Tasklist'

const Employee = ({ LoggedInUSerData }) => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white px-6 py-10 space-y-10">
      <Header LoggedInUSerData={LoggedInUSerData} />
      <Newtask LoggedInUSerData={LoggedInUSerData} />
      <Tasklist LoggedInUSerData={LoggedInUSerData} />
    </div>
  )
}

export default Employee
