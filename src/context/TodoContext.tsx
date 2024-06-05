import { createContext, useState } from 'react';
import { ReactNode } from 'react';
import { addTodo as addTodoAction } from './actions/addTodo';
import { removeTodo as removeTodoAction } from './actions/removeTodo';

export interface TodoListItemTypes {
  no: number;
  todo: string;
  done: boolean;
}

export interface TodoListContextValueTypes {
  state: { todoList: Array<TodoListItemTypes> };
  actions: {
    addTodo: (todo: string) => void;
    removeTodo: (no: number) => void;
  };
}

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoListContextValueTypes | null>(null);

export const TodoProvider = ({ children }: TodoContextProviderProps) => {
  const [todoList, setTodoList] = useState<Array<TodoListItemTypes>>([]);

  const addTodo = (todo: string) => addTodoAction(todoList, setTodoList, todo);
  const removeTodo = (no: number) => removeTodoAction(todoList, setTodoList, no);

  const values = {
    state: { todoList },
    actions: { addTodo, removeTodo },
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
