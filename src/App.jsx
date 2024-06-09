import React from "react";
import TodoBox from "./components/TodoBox";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <TodoBox>
        <TodoHead />
        <TodoList />
      </TodoBox>
    </>
  );
}

export default App;
