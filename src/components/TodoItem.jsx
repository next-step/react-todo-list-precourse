import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div>
        <li className='todoItem' onClick={() => toggleTodo(todo.id)}>{todo.text}</li>
    </div>
  )
}

export default TodoItem