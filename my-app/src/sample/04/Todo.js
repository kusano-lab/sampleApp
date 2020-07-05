import React from "react";
import { Provider } from "react-redux";
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import store from "./src/store";
 
const Todo = () => {
    return (
        <Provider store={store}>
            <TaskInput />
            <TaskList />
        </Provider>
    )
}

export default Todo