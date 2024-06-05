import { createContext, useState } from 'react';
import { ReactNode } from 'react';
import { addTodo as addTodoAction } from './actions/addTodo';

export interface TodoListItemTypes {
  no: number;
  todo: string;
  done: boolean;
}

export interface TodoListContextValueTypes {
  state: { todoList: Array<TodoListItemTypes> };
  actions: {
    addTodo: (todo: string) => void;
  };
}

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoListContextValueTypes | null>(null);

export const TodoProvider = ({ children }: TodoContextProviderProps) => {
  const [todoList, setTodoList] = useState<Array<TodoListItemTypes>>([]);

  const addTodo = (todo: string) => addTodoAction(todoList, setTodoList, todo);

  const values = {
    state: { todoList },
    actions: { addTodo },
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
