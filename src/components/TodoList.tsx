import { Dispatch, SetStateAction } from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  filter: Filter;
}

export const TodoList = ({ todos, setTodos, filter }: TodoListProps) => {
  const filterTodos = todos.filter((todo) => {
    if (filter === "모두") return true;
    if (filter === "진행중") return !todo.done;
    if (filter === "완료") return todo.done;
  });

  return (
    <div className="todo-list">
      {filterTodos?.map((todo, index) => (
        <TodoListItem
          key={index}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          index={index}
        />
      ))}
    </div>
  );
};
