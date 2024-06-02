export const todosReducer = (todos: Todo[], action: TodosAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, { text: action.text, done: false }];
    case "TOGGLE_TODO": {
      const newTodos = [...todos];
      newTodos[action.id].done = !newTodos[action.id].done;
      return newTodos;
    }
    case "REMOVE_TODO": {
      const newTodos = todos.filter((_, index) => index !== action.id);
      return newTodos;
    }
    case "REMOVE_DONE_TODOS": {
      const newTodos = todos.filter((todo) => !todo.done);
      return newTodos;
    }
    default:
      return todos;
  }
};
