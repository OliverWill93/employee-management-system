// src/store.js
import { createStore } from "redux";
import employeeReducer from "./redux/reducer";

const store = createStore(employeeReducer);

export default store;

