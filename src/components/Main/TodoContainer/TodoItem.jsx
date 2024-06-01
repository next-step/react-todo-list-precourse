import "./styles/TodoItem.css";
import { useDoneTodos } from "../../../hooks/useDoneTodos";
import { useDeleteTodos } from "../../../hooks/useDeleteTodos";

const TodoItem = ({ todo }) => {
  const doneTodos = useDoneTodos();
  const deleteTodo = useDeleteTodos();

  return (
    <div className="todoItem">
      <input type="checkbox" checked={todo.done} onChange={() => doneTodos(todo.key)} />
      <p className={`${todo.done}`}>{todo.content}</p>
      <button className={`${todo.done}`} onClick={() => deleteTodo(todo.key)}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
