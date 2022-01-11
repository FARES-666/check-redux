import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";

const rootreducer = combineReducers({ todoReducer });
export default rootreducer