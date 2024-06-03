import { useCallback, useRef } from 'react';
import { KeyboardEvent } from 'react';

const useAddTodoInput = (addTodo: (content: string) => void) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = useCallback(() => {
    if (!inputRef.current || inputRef.current.value.length === 0) return;
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
  }, [addTodo]);
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !inputRef.current || inputRef.current.value.length === 0) return;
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
  }, [addTodo]);
  return { inputRef, onButtonClick, onKeyDown }
};
export default useAddTodoInput;
