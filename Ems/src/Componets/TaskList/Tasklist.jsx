import React, { useState } from 'react'
import AcceptTask from './AcceptTask'
import Complete from './Complete'
import FaildTask from './FaildTask'
import NewTask from './NewTask'
import Newtask from '../TaskListNumber/Newtask'

const Tasklist = ({LoggedInUSerData}) => {

    const [count,setcount]=useState('')
  return (
    <div className='tasklist flex  overflow-hidden overflow-x-auto px-6 py-10 gap-5  h-[50%] w-full mt-5 items-center justify-star' >
        {LoggedInUSerData.tasks.map((elem ,i)=>{
          if(elem.active)
          {
            return <AcceptTask  key={i} task={elem} />
          }
          if(elem.newTask)
            {
              return <NewTask key={i}  task={elem}/>
            }
            if(elem.failTask)
              {
                return <FaildTask key={i} task={elem} />
              }
              if(elem.completed)
                {
                  return <Complete  key={i}  task={elem}/>
                }
        })}
    </div>
  )
}

export default Tasklist
