// src/handlers/handleSubmit.js
function handleSubmit(e, input, addTodo, setInput) {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  }
  
  export default handleSubmit;
  