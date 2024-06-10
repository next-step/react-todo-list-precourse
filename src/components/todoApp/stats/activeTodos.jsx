// 진행 중인 할 일 개수를 표시하는 컴포넌트
import React from "react";

const ActiveTodos = ({ active }) => {
  return <span>진행 중인 할 일: {active}</span>;
};

export default ActiveTodos;
