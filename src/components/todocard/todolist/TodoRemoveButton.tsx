import { useTodoActions } from "../../../hooks/useTodoActions";
import { Button } from "../../ui/Button";

interface TodoRemoveButtonProps {
  index: number;
}

export const TodoRemoveButton = ({ index }: TodoRemoveButtonProps) => {
  const { removeTodo } = useTodoActions();

  return (
    <Button
      variant="destructive"
      size="round"
      onClick={() => removeTodo(index)}
      className="todo-remove-button"
    >
      X
    </Button>
  );
};
