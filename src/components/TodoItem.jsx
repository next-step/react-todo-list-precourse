import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.text}</label>
      </div>
    </li>
  );
}

export default TodoItem;
