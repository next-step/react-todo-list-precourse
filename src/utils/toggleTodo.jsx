const toggleTodo = (index, completedTodos, setCompletedTodos) => {
  //index의 할 일이 이미 완료된 할 일인지 확인
  const isCompleted = completedTodos.includes(index);
  if (isCompleted) {
    setCompletedTodos(completedTodos.filter((item) => item !== index));
  } else {
    setCompletedTodos([...completedTodos, index]);
  }
};

export default toggleTodo;
