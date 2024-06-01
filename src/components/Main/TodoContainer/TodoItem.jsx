import "./styles/TodoItem.css";
import { useDoneTodos } from "../../../hooks/useDoneTodos";

const TodoItem = ({ todo }) => {
  const doneTodos = useDoneTodos();

  return (
    <div className="todoItem">
      <input type="checkbox" onChange={() => doneTodos(todo.key)} />
      <p className={`${todo.done}`}>{todo.content}</p>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
