import { TodoContent } from "./TodoContent";
import { TodoRemoveButton } from "./TodoRemoveButton";

interface TodoItemProps {
  todo: Todo;
  index: number;
}

export const TodoItem = ({ todo, index }: TodoItemProps) => {
  return (
    <div key={index} className="todo-item">
      <TodoContent index={index} todo={todo} />
      <TodoRemoveButton index={index} />
    </div>
  );
};
