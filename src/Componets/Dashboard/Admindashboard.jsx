import React from 'react';
import Header from '../Header/Header';
import CreateTask from '../CreateTask/CreateTask';
import AllTask from '../TaskList/AllTask';

// Admin dashboard component that combines:
// 1. Header with logout/user info
// 2. CreateTask form for assigning tasks
// 3. AllTask component to view all tasks
const Admindashboard = ({ LoggedInUSerData, setUser }) => {
  return (
    <div className="relative min-h-screen w-full p-10 bg-black text-white space-y-10">
      
      {/* Header (includes logout & user info) */}
      <Header LoggedInUSerData={LoggedInUSerData} setUser={setUser} />

      {/* Section to create new task */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-green-400">Create a New Task</h2>
        <CreateTask />
      </section>

      {/* Section to display all tasks */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">All Tasks</h2>
        <AllTask />
      </section>

    </div>
  );
};

export default Admindashboard;
