import React from 'react';

export default function TodoItem({ todo, deleteTodo,toggleComplete }) {
  return React.createElement(
    'li',
    null,
    React.createElement('input', {
      type: 'checkbox',
      checked: todo.completed,
      onChange: () => toggleComplete(todo.id)
    }),
    todo.text,
    React.createElement('button', {     
      onClick: () => deleteTodo(todo.id) 
    }, 'X')
  );
}