import { Todo } from "../../Model/Todo";
import TodoListItem from "../TodoListItem/TodoListItem";

interface TodoListProps {
  todos: Todo[];
  setIsCompleted: (index: number) => void;
  deleteTodoFromId: (index: number) => void;
}

const TodoLists = ({
  todos,
  setIsCompleted,
  deleteTodoFromId,
}: TodoListProps) => {
  return (
    <ul id="TodoLists">
      {todos.map(({ isCompleted, text, id }, i) => (
        <TodoListItem
          key={`${i}-${text}-${isCompleted}`}
          id={id}
          text={text}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
          deleteTodoFromId={deleteTodoFromId}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
