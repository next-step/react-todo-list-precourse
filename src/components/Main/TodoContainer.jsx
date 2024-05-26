import "./styles/TodoContainer.css";
import { todoContext } from "../../page/TodoList";
import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

const TodoContainer = () => {
  const [selectTodo, setSelectTodo] = useState("all");
  const [todoItems, , , allTodoDone, , deleteDoneTodo] = useContext(todoContext);
  let renderTodo = todoItems;

  const viewTodo = (select) => {
    setSelectTodo(select);
  };

  switch (selectTodo) {
    case "all":
      renderTodo = todoItems;
      break;
    case "yet":
      renderTodo = todoItems.filter((todo) => todo.isDone === false);
      break;
    case "done":
      renderTodo = todoItems.filter((todo) => todo.isDone === true);
      break;
    default:
      renderTodo = [];
  }

  return (
    <div className="TodoContainer">
      {renderTodo?.map((todo) => {
        return <TodoItem key={todo.key} todo={todo} />;
      })}
      {todoItems.length > 0 ? (
        <TodoFooter
          todoItems={todoItems}
          allTodoDone={allTodoDone}
          deleteDoneTodo={deleteDoneTodo}
          viewTodo={viewTodo}
          selectTodo={selectTodo}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoContainer;
