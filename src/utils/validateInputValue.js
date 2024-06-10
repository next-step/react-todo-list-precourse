// 입력값을 유효성 검사하여 확인합니다.
import validateTodo from "./validateTodo";

const validateInputValue = (inputValue) => {
  if (!validateTodo(inputValue)) {
    alert("할 일을 입력하세요.");
    return false;
  }
  return true;
};

export default validateInputValue;
