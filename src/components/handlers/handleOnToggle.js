function handleOnToggle(id, todoList, setTodoList) {
  setTodoList(
    todoList.map((todoItem) =>
      todoItem.id === id
        ? { ...todoItem, checked: !todoItem.checked }
        : todoItem
    )
  );
}

export default handleOnToggle;