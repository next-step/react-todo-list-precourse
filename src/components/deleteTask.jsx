function deleteTask(index, setTodos, todos) {
  const updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos);
}

export default deleteTask;
