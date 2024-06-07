import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

function TodoList({todolist, toggleTodo, deleteTodo }) {
  return React.createElement('div',{className: 'todoListItemField'},
    React.createElement('ul',null,
        todolist.map((todo, index) =>
            React.createElement(TodoItem, {
              key: index,
              todo,
              index,
              toggleTodo,
              deleteTodo
            })
        )
    )
  )
}

export default TodoList