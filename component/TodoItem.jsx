import React from 'react'
import '../src/main.css'

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
    return (
        <li className="todo-item">
          <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleTodo(index)} />
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(index)}>x</button>
        </li>
      )
}

export default TodoItem

