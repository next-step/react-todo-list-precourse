import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
