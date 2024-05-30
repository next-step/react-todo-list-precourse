import {useCallback, useState} from 'react';
import Todo from '../../models/Todo';

import styles from '../../css/todo.module.css';
import TodoInput from './TodoInput';
import TodoFilterEnum from '../../constants/TodoFilterEnum';
import TodoButtonBar from './TodoButtonBar.tsx';

type TodoRepository = {
  [id: number]: Todo;
};

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoRepository>({});
  const [activeCount, setActiveCount] = useState(0);
  const [filter, setFilter] = useState<TodoFilterEnum>(TodoFilterEnum.TODO_FILTER_ALL);

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

  const pushIdIfComplete = ((ids: number[], todo: Todo) => {
    if(todo.isCompleted) ids.push(todo.id);
  });

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

  const handleToggleCompletion = useCallback((todo: Todo) => {
    const activeCountDelta = todo.isCompleted ? -1 : 1;
    setActiveCount(activeCount + activeCountDelta);
  }, [activeCount]);

  return <div className={styles.container}>
    <TodoInput addTodo={addTodo} />
    <TodoButtonBar activeCount={activeCount} setFilter={setFilter} removeCompleteTodos={removeCompleteTodos} filter={filter} />
  </div>;
};
export default TodoContainer;
