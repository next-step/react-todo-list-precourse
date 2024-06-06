import React from 'react'
import TodoItem from './TodoItem'
import '../src/main.css'

export default function TodoItemList({ todos, toggleTodo, removeTodo }) {
    return (
        <ul>
        {todos.map((todo, index) => (
            <TodoItem 
                key={index} 
                todo={todo}
                index={index} 
                toggleTodo={toggleTodo} 
                removeTodo={removeTodo}
            />
        ))}
        </ul>
    ) 
}