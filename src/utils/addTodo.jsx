const addTodo = (todos, inputValue) => {
  if (inputValue.trim() === "") return todos;
  return [...todos, inputValue];
};

export default addTodo;