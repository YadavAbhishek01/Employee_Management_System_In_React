import React, { useState } from 'react'
import AcceptTask from './AcceptTask'
import Complete from './Complete'
import FaildTask from './FaildTask'
import NewTask from './NewTask'

const Tasklist = ({ LoggedInUSerData }) => {
  // count state declared but unused - consider removing if not needed
  const [count, setCount] = useState('')

  return (
    <div
      className="tasklist flex overflow-x-auto px-6 py-10 gap-5 h-[50%] w-full mt-5 items-center justify-start"
    >
      {LoggedInUSerData.tasks.map((elem, i) => {
        // Render component based on task status flags
        if (elem.active) {
          return <AcceptTask key={i} task={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={i} task={elem} />
        }
        if (elem.failTask) {
          return <FaildTask key={i} task={elem} />
        }
        if (elem.completed) {
          return <Complete key={i} task={elem} />
        }
        // Optional: handle tasks without a known status
        return null
      })}
    </div>
  )
}

export default Tasklist
