import React from 'react'
import './TodoList.css'

function TodoList({todolist}) {
  return React.createElement('div',{className: 'todoListItemField'},
    React.createElement('ul',null,
        todolist.map(todo => {
          return React.createElement('li',{className: 'listItem'},
            React.createElement('input', { className:'checkBox' ,type: 'checkbox' }),
            React.createElement('span', null, todo),
            React.createElement('button', {className: 'deleteButton'}, 'X')
          )
        })
    )
  )
}

export default TodoList