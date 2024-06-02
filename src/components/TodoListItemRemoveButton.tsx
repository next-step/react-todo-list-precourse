import { useTodoActions } from "../hooks/useTodoActions";
import { Button } from "./ui/Button";

interface TodoListItemRemoveButtonProps {
  index: number;
}

export const TodoListItemRemoveButton = ({
  index,
}: TodoListItemRemoveButtonProps) => {
  const { removeTodo } = useTodoActions();

  return (
    <Button
      variant="destructive"
      size="round"
      onClick={() => removeTodo(index)}
    >
      X
    </Button>
  );
};
