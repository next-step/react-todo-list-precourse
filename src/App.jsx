import React, { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
import TodoList from './components/TodoList'

export default function App() {
   const [todos, setTodos] = useState([])
   const [filterOption, setFilterOption] = useState('all')

   const addTodo = (text) => {
      const newData = { id: Date.now(), text, isCompleted: false }
      setTodos([...todos, newData])
   }

   const toggleCompletion = (id) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
   }

   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
   }

   const getFilteredTodos = () => {
      switch (filterOption) {
         case 'active':
            return todos.filter((todo) => !todo.isCompleted)
         case 'completed':
            return todos.filter((todo) => todo.isCompleted)
         default:
            return todos
      }
   }

   return (
      <div>
         <AddTodo addTodo={addTodo} />
         <FilterTodo setFilterOption={setFilterOption} />
         <TodoList todos={getFilteredTodos()} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
         <div>{todos.filter((todo) => !todo.isCompleted).length} items left!</div>
      </div>
   )
}
