import React, { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [filter, setFilter] = useState("all");

  // 할 일을 추가하는 함수
  const addTodo = (text) => {
    setTodos([...todos, { id: nextId, text, completed: false }]);
    setNextId(nextId + 1); // 다음 할 일에 사용할 ID를 증가
  };

  // 특정 ID를 가진 할 일을 목록에서 제거하는 함수
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 필터에 따라 할 일 목록을 필터링하는 함수
  const getFilteredTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  // 완료되지 않은 할 일의 개수를 반환하는 함수
  const getActiveTodoCount = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

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

      <p className="todo-count">Active Todos: {getActiveTodoCount()}</p>
      <TodoList
        todos={getFilteredTodos()}
        onRemove={removeTodo}
        onComplete={completeTodo}
      />
    </div>
  );
}

export default App;
