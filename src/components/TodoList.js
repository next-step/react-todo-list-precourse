import React from 'react';
import TodoItem from './TodoItem'

export default function TodoList({ todos, deleteTodo }) {
  return createTodoList(todos, deleteTodo);
}

function createTodoList(todos, deleteTodo) {
  return React.createElement(
    'ul',
    null,
    todos.map(todo => 
      React.createElement(TodoItem, {
        key: todo.id,
        todo,
        deleteTodo
      })
    )
  );
}