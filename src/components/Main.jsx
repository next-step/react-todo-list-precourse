import React, { useState } from 'react'
import './Main.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo';

const Main = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: todos.length+1, text: todo, checked: false }])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  return (
    <div className='Main'>
      <div className='title'>todos</div>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default Main