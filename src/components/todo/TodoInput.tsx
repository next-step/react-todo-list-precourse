import {useCallback, useRef} from 'react';

import styles from '../../css/todo.module.css';

type TodoInputProps = {
  addTodo: (content: string) => void;
};
const TodoInput = ({ addTodo }: TodoInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || ! inputRef.current) return;
    const content = inputRef.current.value;
    inputRef.current.value = '';
    addTodo(content);
  }, [addTodo]);
  return <div className={styles.inputContainer}>
    <input ref={inputRef} onKeyDown={onKeyDown} className={styles.todoInput} placeholder={'What needs to be done?'} />
  </div>
};
export default TodoInput;
