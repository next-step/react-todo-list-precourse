function handleOnDelete (id, todoList, setTodoList) {
    setTodoList(todoList.filter(todoItem => 
      todoItem.id !== id
    ));
  };

export default handleOnDelete;