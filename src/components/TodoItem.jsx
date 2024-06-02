import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">삭제</button>
    </div>
  );
}

export default TodoItem;