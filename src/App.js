import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} {emp.lastName} - {emp.email} ({emp.department})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
