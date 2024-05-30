import {useState} from 'react';
import Todo from '../../models/Todo.ts';

type TodoRepository = {
  [id: number]: Todo;
};

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoRepository>({});
  return <></>;
};
export default TodoContainer;
