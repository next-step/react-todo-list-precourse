import { useTodoAction } from "../hooks/useTodoAction";
import { Input } from "./ui/Input";

interface TodoListItemContentProps {
  todo: Todo;
  index: number;
}

export const TodoListItemContent = ({
  todo,
  index,
}: TodoListItemContentProps) => {
  const { toggleTodo } = useTodoAction();

  return (
    <div>
      <Input
        id={`checkbox-${index}`}
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(index)}
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
