import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={toggleTodo} 
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
