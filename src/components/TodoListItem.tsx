import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { removeTodo, toggleTodo } from "../hooks/useTodos";

interface TodoListITemProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todo: Todo;
  index: number;
}

export const TodoListItem = ({
  todos,
  setTodos,
  todo,
  index,
}: TodoListITemProps) => {
  return (
    <div key={index} className="todo-item block">
      <Input
        id={`checkbox-${index}`}
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(index, todos, setTodos)}
      />
      <label htmlFor={`checkbox-${index}`}>{todo.text}</label>
      <Button
        variant="destructive"
        size="round"
        onClick={() => removeTodo(index, todos, setTodos)}
      >
        X
      </Button>
    </div>
  );
};
