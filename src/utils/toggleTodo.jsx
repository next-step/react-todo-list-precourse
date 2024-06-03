const toggleTodo = (index, completedTodos, setCompletedTodos) => {
  const isCompleted = completedTodos.includes(index);
  if (isCompleted) {
    setCompletedTodos(completedTodos.filter((item) => item !== index));
  } else {
    setCompletedTodos([...completedTodos, index]);
  }
};

export default toggleTodo;
