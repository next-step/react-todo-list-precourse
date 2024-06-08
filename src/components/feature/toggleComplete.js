const toggleComplete = (todos, setTodos, index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  
  export default toggleComplete;
  