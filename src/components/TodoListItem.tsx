import { TodoListItemContent } from "./TodoListItemContent";
import { TodoListItemRemoveButton } from "./TodoListItemRemoveButton";

interface TodoListItemProps {
  todo: Todo;
  index: number;
}

export const TodoListItem = ({ todo, index }: TodoListItemProps) => {
  return (
    <div key={index} className="todo-item">
      <TodoListItemContent index={index} todo={todo} />
      <TodoListItemRemoveButton index={index} />
    </div>
  );
};
