import React from 'react';

export default function TodoItem({ todo, deleteTodo }) {
  return React.createElement(
    'li',
    null,
    todo.text,
    React.createElement('button', {     
      onClick: () => deleteTodo(todo.id) 
    }, 'X')
  );
}