import "./styles/TodoContainer.css";
import { TodoItem, TodoFooter } from "./TodoContainer/index";
import { useFilterTodos } from "../../hooks/useFilterTodos";
import { useState } from "react";

const TodoContainer = () => {
  const [selectTodo, setSelectTodo] = useState("all");
  const { renderTodo, todoItems } = useFilterTodos(selectTodo);
  return (
    <div className="todoContainer">
      {todoItems.length > 0 ? renderTodo.map((todo) => <TodoItem key={todo.key} todo={todo} />) : ""}
      {todoItems.length > 0 ? (
        <TodoFooter todoItems={todoItems} selectTodo={selectTodo} setSelectTodo={setSelectTodo} />
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoContainer;
