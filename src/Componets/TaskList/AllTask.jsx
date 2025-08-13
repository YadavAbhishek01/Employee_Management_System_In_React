import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
  const { Employees } = useContext(AuthContext); // Get employee data from context

  return (
    <div
      id='alltask'
      className='bg-[#1c1c1c] p-5 mt-5 rounded-2xl'
    >
      {/* Header Row: Titles for each column */}
      <div className='bg-green-400 py-2 px-4 flex items-center  text-2xl justify-between rounded-xl font-semibold text-white'>
        <h3 className='w-1/5 text-center'>Employee Name</h3>
        <h3 className='w-1/5 text-center'>New Task</h3>
        <h3 className='w-1/5 text-center'>Active</h3>
        <h3 className='w-1/5 text-center'>Completed</h3>
        <h3 className='w-1/5 text-center'>Fail</h3>
      </div>

      {/* Employee Task Data Rows */}
      <div
        id='empbox'
        className='mt-4 max-h-64 overflow-y-auto flex flex-col gap-3 pr-1 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300'
      >
        {/* Check if Employees data exists */}
        {Employees.length > 0 ? (
          Employees.map((employee, i) => (
            <div
              key={i}
              className='bg-[#333] py-2 px-4  text-xl flex items-center justify-between gap-2 rounded-xl text-green-700'
            >
              {/* Each column shows employee name and task counts */}
              <h3 className='w-1/5 text-center py-1 rounded'>
                {employee.name}
              </h3>
              <h3 className='w-2/5 text-center py-1 rounded'>
                {employee.taskcount.newtask}
              </h3>
              <h3 className='w-1/5 text-centerpy-1 rounded'>
                {employee.taskcount.active}
              </h3>
              <h3 className='w-1/5 text-center py-1 rounded'>
                {employee.taskcount.complete}
              </h3>
              <h3 className='w-1/5 text-center py-1 rounded'>
                {employee.taskcount.fail}
              </h3>
            </div>
          ))
        ) : (
          <div className='text-center text-white py-4'>
            No employee data available
          </div>
        )}
      </div>
    </div>
  )
}

export default AllTask;
