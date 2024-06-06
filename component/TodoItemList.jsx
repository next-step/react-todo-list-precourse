import React from 'react'
import TodoItem from './TodoItem'
import Filter from './Filter'
import '../src/main.css'

export default function TodoItemList({todos, toggleTodo, removeTodo, filter, setFilter}) {
    
    return (
        <>
            <Filter filter={filter} setFilter={setFilter}/>
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
        </>
    ) 
}