import React from 'react'
import Header from '../Header/Header'
import Newtask from '../TaskListNumber/Newtask'
import Tasklist from '../TaskList/Tasklist'

const Employee = ({ LoggedInUSerData, setUser }) => {
  return (
    <div className="min-h-screen bg-zinc-400 text-white px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-10">
      <Header LoggedInUSerData={LoggedInUSerData} setUser={setUser} />

      <main className="max-w-full mx-auto space-y-12">
        {/* Greeting Section */}
        <div className="text-2xl sm:text-3xl font-semibold border-b border-zinc-700 pb-4">
          👋 Welcome, <span className="text-green-400">{LoggedInUSerData?.name}</span>
        </div>

        {/* Task Summary (New Task Stats) */}
        <section className="bg-zinc-800 rounded-lg shadow-md p-4 sm:p-6">
          <Newtask LoggedInUSerData={LoggedInUSerData} />
        </section>

        {/* Task List */}
        <section className="bg-zinc-800 rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-zinc-700 pb-2">📋 Your Tasks</h2>
          <Tasklist LoggedInUSerData={LoggedInUSerData} />
        </section>
      </main>
    </div>
  )
}

export default Employee
