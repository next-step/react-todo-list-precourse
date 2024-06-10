// 필터링된 할 일 목록과 관련된 상태와 함수를 제공하는 훅
import useFilteredTodosState from "./useFilteredTodosState";

const useTodoStateManager = () => {
  const { todos, allTodos, setTodos, filter, setFilter } =
    useFilteredTodosState();

  return {
    todos,
    allTodos,
    setTodos,
    filter,
    setFilter,
  };
};

export default useTodoStateManager;
