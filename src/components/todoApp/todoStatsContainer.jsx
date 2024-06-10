import React from "react";
import TodoStats from "./todoStats";

// 할 일 통계 컨테이너 컴포넌트: 할 일 통계를 표시하는 컴포넌트
const TodoStatsContainer = ({ useTodos }) => {
  const { todos, allTodos, filter } = useTodos();

  return (
    <div className="todo-stats-container">
      <TodoStats todos={todos} allTodos={allTodos} filter={filter} />
    </div>
  );
};

export default TodoStatsContainer;
