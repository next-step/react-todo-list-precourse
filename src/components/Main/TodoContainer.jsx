import "./styles/TodoContainer.css";
import TodoItem from "./TodoContainer/TodoItem";
import { TodoContext } from "../../contexts/TodoContext";
import { useContext } from "react";

const TodoContainer = () => {
  const { todoItems } = useContext(TodoContext);
  console.log(todoItems);
  return (
    <div className="todoContainer">
      {todoItems.map((todo) => (
        <TodoItem key={todo.key} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
