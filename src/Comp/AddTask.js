import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_ } from '../Redux/Action/ToDoAction';
const AddTask = () => {
    const [text, setText] = useState(" ");
    const dispatch = useDispatch();
    const handleAdd = () => {
        if (text) {
            dispatch(add_({ id: Math.random, task: text, isDone: false }))
            setText(" ")
        }
        else {
            alert("enter task")
        }
    }
    return (
        <div>
            <input type="text" onVolumeChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={handleAdd} >
                ADD
            </button>
        </div>
    )
}

export default AddTask
