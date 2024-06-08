const filterTodos = (todos, filter) => {
    return todos.filter(todo => {
      if (filter === 'all') return true;
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
    });
  };
  
  export default filterTodos;
  