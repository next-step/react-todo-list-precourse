import { useFilter } from "../../../contexts/filter/useFilter";
import { useTodos } from "../../../contexts/todos/useTodos";
import { getFilteredTodos } from "../../../utils/filterTodo";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filterTodos = getFilteredTodos(todos, filter);

  return (
    <div className="todo-list">
      {filterTodos?.map((todo, index) => (
        <TodoListItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
};
