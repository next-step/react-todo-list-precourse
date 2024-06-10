// 필터를 적용하여 할 일 목록을 반환하는 훅
import { useMemo } from "react";
import filterTodos from "../../utils/filterTodos";

const useFilteredTodos = (todos, filter) => {
  const filteredTodos = useMemo(
    () => filterTodos(todos, filter),
    [todos, filter]
  );
  return filteredTodos;
};

export default useFilteredTodos;
