import React, { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => setInput(event.target.value);

  const handleSubmit = () => {
    if (!input.trim()) {
      alert("할 일을 입력해주세요!");
      return;
    }
    onAddTodo(input);
    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.isComposing) {
      handleSubmit();
    }
  };

  return React.createElement(
    "div",
    null,
    React.createElement("input", {
      type: "text",
      value: input,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      placeholder: "What needs to be done?",
      className: "todo-input",
    }),
    React.createElement(
      "button",
      {
        onClick: handleSubmit,
        className: "add-button",
      },
      "추가"
    )
  );
}

export default TodoInput;
