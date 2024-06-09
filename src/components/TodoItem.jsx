import React from 'react';

function TodoItem({ todo }) {
  return (
    <li>
      <div className="view">
        <label>{todo.text}</label>
      </div>
    </li>
  );
}

export default TodoItem;
