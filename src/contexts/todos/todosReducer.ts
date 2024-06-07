const addTodo = (todos: Todo[], text: string) => {
  return [...todos, { text, done: false }];
};

const toggleTodo = (todos: Todo[], id: number) => {
  return todos.map((todo, index) =>
    index === id ? { ...todo, done: !todo.done } : todo,
  );
};

const removeTodo = (todos: Todo[], id: number) => {
  return todos.filter((_, index) => index !== id);
};

const removeDoneTodos = (todos: Todo[]) => {
  return todos.filter((todo) => !todo.done);
};

export const todosReducer = (todos: Todo[], action: TodosAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(todos, action.text);
    case "TOGGLE_TODO":
      return toggleTodo(todos, action.id);
    case "REMOVE_TODO":
      return removeTodo(todos, action.id);
    case "REMOVE_DONE_TODOS":
      return removeDoneTodos(todos);
    default:
      return todos;
  }
};
