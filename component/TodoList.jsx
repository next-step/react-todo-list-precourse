import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import Filter from './Filter'
import '../src/main.css'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const completedCount = todos.filter(todo => todo.isCompleted).length;

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.isCompleted;
        if (filter === 'incomplete') return !todo.isCompleted;
        return true; 
    });

    return (
        <div className="lists">
            <div className="input">
                <TodoInput addTodo={addTodo} />
            </div>
            <div className={`list-wrapper ${todos.length > 0 ? 'has-items' : ''}`}>
                <Filter filter={filter} setFilter={setFilter}/>

                <ul>
                {filteredTodos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo}
                        index={index} 
                        toggleTodo={toggleTodo} 
                        removeTodo={removeTodo}
                    />
                ))}
                </ul>
                {todos.length > 0 && (
                    <div className="completed-count">
                        Completed Todos: {completedCount}
                    </div>
                )}
            </div>

            
        </div>
    );
}

export default TodoList
