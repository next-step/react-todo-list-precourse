import { useCallback, useRef, KeyboardEvent } from 'react';

import styles from '../../css/todo.module.css';

type TodoInputProps = {
  addTodo: (content: string) => void;
};
const TodoInput = ({ addTodo }: TodoInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = useCallback(() => {
    if(! inputRef.current || inputRef.current.value.length === 0) return;
    const content = inputRef.current.value;
    addTodo(content);
  }, [addTodo]);
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || ! inputRef.current || inputRef.current.value.length === 0) return;
    const content = inputRef.current.value;
    inputRef.current.value = '';
    addTodo(content);
  }, [addTodo]);
  return <div className={styles.inputContainer}>
    <input ref={inputRef} onKeyDown={onKeyDown} className={styles.todoInput} placeholder={'What needs to be done?'} />
    <button onClick={onButtonClick}>Add Todo</button>
  </div>
};
export default TodoInput;
