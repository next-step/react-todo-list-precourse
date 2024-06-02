import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <div>
        <ul className='todoList'>{todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
        )}</ul>
    </div>
  )
}

export default TodoList