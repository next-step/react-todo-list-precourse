import React from "react";
import "../styles/TodoBox.css";

function TodoBox({ children }) {
  return <div className="todo-box">{children}</div>;
}

export default TodoBox;
