import React, { useState } from "react";
import "./textbox.css";
import TextboxCheck from "./textboxCheck";
import TextboxAdd from "./textboxAdd";
import TextboxInput from "./textboxInput";

const textbox = ({ setTodos, todos }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text != "") {
      setTodos((prevTodos) => [...prevTodos, { text: text, checked: false }]);
      setText("");
    }
  };
  return (
    <form className="textbox" onSubmit={handleSubmit}>
      <TextboxCheck todos={todos} setTodos={setTodos} />
      <TextboxInput text={text} setText={setText} />
      <TextboxAdd
        setTodos={setTodos}
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
      />
    </form>
  );
};

export default textbox;
