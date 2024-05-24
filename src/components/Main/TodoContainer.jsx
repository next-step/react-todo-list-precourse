import "./styles/TodoContainer.css";
import { todoContext } from "../../page/TodoList";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

const TodoContainer = () => {
  const [todoItems, ,] = useContext(todoContext);

  return (
    <div className="TodoContainer">
      {todoItems?.map((todo) => {
        return <TodoItem key={todo.key} todo={todo} />;
      })}
      <TodoFooter todoItems={todoItems} />
    </div>
  );
};

export default TodoContainer;
