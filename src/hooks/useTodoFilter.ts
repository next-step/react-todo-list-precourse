import { useCallback } from 'react';
import { TodoRepository } from '../utils/Types';

const useTodoFilter = (todos: TodoRepository) => {
  const getAllTodos = useCallback(() => {
    return Object.values(todos);
  }, [todos]);
  const getCompletedTodos = useCallback(() => {
    return Object.values(todos).filter((todo) => todo.isCompleted);
  }, [todos]);
  const getActiveTodos = useCallback(() => {
    return Object.values(todos).filter((todo) => ! todo.isCompleted);
  }, [todos]);
  return { getAllTodos, getCompletedTodos, getActiveTodos }
};
export default useTodoFilter;
