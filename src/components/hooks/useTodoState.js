import { useState } from "react";
import handleChange from "../handlers/handleChange";

const useTodoState = () => {
  const [text, setText] = useState("");

  const onChangeInput = (e) => handleChange(e, setText);

  return {
    text, onChangeInput, setText
  };
};

export default useTodoState;
