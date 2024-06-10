import React from "react";

// 할 일 텍스트 컴포넌트: 완료된 경우에는 텍스트에 줄 긋기
const TodoText = ({ text, completed }) => {
  return (
    <span className={`todo-text ${completed ? "completed" : ""}`}>{text}</span>
  );
};

export default TodoText;
