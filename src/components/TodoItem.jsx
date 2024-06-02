import React from 'react'

export default function TodoItem({ todo, toggleCompletion, deleteTodo }) {
   return (
      <div style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
         {todo.text}
         <button onClick={() => toggleCompletion(todo.id)}>완료</button>
      </div>
   )
}
