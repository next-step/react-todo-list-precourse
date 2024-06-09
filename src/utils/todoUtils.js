export const addTodo = (setTodos) => (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };
  
  export const toggleTodo = (setTodos) => (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  export const deleteTodo = (setTodos) => (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  
  export const toggleAllTodos = (todos, setTodos) => () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !allCompleted }))
    );
  };
  
  export const clearCompleted = (setTodos) => () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };
  
  export const getFilteredTodos = (todos, filter) => {
    return todos.filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
  };
  