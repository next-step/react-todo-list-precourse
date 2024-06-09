import React, { useRef } from "react";
// import HandleSubmit from "../feat/HandleSubmit";

const SubmitForm = ({e, onSubmit, inputRef, lists, setLists}) => {

  return (
    <form className="todo-input-wrapper" onSubmit={onSubmit}>
      <div className="todo-input-item">
        <div className="todo-input-check">
          <input
            className="todo-check"
            type="checkbox"
            id="check"
            value=""
          ></input>
          <label htmlFor="check" className="checkbox-label"></label>
        </div>
        <input
          ref={inputRef}
          type="text"
          className="todo-input"
          placeholder="Create a new todo…"
        ></input>
      </div>
    </form>
  );
};

export default SubmitForm;
