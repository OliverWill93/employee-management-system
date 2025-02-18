import React, { useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setEmployee((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(employee).some((field) => field.trim() === "")) {
      alert("All fields are required.");
      return;
    }
    addEmployee(employee);
    setEmployee({ firstName: "", lastName: "", email: "", department: "" });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />
      </label>
      <label>
        Department:
        <select name="department" value={employee.department} onChange={handleChange} required>
          <option value="">Select Department</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
        </select>
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
