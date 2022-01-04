import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const tasks = useSelector(state => state.ToDoReducer.todo)
    console.log(tasks)
    return (
        <div>
            {tasks.map((elt, index) => <TaskItem todo={elt} key={index} />)}
        </div>
    )
}

export default TaskList
