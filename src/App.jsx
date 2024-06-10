import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }]);
    };

    const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    const remainingCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className="App">
            <h1>todos</h1>
            <div className="todo-container">
                <div className="todo-input-container">
                    <TodoInput addTodo={addTodo} />
                </div>
                {todos.length > 0 && (
                    <>
                        <ul className="todo-list">
                            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                        </ul>
                        <div className="todo-footer">
                            <span>
                                {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
                            </span>
                            <TodoFilter filter={filter} setFilter={setFilter} />
                            <button onClick={clearCompleted} className="clear-completed">
                                Clear completed
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
