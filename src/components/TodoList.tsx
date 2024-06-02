import { useTodos } from "../hooks/useTodo";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  filter: Filter;
}

export const TodoList = ({ filter }: TodoListProps) => {
  const { todos } = useTodos();

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
