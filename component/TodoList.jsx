import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItemList from './TodoItemList'
import IncompletedCount from './IncompletedCount'
import ClearCompletedItem from './ClearCompletedItem'
import '../src/main.css'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('all')

    const addTodo = (text) => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }

    const incompletedTodosCount = todos.filter(todo => !todo.isCompleted).length;

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.isCompleted;
        if (filter === 'incomplete') return !todo.isCompleted;
        return true; 
    })

    const clearCompletedItem = () => {
        const newTodos = todos.filter(todo => !todo.isCompleted);
        setTodos(newTodos);
    }

    return (
        <div className="lists">
            <div className="input">
                <TodoInput addTodo={addTodo} />
            </div>
            {todos.length > 0 && (
                <div className="list-wrapper">
                <TodoItemList 
                    todos={filteredTodos} 
                    toggleTodo = {toggleTodo} 
                    removeTodo={removeTodo}
                    filter = {filter}
                    setFilter = {setFilter}
                />
                <div className="notice-wrapper">
                    <IncompletedCount incompleted = {incompletedTodosCount} length = {todos.length}/>  
                    <ClearCompletedItem clearCompletedItem={clearCompletedItem}/>
                </div>
                
            </div>
            )}
            
        </div>
    )
}