// TodoItem.js
import React from 'react';
import './TodoItem.css';  // CSS 파일 임포트

function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">삭제</button>
    </div>
  );
}

export default TodoItem;
