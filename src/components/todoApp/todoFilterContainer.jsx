import React from "react";
import TodoFilter from "../todoFilter/todoFilter";

// 할 일 필터 컨테이너 컴포넌트: 할 일 필터를 표시하고 설정하는 기능을 제공하는 컴포넌트
const TodoFilterContainer = ({ useTodos }) => {
  const { filter, FILTERS, handleSetFilter } = useTodos();

  return (
    <TodoFilter
      filter={filter}
      FILTERS={FILTERS}
      handleSetFilter={handleSetFilter}
    />
  );
};

export default TodoFilterContainer;
