import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input.jsx";
import TodoList from "./components/TodoList.jsx";
import handleInputChange from "./utils/handleInputChange.jsx";
import handleKeyPress from "./utils/handleKeyPress.jsx";
import addTodo from "./utils/addTodo.jsx";

function Main() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="inner">
      <h1>todos</h1>
      <Input
        value={inputValue}
        onChange={(e) => handleInputChange(e, setInputValue)}
        onKeyPress={(e) =>
          handleKeyPress(e, todos, setTodos, inputValue, setInputValue)
        }
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default Main;
