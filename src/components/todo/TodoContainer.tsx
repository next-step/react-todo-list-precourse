import {useCallback, useState} from 'react';
import Todo from '../../models/Todo.ts';

type TodoRepository = {
  [id: number]: Todo;
};

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoRepository>({});
  const [activeCount, setActiveCount] = useState(0);

  const addTodo = useCallback((content: string) => {
    const todo = new Todo(content);
    setTodos({...todos, [todo.id]: todo});
    setActiveCount(activeCount + 1);
  }, []);

  const removeTodo = useCallback((id: number) => {
    const nextState = {...todos};
    const todo = todos[id];
    const activeCountDelta = todo.isCompleted ? 0 : -1;
    setActiveCount(activeCount + activeCountDelta);
    delete todos[id];
    setTodos(nextState);
  }, []);

  const removeIfCompleted = useCallback((todo: Todo) => {
    if(todo.isCompleted) removeTodo(todo.id);
  }, []);

  const removeCompleteTodos = useCallback(() => {
    Object.values(todos).forEach(removeIfCompleted);
  }, []);

  return <></>;
};
export default TodoContainer;
