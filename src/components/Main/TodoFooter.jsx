import "./styles/TodoFooter.css";
const TodoFooter = ({ todoItems, allTodoDone, deleteDoneTodo, viewTodo }) => {
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
      <button className="allTodos" onClick={() => viewTodo("all")}>
        전체보기
      </button>
      <button className="" onClick={() => viewTodo("yet")}>
        {" "}
        남은 할 일
      </button>
      <button className="" onClick={() => viewTodo("done")}>
        완료된 할 일
      </button>
    </div>
  );
};

export default TodoFooter;
