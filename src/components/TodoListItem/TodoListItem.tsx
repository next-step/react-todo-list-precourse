import { useState } from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  id: number;
  text: string;
  isCompleted: boolean;
  setIsCompleted: (id: number) => void;
  deleteTodoFromId: (id: number) => void;
}

const TodoListItem = ({
  id,
  text,
  isCompleted,
  setIsCompleted,
  deleteTodoFromId,
}: TodoListItemProps) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleIsCompleted = (id: number) => {
    setIsCompleted(id);
  };

  return (
    <li
      id="TodoListItem"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <button
        id="TodoListItem-content"
        className={(isCompleted && "completed") || ""}
        onClick={() => handleIsCompleted(id)}
      >
        <input type="checkbox" checked={isCompleted} />
        <span>{text}</span>
      </button>
      {isMouseEnter && (
        <button id="TodoListItem-delete" onClick={() => deleteTodoFromId(id)}>
          x
        </button>
      )}
    </li>
  );
};

export default TodoListItem;
