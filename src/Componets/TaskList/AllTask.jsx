import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {
  const { Employees } = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-4 mt-5 rounded-2xl w-full">
      {/* Header */}
      <div className="hidden sm:grid grid-cols-5 gap-2 bg-green-400 text-white font-semibold text-base rounded-xl py-2 px-4">
        <h3 className="text-center">Employee Name</h3>
        <h3 className="text-center">New Task</h3>
        <h3 className="text-center">Active</h3>
        <h3 className="text-center">Completed</h3>
        <h3 className="text-center">Fail</h3>
      </div>

      {/* Employee Rows */}
      <div className="mt-4 flex flex-col gap-3">
        {Employees.length > 0 ? (
          Employees.map((employee, i) => (
            <div
              key={i}
              className="bg-[#333] text-green-500 text-sm sm:text-base rounded-xl p-4 flex flex-col sm:grid sm:grid-cols-5 gap-2"
            >
              <div className="flex justify-between sm:block">
                <span className="font-semibold sm:hidden">Employee:</span>
                <span>{employee.name}</span>
              </div>
              <div className="flex justify-between sm:block">
                <span className="font-semibold sm:hidden">New Task:</span>
                <span>{employee.taskcount.newtask}</span>
              </div>
              <div className="flex justify-between sm:block">
                <span className="font-semibold sm:hidden">Active:</span>
                <span>{employee.taskcount.active}</span>
              </div>
              <div className="flex justify-between sm:block">
                <span className="font-semibold sm:hidden">Completed:</span>
                <span>{employee.taskcount.complete}</span>
              </div>
              <div className="flex justify-between sm:block">
                <span className="font-semibold sm:hidden">Fail:</span>
                <span>{employee.taskcount.fail}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-white py-4">
            No employee data available
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTask;
