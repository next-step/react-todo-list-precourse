import React from "react";
import TodoBox from "./components/TodoBox";
import TodoHead from "./components/TodoHead";
import "./App.css";

function App() {
  return (
    <>
      <TodoBox>
        <TodoHead></TodoHead>
      </TodoBox>
    </>
  );
}

export default App;
