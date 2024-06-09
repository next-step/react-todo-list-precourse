import React from "react";
import "../styles/TodoItem.css";
import doneImage from "../images/done.png";
import deleteImage from "../images/delete.png";

function TodoItem({ id, done, text }) {
  return (
    <div className="todo-item-block">
      <div className={`check-circle ${done ? "done" : ""}`}>
        {done && <img src={doneImage} alt="done" />}
      </div>
      <div className={`text ${done ? "done" : ""}`}>{text}</div>
      <div className="remove">
        <img src={deleteImage} alt="Delete" />
      </div>
    </div>
  );
}

export default TodoItem;
