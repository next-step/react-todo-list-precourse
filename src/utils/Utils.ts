import Todo from '../models/Todo.ts';
import TodoStorageKeys from '../constants/TodoStorageKeys';

type TodoRepository = {
  [id: number]: Todo;
};

const appendWrappedTodo = (repo: TodoRepository, unwrappedObject: object) => {
  const todo = Todo.fromUnwrappedObject(unwrappedObject);
  if(! todo) return;
  repo[todo.id] = todo;
};

export const loadTodos = () => {
  const ret: TodoRepository = {};
  const todosJsonString = sessionStorage.getItem(TodoStorageKeys.TODOS_JSON_KEY);
  if(! todosJsonString) return ret;

  const todosObject = JSON.parse(todosJsonString);
  Object.values<object>(todosObject).forEach(unwrappedTodo => appendWrappedTodo(ret, unwrappedTodo));
  return ret;
};

export const loadActiveCount = () => {
  const countString = sessionStorage.getItem(TodoStorageKeys.TODOS_ACTIVE_COUNT_KEY);
  if(! countString) return 0;
  return parseInt(countString);
}
