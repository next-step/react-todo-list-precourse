import "./styles/TodoFooter.css";
const TodoFooter = ({ todoItems }) => {
  return (
    <div className="TodoFooter">
      남은 할 일 : {todoItems?.filter((todo) => todo.isDone === false).length}
    </div>
  );
};

export default TodoFooter;
