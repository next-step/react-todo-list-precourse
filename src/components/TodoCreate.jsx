import React, { useState } from "react";
import "../styles/TodoCreate.css";
import addImage from "../images/add.png";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <div className="InsertFormPositioner">
          <div className="InsertForm" onSubmit={onSubmit}>
            <input
              className="Input"
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
      )}
      <button
        className={`circleButton ${open ? "open" : ""}`}
        onClick={onToggle}
        open={open}
      >
        <img src={addImage} alt="Add" style={{ width: "80%", height: "80%" }} />
      </button>
    </>
  );
}

export default TodoCreate;
