import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import './TaskList.css'
const TaskList = () => {
    const tasks = useSelector(state => state.todoReducer.todo)
    console.log(tasks)
    return (
        <div className='tas'>
            {tasks.map((elt, index) => <TaskItem todo={elt} key={index} />)}
        </div>
    )
}

export default TaskList
