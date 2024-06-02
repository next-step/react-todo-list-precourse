import React, { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";

const App = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, { text: newTodo, done: false }]);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default App;