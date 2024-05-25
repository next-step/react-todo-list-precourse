import "./styles/TodoItem.css";
import { todoContext } from "../../page/TodoList";
import { useContext } from "react";

const TodoItem = (todo) => {
  const [, , isTodoDone, , deleteTodo] = useContext(todoContext);
  const { key, content, isDone } = todo.todo;

  return (
    <div className="TodoItem" key={key}>
      <input type="checkbox" onChange={() => isTodoDone(key)} checked={isDone} />
      <p className={`${isDone}`}>{content}</p>
      <button className={`${isDone}`} onClick={() => deleteTodo(key)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
