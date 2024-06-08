export const getFilteredTodos = (todos: Todo[], filter: Filter) => {
  return todos.filter((todo) => {
    if (filter === "모두") return true;
    if (filter === "진행중") return !todo.done;
    if (filter === "완료") return todo.done;
  });
};

export const getRemainTodosNum = (todos: Todo[]) => {
  return todos.filter((todo) => !todo.done).length;
};
