import { Dispatch, SetStateAction } from "react";

interface TodoListITemProps {
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
}: TodoListITemProps) => {
  const toggleTodo = (id: number) => {
    const newTodos = [...todos];
    newTodos[id].done = !newTodos[id].done;
    setTodos(newTodos);
  };

  const RemoveTodo = (id: number) => {
    const newTodos = todos.filter((_, index) => index !== id);
    setTodos(newTodos);
  };

  return (
    <div key={index} className="todo-item block">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(index)}
      />
      <label>{todo.text}</label>
      <button onClick={() => RemoveTodo(index)}>제거</button>
    </div>
  );
};
