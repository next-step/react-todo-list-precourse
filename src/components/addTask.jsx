function addTask(newTask, setTodos, setNewTask) {
  if (newTask.trim() !== "") {
    setTodos((todos) => [...todos, { text: newTask, completed: false }]);
    setNewTask("");
  } else {
    alert("할 일을 입력해주세요!");
  }
}

export default addTask;
