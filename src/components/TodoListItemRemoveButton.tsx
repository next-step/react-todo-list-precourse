import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/Button";
import { removeTodo } from "../hooks/useTodos";

interface TodoListItemRemoveButtonProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  index: number;
}

export const TodoListItemRemoveButton = ({
  todos,
  setTodos,
  index,
}: TodoListItemRemoveButtonProps) => {
  return (
    <Button
      variant="destructive"
      size="round"
      onClick={() => removeTodo(index, todos, setTodos)}
    >
      X
    </Button>
  );
};
