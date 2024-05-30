import {useCallback, useState} from 'react';
import Todo from '../../models/Todo.ts';

import styles from '../../css/todo.module.css';
import TodoInput from './TodoInput.tsx';
import TodoFilterEnum from '../../constants/TodoFilterEnum.ts';

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

  const removeIfCompleted = useCallback((todo: Todo) => {
    if(todo.isCompleted) removeTodo(todo.id);
  }, [todos, removeTodo]);

  const removeCompleteTodos = useCallback(() => {
    Object.values(todos).forEach(removeIfCompleted);
  }, [todos, removeIfCompleted]);

  const handleToggleCompletion = useCallback((todo: Todo) => {
    const activeCountDelta = todo.isCompleted ? -1 : 1;
    setActiveCount(activeCount + activeCountDelta);
  }, [activeCount]);

  return <div className={styles.container}>
    <TodoInput addTodo={addTodo} />
  </div>;
};
export default TodoContainer;
