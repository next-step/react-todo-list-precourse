import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
        <ul>{todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        )
        )}</ul>
    </div>
  )
}

export default TodoList