function handleOnSubmit (e, text, todoList, setTodoList, setText) {
    if (text === "") {
      alert('할 일을 입력하세요.');
      setTodoList(todoList);
    } else {
      const nextTodoList = todoList.concat({
        id: todoList.length,
        text,
        checked: false,
      });
      setTodoList(nextTodoList);
      setText("");
    }
    e.preventDefault();
  }

export default handleOnSubmit;