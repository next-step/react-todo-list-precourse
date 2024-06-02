import React from 'react';
import TodoItem from './TodoItem'

export default function TodoList({ todos, deleteTodo, toggleComplete }) {
  return createTodoList(todos, deleteTodo, toggleComplete);
}

function createTodoList(todos, deleteTodo, toggleComplete) {
  return React.createElement(
    'ul',
    null,
    todos.map(todo => 
      React.createElement(TodoItem, {
        key: todo.id,
        todo,
        deleteTodo,
        toggleComplete
      })
    )
  );
}