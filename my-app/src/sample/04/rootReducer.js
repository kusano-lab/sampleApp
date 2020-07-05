import { combineReducers } from '@reduxjs/toolkit'
import tasksModule from './modules/tasksModule'

const rootReducer = combineReducers({
    tasks: tasksModule.reducer
})
 
export default rootReducer