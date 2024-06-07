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
    ),showFooter && React.createElement('div',{className:'page1'},null),
  showFooter && React.createElement('div',{className:'page2'},null)
  )
}

export default TodoList