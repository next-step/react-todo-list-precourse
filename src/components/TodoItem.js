import React from 'react'

function TodoItem ({todo, index, toggleTodo, deleteTodo}) {
    return React.createElement('li', { className: 'listItem' },
        React.createElement('input', {
          className: 'checkBox',
          type: 'checkbox',
          style: { cursor: 'pointer' },
          checked: todo.completed,
          onChange: () => toggleTodo(index)
        }),
        React.createElement('span', {onClick: () => toggleTodo(index),style: { cursor: 'pointer' }}, todo.text),
        React.createElement('button', {
          className: 'deleteButton',
          onClick: () => deleteTodo(index)
        }, 'X')
      )
}

export default TodoItem