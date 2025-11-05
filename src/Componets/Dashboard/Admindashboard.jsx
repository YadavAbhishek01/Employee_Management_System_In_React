import React from 'react';
import Header from '../Header/Header';
import CreateTask from '../CreateTask/CreateTask';
import AllTask from '../TaskList/AllTask';

const Admindashboard = ({ LoggedInUSerData, setUser }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white p-4 sm:p-10 space-y-10">

      {/* Header */}
      <Header LoggedInUSerData={LoggedInUSerData} setUser={setUser} />

      {/* Create Task Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-green-400">
          Create a New Task
        </h2>
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
          <CreateTask />
        </div>
      </section>

      {/* All Tasks Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-400">
          All Tasks
        </h2>
        <div className="overflow-x-auto">
          <AllTask />
        </div>
      </section>

    </div>
  );
};

export default Admindashboard;
