import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        const newTodo = { text: todo, done: false };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    const removeAllTodo = () => {
        setTodos(todos.filter(todo => !todo.done));
    };

    const toggleTodo = (index) => {
        setTodos(
            todos.map((todo, i) => 
                i === index ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, removeAllTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };
