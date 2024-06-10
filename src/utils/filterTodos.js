// 할 일 목록을 필터링하는 함수
import FILTERS from "./filters";
import activeFilter from "./activeFilter";
import completedFilter from "./completedFilter";

const filterTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.ACTIVE:
      return activeFilter(todos);
    case FILTERS.COMPLETED:
      return completedFilter(todos);
    default:
      return todos;
  }
};

export default filterTodos;
