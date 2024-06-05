import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

function App() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
        const newTodo = { text, id: Date.now(), completed: false };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => { 
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const todosCount = todos.filter(todo => !todo.completed).length;

    return (
        <div className="box">
            <h1 style={{ color: '#40AFFF' }}>todos</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={filteredTodos} onDelete={deleteTodo} onToggle={toggleTodo} />
            <TodoFooter 
                todosCount={todosCount}
                filter={filter}
                setFilter={setFilter}
                clearCompleted={clearCompleted} 
            />
        </div>
    );
}

export default App;