import styles from '../../css/todo.module.css';
import useAddTodoInput from '../../hooks/useAddTodoInput';

type TodoInputProps = {
  addTodo: (content: string) => void;
};
const TodoInput = ({ addTodo }: TodoInputProps) => {
  const { inputRef, onButtonClick, onKeyDown } = useAddTodoInput(addTodo);
  return <div className={styles.inputContainer}>
    <input ref={inputRef} onKeyDown={onKeyDown} className={styles.todoInput} placeholder={'What needs to be done?'} />
    <button onClick={onButtonClick} className={styles.todoAddButton}>Add Todo</button>
  </div>
};
export default TodoInput;
