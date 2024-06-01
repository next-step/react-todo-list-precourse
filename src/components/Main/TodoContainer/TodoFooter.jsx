import "./styles/TodoFooter.css";
import { useAllTodoDone } from "../../../hooks/useDoneTodos";
import { useAllTodoDelete } from "../../../hooks/useDeleteTodos";

const TodoFooter = ({ todoItems, setSelectTodo }) => {
  const allTodoDone = useAllTodoDone();
  const allTodoDelete = useAllTodoDelete();

  return (
    <div className="todoFooter">
      <p>남은 할 일 : {todoItems.length > 0 ? todoItems.filter((todo) => todo.done === false).length : 0}</p>
      <button onClick={() => allTodoDone()}>모두 완료</button>
      <button onClick={() => allTodoDelete()}>완료 목록 삭제</button>
      <button onClick={() => setSelectTodo("all")}> 전체보기</button>
      <button onClick={() => setSelectTodo("yet")}> 남은 할일</button>
      <button onClick={() => setSelectTodo("done")}> 완료된 할 일</button>
    </div>
  );
};

export default TodoFooter;
