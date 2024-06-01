import "./styles/TodoContainer.css";
import { TodoItem, TodoFooter } from "./TodoContainer/index";
import { TodoContext } from "../../contexts/TodoContext";
import { useContext } from "react";

const TodoContainer = () => {
  const { todoItems } = useContext(TodoContext);
  return (
    <div className="todoContainer">
      {todoItems.map((todo) => (
        <TodoItem key={todo.key} todo={todo} />
      ))}
      <TodoFooter todoItems={todoItems} />
    </div>
  );
};

export default TodoContainer;
