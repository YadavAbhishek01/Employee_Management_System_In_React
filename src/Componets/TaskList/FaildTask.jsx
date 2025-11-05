import React from 'react';

const FaildTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-full sm:w-[400px] md:w-[450px] lg:w-[500px] bg-green-300 rounded-2xl">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-500 text-white px-3 py-1 rounded-2xl text-sm sm:text-base">{task.category}</h3>
        <h4 className="text-sm sm:text-base">{task.date}</h4>
      </div>

      <p className="text-xl sm:text-2xl mt-3 font-semibold">{task.title}</p>
      <p className="mt-2 text-sm sm:text-base">{task.description}</p>

      <div className="flex mt-6 sm:mt-10 w-full items-center justify-center gap-3">
        <button className="bg-green-700 rounded-2xl px-3 sm:px-5 py-2 sm:py-3 w-full text-sm sm:text-base font-semibold">
          Mark as Completed
        </button>
        <button className="bg-red-600 rounded-2xl px-3 sm:px-5 py-2 sm:py-3 w-full text-sm sm:text-base font-semibold">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default FaildTask;
