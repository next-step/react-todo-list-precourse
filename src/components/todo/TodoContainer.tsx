import {useCallback, useState} from 'react';
import Todo from '../../models/Todo.ts';

type TodoRepository = {
  [id: number]: Todo;
};

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoRepository>({});
  const addTodo = useCallback((content: string) => {
    const todo = new Todo(content);
    setTodos({...todos, [todo.id]: todo});
  }, []);
  return <></>;
};
export default TodoContainer;
