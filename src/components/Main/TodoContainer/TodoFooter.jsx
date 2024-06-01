import "./styles/TodoFooter.css";
import { useAllTodoDone } from "../../../hooks/useDoneTodos";
import { useAllTodoDelete } from "../../../hooks/useDeleteTodos";

const TodoFooter = ({ todoItems, setSelectTodo, selectTodo }) => {
  const allTodoDone = useAllTodoDone();
  const allTodoDelete = useAllTodoDelete();

  return (
    <div className="todoFooter">
      <div className="todoFooterSide1">
        <button className={`allBtn ${selectTodo === "all" ? "active" : ""}`} onClick={() => setSelectTodo("all")}>
          전체보기
        </button>
        <button className={`yetBtn ${selectTodo === "yet" ? "active" : ""}`} onClick={() => setSelectTodo("yet")}>
          남은 할일
        </button>
        <button className={`doneBtn ${selectTodo === "done" ? "active" : ""}`} onClick={() => setSelectTodo("done")}>
          완료된 할일
        </button>
      </div>
      <div className="todoFooterSide2">
        <p>남은 할일 : {todoItems.length > 0 ? todoItems.filter((todo) => todo.done === false).length : 0}</p>
        <div>
          <button onClick={() => allTodoDone()}>모두 완료</button>
          <button onClick={() => allTodoDelete()}>완료 목록 삭제</button>
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;
