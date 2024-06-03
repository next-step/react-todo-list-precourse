import React, { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoToggle from "./components/TodoToggle.jsx";
import TodoFilter from "./components/TodoFilter.jsx";

const App = () => {

    const { todos, addTodo, toggleDone, setFilter } = TodoToggle();

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoFilter setFilter={setFilter}/>
            <TodoList todos={todos} toggleDone={toggleDone}/>
        </div>
    );
};

export default App;