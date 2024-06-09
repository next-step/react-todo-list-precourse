import React from "react";
import "./App.css";
import TodoBox from "./components/TodoBox";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoBox>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoBox>
    </TodoProvider>
  );
}

export default App;
