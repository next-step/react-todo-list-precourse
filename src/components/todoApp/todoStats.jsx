import React from "react";
import TotalTodos from "./stats/totalTodos";
import CompletedTodos from "./stats/completedTodos";
import ActiveTodos from "./stats/activeTodos";

// 할 일 통계 컴포넌트: 전체 할 일, 완료된 할 일을 표시하는 컴포넌트
const TodoStats = ({ todos, allTodos }) => {
  const totalTodos = allTodos.length;
  const completedTodos = allTodos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div>
      <TotalTodos total={totalTodos} /> |{" "}
      <CompletedTodos completed={completedTodos} /> |{" "}
      <ActiveTodos active={activeTodos} />
    </div>
  );
};

export default TodoStats;
