import React from 'react';

export default function TodoItem({ todo, deleteTodo,toggleComplete }) {
  return React.createElement(
    'li',
    { className: 'todo-item'},
    React.createElement('input', {
      type: 'checkbox',
      checked: todo.completed,
      onChange: () => toggleComplete(todo.id),
    }),
    React.createElement('span', { className: 'todo-text' }, todo.text),
    React.createElement('button', {     
      onClick: () => deleteTodo(todo.id) 
    }, '—')
  );
}