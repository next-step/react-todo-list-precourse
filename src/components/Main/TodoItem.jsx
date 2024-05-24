import "./styles/TodoItem.css";
import { todoContext } from "../../page/TodoList";
import { useContext } from "react";

const TodoItem = (todo) => {
  const [, , isTodoDone] = useContext(todoContext);
  const { key, content, isDone } = todo.todo;

  return (
    <div className="TodoItem" key={key}>
      <input
        type="checkbox"
        onChange={() => isTodoDone(key)}
        checked={isDone}
      />
      <p className={`${isDone}`}>{content}</p>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
