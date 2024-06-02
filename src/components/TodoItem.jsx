import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div className='todoItem'>
        <span className={`material-symbols-outlined toggleIcon ${todo.checked ? 'iconFalse' : 'iconTrue'}`} onClick={() => toggleTodo(todo.id)}>{todo.checked ? 'check_circle' : 'circle'}</span>
        <li className={`todoText ${todo.checked ? 'checkedFalse' : 'checkedTrue'}`}>{todo.text}</li>

    </div>
  )
}

export default TodoItem