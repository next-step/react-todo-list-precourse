import "./styles/TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="todoItem">
      <input type="checkbox" />
      <p className={`${todo.done}`}>{todo.content}</p>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
