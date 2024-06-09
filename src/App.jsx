import React, { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(0);

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

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} onComplete={completeTodo} />
    </div>
  );
}

export default App;
