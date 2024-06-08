const addTodo = (todos, setTodos, text) => {
  if (text === "") {
    alert('할 일을 입력하세요.');
  } else {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  }
};

export default addTodo;
