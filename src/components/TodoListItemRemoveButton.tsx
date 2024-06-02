import { useTodoAction } from "../hooks/useTodoAction";
import { Button } from "./ui/Button";

interface TodoListItemRemoveButtonProps {
  index: number;
}

export const TodoListItemRemoveButton = ({
  index,
}: TodoListItemRemoveButtonProps) => {
  const { removeTodo } = useTodoAction();
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
