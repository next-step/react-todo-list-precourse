import React, { useState } from 'react'
import '../src/main.css'

function TodoList() {
    const [todos, setTodos] = useState([])
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


    return (
        <div className="lists">
            <h1>TodoList</h1>
            <div className="input">
                <h1>Todo input!</h1>
            </div>
            <ul>
                <h1>Todo list!</h1>
            </ul>
            <div className="completed-count">
                Completed Todos: {completedCount}
            </div>
        </div>
    );
}

export default TodoList
