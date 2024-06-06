import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [todos, setTodos] = useState(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [filter, setFilter] = useState("all");

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );

  const addTodo = (newTodo) => {
    if (!newTodo) {
      alert("할 일을 입력해주세요!");
      return;
    }
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filterTodos = (newFilter) => {
    setFilter(newFilter);
  };

  const getFilteredTodos = () => {
    return todos.filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement("header", null, "todos"),
    React.createElement(
      "div",
      { className: "app-container" },
      React.createElement(TodoInput, { onAddTodo: addTodo }),
      React.createElement(TodoList, {
        todos: getFilteredTodos(),
        onToggle: toggleTodo,
        onDeleteTodo: deleteTodo,
      }),
      React.createElement(
        "div",
        { className: "footer" },
        React.createElement(
          "span",
          null,
          `${todos.filter((todo) => !todo.completed).length} item left`
        ),
        React.createElement(FilterButtons, {
          filter: filter,
          onFilterChange: filterTodos,
        }),
        React.createElement(
          "button",
          { onClick: clearCompleted, className: "clear-completed" },
          "Clear completed"
        )
      )
    )
  );
}

export default App;
