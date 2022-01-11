import { ADD, COMPLETE, DELETE, EDIT } from "../Types";

const initialState = {
    todo: [
        { id: Math.random(), task: "learn API", isDone: false },
        { id: Math.random(), task: "learn Node.js", isDone: false },
        { id: Math.random(), task: "learn HTML", isDone: true },
        { id: Math.random(), task: "learn CSS", isDone: true },
    ]
}
const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD:
            return { ...state, todo: [...state.todo, payload] };
        case DELETE:
            return { ...state, todo: state.todo.filter(elt => elt.id !== payload) };
        case COMPLETE:
            return { ...state, todo: state.todo.map(elt => elt.id === payload ? { ...elt, isDone: !elt.isDone } : null) };
        case EDIT:
            return { ...state, todo: state.todo.map(elt => elt.id === payload.id ? { ...elt, task: payload.value } : elt) };
        default:
            return state;
    }
}
export default todoReducer