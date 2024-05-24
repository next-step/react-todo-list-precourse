import "./styles/TodoFooter.css";
const TodoFooter = ({ todoItems, allTodoDone }) => {
  const allClear = () => {
    allTodoDone();
  };
  return (
    <div className="TodoFooter">
      <p>
        남은 할 일 : {todoItems?.filter((todo) => todo.isDone === false).length}
      </p>
      <button className="allClear" onClick={allClear}>
        전체 완료
      </button>
    </div>
  );
};

export default TodoFooter;
