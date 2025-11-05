import React from 'react'

const Newtask = ({ LoggedInUSerData }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6 w-full justify-center sm:justify-between px-2 sm:px-6">
      {/* New Task Count */}
      <div className="flex-1 min-w-[140px] sm:w-[22%] bg-red-400 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold">{LoggedInUSerData.taskcount.newtask}</h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 sm:mt-6 lg:mt-8">New Task</p>
      </div>

      {/* Completed Task Count */}
      <div className="flex-1 min-w-[140px] sm:w-[22%] bg-sky-400 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold">{LoggedInUSerData.taskcount.complete}</h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 sm:mt-6 lg:mt-8">Completed</p>
      </div>

      {/* Active Task Count */}
      <div className="flex-1 min-w-[140px] sm:w-[22%] bg-green-400 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold">{LoggedInUSerData.taskcount.active}</h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 sm:mt-6 lg:mt-8">Active</p>
      </div>

      {/* Failed Task Count */}
      <div className="flex-1 min-w-[140px] sm:w-[22%] bg-emerald-700 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold">{LoggedInUSerData.taskcount.fail}</h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 sm:mt-6 lg:mt-8">Failed</p>
      </div>
    </div>
  )
}

export default Newtask
