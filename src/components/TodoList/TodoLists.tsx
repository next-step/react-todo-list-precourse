import { Todo } from "../../Model/Todo";
import "./TodoLists.css";

interface TodoListProps {
  todos: Todo[];
  setIsCompleted: (index: number) => void;
}

const TodoLists = ({ todos, setIsCompleted }: TodoListProps) => {
  return (
    <ul id="TodoLists">
      {todos.map(({ isCompleted, text, id }, i) => (
        <li key={`${i}-${text}-${isCompleted}`}>
          <button onClick={() => setIsCompleted(id)}>
            <input type="checkbox" checked={isCompleted} />
            <span>{text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
