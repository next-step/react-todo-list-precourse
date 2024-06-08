import React from "react";
import "./TodoItem.css";
const TodoItem = ({ todo, deleteTodo, checkTodoComplete }) => {
  const handleInputLabelClick = () => {
    checkTodoComplete(todo.id);
    console.log("checked");
  };
  return (
    <div className="itemBox">
      <input
        type="checkbox"
        className="checkBox"
        checked={todo.isTodoCompleted}
        onChange={() => {
          checkTodoComplete(todo.id);
        }}
      />
      <label
        htmlFor={`투두: ${todo.id}`}
        onClick={handleInputLabelClick}
      ></label>
      <h2
        className="todoText"
        style={{
          textDecoration: todo.isTodoCompleted ? "line-through" : "none",
          color: todo.isTodoCompleted ? "#434343" : "black",
        }}
      >
        {todo.text}
      </h2>
      <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
