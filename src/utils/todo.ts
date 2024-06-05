import { FilterStateType, Todo } from "../Model/Todo";

export const filterTodos = (todos: Todo[], filterState: FilterStateType) => {
  return todos.filter((todo) => {
    if (filterState === "all") return true;
    if (filterState === "active") return !todo.isCompleted;
    if (filterState === "completed") return todo.isCompleted;
    return false;
  });
};
