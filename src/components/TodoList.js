import React from 'react'
import '../main.css'
import TodoItem from './TodoItem'
import TodoListFooter from './TodoListFooter'

function TodoList({todolist, toggleTodo, deleteTodo,  setFilter, clearCompleted, showFooter,fullTodoList}) {
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
        showFooter && React.createElement(TodoListFooter,{ setFilter, clearCompleted, fullTodoList })
    )
  )
}

export default TodoList