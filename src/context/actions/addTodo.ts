import { TodoListItemTypes } from '../../types/todoTypes';

export const addTodo = (
  todoList: TodoListItemTypes[],
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItemTypes[]>>,
  todo: string,
) => {
  const newTodo = { no: Date.now(), todo, done: false };
  setTodoList([...todoList, newTodo]);
};
