import React, { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoState from "./hooks/TodoState.jsx";
import TodoFilters from "./utils/TodoFilter.jsx";
import { TodoCount } from "./utils/TodoCount.jsx";
import "./App.css";

function App() {
  const { todos, addTodo, removeTodo, changeCompletion } = TodoState();
  const [filter, setFilter] = useState("all");

  const filteredTodos = TodoFilters(todos, filter);

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === "active" ? "active" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`filter-button ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <TodoInput onAdd={addTodo} />
      <p className="todo-count">Active Todos: {TodoCount(todos)}</p>
      <TodoList
        todos={filteredTodos}
        onRemove={removeTodo}
        onComplete={changeCompletion}
      />
    </div>
  );
}

export default App;
