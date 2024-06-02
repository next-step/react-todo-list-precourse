import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleCompletion, deleteTodo }) {
   return (
      <div>
         {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
         ))}
      </div>
   )
}
