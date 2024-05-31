import React, { useState } from "react";
import "./textbox.css";

function Textbox({ setTodos, todos }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {};
  const checkAll = () => {};

  return (
    <form className="textbox" onSubmit={handleSubmit}>
      <div className="select_all" onClick={checkAll}></div>
      <input
        type="text"
        value={text}
        className="input_box"
        placeholder="What needs to be done?"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="input_button" onClick={handleSubmit}></div>
    </form>
  );
}

export default Textbox;
