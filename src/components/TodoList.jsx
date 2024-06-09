import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
