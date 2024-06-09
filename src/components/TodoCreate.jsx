import React, { useState } from "react";
import "../styles/TodoCreate.css";
import addImage from "../images/add.png";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <div className="InsertFormPositioner">
          <div className="InsertForm">
            <input
              className="Input"
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
            />
          </div>
        </div>
      )}
      <button
        className={`circleButton ${open ? "open" : ""}`}
        onClick={onToggle}
      >
        <img src={addImage} alt="Add" style={{ width: "80%", height: "80%" }} />
      </button>
    </>
  );
}

export default TodoCreate;
