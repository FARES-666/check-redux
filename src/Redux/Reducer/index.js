import { combineReducers } from "redux";
import ToDoReducer from "./ToDoReducer";

const rootreducer = combineReducers({ ToDoReducer });
export default rootreducer