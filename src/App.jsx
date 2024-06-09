import React, { useState, useEffect } from "react";
import "./styles/App.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos-app"));
    if (savedTodos != null) {
      return savedTodos;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos-app", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

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
