export const onDeleteButtonHandler = (todoList, setTodoList, idx) => {
    setTodoList(todoList.filter((_, index) => index !== idx));
};