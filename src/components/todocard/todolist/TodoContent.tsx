import { TodoCheckbox } from "./TodoCheckbox";
import { TodoLabel } from "./TodoLabel";

interface TodoContentProps {
  todo: Todo;
  index: number;
}

export const TodoContent = ({ todo, index }: TodoContentProps) => {
  return (
    <div className="todo-content">
      <TodoCheckbox todo={todo} index={index} />
      <TodoLabel todo={todo} index={index} />
    </div>
  );
};
