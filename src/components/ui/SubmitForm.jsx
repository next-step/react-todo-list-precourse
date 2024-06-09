import React, { useRef } from "react";
import styles from "./SubmitForm.module.css";

const SubmitForm = ({e, onSubmit, inputRef, lists, setLists}) => {

  return (
    <form className={styles.todoInputWrapper} onSubmit={onSubmit}>
      <div className={styles.todoInputItem}>
        <div className={styles.todoInputCheck}>
          <input
            className={styles.todoCheck}
            type="checkbox"
            id="check"
            value=""
          ></input>
          <label htmlFor="check" className={styles.checkboxLabel}></label>
        </div>
        <input
          ref={inputRef}
          type="text"
          className={styles.todoInput}
          placeholder="Create a new todo…"
        ></input>
      </div>
    </form>
  );
};

export default SubmitForm;
