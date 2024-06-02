// input 도구 
export const handleAddTodo = (input, addTodo, setInput) => {
  addTodo(input);
  setInput('');
};

export const handleKeyPress = (e, handleAddTodo) => {
  if (e.key === 'Enter') {
    handleAddTodo();
  }
};
