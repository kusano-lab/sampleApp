import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import './Todo.css'

const TodoList = (props) => {
  const [todos, setTodos] = useState(props.todosList);

  const [task, setTask] = useState('')

  const [checkboxState, setCheckbox] = useState(false)

  const handleRemoveTask = (id) => {
    const newTodos = [...todos]

    newTodos.forEach((todo, index) => {
      if(todo.id === id){
        newTodos.splice(index, 1)
      }
      return false;
    });
    setTodos(newTodos)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(task === '') return
    
    setTodos(todos => [
      ...todos,
      {id:  uuid(), title: task, isDone: false}
    ])
    setTask('')
  }

  const handleOnChange = (event) => {
    setTask(event.target.value)
  }
  
  const handleToggleCheckbox = useCallback((id) => {
      todos.forEach((todo, index) => {
        if(todo.id === id){
          //初期化
          setCheckbox(todo['isDone']);

          todos[index]['isDone'] = !todos[index]['isDone']
          setCheckbox(!checkboxState)
        }
        return false;
      });
      // setTodos(todos)
    },
    [setTodos, todos, setCheckbox, checkboxState]
  );

  const Tasks = () => {
    return todos.map((todo) => {
      return (
      <TaskLiStyle key={todo.id.toString()} todo={todo}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => handleToggleCheckbox(todo.id)} /> 
        {todo.title}
        <span
          onClick={() => handleRemoveTask(todo.id)}>[x]</span>
      </TaskLiStyle>
      );
    });
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        Add Task: 
        <input
          value={task}
          placeholder="Add New Task"
          onChange={handleOnChange} />
        <input
          type="submit"
          value="submit" />
      </form>
        <ul>
          <Tasks />
        </ul> 
    </>
  );
}

const Todo = (props) => {
  return (
    <div>
      <h1>todo app</h1>
      <TaskStyle>
          <TodoList todosList={props.todosList} />
      </TaskStyle>
    </div>
  );
}

const TaskStyle = styled.div.attrs({ className: 'task-wrap' })
`{
  ul {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px;
  }
}`;

const TaskLiStyle = styled.li.attrs(props => ({
  className: props.todo.isDone ? "active" : ""
}))
`{
  color: blue;
  &:first-child {
    padding-top: 0;
  }
  &:hover {
    color: red;
  }
  &.active {
    text-decoration: line-through;
  }
}`;


export default Todo;
