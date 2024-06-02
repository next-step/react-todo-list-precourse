import React from 'react'
import '../styles/TodoItem.css'

export default function TodoItem({ todo, toggleCompletion, deleteTodo }) {
   return (
      <div className="todo-item">
         <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.text}</span>
         <div className="button-container">
            <button onClick={() => toggleCompletion(todo.id)}>Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
         </div>
      </div>
   )
}
