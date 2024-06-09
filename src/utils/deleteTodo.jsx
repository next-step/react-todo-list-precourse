const deleteTodo = (index, todos, setTodos) => {
  console.log("Deleting todo at index:", index);
  setTodos(todos.filter((_, i) => i !== index));
};

export default deleteTodo;
