import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
  // Load employees from local storage when the app starts
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Save employees to local storage whenever the state updates
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Function to add a new employee and update local storage
  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
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
