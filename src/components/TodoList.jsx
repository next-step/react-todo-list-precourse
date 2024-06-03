import React, { useState } from "react";
import CheckBox from "./CheckBox";
import toggleTodo from "../utils/toggleTodo";

const TodoList = ({ todos }) => {
  const [completedTodos, setCompletedTodos] = useState([]);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          className={completedTodos.includes(index) ? "completed" : ""}
        >
          <CheckBox
            isChecked={completedTodos.includes(index)}
            onChange={() =>
              toggleTodo(index, completedTodos, setCompletedTodos)
            }
          />
          <div className="todo">{todo}</div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
