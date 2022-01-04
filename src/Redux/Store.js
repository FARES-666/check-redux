import { createStore } from "redux";
import rootreducer from "./Reducer";
const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const Store = createStore(rootreducer, devtool);
export default Store