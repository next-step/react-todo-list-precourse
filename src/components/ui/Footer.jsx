import React from "react";
import styles from './Footer.module.css';

const Footer = ({lists, ShowCompletedToggle, ClearCompleted}) => {
  return (
    <li className={styles.footer}>
      <div className={styles.count}>
        <p className={styles.countItem}>{lists.length}</p>
        <p>items left</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => ShowCompletedToggle("all")}>All</button>
        <button onClick={() => ShowCompletedToggle("active")}>Active</button>
        <button onClick={() => ShowCompletedToggle("completed")}>
          Completed
        </button>
      </div>
      <div className={styles.clear}>
        <button onClick={ClearCompleted}>Clear Completed</button>
      </div>
    </li>
  );
};

export default Footer;
