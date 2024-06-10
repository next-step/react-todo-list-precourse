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
    <div className="todo-stats">
      <div className="stat">
        <TotalTodos total={totalTodos} />
      </div>
      <div className="stat">
        <CompletedTodos completed={completedTodos} />
      </div>
      <div className="stat">
        <ActiveTodos active={activeTodos} />
      </div>
    </div>
  );
};

export default TodoStats;
