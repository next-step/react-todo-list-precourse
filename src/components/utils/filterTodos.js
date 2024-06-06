function filterTodos (todoList, filter) {
    return todoList.filter((todoItem) => {
      if (filter === "all") return true;
      if (filter === "active") return !todoItem.checked;
      if (filter === "completed") return todoItem.checked;
    });
}

export default filterTodos