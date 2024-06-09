import React from "react";
import "../styles/TodoHead.css";
import { useTodoState } from "./TodoContext";

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <div className="todo-head-block">
      <h1>2024년 6월 9일</h1>
      <div className="day">일요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </div>
  );
}

export default TodoHead;
