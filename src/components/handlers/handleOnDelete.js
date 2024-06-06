function handleOnDelete(id, todoList, setTodoList) {
  setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  console.log(todoList);
}

export default handleOnDelete;
