import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
 
const TaskList = () => {
    const { tasks } = useSelector((state) => state.tasks)
 
    return (
        <div>
            {
                tasks.length <= 0 ? 'タスクは未登録です。' :
                <ul>
                { tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                )) }
                </ul>
            }
        </div>
    )
}
 
export default TaskList