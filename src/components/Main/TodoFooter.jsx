import "./styles/TodoFooter.css";
const TodoFooter = ({ todoItems, allTodoDone, deleteDoneTodo, viewTodo, selectTodo }) => {
  const allClear = () => {
    allTodoDone();
  };
  return (
    <div className="TodoFooter">
      <div className="TodoFooter__side1">
        <button className={`all-button ${selectTodo === "all" ? "active" : ""}`} onClick={() => viewTodo("all")}>
          전체보기
        </button>
        <button className={`yet-button ${selectTodo === "yet" ? "active" : ""}`} onClick={() => viewTodo("yet")}>
          남은 할 일
        </button>
        <button className={`done-button ${selectTodo === "done" ? "active" : ""}`} onClick={() => viewTodo("done")}>
          완료된 할 일
        </button>
      </div>
      <div className="TodoFooter__side2">
        <p> 남은 할 일: {todoItems?.filter((todo) => todo.isDone === false).length}개</p>
        <div>
          <button className="allClear" onClick={allClear}>
            전체 완료
          </button>
          <button className="doneTodoClear" onClick={deleteDoneTodo}>
            완료 목록 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;
