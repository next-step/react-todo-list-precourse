const clearCompleted = (todos, setTodos) => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };
  
  export default clearCompleted;
  