import React, { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";

const App = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, { text: newTodo, done: false }]);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default App;