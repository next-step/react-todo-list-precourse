// 할 일을 삭제하는 함수
const deleteTodo = (todos, index) => todos.filter((_, idx) => idx !== index);

export default deleteTodo;
