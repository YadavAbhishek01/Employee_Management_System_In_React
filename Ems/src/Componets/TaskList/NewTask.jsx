import React from 'react'

const NewTask = ({task}) => {
  return (
    <div className='flex-shrink-0 p-5  h-full w-[500px] bg-orange-300 rounded-2xl '>
    <div className='flex  items-center justify-between '>
        <h3 className='bg-red-500 text-white px-3 py-1 rounded-2xl'>{task.category}</h3>
        <h4>{task.date}</h4>
    </div>
    < p className='text-2xl mt-3 font-semibold '>{task.title}</p>
    <p className=' mt-2 text-sm '>{task.description}</p>
    <div className="  flex mt-20 w-full items-center justify-center gap-5">
            <button className=" bg-green-700 rounded-2xl px-5  py-3 w-full text-base  font-semibold">Accept task</button> 
            <button className=" bg-red-600 rounded-2xl px-5 py-3  text-base font-semibold w-full">Deslike</button>                  
        </div>
</div>
  )
}

export default NewTask
