import { ADD, COMPLETE, DELETE, EDIT } from "../Types";
export const add_ = (payload) => ({
    type: ADD,
    payload
})
export const delete_ = (payload) => ({
    type: DELETE,
    payload
})
export const complete_ = (payload) => ({
    type: COMPLETE,
    payload
})
export const edit_ = (id, value) => ({
    type: EDIT,
    payload: { id, value }
})
