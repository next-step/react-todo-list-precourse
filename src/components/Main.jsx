import React, { useState } from 'react'
import './Main.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import Filter from './Filter';

const Main = () => {

  const [todos, setTodos] = useState([])
  const [filter, setFilter]= useState('all')
  const activeCount = todos.filter(todo => !todo.checked).length

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

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  const filteredTodo = (todos.filter(todo => {
    if (filter === 'active') return todo.checked
    else if (filter === 'completed') return !todo.checked
    return true
  }

  ))

  

  return (
    <div className='Main'>
      <div className='title'>todos</div>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={filteredTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      <Filter activeCount={activeCount} setFilter={setFilter} filter={filter} />
    </div>
  )
}

export default Main