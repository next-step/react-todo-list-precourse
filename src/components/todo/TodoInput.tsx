import {useCallback, useRef} from 'react';

type TodoInputProps = {
  addTodo: (content: string) => void;
};
const TodoInput = ({ addTodo }: TodoInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || ! inputRef.current) return;
    const content = inputRef.current.value;
    addTodo(content);
  }, [addTodo]);
  return <div>
    <input ref={inputRef} onKeyDown={onKeyDown} />
  </div>
};
