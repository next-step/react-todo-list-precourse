import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log(todos);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
        console.log(todos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};


export { TodoContext, TodoProvider };
