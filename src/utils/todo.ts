import { FilterStateType } from "../App";
import { Todo } from "../Modules/Todo";

export const filterTodos = (todos: Todo[], filterState: FilterStateType) => {
  return todos.filter((todo) => {
    if (filterState === "all") return true;
    if (filterState === "active") return todo.status === "active";
    if (filterState === "completed") return todo.status === "completed";
    return false;
  });
};
