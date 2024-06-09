const deleteTodo = (index, todos, setTodos) => {
  setTodos(todos.filter((_, i) => i !== index));
};

export default deleteTodo;
