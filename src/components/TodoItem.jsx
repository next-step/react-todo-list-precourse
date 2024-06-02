import React from 'react'

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div>
        <li className='todoText' onClick={() => toggleTodo(todo.id)}>{todo.text}</li>
    </div>
  )
}

export default TodoItem