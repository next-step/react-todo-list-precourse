import "./styles/TodoContainer.css";
import { TodoItem, TodoFooter } from "./TodoContainer/index";
import { useFilterTodos } from "../../hooks/useFilterTodos";
import { useState } from "react";

const TodoContainer = () => {
  const [selectTodo, setSelectTodo] = useState("all");
  const { renderTodo, length } = useFilterTodos(selectTodo);
  return (
    <div className="todoContainer">
      {length > 0 ? renderTodo.map((todo) => <TodoItem key={todo.key} todo={todo} />) : ""}
      {length > 0 ? <TodoFooter todoItems={renderTodo} setSelectTodo={setSelectTodo} /> : ""}
    </div>
  );
};

export default TodoContainer;
