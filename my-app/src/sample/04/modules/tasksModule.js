import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
    count: 2,
    tasks: [
        {
            id: 2,
            title: '2件目のタスク',
            done: false
        },{
            id: 1,
            title: '1件目のタスク',
            done: true
        }
    ]
}
 
const tasksModule = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask (state, action) {
            state.count++
 
            const newTask = {
                id: state.count,
                title: action.payload,
                done: false
            }
     
            state.tasks = [newTask, ...state.tasks]
        },
        doneTask (state, action) {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.done = !task.done
            }
        },
        deleteTask (state, action) {
            state.tasks = state.tasks.filter(t =>
                t.id !== action.payload.id
            )
        }
    }
})
 
export const {
    addTask, doneTask, deleteTask
} = tasksModule.actions
 
export default tasksModule