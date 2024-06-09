import React from 'react';

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
