import "./styles/TodoFooter.css";
const TodoFooter = ({ todoItems, allTodoDone, deleteDoneTodo }) => {
  const allClear = () => {
    allTodoDone();
  };
  return (
    <div className="TodoFooter">
      <p>남은 할 일 : {todoItems?.filter((todo) => todo.isDone === false).length}</p>
      <button className="allClear" onClick={allClear}>
        전체 완료
      </button>
      <button className="doneTodoClear" onClick={deleteDoneTodo}>
        완료 목록 삭제
      </button>
    </div>
  );
};

export default TodoFooter;
