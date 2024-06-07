import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'
import TodoListFooter from './TodoListFooter'

function TodoList({todolist, toggleTodo, deleteTodo,  setFilter, clearCompleted }) {
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
        ),
        React.createElement(TodoListFooter,{ todolist, setFilter, clearCompleted })
    )
  )
}

export default TodoList