import { useTodoActions } from "../../../hooks/useTodoActions";
import { Input } from "../../ui/Input";

interface TodoCheckboxProps {
  todo: Todo;
  index: number;
}

export const TodoCheckbox = ({ todo, index }: TodoCheckboxProps) => {
  const { toggleTodo } = useTodoActions();

  return (
    <Input
      id={`checkbox-${index}`}
      type="checkbox"
      checked={todo.done}
      onChange={() => toggleTodo(index)}
    />
  );
};
