import React from 'react';
import AcceptTask from './AcceptTask';
import Complete from './Complete';
import FaildTask from './FaildTask';
import NewTask from './NewTask';

const Tasklist = ({ LoggedInUSerData }) => {
  return (
    <div className="tasklist flex flex-nowrap overflow-x-auto gap-4 sm:gap-5 py-4 px-2 sm:px-6">
      {LoggedInUSerData.tasks.map((elem, i) => {
        if (elem.active) return <AcceptTask key={i} task={elem} />;
        if (elem.newTask) return <NewTask key={i} task={elem} />;
        if (elem.failTask) return <FaildTask key={i} task={elem} />;
        if (elem.completed) return <Complete key={i} task={elem} />;
        return null;
      })}
    </div>
  );
};

export default Tasklist;
