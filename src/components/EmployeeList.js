import React from "react";
import "./EmployeeList.css";

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={index}>
              <strong>{emp.firstName} {emp.lastName}</strong> - {emp.email} ({emp.department})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;