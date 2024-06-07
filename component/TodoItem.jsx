import React, {useState} from 'react'
import '../src/main.css'

export default function TodoItem({ todo, index, toggleTodo, removeTodo }) {
    return (
        <li className="todo-item">
          <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleTodo(index)} />
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' , color: todo.isCompleted ? 'gray' : 'black' }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(index)}>X</button>
        </li>
      )
}

