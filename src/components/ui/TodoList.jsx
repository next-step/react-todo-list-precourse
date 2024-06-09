import React from "react";
import styles from "./TodoList.module.css";
import HandleDeleteItem from "../handlers/HandleDeleteItem";
import HandleToggleComplete from "../handlers/HandleToggleComplete";

const TodoList = ({ lists, HandleToggleComplete, HandleDeleteItem}) => {
  return (
    <ul className={styles.todoList}>
      {lists.map((item, index) => (
        <li key={item.id} className={styles.todoItem}>
          <input
            className={styles.todoCheck}
            type="checkbox"
            id={`check${index + 1}`}
            value=""
          ></input>
          <label
            htmlFor={`check${index + 1}`}
            onClick={() => HandleToggleComplete(item.id)}
            className={styles.checkboxLabel}
          ></label>
          <p className={item.completed ? "completed" : ""}>{item.text}</p>
          <span onClick={() => HandleDeleteItem(item.id)} className={styles.materialIcons}>
            close
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
