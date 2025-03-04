// redux/reducer.js
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from "./actions";

const initialState = {
  employees: JSON.parse(localStorage.getItem("employees")) || [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      const updatedEmployees = [...state.employees, action.payload];
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return { ...state, employees: updatedEmployees };

    case REMOVE_EMPLOYEE:
      const filteredEmployees = state.employees.filter(
        (emp) => emp.email !== action.payload
      );
      localStorage.setItem("employees", JSON.stringify(filteredEmployees));
      return { ...state, employees: filteredEmployees };

    default:
      return state;
  }
};

export default employeeReducer;
