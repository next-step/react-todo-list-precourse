import { Todo } from "../../Modules/Todo";
import "./TodoLists.css";

interface TodoListProps {
  todos: Todo[];
}

const TodoLists = ({ todos }: TodoListProps) => {
  return (
    <ul id="TodoLists">
      {todos.map(({ status, text }, i) => (
        <li key={`${i}-${text}-${status}`}>
          <input type="checkbox" checked={status === "completed"} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
