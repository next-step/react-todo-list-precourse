import { TodoCheckbox } from "./TodoCheckbox";
import { TodoLabel } from "./TodoLabel";

interface TodoListItemContentProps {
  todo: Todo;
  index: number;
}

export const TodoListItemContent = ({
  todo,
  index,
}: TodoListItemContentProps) => {
  return (
    <div className="todo-content">
      <TodoCheckbox todo={todo} index={index} />
      <TodoLabel todo={todo} index={index} />
    </div>
  );
};
