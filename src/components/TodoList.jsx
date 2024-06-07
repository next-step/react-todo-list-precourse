import React from 'react';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? 'completed' : ''}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <label>{todo.text}</label>
            <button className="destroy" onClick={() => deleteTodo(index)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
