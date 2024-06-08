const deleteTodo = (todos, setTodos, index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  export default deleteTodo;
  