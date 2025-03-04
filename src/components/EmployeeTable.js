// components/EmployeeTable.js
import React from "react";
import { useDispatch } from "react-redux";
import { removeEmployee } from "../redux/actions";

const EmployeeTable = ({ department, employees }) => {
  const dispatch = useDispatch();

  return (
    <div className="department-table">
      <h3>{department} Department</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.email}>
                <td>{employee.firstName} {employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className="remove-btn" onClick={() => dispatch(removeEmployee(employee.email))}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="no-data">No employees yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
