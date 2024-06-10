// toggleComplete 유틸리티 함수를 사용하여 할 일의 완료 상태를 토글하는 함수
import toggleComplete from "../utils/toggleComplete";

const toggleTodoComplete = (todos, setTodos, index) => {
  setTodos((prevTodos) => toggleComplete(prevTodos, index));
};

export default toggleTodoComplete;
