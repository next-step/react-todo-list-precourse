// 완료된 할 일 개수를 표시하는 컴포넌트
import React from "react";

const CompletedTodos = ({ completed }) => {
  return <span>완료된 할 일: {completed}</span>;
};

export default CompletedTodos;
