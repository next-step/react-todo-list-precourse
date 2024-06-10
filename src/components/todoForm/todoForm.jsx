import React, { useState } from "react";
import TodoInput from "./todoInput";
import handleSubmit from "../../handlers/handleSubmit";
import "./todoForm.css";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="todo-form"
      onSubmit={(e) => handleSubmit(e, inputValue, addTodo, setInputValue)}
    >
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
