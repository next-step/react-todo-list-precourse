import Todo from '../models/Todo.ts';

type TodoRepository = {
  [id: number]: Todo;
};

const appendWrappedTodo = (repo: TodoRepository, unwrappedObject: object) => {
  const todo = Todo.fromUnwrappedObject(unwrappedObject);
  console.log(unwrappedObject)
  if(! todo) return;
  repo[todo.id] = todo;
};

export const loadTodos = () => {
  const ret: TodoRepository = {};
  const todosJsonString = sessionStorage.getItem(Todo.TODOS_JSON_KEY);
  if(! todosJsonString) return ret;

  const todosObject = JSON.parse(todosJsonString);
  Object.values<object>(todosObject).forEach(unwrappedTodo => appendWrappedTodo(ret, unwrappedTodo));
  return ret;
};
