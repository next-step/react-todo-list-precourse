import React from "react";
import "../styles/TodoItem.css";
import doneImage from "../images/done.png";
import deleteImage from "../images/delete.png";
import { useTodoDispatch } from "../TodoContext";

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <div className="todo-item-block">
      <div className={`check-circle`} onClick={onToggle}>
        {done && <img src={doneImage} alt="done" />}
      </div>
      <div className={`text ${done ? "done" : ""}`}>{text}</div>
      <div className="remove" onClick={onRemove}>
        <img src={deleteImage} alt="Delete" />
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
// 다른 항목 업데이트 -> 불필요한 리렌더링 방지로 성능 최적화
