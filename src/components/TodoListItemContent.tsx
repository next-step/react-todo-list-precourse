import { Dispatch, SetStateAction } from "react";
import { toggleTodo } from "../hooks/useTodos";
import { Input } from "./ui/Input";

interface TodoListItemContentProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todo: Todo;
  index: number;
}

export const TodoListItemContent = ({
  todos,
  setTodos,
  todo,
  index,
}: TodoListItemContentProps) => {
  return (
    <div>
      <Input
        id={`checkbox-${index}`}
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(index, todos, setTodos)}
      />
      <label
        className={todo.done ? "done-todo" : ""}
        htmlFor={`checkbox-${index}`}
      >
        {todo.text}
      </label>
    </div>
  );
};
