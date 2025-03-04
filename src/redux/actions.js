// redux/actions.js
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const removeEmployee = (email) => ({
  type: REMOVE_EMPLOYEE,
  payload: email,
});
