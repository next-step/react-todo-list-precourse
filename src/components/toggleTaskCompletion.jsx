function toggleTaskCompletion(index, setTodos, todos) {
  const updatedTodos = todos.map((todo, i) => {
    if (i === index) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  setTodos(updatedTodos);
}

export default toggleTaskCompletion;
