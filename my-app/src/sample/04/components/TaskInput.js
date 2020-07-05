import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../modules/tasksModule'
 
const TaskInput = () => {
    const dispatch = useDispatch()
 
    const [ inputTitle, setInputTitle ] = useState('')
 
    const handleInputChange = (e) => {
        setInputTitle(e.target.value)
    }
 
    const handleSubmit = () => {
        dispatch(addTask(inputTitle))
        setInputTitle('')
    }
 
    return (
        <div>
            <input
                type="text"
                value={inputTitle}
                onChange={handleInputChange}
                placeholder="new task"
            />
            <button onClick={handleSubmit}>+</button>
        </div>
    )
}
 
export default TaskInput