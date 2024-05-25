import "./styles/TodoContainer.css";
import { todoContext } from "../../page/TodoList";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

const TodoContainer = () => {
  const [todoItems, , , allTodoDone, , deleteDoneTodo] = useContext(todoContext);

  return (
    <div className="TodoContainer">
      {todoItems?.map((todo) => {
        return <TodoItem key={todo.key} todo={todo} />;
      })}
      {todoItems.length > 0 ? (
        <TodoFooter todoItems={todoItems} allTodoDone={allTodoDone} deleteDoneTodo={deleteDoneTodo} />
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoContainer;
