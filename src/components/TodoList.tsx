import { useState } from "react";
import Todo from "../types/Todo";
import TodoListTitleContent from "./TodoList/TodoListTitleContent";
import TodoListInputContent from "./TodoList/TodoListInputContent";
import TodoListItemContent from "./TodoList/TodoListItemContent";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="todolist">
      <TodoListTitleContent />
      <TodoListInputContent setTodos={setTodos} />
      <TodoListItemContent todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoList;
