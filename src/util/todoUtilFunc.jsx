export function addTodo(todos, setTodos, todo) {
  setTodos([...todos, { id: Date.now(), text: todo, done: false }]);
}

export function deleteTodo(todos, setTodos, id) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

export function checkTodo(todos, setTodos, id) {
  setTodos(
    todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
  );
}

export function allCheckTodo(todos, setTodos, done) {
  setTodos(
    todos.map((todo) => (todo.done !== done ? { ...todo, done: done } : todo))
  );
}

export const activeNum = (todos) => {
  return todos.filter((todo) => !todo.done).length;
};

export function filterTodos(todos, filter) {
  return todos.filter((todo) => {
    if (filter === "Active") return !todo.done;
    if (filter === "Completed") return todo.done;
    return true;
  });
}

export function handleClear(todos, setTodos) {
  setTodos(todos.filter((todo) => !todo.done));
}
