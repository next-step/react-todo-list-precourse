import { Dispatch, SetStateAction } from "react";
import { TodoListItemContent } from "./TodoListItemContent";
import { TodoListItemRemoveButton } from "./TodoListItemRemoveButton";

interface TodoListItemProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  todo: Todo;
  index: number;
}

export const TodoListItem = ({
  todos,
  setTodos,
  todo,
  index,
}: TodoListItemProps) => {
  return (
    <div key={index} className="todo-item">
      <TodoListItemContent
        todos={todos}
        setTodos={setTodos}
        index={index}
        todo={todo}
      />
      <TodoListItemRemoveButton
        todos={todos}
        setTodos={setTodos}
        index={index}
      />
    </div>
  );
};
