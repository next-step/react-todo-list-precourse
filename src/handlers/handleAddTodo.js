// 할 일을 추가하는 함수
import addTodo from "../utils/addTodo";

const addTodoHandler = (todos, setTodos, todo) => {
  setTodos((prevTodos) => addTodo(prevTodos, todo));
};

export default addTodoHandler;
