import React from 'react'

const Newtask = ({ LoggedInUSerData }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-10 w-full h-full justify-between px-6 py-10">
      {/* New Task Count */}
      <div className="w-[22%] bg-red-400 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-9xl font-bold">{LoggedInUSerData.taskcount.newtask}</h1>
        <p className="text-3xl font-bold mt-8">New Task</p>
      </div>

      {/* Completed Task Count */}
      <div className="w-[22%] bg-sky-400 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-9xl font-bold">{LoggedInUSerData.taskcount.complete}</h1>
        <p className="text-3xl font-bold mt-8">Completed</p>
      </div>

      {/* Active Task Count */}
      <div className="w-[22%] bg-green-400 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-9xl font-bold">{LoggedInUSerData.taskcount.active}</h1>
        <p className="text-3xl font-bold mt-8">Active</p>
      </div>

      {/* Failed Task Count */}
      <div className="w-[22%] bg-emerald-700 flex flex-col items-center justify-center rounded-2xl p-5">
        <h1 className="text-9xl font-bold">{LoggedInUSerData.taskcount.fail}</h1>
        <p className="text-3xl font-bold mt-8">Failed</p>
      </div>
    </div>
  )
}

export default Newtask
