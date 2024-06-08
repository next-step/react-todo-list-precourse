import { useState } from 'react';

export const useTodoInput = (addTodo: ((todo: string) => void) | undefined) => {
  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      if (todo === '' || !addTodo) return;
      addTodo(todo);
      setTodo('');
    }
  };

  return { todo, handleChange, handleKeyDown };
};
