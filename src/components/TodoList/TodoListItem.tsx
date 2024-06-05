import styles from './TodoList.module.css';

const TodoListItem = () => {
  return (
    <li className={styles['todo-list-item']}>
      <input type="checkbox" className={styles.toggle} id="checkbox" />
      <label htmlFor="checkbox"></label>
      <div className={styles['todo-list-container']}>
        <span className={styles['todo-label']}>Todo</span>
        <button type="button" className={styles.destroy}>
          x
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
