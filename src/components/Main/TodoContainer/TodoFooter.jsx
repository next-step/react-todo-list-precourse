import "./styles/TodoFooter.css";

const TodoFooter = ({ todoItems }) => {
  return (
    <div className="todoFooter">
      <p>남은 할 일 : {todoItems.length > 0 ? todoItems.filter((todo) => todo.done === false).length : 0}</p>
    </div>
  );
};

export default TodoFooter;
