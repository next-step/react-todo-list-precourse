import { useFilter } from "../contexts/filter/useTodos";
import { useTodos } from "../contexts/todos/useTodos";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filterTodos = todos.filter((todo) => {
    if (filter === "모두") return true;
    if (filter === "진행중") return !todo.done;
    if (filter === "완료") return todo.done;
  });

  return (
    <div className="todo-list">
      {filterTodos?.map((todo, index) => (
        <TodoListItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
};
