import React, {useState} from 'react';


const TodoList = () => {
  const todosList = [
    {id: 0, title: 'Task00', isDone: false},
    {id: 1, title: 'Task01', isDone: false},
    {id: 2, title: 'Task02', isDone: false}
  ]
  
  const [todos, setTodos] = useState(todosList);

  const [task, setTask] = useState('')

  const handleRemoveTask = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(task === '') return

    setTodos(todos => [...todos, {title: task, isDone: false}])
    setTask('')
  }

  const handleNewTask = (event) => {
    setTask(event.target.value)
  }
  
  const Tasks = todos.map((todo, index) => {
    return (
    <li key={index} className={todo.isDone ? "active" : ""}>
      {todo.title}
      <span onClick={() => handleRemoveTask(index)}>[x]</span>
    </li>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        Add Task: <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
        <input type="submit" value="submit" />
      </form>
      <ul>
        {Tasks}
      </ul>
    </>
  );
}

const Todo = () => {
  return (
    <div>
      <h1>todo app</h1>
      <TodoList />
    </div>
  );
}

export default Todo;
