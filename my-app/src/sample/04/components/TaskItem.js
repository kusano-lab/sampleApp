import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, deleteTask } from '../modules/tasksModule'
 
const TaskItem = ({ task }) => {
    const dispatch = useDispatch()
 
    return (
        <li className={task.done ? 'done' : ''}>
            <label>
                <input
                    type="checkbox"
                    onClick={() => dispatch(doneTask(task))}
                    defaultChecked={ task.done }
                />
                <span className="checkbox-label">{ task.title }</span>
            </label>
            <button
                onClick={() => dispatch(deleteTask(task))}
            >x</button>
        </li>
    )
}
 
export default TaskItem