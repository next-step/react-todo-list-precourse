import {Dispatch, SetStateAction, useCallback, useEffect} from 'react';
import TodoStorageKeys from '../constants/TodoStorageKeys';
import { TodoRepository } from '../utils/Types';
import Todo from '../models/Todo';
import {pushIdIfComplete} from '../utils/Utils';

type TodoModificationHookProps = {
  todos: TodoRepository,
  setTodos: Dispatch<SetStateAction<TodoRepository>>,
  activeCount: number,
  setActiveCount: Dispatch<SetStateAction<number>>
};

const useSaveTodos = (todos: TodoRepository, activeCount: number) => {
  useEffect(() => {
    sessionStorage.setItem(TodoStorageKeys.TODOS_JSON_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    sessionStorage.setItem(TodoStorageKeys.TODOS_ACTIVE_COUNT_KEY, activeCount.toString());
  }, [activeCount]);
};

const useTodoModification = ({ todos, setTodos, activeCount, setActiveCount }: TodoModificationHookProps) => {
  const addTodo = useCallback((content: string) => {
    const todo = new Todo(content);
    setTodos({...todos, [todo.id]: todo});
    setActiveCount(activeCount + 1);
  }, [todos, activeCount]);
  const removeTodo = useCallback((id: number) => {
    const nextState = {...todos};
    const todo = todos[id];
    const activeCountDelta = todo.isCompleted ? 0 : -1;
    setActiveCount(activeCount + activeCountDelta);
    delete nextState[id];
    setTodos(nextState);
  }, [todos, activeCount]);
  return { addTodo, removeTodo };
};

const useCompleteRemove = ({ todos, setTodos, activeCount, setActiveCount }: TodoModificationHookProps) => {
  const getCompletedTodoIds = useCallback(() => {
    const ret: number[] = [];
    Object.values(todos).forEach((todo) => pushIdIfComplete(ret, todo));
    return ret;
  }, [todos]);
  const removeCompleteTodos = useCallback(() => {
    const todoIds = getCompletedTodoIds();
    const completeCount = todoIds.length;
    const nextState = {...todos};
    todoIds.map((todoId) => { delete nextState[todoId]; });
    setTodos(nextState);
    setActiveCount(activeCount - completeCount);
  }, [getCompletedTodoIds]);
  return { removeCompleteTodos };
};

const useHandleCompletion = ({ todos, setTodos, activeCount, setActiveCount }: TodoModificationHookProps) => {
  const handleToggleCompletion = useCallback((todo: Todo) => {
    const activeCountDelta = todo.isCompleted ? -1 : 1;
    setActiveCount(activeCount + activeCountDelta);
    setTodos({...todos});
  }, [activeCount]);
  return { handleToggleCompletion }
};

export { useSaveTodos, useTodoModification, useCompleteRemove, useHandleCompletion };
