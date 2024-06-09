export const TodoCount = (todos) => {
  return todos.filter((todo) => !todo.completed).length;
};
