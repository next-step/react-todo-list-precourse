import React from 'react';

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <div className="todo-buttons">
        <button onClick={() => toggleComplete(index)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
