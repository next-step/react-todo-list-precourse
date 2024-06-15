import Todo from "../types/Todo";
import StatusCircle from "./StatusCircle";

type TodoItemProps = {
  todo: Todo;
  onCheck: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
};

function TodoItem({ todo, onCheck, onDelete }: TodoItemProps) {
  return (
    <div className="todoitem">
      <p>{todo.title}</p>
      <StatusCircle status={todo.status} onClick={() => onCheck(todo)} />
      <button aria-label="delete" className="todoitem--delete" type="button" onClick={() => onDelete(todo)} />
    </div>
  );
}

export default TodoItem;
