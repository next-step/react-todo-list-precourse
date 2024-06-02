// input 도구 
export const handleAddTodo = (input, addTodo, setInput) => {
  addTodo(input);
  setInput('');
};

