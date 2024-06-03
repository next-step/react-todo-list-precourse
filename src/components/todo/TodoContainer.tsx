import { useState } from 'react';

import styles from '../../css/todo.module.css';
import TodoInput from './TodoInput';
import TodoFilterEnum from '../../constants/TodoFilterEnum';
import TodoButtonBar from './TodoButtonBar';
import TodoBox from './TodoBox';
import { loadActiveCount, loadTodos } from '../../utils/Utils';
import { TodoRepository } from '../../utils/Types';
import {
  useCompleteRemove, useHandleCompletion,
  useSaveTodos,
  useTodoModification,
} from '../../hooks/useTodoHooks';

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoRepository>(loadTodos());
  const [activeCount, setActiveCount] = useState(loadActiveCount());
  const [filter, setFilter] = useState<TodoFilterEnum>(TodoFilterEnum.TODO_FILTER_ALL);

  useSaveTodos(todos, activeCount);
  const { addTodo, removeTodo } = useTodoModification({ todos, setTodos, activeCount, setActiveCount });
  const { removeCompleteTodos } = useCompleteRemove({ todos, setTodos, activeCount, setActiveCount });
  const { handleToggleCompletion } = useHandleCompletion({ activeCount, setActiveCount });

  return <div className={styles.container}>
    <TodoInput addTodo={addTodo} />
    <TodoBox todos={todos} removeTodo={removeTodo} handleToggleCompletion={handleToggleCompletion} filter={filter}/>
    <TodoButtonBar activeCount={activeCount} setFilter={setFilter} removeCompleteTodos={removeCompleteTodos} filter={filter} />
  </div>;
};
export default TodoContainer;
