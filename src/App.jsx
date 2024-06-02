import React, { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
import TodoList from './components/TodoList'
import { getStoredTodos, saveTodos, getFilteredTodos } from './utils/utils'
import './styles/variables.css'
import './styles/App.css'

export default function App() {
   const [todos, setTodos] = useState(getStoredTodos)
   const [filterOption, setFilterOption] = useState('all')
   useEffect(() => saveTodos(todos), [todos])

   const addTodo = (text) => setTodos([...todos, { id: Date.now(), text, isCompleted: false }])
   const toggleCompletion = (id) =>
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
   const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id))

   return (
      <div className="main">
         <h1>todos</h1>
         <AddTodo addTodo={addTodo} />
         <FilterTodo setFilterOption={setFilterOption} />
         <TodoList
            todos={getFilteredTodos(todos, filterOption)}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
         />
         <div>{todos.filter((todo) => !todo.isCompleted).length} items left!</div>
      </div>
   )
}
