import React from 'react'

function TodoItem ({todo, index, toggleTodo, deleteTodo}) {
    return React.createElement('li', { className: 'listItem' },
        React.createElement('input', {
          className: 'checkBox',
          type: 'checkbox',
          checked: todo.completed,
          onChange: () => toggleTodo(index)
        }),
        React.createElement('span', null, todo.text),
        React.createElement('button', {
          className: 'deleteButton',
          onClick: () => deleteTodo(index)
        }, 'X')
      )
}

export default TodoItem