import { TodoListItemContent } from "./TodoListItemContent";
import { TodoRemoveButton } from "./TodoRemoveButton";

interface TodoListItemProps {
  todo: Todo;
  index: number;
}

export const TodoListItem = ({ todo, index }: TodoListItemProps) => {
  return (
    <div key={index} className="todo-item">
      <TodoListItemContent index={index} todo={todo} />
      <TodoRemoveButton index={index} />
    </div>
  );
};
