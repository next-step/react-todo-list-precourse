import React from 'react';

const TodoItem = ({ todo, toggleTodoCompletion, deleteTodo, setTodos, todos }) => {
  return (
    <li className={todo.completed ? 'todo completed' : 'todo'}>
    <input
        type="checkbox"
        id={`todo-${todo.id}`}
        className="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCompletion(todo.id, todos, setTodos)}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
      <button className="destroy" onClick={() => deleteTodo(todo.id, todos, setTodos)}>×</button>
    </li>
  );
};

export default TodoItem;
