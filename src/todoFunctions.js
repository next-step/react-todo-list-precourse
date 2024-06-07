export const handleNewTodoChange = (e, setNewTodo) => {
  setNewTodo(e.target.value);
};

export const handleNewTodoKeyPress = (e, addTodo, newTodo, todos, setTodos, setNewTodo) => {
  if (e.key === 'Enter') {
    addTodo(newTodo, todos, setTodos, setNewTodo);
  }
};

export const addTodo = (newTodo, todos, setTodos, setNewTodo) => {
  if (newTodo.trim() === '') return;
  const newTodoItem = createTodo(newTodo);
  setTodos([...todos, newTodoItem]);
  setNewTodo('');
};

const createTodo = (text) => ({
  id: Date.now(),
  text,
  completed: false,
});

export const toggleTodoCompletion = (id, todos, setTodos) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};

export const deleteTodo = (id, todos, setTodos) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

export const clearCompletedTodos = (todos, setTodos) => {
  setTodos(todos.filter(todo => !todo.completed));
};

export const handleToggleAll = (todos, setTodos) => {
  const allCompleted = todos.every(todo => todo.completed);
  setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
};

export const filterTodos = (todo, filter) => {
  if (filter === 'all') return true;
  if (filter === 'active') return !todo.completed;
  if (filter === 'completed') return todo.completed;
  return true;
};
