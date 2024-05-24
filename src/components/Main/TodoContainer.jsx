import "./styles/TodoContainer.css";
import { todoContext } from "../../page/TodoList";
import { useContext } from "react";

import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [todoItems, ,] = useContext(todoContext);

  return (
    <div className="TodoContainer">
      {todoItems?.map((todo) => {
        return <TodoItem key={todo.key} todo={todo} />;
      })}
    </div>
  );
};

export default TodoContainer;
