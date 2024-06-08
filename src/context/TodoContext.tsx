import { createContext } from 'react';
import { ReactNode } from 'react';
import { TodoListContextValueTypes } from './types/TodoTypes';
import { useTodoState } from '../hooks/useTodoState';
import { useTodoActions } from '../hooks/useTodoActions';

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoListContextValueTypes | null>(null);

export const TodoProvider = ({ children }: TodoContextProviderProps) => {
  const { todoList, setTodoList, filter, setFilter } = useTodoState();
  const actions = useTodoActions(todoList, setTodoList, setFilter);

  const values = {
    state: { todoList, filter },
    actions,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
