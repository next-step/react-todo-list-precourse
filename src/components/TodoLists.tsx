import { Todo } from "../Modules/Todo";

interface TodoListProps {
  todos: Todo[];
}

const TodoLists = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          <input type="checkbox" checked={todo.status === "completed"} />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
