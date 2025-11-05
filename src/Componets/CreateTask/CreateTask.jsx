import React, { useState } from 'react';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [emp, setEmp] = useState('');
  const [category, setCategory] = useState('');

  const localdata = JSON.parse(localStorage.getItem("employees")) || [];
  const updatedata = [...localdata];
  let taskAssigned = false;

  const submitTask = (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      assignedTo: emp,
      category,
      active: false,
      completeTask: false,
      failTask: false,
      newTask: true,
      status: false
    };

    updatedata.forEach((employee) => {
      if (emp === employee.name) {
        if (!employee.tasks) employee.tasks = [];
        employee.tasks.push(task);
        employee.taskcount.newtask += 1;
        taskAssigned = true;
      }
    });

    if (taskAssigned) {
      localStorage.setItem("employees", JSON.stringify(updatedata));
      alert("✅ Task added successfully to selected employee.");
    } else {
      alert("❌ Task not created. Employee not found.");
    }

    setTitle('');
    setDescription('');
    setDate('');
    setEmp('');
    setCategory('');
  };

  return (
    <div className="flex justify-center mt-6">
      <form
        onSubmit={submitTask}
        className="flex flex-col gap-4 w-full sm:max-w-2xl rounded-2xl bg-zinc-800 p-6 sm:p-8 text-white shadow-lg"
      >
        <label className="block mb-2 text-lg font-semibold">Task Title</label>
        <input
          type="text"
          placeholder="Enter task title"
          className="w-full bg-zinc-900 outline-none py-3 px-4 rounded-xl placeholder-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="block mb-2 text-lg font-semibold">Task Description</label>
        <textarea
          placeholder="Write the task description"
          className="w-full bg-zinc-900 outline-none py-3 px-4 rounded-xl resize-none placeholder-gray-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        ></textarea>

        <label className="block mb-2 text-lg font-semibold">Deadline</label>
        <input
          type="date"
          className="w-full bg-zinc-900 outline-none py-3 px-4 rounded-xl"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label className="block mb-2 text-lg font-semibold">Assign To</label>
        <select
          value={emp}
          onChange={(e) => setEmp(e.target.value)}
          className="w-full bg-zinc-900 text-white py-3 px-4 rounded-xl"
          required
        >
          <option value="" disabled>Select Employee</option>
          {updatedata.map((employee, i) => (
            <option key={i} value={employee.name} className="bg-zinc-700">
              {employee.name}
            </option>
          ))}
        </select>

        <label className="block mb-2 text-lg font-semibold">Category</label>
        <input
          type="text"
          placeholder="e.g., Design, Development..."
          className="w-full bg-zinc-900 outline-none py-3 px-4 rounded-xl placeholder-gray-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-600 px-6 py-2 text-white font-semibold rounded-2xl mt-4 transition-colors"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
