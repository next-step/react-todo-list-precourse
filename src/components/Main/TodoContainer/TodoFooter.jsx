import "./styles/TodoFooter.css";
import { useAllTodoDone } from "../../../hooks/useDoneTodos";

const TodoFooter = ({ todoItems }) => {
  const allTodoDone = useAllTodoDone();

  return (
    <div className="todoFooter">
      <p>남은 할 일 : {todoItems.length > 0 ? todoItems.filter((todo) => todo.done === false).length : 0}</p>
      <button onClick={() => allTodoDone()}>모두 완료</button>
    </div>
  );
};

export default TodoFooter;
