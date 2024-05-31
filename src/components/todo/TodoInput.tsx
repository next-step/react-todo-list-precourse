import styles from '../../css/todo.module.css';
import useAddTodo from '../../hooks/useAddTodo.ts';

type TodoInputProps = {
  addTodo: (content: string) => void;
};
const TodoInput = ({ addTodo }: TodoInputProps) => {
  const { inputRef, onButtonClick, onKeyDown } = useAddTodo(addTodo);
  return <div className={styles.inputContainer}>
    <input ref={inputRef} onKeyDown={onKeyDown} className={styles.todoInput} placeholder={'What needs to be done?'} />
    <button onClick={onButtonClick} className={styles.todoAddButton}>Add Todo</button>
  </div>
};
export default TodoInput;
