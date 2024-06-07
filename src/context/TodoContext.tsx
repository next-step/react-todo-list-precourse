import { createContext, useState } from 'react';
import { ReactNode } from 'react';
import { addTodo as addTodoAction } from './actions/addTodo';
import { removeTodo as removeTodoAction } from './actions/removeTodo';
import { toggleDone as toggleTodoAction } from './actions/toggleDone';
import { clearCompleted as clearCompletedAction } from './actions/clearCompleted';
import { selectFilter as selectFilterAction } from './actions/selectFilter';

export type FilterType = 'all' | 'active' | 'completed';

export interface TodoListItemTypes {
  no: number;
  todo: string;
  done: boolean;
}

export interface TodoListContextValueTypes {
  state: { todoList: Array<TodoListItemTypes>; filter: FilterType };
  actions: {
    addTodo: (todo: string) => void;
    removeTodo: (no: number) => void;
    toggleDone: (no: number) => void;
    clearCompleted: () => void;
    selectFilter: (filter: FilterType) => void;
  };
}

interface TodoContextProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoListContextValueTypes | null>(null);

export const TodoProvider = ({ children }: TodoContextProviderProps) => {
  const [todoList, setTodoList] = useState<Array<TodoListItemTypes>>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (todo: string) => addTodoAction(todoList, setTodoList, todo);
  const removeTodo = (no: number) => removeTodoAction(todoList, setTodoList, no);
  const toggleDone = (no: number) => toggleTodoAction(todoList, setTodoList, no);
  const clearCompleted = () => clearCompletedAction(todoList, setTodoList);
  const selectFilter = (filter: FilterType) => selectFilterAction(filter, setFilter);

  const values = {
    state: { todoList, filter },
    actions: { addTodo, removeTodo, toggleDone, clearCompleted, selectFilter },
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
