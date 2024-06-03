import React, { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoToggle from "./components/TodoToggle.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoCount from "./components/TodoCount.jsx";

const App = () => {

    const { todos, addTodo, toggleDone, setFilter, deleteTodo } = TodoToggle();

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoFilter setFilter={setFilter}/>
            <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/>
            <TodoCount count={todos.length} />
        </div>
    );
};

export default App;