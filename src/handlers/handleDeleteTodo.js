// 할 일을 삭제하는 함수
import deleteTodo from "../utils/deleteTodo";

const deleteTodoHandler = (todos, setTodos, index) => {
  setTodos((prevTodos) => deleteTodo(prevTodos, index));
};

export default deleteTodoHandler;
