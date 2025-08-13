import React from 'react'

const NewTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[500px] bg-orange-300 rounded-2xl">
      {/* Header: Category badge and task date */}
      <div className="flex items-center justify-between">
        <h3 className="bg-red-500 text-white px-3 py-1 rounded-2xl">
          {task.category}
        </h3>
        <h4>{task.date}</h4>
      </div>

      {/* Task title */}
      <p className="text-2xl mt-3 font-semibold">{task.title}</p>

      {/* Task description */}
      <p className="mt-2 text-sm">{task.description}</p>

      {/* Action buttons: Accept or Dislike task */}
      <div className="flex mt-20 w-full items-center justify-center gap-5">
        <button className="bg-green-700 rounded-2xl px-5 py-3 w-full text-base font-semibold">
          Accept task
        </button>
        <button className="bg-red-600 rounded-2xl px-5 py-3 w-full text-base font-semibold">
          Dislike
        </button>
      </div>
    </div>
  )
}

export default NewTask
