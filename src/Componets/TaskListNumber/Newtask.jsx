import React from 'react'

const Newtask = ({LoggedInUSerData}) => {


  return (
    <div className=' flex screen  gap-4 mt-10 w-[100%] h-full justify-between px-6 py-10 p-10 '>   
      <div className='   w-[30%] bg-red-400 flex items-center justify-center rounded-2xl '>
        <h1 className='text-9xl font-bold'>{LoggedInUSerData.taskcount.newtask}</h1>
        <p className='text-3xl font-bold mt-8'>New Task</p>
      </div>
        <div className=' p-5 w-[30%]  bg-sky-400 flex items-center justify-center rounded-2xl '>
        <h1 className='text-9xl font-bold'>{LoggedInUSerData.taskcount.complete}</h1>
        <p className='text-3xl font-bold mt-8'>Completed</p>
      </div>
        <div className=' p-5 w-[30%]  bg-green-400 flex items-center justify-center rounded-2xl '>
        <h1 className='text-9xl font-bold'>{LoggedInUSerData.taskcount.active}</h1>
        <p className='text-3xl font-bold mt-8'>Active</p>
      </div>
        <div className=' p-5 w-[30%]  bg-emerald-700 flex items-center justify-center rounded-2xl '>
        <h1 className='text-9xl font-bold'>{LoggedInUSerData.taskcount.fail}</h1>
        <p className='text-3xl font-bold mt-8'>Failed</p>
      </div>
    </div>
  )
}

export default Newtask
