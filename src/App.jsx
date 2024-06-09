import React, { useState } from "react";
import "./styles/App.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header addTodo={addTodo} />
      <TodoList todos={todos} delTodo={delTodo} />
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
