import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/actions";
import "../components/EmployeeForm.css";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.department) {
      dispatch(addEmployee({ ...formData, id: Date.now() }));
      setFormData({ firstName: "", lastName: "", email: "", department: "" });
    }
  };

  return (
    <div className="employee-form-wrapper">
      <div className="employee-form-container">
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
          </select>
          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
