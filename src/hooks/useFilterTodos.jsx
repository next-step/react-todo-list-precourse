import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const useFilterTodos = (select) => {
  const { todoItems } = useContext(TodoContext);
  let renderTodo = todoItems;
  switch (select) {
    case "all":
      renderTodo = todoItems;
      break;
    case "yet":
      renderTodo = todoItems.filter((todo) => todo.done === false);
      break;
    case "done":
      renderTodo = todoItems.filter((todo) => todo.done === true);
      break;
    default:
      renderTodo = [];
  }

  return { renderTodo, todoItems };
};

export { useFilterTodos };
