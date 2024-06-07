import React from 'react';

const TodoItem = ({ todo, toggleTodoCompletion, deleteTodo, setTodos, todos }) => {
  return (
    <li className={todo.completed ? 'todo completed' : 'todo'}>
      <div className="checkbox" onClick={() => toggleTodoCompletion(todo.id, todos, setTodos)}>
        {todo.completed ? '✔' : ''}
      </div>
      <label>{todo.text}</label>
      <button className="destroy" onClick={() => deleteTodo(todo.id, todos, setTodos)}>×</button>
    </li>
  );
};

export default TodoItem;
