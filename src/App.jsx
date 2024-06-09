import React from "react";
import "./App.css";
import TodoBox from "./components/TodoBox";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <>
      <TodoBox>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoBox>
    </>
  );
}

export default App;
