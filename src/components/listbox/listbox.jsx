import React, { useState } from "react";
import "./listbox.css";
import checkBox from "../../images/check_icon.svg";
import circleBox from "../../images/circle_icon.svg";

function Listbox({ todo, setTodos, index }) {
  const handleToggle = () => {};
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item !== todo));
  };
  return (
    <div className="list_box">
      <div
        className="checkbox"
        onClick={() => {
          handleToggle();
        }}
        style={{
          backgroundImage: todo.checked
            ? `url(${checkBox})`
            : `url(${circleBox})`,
        }}
      ></div>
      <div
        className="list"
        style={{
          textDecoration: todo.checked ? "line-through" : "none",
          color: todo.checked ? "#D79F9F" : "#4d4d4d",
        }}
      >
        {todo.text}
      </div>
      <div className="delete" onClick={handleDelete}></div>
    </div>
  );
}

export default Listbox;
