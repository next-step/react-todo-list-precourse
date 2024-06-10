import * as TodoActions from '../context/actions';

import { TodoListItemTypes, FilterType } from '../types/todoTypes';

export const useTodoActions = (
  todoList: Array<TodoListItemTypes>,
  setTodoList: React.Dispatch<React.SetStateAction<Array<TodoListItemTypes>>>,
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>,
) => {
  const addTodo = (todo: string) => TodoActions.addTodo(todoList, setTodoList, todo);
  const removeTodo = (no: number) => TodoActions.removeTodo(todoList, setTodoList, no);
  const toggleDone = (no: number) => TodoActions.toggleDone(todoList, setTodoList, no);
  const clearCompleted = () => TodoActions.clearCompleted(todoList, setTodoList);
  const selectFilter = (filter: FilterType) => TodoActions.selectFilter(filter, setFilter);

  return {
    addTodo,
    removeTodo,
    toggleDone,
    clearCompleted,
    selectFilter,
  };
};
