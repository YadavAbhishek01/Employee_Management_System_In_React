import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className=' relative flex items-center justify-center  mt-10'>
        <form className='relative items-center justify-between  gap-8 w-[50%] rounded-2xl bg-zinc-800 p-5'>
            <h3>Task Title</h3>
            <input type="text" placeholder='Enter Your Task' className='w-full items-center bg-zinc-900 outline-none   shadow-2xl py-3 text-white   px-3 rounded-xl '  />
            <h3>Task Description</h3>
            <textarea  name="" id="" cols="10" rows="3" placeholder='Write the Description ' className='w-full  bg-zinc-900 outline-none   shadow-2xl py-3  text-white   px-3  rounded-xl'></textarea>
            <h3>Date</h3>
            <input type="date"  placeholder='Choose a Date'  className='w-full    bg-zinc-900 outline-none   shadow-2xl py-3  text-white   px-3    rounded-xl'/>
            <h3>Select Employee</h3>
            <input type="text" placeholder='Enter Employee name ' className='w-full  bg-zinc-900 outline-none   shadow-2xl py-3  text-white   px-3   rounded-xl ' />
            <h3>Category</h3>
            <input type="text" name="" id="" placeholder='Write category design ,dev ..'  className='w-full  bg-zinc-900 outline-none   shadow-2xl py-3  text-white   px-3   rounded-xl ' />
            <button type='submit' className='bg-green-700 px-3 py-1 text-black mt-5  ml-[37%] rounded-2xl '>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
