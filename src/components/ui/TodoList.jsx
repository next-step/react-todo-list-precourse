import React from "react";
import HandleDeleteItem from "../handlers/HandleDeleteItem";
import HandleToggleComplete from "../handlers/HandleToggleComplete";

const TodoList = ({ lists, HandleToggleComplete, HandleDeleteItem}) => {
  return (
    <ul className="todo-list">
      {lists.map((item, index) => (
        <li key={item.id} className="todo-item">
          <input
            className="todo-check"
            type="checkbox"
            id={`check${index + 1}`}
            value=""
          ></input>
          <label
            htmlFor={`check${index + 1}`}
            onClick={() => HandleToggleComplete(item.id)}
            className="checkbox-label"
          ></label>
          <p className={item.completed ? "completed" : ""}>{item.text}</p>
          <span onClick={() => HandleDeleteItem(item.id)} className="material-icons">
            close
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
