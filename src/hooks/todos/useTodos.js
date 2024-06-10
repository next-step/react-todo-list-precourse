// 모든 상태와 핸들러를 결합하는 훅
import useTodoStateManager from "../filteredTodos/useTodoStateManager";
import useTodoHandlers from "../useTodoHandlers";
import useLoadTodos from "../storage/useLoadTodos";
import useLoadFilter from "../storage/useLoadFilter";
import useSaveTodos from "../storage/useSaveTodos";
import useSaveFilter from "../storage/useSaveFilter";
import FILTERS from "../../utils/filters";

const useTodos = () => {
  const { todos, allTodos, setTodos, filter, setFilter } =
    useTodoStateManager();
  const handlers = useTodoHandlers(allTodos, setTodos, setFilter);

  useLoadTodos(setTodos);
  useLoadFilter(setFilter);
  useSaveTodos(allTodos);
  useSaveFilter(filter);

  return {
    todos,
    allTodos,
    filter,
    FILTERS,
    ...handlers,
  };
};

export default useTodos;
