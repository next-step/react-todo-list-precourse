import styles from './TodoContent.module.css';

interface TodoContentProps {
  todo: string;
  done: boolean;
  onRemove: () => void;
}

const TodoContent = ({ todo, done, onRemove }: TodoContentProps) => {
  return (
    <div className={styles['todo-list-container']}>
      <input
        className={`${styles['todo-label']} ${done && styles['line-through']}`}
        type="text"
        value={todo}
        disabled
      />
      <button type="button" className={styles.destroy} onClick={onRemove}>
        x
      </button>
    </div>
  );
};

export default TodoContent;
