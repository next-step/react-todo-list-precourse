import React from 'react';

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
