import React from "react";
import TodoApp from "./todoApp";
import "./todoContainer.css";

const TodoContainer = () => {
  return (
    <div className="todo-container">
      <h1>todos</h1>
      <p>Enter 키나 추가 버튼을 사용하여 할 일을 목록에 추가하세요.</p>
      <TodoApp />
      <p className="footer">Created by [강원대 FE_허윤수]</p>
    </div>
  );
};

export default TodoContainer;
