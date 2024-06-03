import React from "react";
import CheckBox from "./CheckBox";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <div className="list-row">
        <CheckBox />
        <li key={index}>{todo}</li>
      </div>
    ))}
  </ul>
);

export default TodoList;
