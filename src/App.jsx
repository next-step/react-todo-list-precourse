import React, { useState, useEffect } from "react";
import "./styles/App.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import {
  loadTodos,
  saveTodos,
  createAddTodo,
  createDelTodo,
  createToggleTodo,
} from "./utils/utils.js";

function App() {
  const [todos, setTodos] = useState(loadTodos);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = createAddTodo(setTodos);
  const delTodo = createDelTodo(setTodos);
  const toggleTodo = createToggleTodo(setTodos);

  return (
    <>
      <Header addTodo={addTodo} />
      <TodoList todos={todos} delTodo={delTodo} toggleTodo={toggleTodo} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
