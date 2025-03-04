// components/EmployeeList.js
import React from "react";
import { useSelector } from "react-redux";
import EmployeeTable from "./EmployeeTable";
import "../components/EmployeeList.css";
import "../components/EmployeeForm.css";


const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);

  const departments = {
    Marketing: [],
    Engineering: [],
    Sales: [],
    HR: [],
  };

  employees.forEach((employee) => {
    if (departments[employee.department]) {
      departments[employee.department].push(employee);
    }
  });

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <div className="tables-container">
        {Object.entries(departments).map(([dept, employees]) => (
          <EmployeeTable key={dept} department={dept} employees={employees} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
