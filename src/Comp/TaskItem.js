import React from 'react'
import { useDispatch } from 'react-redux';
import { complete_, delete_ } from '../Redux/Action/ToDoAction';
import EditTask from './EditTask';

const TaskItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className={todo.isDone ? "done" : null}>
                {todo.task}
            </div>
            <button onClick={() => dispatch(complete_(todo.id))}>{todo.isDone ? "undo" : "Complete"}</button>
            <EditTask todo={todo} />
            <button onClick={() => dispatch(delete_(todo.id))}>Delete</button>
        </div>
    )
}

export default TaskItem
