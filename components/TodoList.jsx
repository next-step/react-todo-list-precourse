import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
