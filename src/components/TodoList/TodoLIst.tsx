import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ul className={styles['todo-list']}>
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
